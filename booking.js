!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "07211ebf-9672-4f26-a194-d0536a75ed7e",
        e._sentryDebugIdIdentifier = "sentry-dbid-07211ebf-9672-4f26-a194-d0536a75ed7e")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2572, 6444], {
    33470: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/shop/[shopUrlPath]/products/[productId]/option", function() {
            return r(46604)
        }
        ])
    },
    91756: function(e, t, r) {
        "use strict";
        var n = r(52322)
          , i = r(2784)
          , o = r(70957)
          , a = r(40489)
          , c = r(34482)
          , s = r.n(c);
        t.Z = e => {
            let[t,r] = (0,
            o.Z)(e.checked ?? !1);
            return (0,
            i.useEffect)( () => {
                r(e.checked)
            }
            , [e.checked]),
            (0,
            n.jsxs)("label", {
                className: (0,
                a.Z)(s().container, {
                    [s().checked]: t,
                    [s().disabled]: e.disabled
                }),
                children: [(0,
                n.jsx)("span", {
                    className: (0,
                    a.Z)(s().thumb, {
                        [s().checked]: t,
                        [s().disabled]: e.disabled
                    })
                }), (0,
                n.jsx)("input", {
                    type: "checkbox",
                    checked: t,
                    hidden: !0,
                    disabled: e.disabled,
                    onChange: n => {
                        if (e.disabled)
                            return;
                        let {checked: i} = n.target;
                        e.onValidate && (i = e.onValidate(i, n)),
                        r(i),
                        t !== i && e.onChange?.(i, n)
                    }
                })]
            })
        }
    },
    98369: function(e, t, r) {
        "use strict";
        var n = r(52322)
          , i = r(2784)
          , o = r(40489)
          , a = r(28040)
          , c = r.n(a);
        t.Z = e => {
            let {primary: t=!1, selected: r=!1, disabled: a=!1, error: s=!1, border: l=!0, effect: u=!0, transition: d=!0, selectable: p=!0, className: _, onClick: f, children: m} = e
              , [T,S] = (0,
            i.useState)();
            return (0,
            n.jsx)("div", {
                className: (0,
                o.Z)(c().container, {
                    [c().primary]: t,
                    [c().disabled]: a,
                    [c().selected]: r,
                    [c().error]: s,
                    [c().withBorder]: l,
                    [c().withEffect]: p && u,
                    [c().withTransition]: p && d,
                    [c().withSelect]: p,
                    [c().active]: u && T
                }, _),
                onClick: e => {
                    a || f?.(e)
                }
                ,
                onMouseDown: e => {
                    let t = e.nativeEvent.target;
                    for (; t; ) {
                        if ("BUTTON" === t.nodeName)
                            return;
                        t = t.parentNode
                    }
                    S(!0);
                    let r = () => {
                        S(!1),
                        document.removeEventListener("mouseup", r)
                    }
                    ;
                    document.addEventListener("mouseup", r)
                }
                ,
                children: m
            })
        }
    },
    42508: function(e, t, r) {
        "use strict";
        var n = r(52322);
        r(2784);
        var i = r(40489)
          , o = r(6504)
          , a = r.n(o);
        t.Z = e => {
            let {prefix: t, lineThrough: r, className: o, children: c} = e;
            return (0,
            n.jsxs)("div", {
                className: (0,
                i.Z)(a().compareAtPrice, o),
                children: [t, (0,
                n.jsx)("div", {
                    className: (0,
                    i.Z)({
                        [a().lineThrough]: r
                    }),
                    children: c
                })]
            })
        }
    },
    83116: function(e, t, r) {
        "use strict";
        var n = r(52322);
        r(2784);
        var i = r(40489)
          , o = r(80595)
          , a = r.n(o);
        t.Z = e => {
            let {prefix: t, small: r, compareAtPrice: o, className: c, children: s} = e;
            return (0,
            n.jsxs)("div", {
                className: (0,
                i.Z)(a().price, {
                    [a().small]: r,
                    [a().compareAtPrice]: o
                }, c),
                children: [t, (0,
                n.jsx)("div", {
                    children: s
                })]
            })
        }
    },
    55455: function(e, t, r) {
        "use strict";
        var n = r(52322);
        r(2784);
        var i = r(97254)
          , o = r(62870)
          , a = r.n(o);
        t.Z = e => {
            let {onClick: t, disabled: r, children: o} = e;
            return (0,
            n.jsx)("div", {
                className: a().wrapper,
                children: (0,
                n.jsx)("div", {
                    className: a().container,
                    children: (0,
                    n.jsx)(i.zxk, {
                        multiline: !0,
                        className: a().btn,
                        fullWidth: !0,
                        color: i.rp$.PRIMARY,
                        size: i.qE.MD,
                        onClick: t,
                        disabled: r,
                        children: o
                    })
                })
            })
        }
    },
    27535: function(e, t, r) {
        "use strict";
        r.d(t, {
            A: function() {
                return i
            }
        });
        var n, i, o = r(52322), a = r(2784), c = r(97254), s = r(46806), l = r(46775), u = r(35400), d = r(41642), p = r(58079), _ = r(63452), f = r(80898), m = r(63141), T = r(12462);
        (n = i || (i = {})).Country = "country",
        n.AccessLimit = "access-limit",
        t.Z = () => {
            let e = (0,
            _.c)()
              , {ckt: t} = (0,
            m.Z)()
              , {goBackPage: r} = (0,
            u.V)()
              , {checkLogin: n} = (0,
            p.Z)()
              , [,i] = (0,
            f.P)(d.U.REFERRER_LINK, "")
              , S = (0,
            a.useCallback)( () => {
                r(T.Z5.root)
            }
            , [])
              , h = () => {
                n(t("S02667", "로그인 후 확인할 수 있어요. 로그인 할까요?")) && e.push(T.Z5.my)
            }
              , {title: N, button: E} = (0,
            a.useMemo)( () => {
                let r, n;
                switch (e.query?.type) {
                case "country":
                    r = t("S02218", "이 콘텐츠는 해당 국가/지역에서 이용할 수 없어요.");
                    break;
                case "access-limit":
                    r = t("S02666", "잘못된 접근입니다.\n접속한 계정을 확인해주세요."),
                    n = (0,
                    o.jsx)(s.ZP, {
                        variant: s.Wu.OUTLINED,
                        color: s.rp.SUB,
                        onClick: h,
                        children: t("B00199", "계정 확인하기")
                    });
                    break;
                default:
                    r = t("S02668", "권한이 없습니다.")
                }
                return {
                    title: r,
                    button: n
                }
            }
            , [e.query?.type, t]);
            return (0,
            a.useEffect)( () => {
                i(e.query?.referrer)
            }
            , [e.query?.referrer]),
            (0,
            o.jsx)(l.Z, {
                onClickBack: S,
                menuNaviType: c.vZ6.UTILITY,
                widthType: c.O_Z.NARROW,
                children: (0,
                o.jsx)(c.HYy, {
                    message: N,
                    buttons: E
                })
            })
        }
    },
    46775: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return S
            }
        });
        var n = r(52322)
          , i = r(2784)
          , o = r(25237)
          , a = r.n(o)
          , c = r(40489)
          , s = r(97254)
          , l = r(71450)
          , u = r.n(l)
          , d = e => {
            let {percent: t} = e;
            return (0,
            n.jsx)("div", {
                className: u().wrapper,
                children: (0,
                n.jsx)("div", {
                    className: u().progress,
                    style: {
                        width: `${t}%`
                    }
                })
            })
        }
          , p = r(36095)
          , _ = r(87689)
          , f = r(58967)
          , m = r.n(f);
        let T = a()( () => Promise.all([r.e(1824), r.e(8524), r.e(6577), r.e(4388)]).then(r.bind(r, 24388)), {
            loadableGenerated: {
                webpack: () => [24388]
            },
            ssr: !1
        });
        var S = (0,
        i.forwardRef)( (e, t) => {
            let {enableSendLog: r, className: i, contentsWrapperClassName: o, contentsClassName: a, children: l, bottomBar: u, progress: f, zIndex: S, contentWrapperAutoOverflow: h=!0, topGuideLabel: N, menuNaviType: E=s.vZ6.HOME, widthType: I=s.O_Z.WIDE, onClickBack: v, right: A, title: O, titleClassName: y, titleType: k="default", hideTitleMarginBottom: P=!1, isWidePage: b=!1, enablePaddingTop: x=!0, enablePaddingX: g=!0, ...C} = e
              , {isEmbedApp: D} = (0,
            p.T)()
              , G = _.M$()?.hideGnb;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("section", {
                    ref: t,
                    className: (0,
                    c.Z)(m().container, i),
                    ...C,
                    children: [!G && (0,
                    n.jsx)(T, {
                        naviType: E,
                        widthType: I === s.O_Z.NARROW ? s.O_Z.WIDE : I,
                        onClickBack: v,
                        utilityButton: A,
                        enableSendLog: r,
                        children: f > 0 && (0,
                        n.jsx)("div", {
                            className: m().progressWrapper,
                            children: (0,
                            n.jsx)(d, {
                                percent: f
                            })
                        })
                    }), N && (0,
                    n.jsx)("div", {
                        className: m().topGuideLabel,
                        children: N
                    }), (0,
                    n.jsx)("div", {
                        className: (0,
                        c.Z)(m().contentsWrapper, o, {
                            [m().hasBottomBar]: !!u,
                            [m().overflowAuto]: h
                        }),
                        style: {
                            zIndex: S
                        },
                        children: (0,
                        n.jsxs)("div", {
                            className: (0,
                            c.Z)(m().contents, a, {
                                [m().widePage]: b,
                                [m().paddingTop]: x,
                                [m().paddingX]: g
                            }),
                            children: [O && "default" === k && (0,
                            n.jsx)("div", {
                                className: (0,
                                c.Z)(m().title, {
                                    [m().hideTitleMarginBottom]: P
                                }, y),
                                children: O
                            }), l]
                        })
                    }), !D && u && (0,
                    n.jsx)("div", {
                        className: m().bottomBar,
                        children: u
                    })]
                })
            })
        }
        )
    },
    66606: function(e, t, r) {
        "use strict";
        r.d(t, {
            Bx: function() {
                return R
            },
            F0: function() {
                return H
            },
            H1: function() {
                return C
            },
            IU: function() {
                return L
            },
            JU: function() {
                return p
            },
            L1: function() {
                return l
            },
            LU: function() {
                return K
            },
            Mk: function() {
                return j
            },
            Q3: function() {
                return O
            },
            QZ: function() {
                return $
            },
            RR: function() {
                return I
            },
            So: function() {
                return M
            },
            T_: function() {
                return k
            },
            Wb: function() {
                return P
            },
            _$: function() {
                return d
            },
            cD: function() {
                return u
            },
            dE: function() {
                return N
            },
            e: function() {
                return s
            },
            gu: function() {
                return w
            },
            j7: function() {
                return y
            },
            kK: function() {
                return h
            },
            ke: function() {
                return E
            },
            lB: function() {
                return B
            },
            lJ: function() {
                return Z
            },
            mV: function() {
                return x
            },
            mj: function() {
                return c
            },
            n8: function() {
                return A
            },
            qS: function() {
                return g
            },
            rc: function() {
                return T
            },
            sB: function() {
                return D
            },
            sO: function() {
                return _
            },
            ti: function() {
                return S
            },
            u8: function() {
                return v
            },
            xJ: function() {
                return f
            },
            yQ: function() {
                return m
            },
            zB: function() {
                return G
            },
            zX: function() {
                return b
            }
        });
        var n = r(74660)
          , i = r(14643)
          , o = r(81464)
          , a = r(27298);
        let c = 1
          , s = 999
          , l = -1007
          , u = [n.SQ.KO, n.SQ.JA, n.SQ.ZH_CN, n.SQ.ZH_TW]
          , d = [i.M.KR, i.M.JP]
          , p = -722e4
          , _ = -7155e3
          , f = -7320002
          , m = -7320001
          , T = [-7321002, -7321003, -7321004]
          , S = -7320010
          , h = -7321021
          , N = -7321014
          , E = -7321010
          , I = -7321017
          , v = -7321030
          , A = -7320031
          , O = -7320032
          , y = -7320033
          , k = -7320034
          , P = -7321016
          , b = -7320004
          , x = -7321023
          , g = -715e4
          , C = -7321026
          , D = -7320039
          , G = -7321032
          , j = -7501008
          , Z = [-7301001, -7301004]
          , M = [a.kv.MEMBERSHIP, a.kv.MEMBERSHIP_SEASON]
          , w = "MEMBERSHIP_PRODUCT_ID_"
          , B = [a.kv.PASS, a.kv.PASS_SEASON, a.kv.PASS_SUBSCRIPTION, a.kv.MEMBERSHIP, a.kv.MEMBERSHIP_SEASON]
          , R = [a.kv.POP_PASS_SUBSCRIPTION, a.kv.POP_PASS_SEASON]
          , H = [a.kv.SEASON_TICKET, a.kv.DATE_TICKET, a.kv.DATETIME_TICKET]
          , K = [o.LS.PAID, o.LS.CONFIRMED]
          , L = [a.kv.POP_PASS_SUBSCRIPTION, a.kv.POP_PASS_SEASON, a.kv.PASS_SEASON, a.kv.PASS_SUBSCRIPTION, a.kv.MEMBERSHIP, a.kv.MEMBERSHIP_SEASON]
          , $ = [o.lP.TOSS_PAYMENTS, o.lP.PAYPAL, o.lP.STRIPE, o.lP.STRIPE_KONBINI, o.lP.EXIMBAY];
        o.GV.NAME,
        o.GV.BIRTH_DATE,
        o.GV.PHONE_NUMBER
    },
    89062: function(e, t, r) {
        "use strict";
        r.d(t, {
            Y: function() {
                return v
            }
        });
        var n = r(27535)
          , i = r(11216)
          , o = r(85329)
          , a = r(97504)
          , c = r(39994)
          , s = r(12462);
        r(95213);
        var l = r(42691);
        globalThis?.setImmediate || (globalThis.setImmediate = setTimeout);
        let {combine: u, timestamp: d, colorize: p, json: _, printf: f} = l.format
          , m = {
            format: u(d({
                format: "YYYY/MM/DD HH:mm:ss.SSS"
            }), p(), _(), f(e => `[${e.timestamp}][${e.level}] ${e.message}`))
        }
          , T = (0,
        l.createLogger)({
            ...m,
            transports: [new l.transports.Console({
                level: "debug"
            })]
        })
          , S = e => {
            let t = typeof e;
            if ("object" === t || "function" === t)
                try {
                    return JSON.stringify(e)
                } catch (r) {
                    let t = [];
                    return JSON.stringify(e, (e, r) => {
                        if ("object" == typeof r && null !== r) {
                            if (-1 !== t.indexOf(r))
                                return;
                            t.push(r)
                        }
                        return r
                    }
                    , 2)
                }
            return e
        }
          , h = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            let n = ""
              , i = t.length;
            return 1 === i ? `${S(t[0])}` : (i > 1 && t.forEach( (e, t) => {
                n += `${S(e)}${t !== i && ","}`
            }
            ),
            n)
        };
        var N = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            T.log.apply(T, ["error", h(...t)])
        }
          , E = r(86070)
          , I = r(74059);
        let v = (e, t, r, l) => {
            let u;
            let d = e.req?.headers?.[i.lK];
            switch (l = {
                errorPage: (0,
                E.gC)(s.Z5.root, t),
                ...l
            },
            N(`[redirectOnFetcherError][tier:${d}] : ${JSON.stringify(r, null, 2)}`),
            r.status) {
            case 401:
                u = d === c.K0.MNETPLUS ? (0,
                I.Wh)(e.resolvedUrl) : (0,
                s.RM)(e.resolvedUrl);
                break;
            case 403:
                u = (0,
                E.gC)((0,
                s.lS)(s.Z5.forbidden, {
                    type: -1010 === r.info.code ? n.A.Country : ""
                }), t);
                break;
            case 404:
                u = (0,
                E.gC)(s.Z5.notFound, t);
                break;
            default:
                if (r?.info?.code === o.mR.NEED_BRANCH_CONNECT) {
                    u = (0,
                    E.gC)(s.Z5.connectBranch, t);
                    break
                }
                u = l.errorPage ?? (0,
                s.lS)((0,
                E.gC)(s.Z5.networkError, t), {
                    url: t.ctxOrCookie?.resolvedUrl ?? ""
                })
            }
            return console.error(`[ERROR][${t.id}][${t.getCookie(a.yV.SPACE_ID)}][${r.status}] Before redirect to ${u}, error ${JSON.stringify(r)}`),
            {
                redirect: {
                    destination: u,
                    permanent: !1
                }
            }
        }
    },
    56080: function(e, t, r) {
        "use strict";
        r.d(t, {
            q: function() {
                return i
            }
        });
        var n = r(60104);
        function i(e) {
            if (!e || !e.isError)
                return !1;
            let t = e.error?.status
              , r = e.error?.info?.code;
            return 400 === t && r === n.di || (console.info(`[APP] Check refresh token failed : ${t}, ${r}`),
            401 === t && r === n.NV)
        }
    },
    46604: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSP: function() {
                return en
            },
            default: function() {
                return ei
            }
        });
        var n = r(52322)
          , i = r(85181)
          , o = r(2784)
          , a = r(97729)
          , c = r.n(a)
          , s = r(97254)
          , l = r(40489)
          , u = r(28879)
          , d = r.n(u)
          , p = r(44527)
          , _ = r(96330)
          , f = r(94257)
          , m = r(2263)
          , T = r(91756)
          , S = r(98369)
          , h = r(99431)
          , N = r(42508)
          , E = r(83116)
          , I = r(55455)
          , v = r(72378)
          , A = r(35706)
          , O = r(93136)
          , y = r.n(O)
          , k = e => {
            let {month: t, ...r} = e
              , [i,a] = (0,
            o.useState)(new Date);
            return (0,
            n.jsxs)("div", {
                className: y().container,
                children: [(0,
                n.jsx)("div", {
                    className: y().title,
                    children: t
                }), (0,
                n.jsx)(A.ZP, {
                    className: y().calendar,
                    onChange: e => a(e),
                    value: i,
                    calendarType: "US",
                    formatDay: (e, t) => d()(t).format("D"),
                    showNeighboringMonth: !1,
                    showNavigation: !1,
                    ...r
                })]
            })
        }
          , P = r(22219)
          , b = r(67405)
          , x = r(9590)
          , g = r(12139)
          , C = r(81202)
          , D = r(68212)
          , G = r(53416)
          , j = r(78964)
          , Z = r.n(j)
          , M = e => {
            let {monthList: t=[], availableDateList: r=[], defaultClosestDateSelected: i=!1, onChange: a} = e
              , {language: c} = (0,
            D.Z)()
              , {sendLogEventV1: s} = (0,
            C.ZP)()
              , [u,p] = (0,
            o.useState)(null)
              , _ = (0,
            o.useMemo)( () => (0,
            G.Ed)(b.Tu[c]), [c]);
            (0,
            o.useEffect)( () => {
                a(u)
            }
            , [u]),
            (0,
            o.useEffect)( () => {
                if (!r.length || !i)
                    return;
                let e = d()().format("YYYY.MM.DD")
                  , t = r.map(t => {
                    let r = d()(t).diff(e, "day");
                    return {
                        date: t,
                        diff: Math.abs(r),
                        isFuture: r >= 0
                    }
                }
                )
                  , n = (0,
                v.Z)(t, ["isFuture", "diff"], ["desc", "asc"]);
                p(d()(n?.[0]?.date).toDate())
            }
            , [r, i]);
            let f = e => {
                p(e),
                s({
                    action: g.jH.CLICK,
                    to: g.Uz.CALENDAR,
                    properties: {
                        screenId: x.A.S_SHO_TD_02,
                        section: "calendarSection",
                        item: g.Uz.CALENDAR,
                        value: {
                            name: d()(e).format(P.QR)
                        }
                    }
                })
            }
            ;
            return (0,
            n.jsxs)("div", {
                className: Z().container,
                children: [(0,
                n.jsx)("div", {
                    className: (0,
                    l.Z)(Z().weekdays, {
                        [Z().hasScroll]: t.length > 1
                    }),
                    children: _.map(e => (0,
                    n.jsx)("span", {
                        className: Z().day,
                        children: e
                    }, e))
                }), (0,
                n.jsx)("div", {
                    className: Z().calendars,
                    children: t.map(e => {
                        let[t,i] = e.split(".");
                        return (0,
                        n.jsx)(k, {
                            month: e,
                            activeStartDate: d()().set("year", parseInt(t, 10)).set("month", parseInt(i, 10) - 1).toDate(),
                            onClickDay: f,
                            value: u,
                            tileDisabled: e => {
                                let {date: t} = e
                                  , n = d()(t).format(P.zT);
                                return !r.includes(n)
                            }
                        }, i)
                    }
                    )
                })]
            })
        }
          , w = r(27298)
          , B = r(58079)
          , R = r(87459)
          , H = r(63141)
          , K = r(30852)
          , L = r(49344)
          , $ = r(24199)
          , U = r.n($)
          , F = e => {
            let {optionDetail: t} = e
              , {ckt: r} = (0,
            H.Z)()
              , i = (0,
            K.Z)()
              , {checkLogin: a} = (0,
            B.Z)()
              , {checkout: c} = (0,
            R.Z)()
              , {setBottom: u, clearBottom: v} = (0,
            s.V6$)()
              , {sendLogEventV1: A} = (0,
            C.ZP)()
              , [O,y] = (0,
            o.useState)(null)
              , [k,b] = (0,
            o.useState)(!0)
              , [D,j] = (0,
            o.useState)(null)
              , [Z,$] = (0,
            o.useState)(null)
              , [F,Y] = (0,
            o.useState)(!1)
              , [z,W] = (0,
            o.useState)(null)
              , V = (0,
            o.useMemo)( () => t.productType === w.kv.SEASON_TICKET || t.optionGroup.parent.type !== w.GN.DATE ? null : {
                monthList: t.optionGroup.children.map(e => d()((0,
                G.Ps)(e.name)).format("YYYY.MM")).reduce( (e, t) => e.includes(t) ? e : [...e, t], []),
                availableDateList: t.optionGroup.children.map(e => e.name),
                eventStartAt: t.eventStartAt,
                eventEndAt: t.eventEndAt
            }, [t])
              , J = (0,
            o.useMemo)( () => {
                if (!(0,
                _.Z)(t?.cancelablePeriodMinutes))
                    return "";
                let e = (0,
                G.mY)(Math.abs(t.cancelablePeriodMinutes), r);
                return t.cancelablePeriodMinutes < 0 ? r("S02100", `취소 가능 기한: 행사 시작 ${e} 전까지`, {
                    str: e
                }) : r("S02101", `취소 가능 기한: 행사 시작 후 ${e} 까지`, {
                    str: e
                })
            }
            , [r, t?.cancelablePeriodMinutes]);
            (0,
            o.useEffect)( () => () => {
                y(null)
            }
            , []),
            (0,
            o.useEffect)( () => {
                t && (t.productType === w.kv.SEASON_TICKET && t.hasDefaultOption ? (b(t.options[0].outOfStock),
                y(t.options[0])) : (b(!0),
                y(null),
                j(null)),
                t.optionGroup?.parent?.type && $({
                    [t.optionGroup.parent.type]: t
                }))
            }
            , [t]),
            (0,
            o.useEffect)( () => {
                if (i)
                    return u(92),
                    () => {
                        v()
                    }
            }
            , [i]);
            let X = async (e, r) => {
                b(!0);
                let n = {}
                  , i = {}
                  , o = "";
                switch (e) {
                case w.GN.DATE:
                    n[e] = r,
                    i[e] = Z[e],
                    o += `optionGroupKey1=${r}`;
                    break;
                case w.GN.TIME:
                    n[w.GN.DATE] = D[w.GN.DATE],
                    n[e] = r,
                    i[w.GN.DATE] = Z[w.GN.DATE],
                    i[w.GN.TIME] = Z[w.GN.TIME],
                    o += `optionGroupKey1=${D[w.GN.DATE]}&optionGroupKey2=${r}`
                }
                let a = await (0,
                L.e8)({
                    id: t.productId,
                    ...o && {
                        optionGroupKeys: `?${o}`
                    }
                });
                a.isSuccess && (j({
                    ...n,
                    [e]: r
                }),
                a.data.optionGroup?.parent?.type === "STRING" ? W(a.data.optionGroup?.parent?.name) : W(null),
                a.data.optionGroup?.parent?.type && $({
                    ...i,
                    [a.data.optionGroup.parent.type]: a.data
                }))
            }
              , q = (e, r) => {
                if (A({
                    action: g.jH.CLICK,
                    to: g.Uz.TIME_OPTION,
                    properties: {
                        screenId: x.A.S_SHO_TD_02,
                        section: "ticketOptionSection",
                        item: g.Uz.TIME_OPTION,
                        value: {
                            name: r,
                            id: e
                        }
                    }
                }),
                Z[w.GN.TIME].isLast) {
                    let r = {
                        [w.GN.DATE]: D[w.GN.DATE],
                        [w.GN.TIME]: e
                    }
                      , n = Object.values(r)
                      , i = t.options.find(e => (0,
                    p.Z)(e?.optionGroupKeys, n)) || Z?.[w.GN.TIME]?.options.find(e => p.Z(n, e.optionGroupKeys));
                    if (!i)
                        return;
                    y(i),
                    b(i.outOfStock),
                    j(r);
                    return
                }
                X(w.GN.TIME, e)
            }
              , Q = (e, r) => {
                let n = e.length - 1;
                if (A({
                    action: g.jH.CLICK,
                    to: g.Uz.PRICE_OPTION,
                    properties: {
                        screenId: x.A.S_SHO_TD_02,
                        section: "ticketOptionSection",
                        item: g.Uz.PRICE_OPTION,
                        value: {
                            name: r.name.split(" / ")[n],
                            id: e[n]
                        }
                    }
                }),
                Z[w.GN.STRING].isLast) {
                    let r = t.options.find(t => (0,
                    p.Z)(t?.optionGroupKeys, e)) || Z[w.GN.STRING].options.find(t => (0,
                    p.Z)(t?.optionGroupKeys, e));
                    if (!r)
                        return;
                    let n = {
                        ...D?.[w.GN.DATE] && {
                            [w.GN.DATE]: D[w.GN.DATE]
                        },
                        ...D?.[w.GN.TIME] && {
                            [w.GN.TIME]: D[w.GN.TIME]
                        },
                        [w.GN.STRING]: r.optionGroupKeys[r.optionGroupKeys.length - 1]
                    };
                    b(!(0,
                    p.Z)(Object.values(n), e)),
                    j(n);
                    return
                }
            }
              , {timezoneAbbrev: ee, timezoneOffset: et} = (e => {
                let t = f.find(t => t.timezone === e);
                return {
                    timezoneAbbrev: t.abbrev,
                    timezoneOffset: t.offset
                }
            }
            )(t.timezone)
              , er = e => {
                let t = e.split(" / ");
                return t?.[t.length - 1] ?? ""
            }
              , en = async () => {
                if (A({
                    action: g.jH.CLICK,
                    to: g.Uz.PURCHASE_BTN,
                    properties: {
                        screenId: x.A.S_SHO_TD_02,
                        section: "bottom",
                        item: g.Uz.PURCHASE_BTN,
                        value: {
                            id: t.productId,
                            type: g.er.PRODUCT
                        }
                    }
                }),
                !a())
                    return;
                let e = [w.GN.DATE, w.GN.TIME, w.GN.STRING]
                  , r = [];
                e.forEach(e => {
                    D?.[e] && r.push(D[e])
                }
                );
                let n = t.options.find(e => (0,
                p.Z)(e?.optionGroupKeys, r)) || Object.values(Z).find(e => e.isLast)?.options.find(e => p.Z(e?.optionGroupKeys, r));
                n && c({
                    inventoryItemAndQuantities: [{
                        inventoryItemId: n.inventoryItemId,
                        quantity: 1,
                        unitPrice: n.price,
                        paymentOptionId: n.paymentOptionId
                    }]
                }, [t.productId], t.productType)
            }
              , ei = () => f.find(e => e.timezone === t.timezone)
              , eo = () => ei().offset.split("GMT").join("")
              , ea = e => {
                let t = Z?.[w.GN.DATE]?.optionGroup?.children?.find(e => e.key === D?.[w.GN.DATE])
                  , n = d()(`${t.name} ${e} ${eo()}`, "YYYY.MM.DD HH:mm Z").local()
                  , i = d()(t.name)
                  , o = n.format("HH:mm");
                return n.date() === i.date() ? o : n.diff(i, "day", !0) > 0 ? `${r("S02042", "다음날")} ${o}` : `${r("S02222", "전날")} ${o}`
            }
            ;
            return (0,
            n.jsxs)("section", {
                className: U().contents,
                children: [Z?.[w.GN.DATE] && (0,
                n.jsx)(M, {
                    monthList: V?.monthList,
                    availableDateList: V?.availableDateList,
                    onChange: e => {
                        let r = d()(e).format(P.zT)
                          , n = t.optionGroup.children.find(e => e.name === r);
                        if (!n?.key) {
                            j(null),
                            $({
                                [t.optionGroup.parent.type]: t
                            });
                            return
                        }
                        if (t.isLast) {
                            let e = t.options.find(e => (0,
                            p.Z)(e?.optionGroupKeys, [n?.key]));
                            if (!e)
                                return;
                            y(e),
                            b(e.outOfStock),
                            j({
                                [w.GN.DATE]: n.key
                            });
                            return
                        }
                        D?.[w.GN.DATE] !== n.key && X(w.GN.DATE, n.key)
                    }
                    ,
                    defaultClosestDateSelected: !0
                }), (0,
                n.jsxs)("div", {
                    className: U().optionWrapper,
                    children: [Z?.[w.GN.TIME] && (0,
                    n.jsxs)(n.Fragment, {
                        children: [!( () => {
                            let e = ei()
                              , t = eo()
                              , r = d()(`2022/01/01 00:00 ${t}`, "YYYY/MM/DD HH:mm Z").tz(e.timezone);
                            return r?.utcOffset() === d()()?.utcOffset()
                        }
                        )() && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsxs)("div", {
                                className: U().matchLocale,
                                children: [(0,
                                n.jsx)("span", {
                                    children: r("S02041", "내 시간대로 보기")
                                }), (0,
                                n.jsx)(T.Z, {
                                    checked: F,
                                    onChange: e => {
                                        A({
                                            action: g.jH.CLICK,
                                            properties: {
                                                screenId: x.A.S_SHO_TD_02,
                                                section: "timezoneToggleSection",
                                                item: g.Uz.TIMEZONE_BTN,
                                                value: {
                                                    toggle: e ? "on" : "off"
                                                }
                                            },
                                            to: g.Uz.TIMEZONE_BTN
                                        }),
                                        Y(e)
                                    }
                                })]
                            }), (0,
                            n.jsx)(m.ZP, {
                                margin: m.Fl.MG_8
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: U().time,
                            children: [(0,
                            n.jsx)("div", {
                                className: U().title,
                                children: r("S02027", "회차를 선택해주세요")
                            }), (0,
                            n.jsx)("div", {
                                className: U().timeButtons,
                                children: Z[w.GN.TIME].optionGroup.children.map(e => (0,
                                n.jsx)(S.Z, {
                                    className: (0,
                                    l.Z)(U().timeButton),
                                    selected: e.key === D?.[w.GN.TIME],
                                    disabled: e.outOfStock,
                                    onClick: () => q(e.key, e.name),
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: U().timeText,
                                        children: [e.outOfStock ? r("C00132", "[품절]") + " " : "", F && t.productType === w.kv.DATETIME_TICKET ? ea(e.name) : e.name]
                                    })
                                }, e.key))
                            })]
                        })]
                    }), (Z?.[w.GN.STRING]?.options?.length > 0 || O) && (0,
                    n.jsxs)(n.Fragment, {
                        children: [Z?.[w.GN.TIME] && (0,
                        n.jsx)(m.ZP, {
                            margin: m.Fl.MG_8
                        }), (0,
                        n.jsxs)("div", {
                            className: U().string,
                            children: [(0,
                            n.jsx)("div", {
                                className: U().title,
                                children: z || r("S02030", "상품을 선택해주세요")
                            }), (0,
                            n.jsxs)("div", {
                                className: U().stringButtons,
                                children: [O && (0,
                                n.jsxs)(S.Z, {
                                    className: U().box,
                                    selected: !0,
                                    disabled: O.outOfStock,
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: U().title,
                                        children: `${O.outOfStock ? r("C00132", "[품절]") : ""}${O.outOfStock ? " " : ""}${t.productName}`
                                    }), (0,
                                    n.jsx)("div", {
                                        className: U().itemOption,
                                        children: (0,
                                        n.jsxs)("div", {
                                            className: U().priceInfo,
                                            children: [O.captureType !== w.TG.AUTHENTICATION && O.compareAtPrice && (0,
                                            n.jsx)(N.Z, {
                                                lineThrough: !0,
                                                className: U().price,
                                                children: (0,
                                                n.jsx)(h.Z, {
                                                    price: O.compareAtPrice
                                                })
                                            }), O.captureType !== w.TG.AUTHENTICATION && O.price && (0,
                                            n.jsx)(E.Z, {
                                                compareAtPrice: !!O.compareAtPrice,
                                                children: (0,
                                                n.jsx)(h.Z, {
                                                    price: O.price
                                                })
                                            }), O.captureType === w.TG.AUTHENTICATION && (0,
                                            n.jsx)("div", {
                                                className: U().price,
                                                children: r("S01753", "토큰/NFT 인증 전용")
                                            })]
                                        })
                                    })]
                                }), !O && Z[w.GN.STRING].options.map(e => (0,
                                n.jsxs)(S.Z, {
                                    className: U().box,
                                    selected: e.optionGroupKeys?.includes(D?.[w.GN.STRING]),
                                    disabled: e.outOfStock,
                                    onClick: () => Q(e.optionGroupKeys, e),
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: U().title,
                                        children: `${e.outOfStock ? r("C00132", "[품절]") : ""}${e.outOfStock ? " " : ""}${er(e.name)}`
                                    }), (0,
                                    n.jsx)("div", {
                                        className: U().itemOption,
                                        children: (0,
                                        n.jsxs)("div", {
                                            className: U().priceInfo,
                                            children: [e.captureType !== w.TG.AUTHENTICATION && e.compareAtPrice && (0,
                                            n.jsx)(N.Z, {
                                                lineThrough: !0,
                                                className: U().price,
                                                children: (0,
                                                n.jsx)(h.Z, {
                                                    price: e.compareAtPrice
                                                })
                                            }), e.captureType !== w.TG.AUTHENTICATION && e.price && (0,
                                            n.jsx)(E.Z, {
                                                compareAtPrice: !!e.compareAtPrice,
                                                children: (0,
                                                n.jsx)(h.Z, {
                                                    price: e.price
                                                })
                                            }), e.captureType === w.TG.AUTHENTICATION && (0,
                                            n.jsx)("div", {
                                                className: U().price,
                                                children: r("S01753", "토큰/NFT 인증 전용")
                                            })]
                                        })
                                    })]
                                }, e.inventoryItemId))]
                            })]
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: U().itemDescription,
                        children: (0,
                        n.jsxs)("ul", {
                            children: [(0,
                            n.jsx)("li", {
                                children: r("S02028", `본 행사는 ${t.timezone}⎜${ee} (${et}) 기준으로 진행됩니다.`, {
                                    str1: t.timezone,
                                    str2: ee,
                                    str3: et
                                })
                            }), (0,
                            n.jsx)("li", {
                                children: r("S02029", "한 번에 1개만 구매할 수 있어요.")
                            }), (0,
                            n.jsx)("li", {
                                children: t.productType === w.kv.SEASON_TICKET ? r("S02031", "1인당 1개만 구매할 수 있어요.") : t.productType === w.kv.DATE_TICKET ? r("S02032", "날짜별로 1인당 1개만 구매할 수 있어요.") : r("S02033", "회차별로 1인당 1개만 구매할 수 있어요.")
                            }), t.productType === w.kv.SEASON_TICKET ? t?.cancelableEndAt && (0,
                            n.jsx)("li", {
                                children: r("S02034", `${d().utc(t?.cancelableEndAt).tz(t?.timezone).local().format(G.a1)}부터 취소할 수 없어요.`, {
                                    str1: d().utc(t?.cancelableEndAt).tz(t?.timezone).local().format(G.a1)
                                })
                            }) : J && (0,
                            n.jsx)("li", {
                                children: J
                            })]
                        })
                    })]
                }), (0,
                n.jsx)("div", {
                    className: U().bottomButtonWrapper,
                    children: (0,
                    n.jsx)("div", {
                        className: U().buttonWrapper,
                        children: (0,
                        n.jsx)(I.Z, {
                            onClick: en,
                            disabled: k,
                            children: r("S01270", "구매하기")
                        })
                    })
                })]
            })
        }
          , Y = r(46775)
          , z = e => {
            let {optionDetail: t} = e
              , {ckt: r} = (0,
            H.Z)()
              , i = (0,
            K.Z)();
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(c(), {
                    children: [(0,
                    n.jsx)("title", {
                        children: t.productName
                    }), (0,
                    n.jsx)("meta", {
                        property: "og:title",
                        content: t.productName
                    }, "og-title")]
                }), (0,
                n.jsx)(Y.Z, {
                    enablePaddingTop: !1,
                    titleType: "topBar",
                    enablePaddingX: !1,
                    widthType: s.O_Z.NARROW,
                    menuNaviType: s.vZ6.UTILITY,
                    ...i && {
                        title: r("B00063", "구매하기"),
                        right: (0,
                        n.jsx)("div", {
                            style: {
                                width: 40,
                                marginLeft: 4
                            }
                        })
                    },
                    children: (0,
                    n.jsx)(F, {
                        optionDetail: t
                    })
                })]
            })
        }
          , W = r(27535)
          , V = r(66606)
          , J = r(97504)
          , X = r(89062)
          , q = r(488)
          , Q = r(56080)
          , ee = r(12462)
          , et = r(86070)
          , er = r(16444);
        (0,
        i.wN)(async (e, t, r) => {
            let {productId: n} = e.params;
            if (!n)
                return (0,
                et.I0)(t, ee.Z5.notFound);
            let i = await (0,
            L.e8)({
                id: n
            }, {
                fetcher: r
            });
            if ((0,
            Q.q)(i) && (t.removeCookies([J.yV.ACCESS_TOKEN, J.yV.REFRESH_TOKEN]),
            i = await (0,
            L.e8)({
                id: n
            }, {
                fetcher: r
            })),
            i.isSuccess)
                return {
                    props: {
                        optionDetail: i.data
                    }
                };
            if (i.error.info?.code === V.JU) {
                let e = (0,
                er.Hw)(t);
                return (0,
                et.I0)(t, (0,
                ee.Du)(ee.Z5.shopProductDetailAccessDenied, e, n))
            }
            if (i.error.info?.code === V.qS) {
                let e = (0,
                er.Hw)(t);
                return (0,
                et.I0)(t, (0,
                ee.lS)(ee.Z5.forbidden, {
                    type: W.A.AccessLimit,
                    referrer: (0,
                    ee.Du)(ee.Z5.shopProductTicketOptionDetail, e, n)
                }))
            }
            return (0,
            X.Y)(e, t, i.error)
        }
        , q.lE);
        var en = !0
          , ei = e => {
            let {optionDetail: t} = e;
            return (0,
            n.jsx)(z, {
                optionDetail: t
            })
        }
    },
    49344: function(e, t, r) {
        "use strict";
        r.d(t, {
            e8: function() {
                return o
            },
            im: function() {
                return a
            },
            lB: function() {
                return u
            },
            pd: function() {
                return c
            },
            sF: function() {
                return s
            },
            wv: function() {
                return i
            },
            xb: function() {
                return l
            }
        });
        var n = r(61278);
        let i = (0,
        n.F)( (e, t, r, n) => {
            let {fetcher: i} = t
              , o = "";
            return r && n && (o = `?type=EVENT_SESSION&attributeKey1=${r}&attributeKey2=${n}`),
            i.get(`/shop/api/v1/products/${e}${o}`)
        }
        )
          , o = (0,
        n.F)( (e, t) => {
            let {fetcher: r} = t;
            return r.get(`/shop/api/v1/products/${e.id}/options${e?.optionGroupKeys ?? ""}`)
        }
        )
          , a = (0,
        n.F)( (e, t) => {
            let {fetcher: r} = t;
            return r.post("/shop/api/v1/products/digital-tickets", {
                request: e
            })
        }
        )
          , c = (0,
        n.F)( (e, t) => {
            let {fetcher: r} = t;
            return r.post("/shop/api/v1/products/memberships", {
                request: e
            })
        }
        )
          , s = (0,
        n.F)( (e, t) => {
            let {fetcher: r} = t;
            return r.get(`/shop/api/v1/inventory-item-groups/by-product/${e}`)
        }
        )
          , l = (0,
        n.F)( (e, t) => {
            let {inventoryItemGroupKey: r} = e
              , {fetcher: n} = t;
            return n.get(`/shop/api/v1/inventory-item-groups/${r}`)
        }
        )
          , u = (0,
        n.F)( (e, t) => {
            let {fetcher: r} = t;
            return r.get(`/shop/api/v1/products/${e}/digital-items?size=1`)
        }
        )
    },
    16444: function(e, t, r) {
        "use strict";
        r.d(t, {
            Fj: function() {
                return s
            },
            Hw: function() {
                return c
            },
            Y7: function() {
                return a
            }
        }),
        r(66606);
        var n = r(97504)
          , i = r(27298)
          , o = r(95098);
        let a = (e, t) => {
            switch (e) {
            case o.F.KRW:
                return t("S00810", "한국 ￦(원)");
            case o.F.USD:
                return t("S00811", "미국 $(달러)");
            case o.F.JPY:
                return t("S02706", "일본 \xa5(엔)");
            default:
                return ""
            }
        }
        ;
        function c(e) {
            return e.getCookie(n.yV.SHOP_URL) || e.getCookie(n.yV.PRIMARY_SHOP_URL)
        }
        function s(e) {
            return !(!e?.active || e?.outOfStock || [o.H8.ALREADY_PURCHASED, o.H8.DIGITAL_ITEM_UNAVAILABLE, o.H8.DIGITAL_ITEM_STAND_BY].includes(e?.userPurchaseStatus) || [i.zK.COMING_SOON, i.zK.ENDED, i.zK.OUT_OF_STOCK, i.zK.OUT_OF_STOCK_TEMPORARILY].includes(e?.saleStatus))
        }
    },
    93136: function(e) {
        e.exports = {
            container: "Calendar_container__cRI7P",
            title: "Calendar_title__VavLK",
            calendar: "Calendar_calendar__Ahxrq"
        }
    },
    71450: function(e) {
        e.exports = {
            wrapper: "ProgressLine_wrapper__GEpGB",
            progress: "ProgressLine_progress__RoDsL"
        }
    },
    34482: function(e) {
        e.exports = {
            container: "Switch_container__fU6lv",
            checked: "Switch_checked__YHE89",
            disabled: "Switch_disabled___Hz59",
            thumb: "Switch_thumb__p6y6o"
        }
    },
    28040: function(e) {
        e.exports = {
            container: "ClickableArea_container__gfaJN",
            withSelect: "ClickableArea_withSelect__m8DvB",
            withBorder: "ClickableArea_withBorder__03ppG",
            withTransition: "ClickableArea_withTransition__saoWG",
            selected: "ClickableArea_selected__hC9TG",
            primary: "ClickableArea_primary__bwKv8",
            error: "ClickableArea_error___TBSr",
            disabled: "ClickableArea_disabled__cMVV8",
            withEffect: "ClickableArea_withEffect__oIKax",
            hasClick: "ClickableArea_hasClick__KTerA"
        }
    },
    6504: function(e) {
        e.exports = {
            compareAtPrice: "ProductInfoCompareAtPrice_compareAtPrice__XWSTS",
            lineThrough: "ProductInfoCompareAtPrice_lineThrough__wVWfF"
        }
    },
    80595: function(e) {
        e.exports = {
            price: "ProductInfoPrice_price__pd7k_",
            small: "ProductInfoPrice_small__FZg4R",
            compareAtPrice: "ProductInfoPrice_compareAtPrice__8IQ_k"
        }
    },
    62870: function(e) {
        e.exports = {
            wrapper: "ProductButton_wrapper__B1LIe",
            container: "ProductButton_container__oQdEq",
            btn: "ProductButton_btn__4N26E"
        }
    },
    78964: function(e) {
        e.exports = {
            container: "ScrollCalendar_container__lKyU5",
            weekdays: "ScrollCalendar_weekdays__sG2J4",
            hasScroll: "ScrollCalendar_hasScroll__ehNkO",
            day: "ScrollCalendar_day__iuVy_",
            calendars: "ScrollCalendar_calendars__7bvtu"
        }
    },
    24199: function(e) {
        e.exports = {
            contents: "TicketOptionDetail_contents__hPmKr",
            banner: "TicketOptionDetail_banner__ZrHUZ",
            matchLocale: "TicketOptionDetail_matchLocale__e8UmY",
            optionWrapper: "TicketOptionDetail_optionWrapper__JBXVO",
            title: "TicketOptionDetail_title__pY2Xg",
            time: "TicketOptionDetail_time__MJwCp",
            timeButtons: "TicketOptionDetail_timeButtons__ruHoh",
            timeButton: "TicketOptionDetail_timeButton__35C41",
            timeText: "TicketOptionDetail_timeText__zizam",
            string: "TicketOptionDetail_string__TH972",
            stringButtons: "TicketOptionDetail_stringButtons__E3aQk",
            bottomButtonWrapper: "TicketOptionDetail_bottomButtonWrapper__KWGt1",
            buttonWrapper: "TicketOptionDetail_buttonWrapper__kcyXY",
            box: "TicketOptionDetail_box__rDDRi",
            itemOption: "TicketOptionDetail_itemOption__snp4c",
            priceInfo: "TicketOptionDetail_priceInfo__trxcX",
            price: "TicketOptionDetail_price__VezBu",
            itemDescription: "TicketOptionDetail_itemDescription__8dyeD"
        }
    },
    58967: function(e) {
        e.exports = {
            container: "FullScreenTemplate_container__VZTpj",
            hasBottomBar: "FullScreenTemplate_hasBottomBar__dw0XY",
            contentsWrapper: "FullScreenTemplate_contentsWrapper__KnZKw",
            overflowAuto: "FullScreenTemplate_overflowAuto__dhVII",
            contents: "FullScreenTemplate_contents__5t9mY",
            paddingTop: "FullScreenTemplate_paddingTop__VHn2J",
            paddingX: "FullScreenTemplate_paddingX__4Op6O",
            digitalRewardPage: "FullScreenTemplate_digitalRewardPage__Cbn2g",
            widePage: "FullScreenTemplate_widePage__gp_II",
            title: "FullScreenTemplate_title__tQSmJ",
            hideTitleMarginBottom: "FullScreenTemplate_hideTitleMarginBottom__M56SX",
            progressWrapper: "FullScreenTemplate_progressWrapper__mGuML",
            bottomBar: "FullScreenTemplate_bottomBar__Cyzjs",
            topGuideLabel: "FullScreenTemplate_topGuideLabel__C_MFd"
        }
    },
    74854: function() {},
    66602: function() {},
    79951: function() {},
    53291: function() {}
}, function(e) {
    e.O(0, [2635, 1499, 2839, 9704, 5786, 9140, 1503, 1527, 8760, 2888, 9774, 179], function() {
        return e(e.s = 33470)
    }),
    _N_E = e.O()
}
]);