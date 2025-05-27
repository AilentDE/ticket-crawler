from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime, timedelta
from time import sleep as time_sleep
from urllib.parse import urlparse
from urllib.parse import parse_qs
from dotenv import load_dotenv
import os

# Enviroment
load_dotenv("./settings.txt")


class UserEnv:
    email = os.getenv("USER_EMAIL", "")
    password = os.getenv("USER_PASSWORD", "")
    if not email or not password:
        raise ValueError("USER_EMAIL or USER_PASSWORD is not set")
    print(f"[USER LOGIN]\nEmail: {email}\nPassword: {password}\n")


class JobEnv:
    production_id = os.getenv("PRODUCTION_ID", "")
    start_date = os.getenv("START_DATE", "")
    start_time = os.getenv("START_TIME", "")
    if not production_id or not start_date or not start_time:
        raise ValueError("PRODUCTION_ID, START_DATE, START_TIME is not set")
    print(
        f"[JOB]\nProduction ID: {production_id}\nStart Date: {start_date}\nStart Time: {start_time}\n"
    )


class PayCardEnv:
    type = os.getenv("PAY_CARD_TYPE", "")
    number = os.getenv("PAY_CARD_NUMBER", "")
    exp = os.getenv("PAY_CARD_EXP", "")
    cvc = os.getenv("PAY_CARD_CVC", "")
    true_pay = os.getenv("TRUE_PAY", "0")
    if not type or not number or not exp or not cvc:
        raise ValueError(
            "PAY_CARD_TYPE, PAY_CARD_NUMBER, PAY_CARD_EXP, PAY_CARD_CVC is not set"
        )
    if len(number.split("-")) != 4:
        raise ValueError(f"PAY_CARD_NUMBER is not valid: {number}")
    print(f"[PAY CARD]\nType: {type}\nNumber: {number}\nDate: {exp}\nCVC: {cvc}\n")
    print(f"[FINAL PAY ACTION]: {False if true_pay == '0' else True}")


# Driver
options = Options()

options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option("useAutomationExtension", False)

options.add_argument(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/136.0.0.0 Safari/537.36"
)
options.add_argument("--disable-blink-features=AutomationControlled")

driver = webdriver.Chrome(options=options)
driver.execute_cdp_cmd(
    "Page.addScriptToEvaluateOnNewDocument",
    {
        "source": """Object.defineProperty(navigator, 'webdriver', {get: () => undefined})""",
    },
)

# login
driver.get("https://geng.fan/login")
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "email")))

driver.find_element(By.NAME, "email").send_keys(UserEnv.email)
driver.find_element(By.NAME, "password").send_keys(UserEnv.password)
driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, "div[class*='_bgImage']"))
)

# production page
ready = False
while not ready:
    try:
        driver.get(f"https://geng.fan/shop/kr/products/{JobEnv.production_id}/option")
        WebDriverWait(driver, 1).until(
            EC.presence_of_element_located(
                (By.CSS_SELECTOR, "button[class*='ProductButton_btn']")
            )
        )
        print(f"\r{datetime.now()} - Production page ready")
        ready = True
    except Exception as e:
        print(f"\r{datetime.now()} - Waiting for production page ready...", end="")
        print(e)

# pending process
target_time = datetime.strptime(JobEnv.start_date + JobEnv.start_time, "%Y-%m-%d%H:%M")
if datetime.now() > target_time:
    pass
else:
    # Prepare for pre seconds before 10 seconds
    while datetime.now() < target_time - timedelta(seconds=10):
        time_sleep(1)
        print(f"\r{datetime.now()}", end="")

    # last refresh
    driver.refresh()

    while datetime.now() < target_time:
        print(f"\r{datetime.now()}", end="")

# start
print(f"\r{datetime.now()} - Job start!!")
# [WARNING] 重試機制不確定
while not driver.find_element(
    By.CSS_SELECTOR, "button[class*='ProductButton_btn']"
).is_enabled():
    driver.refresh()
    WebDriverWait(driver, 1).until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR, "button[class*='ProductButton_btn']")
        )
    )
driver.find_element(By.CSS_SELECTOR, "button[class*='ProductButton_btn']").click()

# checkout-1
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located(
        (By.CSS_SELECTOR, "label[class*='PaymentButtonSection_checkbox']")
    )
)

driver.find_element(
    By.CSS_SELECTOR, "label[class*='PaymentButtonSection_checkbox']"
).click()
cache_url = driver.current_url
driver.find_element(By.CSS_SELECTOR, "button[class*='PaymentButton_button']").click()

# checkout-2
WebDriverWait(driver, 10).until(EC.url_changes(cache_url))

query_params = urlparse(driver.current_url).query
token = parse_qs(query_params)["token"][0]
gtid = parse_qs(query_params)["gtid"][0]
# 直接進入信用卡輸入頁
driver.get(
    f"https://payment-gateway.tosspayments.com/pc/payment-method/card/option?token={token}&gtid={gtid}"
    f"&cardCode={'4M' if PayCardEnv.type == 'MASTER' else '4V'}"
)

# checkout-3
WebDriverWait(driver, 10).until(
    EC.presence_of_all_elements_located(
        (By.CSS_SELECTOR, "label[class*='payment-gateway-cache']")
    )
)

input_card_number_set = PayCardEnv.number.split("-")
for i, card_number in enumerate(input_card_number_set):
    driver.find_element(By.NAME, f"cardNumber.{i}").send_keys(card_number)
driver.find_element(By.NAME, "cardExpiry").send_keys(PayCardEnv.exp)
# [WARNING]寫死的label定位
driver.find_element(
    By.CSS_SELECTOR, "label[class*='payment-gateway-cache'][for='radix-:rc:']"
).click()
if PayCardEnv.true_pay != "0":
    # [WARNING]寫死的button定位
    driver.find_element(
        By.CSS_SELECTOR, "button[class*='payment-gateway-cache'][type='submit']"
    ).click()

# 等待付款完成
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located(
        (By.CSS_SELECTOR, "div[class*='payment-gateway-cache']")
    )
)
