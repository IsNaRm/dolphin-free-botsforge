!function (l) {
    function e(e) {
        for (var t, a, o = e[0], r = e[1], s = e[2], i = 0, n = []; i < o.length; i++) a = o[i], Object.prototype.hasOwnProperty.call(u, a) && u[a] && n.push(u[a][0]), u[a] = 0;
        for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (l[t] = r[t]);
        for (g && g(e); n.length;) n.shift()();
        return c.push.apply(c, s || []), d()
    }

    function d() {
        for (var e, t = 0; t < c.length; t++) {
            for (var a = c[t], o = !0, r = 1; r < a.length; r++) {
                var s = a[r];
                0 !== u[s] && (o = !1)
            }
            o && (c.splice(t--, 1), e = m(m.s = a[0]))
        }
        return e
    }

    var a = {}, p = {app: 0}, u = {app: 0}, c = [];

    function m(e) {
        var t;
        return (a[e] || (t = a[e] = {
            i: e,
            l: !1,
            exports: {}
        }, l[e].call(t.exports, t, t.exports, m), t.l = !0, t)).exports
    }

    m.e = function (c) {
        var o, r, e, s, t, a = [], i = (p[c] ? a.push(p[c]) : 0 !== p[c] && {
            about: 1,
            "chunk-34922498": 1,
            "chunk-a3d9e6e2": 1
        }[c] && a.push(p[c] = new Promise(function (e, a) {
            for (var t = "css/" + ({about: "about"}[c] || c) + "." + {
                about: "16dab9b4",
                "chunk-34922498": "f9d2a6b7",
                "chunk-a3d9e6e2": "fd333847"
            }[c] + ".css", o = m.p + t, r = document.getElementsByTagName("link"), s = 0; s < r.length; s++) {
                var i = r[s], n = i.getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (n === t || n === o)) return e()
            }
            for (var l = document.getElementsByTagName("style"), s = 0; s < l.length; s++) if ((n = (i = l[s]).getAttribute("data-href")) === t || n === o) return e();
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = e, d.onerror = function (e) {
                var e = e && e.target && e.target.src || o,
                    t = new Error("Loading CSS chunk " + c + " failed.\n(" + e + ")");
                t.code = "CSS_CHUNK_LOAD_FAILED", t.request = e, delete p[c], d.parentNode.removeChild(d), a(t)
            }, d.href = o, document.getElementsByTagName("head")[0].appendChild(d)
        }).then(function () {
            p[c] = 0
        })), u[c]);
        return 0 !== i && (i ? a.push(i[2]) : (t = new Promise(function (e, t) {
            i = u[c] = [e, t]
        }), a.push(i[2] = t), (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, m.nc && o.setAttribute("nonce", m.nc), o.src = m.p + "js/" + ({about: "about"}[t = c] || t) + "." + {
            about: "c9450a18",
            "chunk-34922498": "9f8745a6",
            "chunk-a3d9e6e2": "d143e7e8"
        }[t] + ".js", r = new Error, e = function (e) {
            o.onerror = o.onload = null, clearTimeout(s);
            var t, a = u[c];
            0 !== a && (a && (t = e && ("load" === e.type ? "missing" : e.type), e = e && e.target && e.target.src, r.message = "Loading chunk " + c + " failed.\n(" + t + ": " + e + ")", r.name = "ChunkLoadError", r.type = t, r.request = e, a[1](r)), u[c] = void 0)
        }, s = setTimeout(function () {
            e({type: "timeout", target: o})
        }, 12e4), o.onerror = o.onload = e, document.head.appendChild(o))), Promise.all(a)
    }, m.m = l, m.c = a, m.d = function (e, t, a) {
        m.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, m.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, m.t = function (t, e) {
        if (1 & e && (t = m(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (m.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) m.d(a, o, function (e) {
            return t[e]
        }.bind(null, o));
        return a
    }, m.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return m.d(t, "a", t), t
    }, m.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, m.p = "/7d11bbb4production/", m.oe = function (e) {
        throw console.error(e), e
    };
    var t = (o = window.webpackJsonp = window.webpackJsonp || []).push.bind(o);
    o.push = e;
    for (var o = o.slice(), r = 0; r < o.length; r++) e(o[r]);
    var g = t;
    c.push([0, "chunk-vendors"]), d()
}({
    0: function (e, t, a) {
        e.exports = a("56d7")
    }, "03dd": function (e, t, a) {
    }, "0bb0": function (e, t, a) {
    }, "0cdd": function (e, t, a) {
        "use strict";
        a.d(t, "b", function () {
            return o
        }), a.d(t, "a", function () {
            return r
        });
        const o = {
            PLAN_GOING_TO_EXPIRE: "PLAN_GOING_TO_EXPIRE",
            UNPAID_ORDER: "UNPAID_ORDER",
            ORDER_IN_PROGRESS: "ORDER_IN_PROGRESS",
            SUBSCRIPTION_END: "SUBSCRIPTION_END",
            PLAN_LIMIT_EXCEEDED: "PLAN_LIMIT_EXCEEDED",
            PLAN_PAYMENT_SUCCESS: "PLAN_PAYMENT_SUCCESS",
            SUCCESSFUL_PLAN_UPDATE: "SUCCESSFUL_PLAN_UPDATE",
            PLAN_PAYMENT_FAILED: "PLAN_PAYMENT_FAILED"
        }, r = {SUCCESS_ALERT: "successAlert", ERROR_ALERT: "errorAlert", WARNING_ALERT: "warningAlert"}
    }, "0d68": function (e, t, a) {
        "use strict";
        a("14d9");
        var o = a("5935"), a = a("2f62");
        t.a = {
            computed: {...Object(o.b)("main", ["profileAuthorized"]), ...Object(a.c)({profile: "main/profile"})},
            methods: {
                logOut() {
                    var e = ["antyLocalApiPort", "freeTariffDialogShowingTime", "profileLanguage", "profileCreatedEventLastSent", "profileStartedEventLastSent", "profileEditedEventLastSent", "profileDeletedEventLastSent", "proxyCreateEventLastSent", "noteAddEventLastSent", "noteEditEventLastSent", "accountProxyChangeEventLastSent", "statusChangeEventLastSent", "usersData", "showedFreeUnpaidTariffDialog", "showedOsCompatibilityDialog", "osIsNotCompatible"].map(e => ({
                        name: e,
                        value: localStorage.getItem(e)
                    }));
                    localStorage.clear(), e.forEach(e => {
                        e.value && localStorage.setItem(e.name, e.value)
                    }), this.api.defaults.headers.Authorization = "", this.localApi.defaults.headers.Authorization = "", this.profileAuthorized = !1, this.$router.push({name: "Login"}), this.$store.dispatch("main/closeDialog", "logoutConfirmation"), this.$store.dispatch("browserProfiles/clearSelected"), this.$store.dispatch("proxy/clearSelected"), this.$store.dispatch("browserProfilesStatuses/clearSelected"), this.$store.dispatch("userFields/clearSelected"), this.$amplitude && (this.$amplitude.getInstance().logEvent("Log out"), this.$amplitude.getInstance().setUserId(null))
                }
            }
        }
    }, 1: function (e, t) {
    }, 2: function (e, t) {
    }, "219f": function (e, t, a) {
    }, 2238: function (e, t, a) {
        "use strict";
        a.d(t, "x", function () {
            return o
        }), a.d(t, "g", function () {
            return r
        }), a.d(t, "b", function () {
            return s
        }), a.d(t, "s", function () {
            return i
        }), a.d(t, "e", function () {
            return n
        }), a.d(t, "j", function () {
            return l
        }), a.d(t, "n", function () {
            return d
        }), a.d(t, "l", function () {
            return c
        }), a.d(t, "i", function () {
            return p
        }), a.d(t, "p", function () {
            return u
        }), a.d(t, "o", function () {
            return m
        }), a.d(t, "k", function () {
            return g
        }), a.d(t, "m", function () {
            return h
        }), a.d(t, "w", function () {
            return f
        }), a.d(t, "v", function () {
            return b
        }), a.d(t, "t", function () {
            return y
        }), a.d(t, "u", function () {
            return w
        }), a.d(t, "c", function () {
            return _
        }), a.d(t, "h", function () {
            return E
        }), a.d(t, "f", function () {
            return v
        }), a.d(t, "d", function () {
            return P
        }), a.d(t, "a", function () {
            return S
        }), a.d(t, "q", function () {
            return T
        }), a.d(t, "r", function () {
            return I
        });
        const o = {
                freeTariff: {profilesCount: 10, usersCount: 1},
                baseTariff: {profilesCount: 100, usersCount: 1},
                teamTariff: {profilesCount: 300, usersCount: 1},
                enterpriseTariff: {profilesCount: 1e3, usersCount: 1}
            }, r = "free", s = "base", i = "team", n = "enterprise", l = "card", d = "unlimint", c = "crypto",
            p = "capitalist", u = "wallet", m = "usdt", g = "cloudpayments", h = "inxy", f = "USDT (TRC20)",
            b = "USDT (ERC20)", y = "USDC (TRC20)", w = "USDT (BEP20)", _ = "BTC", E = "LTC", v = "ETH", P = "DOGE",
            S = "ALIPAYPLUS", T = "PICPAY", I = "PIX"
    }, 2542: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAesSURBVHgBtVdtiFxXGX7u19y5Mzs7+5ndkqQxbVKb2mJspVIEMSIGE6WN1kCiIv6pihIaP9oUJBW/YqFI0D8tKKUKCiWKSi1YCP6qIsRqapMQjbtNsrvZzM7Hnfv9ce45PneSQrC7bSalBy539uzMeZ7znPe87/NqWGX84TsP1U5dcD8+a0e3zNaNDQ3LnNKBWi5lLcjy0QSWE+Sw4wxayxdY8mPZCeKs7Uex2/f9OMsSy7LiTdPN1saJ5gUpi1N3f3jXS186dKh/LY4CdHM1Aq+dm3sy7bW+IpsaElGFUBoiIRFmEq2+BzdI0I8ydMIEqdDRyxWiWCBLyUgCGtfohDmiThXjt9Qx1mjAe/X5pzn95Wtx+D25KoHT80t9r9dCyzExPV5DvWrBMAzoRgUFTBAPsVR86+jHKeLCQMY5k3uKru5thJJN2godKuRHXVijk/5qWNpqk0op/ciu7XOe297kNBwYjgNNt6iGQpgKeEmOIMkQ5wVS/p0XEjHVMQe/BZI0R87HqgLbZm3cumnj5W37Hlu/d+/e4v+xVlVA0zT5rYMHn9qx+1NHNM1At9PBpcWLcJcW0FlehttZ4U597jqC0gQP0kTDqaMxOo7mxBQmpmcxsW6WczqPxcfCv/727GrgaxIox8OPfw9pYaIqAtQbTVQrJgzKqmury6auKIeCamRZAT+M0e1ewsJKD3feuT758bPHMBQBlbjvLSIBraJBpTqkXoNhWUTXseYgAaUklMygqxR2tYK6lsDZsPG2tX6yJoGofQl5riFvjsO2C6hCkITG3Zvk8EYSWgl+9Y2ShMghowgGw7a3uFwdnkAUnq5YJtIkRsW2YVpXgBkfVwD5fv2zGuxcQRYFj0CgyBmYWYrQDxgzbQgZnRqagGHYx3x35XClphu6rmslWLk58GoZhoJ+DZkBuCwgRMHzT5EkEcIggNd3+e4XhZY8txbOmgd61z33nel1+j9hxGtutwvP7XExD3EYDlRJ03QAlmXZ4J0mfOKI/yew2+dN6aDvdiiV/MX+Lzz8CoZVoBxTzdnvXlz894co5/uzNEESx7wRDTj1EVgVm4mJx6KVRy4HkickEPo+CXTR6a7AD7onG9WpR94MQ8NbjN8fPToTmNmv7EbzI42xaczcuhVOtQrLZHYsjwGl/AqiKAaqtBfm4fY6iGP/uK7wub1f/Ory2yJQjhMnTlgnj//2gF5tPLZuy3smJ2bWD/KCWQaDKsGlJkgi8ly0zp/1Q999Yt1m58lduw6kb7X2dRF4fTxz5NC7hFk9PHv73Z+fnJk1q7bF60n5Wagoe9Ffmn/KGms+8cAD+y7inRzP/fLp3Sdf+Wd+eWVFtVqX1cmT/8hf+M2vH8QNDBM3MN73sc8KR6WyYukQLEiCy2SNzRFuYAx1BPOt1qyXjH2zIroHpL9gRZ0Wekw2Zn0cmTkq+onxzEhx/ge7d3/6/PWueV0EmGjMM8v9r4vUetQS/oR0/4O4x4rIVOtHKYKy9JJEbXoLepG1IsO5I/sfvP+nTFTibRNYXFyciozJn2WRuB9hC8qfQ+61BuBRFMOjK4qZAWPBKtGYRnPq3cj0OpLo4vGbmpX9O3fubN0wgW632+xJ50Xhi3vT9n8RLZ1FHrsQWcQ7z6xHC+YFMaJUDtxRnNEZaTVMbrgN43xUvvD3m8bFR3fs2OOuhfGmQRho9veFF9+bLJxG6i5CBC0koYs4cJn5uHOm5ChK6JJYJDQTUW5CkMBFeoHWSh+zN8/cYzdGH+dSB4cm4Pvtbe0ED+neMup6CiY/FFw8MvjZKpjtyvxPvyBZD+KQFc+iEiy+eoLCUkiNFcgLOSqF9rXT5176+R1bPvjqUATCONkjw7iiZy3m/IJG3EZhMt1mASqyOjAmQgrEkQfJ2h/wnQobkWLc2RU0RmJoguok68wszT/DJYcj4C4vbRftBZiCVp6lVsky55dZL2PVKytiwIfFh8AFM2FKk5oVVKPIYBA4d2OYzY0k28bSubk7MOwRsCNIy2DLWH51lbPSeTSY6aDmr6wsosNym3PnBotS32dg5nTJMYmiQjdUoWFNEFUkuvkUnMqoPjQBJeKzgu4mpQXn5wF4HHqMjT48Jp8SuOv5BE4HtYD1iOC8ileNqyFzpAEVkj1YW83hHdGff/dHY8PW26HYceRsPhKCppQ7CPwBmSTPGQMa+wONkW/TLxYM1LJ5sWjfqjDtOux6k7FTw/zLf02wptKr7V4p7Yef+MB8zcg2TY2PoFqvw6hUaNPVoCEZNCVMPGVj0o/LJ2ezwnlmRVnWhrz0hjlmGjQ1Iwaqjn356ItnbmJmVNelwDf27DisxfHN1bo+kFjSnsuEAVh2QlQjCNgX+jF6YYYlN2CfyE4oB49CQ40GNmCCStjQWNKGY9WoFGYe+eT2H3HpR6+LQP/S/LoRI9OcyUk06wZGnCpNqMEryOvI/tBhHnBqoxgjqdFGigUvQstL4JUNK9ECZTCEC+TtCNM13gr2Fp2uNr0alqmuxIy8dnLLjn3ffvmFY38qevpdr3nhJltzJ22oagGtTovrhFlRDTOhh0lmhixE/ZQJQSg5YurlPQwtU2eU6rGynU5bOItjljG3fvN9z+Mvc28g8D9MdYs8m0R7aQAAAABJRU5ErkJggg=="
    }, 2805: function (e, t, a) {
        "use strict";
        a("6f11")
    }, 2903: function (e, t, a) {
        "use strict";
        var d = a("cee4"), o = a("29f1"), a = a("2f62");
        t.a = {
            mixins: [o.a],
            computed: {
                ...Object(a.c)({healthForBrowserProfileActions: "health/health"}), userPlanIsFree() {
                    return "free" === this.subscription.plan && !this.subscription.browserProfiles.additionalProfiles && !this.subscription.users.additionalUsers
                }
            },
            methods: {
                async browserProfileActionsStart(a, e, o, r = !0, s = null) {
                    const i = parseInt(a.id, 10);
                    if (this.showOsCompatibilityDialog()) this.browserProfile && await this.$store.dispatch("browserProfiles/setBrowserProfile", this.browserProfile), await this.$store.dispatch("main/openDialog", "osCompatibility"); else try {
                        await this.$store.dispatch("browserProfiles/addLoading", i), this.$store.dispatch("browserProfiles/removeMainButtonError", i), r && await this.$store.dispatch("browserProfiles/addLoading", i);
                        var n = d.a.CancelToken.source(), l = (this.$store.dispatch("browserProfiles/setCancelToken", {
                            id: i,
                            token: n
                        }), await this.$store.dispatch("browserProfiles/addPendingRequest", i), await this.api.get(`/browser_profiles/${i}/canUpdate`));
                        let t;
                        if (await this.$store.dispatch("browserProfiles/removePendingRequest", i), l.data.result && await this.api.post(`/browser_profiles/${i}/events`, {type: "start"}, {cancelToken: n.token}), this.userPlanIsFree) t = await this.localApi.get(`/browser_profiles/${i}/start?screenWidth=${screen.width}&screenHeight=${screen.height}&dpr=${window.devicePixelRatio}&mainWebsite=${a.mainWebsite}&login=${a.login}&password=${a.password}&plan=${e}&transfer=` + o, {cancelToken: n.token}); else {
                            let e = `/browser_profiles/${i}/start?screenWidth=${screen.width}&screenHeight=${screen.height}&dpr=${window.devicePixelRatio}&mainWebsite=${a.mainWebsite}&login=${a.login}&password=` + a.password;
                            s && (e += `&name_session=${s.session}&is_owned=` + s.isOwned), t = await this.localApi.get(e, {cancelToken: n.token})
                        }
                        if (null !== t.data.proxyData && t.data.proxyError, t.data && !1 === t.data.success) {
                            switch (t.data.message) {
                                case"initConnectionError":
                                    await this.$store.dispatch("browserProfiles/addMainButtonError", {
                                        id: i,
                                        error: t.data.error
                                    });
                                    break;
                                case"errorRemoteApi":
                                    await this.$store.dispatch("browserProfiles/addMainButtonError", {
                                        id: i,
                                        error: this.$t("browserProfiles.errors.errorRemoteApi")
                                    });
                                    break;
                                case"errorMirrorDownload":
                                    await this.$store.dispatch("browserProfiles/addMainButtonError", {
                                        id: i,
                                        error: this.$t("browserProfiles.errors.downloadDatadirError")
                                    });
                                    break;
                                case"DownloadAndUnpackError":
                                    await this.$store.dispatch("browserProfiles/addMainButtonError", {
                                        id: i,
                                        error: this.$t("browserProfiles.errors.errorDownloadAndUnpack")
                                    })
                            }
                            setTimeout(() => {
                                this.$store.dispatch("browserProfiles/removeMainButtonError", i)
                            }, 6e4)
                        }
                    } catch (e) {
                        console.error(e)
                    } finally {
                        this.$store.dispatch("browserProfiles/setCancelToken", {
                            id: i,
                            remove: !0
                        }), await this.$store.dispatch("browserProfiles/removeLoading", i), await this.$store.dispatch("browserProfiles/removePendingRequest", i)
                    }
                }, async browserProfileActionsStop(e, t = !1) {
                    var a, o, r = parseInt(null != (a = e.id) ? a : e, 10);
                    try {
                        await this.$store.dispatch("browserProfiles/addLoading", r), await this.$store.dispatch("browserProfiles/removeSyncErrors", r);
                        const e = d.a.CancelToken.source(),
                            a = (this.$store.dispatch("browserProfiles/setCancelToken", {
                                id: r,
                                token: e
                            }), await this.$store.dispatch("browserProfiles/addPendingRequest", r), {});
                        this.userPlanIsFree && (a.plan = this.subscription.plan), t && (a.afterReAuth = !0), (o = await this.localApi.get(`/browser_profiles/${r}/stop`, {
                            cancelToken: e.token,
                            params: a
                        })).data && !1 === o.data.success && await this.$store.dispatch("browserProfiles/addMainButtonError", {
                            id: r,
                            error: o.data.message
                        })
                    } catch (e) {
                        console.error(e)
                    } finally {
                        await this.$store.dispatch("browserProfiles/setCancelToken", {
                            id: r,
                            remove: !0
                        }), await this.$store.dispatch("browserProfiles/removePendingRequest", r), await this.$store.dispatch("browserProfiles/removeLoading", r)
                    }
                }, async browserProfileActionBringToFront(e) {
                    var t = parseInt(e.id, 10);
                    try {
                        const e = d.a.CancelToken.source();
                        this.$store.dispatch("browserProfiles/setCancelToken", {id: t, token: e});
                        var a = await this.localApi.get(`/browser_profiles/${t}/bring_to_front?screenWidth=${screen.width}&screenHeight=${screen.height}&dpr=` + window.devicePixelRatio, {cancelToken: e.token});
                        a.data && !1 === a.data.success && console.error("Bring to front is failed")
                    } catch (e) {
                        console.error(e)
                    } finally {
                        this.$store.dispatch("browserProfiles/setCancelToken", {
                            id: t,
                            remove: !0
                        }), await this.$store.dispatch("browserProfiles/removeLoading", t)
                    }
                }, has24HoursPassed(e) {
                    e = parseInt(localStorage.getItem(e) || 0);
                    return 864e5 <= (new Date).getTime() - e
                }, getBrowserTime() {
                    var e = new Date, t = e.getHours(), e = e.getMinutes();
                    return t.toString().padStart(2, "0") + ":" + e.toString().padStart(2, "0")
                }, getCheckTimeDifference(e) {
                    var t;
                    e && (e = new Date("2000-01-01T" + this.formattedTime), t = new Date("2000-01-01T" + this.formattedBrowserTime), 2 < Math.abs(t - e) / 6e4 ? this.$store.dispatch("main/setBanners", {
                        key: "incorrectTime",
                        value: !0
                    }) : this.$store.dispatch("main/setBanners", {key: "incorrectTime", value: !1}))
                }, getOsVersion(e) {
                    e = e.match(/[-+]?\d+(\.\d+)?/g);
                    return e && 0 < e.length ? parseFloat(e[0]) : null
                }, checkIfOsIsNotCompatible() {
                    var e = this.healthForBrowserProfileActions.system.osVersion, t = this.getOsVersion(e),
                        a = e.includes("Windows"), e = e.includes("Sierra");
                    return a && t <= 8.1 || e && t <= 10.15
                }, showOsCompatibilityDialog() {
                    return !!this.checkIfOsIsNotCompatible() && (!localStorage.getItem("showedOsCompatibilityDialog") || this.has24HoursPassed("showedOsCompatibilityDialog"))
                }
            }
        }
    }, "29f1": function (e, t, a) {
        "use strict";
        var o = a("2f62"), r = a("c1df"), s = a.n(r);
        t.a = {
            computed: {
                ...Object(o.c)({
                    profile: "main/profile",
                    subscription: "main/subscription",
                    settings: "settings/settings",
                    appVersion: "main/appVersion",
                    sortedTags: "browserProfiles/sortedTags",
                    proxyPagination: "proxy/pagination",
                    statusesPagination: "browserProfilesStatuses/pagination",
                    mainDialogs: "main/dialogs"
                }), appVersionForAmplitude() {
                    let e = null;
                    var t;
                    return this.appVersion && (t = this.appVersion.toString().split("."), e = t[0] + "." + t[1]), e
                }
            }, methods: {
                async amplitudeSendIdentify() {
                    try {
                        setTimeout(() => {
                            var e = (new this.$amplitude.Identify).set("plan", this.subscription.plan).set("team profiles count", null == (e = this.subscription.browserProfiles) ? void 0 : e.count).set("dolphin token", !(null == (e = this.settings.user) || null == (e = e.dolphinIntegration) || !e.token)).set("users count", null == (e = this.subscription.users) ? void 0 : e.count).set("users added", null == (e = this.subscription.users) ? void 0 : e.count).set("users role", this.profile.role).set("OS", navigator.platform).set("dolphin version", this.appVersionForAmplitude).set("DolphinAnty ID", this.profile.id).set("team owner", null == (e = this.profile.team) ? void 0 : e.isOwner).set("team owner e-mail", null == (e = this.profile.team) ? void 0 : e.ownerEmail).set("proxies count", this.proxyPagination.total).set("tags count", null == (e = this.sortedTags) ? void 0 : e.length).set("status count", this.statusesPagination.total).set("refferal", !(null == (e = this.profile.team) || !e.refUserId)).set("refferal user", null == (e = this.profile.team) ? void 0 : e.refUserEmail).set("promocode", null == (e = this.profile.team) ? void 0 : e.promo).set("telegram", this.profile.telegram).set("e-mail confirmation", !!this.profile.emailConfirmed);
                            this.$amplitude.getInstance().identify(e), this.$amplitude.getInstance().setUserId(this.profile.username)
                        }, 5e3)
                    } catch (e) {
                    }
                }, async amplitudeSendProfileStart(e, t, a = !1) {
                    if (!this.mainDialogs.osCompatibility) {
                        if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers || "trial" === t.plan) {
                            const e = localStorage.getItem("profileStartedEventLastSent");
                            if (e && s()(new Date).diff(e, "hours") < 24) return;
                            localStorage.setItem("profileStartedEventLastSent", s()(new Date))
                        }
                        this.$amplitude.getInstance().logEvent("Profile Start", {
                            site: "" === e.mainWebsite ? "none" : e.mainWebsite,
                            os: e.platform,
                            "browser type": e.browserType,
                            "dolphin version": this.appVersionForAmplitude,
                            "user os": this.getUserPlatform(),
                            "dolphin token": !(null == (t = this.settings.user) || null == (e = t.dolphinIntegration) || !e.token),
                            plan: this.subscription.plan,
                            "team profiles count": null == (t = this.subscription.browserProfiles) ? void 0 : t.count,
                            "users count": null == (e = this.subscription.users) ? void 0 : e.count,
                            Synchronizer: a
                        })
                    }
                }, async amplitudeSendProfileCreate(e, t, a) {
                    if ("free" === a.plan && !a.browserProfiles.additionalProfiles && !a.users.additionalUsers || "trial" === a.plan) {
                        const e = localStorage.getItem("profileCreatedEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("profileCreatedEventLastSent", s()(new Date))
                    }
                    switch (t) {
                        case"create": {
                            const t = (new this.$amplitude.Identify).add("profiles count", 1);
                            this.$amplitude.getInstance().identify(t), 1 === parseInt(e.proxyMode, 10) && this.amplitudeIncreaseProxyCount(1);
                            break
                        }
                    }
                    this.$amplitude.getInstance().logEvent("Profile Create", {
                        site: "" === e.mainWebsite ? "none" : e.mainWebsite,
                        os: e.platform,
                        proxy: this.setProxyForAmplitude(e, t),
                        useragent: null == (a = e.useragent) ? void 0 : a.mode,
                        webrtc: null == (a = e.webrtc) ? void 0 : a.mode,
                        canvas: null == (a = e.canvas) ? void 0 : a.mode,
                        webgl: null == (a = e.webgl) ? void 0 : a.mode,
                        timezone: null == (a = e.timezone) ? void 0 : a.mode,
                        language: null == (a = e.locale) ? void 0 : a.mode,
                        loginpassword: e.loginpassword,
                        "copy profile": "copy" === t,
                        "mass import": "massImport" === t,
                        "browser type": e.browserType,
                        "team profiles count": (null == (a = this.subscription.browserProfiles) ? void 0 : a.count) + 1,
                        cookie: !!e.cookies
                    })
                }, async amplitudeSendProfileEdit(e, t, a) {
                    if ("free" === a.plan && !a.browserProfiles.additionalProfiles && !a.users.additionalUsers || "trial" === a.plan) {
                        const e = localStorage.getItem("profileEditedEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("profileEditedEventLastSent", s()(new Date))
                    }
                    switch (t) {
                        case"edit": {
                            const t = (new this.$amplitude.Identify).add("profiles count", 1);
                            this.$amplitude.getInstance().identify(t), 1 === parseInt(e.proxyMode, 10) && this.amplitudeIncreaseProxyCount(1);
                            break
                        }
                    }
                    this.$amplitude.getInstance().logEvent("Profile Edit", {
                        site: "" === e.mainWebsite ? "none" : e.mainWebsite,
                        os: e.platform,
                        proxy: this.setProxyForAmplitude(e, "edit"),
                        useragent: null == (a = e.useragent) ? void 0 : a.mode,
                        webrtc: null == (t = e.webrtc) ? void 0 : t.mode,
                        canvas: null == (a = e.canvas) ? void 0 : a.mode,
                        webgl: null == (t = e.webgl) ? void 0 : t.mode,
                        timezone: null == (a = e.timezone) ? void 0 : a.mode,
                        language: null == (t = e.locale) ? void 0 : t.mode,
                        loginpassword: e.loginpassword,
                        "browser type": e.browserType,
                        "team profiles count": null == (a = this.subscription.browserProfiles) ? void 0 : a.count,
                        cookie: !!e.cookies
                    })
                }, async amplitudeSendImportCookies(e) {
                    this.$amplitude.getInstance().logEvent("Import Cookie", {plan: e.plan.charAt(0).toUpperCase() + e.plan.slice(1)})
                }, async amplitudeSendProfileDelete(e, t) {
                    if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers || "trial" === t.plan) {
                        const e = localStorage.getItem("profileDeletedEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("profileDeletedEventLastSent", s()(new Date))
                    }
                    this.$amplitude.getInstance().logEvent("Profile Delete")
                }, async amplitudeSendProxyCreate(e, t) {
                    if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers || "trial" === t.plan) {
                        const e = localStorage.getItem("proxyCreateEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("proxyCreateEventLastSent", s()(new Date))
                    }
                    this.$amplitude.getInstance().logEvent("Proxy Create")
                }, async amplitudeSendNoteAdd(e, t) {
                    if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers || "trial" === t.plan) {
                        const e = localStorage.getItem("noteAddEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("noteAddEventLastSent", s()(new Date))
                    }
                    this.$amplitude.getInstance().logEvent("Note Add")
                }, async amplitudeSendNoteEdit(e, t) {
                    if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers || "trial" === t.plan) {
                        const e = localStorage.getItem("noteEditEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("noteEditEventLastSent", s()(new Date))
                    }
                    this.$amplitude.getInstance().logEvent("Note Edit")
                }, async amplitudeSendAccountProxyChange(e, t) {
                    if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers) {
                        const e = localStorage.getItem("accountProxyChangeEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("accountProxyChangeEventLastSent", s()(new Date))
                    }
                    this.$amplitude.getInstance().logEvent("Account Proxy Change")
                }, async amplitudeSendStatusChange(e, t) {
                    if ("free" === t.plan && !t.browserProfiles.additionalProfiles && !t.users.additionalUsers || "trial" === t.plan) {
                        const e = localStorage.getItem("statusChangeEventLastSent");
                        if (e && s()(new Date).diff(e, "hours") < 24) return;
                        localStorage.setItem("statusChangeEventLastSent", s()(new Date))
                    }
                    this.$amplitude.getInstance().logEvent("Status Change")
                }, getUserPlatform() {
                    var e = [{device: "linux", platform: /Linux/}, {
                        device: "windows",
                        platform: /Windows NT/
                    }, {device: "macos", platform: /Macintosh/}], t = navigator.userAgent;
                    for (const a in e) if (e[a].platform.test(t)) return e[a].device
                }, setProxyForAmplitude(e, t) {
                    if ("copy" === t) return "saved proxies";
                    {
                        const t = parseInt(e.proxyMode, 10);
                        return 2 === t ? "saved proxies" : 1 === t ? "new proxy" : "no proxy"
                    }
                }, amplitudeIncreaseProxyCount(e) {
                    e = (new this.$amplitude.Identify).add("proxies count", e);
                    this.$amplitude.getInstance().identify(e)
                }
            }
        }
    }, "2e2f": function (e, t, a) {
        "use strict";
        a("845e")
    }, "30cd": function (e, t, a) {
        "use strict";
        a("219f")
    }, 3428: function (e, t, a) {
        "use strict";
        a("d57b")
    }, "364b": function (e, t, a) {
    }, 3821: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZsSURBVHgB7VZ7TJVlGH/O8XAOdxA4XA7C4aaSSCETici0DFNKN13anM0aazNLkxUpw7HhCrmYkDIi3KjcHOQWjXK0FUqQlrBwJvcV9zvnHO6HyzkH+Pq9n3wnOBedf/WPD/uA7/3e5/f+fs/zvO/7ED2x/9lElgY5jhNlZWVtdXR0VC4sLGhnZ2fvJicn99BjWGZmpotUKt1ta2sr0ev1PWVlZX9UVVXNP5LAhQsX1nl6el5WKBTbXF1dyWAwkEqlmhwcHMwuKSnJsgRiavn5+Uk+Pj5n8LiCBGm1Wurv728YGRlJOHHiRJ1Vx5ycnHAwHWpvb+cmJyc5nU7Hzc3NcRqNhqutreWKiooKWHQetnhhYWHa7du3OZDmEDkO6rnp6Wmuq6uLKy8vH7948eKLFh1zc3Ndr1271tzd3c07LTekgSdUU1PDFRQUnCLryvdXV1cvjo2N8T7LDZHk+vr6uNLS0sHs7GxvwUcs/GNvb/9haGjoUwg/2djYrAAWi8Xk4OBAISEhtGbNmjPp6ek+pounpaW5IuTngSFydnbmfZabRCIhuVxOYWFh3rDTKwicO3dODud3fX19SSaTWVTHAJ2cnCg4ONjZy8vrfdPvGDsSGBgY5OLiYra4YEwYFmdE3svIyAgyEgDjPVAmZwuIRNZTzABYhFavXp0AxdLl3zD2NgM3jd5yY9iINPn7+0vd3NyOGAmg2g96eHjwYXqYMQCWCqj1wRbdIYwjJRvhH8EEWFMvGFvD3d2dQGAXTwBVawPHyEepF4wpZACIWpQwBgGbMSZiW+5RJohAJKIQRQ8JKnYDikveWldNNT9+TcPdbeTg7EaRcQdo56GjJLFZCcoUQj0D2CCMoW622Mmk9H3+J9RS+wvp57Tk4RNAe4+mUsgz0RZFIGViEIkWw1mh6mik5uofKO6No6TRqKn57i369vwHdP746zRv0JsBsELF4y+829nZ+VUWf05PP7uVonbup9bmZrp3q5wyE56nipJCM/9Vq1bxtYBTUikGG6ffi3Mp5rXDtC5qB41IFHRfJSLVLFFr7XUqLfzMIgAi4SW89zbUONqQgUKjXya3wE3UNkbUMCSiKd08leZ9TGPqYTMMli7Ug0IycPeGdELVRWmnEslZrqDWxvvsLqCuUSIfN6K2v25ieooZAeTSuF87/qyU3hsbpP7pY3TrZjlxi0TsvG7TEL3kPUV1N76juEP/7VxWB0sYdpK+thZ+ckNjE343CVN4EgsoaMOM+R20uLjIvhtzMzupMgyqR6n+ymXjycbhmdGLSGbHkU7bv8KfYTMMnJZ6sdzLb0ZmI3xYepYAggNwwPjKzQjMz88zEI3wLrG1HbeXPXACNTwP/EUijtaHEHn4+pthsEsOEegTK2N2d7p5eVK4Eo5Ynf/B3yD4xMaAROQei864aNTCu3tg5NB6BZGjHfMV8SIWFjl6cx+RIkBGAWHbV/hDOc3MzBDunDbJP11dzX6Re2fWDhTZP7eJo27oUgAsbityOxxNr+w9TqbhZ9crCDQIY8Exu5q1LnP0VuDPpJ7lSA8CEeFEYWuJdB6fkrcy1CyCExMT3NTU1N+SvLw8XXFxcZXPls3xo02XSenXSo4efqRzOojFPyJ7ByczZ5wdTMGvwhhuypqI+JOk7dhI8uHrJLMZJTf/KDIoDlPkC4dX+LPogjwj0JSamtopWQL4LSwsJj721QQcEmzI8onInFnocNdrQOKOMA7Auokpbfv2A6eD3d2zH3ocswiOjo6yNSvYOz9zaGjoSm9v7ywaBz5/1oypV6vVOKw0ZWfPnp0UxnGkLkLR1eHhYX6ONRME9PT0cEjjN0YCABgCaB6I8AVmzZkR7Ozs1EFBrul3tFxfoJOagDJepTUBiB6b+1NiYmK9kcASQE5LS8sgiJipEPKGtorQ1eQkJSU1m4JDhGpgYCCjo6ODV8mZhJJV/vj4OLW2to5jjSRhfJXwT2Vl5XRsbGwDIrAPl42UXRgsl8yRVT1bvL6+vgLPMbRmFuMcFRV1B/5KHLERuB+M1zu2G5/3xsbGeUTpHaivEnzMqu3SpUvb0Fh8pVQqg1hrxaKB3HLI25foF5OX596SwV+GxdP9/PxOosuSsIsL243lXY0IJaIrLl4+32K5s54e/UE8zuvNeJ0A+4qUlJQ79BgGjHAIYBje6K7bgXEVaRqnJ/bETOxf3S5F/9eueXkAAAAASUVORK5CYII="
    }, "3b26": function (e, t, a) {
    }, "3ef6": function (e, t, a) {
        "use strict";
        a("03dd")
    }, "450b": function (e, t, a) {
    }, 4678: function (e, t, a) {
        var o = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function r(e) {
            e = s(e);
            return a(e)
        }

        function s(e) {
            if (a.o(o, e)) return o[e];
            throw (e = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", e
        }

        r.keys = function () {
            return Object.keys(o)
        }, r.resolve = s, (e.exports = r).id = "4678"
    }, "49f8": function (e, t, a) {
        var o = {"./en.json": "edd4", "./ru.json": "7704"};

        function r(e) {
            e = s(e);
            return a(e)
        }

        function s(e) {
            if (a.o(o, e)) return o[e];
            throw (e = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", e
        }

        r.keys = function () {
            return Object.keys(o)
        }, r.resolve = s, (e.exports = r).id = "49f8"
    }, "4b17": function (e, t, a) {
    }, "4f38": function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return o
        });
        const o = "-----"
    }, "503c": function (e, t, a) {
    }, "50c8": function (e, t, a) {
        "use strict";
        a("503c")
    }, "516e": function (e, t, a) {
        "use strict";
        a("5c06")
    }, "56d7": function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "detectRemoteApiHost", function () {
            return Me
        }), r("14d9"), r("967a"), r("dbfa");
        var s = r("2b0e"), F = r("7496"), U = r("f6c4"), t = r("2f62"), a = r("5935"), i = r("8336"), B = r("62ad"),
            $ = r("0fd9"), M = r("2db4"), o = {
                name: "Alert", data() {
                    return {snackbar: !0}
                }, computed: {...Object(t.c)({alert: "main/alert", dialogs: "main/dialogs"})}
            }, n = r("2877"), o = Object(n.a)(o, function () {
                var t = this, e = t._self._c;
                return e(M.a, {
                    attrs: {
                        id: "alert",
                        value: t.dialogs.alert,
                        color: t.alert.color || "success"
                    }
                }, [e($.a, {attrs: {align: "center"}}, [e(B.a, {staticClass: "grow py-0"}, [t._v(" " + t._s(t.alert.message) + " ")]), e(B.a, {staticClass: "shrink py-0"}, [e(i.a, {
                    attrs: {
                        id: "alertClose",
                        text: "",
                        small: "",
                        color: "white"
                    }, on: {
                        click: function (e) {
                            return t.$store.dispatch("main/closeAlert")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.close")) + " ")])], 1)], 1)], 1)
            }, [], !1, null, null, null).exports, W = r("132d"), j = r("8860"), l = r("da13"), d = r("5d23"), z = r("1baa"),
            c = r("34c3"), G = r("f774"), p = r("3a2f"), u = r("c1df"), m = r.n(u);
        m.a.locale(localStorage.getItem("profileLanguage") ? localStorage.getItem("profileLanguage") : "en");
        u = {
            name: "SidebarLanguageSwitcher",
            data() {
                return {lang: localStorage.getItem("profileLanguage") ? localStorage.getItem("profileLanguage") : "en"}
            },
            watch: {
                "$i18n.locale"(e) {
                    this.lang = e, window.Intercom("update", {"interface language": e})
                }
            },
            computed: {
                ...Object(t.c)({profileAuthorized: "main/profileAuthorized"}), ...Object(a.b)("main", ["profile"]),
                languageFlag() {
                    switch (this.lang) {
                        case"en":
                            return "ru";
                        case"ru":
                            return "gb"
                    }
                    return "ru"
                }
            },
            methods: {
                async switchLanguage() {
                    let e = localStorage.getItem("profileLanguage") ? localStorage.getItem("profileLanguage") : "en";
                    switch (e) {
                        case"en":
                            e = "ru";
                            break;
                        case"ru":
                            e = "en"
                    }
                    this.profileAuthorized && this.api.patch("/profile", {language: e}), this.profile.language = e, localStorage.setItem("profileLanguage", e), this.$vuetify.lang.current = e, this.$i18n.locale = e, m.a.locale(e), this.lang = e
                }
            }
        };
        r("50c8");
        var u = Object(n.a)(u, function () {
            var e = this._self._c;
            return e("div", {
                staticStyle: {width: "100%", cursor: "pointer", padding: "6px 16px"},
                attrs: {id: "sidebarLanguageSwitcher"},
                on: {click: this.switchLanguage}
            }, [e("flag", {
                staticStyle: {width: "inherit", "background-size": "100% 100%"},
                attrs: {iso: this.languageFlag}
            })], 1)
        }, [], !1, null, null, null).exports, q = r("b73d"), g = {
            name: "SidebarDarkMode",
            props: {mini: {type: Boolean, default: !0}},
            computed: {...Object(t.c)({profileAuthorized: "main/profileAuthorized"}), ...Object(a.b)("main", ["profile"])},
            watch: {
                "$vuetify.theme.dark": {
                    handler(e) {
                        e = e ? "dark" : "light";
                        this.profileAuthorized && this.api.patch("/profile", {theme: e}), this.profile.theme = e, localStorage.setItem("profileTheme", e)
                    }
                }
            }
        }, g = Object(n.a)(g, function () {
            var t = this, e = t._self._c;
            return e("div", {staticStyle: {"padding-left": "8px"}}, [e(q.a, {
                staticClass: "mt-0 pt-0",
                attrs: {id: "sidebarDarkModeSwitcher", inset: "", dense: "", "hide-details": ""},
                scopedSlots: t._u([{
                    key: "label", fn: function () {
                        return [t.mini ? t._e() : e("div", [e("span", [t._v(" Dark mode ")])])]
                    }, proxy: !0
                }]),
                model: {
                    value: t.$vuetify.theme.dark, callback: function (e) {
                        t.$set(t.$vuetify.theme, "dark", e)
                    }, expression: "$vuetify.theme.dark"
                }
            }), t.$vuetify.theme.dark ? e("ion-icon", {
                staticStyle: {
                    position: "relative",
                    top: "-20px",
                    left: "3px",
                    "font-size": "13px"
                }, attrs: {name: "moon-outline"}
            }) : t._e(), t.$vuetify.theme.dark ? t._e() : e("ion-icon", {
                staticStyle: {
                    position: "relative",
                    top: "-20px",
                    left: "21px",
                    "font-size": "14px",
                    color: "grey"
                }, attrs: {name: "sunny-outline"}
            })], 1)
        }, [], !1, null, null, null).exports, Y = r("8212"), h = {
            props: {size: {type: Number, default: 36}, textSize: {type: Number, default: 6}}, data() {
                return {avatarImgUrl: null}
            }, computed: {
                ...Object(t.c)({profile: "main/profile"}), showImg() {
                    return void 0 !== this.profile.avatar && void 0 !== this.profile.isAvatarDeleted && this.profile.avatar && 0 === parseInt(this.profile.isAvatarDeleted, 10)
                }
            }, watch: {
                profile: {
                    deep: !0, handler: function (e, t) {
                        this.generateAvatarImgUrl(), e.avatarUpdateTime !== t.avatarUpdateTime && (this.avatarImgUrl = null, this.$forceUpdate(), this.generateAvatarImgUrl())
                    }
                }
            }, created() {
                this.generateAvatarImgUrl()
            }, methods: {
                generateAvatarImgUrl() {
                    this.profile.avatar && (this.avatarImgUrl = `https://anty-assets.s3.eu-central-1.amazonaws.com/avatars/${this.profile.avatar}.png?version=` + Date.now())
                }
            }
        }, h = Object(n.a)(h, function () {
            var e = this, t = e._self._c;
            return t(Y.a, {
                attrs: {
                    color: e.showImg ? "" : "primary",
                    size: e.size
                }
            }, [e.showImg ? t("img", {attrs: {src: e.avatarImgUrl}}) : t("span", {class: ["white--text", "font-weight-light", "text-h" + e.textSize]}, [e._v(" " + e._s(e.profile.displayName ? 1 < e.profile.displayName.split(" ").length ? e.profile.displayName.split(" ")[0].substring(0, 1).toUpperCase() + e.profile.displayName.split(" ")[1].substring(0, 1).toUpperCase() : e.profile.displayName.substring(0, 2).toUpperCase() : e.profile.username ? e.profile.username.substring(0, 2).toUpperCase() : "") + " ")])])
        }, [], !1, null, null, null).exports, f = r("6bb0"), b = r("fe3a"), y = r("6ed5"), g = {
            name: "Sidebar",
            components: {DarkMode: g, LanguageSwitcher: u, UserAvatar: h, ExpiredPlanDisabledWrapper: b.a},
            mixins: [f.a, y.a],
            data() {
                return {tab: 0, drawer: !1, mini: !0}
            },
            computed: {
                ...Object(t.c)({
                    profile: "main/profile",
                    isFreeTariff: "main/isFreeTariff",
                    isPaidFreeTariff: "main/isPaidFreeTariff",
                    profileAuthorized: "main/profileAuthorized",
                    disableUi: "main/disableUi",
                    dialogs: "main/dialogs",
                    subscription: "main/subscription",
                    health: "health/health",
                    oldUserAgents: "health/oldUserAgents",
                    appVersion: "main/appVersion",
                    sidebarProfileNotification: "main/sidebarProfileNotification"
                }), accessRestricted() {
                    return "Restrict" === this.$route.name
                }, landingUrl() {
                    return "https://anty.dolphin.ru.com"
                }, getSidebarPaymentState() {
                    var e, t;
                    return null != (e = this.subscription) && e.expiration ? (e = m.a.utc(this.subscription.expiration).unix() < Math.floor(Date.now() / 1e3), t = this.getLastThreeDays(this.subscription.expiration), e ? "expired" : t ? "lessThan" : "default") : "default"
                }, getPaymentTooltipText() {
                    switch (this.getSidebarPaymentState) {
                        case"default":
                            return this.$t("sidebar.payNow");
                        case"lessThan":
                            return this.$t("sidebar.lessThanLeft", [this.getLastThreeDays(this.subscription.expiration)]);
                        case"expired":
                            return this.$t("sidebar.subscriptionExpired");
                        default:
                            return this.$t("sidebar.payNow")
                    }
                }
            },
            watch: {
                "profile.id": {
                    handler(e) {
                        e && (window.Intercom("boot", {
                            hide_default_launcher: !1,
                            email: this.profile.username,
                            name: this.profile.displayName,
                            user_id: this.profile.id,
                            user_hash: this.profile.hash,
                            app_id: "nbc7egau",
                            vertical_padding: 80
                        }), this.setSupportChatVariables())
                    }
                }
            },
            created() {
                window.Intercom("onShow", () => {
                    this.api("/profile").then(({data: e}) => {
                        var t;
                        e.data && window.Intercom("update", {
                            hide_default_launcher: !1,
                            tariff: null == (t = e.data.subscription) ? void 0 : t.plan,
                            expirationDate: null == (t = e.data.subscription) ? void 0 : t.expiration,
                            lastPaymentDate: null == (t = e.data.team) ? void 0 : t.lastPaymentDate
                        })
                    })
                })
            },
            destroyed() {
                window.Intercom("shutdown")
            },
            methods: {
                handleProfileSettingsClick() {
                    this.$store.dispatch("main/openDialog", "editProfile"), this.sidebarProfileNotification && this.$store.dispatch("main/setSidebarProfileNotification", !1)
                }, setSupportChatVariables() {
                    var e, t = this.profile["subscription"];
                    this.profile.username && window.Intercom("update", {email: this.profile.username}), this.profile.displayName && window.Intercom("update", {name: this.profile.displayName});
                    let a = "";
                    if (t.expiration) {
                        const o = new Date(t.expiration), d = new Date;
                        a = Math.round((o - d) / 864e5)
                    }
                    var o = `${null == t || null == (o = t.browserProfiles) ? void 0 : o.count}/` + (null == t || null == (d = t.browserProfiles) ? void 0 : d.limit),
                        t = `${null == t || null == (d = t.users) ? void 0 : d.count}/` + (null == t || null == (d = t.users) ? void 0 : d.limit);
                    let r = "",
                        s = (this.health.antyBrowser && (r = `${this.health.antyBrowser.downloaded ? "OK" : "FAIL"} version ` + this.health.antyBrowser.version), ""),
                        i = (this.health.dolphinExtension && (s = `${this.health.dolphinExtension.downloaded ? "OK" : "FAIL"} version ` + this.health.dolphinExtension.version), ""),
                        n = (this.health.proxyTool && (i = `${this.health.proxyTool.downloaded ? "OK" : "FAIL"} version ` + this.health.proxyTool.version), ""),
                        l = (void 0 !== this.oldUserAgents.found && (n = this.oldUserAgents.found ? "YES" : "NO"), "");
                    this.branchName && this.branchHash && (l = this.branchName.substring(0, 42) + "#" + this.branchHash.substring(0, 8));
                    var d = localStorage.getItem("osInfo");
                    window.Intercom("update", {
                        user_id: this.profile.id,
                        channel: "app Dolphin{anty}",
                        "e-mail owner": null == (e = this.profile.team) ? void 0 : e.ownerEmail,
                        "e-mail user": this.profile.username,
                        osVersion: d,
                        "Machine locale": null == (e = this.health) || null == (d = e.system) ? void 0 : d.locale,
                        registrationDate: null == (e = this.profile.team) ? void 0 : e.created_at,
                        tariff: null == (d = this.profile.subscription) ? void 0 : d.plan,
                        expirationDate: null == (e = this.profile.subscription) ? void 0 : e.expiration,
                        lastPaymentDate: null == (d = this.profile.team) ? void 0 : d.lastPaymentDate,
                        "Machine Name": null == (e = this.health) || null == (d = e.system) ? void 0 : d.machineName,
                        "user role": null != (e = this.profile.team) && e.isOwner ? "owner" : this.profile.role,
                        "profiles count": o,
                        "users count": t,
                        revenue: this.profile.revenue,
                        "days count": a,
                        health: `Dolphin Anty version: ${this.appVersion}
          Branch: ${l}
          Platform: ${null == (d = this.health.system) ? void 0 : d.os} ${null == (e = this.health.system) ? void 0 : e.arch}
          Storage: ${this.health.storageHost}
          API Port: ${localStorage.getItem("antyLocalApiPort")}
          Anty browser: ${r}
          Dolphin extension: ${s}
          Proxy utility: ${i}
          Old useragents: ` + n,
                        "interface language": this.$i18n.locale
                    })
                }
            }
        };
        r("ffe0");
        var u = Object(n.a)(g, function () {
                var t = this, a = t._self._c;
                return a(G.a, {
                    attrs: {id: "anty-sidebar", "mini-variant": t.mini, permanent: "", fixed: "", width: "200"},
                    scopedSlots: t._u([{
                        key: "prepend", fn: function () {
                            return [a(l.a, {
                                staticStyle: {"margin-bottom": "16px"},
                                attrs: {id: "sidebarLogo"}
                            }, [a("img", {
                                staticStyle: {
                                    width: "32px",
                                    height: "auto",
                                    "margin-left": "-4px",
                                    "margin-top": "16px"
                                }, attrs: {src: r("cf05")}
                            })])]
                        }, proxy: !0
                    }, {
                        key: "append", fn: function () {
                            return [t.profileAuthorized && !t.accessRestricted ? a(j.a, {
                                staticClass: "sidebar-payment-wrapper",
                                attrs: {nav: ""}
                            }, [a(z.a, {
                                staticClass: "sidebar-list-group",
                                attrs: {"active-class": "default" === t.getSidebarPaymentState ? "blue--text" : ""},
                                model: {
                                    value: t.tab, callback: function (e) {
                                        t.tab = e
                                    }, expression: "tab"
                                }
                            }, [a(p.a, {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: "admin" === t.profile.role,
                                    expression: "profile.role === 'admin'"
                                }], attrs: {right: ""}, scopedSlots: t._u([{
                                    key: "activator", fn: function ({on: e}) {
                                        return [a(l.a, t._g({
                                            class: {
                                                "sidebar-payment": !0,
                                                "sidebar-payment-default": "default" === t.getSidebarPaymentState,
                                                "balance-doesnt-enough": "expired" === t.getSidebarPaymentState,
                                                "balance-less-then": "lessThan" === t.getSidebarPaymentState
                                            },
                                            attrs: {
                                                id: "default" === t.getSidebarPaymentState ? "sidebarPayment" : "",
                                                to: {path: "/payment"}
                                            }
                                        }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.payNow")) + " ")])], 1)]
                                    }
                                }], null, !1, 2680714684)
                            }, [t._v(" " + t._s(t.getPaymentTooltipText) + " ")])], 1)], 1) : t._e(), t.profileAuthorized && !t.accessRestricted ? a(p.a, {
                                attrs: {right: ""},
                                scopedSlots: t._u([{
                                    key: "activator", fn: function ({on: e}) {
                                        return [a(l.a, t._g({
                                            staticStyle: {"margin-bottom": "13px"},
                                            on: {click: t.handleProfileSettingsClick}
                                        }, e), [a("user-avatar", t._g({
                                            staticStyle: {
                                                "margin-left": "-5px",
                                                cursor: "pointer"
                                            }
                                        }, e)), t.sidebarProfileNotification ? a("div", {staticClass: "profile-notification"}) : t._e()], 1)]
                                    }
                                }], null, !1, 1788764886)
                            }, [a("span", [t._v(t._s(t.$t("common.editProfile")))])]) : t._e(), a(p.a, {
                                attrs: {right: ""},
                                scopedSlots: t._u([{
                                    key: "activator", fn: function ({on: e}) {
                                        return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                            staticClass: "v-list-item v-list-item--link",
                                            staticStyle: {margin: "8px 0 16px", padding: "0px"},
                                            attrs: {id: "sidebarLanguage", disabled: t.disableUi, tabindex: "0"}
                                        }, e), [a("language-switcher"), a(d.b, [t._v(" " + t._s(t.$t("browserProfiles.language")) + " ")])], 1)], 1)]
                                    }
                                }])
                            }, [a("span", [t._v(t._s(t.$t("browserProfiles.languageSelect")))])]), a("expired-plan-disabled-wrapper", [a(l.a, {
                                staticClass: "px-0",
                                attrs: {id: "sidebarDarkMode", disabled: t.disableUi}
                            }, [a(d.a, [a("dark-mode", {attrs: {mini: t.mini}})], 1)], 1)], 1)]
                        }, proxy: !0
                    }])
                }, [t.profileAuthorized && !t.accessRestricted ? a(j.a, {
                    staticStyle: {width: "56px"},
                    attrs: {nav: ""}
                }, [a(z.a, {
                    staticClass: "sidebar-tabs",
                    attrs: {"active-class": "blue--text"},
                    model: {
                        value: t.tab, callback: function (e) {
                            t.tab = e
                        }, expression: "tab"
                    }
                }, [a(p.a, {
                    attrs: {right: ""}, scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarBrowsers",
                                    to: {path: "/"}
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.browserProfiles")) + " ")])], 1)]
                        }
                    }], null, !1, 2604932718)
                }, [a("span", [t._v(t._s(t.$t("sidebar.browserProfiles")))])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarProxy",
                                    disabled: t.disableUi,
                                    to: {path: "/proxy"}
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.proxy")) + " ")])], 1)], 1)]
                        }
                    }], null, !1, 3675090215)
                }, [a("span", [t._v(t._s(t.$t("sidebar.proxy")))])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a("div", t._g({staticClass: "mb-2"}, e), [a(l.a, {
                                attrs: {
                                    id: "sidebarFlow",
                                    disabled: t.disableUi || t.isFreeTariff && !t.isPaidFreeTariff,
                                    to: {path: "/flow"}
                                }
                            }, [a(c.a, [a(W.a, {attrs: {color: "Flow" === t.$route.name ? "primary" : "#b1b1b1"}}, [t._v(" mdi-sparkles ")])], 1), a(d.b, [t._v(" " + t._s(t.$t("sidebar.flow")) + " ")])], 1)], 1)])]
                        }
                    }], null, !1, 787897720)
                }, [a("div", {staticClass: "flowTooltipWrapper"}, [a("span", [t._v(t._s(t.$t("sidebar.flow")))]), t.isFreeTariff && !t.isPaidFreeTariff ? a("div", {staticClass: "flowDisabledOnFree"}, [t._v(" " + t._s(t.$t("sidebar.flowDisabledOnFree")) + " ")]) : a("div", {staticClass: "betaIconWrapper"}, [a("p", [t._v("beta")])])])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarBookmarks",
                                    disabled: t.disableUi,
                                    to: {path: "/bookmarks"}
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.bookmarks")) + " ")])], 1)], 1)]
                        }
                    }], null, !1, 3263042884)
                }, [a("span", [t._v(t._s(t.$t("sidebar.bookmarks")))])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarExtensions",
                                    disabled: t.disableUi,
                                    to: {path: "/extensions"}
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.extensions")) + " ")])], 1)], 1)]
                        }
                    }], null, !1, 3170262593)
                }, [a("span", [t._v(t._s(t.$t("sidebar.extensions")))])]), a(p.a, {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "admin" === t.profile.role,
                        expression: "profile.role === 'admin'"
                    }], attrs: {right: ""}, scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarUsers",
                                    to: {path: "/users"}
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.users")) + " ")])], 1)]
                        }
                    }], null, !1, 3598878919)
                }, [a("span", [t._v(t._s(t.$t("sidebar.users")))])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarApi",
                                    disabled: t.disableUi
                                }, on: {
                                    click: function (e) {
                                        return t.openExternalLink("https://documenter.getpostman.com/view/15402503/Tzm8Fb5f")
                                    }
                                }
                            }, e), [a(c.a), a(d.b, [t._v("API")])], 1)], 1)]
                        }
                    }], null, !1, 2515469156)
                }, [a("span", [t._v("API")])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarAutomation",
                                    disabled: t.disableUi
                                }, on: {
                                    click: function (e) {
                                        return t.openExternalLink(t.landingUrl + "/docs/basic-automation")
                                    }
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.automation")) + " ")])], 1)], 1)]
                        }
                    }], null, !1, 1884315791)
                }, [a("span", [t._v(t._s(t.$t("sidebar.automation")))])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(l.a, t._g({
                                attrs: {
                                    id: "sidebarSettings",
                                    disabled: t.disableUi,
                                    to: {path: "/settings"}
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.settings")) + " ")])], 1)], 1)]
                        }
                    }], null, !1, 2612171342)
                }, [a("span", [t._v(t._s(t.$t("sidebar.settings")))])]), a(p.a, {
                    attrs: {right: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a(l.a, t._g({
                                attrs: {id: "sidebarLogout"}, on: {
                                    click: function (e) {
                                        return t.$store.dispatch("main/openDialog", "logoutConfirmation")
                                    }
                                }
                            }, e), [a(c.a), a(d.b, [t._v(" " + t._s(t.$t("sidebar.logOut")) + " ")])], 1)]
                        }
                    }], null, !1, 4255476321)
                }, [a("span", [t._v(t._s(t.$t("sidebar.logOut")))])])], 1)], 1) : t._e()], 1)
            }, [], !1, null, null, null).exports, H = r("0798"), w = r("b0af"), _ = r("99d9"), E = r("169a"), v = r("ce7e"),
            P = r("2fa4");
        r("a1f0");
        y = {
            name: "DialogsError", computed: {...Object(t.c)({dialogs: "main/dialogs", error: "main/error"})}, methods: {
                copy() {
                    try {
                        this.$refs.dialogErrorMessage.type = "text", this.$refs.dialogErrorMessage.select(), document.execCommand("copy"), window.getSelection().removeAllRanges(), this.$store.dispatch("main/alert", {
                            color: "success",
                            message: this.$t("common.copied")
                        })
                    } catch (e) {
                        this.$store.dispatch("main/alert", {color: "error", message: e.message})
                    } finally {
                        this.$refs.dialogErrorMessage.type = "hidden"
                    }
                }, getValidationMessage(e) {
                    let t = this.$t("validationNew." + e.error, {
                        attribute: e.field,
                        value: e.values[0],
                        values: e.values
                    }), a = e.error;
                    var o = a.indexOf(".");
                    return -1 !== o && (a = a.substr(0, o)), t = (t = t.replace(":" + a, e.values[0])).replace("username", "email")
                }, getMessageWithFallback() {
                    var e;
                    return "E_LIMIT_PROFILES_ARCHIVED" === this.error.code ? (e = `(${this.error.error.browserProfilesCount}/${this.error.error.browserProfilesLimit})`, this.$t("common.errorsCodes." + this.error.code, [this.error.error.browserProfilesCount, e])) : this.$t("common.errorsCodes." + this.error.code) === "common.errorsCodes." + this.error.code ? this.error.message : this.$t("common.errorsCodes." + this.error.code)
                }, hidePasswordAndEmail(e) {
                    if ("string" == typeof e) {
                        var t = [...e.matchAll(/[email,password]\\":\\"(.*?)\\"/g)];
                        if (void 0 !== t[0] && void 0 !== t[1] && t[0][1] && t[1][1]) return e.replace(t[0][1], "***").replace(t[1][1], "***")
                    }
                    return e
                }
            }
        };
        r("2805");
        var g = Object(n.a)(y, function () {
                var a = this, o = a._self._c;
                return o(E.a, {
                    attrs: {scrollable: "", value: a.dialogs.error, width: "600", transition: !1},
                    on: {
                        "click:outside": function (e) {
                            return a.$store.dispatch("main/closeDialog", "error")
                        }, keydown: function (e) {
                            return !e.type.indexOf("key") && a._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : a.$store.dispatch("main/closeDialog", "error")
                        }
                    }
                }, [o(w.a, [o(_.d, {staticClass: "headline"}, ["old" == a.error.type ? o("span", [a._v(a._s(a.$t("common.errorOops")))]) : o("span", [a._v(a._s(a.$t("common.errorOccurred")))])]), o(_.c, [o($.a, [o(B.a, {attrs: {cols: 12}}, [o("div", {
                    staticClass: "mb-2",
                    staticStyle: {"font-size": "16px"}
                }, ["old" == a.error.type ? o("span", [a._v(" " + a._s(a.$t("common.errorToDeveloper") + ":"))]) : ["E_VALIDATION" == a.error.error.type ? a._l(a.error.error.fields, function (e, t) {
                    return o(H.a, {
                        key: "new-error-" + t,
                        attrs: {color: "red lighten-2", dark: ""}
                    }, [a._v(" " + a._s(a.hidePasswordAndEmail(a.getValidationMessage(e))) + " ")])
                }) : o("div", [a._v(" " + a._s(a.hidePasswordAndEmail(a.getMessageWithFallback().replace("username", "email"))) + " ")])]], 2), o(H.a, {
                    staticClass: "mb-0 pa-0",
                    staticStyle: {"font-size": "11px", "line-height": "12px !important", "word-break": "break-word"},
                    scopedSlots: a._u(["old" == a.error.type ? {
                        key: "append", fn: function () {
                            return [o(p.a, {
                                attrs: {top: ""}, scopedSlots: a._u([{
                                    key: "activator", fn: function ({on: e}) {
                                        return [o(i.a, a._g({
                                            attrs: {icon: "", small: ""},
                                            on: {click: a.copy}
                                        }, e), [o(W.a, {attrs: {color: "primary", size: 16}}, [a._v(" far fa-copy ")])], 1)]
                                    }
                                }], null, !1, 1625114e3)
                            }, [o("span", [a._v(a._s(a.$t("common.copy")))])])]
                        }, proxy: !0
                    } : null], null, !0)
                }, ["old" == a.error.type ? o("span", [a._v(a._s(a.hidePasswordAndEmail(a.error.message)))]) : a._e(), o("input", {
                    ref: "dialogErrorMessage",
                    attrs: {type: "hidden"},
                    domProps: {value: a.hidePasswordAndEmail(a.error.message)}
                })])], 1)], 1)], 1), o(v.a), o(_.a, [o(P.a), o(i.a, {
                    attrs: {text: "", color: "grey"},
                    on: {
                        click: function (e) {
                            return a.$store.dispatch("main/closeDialog", "error")
                        }
                    }
                }, [a._v(" " + a._s(a.$t("common.close")) + " ")])], 1)], 1)], 1)
            }, [], !1, null, null, null).exports, V = r("a609"), K = r("a523"), X = r("a844"), J = r("71d9"), S = r("2a7f"),
            y = {
                name: "DialogsFeedback", data() {
                    return {type: "feature", content: "", loading: !1}
                }, computed: {...Object(t.c)({dialogs: "main/dialogs"})}, methods: {
                    async sendFeedback() {
                        this.loading = !0, await this.apiv2.post("/feedback", {
                            type: this.type,
                            content: this.content
                        }), this.$store.dispatch("main/closeDialog", "feedback"), this.loading = !1, this.$store.dispatch("main/alert", {
                            color: "success",
                            message: this.$t("dialogs.feedback.feedbackSent")
                        })
                    }
                }
            };
        r("da22");
        var y = Object(n.a)(y, function () {
                var t = this, e = t._self._c;
                return e(E.a, {
                    attrs: {
                        id: "feedbackDialog",
                        value: t.dialogs.feedback,
                        width: "600",
                        scrollable: "",
                        transition: !1
                    }, on: {
                        "click:outside": function (e) {
                            return t.$store.dispatch("main/closeDialog", "feedback")
                        }, keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.$store.dispatch("main/closeDialog", "feedback")
                        }
                    }
                }, [e(w.a, [e(J.a, {
                    staticClass: "mb-5",
                    attrs: {height: 48, dark: "", color: "primary"}
                }, [e(S.b, [t._v(" " + t._s(t.$t("sidebar.feedback")) + " ")]), e(P.a), e(S.a, [e(i.a, {
                    attrs: {icon: ""},
                    on: {
                        click: function (e) {
                            return t.$store.dispatch("main/closeDialog", "feedback")
                        }
                    }
                }, [e("ion-icon", {
                    staticStyle: {"font-size": "28px"},
                    attrs: {name: "close-outline"}
                })], 1)], 1)], 1), e(_.c, [e(K.a, {staticClass: "pb-0"}, [e(V.a, {
                    attrs: {mandatory: ""},
                    model: {
                        value: t.type, callback: function (e) {
                            t.type = e
                        }, expression: "type"
                    }
                }, [e(i.a, {
                    attrs: {
                        value: "bug",
                        small: "",
                        color: "primary",
                        outlined: ""
                    }
                }, [e("span", {staticClass: "mr-1"}, [e("ion-icon", {
                    staticStyle: {"font-size": "18px"},
                    attrs: {name: "bug-outline"}
                })], 1), t._v(" " + t._s(t.$t("dialogs.feedback.bug")) + " ")]), e(i.a, {
                    attrs: {
                        value: "idea",
                        small: "",
                        color: "primary",
                        outlined: ""
                    }
                }, [e("span", {staticClass: "mr-1"}, [e("ion-icon", {
                    staticStyle: {"font-size": "18px"},
                    attrs: {name: "bulb-outline"}
                })], 1), t._v(" " + t._s(t.$t("dialogs.feedback.idea")) + " ")]), e(i.a, {
                    attrs: {
                        value: "review",
                        small: "",
                        color: "primary",
                        outlined: ""
                    }
                }, [e("span", {staticClass: "mr-1"}, [e("ion-icon", {
                    staticStyle: {"font-size": "18px"},
                    attrs: {name: "document-text-outline"}
                })], 1), t._v(" " + t._s(t.$t("dialogs.feedback.review")) + " ")]), e(i.a, {
                    attrs: {
                        value: "feature",
                        small: "",
                        color: "primary",
                        outlined: ""
                    }
                }, [e("span", {staticClass: "mr-1"}, [e("ion-icon", {
                    staticStyle: {"font-size": "18px"},
                    attrs: {name: "extension-puzzle-outline"}
                })], 1), t._v(" " + t._s(t.$t("dialogs.feedback.feature")) + " ")])], 1)], 1), e(K.a, [e(X.a, {
                    attrs: {
                        dense: "",
                        outlined: "",
                        "hide-details": "",
                        "auto-grow": "",
                        spellcheck: !1
                    }, model: {
                        value: t.content, callback: function (e) {
                            t.content = e
                        }, expression: "content"
                    }
                })], 1)], 1), e(v.a), e(_.a, [e(P.a), e(i.a, {
                    attrs: {text: "", color: "grey"}, on: {
                        click: function (e) {
                            return t.$store.dispatch("main/closeDialog", "feedback")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.close")) + " ")]), e(i.a, {
                    attrs: {
                        text: "",
                        color: "primary",
                        loading: t.loading
                    }, on: {click: t.sendFeedback}
                }, [t._v(" " + t._s(t.$t("common.send")) + " ")])], 1)], 1)], 1)
            }, [], !1, null, null, null).exports, T = r("0d68"), Q = {
                name: "DialogsLogoutConfirmation",
                mixins: [T.a],
                computed: {...Object(t.c)({dialogs: "main/dialogs"})}
            }, Q = Object(n.a)(Q, function () {
                var t = this, e = t._self._c;
                return e(E.a, {
                    attrs: {value: t.dialogs.logoutConfirmation, width: "600", scrollable: "", transition: !1},
                    on: {
                        "click:outside": function (e) {
                            return t.$store.dispatch("main/closeDialog", "logoutConfirmation")
                        }, keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.$store.dispatch("main/closeDialog", "logoutConfirmation")
                        }
                    }
                }, [e(w.a, [e(_.d, [t._v(" " + t._s(t.$t("dialogs.logoutConfirmation")) + " ")]), e(v.a), e(_.a, [e(P.a), e(i.a, {
                    attrs: {text: ""},
                    on: {
                        click: function (e) {
                            return t.$store.dispatch("main/closeDialog", "logoutConfirmation")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.no")) + " ")]), e(i.a, {
                    attrs: {text: ""},
                    on: {click: t.logOut}
                }, [t._v(" " + t._s(t.$t("common.yes")) + " ")])], 1)], 1)], 1)
            }, [], !1, null, null, null).exports, Z = r("afd9"), I = r("cc20"), ee = r("490a"), te = r("1f4f"),
            ae = (r("d9e2"), r("2903")), k = {
                name: "InfoBarHealth", components: {ExpiredPlanDisabledWrapper: b.a}, mixins: [ae.a], data() {
                    return {
                        proxyLoading: !1,
                        extensionLoading: !1,
                        antyBrowserLoading: !1,
                        dialogOpened: !1,
                        healthInterval: null,
                        health: {},
                        oldUseragents: {},
                        oldUseragentsLoading: !1
                    }
                }, computed: {
                    ...Object(t.c)({appVersion: "main/appVersion", disableUi: "main/disableUi"}), badHealth() {
                        return void 0 === this.health.result || !1 === this.health.result || this.oldUseragents.found
                    }, localApiPort() {
                        return "localhost" !== location.hostname ? localStorage.getItem("antyLocalApiPort") : "3001"
                    }, machineId() {
                        return new URL(location.href).searchParams.get("machineId")
                    }, actualChromeVersion() {
                        return this.chromeVersion
                    }
                }, sockets: {
                    browserDownloading(e) {
                        "setupEnded" === e.stage ? (this.antyBrowserLoading = !1, this.loadHealth()) : "downloadInProcess" === e.stage ? this.antyBrowserLoading = !0 : "downloadFailed" === e.stage && (this.antyBrowserLoading = !1)
                    }
                }, created() {
                    this.loadHealth();
                    const e = this;
                    this.healthInterval = setInterval(() => {
                        e.loadHealth()
                    }, 6e5)
                }, destroyed() {
                    clearInterval(this.healthInterval)
                }, methods: {
                    copyMachineId() {
                        try {
                            this.$refs.machineIdInput.type = "text", this.$refs.machineIdInput.select(), document.execCommand("copy"), this.$store.dispatch("main/alert", {
                                color: "success",
                                message: this.$t("common.copied")
                            })
                        } catch (e) {
                            this.$store.dispatch("main/alert", {color: "error", message: e.message})
                        } finally {
                            this.$refs.machineIdInput.type = "hidden"
                        }
                    }, openHealthDialog() {
                        this.checkOldUseragents(), this.dialogOpened = !0
                    }, async downloadExtension() {
                        try {
                            this.extensionLoading = !0;
                            var e = await this.localApi("/health/download-dolphin-extension");
                            200 === e.status && e.data && e.data.data && e.data.data.result && this.loadHealth()
                        } catch (e) {
                            console.log(e)
                        } finally {
                            this.extensionLoading = !1
                        }
                    }, async downloadProxyUtility() {
                        try {
                            this.proxyLoading = !0;
                            var e = await this.localApi("/health/download-proxy-tool");
                            200 === e.status && e.data && e.data.data && e.data.data.result && this.loadHealth()
                        } catch (e) {
                            console.log(e)
                        } finally {
                            this.proxyLoading = !1
                        }
                    }, async downloadAntyBrowser() {
                        this.antyBrowserLoading = !0, this.localApi("/health/download-anty-browser")
                    }, async loadHealth() {
                        try {
                            var e, t = await this.localApi("/health");
                            t && void 0 !== t.status && 200 === t.status && t.data && t.data.data && (this.health = t.data.data, this.$store.dispatch("health/setHealth", t.data.data), e = t.data.data.system.osVersion, localStorage.setItem("osInfo", e), localStorage.setItem("osIsNotCompatible", this.checkIfOsIsNotCompatible()))
                        } catch (e) {
                            console.error(e)
                        }
                    }, async checkOldUseragents() {
                        try {
                            this.oldUseragentsLoading = !0;
                            var e,
                                t = await this.api("/browser_profiles/check-old-useragents", {headers: {"X-Anty-App-Version": this.appVersion}});
                            200 === t.status && null != (e = t.data) && e.success && (this.oldUseragents = t.data.data, this.$store.dispatch("health/setOldUserAgents", t.data.data))
                        } catch (e) {
                            console.log(e)
                        } finally {
                            this.oldUseragentsLoading = !1
                        }
                    }, async downloadLogs() {
                        try {
                            var e = await this.localApi.get("/settings/debug_log");
                            if (200 !== e.status || !e.data || !e.data.success) throw console.log(e.data), new Error("Error while downloading debug log");
                            this.$store.dispatch("main/alert", {color: "success", message: this.$t("common.saved")})
                        } catch (e) {
                            console.log(e), this.$store.dispatch("main/alert", {
                                color: "error",
                                message: this.$t("errors.downloadLogError") + ": " + e.message
                            })
                        }
                    }, async upgradeOldUseragents() {
                        try {
                            this.oldUseragentsLoading = !0;
                            var e, t = await this.api("/browser_profiles/upgrade-old-useragents");
                            200 === t.status && null != (e = t.data) && e.success && (this.checkOldUseragents(), this.$store.dispatch("browserProfiles/loadCurrentPage"))
                        } catch (e) {
                            console.log(e)
                        } finally {
                            this.oldUseragentsLoading = !1
                        }
                    }
                }
            }, k = Object(n.a)(k, function () {
                var t = this, a = t._self._c;
                return a("div", [a(E.a, {
                    attrs: {scrollable: "", value: t.dialogOpened, width: "500", transition: !1},
                    on: {
                        "click:outside": function (e) {
                            t.dialogOpened = !1
                        }, keydown: function (e) {
                            if (!e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])) return null;
                            t.dialogOpened = !1
                        }
                    }
                }, [a(w.a, [a(J.a, {
                    staticClass: "mb-5",
                    attrs: {height: 48, dark: "", color: "primary"}
                }, [a(S.b, [t._v(" " + t._s(t.$t("common.health")) + " ")]), a(P.a), a(S.a, [a(i.a, {
                    attrs: {icon: ""},
                    on: {
                        click: function (e) {
                            t.dialogOpened = !1
                        }
                    }
                }, [a("ion-icon", {
                    staticStyle: {"font-size": "28px"},
                    attrs: {name: "close-outline"}
                })], 1)], 1)], 1), a(_.c, [a(te.a, [a("tbody", [a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("common.dolphinAntyVersion") + ":") + " ")]), a("td", [a("div", [t._v(" " + t._s(t.appVersion) + " ")])])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("common.platform") + ":") + " ")]), a("td", [t.health.system ? a("div", [t._v(" " + t._s(t.health.system.os) + " (" + t._s(t.health.system.arch) + ") ")]) : t._e()])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("common.storage") + ":") + " ")]), a("td", [t.health.storageHost ? a("div", [t._v(" " + t._s(t.health.storageHost) + " ")]) : t._e()])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("infoBar.apiPort") + ":") + " ")]), a("td", [t.localApiPort ? a("div", [t._v(" " + t._s(t.localApiPort) + " "), a("span", {
                    staticClass: "anty-linkable-span",
                    on: {click: t.downloadLogs}
                }, [a("small", [t._v(" (" + t._s(t.$t("common.downloadLogs").toLowerCase()) + ") ")])])]) : t._e()])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("common.antyBrowser") + ":") + " ")]), a("td", [t.health.antyBrowser ? a("div", {staticClass: "d-flex justify-space-between align-center"}, [a("div", [t.health.antyBrowser.downloaded ? a(I.a, {
                    attrs: {
                        color: "success",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" OK ")]) : a(I.a, {
                    attrs: {
                        color: "error",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" FAIL ")]), a("span", {
                    staticClass: "ml-1",
                    staticStyle: {color: "#9e9e9e", "font-style": "italic"}
                }, [t._v(" " + t._s(t.$t("common.version").toLowerCase()) + " " + t._s(t.health.antyBrowser.version) + " (Chrome " + t._s(t.actualChromeVersion) + ") ")])], 1), a("div", [t.antyBrowserLoading ? a(ee.a, {
                    attrs: {
                        indeterminate: "",
                        color: "primary",
                        size: "18"
                    }
                }) : t._e(), t.health.antyBrowser.downloaded || t.antyBrowserLoading ? t._e() : a("span", {
                    staticClass: "anty-linkable-span",
                    on: {click: t.downloadAntyBrowser}
                }, [t._v(" " + t._s(t.$t("common.download").toLowerCase()) + " ")])], 1)]) : t._e()])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("common.dolphinExtension") + ":") + " ")]), a("td", [t.health.dolphinExtension ? a("div", {staticClass: "d-flex justify-space-between align-center"}, [a("div", [t.health.dolphinExtension.downloaded ? a(I.a, {
                    attrs: {
                        color: "success",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" OK ")]) : a(I.a, {
                    attrs: {
                        color: "error",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" FAIL ")]), a("span", {
                    staticClass: "ml-1",
                    staticStyle: {color: "#9e9e9e", "font-style": "italic"}
                }, [t._v(" " + t._s(t.$t("common.version").toLowerCase()) + " " + t._s(t.health.dolphinExtension.version) + " ")])], 1), a("div", [t.extensionLoading ? a(ee.a, {
                    attrs: {
                        indeterminate: "",
                        color: "primary",
                        size: "18"
                    }
                }) : t._e(), t.health.dolphinExtension.downloaded || t.extensionLoading ? t._e() : a("span", {
                    staticClass: "anty-linkable-span",
                    on: {click: t.downloadExtension}
                }, [t._v(" " + t._s(t.$t("common.download").toLowerCase()) + " ")])], 1)]) : t._e()])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("common.proxyUtility") + ":") + " ")]), a("td", [t.health.proxyTool ? a("div", {staticClass: "d-flex justify-space-between align-center"}, [a("div", [t.health.proxyTool.downloaded ? a(I.a, {
                    attrs: {
                        color: "success",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" OK ")]) : a(I.a, {
                    attrs: {
                        color: "error",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" FAIL ")]), a("span", {
                    staticClass: "ml-1",
                    staticStyle: {color: "#9e9e9e", "font-style": "italic"}
                }, [t._v(" " + t._s(t.$t("common.version").toLowerCase()) + " " + t._s(t.health.proxyTool.version) + " ")])], 1), a("div", [t.proxyLoading ? a(ee.a, {
                    attrs: {
                        indeterminate: "",
                        color: "primary",
                        size: "18"
                    }
                }) : t._e(), t.health.proxyTool.downloaded || t.proxyLoading ? t._e() : a("span", {
                    staticClass: "anty-linkable-span",
                    on: {click: t.downloadProxyUtility}
                }, [t._v(" " + t._s(t.$t("common.download").toLowerCase()) + " ")])], 1)]) : t._e()])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("infoBar.oldUseragents") + ":") + " ")]), a("td", [a("div", {staticClass: "d-flex justify-space-between align-center"}, [void 0 !== t.oldUseragents.found ? a("div", [t.oldUseragents.found ? a("div", [a(I.a, {
                    attrs: {
                        color: "error",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" " + t._s(t.$t("common.yes").toUpperCase()) + " ")]), a("span", {
                    staticClass: "ml-2 anty-linkable-span",
                    on: {click: t.upgradeOldUseragents}
                }, [t._v(t._s(t.$t("infoBar.upgradeAll").toLowerCase()))])], 1) : a(I.a, {
                    attrs: {
                        color: "success",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" " + t._s(t.$t("common.no").toUpperCase()) + " ")])], 1) : a("div", [a("span", {
                    staticClass: "ml-2",
                    staticStyle: {color: "#9e9e9e", "font-style": "italic"}
                }, [t._v(" " + t._s(t.$t("common.noData").toLowerCase()) + " ")]), a(i.a, {
                    attrs: {
                        color: "grey",
                        icon: "",
                        "x-small": "",
                        loading: t.oldUseragentsLoading
                    }, on: {click: t.checkOldUseragents}
                }, [a(W.a, {attrs: {small: ""}}, [t._v(" mdi-cached ")])], 1)], 1), a("div", [void 0 !== t.oldUseragents.found && t.oldUseragentsLoading ? a(ee.a, {
                    attrs: {
                        indeterminate: "",
                        color: "primary",
                        size: "18"
                    }
                }) : t._e()], 1)])])]), a("tr", [a("td", {staticStyle: {width: "200px"}}, [t._v(" " + t._s(t.$t("infoBar.machineId") + ":") + " ")]), a("td", [t.machineId ? a("div", [20 < t.machineId.length ? a(I.a, {
                    attrs: {
                        color: "success",
                        small: "",
                        label: "",
                        outlined: ""
                    }
                }, [t._v(" OK ")]) : t._e(), a(p.a, {
                    attrs: {bottom: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a(i.a, t._g({
                                attrs: {color: "grey", small: "", icon: ""},
                                on: {click: t.copyMachineId}
                            }, e), [a(W.a, {attrs: {size: "16"}}, [t._v(" mdi-clipboard-outline ")])], 1)]
                        }
                    }], null, !1, 2349159019)
                }, [a("span", [t._v(t._s(t.$t("common.copy")))])]), a("input", {
                    ref: "machineIdInput",
                    attrs: {type: "hidden", readonly: ""},
                    domProps: {value: t.machineId}
                })], 1) : t._e()])])])])], 1)], 1)], 1), a("expired-plan-disabled-wrapper", [a("span", {
                    staticClass: "anty-linkable-span",
                    class: {
                        "orange--text": !t.badHealth,
                        "red--text": t.badHealth,
                        "font-weight-bold": t.badHealth,
                        "anty-adsmanager-main-table-link-disabled": t.disableUi
                    },
                    attrs: {id: "antyHealthButton"},
                    on: {click: t.openHealthDialog}
                }, [t._v(" " + t._s(t.badHealth ? "!! " : "") + t._s(t.$t("common.health").toLowerCase()) + " ")])])], 1)
            }, [], !1, null, null, null).exports, oe = {
                name: "InfoBarSubscription", data() {
                    return {moment: m.a}
                }, computed: {...Object(t.c)({subscription: "main/subscription", profile: "main/profile"})}
            }, oe = Object(n.a)(oe, function () {
                var e = this, t = e._self._c;
                return t("div", {staticClass: "d-flex"}, [e.subscription.plan ? t("div", {
                    staticClass: "mr-2",
                    attrs: {id: "InfoBarSubscriptionPlan"}
                }, [e._v(" " + e._s(e.$t("infoBar.plans." + e.subscription.plan)) + " ")]) : e._e(), e.subscription.expiration ? t("div", {
                    staticClass: "mr-2",
                    attrs: {id: "InfoBarSubscriptionDate"}
                }, [e._v(" " + e._s(e.moment.parseZone(e.subscription.expiration).local().format("YYYY-DD-MM HH:mm:ss")) + " ")]) : e._e(), e.subscription.users && "admin" === e.profile.role ? t("div", {
                    staticClass: "mr-2",
                    attrs: {id: "InfoBarSubscriptionUsers"}
                }, [e._v(" " + e._s(e.$t("infoBar.users") + " ") + " " + e._s(e.subscription.users.count + " /") + " "), t("span", {staticStyle: {"font-weight": "bold"}}, [e._v(" " + e._s(e.subscription.users.limit) + " ")])]) : e._e(), e.subscription.browserProfiles ? t("div", {attrs: {id: "InfoBarSubscriptionProfiles"}}, [e._v(" " + e._s(e.$t("infoBar.profiles") + " ") + " " + e._s(e.subscription.browserProfiles.count + " /") + " "), t("span", {staticStyle: {"font-weight": "bold"}}, [e._v(" " + e._s(e.subscription.browserProfiles.limit) + " ")])]) : e._e()])
            }, [], !1, null, null, null).exports, re = r("8fea"), se = r("f9e0"), A = r("b38e"), x = r("fc50"),
            D = r("a16a"), C = r("e29d"), ie = r("7948"), se = {
                name: "BrowserProfilesActionsDialogBasket",
                components: {
                    MainTableCellStatus: se.a,
                    MainTableCellProxy: A.a,
                    MainTableCellTags: x.a,
                    LastEdited: D.a,
                    Pagination: C.a
                },
                mixins: [ie.a],
                data() {
                    return {buttonLoading: !1}
                },
                computed: {
                    ...Object(t.c)({
                        browserProfiles: "browserProfiles/browserProfiles",
                        dialogs: "browserProfiles/dialogs",
                        pagination: "browserProfiles/paginationBasket",
                        innerHeight: "main/innerHeight",
                        subscription: "main/subscription",
                        profile: "main/profile"
                    }), ...Object(a.b)("browserProfiles", ["basket"]), cols() {
                        var e = [];
                        return e.push({
                            text: this.$t("common.name"),
                            value: "name"
                        }), e.push({
                            text: this.$t("common.status"),
                            value: "status"
                        }), e.push({text: this.$t("common.proxy"), value: "proxy"}), e.push({
                            text: this.$t("common.tags"),
                            value: "tags"
                        }), e.push({text: this.$t("common.deleted_at"), value: "updated_at"}), e
                    }, footerOptions() {
                        var e = {};
                        return e.page = this.pagination.currentPage, e.itemsPerPage = this.pagination.perPage, e
                    }
                },
                async mounted() {
                    await this.$store.dispatch("browserProfiles/loadBasket", {itemsPerPage: 100})
                },
                methods: {
                    async basketRestoreProfiles() {
                        try {
                            this.buttonLoading = !0;
                            var e = {ids: this.basket.selected.map(e => parseInt(e.id, 10))},
                                t = (await this.$store.dispatch("browserProfiles/restoreProfiles", e), (new this.$amplitude.Identify).add("profiles count", +e.ids.length));
                            this.$amplitude.getInstance().identify(t), this.$amplitude.getInstance().logEvent("Profile Restore")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            this.buttonLoading = !1, this.$store.dispatch("browserProfiles/loadCurrentPage"), this.$store.dispatch("browserProfiles/loadCurrentPageBasket"), await this.$store.dispatch("main/getSubscription"), await this.checkForTariffExperiments(this.profile, this.subscription)
                        }
                    }
                }
            }, A = Object(n.a)(se, function () {
                var t = this, a = t._self._c;
                return a(E.a, {
                    attrs: {
                        value: t.dialogs.basket,
                        width: "900",
                        "overlay-opacity": .9,
                        scrollable: "",
                        transition: !1
                    }, on: {
                        "click:outside": function (e) {
                            return t.$store.dispatch("browserProfiles/closeDialog", "basket")
                        }, keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.$store.dispatch("browserProfiles/closeDialog", "basket")
                        }
                    }
                }, [a(w.a, [a(J.a, {
                    staticClass: "pr-0",
                    attrs: {height: 48, dark: "", color: "error"}
                }, [a(S.b, [t._v(" " + t._s(t.$t("dialogs.basket.title", [t.basket.total])) + " ")]), a(P.a), a(S.a, [a(i.a, {
                    attrs: {icon: ""},
                    on: {
                        click: function (e) {
                            return t.$store.dispatch("browserProfiles/closeDialog", "basket")
                        }
                    }
                }, [a("ion-icon", {
                    staticStyle: {"font-size": "28px"},
                    attrs: {name: "close-outline"}
                })], 1)], 1)], 1), a(_.c, {staticClass: "pt-5"}, [a(H.a, {
                    staticClass: "mb-0 mt-2",
                    attrs: {icon: "fas fa-exclamation-triangle", type: "warning"}
                }, [t._v(" " + t._s(t.$t("dialogs.basket.warring")) + " ")]), a("br"), a(re.a, {
                    staticClass: "anty-main-table",
                    attrs: {
                        items: t.basket.profiles,
                        "item-key": "id",
                        headers: t.cols,
                        loading: t.browserProfiles.loading.includes("mainBasket"),
                        "fixed-header": "",
                        height: t.innerHeight - 500,
                        "items-per-page": -1,
                        "hide-default-footer": "",
                        "show-select": ""
                    },
                    scopedSlots: t._u([{
                        key: "item.status", fn: function ({item: e}) {
                            return [a("main-table-cell-status", {attrs: {"browser-profile": e, "do-not-change": ""}})]
                        }
                    }, {
                        key: "item.proxy", fn: function ({item: e}) {
                            return [a("main-table-cell-proxy", {attrs: {"browser-profile": e, "do-not-change": ""}})]
                        }
                    }, {
                        key: "item.tags", fn: function ({item: e}) {
                            return [a("main-table-cell-tags", {attrs: {"browser-profile": e, "do-not-change": ""}})]
                        }
                    }, {
                        key: "item.updated_at", fn: function ({item: e}) {
                            return [a("last-edited", {attrs: {"browser-profile": e, "do-not-change": ""}})]
                        }
                    }], null, !0),
                    model: {
                        value: t.basket.selected, callback: function (e) {
                            t.$set(t.basket, "selected", e)
                        }, expression: "basket.selected"
                    }
                })], 1), a(_.a, [a(P.a), a(i.a, {
                    attrs: {text: "", color: "grey"}, on: {
                        click: function (e) {
                            return t.$store.dispatch("browserProfiles/closeDialog", "basket")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.cancelBasket")) + " ")]), 0 < t.basket.selected.length ? a(i.a, {
                    attrs: {
                        id: "browserProfilesActionsDialogbasketConfirmButton",
                        color: "error",
                        text: "",
                        loading: t.buttonLoading
                    }, on: {click: t.basketRestoreProfiles}
                }, [t._v(" " + t._s(t.$t("common.restore")) + " ")]) : t._e()], 1), [a("pagination", {
                    attrs: {
                        "disable-pagination": t.basket.loading.includes("mainBasket"),
                        "go-to-page-payload": {
                            tags: t.pagination.tags,
                            mainWebsites: t.pagination.mainWebsites,
                            statuses: t.pagination.statuses,
                            users: t.pagination.users
                        },
                        "go-to-page-action": "browserProfiles/loadBasket",
                        pagination: t.pagination,
                        "footer-options": t.footerOptions
                    }
                })]], 2)], 1)
            }, [], !1, null, null, null).exports, x = {
                name: "InfoBar",
                components: {ExpiredPlanDisabledWrapper: b.a, InfoBarHealth: k, InfoBarSubscription: oe, DialogBasket: A},
                mixins: [ie.a, f.a],
                computed: {
                    ...Object(t.c)({
                        profile: "main/profile",
                        isFreeTariff: "main/isFreeTariff",
                        dialogs: "browserProfiles/dialogs",
                        subscription: "main/subscription",
                        appVersion: "main/appVersion",
                        disableUi: "main/disableUi"
                    })
                },
                created() {
                    const e = this;
                    setInterval(async () => {
                        await e.$store.dispatch("main/getSubscription"), await e.checkForTariffExperiments(this.profile, this.subscription)
                    }, 36e5)
                },
                methods: {
                    logOut() {
                        this.$store.dispatch("main/openDialog", "logoutConfirmation")
                    }
                }
            }, D = Object(n.a)(x, function () {
                var t = this, e = t._self._c;
                return e(Z.a, {
                    staticStyle: {
                        color: "#9E9E9E",
                        "z-index": "2",
                        position: "fixed",
                        bottom: "0",
                        width: "100%",
                        height: "16px",
                        "font-size": "11px",
                        "padding-left": "64px",
                        "padding-bottom": "4px"
                    }
                }, [e(P.a), t.$_.isEmpty(t.subscription) ? t._e() : e("info-bar-subscription"), t.$_.isEmpty(t.subscription) ? t._e() : e(v.a, {
                    staticClass: "mx-2",
                    attrs: {vertical: ""}
                }), e("info-bar-health"), e(v.a, {
                    staticClass: "mx-2",
                    attrs: {vertical: ""}
                }), e("expired-plan-disabled-wrapper", [e("span", {
                    staticClass: "anty-main-table-link",
                    class: {"anty-adsmanager-main-table-link-disabled": t.disableUi},
                    attrs: {id: "infoBarDebug"},
                    on: {
                        click: function (e) {
                            return t.openExternalLink("https://dolphin-anty.site24x7signals.eu/")
                        }
                    }
                }, [t._v(t._s(t.$t("common.status").toLowerCase()))])]), e(v.a, {
                    staticClass: "mx-2",
                    attrs: {vertical: ""}
                }), t.isFreeTariff ? t._e() : [e("span", {
                    staticClass: "anty-main-table-link",
                    attrs: {id: "infoBarBasket"},
                    on: {
                        click: function (e) {
                            return t.$store.dispatch("browserProfiles/openDialog", "basket")
                        }
                    }
                }, [t._v(t._s(t.$t("common.basket")))]), t.dialogs.basket ? e("dialog-basket") : t._e(), e(v.a, {
                    staticClass: "mx-2",
                    attrs: {vertical: ""}
                })], e("span", {attrs: {id: "infoBarAppVersion"}}, [t._v(" " + t._s(t.$t("common.version").toLowerCase()) + " " + t._s(t.appVersion) + " ")]), e(v.a, {
                    staticClass: "mx-2",
                    attrs: {vertical: ""}
                }), e("span", {attrs: {id: "infoBarAppVersion"}}, [t._v(" " + t._s(t.branchName ? t.branchName.substring(0, 42) : "unknown") + "#" + t._s(t.branchHash ? t.branchHash.substring(0, 8) : "unknown") + " ")]), e(v.a, {
                    staticClass: "mx-2",
                    attrs: {vertical: ""}
                }), e("span", {attrs: {id: "infoBarProfileUsername"}}, [t._v(" " + t._s(t.profile.username) + " ")])], 2)
            }, [], !1, null, null, null).exports, ne = r("8e36"), C = {
                name: "DialogsDownloadingChrome",
                computed: {...Object(t.c)({browserDownloading: "main/browserDownloading"})},
                methods: {
                    refreshDownload() {
                        this.localApi.post("/download-browser")
                    }
                }
            };
        r("ed5c");
        var se = Object(n.a)(C, function () {
            var t = this, a = t._self._c;
            return a(H.a, {
                staticClass: "downloading-chrome-alert pt-2",
                attrs: {color: "primary", dark: ""}
            }, [a("div", {staticClass: "d-flex justify-space-between"}, [a("div", {staticClass: "mb-2"}, [t._v(" " + t._s(t.$t("common." + t.browserDownloading.stage.replace("Ended", "Started")) + "...") + " ")])]), t.browserDownloading.showProgress ? a(ne.a, {
                attrs: {
                    value: t.browserDownloading.percentage,
                    height: "20",
                    color: "light-blue"
                }, scopedSlots: t._u([{
                    key: "default", fn: function ({value: e}) {
                        return [a("strong", [t._v(t._s(Math.ceil(e)) + "%")])]
                    }
                }], null, !1, 3002676263)
            }) : t._e()], 1)
        }, [], !1, null, null, null).exports, b = r("29f1"), le = r("c083"), de = r("8654"), k = {
            name: "DialogsEditProfile",
            components: {UserAvatar: h, myUpload: r("0b4d").a},
            mixins: [f.a],
            data() {
                return {
                    avatarCropperTrigger: !1,
                    avatarUploadLoading: !1,
                    avatarDeleteLoading: !1,
                    saveLoading: !1,
                    oldDisplayName: null
                }
            },
            computed: {
                ...Object(t.c)({
                    dialogs: "main/dialogs",
                    trialExpired: "main/trialExpired",
                    extraBrowserProfiles: "main/extraBrowserProfiles",
                    extraUsers: "main/extraUsers",
                    subscription: "main/subscription"
                }), ...Object(a.b)("main", ["profile.displayName"]), isFreePlan() {
                    var e;
                    return "free" === (null == (e = this.subscription) ? void 0 : e.plan) && !(null != (e = this.subscription) && e.expiration)
                }, authorizationHeader() {
                    return "Bearer " + localStorage.getItem("accessToken")
                }, profileLanguage() {
                    return localStorage.getItem("profileLanguage")
                }
            },
            created() {
                this.oldDisplayName = this.displayName
            },
            methods: {
                capitalize(e) {
                    return e.substring(0, 1).toUpperCase() + e.substring(1)
                }, async deleteAvatar() {
                    this.avatarDeleteLoading = !0;
                    try {
                        await this.api.delete("/profile/avatar"), this.$store.dispatch("main/loadProfile")
                    } catch (e) {
                        this.$store.dispatch("main/alert", {
                            message: this.$t("common.somethingWentWrong"),
                            color: "error"
                        })
                    }
                    this.avatarDeleteLoading = !1
                }, handleAvatarUploading() {
                    this.avatarUploadLoading = !0
                }, handleAvatarUploadingCompleted() {
                    this.avatarUploadLoading = !1, this.$store.dispatch("main/loadProfile"), this.avatarCropperTrigger = !1
                }, handleAvatarUploadingError() {
                    this.avatarUploadLoading = !1, this.$store.dispatch("main/alert", {
                        message: this.$t("common.somethingWentWrong"),
                        color: "error"
                    }), this.avatarCropperTrigger = !1
                }, async save() {
                    if (this.oldDisplayName !== this.displayName) {
                        this.saveLoading = !0;
                        try {
                            await this.api.patch("/profile", {displayName: this.displayName})
                        } catch (e) {
                            this.$store.dispatch("main/alert", {
                                message: this.$t("common.somethingWentWrong"),
                                color: "error"
                            })
                        }
                        this.saveLoading = !1, this.$store.dispatch("main/closeDialog", "editProfile"), this.$store.dispatch("main/alert", {
                            message: this.$t("common.success"),
                            color: "success"
                        }), this.$store.dispatch("main/loadProfile")
                    } else this.$store.dispatch("main/closeDialog", "editProfile")
                }
            }
        };
        r("3ef6");
        var oe = Object(n.a)(k, function () {
            var t = this, e = t._self._c;
            return e(E.a, {
                attrs: {value: t.dialogs.editProfile, width: "480", transition: !1},
                on: {
                    "click:outside": function (e) {
                        return t.$store.dispatch("main/closeDialog", "editProfile")
                    }, keydown: function (e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.$store.dispatch("main/closeDialog", "editProfile")
                    }
                }
            }, [e(w.a, [e(J.a, {
                staticClass: "mb-5",
                attrs: {height: 48, dark: "", color: "primary"}
            }, [e(S.b, [t._v(" " + t._s(t.$t("common.editProfile")) + " ")]), e(P.a), e(S.a, [e(i.a, {
                attrs: {icon: ""},
                on: {
                    click: function (e) {
                        return t.$store.dispatch("main/closeDialog", "editProfile")
                    }
                }
            }, [e("ion-icon", {
                staticStyle: {"font-size": "28px"},
                attrs: {name: "close-outline"}
            })], 1)], 1)], 1), e(_.c, [e("div", {staticStyle: {display: "flex"}}, [e("div", {staticClass: "mr-3"}, [e("div", {staticStyle: {"text-align": "center"}}, [e("user-avatar", {attrs: {size: 64}})], 1), e("div", {
                staticClass: "mt-2",
                staticStyle: {"text-align": "center"}
            }, [e(i.a, {
                attrs: {text: "", color: "primary", "x-small": "", loading: t.avatarUploadLoading},
                on: {
                    click: function (e) {
                        t.avatarCropperTrigger = !0
                    }
                }
            }, [t._v(" " + t._s(t.$t("common.upload")) + " ")])], 1), e("div", {staticStyle: {"text-align": "center"}}, [e(i.a, {
                attrs: {
                    text: "",
                    loading: t.avatarDeleteLoading,
                    color: "red",
                    "x-small": ""
                }, on: {click: t.deleteAvatar}
            }, [t._v(" " + t._s(t.$t("common.delete")) + " ")])], 1)]), e("div", {staticStyle: {width: "100%"}}, [e("div", {staticStyle: {width: "100%"}}, [e(de.a, {
                staticStyle: {position: "relative"},
                attrs: {label: "Отображаемое имя", outlined: "", dense: "", "full-width": "", "hide-details": ""},
                model: {
                    value: t.displayName, callback: function (e) {
                        t.displayName = e
                    }, expression: "displayName"
                }
            })], 1), t.isFreePlan ? e("div", {staticClass: "mt-5"}, [e("div", {
                staticStyle: {
                    display: "flex",
                    "align-items": "center"
                }
            }, [e("div", {
                staticClass: "free-title",
                style: "color: " + (t.$vuetify.theme.dark ? "#FFFFFF" : "#000000")
            }, [t._v(" " + t._s(t.$t("dialogs.freeTariff.yourTariffFree")) + " " + t._s(t.capitalize(t.subscription.plan)) + " ")])]), e("div", {
                staticClass: "free-desc",
                domProps: {innerHTML: t._s(t.$t("dialogs.freeTariff.freeAvailable"))}
            }), e(i.a, {
                staticClass: "free-btn",
                attrs: {color: "#2196F3", "min-width": "137", height: "33"},
                on: {
                    click: function (e) {
                        return t.openExternalLink(t.landingUrl + "/panel/#/payment?utm_source=ecosystem&utm_medium=cpc&utm_campaign=dolphin_anty_app&utm_content=profile_window", !0)
                    }
                }
            }, [t._v(" " + t._s(t.$t("common.selectTariff")) + " ")])], 1) : t._e()])]), t.avatarCropperTrigger ? e("my-upload", {
                attrs: {
                    "no-square": "",
                    field: "file",
                    width: 128,
                    height: 128,
                    url: t.baseUrl + "/profile/avatar",
                    method: "POST",
                    headers: {Authorization: t.authorizationHeader},
                    "img-format": "png",
                    "lang-type": t.$i18n.locale
                },
                on: {
                    "crop-success": t.handleAvatarUploading,
                    "crop-upload-success": t.handleAvatarUploadingCompleted,
                    "crop-upload-fail": t.handleAvatarUploadingError
                },
                model: {
                    value: t.avatarCropperTrigger, callback: function (e) {
                        t.avatarCropperTrigger = e
                    }, expression: "avatarCropperTrigger"
                }
            }) : t._e()], 1), e(v.a), e(_.a, [e(P.a), e(i.a, {
                attrs: {
                    text: "",
                    color: "primary",
                    loading: t.saveLoading
                }, on: {click: t.save}
            }, [t._v(" " + t._s(t.$t("common.save")) + " ")])], 1)], 1)], 1)
        }, [], !1, null, null, null).exports, A = r("2542"), ce = r.n(A), x = {
            name: "DialogsFreeTariffExceededBrowserProfiles", mixins: [f.a], data() {
                return {hourglassEmoji: ce.a}
            }, computed: {...Object(t.c)({dialogs: "experiments/dialogs"})}, methods: {
                closeDialog() {
                    this.$store.dispatch("experiments/closeDialog", "freeTariffExtraBrowserProfiles")
                }
            }
        }, C = Object(n.a)(x, function () {
            var t = this, e = t._self._c;
            return e(E.a, {
                attrs: {
                    value: t.dialogs.freeTariffExtraBrowserProfiles,
                    width: "541",
                    transition: !1,
                    persistent: ""
                }
            }, [e(w.a, {staticClass: "trial-period-dialog"}, [e("img", {
                attrs: {
                    src: t.hourglassEmoji,
                    alt: "Hand waving emoji"
                }
            }), e(i.a, {
                staticStyle: {position: "absolute", right: "25px", top: "25px"},
                attrs: {icon: "", color: "grey", width: "14", height: "14px"},
                on: {click: t.closeDialog}
            }, [e(W.a, [t._v("mdi-close")])], 1), e(_.d, {
                staticClass: "trial-period-dialog-title",
                staticStyle: {"margin-top": "4px"}
            }, [t._v(" " + t._s(t.$t("dialogs.freeTariff.exceededTitle")) + " ")]), e(_.c, {
                staticClass: "trial-period-dialog-desc",
                staticStyle: {padding: "0"}
            }, [t._v(" " + t._s(t.$t("dialogs.freeTariff.exceededDesc")) + " ")]), e("div", {staticClass: "trial-period-dialog-buttons"}, [e(i.a, {
                staticClass: "trial-period-dialog-button-tariff",
                attrs: {"min-width": "140", height: "39", color: "blue"},
                on: {
                    click: function (e) {
                        return t.openExternalLink(t.landingUrl + "/panel/#/payment?utm_source=ecosystem&utm_medium=cpc&utm_campaign=dolphin_anty_app&utm_content=free_popup", !0)
                    }
                }
            }, [t._v(" " + t._s(t.$t("common.upgradePlan")) + " ")])], 1)], 1)], 1)
        }, [], !1, null, null, null).exports, pe = r("4f38");
        let ue = !1;
        const me = "https://anty-api.com,http://127.0.0.1:5000,https://api.dolphin-anty-ru.online,https://api.dolphin-anty-ua.online,https://api.dolphin-anty-cn.online,https://api.dolphin-anty-mirror.com,https://api.dolphin-anty-mirror.net,https://api.dolphin-anty-mirror.org".split(",");
        h = {
            mixins: [T.a], created() {
                this.applyAppTokenRefreshInterceptor(this.api, this.apiErrorHandling), this.applyAppTokenRefreshInterceptor(this.apiv2, this.apiErrorHandling), this.applyAppTokenRefreshInterceptor(this.localApi, this.apiErrorLocalHandling), this.syncApi.interceptors.response.use(e => e, async e => this.apiErrorHandling(e)), this.api.interceptors.request.use(async e => me.includes(e.baseURL) ? e : null, async e => e)
            }, methods: {
                shouldRefreshToken(e) {
                    try {
                        var t, a, o;
                        return 401 === (null == (t = e.response) ? void 0 : t.status) && localStorage.getItem("refreshToken") && "Login" !== this.$route.name && "/auth/refreshToken" !== (null == (a = e.response) || null == (o = a.config) ? void 0 : o.url)
                    } catch (e) {
                        return !1
                    }
                }, shouldLogout(e) {
                    return 401 === (null == (e = e.response) ? void 0 : e.status)
                }, async apiErrorHandling(e) {
                    var t, a, o;
                    if (e.response && e.request) return t = 429 === e.response.status, a = 400 === e.response.status, o = "/auth/login" === (null == (o = e.response) || null == (o = o.config) ? void 0 : o.url), (t || a) && o ? e : void (401 !== e.response.status && await this.apiErrorBackendHandling(e))
                }, async apiErrorBackendHandling(e) {
                    var t;
                    e.response && e.request && (t = {
                        request: {
                            url: e.request.responseURL,
                            data: e.response.config.data
                        }, response: {status: e.response.status, data: e.response.data}
                    }, void 0 !== e.response.data.error.code ? (await this.$store.dispatch("main/setError", {
                        key: "message",
                        value: e.response.data.error.text
                    }), await this.$store.dispatch("main/setError", {
                        key: "type",
                        value: "new"
                    }), await this.$store.dispatch("main/setError", {
                        key: "code",
                        value: e.response.data.error.code
                    }), await this.$store.dispatch("main/setError", {
                        key: "error",
                        value: e.response.data.error
                    })) : (await this.$store.dispatch("main/setError", {
                        key: "message",
                        value: JSON.stringify(t)
                    }), await this.$store.dispatch("main/setError", {
                        key: "type",
                        value: "old"
                    })), await this.$store.dispatch("main/openDialog", "error"))
                }, async apiErrorLocalHandling(e) {
                    var t, a;
                    e.response && e.request && (a = {
                        request: {
                            url: e.request.responseURL,
                            data: e.response.config.data
                        }, response: {status: e.response.status, data: e.response.data}
                    }, void 0 !== (null == (t = e.response.data) || null == (t = t.errorObject) ? void 0 : t.code) ? (await this.$store.dispatch("main/setError", {
                        key: "message",
                        value: e.response.data.errorObject.text || e.response.data.error
                    }), await this.$store.dispatch("main/setError", {
                        key: "type",
                        value: "new"
                    }), await this.$store.dispatch("main/setError", {
                        key: "code",
                        value: e.response.data.errorObject.code
                    }), await this.$store.dispatch("main/setError", {
                        key: "error",
                        value: e.response.data.errorObject
                    })) : (422 === e.response.status && null != (t = e.response) && null != (t = t.data) && t.error ? await this.$store.dispatch("main/setError", {
                        key: "message",
                        value: e.response.data.error
                    }) : await this.$store.dispatch("main/setError", {
                        key: "message",
                        value: JSON.stringify(a)
                    }), await this.$store.dispatch("main/setError", {
                        key: "type",
                        value: "old"
                    })), await this.$store.dispatch("main/openDialog", "error"))
                }, async setTokenData(e = {}, t) {
                    var {token: e, refreshToken: a} = e;
                    this.api.defaults.headers.Authorization = "Bearer " + e, this.apiv2.defaults.headers.Authorization = "Bearer " + e, this.syncApi.defaults.headers.Authorization = "Bearer " + e, this.localApi.defaults.headers.Authorization = "Bearer " + e;
                    try {
                        await this.localApi.post("/remote_api_token", {token: e})
                    } catch (e) {
                        console.error(e)
                    }
                    localStorage.setItem("remoteApiToken", "" + e + pe.a + a), localStorage.setItem("accessToken", e), localStorage.setItem("refreshToken", a)
                }, handleTokenRefresh() {
                    const r = window.localStorage.getItem("refreshToken");
                    return new Promise(async (e, t) => {
                        var a = await this.api.post("/auth/refreshToken", {refreshToken: r}),
                            o = null != (o = a.status) ? o : a.response.status;
                        if (200 === o) {
                            const r = a["data"], t = {token: r.token, refreshToken: r.refresh_token};
                            this.setTokenData(t), e(t)
                        } else 401 === o ? this.logOut() : t(o)
                    })
                }, attachTokenToRequest(e, t) {
                    e.headers.Authorization = "Bearer " + t
                }, applyAppTokenRefreshInterceptor(a, o, e) {
                    let r = [];
                    const s = {
                        attachTokenToRequest: this.attachTokenToRequest,
                        handleTokenRefresh: this.handleTokenRefresh,
                        setTokenData: this.setTokenData,
                        shouldRefreshToken: this.shouldRefreshToken, ...e
                    }, i = (t, a = null) => {
                        r.forEach(e => {
                            t ? e.reject(t) : e.resolve(a)
                        }), r = []
                    };
                    a.interceptors.response.use(void 0, t => {
                        if (s.shouldRefreshToken(t)) {
                            if (t.config._retry || t.config._queued) return Promise.reject(t);
                            const o = t.config;
                            return ue ? new Promise(function (e, t) {
                                r.push({resolve: e, reject: t})
                            }).then(e => (o._queued = !0, s.attachTokenToRequest(o, e), a.request(o))).catch(e => Promise.reject(t)) : (o._retry = !0, ue = !0, new Promise((t, e) => {
                                s.handleTokenRefresh.call(s.handleTokenRefresh).then(async e => {
                                    await s.setTokenData(e, a), s.attachTokenToRequest(o, e.token), i(null, e.token), ue = !1, t(a.request(o))
                                }).catch(async e => {
                                    s.handleTokenRefresh.call(s.handleTokenRefresh).then(e => {
                                        s.setTokenData(e, a), s.attachTokenToRequest(o, e.token), i(null, e.token), ue = !1, t(a.request(o))
                                    }).catch(async e => {
                                        this.logOut()
                                    })
                                })
                            }))
                        }
                        return this.shouldLogout(t) ? this.logOut() : o(t), t
                    })
                }
            }
        };
        const ge = {
            cardColor: "#fff",
            cardBorder: "1px solid #B2B2B2",
            cardBorderRadius: "4",
            inputTextColor: "#212121",
            placeHolderColor: "#B2B2B2",
            msgTextColor: "#B2B2B2",
            invalidMsgTextColor: "#FF5252",
            msgTextFont: "'Verdana'",
            inputBackgroundColor: "#FFF",
            inputBorderColor: {byDefault: "#B2B2B2", hover: "#B2B2B2", active: "#B2B2B2"},
            buttonIconColor: {
                refresh: "#4B4B4B",
                verify: "#9739C1",
                success: "#4CAF50",
                fail: "#FF5252",
                audio: "#4B4B4B",
                audiofocus: "#9739C1"
            }
        }, he = {
            cardColor: "#121212",
            cardBorder: "1px solid #4B4B4B",
            cardBorderRadius: "4",
            inputTextColor: "#FFFFFF",
            placeHolderColor: "#4B4B4B",
            msgTextColor: "#B2B2B2",
            invalidMsgTextColor: "#FF5252",
            msgTextFont: "'Verdana'",
            inputBackgroundColor: "#121212",
            inputBorderColor: {byDefault: "#4B4B4B", hover: "#4B4B4B", active: "#4B4B4B"},
            buttonIconColor: {
                refresh: "#4B4B4B",
                verify: "#3874CB",
                success: "#4CAF50",
                fail: "#FF5252",
                audio: "#4B4B4B",
                audiofocus: "#3874CB"
            }
        };
        var k = r("3821"), fe = r.n(k), A = {
            name: "DialogsFreeTariff", mixins: [f.a], data() {
                return {eyesEmoji: fe.a}
            }, computed: {...Object(t.c)({dialogs: "experiments/dialogs"})}, methods: {
                closeDialog() {
                    this.$store.dispatch("experiments/closeDialog", "freeTariff")
                }
            }
        };
        r("2e2f");
        var x = Object(n.a)(A, function () {
                var t = this, e = t._self._c;
                return e(E.a, {
                    attrs: {
                        value: t.dialogs.freeTariff,
                        width: "541",
                        transition: !1,
                        persistent: ""
                    }
                }, [e(w.a, {staticClass: "trial-period-dialog"}, [e("img", {
                    attrs: {
                        src: t.eyesEmoji,
                        alt: "Hand waving emoji"
                    }
                }), e(i.a, {
                    staticStyle: {position: "absolute", right: "25px", top: "25px"},
                    attrs: {icon: "", color: "grey", width: "14", height: "14px"},
                    on: {click: t.closeDialog}
                }, [e(W.a, [t._v("mdi-close")])], 1), e(_.d, {
                    staticClass: "trial-period-dialog-title",
                    staticStyle: {"margin-top": "4px"},
                    domProps: {innerHTML: t._s(t.$t("dialogs.freeTariff.title"))}
                }), e(_.c, {
                    staticClass: "trial-period-dialog-desc",
                    staticStyle: {padding: "0"},
                    domProps: {innerHTML: t._s(t.$t("dialogs.freeTariff.desc"))}
                }), e("div", {staticClass: "trial-period-dialog-buttons"}, [e(i.a, {
                    staticClass: "trial-period-dialog-button-tariff",
                    attrs: {"min-width": "140", height: "39", color: "blue"},
                    on: {
                        click: function (e) {
                            return t.openExternalLink(t.landingUrl + "/panel/#/payment?utm_source=ecosystem&utm_medium=cpc&utm_campaign=dolphin_anty_app&utm_content=daily_warning", !0)
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.checkPlans")) + " ")])], 1)], 1)], 1)
            }, [], !1, null, null, null).exports, T = r("60cf"), k = r("bc36"), be = r.n(k),
            A = {name: "ChooseTariffBlock"};
        r("bf86");
        k = Object(n.a)(A, function () {
            var e = this, t = e._self._c;
            return t("div", {staticClass: "dialogs-free-welcome-container"}, [t("div", {
                staticClass: "welcome-dialog-free-plane",
                style: "background: " + (e.$vuetify.theme.dark ? "#514E52" : "#F6F6F6")
            }, [t("div", {
                staticClass: "free-text-plan",
                style: "color: " + (e.$vuetify.theme.dark ? "#FFFFFF" : "#333333")
            }, [t("p", {staticClass: "dialogs-free-welcome-subtitle"}, [e._v(" " + e._s(e.$t("dialogs.freeTariff.freePlan")) + " ")]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc1")))]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc2")))]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc3")))]), e._t("leftButton")], 2)]), t("div", {staticClass: "welcome-dialog-free-plane subscription-features"}, [t("div", {
                staticClass: "free-text-plan",
                staticStyle: {color: "#FFFFFF"}
            }, [t("p", {staticClass: "dialogs-free-welcome-subtitle"}, [e._v(" " + e._s(e.$t("dialogs.freeTariff.subscriptionFeatures")) + " ")]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc5")))]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc6")))]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc7")))]), t("p", [e._v(e._s(e.$t("dialogs.freeTariff.desc4")))]), e._t("rightButton"), t("img", {
                staticClass: "memoji",
                attrs: {src: r("86ca"), alt: "Guy emoji"}
            })], 2)])])
        }, [], !1, null, null, null).exports, A = {
            name: "DialogsFreeWelcome",
            components: {ChooseTariffBlock: k, DialogsTemplate: T.a},
            mixins: [f.a],
            data() {
                return {handEmoji: {src: be.a, alt: "hand", width: "40px", height: "40px"}}
            },
            computed: {
                ...Object(t.c)({profile: "main/profile", dialogs: "experiments/dialogs"}), dynamicStyle() {
                    var e = this.$vuetify.theme.dark;
                    return {
                        color: e ? "#FFF" : "#333",
                        borderColor: e ? "#FFF" : "#333",
                        backgroundColor: e ? "transparent" : "#F6F6F6"
                    }
                }
            },
            methods: {
                openUserPanelPricing() {
                    this.closeDialog(), this.openExternalLink(this.landingUrl + "/panel/#/payment?utm_source=ecosystem&utm_medium=cpc&utm_campaign=dolphin_anty_app&utm_content=daily_warning", !0)
                }, async handleStayButtonClick() {
                    this.closeDialog()
                }, closeDialog() {
                    this.$store.dispatch("main/closeDialog", "freeUnpaidTariff"), this.localApi.post(`/check-popup-last-show/${this.profile.id}/free-unpaid-tariff`, {lastShow: m()(new Date)})
                }
            }
        };
        r("30cd");
        A = Object(n.a)(A, function () {
            var e = this, t = e._self._c;
            return t("dialogs-template", {
                attrs: {
                    title: e.$t("dialogs.freeTariff.freeWelcomeTitle"),
                    "title-icon": e.handEmoji
                }, on: {close: e.closeDialog}
            }, [t("choose-tariff-block", {
                scopedSlots: e._u([{
                    key: "leftButton", fn: function () {
                        return [t(i.a, {
                            staticClass: "free-plan-dialog-button free-plan-btn",
                            style: e.dynamicStyle,
                            on: {click: e.handleStayButtonClick}
                        }, [e._v(" " + e._s(e.$t("dialogs.freeTariff.buttonContinueOnFree")) + " ")])]
                    }, proxy: !0
                }, {
                    key: "rightButton", fn: function () {
                        return [t(i.a, {
                            staticClass: "free-plan-dialog-button subscription-features-btn free-plan-btn",
                            on: {click: e.openUserPanelPricing}
                        }, [e._v(" " + e._s(e.$t("dialogs.freeTariff.choosePlan")) + " ")])]
                    }, proxy: !0
                }])
            })], 1)
        }, [], !1, null, null, null).exports, k = {
            name: "DialogsExpiredPlan",
            components: {ChooseTariffBlock: k, DialogsTemplate: T.a},
            mixins: [f.a],
            computed: {
                dynamicStyle() {
                    var e = this.$vuetify.theme.dark;
                    return {
                        color: e ? "#FFF" : "#333",
                        borderColor: e ? "#FFF" : "#333",
                        backgroundColor: e ? "transparent" : "#F6F6F6"
                    }
                }
            },
            methods: {
                openUserPanelPricing() {
                    this.openExternalLink(this.landingUrl + "/panel/#/overview", !0)
                }, closeDialog() {
                    this.$store.dispatch("main/closeDialog", "endedPlan")
                }
            }
        }, T = Object(n.a)(k, function () {
            var e = this, t = e._self._c;
            return t("dialogs-template", {
                attrs: {
                    title: e.$t("dialogs.endedPlan.title"),
                    subtitle: e.$t("dialogs.endedPlan.subtitle")
                }, on: {close: e.closeDialog}
            }, [t("choose-tariff-block", {
                scopedSlots: e._u([{
                    key: "leftButton", fn: function () {
                        return [t(i.a, {
                            staticClass: "free-plan-dialog-button free-plan-btn",
                            style: e.dynamicStyle,
                            on: {click: e.openUserPanelPricing}
                        }, [e._v(" " + e._s(e.$t("dialogs.freeTariff.buttonContinueOnFree")) + " ")])]
                    }, proxy: !0
                }, {
                    key: "rightButton", fn: function () {
                        return [t(i.a, {
                            staticClass: "free-plan-dialog-button subscription-features-btn free-plan-btn",
                            on: {click: e.openUserPanelPricing}
                        }, [e._v(" " + e._s(e.$t("dialogs.freeTariff.choosePlan")) + " ")])]
                    }, proxy: !0
                }])
            })], 1)
        }, [], !1, null, null, null).exports, f = {
            components: {}, data() {
                return {
                    currentTime: this.getCurrentTime(),
                    x: 0,
                    y: 0,
                    isDragging: !1,
                    enabled: !1,
                    keyListener: null,
                    userSelect: ""
                }
            }, mounted() {
                setInterval(() => {
                    this.currentTime = this.getCurrentTime()
                }, 1)
            }, created() {
                var e = window.addEventListener("keydown", e => {
                    57 === e.keyCode && e.shiftKey && (e.ctrlKey || e.metaKey) && (console.log("Toggling special mode"), this.enabled = !this.enabled, this.$socket.emit("set-special-mode", this.enabled))
                });
                this.keyListener = e, this.$socket.emit("set-special-mode", this.enabled)
            }, destroyed() {
                window.removeEventListener("keydown", this.keyListener)
            }, methods: {
                getCurrentTime() {
                    var e = new Date;
                    return e.getUTCHours().toString().padStart(2, "0") + `:${e.getUTCMinutes().toString().padStart(2, "0")}:${e.getUTCSeconds().toString().padStart(2, "0")}.` + e.getUTCMilliseconds().toString().padStart(3, "0")
                }, dragStart(e) {
                    this.isDragging = !0, this.x = e.clientX - e.target.offsetLeft, this.y = e.clientY - e.target.offsetTop, this.userSelect = document.body.style.userSelect, document.body.style.userSelect = "none"
                }, drag(e) {
                    this.isDragging && (e.target.style.left = e.clientX - this.x + "px", e.target.style.top = e.clientY - this.y + "px")
                }, dragEnd() {
                    this.isDragging = !1, document.body.style.userSelect = this.userSelect
                }, toggleEnabled() {
                    this.enabled = !this.enabled
                }
            }
        };
        r("dd20");
        var k = Object(n.a)(f, function () {
                var e = this, t = e._self._c;
                return e.enabled ? t("div", {
                    staticClass: "special-mode",
                    on: {
                        mousedown: e.dragStart,
                        mousemove: e.drag,
                        mouseup: e.dragEnd,
                        mouseleave: e.dragEnd,
                        dragstart: function (e) {
                            e.preventDefault()
                        }
                    }
                }, [t("center", [e._v("Special Mode")]), e._v(" " + e._s(e.currentTime) + " "), t(i.a, {
                    staticClass: "close-btn",
                    attrs: {icon: ""},
                    on: {click: e.toggleEnabled}
                }, [t("ion-icon", {
                    staticStyle: {"font-size": "28px", color: "red"},
                    attrs: {name: "close-outline"}
                })], 1)], 1) : e._e()
            }, [], !1, null, null, null).exports, ye = r("0cdd"), f = {
                name: "App",
                components: {
                    DialogsExpiredPlan: T,
                    DialogsFreeWelcome: A,
                    Alert: o,
                    Sidebar: u,
                    DialogsError: g,
                    DialogsFeedback: y,
                    DialogsLogoutConfirmation: Q,
                    InfoBar: D,
                    DialogsDownloadingChrome: se,
                    DialogsEditProfile: oe,
                    DialogsFreeTariffExceededBrowserProfiles: C,
                    DialogsFreeTariff: x,
                    SpecialMode: k
                },
                mixins: [b.a, ie.a, h, ae.a],
                data() {
                    return {frontVersion: "/7d11bbb4production/", formattedBrowserTime: "", formattedTime: ""}
                },
                computed: {
                    ...Object(t.c)({
                        browserProfiles: "browserProfiles/browserProfiles",
                        synchronizer: "browserProfiles/synchronizer",
                        dialogs: "main/dialogs",
                        profile: "main/profile",
                        experimentDialogs: "experiments/dialogs"
                    }), ...Object(a.b)("browserProfiles", ["chromeExists"]), ...Object(a.b)("main", ["profileAuthorized", "browserDownloading", "profile"])
                },
                watch: {formattedBrowserTime: "checkTimeDifference", formattedTime: "checkTimeDifference"},
                created: async function () {
                    await this.getActualTime(), setInterval(this.getActualTime, 9e5), setInterval(this.checkTimeDifference, 9e5), window.mtcaptchaConfig = {
                        sitekey: "MTPublic-WBnCMJ0SP",
                        widgetSize: "mini",
                        theme: "overcast",
                        render: "explicit",
                        customStyle: this.$vuetify.theme.dark ? he : ge
                    };
                    try {
                        var e = o => new Promise((e, t) => {
                            var a = document.createElement("script");
                            a.async = !0, a.src = o, a.onload = e, a.onerror = t, document.head.appendChild(a)
                        });
                        await Promise.all([e("https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js"), e("https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js")])
                    } catch (e) {
                        console.error("Error loading MTCaptcha scripts:", e)
                    }
                    await 0, localStorage.getItem("accessToken") && (this.profileAuthorized = !0, await this.$store.dispatch("main/getSubscription")), this.checkForInvalidSorting(), this.getAppVersion(), await this.initAmplitude();
                    const t = "linux", a = "windows",
                        o = (Promise.all([this.getWebglListByPlatform(t), this.getWebglListByPlatform(a), this.getWebglListByPlatform("macos")]).then(e => {
                            this.$store.dispatch("browserProfiles/setWebglDataList", {
                                linux: e[0],
                                windows: e[1],
                                macos: e[2]
                            })
                        }).catch(e => {
                            console.error("Error while getting webgl data", e)
                        }), this);
                    if (window.__openExternalLink = e => {
                        o.localApi.post("/open-external-link", {url: e})
                    }, this.profileAuthorized && this.$store.dispatch("settings/loadSettings").then(() => {
                        this.localApi.post("/settings", this.settings)
                    }), localStorage.getItem("accessToken") && this.amplitudeSendIdentify(), this.$store.dispatch("main/setInnerHeight", window.innerHeight), window.addEventListener("resize", this.setInnerHeight), localStorage.getItem("accessToken")) {
                        try {
                            await this.$store.dispatch("main/loadProfile"), this.$store.dispatch("automation/loadAllScenarios"), await this.checkForTariffExperiments(this.profile, this.subscription), await this.checkFreeSubscriptionTariff()
                        } catch (e) {
                            console.error(e)
                        }
                        setTimeout(() => {
                            this.profile.storage && Object.keys(this.profile.storage).forEach(e => {
                                var t = this.profile.storage[e], a = {
                                    antySortingIsDesc: "anty-sorting-is-desc",
                                    antySortingIndex: "anty-sorting-index",
                                    proxyPagination: "proxy-pagination",
                                    usersPagination: "users-pagination",
                                    extensionsPagination: "extensions-pagination",
                                    browserProfilesPagination: "browser-profiles-pagination",
                                    browserProfilesPaginationBasket: "browser-profiles-pagination-basket",
                                    statusesPagination: "statuses-pagination",
                                    bookmarksPagination: "bookmarks-pagination"
                                };
                                a[e] && (e = a[e]), t ? localStorage.setItem(e, t, !1) : localStorage.removeItem(e, !1)
                            })
                        }, 500), this.localApi.post("/remote_api_token", {token: localStorage.getItem("accessToken")}), this.$amplitude.getInstance().setUserId(this.profile.username)
                    }
                    if (this.profile && this.profile.language || localStorage.getItem("profileLanguage")) {
                        const t = this.profile.language || localStorage.getItem("profileLanguage");
                        localStorage.setItem("profileLanguage", t), this.$vuetify.lang.current !== t && (this.$vuetify.lang.current = t), this.$i18n.locale !== t && (this.$i18n.locale = t), m.a.locale(t)
                    } else {
                        const t = "en";
                        localStorage.setItem("profileLanguage", "en"), this.$vuetify.lang.current = "en", this.$i18n.locale = "en", m.a.locale("en")
                    }
                    if (this.profile && this.profile.theme) {
                        const t = this.profile.theme, a = (localStorage.setItem("profileTheme", t), "dark" === t);
                        this.$vuetify.theme.dark !== a && (this.$vuetify.theme.dark = a)
                    } else localStorage.setItem("profileTheme", "dark"), this.$vuetify.theme.dark = !0;
                    this.$store.dispatch("main/check2FABanner")
                },
                sockets: {
                    remoteApiTokenChanged(e) {
                        localStorage.setItem("remoteApiToken", e), localStorage.setItem("accessToken", e), localStorage.removeItem("refreshToken"), location.reload()
                    }, browserDownloading(e) {
                        this.browserDownloading.showProgress = !0, this.browserDownloading.stage = e.stage, this.browserDownloading.percentage = e.percentage, 100 === parseInt(e.percentage) && (this.browserDownloading.showProgress = !1), "setupEnded" === e.stage ? (this.browserDownloading.show = !1, this.browserDownloading.stage = null) : this.browserDownloading.show ? "downloadFailed" === e.stage && (this.browserDownloading.show = !1, this.browserDownloading.stage = null, this.$store.dispatch("main/alert", {
                            color: "error",
                            message: this.$t("common.downloadFailed")
                        })) : this.browserDownloading.show = !0
                    }, browserProfileStopped(e) {
                        this.$store.dispatch("browserProfiles/setBrowserProfileTimer", {
                            id: parseInt(e.profileId, 10),
                            action: "remove"
                        }), e.isMockProfile || this.$store.dispatch("browserProfiles/sendEventStop", parseInt(e.profileId, 10)), this.removeSynchronizer(e), this.$store.dispatch("browserProfiles/removeRunning", parseInt(e.profileId, 10)), this.$store.dispatch("browserProfiles/removeLoading", parseInt(e.profileId, 10))
                    }, browserProfileStarted(t) {
                        if (this.$store.dispatch("browserProfiles/setBrowserProfileTimer", {
                            id: parseInt(t.profileId, 10),
                            date: Date.now(),
                            action: "add"
                        }), this.synchronizer) for (var [e, a] of Object.entries(this.synchronizer)) {
                            if (a.master === parseInt(t.profileId, 10)) {
                                var o = this.synchronizer[e]["managed"],
                                    r = (this.$store.dispatch("browserProfiles/incrementSynchronizerStarted", {session: e}), a.profiles.find(e => e.id === parseInt(t.profileId, 10)));
                                r && this.amplitudeSendProfileStart(r, this.subscription, !0);
                                for (const t of o) this.browserProfileActionsStart({id: t}, this.subscription.plan, !1, !0, {
                                    session: e,
                                    isOwned: !1
                                })
                            }
                            a.managed.includes(parseInt(t.profileId, 10)) && ((r = a.profiles.find(e => e.id === parseInt(t.profileId, 10))) && this.amplitudeSendProfileStart(r, this.subscription, !0), a.managed.length > a.started ? this.$store.dispatch("browserProfiles/incrementSynchronizerStarted", {session: e}) : this.$store.dispatch("main/alert", {
                                color: "success",
                                message: this.$t("browserProfiles.synchronizerLaunched")
                            }))
                        }
                        this.$store.dispatch("browserProfiles/addRunning", parseInt(t.profileId, 10))
                    }, async browserProfileSyncStarted(e) {
                        let t = !1;
                        for (const a of this.browserProfiles.syncErrors) parseInt(a.id, 10) === parseInt(e.profileId, 10) && (t = !0);
                        t && await this.$store.dispatch("browserProfiles/removeSyncErrors", parseInt(e.profileId, 10)), this.$store.dispatch("browserProfiles/addSync", parseInt(e.profileId, 10))
                    }, async browserProfileSyncFinished(e) {
                        await this.$store.dispatch("browserProfiles/removeSync", parseInt(e.profileId, 10)), await this.$store.dispatch("browserProfiles/addSyncSuccess", parseInt(e.profileId, 10))
                    }, async browserProfileSyncError(e) {
                        401 === e.code ? this.browserProfileActionsStop(e.profileId, !0) : (await this.$store.dispatch("browserProfiles/removeSync", parseInt(e.profileId, 10)), await this.$store.dispatch("browserProfiles/addSyncErrors", {
                            id: parseInt(e.profileId, 10),
                            error: e.error
                        }), this.$store.dispatch("browserProfiles/removeLoading", parseInt(e.profileId, 10)))
                    }, async browserProfileError(e) {
                        this.$store.dispatch("browserProfiles/removeLoading", parseInt(e.profileId, 10)), this.removeSynchronizer(e)
                    }, async teamProfileStarted(e) {
                        var t = parseInt(e.profile_id, 10), a = this.browserProfiles.loading.includes(t),
                            t = this.browserProfiles.running.includes(t);
                        a || t || await this.$store.dispatch("browserProfiles/addTeamProfileRunning", e)
                    }, async teamProfileStopped(e) {
                        await this.$store.dispatch("browserProfiles/removeTeamProfileRunning", parseInt(e.profile_id, 10))
                    }, async robotCookieStarted(e) {
                        this.$store.dispatch("browserProfiles/addCookieRobotRunning", {
                            profileId: parseInt(e.data.profileId, 10),
                            percentage: 0,
                            message: e.data.message,
                            url: ""
                        })
                    }, async robotCookieCompletelyFailed(e) {
                        var t = parseInt(e.data.profileId, 10);
                        this.$store.dispatch("browserProfiles/removeCookieRobotRunning", {
                            profileId: t,
                            percentage: parseInt(e.data.percentage, 10),
                            message: e.data.message,
                            url: e.data.url
                        }), this.$amplitude.getInstance().logEvent("Cookie Robot Failed", {profileId: parseInt(e.data.profileId, 10)}), this.$store.dispatch("main/alert", {
                            color: "success",
                            message: this.$t("browserProfiles.cookieRobotFailed") + " " + this.$t("browserProfiles.forProfile") + " " + e.data.name
                        })
                    }, async robotCookieFinished(e) {
                        var t = parseInt(e.data.profileId, 10);
                        this.$store.dispatch("browserProfiles/removeCookieRobotRunning", {
                            profileId: t,
                            percentage: 100,
                            message: e.data.message,
                            url: ""
                        }), this.$amplitude.getInstance().logEvent("Cookie Robot Finished", {profileId: parseInt(e.data.profileId, 10)}), this.$store.dispatch("main/alert", {
                            color: "success",
                            message: this.$t("browserProfiles.cookieRobotFinished") + " " + this.$t("browserProfiles.forProfile") + " " + e.data.name
                        })
                    }, async browserProfileCookieRobotOk(e) {
                        await this.$store.dispatch("browserProfiles/addCookieRobotProgress", {
                            profileId: parseInt(e.data.profileId, 10),
                            percentage: parseInt(e.data.percentage, 10),
                            message: e.data.message,
                            url: e.data.url,
                            count: e.data.total
                        })
                    }, async browserProfileCookieRobotFailed(e) {
                        await this.$store.dispatch("browserProfiles/addCookieRobotProgress", {
                            profileId: parseInt(e.data.profileId, 10),
                            percentage: e.data.percentage ? parseInt(e.data.percentage, 10) : 0,
                            message: e.data.message,
                            url: e.data.url,
                            count: e.data.total
                        })
                    }, async "payment-success"() {
                        console.log('Event "payment-success" fired'), await this.$store.dispatch("main/getSubscription"), await this.$store.dispatch("payment/setAlert", ye.b.PLAN_PAYMENT_SUCCESS), await this.$store.dispatch("payment/removeInvoice"), await this.$router.push({name: "Payment"})
                    }, async "payment-finish"() {
                        console.log('Event "payment-finish" fired'), await this.$store.dispatch("main/getSubscription"), await this.$store.dispatch("payment/setAlert", ye.b.PLAN_PAYMENT_SUCCESS), await this.$store.dispatch("payment/removeInvoice"), await this.$router.push({name: "Payment"})
                    }, async "payment-failed"() {
                        console.log('Event "payment-failed" fired'), await this.$store.dispatch("payment/setAlert", ye.b.PLAN_PAYMENT_FAILED), await this.$store.dispatch("payment/removeInvoice"), await this.$router.push({name: "Payment"})
                    }
                },
                destroyed() {
                    clearInterval(this.actualTimeInterval), clearInterval(this.timeDifferenceInterval)
                },
                methods: {
                    async getActualTime() {
                        try {
                            var e = await (await fetch("http://worldtimeapi.org/api/ip")).json(),
                                t = new Date(e.utc_datetime), a = t.getHours(), o = t.getMinutes();
                            this.formattedTime = a.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0")
                        } catch (e) {
                            console.error("Error fetching actual time:", e)
                        }
                    }, updateBrowserTime() {
                        this.formattedBrowserTime = this.getBrowserTime()
                    }, checkTimeDifference() {
                        this.updateBrowserTime(), this.getCheckTimeDifference(this.formattedTime)
                    }, checkForInvalidSorting() {
                        const a = ["timer", "notes", "port", "login", "password"];
                        ["anty-sorting-is-desc-BrowserProfilesMainTable", "anty-sorting-index-BrowserProfilesMainTable", "anty-sorting-is-desc-ProxyMainTable", "anty-sorting-index-ProxyMainTable"].forEach(e => {
                            var t = localStorage.getItem(e);
                            t && a.includes(t) && localStorage.removeItem(e)
                        })
                    }, async fetchData(e, t, a) {
                        const o = e.charAt(0).toUpperCase() + e.slice(1),
                            r = await fetch(`https://anty-frontend.dolphin.ru.com/7d11bbb4production/webglList${o}.json`);
                        let s;
                        try {
                            s = await r.json()
                        } catch (e) {
                            console.warn("Cannot get json from webglList response")
                        }
                        if (s && 0 < Object.keys(s).length) {
                            try {
                                await this.deleteAllIndexedDB()
                            } catch (e) {
                                console.warn(e)
                            }
                            const o = await this.openIndexedDB(t, a), r = o.transaction(a, "readwrite");
                            r.objectStore(a).put(s, e), localStorage.setItem("frontVersion_" + e, this.frontVersion)
                        }
                        return s
                    }, promiseForTransaction(o) {
                        return new Promise((t, a) => {
                            o.oncomplete = e => t(), o.onsuccess = e => t(), o.onerror = e => a(o.error), o.onabort = e => a(o.error)
                        })
                    }, async deleteAllIndexedDB() {
                        const r = "webglList" + this.chromeVersion;
                        return new Promise((t, a) => {
                            indexedDB.databases().then(e => {
                                e = e.map(e => {
                                    const o = e.name;
                                    if (o !== r) {
                                        const r = indexedDB.deleteDatabase(o);
                                        return new Promise((t, a) => {
                                            r.onerror = e => {
                                                console.log("Error deleting database " + o), a(e)
                                            }, r.onsuccess = e => {
                                                console.log(`Database ${o} deleted successfully`), t()
                                            }, r.onblocked = e => {
                                                console.log(`Couldn't delete database ${o} due to the operation being blocked`), a(e)
                                            }
                                        })
                                    }
                                });
                                Promise.all(e).then(() => t("all dbs deleted")).catch(e => a(e))
                            }).catch(e => {
                                console.log("Error retrieving database names: " + e.target.errorCode), a(e)
                            })
                        })
                    }, async getWebglListByPlatform(e) {
                        var t = this.chromeVersion, a = "webglList" + t,
                            o = await (await this.openIndexedDB(a, t)).transaction([t], "readwrite").objectStore(t).get(e),
                            r = (await this.promiseForTransaction(o), null == o ? void 0 : o.result);
                        if (r && 0 < Object.keys(o.result).length) {
                            if (localStorage.getItem("frontVersion_" + e) === this.frontVersion) return console.log("Не нужно подгружать новые webglList " + e), o.result;
                            console.log("Нужно подгружать новые webglList " + e)
                        }
                        o = await this.fetchData(e, a, t);
                        if (o && 0 < Object.keys(o).length) return o;
                        {
                            const e = void 0 === r ? [] : r;
                            return e
                        }
                    }, openIndexedDB(o, r) {
                        return new Promise((t, a) => {
                            const e = indexedDB.open(o, 1);
                            e.onerror = e => {
                                console.error("Failed to open IndexedDB " + o), a(e)
                            }, e.onsuccess = () => {
                                t(e.result)
                            }, e.onupgradeneeded = e => {
                                e = e.target.result;
                                if (!e.objectStoreNames.contains(r)) {
                                    e.createObjectStore(r);
                                    try {
                                        const a = this.openIndexedDB(o, r);
                                        t(a)
                                    } catch (e) {
                                        console.log("Error while opening IndexedDB", e), a(e)
                                    }
                                }
                            }
                        })
                    }, apiUnauthorize() {
                        let e = null;
                        localStorage.getItem("antyLocalApiPort") && (e = localStorage.getItem("antyLocalApiPort")), localStorage.clear(), e && localStorage.setItem("antyLocalApiPort", e), this.api.defaults.headers.Authorization = "", this.localApi.defaults.headers.Authorization = "", this.profileAuthorized = !1, ["Login", "Registration"].includes(this.$route.name) || this.$router.push({name: "Login"}), this.$store.dispatch("browserProfiles/clearSelected"), this.$store.dispatch("proxy/clearSelected"), this.$store.dispatch("browserProfilesStatuses/clearSelected"), this.$store.dispatch("userFields/clearSelected"), this.$amplitude.getInstance().setUserId(null)
                    }, async getAppVersion() {
                        try {
                            var {status: e, data: t} = await this.localApi.get("/get-app-version");
                            200 === e && t.success && this.$store.dispatch("main/setAppVersion", t.appVersion)
                        } catch (e) {
                        }
                    }, setInnerHeight(e) {
                        this.$store.dispatch("main/setInnerHeight", e.target.innerHeight)
                    }, async initAmplitude() {
                        let e = "e8c66f87bfc4828dd7029beb9afda19b", t = "1";
                        try {
                            const e = await this.localApi.get("/get-app-version"), {status: a, data: s} = e;
                            200 === a && s.success && (t = s.appVersion)
                        } catch (e) {
                        }
                        -1 === t.indexOf("beta") && -1 === t.indexOf("alpha") && t.includes(".") && this.branchName.startsWith("master") && (e = "cc69d5080af9e4710e5b0d1d268ca067"), le.a.getInstance().init(e), Object.defineProperty(s.a.prototype, "$amplitude", {value: le.a})
                    }, removeSynchronizer(e) {
                        if (this.synchronizer) for (var [t, a] of Object.entries(this.synchronizer)) {
                            if (a.master === parseInt(e.profileId, 10)) {
                                this.$store.dispatch("browserProfiles/removeSynchronizer", t), this.$store.dispatch("main/alert", {
                                    color: "success",
                                    message: this.$t("browserProfiles.synchronizerStopped")
                                });
                                for (const e of a.managed) this.browserProfileActionsStop({id: e})
                            }
                            a.managed.includes(parseInt(e.profileId, 10)) && this.$store.dispatch("browserProfiles/removeSynchronizerManaged", {
                                session: t,
                                id: parseInt(e.profileId, 10)
                            })
                        }
                    }
                }
            }, we = Object(n.a)(f, function () {
                var e = this, t = e._self._c;
                return t(F.a, {staticClass: "anty-font"}, [e.browserDownloading.show ? t("dialogs-downloading-chrome") : e._e(), e.dialogs.error ? t("dialogs-error") : e._e(), e.dialogs.feedback ? t("dialogs-feedback") : e._e(), e.dialogs.logoutConfirmation ? t("dialogs-logout-confirmation") : e._e(), e.dialogs.editProfile ? t("dialogs-edit-profile") : e._e(), e.experimentDialogs.freeTariffExtraBrowserProfiles ? t("dialogs-free-tariff-exceeded-browser-profiles") : e._e(), e.experimentDialogs.freeTariff ? t("dialogs-free-tariff") : e._e(), e.dialogs.freeUnpaidTariff ? t("dialogs-free-welcome") : e._e(), e.dialogs.endedPlan ? t("dialogs-expired-plan") : e._e(), t("sidebar"), t("alert", {staticStyle: {"margin-left": "28px"}}), t(U.a, {staticStyle: {padding: "8px 8px 24px 64px"}}, [t("router-view")], 1), ["Login", "Registration", "Restrict"].includes(e.$route.name) ? e._e() : t("info-bar"), ["Login", "Registration", "Restrict"].includes(e.$route.name) ? t("div", {
                    staticClass: "mr-2",
                    staticStyle: {"text-align": "end"}
                }, [e._v(" " + e._s(e.$t("common.version").toLowerCase()) + " " + e._s(e.appVersion) + " ")]) : e._e(), t("special-mode")], 1)
            }, [], !1, null, null, null).exports, T = r("8c4f"),
            A = (s.a.use(T.a), (e, t, a) => localStorage.getItem("accessToken") ? a() : a("/login")), _e = new T.a({
                mode: "hash",
                base: "/7d11bbb4production/",
                routes: [{
                    path: "/",
                    name: "BrowserProfiles",
                    component: () => r.e("about").then(r.bind(null, "770c")),
                    beforeEnter: A
                }, {
                    path: "/login",
                    name: "Login",
                    component: () => r.e("about").then(r.bind(null, "a55b")),
                    beforeEnter: (e, t, a) => localStorage.getItem("accessToken") ? a("/") : a()
                }, {
                    path: "/proxy",
                    name: "Proxy",
                    component: () => r.e("about").then(r.bind(null, "5766")),
                    beforeEnter: A
                }, {
                    path: "/bookmarks",
                    name: "Bookmarks",
                    component: () => r.e("about").then(r.bind(null, "b51b")),
                    beforeEnter: A
                }, {
                    path: "/extensions",
                    name: "Extensions",
                    component: () => r.e("about").then(r.bind(null, "6326")),
                    beforeEnter: A
                }, {
                    path: "/settings",
                    name: "Settings",
                    component: () => r.e("about").then(r.bind(null, "26d3")),
                    beforeEnter: A
                }, {
                    path: "/payment",
                    name: "Payment",
                    component: () => r.e("about").then(r.bind(null, "1175")),
                    beforeEnter: A
                }, {
                    path: "/payment/change-plan",
                    name: "PaymentChangePlan",
                    component: () => r.e("about").then(r.bind(null, "1175")),
                    beforeEnter: A
                }, {
                    path: "/payment/upgrade-plan",
                    name: "PaymentUpgradePlan",
                    component: () => r.e("about").then(r.bind(null, "1175")),
                    beforeEnter: A
                }, {
                    path: "/payment/checkout",
                    name: "PaymentCheckout",
                    component: () => r.e("about").then(r.bind(null, "1175")),
                    beforeEnter: A
                }, {
                    path: "/users",
                    name: "Users",
                    component: () => r.e("about").then(r.bind(null, "ed81")),
                    beforeEnter: A
                }, {
                    path: "/flow",
                    name: "flow",
                    component: () => r.e("about").then(r.bind(null, "0c0b")),
                    beforeEnter: A
                }, {
                    path: "/restrict",
                    name: "Restrict",
                    component: () => r.e("chunk-34922498").then(r.bind(null, "3212")),
                    beforeEnter: A
                }]
            }), o = r("a925");
        s.a.use(o.a);
        var O = new o.a({
                locale: localStorage.getItem("profileLanguage") || "en",
                fallbackLocale: Object({
                    VUE_APP_BASE_URL: "http://127.0.0.1:5000",
                    VUE_APP_SYNC_BASE_URL: "https://sync.dolphin-anty-api.com",
                    VUE_APP_LOCAL_API_PORT: "3001",
                    VUE_APP_LANDING_URL: "https://anty.dolphin.ru.com",
                    VUE_APP_PROD_API_URL: "http://127.0.0.1:5000",
                    VUE_APP_CAPTCHA_KEY: "MTPublic-WBnCMJ0SP",
                    VUE_APP_H_CAPTCHA_KEY: "",
                    VUE_APP_BACKEND_URL_V2: "https://apiv2.dolphin-anty-api.com/api/v2",
                    VUE_APP_INTERCOM_APP_ID: "nbc7egau",
                    VUE_APP_VALID_URLS: "https://anty-api.com,http://127.0.0.1:5000,https://api.dolphin-anty-ru.online,https://api.dolphin-anty-ua.online,https://api.dolphin-anty-cn.online,https://api.dolphin-anty-mirror.com,https://api.dolphin-anty-mirror.net,https://api.dolphin-anty-mirror.org",
                    VUE_APP_VALID_APP_VERSION: "2023.325.1",
                    VUE_APP_CLOUDPAYMENT_KEY: "pk_35d0ec71cbc8db16b7229ab09c6bb",
                    NODE_ENV: "production",
                    BASE_URL: "/7d11bbb4production/"
                }).VUE_APP_I18N_FALLBACK_LOCALE || "en",
                messages: function () {
                    const a = r("49f8"), o = {};
                    return a.keys().forEach(e => {
                        var t = e.match(/([A-Za-z0-9-_]+)\./i);
                        t && 1 < t.length && (t = t[1], o[t] = a(e))
                    }), o
                }(),
                pluralizationRules: {
                    ru: function (e, t) {
                        var a, o;
                        return 0 === e ? 0 : (a = 10 < e && e < 20, o = e % 10 == 1, t < 4 ? !a && o ? 1 : 2 : !a && o ? 1 : !a && 2 <= e % 10 && e % 10 <= 4 || t < 4 ? 2 : 3)
                    }
                }
            }), u = {
                OPEN_DIALOG: (e, t) => {
                    e.dialogs[t] = !0
                }, CLOSE_DIALOG: (e, t) => {
                    e.dialogs[t] = !1
                }
            }, g = {
                async openDialog(e, t) {
                    e.commit("OPEN_DIALOG", t)
                }, async closeDialog(e, t) {
                    e.commit("CLOSE_DIALOG", t)
                }
            }, y = {dialogs: e => e.dialogs}, Ee = r("2ef0"), Q = r.n(Ee), D = {
                namespaced: !0,
                state: {
                    browserProfiles: {
                        all: [],
                        selected: [],
                        running: [],
                        cookieRobotsWorking: [],
                        loading: [],
                        pendingRequest: [],
                        sync: [],
                        syncErrors: [],
                        mainButtonErrors: [],
                        syncSuccess: [],
                        cancelTokens: {},
                        total: 0,
                        teamProfileRunning: [],
                        login: "",
                        password: "",
                        loginpassword: !1,
                        webglDataList: {}
                    },
                    basket: {
                        profiles: [],
                        selected: [],
                        total: 0,
                        all: [],
                        running: [],
                        loading: [],
                        sync: [],
                        syncErrors: [],
                        mainButtonErrors: [],
                        syncSuccess: [],
                        cancelTokens: {},
                        teamProfileRunning: []
                    },
                    pagination: {},
                    paginationBasket: {},
                    browserProfile: {},
                    fullBrowserProfile: {},
                    dialogs: {
                        automation: !1,
                        automationOnboarding: !1,
                        add: !1,
                        delete: !1,
                        basket: !1,
                        tags: !1,
                        changeProxy: !1,
                        start: !1,
                        stop: !1,
                        mainDialog: !1,
                        syncErrors: !1,
                        columns: !1,
                        notesEdit: !1,
                        activityLog: !1,
                        importCookies: !1,
                        enterCookieRobot: !1,
                        chromeNotFound: !1,
                        share: !1,
                        shareInfo: !1,
                        copyProfile: !1,
                        changeProxyFromCell: !1,
                        screenWarning: !1,
                        parallelStartWarning: !1,
                        extensionSync: !1,
                        transfer: !1,
                        synchronizer: !1
                    },
                    filters: {
                        name: "",
                        tags: [],
                        statuses: [],
                        mainWebsites: [],
                        users: [],
                        sortBy: [],
                        order: [],
                        proxies: []
                    },
                    browserProfileSyncError: "",
                    sortedTags: [],
                    columns: {all: [], filtered: [], selected: []},
                    timers: {},
                    chromeExists: !0,
                    forTagsDialog: {singleBrowserProfile: !1, browserProfile: {id: 0, tags: []}},
                    screenResolutions: {linux: [], windows: [], macos: []},
                    forDialogs: {singleDelete: !1, browserProfileId: null, browserProfileName: null, multiple: !1},
                    synchronizer: null
                },
                getters: {
                    ...y,
                    getField: a.a,
                    basket: e => e.basket,
                    browserProfiles: e => e.browserProfiles,
                    browserProfile: e => e.browserProfile,
                    fullBrowserProfile: e => e.fullBrowserProfile,
                    browserProfileSyncError: e => e.browserProfileSyncError,
                    sortedTags: e => e.sortedTags,
                    filters: e => e.filters,
                    columns: e => e.columns,
                    timers: e => e.timers,
                    chromeExists: e => e.chromeExists,
                    forTagsDialog: e => e.forTagsDialog,
                    screenResolutions: e => e.screenResolutions,
                    forDialogs: e => e.forDialogs,
                    pagination: e => e.pagination,
                    paginationBasket: e => e.paginationBasket,
                    synchronizer: e => e.synchronizer
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.browserProfiles.all = t
                    }, SET_ALL_BASKET: (e, t) => {
                        e.basket.all = t
                    }, ADD_TEAM_PROFILE_RUNNING: (e, t) => {
                        if (Array.isArray(t)) {
                            for (const a of t) if (1 === parseInt(a.running, 10)) {
                                const t = e.browserProfiles.teamProfileRunning.findIndex(e => e.id === parseInt(a.id, 10));
                                -1 === t && e.browserProfiles.teamProfileRunning.push({
                                    id: parseInt(a.id, 10),
                                    userId: parseInt(a.lastRunnedByUserId, 10)
                                })
                            }
                        } else -1 === e.browserProfiles.teamProfileRunning.findIndex(e => e.id === parseInt(t.profile_id, 10)) && e.browserProfiles.teamProfileRunning.push({
                            id: parseInt(t.profile_id, 10),
                            userId: parseInt(t.runned_by, 10)
                        })
                    }, REMOVE_TEAM_PROFILE_RUNNING: (e, t) => {
                        e.browserProfiles.teamProfileRunning = e.browserProfiles.teamProfileRunning.filter(e => e.id !== t)
                    }, SET_TOTAL: (e, t) => {
                        e.browserProfiles.total = t
                    }, SET_TOTAL_BASKET: (e, t) => {
                        e.basket.total = t
                    }, SET_WEBGL_DATA_LIST: (e, t) => {
                        e.browserProfiles.webglDataList = t
                    }, SET_SELECTED: (e, t) => {
                        e.browserProfiles.selected = t
                    }, SET_SELECTED_BASKET: (e, t) => {
                        e.basket.selected = t
                    }, REPLACE_SELECTED: (a, e) => {
                        e.forEach(t => {
                            var e = a.browserProfiles.selected.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10));
                            -1 < e && a.browserProfiles.selected.splice(e, 1, t)
                        })
                    }, REPLACE_SELECTED_BASKET: (a, e) => {
                        e.forEach(t => {
                            var e = a.basket.selected.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10));
                            -1 < e && a.basket.selected.splice(e, 1, t)
                        })
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_PAGINATION_BASKET: (e, t) => {
                        e.paginationBasket = t
                    }, SET_EMPTY_BROWSER_PROFILE: (e, t) => {
                        e.browserProfile = t
                    }, SET_BROWSER_PROFILE: (e, t) => {
                        e.browserProfile = t
                    }, SET_FILTER: (e, t) => {
                        e.filters[t.filter] = t.data
                    }, ADD_RUNNING: (e, t) => {
                        e.browserProfiles.running.includes(t) || e.browserProfiles.running.push(t)
                    }, REMOVE_RUNNING: (e, t) => {
                        e.browserProfiles.running = e.browserProfiles.running.filter(e => e !== t), e.browserProfiles.cookieRobotsWorking = e.browserProfiles.cookieRobotsWorking.filter(e => e !== t);
                        var a = e.browserProfiles.cookieRobotsWorking.findIndex(e => e.profileId === t);
                        -1 !== a && e.browserProfiles.cookieRobotsWorking.splice(a, 1)
                    }, ADD_COOKIE_ROBOT_RUNNING: (e, t) => {
                        void 0 === e.browserProfiles.cookieRobotsWorking.find(e => e.profileId === t.profileId) && e.browserProfiles.cookieRobotsWorking.push(t)
                    }, ADD_COOKIE_ROBOT_PROGRESS: (e, t) => {
                        e = e.browserProfiles.cookieRobotsWorking.find(e => e.profileId === t.profileId);
                        void 0 !== e && (e.percentage = t.percentage, e.message = t.message, e.url = t.url)
                    }, REMOVE_COOKIE_ROBOT_RUNNING: (e, t) => {
                        e.browserProfiles.cookieRobotsWorking = e.browserProfiles.cookieRobotsWorking.filter(e => e !== t.profileId);
                        var a = e.browserProfiles.cookieRobotsWorking.findIndex(e => e.profileId === t.profileId);
                        -1 !== a && e.browserProfiles.cookieRobotsWorking.splice(a, 1)
                    }, ADD_LOADING: (e, t) => {
                        e.browserProfiles.loading.includes(t) || e.browserProfiles.loading.push(t)
                    }, REMOVE_LOADING: (e, t) => {
                        e.browserProfiles.loading = e.browserProfiles.loading.filter(e => e !== t)
                    }, ADD_PENDING_REQUEST: (e, t) => {
                        e.browserProfiles.pendingRequest.includes(t) || e.browserProfiles.pendingRequest.push(t)
                    }, REMOVE_PENDING_REQUEST: (e, t) => {
                        e.browserProfiles.pendingRequest = e.browserProfiles.pendingRequest.filter(e => e !== t)
                    }, ADD_SYNC: (e, t) => {
                        e.browserProfiles.sync.includes(t) || e.browserProfiles.sync.push(t)
                    }, REMOVE_SYNC: (e, t) => {
                        e.browserProfiles.sync = e.browserProfiles.sync.filter(e => e !== t)
                    }, ADD_SYNC_ERRORS: (e, t) => {
                        let a = !0;
                        for (const o of e.browserProfiles.syncErrors) o.id === t.id && (a = !1);
                        a && e.browserProfiles.syncErrors.push(t)
                    }, REMOVE_SYNC_ERRORS: (e, t) => {
                        e.browserProfiles.syncErrors = e.browserProfiles.syncErrors.filter(e => e.id !== t)
                    }, ADD_MAIN_BUTTON_ERROR: (e, t) => {
                        let a = !0;
                        for (const o of e.browserProfiles.mainButtonErrors) o.id === t.id && (a = !1);
                        a && e.browserProfiles.mainButtonErrors.push(t)
                    }, REMOVE_MAIN_BUTTON_ERROR: (e, t) => {
                        e.browserProfiles.mainButtonErrors = e.browserProfiles.mainButtonErrors.filter(e => e.id !== t)
                    }, ADD_SYNC_SUCCESS: (e, t) => {
                        e.browserProfiles.syncSuccess.includes(t) || (e.browserProfiles.syncSuccess.push(t), setTimeout(() => {
                            e.browserProfiles.syncSuccess = e.browserProfiles.syncSuccess.filter(e => e !== t)
                        }, 5e3))
                    }, CLEAR_USERAGENT: e => {
                        e.browserProfile.useragent.value = null
                    }, SET_BROWSER_PROFILE_PROPERTY: (e, t) => {
                        e.browserProfile[t.property] = t.value
                    }, SET_BROWSER_PROFILE_SYNC_ERROR: (e, t) => {
                        e.browserProfileSyncError = t
                    }, SET_SORTED_TAGS: (e, t) => {
                        e.sortedTags = t
                    }, SET_USER_FIELDS_FOR_MAIN_DIALOG: (e, t) => {
                        e.browserProfile.userFieldsForMainDialog = t
                    }, SET_COLUMNS: (e, t) => {
                        e.columns[t.key] = t.value
                    }, REPLACE_BROWSER_PROFILE: (e, t) => {
                        var a = e.browserProfiles.all.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)),
                            a = (-1 < a && e.browserProfiles.all.splice(a, 1, t), e.browserProfiles.selected.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)));
                        -1 < a && e.browserProfiles.selected.splice(a, 1, t)
                    }, SET_BROWSER_PROFILE_TIMER: (e, t) => {
                        "add" === t.action && (e.timers = {
                            ...e.timers,
                            [t.id]: t.date
                        }), "remove" === t.action && delete e.timers[t.id]
                    }, SET_SCREEN_RESOLUTIONS: (e, t) => {
                        if (Array.isArray(t.data) && 0 !== t.data.length) for (const a of t.data) e.screenResolutions[t.platform].includes(a) || e.screenResolutions[t.platform].push(a)
                    }, SET_CANCEL_TOKEN: (e, t) => {
                        t.remove && void 0 !== e.browserProfiles.cancelTokens[t.id] ? delete e.browserProfiles.cancelTokens[t.id] : e.browserProfiles.cancelTokens[t.id] = t.token
                    }, REMOVE_BROWSER_PROFILES: (e, t) => {
                        e.browserProfiles.all = e.browserProfiles.all.filter(e => !t.includes(parseInt(e.id, 10)))
                    }, SET_TOTAL_SESSION_DURATION: (e, t) => {
                        for (const a of e.browserProfiles.all) parseInt(a.id, 10) === parseInt(t.id, 10) && (a.totalSessionDuration = t.totalSessionDuration);
                        for (const o of e.browserProfiles.selected) parseInt(o.id, 10) === parseInt(t.id, 10) && (o.totalSessionDuration = t.totalSessionDuration)
                    }, SET_FULL_BROWSER_PROFILE: (e, t) => {
                        e.fullBrowserProfile = t
                    }, LOAD_BASKET: (e, t) => {
                        e.basket.profiles = t, (!e.basket.profiles.columns || Array.isArray(e.basket.profiles.columns) && 0 === e.basket.profiles.columns.length) && (e.basket.profiles.columns = ["notes", "tags", "proxy"])
                    }, SET_SYNCHRONIZER: (e, t) => {
                        e.synchronizer = t
                    }, SET_MAC_ADDRESS_VALUE: (e, t) => {
                        e.browserProfile.macAddress.value = t
                    }, SET_DEVICE_NAME_VALUE: (e, t) => {
                        e.browserProfile.deviceName.value = t
                    }
                },
                actions: {
                    ...g, async loadBasket(t, a = null) {
                        await t.commit("ADD_LOADING", "mainBasket"), t.commit("SET_SELECTED_BASKET", []);
                        try {
                            let e = "/browser_profiles/basket?";
                            a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1));
                            var o, r = await this._vm.api.get(e);
                            200 === r.status && r.data && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null,
                                tags: a && a.tags ? a.tags : null,
                                mainWebsites: a && a.mainWebsites ? a.mainWebsites : null,
                                proxies: a && a.proxies ? a.proxies : null,
                                statuses: a && a.statuses ? a.statuses : null,
                                users: a && a.users ? a.users : null
                            }, t.dispatch("setPaginationBasket", o), t.commit("LOAD_BASKET", r.data.data), t.commit("SET_TOTAL_BASKET", r.data.total), 0 < t.state.basket.selected.length) && t.commit("REPLACE_SELECTED_BASKET", r.data.data)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("REMOVE_LOADING", "mainBasket")
                        }
                    }, async restoreProfiles(e, t) {
                        e.commit("SET_SELECTED_BASKET", []);
                        try {
                            var a = await this._vm.api.patch("browser_profiles/basket/restore", t);
                            200 === a.status && a.data && (e.dispatch("loadTags"), e.dispatch("main/alert", {
                                color: "success",
                                message: O.t("common.restored")
                            }, {root: !0}), e.dispatch("loadBasket"))
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadBrowserProfiles(e, a = null) {
                        await e.commit("ADD_LOADING", "mainTable"), e.getters.filters.sortBy.length && e.getters.filters.order.length && (a && !a.sortBy && (a.sortBy = e.getters.filters.sortBy), a) && !a.order && (a.order = e.getters.filters.order), a && e.getters.filters && (!a.proxies && e.getters.filters.proxies && (a.proxies = e.getters.filters.proxies), !a.tags && e.getters.filters.tags && (a.tags = e.getters.filters.tags), !a.mainWebsites && e.getters.filters.mainWebsites && (a.mainWebsites = e.getters.filters.mainWebsites), !a.statuses && e.getters.filters.statuses && (a.statuses = e.getters.filters.statuses), !a.users) && e.getters.filters.users && (a.users = e.getters.filters.users);
                        try {
                            let t = "/browser_profiles?";
                            a && a.page && (t += `page=${a.page}&`), a && a.itemsPerPage && (t += `limit=${a.itemsPerPage}&`), a && a.query && (t += `query=${encodeURIComponent(a.query)}&`), a && a.tags && a.tags.forEach(e => {
                                t += `tags[]=${encodeURIComponent(e)}&`
                            }), a && a.mainWebsites && a.mainWebsites.forEach(e => {
                                t += `mainWebsites[]=${e}&`
                            }), a && a.proxies && a.proxies.forEach(e => {
                                t += `proxies[]=${e}&`
                            }), a && a.statuses && a.statuses.forEach(e => {
                                t += `statuses[]=${encodeURIComponent(e)}&`
                            }), a && a.sortBy && (t += `sortBy=${a.sortBy}&`), a && a.order && (t += `order=${a.order}&`), a && a.users && a.users.forEach(e => {
                                t += `users[]=${e}&`
                            }), t.endsWith("&") && (t = t.slice(0, t.length - 1)), null !== a && !t.endsWith("?") || (t += "page=1&limit=50");
                            var o, r = await this._vm.api.get(t);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null,
                                tags: a && a.tags ? a.tags : null,
                                mainWebsites: a && a.mainWebsites ? a.mainWebsites : null,
                                proxies: a && a.proxies ? a.proxies : null,
                                statuses: a && a.statuses ? a.statuses : null,
                                users: a && a.users ? a.users : null
                            }, e.dispatch("setPagination", o), e.dispatch("sendArchivedProfiles"), e.commit("SET_ALL", r.data.data), e.commit("ADD_TEAM_PROFILE_RUNNING", r.data.data), e.commit("SET_TOTAL", r.data.total), 0 < e.state.browserProfiles.selected.length && e.commit("REPLACE_SELECTED", r.data.data), await e.dispatch("getLocalRunningBrowserProfiles"), await Pe.dispatch("proxy/loadProxiesByCurrentBrowserProfilesPage"))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await e.commit("REMOVE_LOADING", "mainTable")
                        }
                    }, async sendArchivedProfiles({state: e, rootState: t}) {
                        try {
                            var a = e.browserProfiles.all.map(e => e.id), {
                                changedTariffFromFree: o,
                                plan: r
                            } = t.main.subscription;
                            if (o && r && 0 < a.length) {
                                const {
                                    data: e,
                                    status: t
                                } = await this._vm.localApi.post("/upload-data-dir-archive", {browserProfiles: a, plan: r});
                                e.success && 200 === t && await this._vm.api.patch("/team/changed-tariff", {changedTariffFromFree: !1})
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async getLocalRunningBrowserProfiles(t) {
                        try {
                            var e = await this._vm.localApi.get("/browser_profiles/running");
                            200 === e.status && e.data && "object" == typeof e.data && Object.entries(e.data).forEach(([e]) => {
                                t.commit("ADD_RUNNING", parseInt(e, 10))
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadCurrentPage(e) {
                        await e.commit("ADD_LOADING", "mainTable");
                        try {
                            let t = "/browser_profiles?";
                            e.state.pagination.currentPage && (t += `page=${e.state.pagination.currentPage}&`), e.state.pagination.itemsPerPage && (t += `limit=${e.state.pagination.itemsPerPage}&`), e.state.pagination.query && (t += `query=${e.state.pagination.query}&`), e.state.pagination.tags && e.state.pagination.tags.forEach(e => {
                                t += `tags[]=${encodeURIComponent(e)}&`
                            }), e.state.pagination.mainWebsites && e.state.pagination.mainWebsites.forEach(e => {
                                t += `mainWebsites[]=${e}&`
                            }), e.state.pagination.proxies && e.state.pagination.proxies.forEach(e => {
                                t += `proxies[]=${e}&`
                            }), e.state.pagination.statuses && e.state.pagination.statuses.forEach(e => {
                                t += `statuses[]=${e}&`
                            }), e.state.pagination.users && e.state.pagination.users.forEach(e => {
                                t += `users[]=${e}&`
                            }), e.state.filters.sortBy && (t += `sortBy=${e.state.filters.sortBy}&`), e.state.filters.order && (t += `order=${e.state.filters.order}&`), (t = t.endsWith("&") ? t.slice(0, t.length - 1) : t).endsWith("?") && (t += "page=1&limit=50");
                            var a, o = await this._vm.api.get(t);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && ((a = {
                                response: o.data,
                                query: e.state.pagination.query || null,
                                tags: e.state.pagination.tags || null,
                                mainWebsites: e.state.pagination.mainWebsites || null,
                                proxies: e.state.pagination.proxies || null,
                                statuses: e.state.pagination.statuses || null,
                                users: e.state.pagination.users || null
                            }).response.per_page = e.state.pagination.perPage || a.response.per_page, e.dispatch("setPagination", a), e.commit("SET_ALL", o.data.data), e.commit("ADD_TEAM_PROFILE_RUNNING", o.data.data), e.commit("SET_TOTAL", o.data.total), 0 < e.state.browserProfiles.selected.length) && e.commit("REPLACE_SELECTED", o.data.data)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await e.commit("REMOVE_LOADING", "mainTable")
                        }
                    }, async loadCurrentPageBasket(e) {
                        await e.commit("ADD_LOADING", "mainTable");
                        try {
                            let t = "/browser_profiles/basket?";
                            e.state.pagination.currentPage && (t += `page=${e.state.pagination.currentPage}&`), e.state.pagination.itemsPerPage && (t += `limit=${e.state.pagination.itemsPerPage}&`), e.state.pagination.query && (t += `query=${e.state.pagination.query}&`), e.state.pagination.tags && e.state.pagination.tags.forEach(e => {
                                t += `tags[]=${encodeURIComponent(e)}&`
                            }), e.state.pagination.mainWebsites && e.state.pagination.mainWebsites.forEach(e => {
                                t += `mainWebsites[]=${e}&`
                            }), e.state.pagination.proxies && e.state.pagination.proxies.forEach(e => {
                                t += `proxies[]=${e}&`
                            }), e.state.pagination.statuses && e.state.pagination.statuses.forEach(e => {
                                t += `statuses[]=${e}&`
                            }), e.state.pagination.users && e.state.pagination.users.forEach(e => {
                                t += `users[]=${e}&`
                            }), (t = t.endsWith("&") ? t.slice(0, t.length - 1) : t).endsWith("?") && (t += "page=1&limit=50");
                            var a, o = await this._vm.api.get(t);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: e.state.pagination.query || null,
                                tags: e.state.pagination.tags || null,
                                mainWebsites: e.state.pagination.mainWebsites || null,
                                proxies: e.state.pagination.proxies || null,
                                statuses: e.state.pagination.statuses || null,
                                users: e.state.pagination.users || null
                            }, e.dispatch("setPaginationBasket", a), e.commit("SET_ALL_BASKET", o.data.data), e.commit("LOAD_BASKET", o.data.data), e.commit("SET_TOTAL_BASKET", o.data.total), 0 < e.state.browserProfiles.selected.length) && e.commit("REPLACE_SELECTED_BASKET", o.data.data)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await e.commit("REMOVE_LOADING", "mainBasket")
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.current_page, 10),
                            lastPage: parseInt(t.response.last_page, 10),
                            firstPageUrl: t.response.first_page_url,
                            nextPageUrl: t.response.next_page_url,
                            prevPageUrl: t.response.prev_page_url,
                            lastPageUrl: t.response.last_page_url,
                            links: t.response.links,
                            perPage: parseInt(t.response.per_page, 10),
                            itemsPerPage: parseInt(t.response.per_page, 10),
                            total: parseInt(t.response.total, 10) ? parseInt(t.response.total, 10) : 0,
                            from: parseInt(t.response.from, 10) ? parseInt(t.response.from, 10) : 0,
                            to: parseInt(t.response.to, 10) ? parseInt(t.response.to, 10) : 0,
                            query: t.query,
                            tags: t.tags,
                            mainWebsites: t.mainWebsites,
                            proxies: t.proxies,
                            statuses: t.statuses,
                            users: t.users
                        };
                        localStorage.setItem("browser-profiles-pagination", JSON.stringify(t)), await e.commit("SET_PAGINATION", t)
                    }, async setPaginationBasket(e, t) {
                        t = {
                            currentPage: parseInt(t.response.current_page, 10),
                            lastPage: parseInt(t.response.last_page, 10),
                            firstPageUrl: t.response.first_page_url,
                            nextPageUrl: t.response.next_page_url,
                            prevPageUrl: t.response.prev_page_url,
                            lastPageUrl: t.response.last_page_url,
                            links: t.response.links,
                            perPage: parseInt(t.response.per_page, 10),
                            itemsPerPage: parseInt(t.response.per_page, 10),
                            total: parseInt(t.response.total, 10) ? parseInt(t.response.total, 10) : 0,
                            from: parseInt(t.response.from, 10) ? parseInt(t.response.from, 10) : 0,
                            to: parseInt(t.response.to, 10) ? parseInt(t.response.to, 10) : 0,
                            query: t.query,
                            tags: t.tags,
                            mainWebsites: t.mainWebsites,
                            proxies: t.proxies,
                            statuses: t.statuses,
                            users: t.users
                        };
                        localStorage.setItem("browser-profiles-pagination-basket", JSON.stringify(t)), await e.commit("SET_PAGINATION_BASKET", t)
                    }, async addBrowserProfile(e, t) {
                        try {
                            var a = await this._vm.api.post("/browser_profiles", t);
                            if (!a.status || 200 !== a.status || a.data.error) throw a;
                            var o = {
                                query: e.state.pagination.query,
                                tags: e.state.pagination.tags,
                                page: e.state.pagination.currentPage,
                                itemsPerPage: e.state.pagination.itemsPerPage,
                                mainWebsites: e.state.pagination.mainWebsites,
                                proxies: e.state.pagination.proxies,
                                statuses: e.state.pagination.statuses,
                                users: e.state.pagination.users
                            };
                            return e.dispatch("loadBrowserProfiles", o), e.dispatch("loadTags"), e.dispatch("main/alert", {
                                color: "success",
                                message: O.t("common.added")
                            }, {root: !0}), await e.dispatch("main/getSubscription", null, {root: !0}), a.data
                        } catch (e) {
                            return console.error(e), !1
                        }
                    }, async editBrowserProfile(e, t) {
                        const a = e.getters.browserProfiles.all.find(e => e.id === t.id);
                        try {
                            a.notes.content && a.notes.content !== t.data.notes.content && this.amplitudeSendNoteEdit(this.browserProfile, this.subscription)
                        } catch (e) {
                            console.log(e)
                        }
                        try {
                            !a.notes.content && t.data.notes.content && this.amplitudeSendNoteAdd(this.browserProfile, this.subscription)
                        } catch (e) {
                            console.log(e)
                        }
                        try {
                            t.data && t.data.proxy && parseInt(a.proxyId) !== parseInt(t.data.proxy.id) && this.amplitudeSendAccountProxyChange(this.browserProfile, this.subscription)
                        } catch (e) {
                            console.log(e)
                        }
                        try {
                            JSON.stringify(a.tags) !== JSON.stringify(t.data.tags) && (a.tags.length < t.data.tags.length ? this._vm.$amplitude.getInstance().logEvent("Tag Add", {"tags count": t.data.tags.length}) : this._vm.$amplitude.getInstance().logEvent("Tag Delete", {"tags count": t.data.tags.length}))
                        } catch (e) {
                            console.log(e)
                        }
                        try {
                            const a = await this._vm.api.patch("/browser_profiles/" + t.id, t.data);
                            if (!a.status || 200 !== a.status || a.data.error) throw a;
                            return e.dispatch("loadCurrentPage"), e.dispatch("loadTags"), e.dispatch("main/alert", {
                                color: "success",
                                message: O.t("common.saved")
                            }, {root: !0}), !0
                        } catch (e) {
                            return console.error(e), !1
                        }
                    }, async loadTags(o, r = {sendAmplitude: !1}) {
                        try {
                            await o.commit("ADD_LOADING", "tags");
                            let e = "/browser_profiles/tags?",
                                t = (o.state.filters.users.length && o.state.filters.users.forEach(t => {
                                    o.rootState.users.users.all.find(e => parseInt(e.id, 10) === parseInt(t, 10)) && (e += `users[]=${t}&`)
                                }), e.endsWith("&") && (e = e.slice(0, e.length - 1), e += "&page=1"), e.endsWith("?") && (e += "page=1&limit=50"), await this._vm.api.get(e)),
                                a = [];
                            if (200 === t.status && t.data.data && Array.isArray(t.data.data)) {
                                if (a = a.concat(t.data.data), r.sendAmplitude) switch (r.mode) {
                                    case 1:
                                        this._vm.$amplitude.getInstance().logEvent("Tag Add", {"tags count": t.data.total});
                                        break;
                                    case 0:
                                        this._vm.$amplitude.getInstance().logEvent("Tag Delete", {"tags count": t.data.total})
                                }
                                if (1 < t.data.last_page) for (; t.data.current_page < t.data.last_page;) t = await this._vm.api.get(e.replace(/page=\d{1,1000}/, "page=" + (t.data.current_page + 1))), a = a.concat(t.data.data);
                                const s = [];
                                a.forEach(t => {
                                    s.some(e => e.name === t.name) || s.push(t)
                                }), await o.commit("SET_SORTED_TAGS", s)
                            }
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await o.commit("REMOVE_LOADING", "tags")
                        }
                    }, async setEmptyBrowserProfile(e, t) {
                        await e.commit("SET_EMPTY_BROWSER_PROFILE", t)
                    }, async setFilter(e, t) {
                        await e.commit("SET_FILTER", t)
                    }, async getBrowserProfileDeviceName(e, t) {
                        try {
                            var a = await this._vm.api.get("/browser_profiles/generate-device-name?os=" + t).then(e => e.data.deviceName);
                            e.commit("SET_DEVICE_NAME_VALUE", a)
                        } catch (e) {
                            console.log(e.message)
                        }
                    }, async getBrowserProfileMacAddress(e) {
                        try {
                            var t = (await this._vm.api.get("/browser_profiles/generate-mac")).data.macAddress;
                            e.commit("SET_MAC_ADDRESS_VALUE", t)
                        } catch (e) {
                            console.log(e.message)
                        }
                    }, async deleteBrowserProfiles(e, t) {
                        try {
                            var a = e.rootState.main["isFreeTariff"],
                                o = a ? "/browser_profiles?forceDelete=1" : "/browser_profiles",
                                r = await this._vm.api.delete(o, {data: t});
                            if (r.status && 200 === r.status) return e.commit("SET_SELECTED", []), e.dispatch("removeBrowserProfiles", t.ids), e.dispatch("loadTags"), e.dispatch("main/alert", {
                                color: "success",
                                message: O.t("common.deleted")
                            }, {root: !0}), !0;
                            throw r
                        } catch (e) {
                            return !1
                        }
                    }, async setBrowserProfile(e, t) {
                        e.commit("SET_BROWSER_PROFILE", t)
                    }, async removeBrowserProfiles(e, t) {
                        e.commit("REMOVE_BROWSER_PROFILES", t)
                    }, async setBrowserProfileForCookieRobot(e, t) {
                        e.commit("SET_BROWSER_PROFILE", t)
                    }, async setBrowserProfileForEdit(e, t) {
                        var a = {
                            id: t.id,
                            name: void 0 === t.name ? "" : t.name,
                            tags: void 0 === t.tags ? [] : t.tags,
                            platform: void 0 === t.platform ? "" : t.platform,
                            browserType: t.browserType || "chrome",
                            mainWebsite: t.mainWebsite || "none",
                            useragent: {
                                mode: t.useragent && void 0 !== t.useragent.mode ? t.useragent.mode : "auto",
                                value: t.useragent && void 0 !== t.useragent.value ? t.useragent.value : null
                            },
                            webrtc: {
                                mode: t.webrtc && void 0 !== t.webrtc.mode ? t.webrtc.mode : "altered",
                                ipAddress: t.webrtc && void 0 !== t.webrtc.ipAddress ? t.webrtc.ipAddress : null
                            },
                            webgl: {mode: t.webgl && void 0 !== t.webgl.mode ? t.webgl.mode : "off"},
                            webglInfo: {
                                mode: t.webglInfo && void 0 !== t.webglInfo.mode ? t.webglInfo.mode : "real",
                                vendor: t.webglInfo && void 0 !== t.webglInfo.vendor ? t.webglInfo.vendor : null,
                                renderer: t.webglInfo && void 0 !== t.webglInfo.renderer ? t.webglInfo.renderer : null
                            },
                            webgpu: {mode: "off" === (null == (a = t.webgpu) ? void 0 : a.mode) ? "off" : "real"},
                            clientRect: {mode: t.clientRect && void 0 !== t.clientRect.mode ? t.clientRect.mode : "real"},
                            canvas: {mode: t.canvas && void 0 !== t.canvas.mode ? t.canvas.mode : "real"},
                            notes: {
                                content: t.notes && void 0 !== t.notes.content ? t.notes.content : "",
                                color: t.notes && void 0 !== t.notes.color ? t.notes.color : "blue",
                                style: t.notes && void 0 !== t.notes.style ? t.notes.style : "text",
                                icon: t.notes && void 0 !== t.notes.icon ? t.notes.icon : null
                            },
                            timezone: {
                                mode: t.timezone && void 0 !== t.timezone.mode ? t.timezone.mode : "auto",
                                value: t.timezone && void 0 !== t.timezone.value ? t.timezone.value : null
                            },
                            locale: {
                                mode: t.locale && void 0 !== t.locale.mode ? t.locale.mode : "auto",
                                value: t.locale && void 0 !== t.locale.value ? t.locale.value : null
                            },
                            clientRects: {mode: t.clientRects && void 0 !== t.clientRects.mode ? t.clientRects.mode : "real"},
                            geolocation: {
                                mode: t.geolocation && void 0 !== t.geolocation.mode ? t.geolocation.mode : "auto",
                                latitude: t.geolocation && void 0 !== t.geolocation.latitude ? t.geolocation.latitude : null,
                                longitude: t.geolocation && void 0 !== t.geolocation.longitude ? t.geolocation.longitude : null,
                                accuracy: t.geolocation && void 0 !== t.geolocation.accuracy ? t.geolocation.accuracy : null
                            },
                            cpu: {
                                mode: t.cpu && void 0 !== t.cpu.mode ? t.cpu.mode : "real",
                                value: t.cpu && void 0 !== t.cpu.value ? t.cpu.value : null
                            },
                            memory: {
                                mode: t.memory && void 0 !== t.memory.mode ? t.memory.mode : "real",
                                value: t.memory && void 0 !== t.memory.value ? t.memory.value : null
                            },
                            macAddress: {
                                mode: t.macAddress && void 0 !== t.macAddress.mode ? t.macAddress.mode : "off",
                                value: t.macAddress && void 0 !== t.macAddress.value ? t.macAddress.value : null
                            },
                            deviceName: {
                                mode: t.deviceName && void 0 !== t.deviceName.mode ? t.deviceName.mode : "off",
                                value: t.deviceName && void 0 !== t.deviceName.value ? t.deviceName.value : null
                            },
                            screen: {
                                mode: t.screen && void 0 !== t.screen.mode ? t.screen.mode : "real",
                                resolution: t.screen && void 0 !== t.screen.resolution ? t.screen.resolution : null,
                                colorDepth: t.screen && void 0 !== t.screen.colorDepth ? t.screen.colorDepth : null
                            },
                            audio: {mode: t.audio && void 0 !== t.audio.mode ? t.audio.mode : "real"},
                            mediaDevices: {
                                mode: t.mediaDevices && void 0 !== t.mediaDevices.mode ? t.mediaDevices.mode : "real",
                                audioInputs: t.mediaDevices && void 0 !== t.mediaDevices.audioInputs ? t.mediaDevices.audioInputs : null,
                                videoInputs: t.mediaDevices && void 0 !== t.mediaDevices.videoInputs ? t.mediaDevices.videoInputs : null,
                                audioOutputs: t.mediaDevices && void 0 !== t.mediaDevices.audioOutputs ? t.mediaDevices.audioOutputs : null
                            },
                            ports: {
                                mode: t.ports && void 0 !== t.ports.mode ? t.ports.mode : "protect",
                                blacklist: t.ports && void 0 !== t.ports.blacklist ? t.ports.blacklist : "3389,5900,5800,7070,6568,5938"
                            },
                            doNotTrack: void 0 !== t.doNotTrack && t.doNotTrack,
                            args: Array.isArray(t.args) ? t.args.map(e => "--" + e).join("\n") : "",
                            status: t.status || null,
                            forEdit: !0,
                            proxy: t.proxy || null,
                            proxyId: t.proxyId || 0,
                            proxyInput: "",
                            proxyNew: {name: "", host: "", port: "", type: "", login: "", password: "", changeIpUrl: ""},
                            platformVersion: t.platformVersion || null,
                            uaFullVersion: t.uaFullVersion || null,
                            login: t.login || "",
                            password: t.password || "",
                            loginpassword: !!t.loginpassword && t.loginpassword
                        };
                        0 < t.proxyId ? a.proxyMode = 2 : a.proxyMode = 0, "anty" === t.browserType && (a.appCodeName = t.appCodeName, a.platformName = t.platformName, a.connectionDownlink = t.connectionDownlink, a.connectionEffectiveType = t.connectionEffectiveType, a.connectionRtt = t.connectionRtt, a.connectionSaveData = t.connectionSaveData, a.cpuArchitecture = t.cpuArchitecture, a.osVersion = t.osVersion ? t.osVersion.toString() : "", a.vendorSub = t.vendorSub, a.productSub = t.productSub ? t.productSub.toString() : "", a.vendor = t.vendor, a.product = t.product), await e.commit("SET_BROWSER_PROFILE", a)
                    }, async addRunning(e, t) {
                        await e.commit("ADD_RUNNING", t)
                    }, async removeRunning(e, t) {
                        await e.commit("REMOVE_RUNNING", t)
                    }, async addLoading(e, t) {
                        await e.commit("ADD_LOADING", t)
                    }, async removeLoading(e, t) {
                        await e.commit("REMOVE_LOADING", t)
                    }, async addPendingRequest(e, t) {
                        await e.commit("ADD_PENDING_REQUEST", t)
                    }, async removePendingRequest(e, t) {
                        await e.commit("REMOVE_PENDING_REQUEST", t)
                    }, async addCookieRobotRunning(e, t) {
                        await e.commit("ADD_COOKIE_ROBOT_RUNNING", t)
                    }, async addCookieRobotProgress(e, t) {
                        await e.commit("ADD_COOKIE_ROBOT_PROGRESS", t)
                    }, async removeCookieRobotRunning(e, t) {
                        await e.commit("REMOVE_COOKIE_ROBOT_RUNNING", t)
                    }, async clearUseragent(e) {
                        await e.commit("CLEAR_USERAGENT")
                    }, async setBrowserProfileProperty(e, t) {
                        await e.commit("SET_BROWSER_PROFILE_PROPERTY", t)
                    }, async addSync(e, t) {
                        await e.commit("ADD_SYNC", t)
                    }, async removeSync(e, t) {
                        await e.commit("REMOVE_SYNC", t)
                    }, async addSyncErrors(e, t) {
                        await e.commit("ADD_SYNC_ERRORS", t)
                    }, async addMainButtonError(e, t) {
                        await e.commit("ADD_MAIN_BUTTON_ERROR", t)
                    }, async removeMainButtonError(e, t) {
                        await e.commit("REMOVE_MAIN_BUTTON_ERROR", t)
                    }, async addSyncSuccess(e, t) {
                        await e.commit("ADD_SYNC_SUCCESS", t)
                    }, async removeSyncErrors(e, t) {
                        await e.commit("REMOVE_SYNC_ERRORS", t)
                    }, async setBrowserProfileSyncError(e, t) {
                        await e.commit("SET_BROWSER_PROFILE_SYNC_ERROR", t)
                    }, async setColumns(e, t) {
                        await e.commit("SET_COLUMNS", t)
                    }, async setBrowserProfileTimer(e, t) {
                        await e.commit("SET_BROWSER_PROFILE_TIMER", t)
                    }, async loadScreenResolutions(e) {
                        const t = ["linux", "windows", "macos"];
                        for (const a of t) {
                            const t = await this._vm.api.get("/fingerprints/screen?platform=" + a);
                            200 === t.status && t.data && Array.isArray(t.data.data) && await e.commit("SET_SCREEN_RESOLUTIONS", {
                                platform: a,
                                data: t.data.data
                            })
                        }
                    }, async sendEventStop(e, t) {
                        var a;
                        (a = t.browserProfile ? await this._vm.api.post(`/browser_profiles/${t.browserProfile.id}/events`, {type: "stop"}, {cancelToken: t.cancelToken.token}) : await this._vm.api.post(`/browser_profiles/${t}/events`, {type: "stop"})) && a.data && a.data && void 0 !== a.data.totalSessionDuration && null !== a.data.totalSessionDuration && 0 < parseInt(a.data.totalSessionDuration, 10) && e.commit("SET_TOTAL_SESSION_DURATION", {
                            id: t.browserProfile ? t.browserProfile.id : t,
                            totalSessionDuration: a.data.totalSessionDuration
                        })
                    }, async setCancelToken(e, t) {
                        await e.commit("SET_CANCEL_TOKEN", t)
                    }, async setWebglDataList(e, t) {
                        e.commit("SET_WEBGL_DATA_LIST", t)
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async clearTags(e) {
                        e.commit("SET_SORTED_TAGS", [])
                    }, async clearSelected(e) {
                        await e.commit("SET_SELECTED", [])
                    }, async clearSelectedBasket(e) {
                        await e.commit("SET_SELECTED_BASKET", [])
                    }, async setFullBrowserProfile(e, t) {
                        await e.commit("SET_FULL_BROWSER_PROFILE", t)
                    }, async addTeamProfileRunning(e, t) {
                        await e.commit("ADD_TEAM_PROFILE_RUNNING", t)
                    }, async removeTeamProfileRunning(e, t) {
                        await e.commit("REMOVE_TEAM_PROFILE_RUNNING", t)
                    }, async setUserFieldsForMainDialog(e, t) {
                        var a = [];
                        for (const o of t) {
                            switch (o.type) {
                                case"text":
                                case"textarea":
                                case"select":
                                    o.value = "";
                                    break;
                                case"checkbox":
                                    o.value = !1;
                                    break;
                                case"checklist":
                                    if (o.value = {}, o.content && o.content.items && Array.isArray(o.content.items)) for (const e of o.content.items) o.value[e.id] = !1;
                                    break;
                                case"selectMultiple":
                                    o.value = []
                            }
                            e.state.browserProfile && e.state.browserProfile.userFields && Array.isArray(e.state.browserProfile.userFields) && 0 < e.state.browserProfile.userFields.length && e.state.browserProfile.userFields.forEach(e => {
                                parseInt(e.fieldId, 10) === parseInt(o.id, 10) && e.value && (o.value = this.$_.cloneDeep(e.value))
                            }), a.push(o)
                        }
                        e.commit("SET_USER_FIELDS_FOR_MAIN_DIALOG", a)
                    }, async addSynchronizer({state: e, commit: t}, {session: a, master: o, managed: r, profiles: s}) {
                        t("SET_SYNCHRONIZER", {
                            ...e.synchronizer || {},
                            [a]: {master: o, managed: r, started: 0, profiles: s}
                        })
                    }, async removeSynchronizer({state: e, commit: t}, a) {
                        e = Object(Ee.omit)(e.synchronizer, a);
                        Object(Ee.isEmpty)(e) ? t("SET_SYNCHRONIZER", null) : t("SET_SYNCHRONIZER", e)
                    }, async removeSynchronizerManaged({state: e, commit: t}, {session: a, id: o}) {
                        t("SET_SYNCHRONIZER", {
                            ...e.synchronizer,
                            [a]: {...e.synchronizer[a], managed: e.synchronizer[a].managed.filter(e => e !== o)}
                        })
                    }, async incrementSynchronizerStarted({state: e, commit: t}, {session: a}) {
                        t("SET_SYNCHRONIZER", {
                            ...e.synchronizer,
                            [a]: {...e.synchronizer[a], started: e.synchronizer[a].started + 1}
                        })
                    }
                }
            }, ve = r("6cfc"), se = {
                namespaced: !0,
                state: {
                    appVersion: null,
                    profile: {},
                    isFreeTariff: !1,
                    isPaidFreeTariff: !1,
                    profileAuthorized: !1,
                    dialogs: {
                        alert: !1,
                        help: !1,
                        warning: !1,
                        error: !1,
                        feedback: !1,
                        logoutConfirmation: !1,
                        editProfile: !1,
                        restrictMachine: !1,
                        trialPeriod: !1,
                        freeUnpaidTariff: !1,
                        osCompatibility: !1,
                        endedPlan: !1
                    },
                    alert: {color: "", message: ""},
                    help: {title: "", body: ""},
                    warning: {createProfile: !1, doNotShowWarning: !1, title: "", body: ""},
                    error: {},
                    innerHeight: 0,
                    browserDownloading: {show: !1, stage: null, percentage: 0, showProgress: !0},
                    subscription: {},
                    disableUi: !1,
                    showOsVersionBanner: !1,
                    restriction: {restrict: !1},
                    trialExpired: !1,
                    extraBrowserProfiles: 0,
                    extraUsers: 0,
                    sidebarProfileNotification: !1,
                    isSubscriptionExpired: !1,
                    banners: {twoFactor: !1, expiresPlan: !1, incorrectTime: !1}
                },
                getters: {
                    ...y,
                    getField: a.a,
                    profile: e => e.profile,
                    profileAuthorized: e => e.profileAuthorized,
                    alert: e => e.alert,
                    help: e => e.help,
                    warning: e => e.warning,
                    error: e => e.error,
                    innerHeight: e => e.innerHeight,
                    appVersion: e => e.appVersion,
                    browserDownloading: e => e.browserDownloading,
                    subscription: e => e.subscription,
                    disableUi: e => e.disableUi,
                    showOsVersionBanner: e => e.showOsVersionBanner,
                    restriction: e => e.restriction,
                    remainingDaysForTrialPeriod: e => e.remainingDaysForTrialPeriod,
                    extraBrowserProfiles: e => e.extraBrowserProfiles,
                    extraUsers: e => e.extraUsers,
                    sidebarProfileNotification: e => e.sidebarProfileNotification,
                    trialExpired: e => e.trialExpired,
                    trialPeriod: e => e.trialPeriod,
                    banners: e => e.banners,
                    freeWelcome: e => e.dialogs.freeWelcome,
                    isFreeTariff: e => e.isFreeTariff,
                    isPaidFreeTariff: e => e.isPaidFreeTariff,
                    twoFactor: e => e.banners.twoFactor,
                    isSubscriptionExpired: e => e.isSubscriptionExpired
                },
                mutations: {
                    ...u, updateField: a.c, SET_APP_VERSION: (e, t) => {
                        e.appVersion = t
                    }, LOAD_PROFILE: (e, t) => {
                        e.profile = t, (!e.profile.columns || Array.isArray(e.profile.columns) && 0 === e.profile.columns.length) && (e.profile.columns = ["notes", "tags", "proxy"])
                    }, SET_ALERT: (e, t) => {
                        e.alert = t
                    }, OPEN_ALERT: e => {
                        e.dialogs.alert = !0
                    }, CLOSE_ALERT: e => {
                        e.dialogs.alert = !1
                    }, SET_HELP: (e, t) => {
                        e.help.title = t.title, e.help.body = t.body
                    }, SET_WARNING: (e, t) => {
                        e.warning = t
                    }, SET_ERROR: (e, t) => {
                        e.error[t.key] = "object" != typeof t ? t.value.replace(/\\/g, "") : t.value
                    }, SET_INNER_HEIGHT: (e, t) => {
                        e.innerHeight = t
                    }, SET_SUBSCRIPTION: (e, t) => {
                        e.subscription = t
                    }, SET_DISABLE_UI: (e, t) => {
                        e.disableUi = t
                    }, SET_SHOW_OS_VERSION_BANNER: (e, t) => {
                        e.showOsVersionBanner = t
                    }, SET_PINNED_BROWSER_PROFILES_COUNT: (e, t) => {
                        e.profile.pinnedBrowserProfilesCount = t
                    }, SET_RESTRICTION: (e, t) => {
                        e.restriction = t
                    }, SET_EXTRA_BROWSER_PROFILES: (e, t) => {
                        e.extraBrowserProfiles = t
                    }, SET_EXTRA_USERS: (e, t) => {
                        e.extraUsers = t
                    }, SET_SIDEBAR_PROFILE_NOTIFICATION: (e, t) => {
                        e.sidebarProfileNotification = t
                    }, SET_TRIAL_EXPIRED: (e, t) => {
                        e.trialExpired = t
                    }, SET_BANNERS: (e, {key: t, value: a}) => {
                        e.banners[t] = a
                    }, SET_FREE_WELCOME: (e, t) => {
                        e.freeWelcome = t
                    }, SET_IS_FREE_TARIFF: (e, t) => {
                        e.isFreeTariff = t
                    }, SET_IS_PAID_FREE_TARIFF: (e, t) => {
                        e.isPaidFreeTariff = t
                    }, SET_IS_SUBSCRIPTION_EXPIRED: (e, t) => {
                        e.isSubscriptionExpired = t
                    }
                },
                actions: {
                    ...g, async loadProfile(e) {
                        var t = await this._vm.api.get("/profile");
                        if (200 === t.status && t.data) {
                            var a = t.data.data;
                            e.commit("LOAD_PROFILE", a);
                            try {
                                this._vm.$amplitude.getInstance().options.userId || this._vm.$amplitude.getInstance().setUserId(t.data.data.username)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }, async alert(e, t) {
                        e.commit("CLOSE_ALERT"), e.commit("SET_ALERT", t), e.commit("OPEN_ALERT"), setTimeout(() => {
                            e.commit("CLOSE_ALERT")
                        }, 5e3)
                    }, async closeAlert(e) {
                        e.commit("CLOSE_ALERT")
                    }, async setHelp(e, t) {
                        e.commit("SET_HELP", t)
                    }, async setWarning(e, t) {
                        e.commit("SET_WARNING", t)
                    }, async setError(e, t) {
                        e.commit("SET_ERROR", t)
                    }, async setInnerHeight(e, t) {
                        e.commit("SET_INNER_HEIGHT", t)
                    }, async setAppVersion({commit: e}, t) {
                        e("SET_APP_VERSION", t)
                    }, async setExtraBrowserProfiles({commit: e}, t) {
                        e("SET_EXTRA_BROWSER_PROFILES", t)
                    }, async setExtraUsers({commit: e}, t) {
                        e("SET_EXTRA_USERS", t)
                    }, async setSidebarProfileNotification({commit: e}, t) {
                        e("SET_SIDEBAR_PROFILE_NOTIFICATION", t)
                    }, async setTrialExpired({commit: e}, t) {
                        e("SET_TRIAL_EXPIRED", t)
                    }, async setTrialPeriod({commit: e}, t) {
                        e("SET_TRIAL_PERIOD", t)
                    }, async setIsPaidFreeTariff({commit: e}, t) {
                        var a = 0 < t.browserProfiles.additionalProfiles, o = 0 < t.users.additionalUsers;
                        e("SET_IS_PAID_FREE_TARIFF", "free" === t.plan && (a || o))
                    }, async getSubscription(a, e = 0) {
                        var o = await this._vm.api.get("/subscription");
                        if (o && 200 === o.status && o.data && o.data.data) {
                            a.commit("SET_SUBSCRIPTION", o.data.data);
                            let e = m.a.utc(o.data.data.expiration).unix() < Math.floor(Date.now() / 1e3);
                            var r = o.data.data.browserProfiles.count > o.data.data.browserProfiles.limit,
                                s = o.data.data.users.count > o.data.data.users.limit;
                            let t = !1;
                            var i = localStorage.getItem("osInfo");
                            "Windows 7" !== i && "Windows 8" !== i && "Windows 8.1" !== i || (t = !0), "free" === o.data.data.plan.toLowerCase() && 10 === parseInt(o.data.data.browserProfiles.limit, 10) && (e = !1), a.commit("SET_IS_SUBSCRIPTION_EXPIRED", e), a.commit("SET_SHOW_OS_VERSION_BANNER", t && !(r || s)), a.commit("SET_DISABLE_UI", e || r || s), a.dispatch("setIsFreeTariff", o.data.data), a.dispatch("setIsPaidFreeTariff", o.data.data)
                        }
                    }, async setPinnedBrowserProfilesCount({commit: e}, t) {
                        e("SET_PINNED_BROWSER_PROFILES_COUNT", t)
                    }, async getRestriction(e, t) {
                        t = await this._vm.api.get("/restriction?machineId=" + t);
                        t && 200 === t.status && t.data && (localStorage.setItem("restriction", JSON.stringify(t.data)), e.commit("SET_RESTRICTION", t.data), t.data.restrict) && (await e.dispatch("openRestrictionDialog"), t.data.isFirstAbuseDetection) && this._vm.$amplitude.getInstance().logEvent("Abuse Detected", {"account count": t.data.accountCount})
                    }, openRestrictionDialog(e) {
                        var t = parseInt(localStorage.getItem("restrictionDialogLastOpenedAt"), 10);
                        if (0 < t) {
                            const e = Date.now() - t;
                            if (e < 864e5) return !1
                        }
                        localStorage.setItem("restrictionDialogLastOpenedAt", String((new Date).getTime())), e.commit("OPEN_DIALOG", "restrictMachine")
                    }, async initializeStore(e) {
                        var t;
                        localStorage.getItem("restriction") && (t = JSON.parse(localStorage.getItem("restriction")), e.commit("SET_RESTRICTION", t), null != t) && t.restrict && await e.dispatch("openRestrictionDialog")
                    }, async showOsVersionBanner({commit: e}, t) {
                        e("SET_SHOW_OS_VERSION_BANNER", t)
                    }, async setBanners({commit: e}, t) {
                        e("SET_BANNERS", t)
                    }, async check2FABanner({state: e, dispatch: t}, a) {
                        if (e.profile.id && !+e.profile.twoFactorEnableDisable) {
                            var o = Object(ve.a)("usersData", {path: e.profile.id + ".twoFactorBannerLastShow"});
                            if (o) {
                                const e = new Date(Date.parse(o)), a = new Date, r = a.getTime() - e.getTime();
                                7776e6 <= r && t("setBanners", {key: "twoFactor", value: !0})
                            } else t("setBanners", {key: "twoFactor", value: !0})
                        }
                    }, async setIsFreeTariff({commit: e}, t) {
                        e("SET_IS_FREE_TARIFF", "free" === t.plan)
                    }, async disableRecurringPayment({dispatch: e}) {
                        try {
                            var t = await this._vm.api.get("/subscription/cancel");
                            t && 200 === t.status && t.data && await e("getSubscription")
                        } catch (e) {
                            console.log("Error on canceling recurring payment - " + e)
                        }
                    }
                }
            }, oe = {
                namespaced: !0,
                state: {
                    proxies: {all: [], selected: [], checking: [], forEdit: {}},
                    pagination: {},
                    dialogs: {create: !1, delete: !1, edit: !1, share: !1},
                    loading: {mainTable: !1},
                    filters: {
                        name: "",
                        tags: [],
                        statuses: [],
                        mainWebsites: [],
                        users: [],
                        sortBy: [],
                        order: [],
                        proxies: []
                    },
                    mainTableLoading: !1,
                    proxyDropdownLoading: !1
                },
                getters: {
                    ...y,
                    getField: a.a,
                    proxies: e => e.proxies,
                    filters: e => e.filters,
                    loading: e => e.loading,
                    pagination: e => e.pagination,
                    proxyDropdownLoading: e => e.proxyDropdownLoading
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.proxies.all = t
                    }, ADD_ALL: (e, t) => {
                        e.proxies.all = e.proxies.all.concat(t)
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_SELECTED: (e, t) => {
                        e.proxies.selected = t
                    }, SET_FILTER: (e, t) => {
                        e.filters[t.filter] = t.data
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_PROXY_FOR_EDIT: (e, t) => {
                        e.proxies.forEdit = {...t}
                    }, REMOVE_PROXIES: (e, t) => {
                        e.proxies.all = e.proxies.all.filter(e => !t.includes(parseInt(e.id, 10)))
                    }, REPLACE_PROXY: (e, t) => {
                        var a = e.proxies.all.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)),
                            a = (-1 < a && e.proxies.all.splice(a, 1, t), e.proxies.selected.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)));
                        -1 < a && e.proxies.selected.splice(a, 1, t)
                    }, REPLACE_LAST_CHECK: (e, t) => {
                        e.proxies.all = e.proxies.all.map(e => (parseInt(e.id, 10) === parseInt(t.id, 10) && (e.lastCheck = t.lastCheck), e)), e.proxies.selected = e.proxies.selected.map(e => (parseInt(e.id, 10) === parseInt(t.id, 10) && (e.lastCheck = t.lastCheck), e))
                    }, SET_PROXY_DROPDOWN_LOADING: (e, t) => {
                        e.proxyDropdownLoading = t
                    }
                },
                actions: {
                    ...g, async setProxyDropdownLoading({commit: e}, t) {
                        e("SET_PROXY_DROPDOWN_LOADING", t)
                    }, async loadAllProxies(e) {
                        try {
                            var t = await this._vm.api.get("/proxy?page=1&limit=500");
                            if (200 === t.status && t.data.data && Array.isArray(t.data.data)) {
                                var a = {response: t.data};
                                for (await e.dispatch("setPagination", a), await e.commit("SET_ALL", t.data.data); e.state.pagination.currentPage < e.state.pagination.lastPage;) await e.dispatch("loadNextProxies");
                                e.state.pagination.currentPage === e.state.pagination.lastPage && await e.dispatch("setProxyDropdownLoading", !1)
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadProxiesByCurrentBrowserProfilesPage({commit: e, rootState: t, dispatch: a, state: o}) {
                        try {
                            var r = t["browserProfiles"];
                            if (r.browserProfiles.all) {
                                const t = r.browserProfiles.all.filter(e => {
                                        return null == (e = e.proxy) ? void 0 : e.id
                                    }).map(e => e.proxy.id),
                                    s = await this._vm.api.get("/proxy?" + t.map((e, t) => `ids[${t}]=` + e).join("&"));
                                if (200 === s.status && s.data.data && Array.isArray(s.data.data)) {
                                    const t = {response: s.data};
                                    await a("setPagination", t), localStorage.setItem("proxy-pagination", JSON.stringify(o.pagination)), e("SET_ALL", s.data.data)
                                }
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadProxies(t, a = null) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/proxy?";
                            a && a.sortBy && (e += `sortBy=${a.sortBy}&`), a && a.order && (e += `order=${a.order}&`), a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), a && a.query && (e += `query=${encodeURIComponent(a.query)}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== a && !e.endsWith("?") || (e += "page=1&limit=500");
                            var o, r = await this._vm.api.get(e);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null
                            }, await t.dispatch("setPagination", o), localStorage.setItem("proxy-pagination", JSON.stringify(t.state.pagination)), t.commit("SET_ALL", r.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async loadNextProxies(t) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/proxy?";
                            t.state.pagination && t.state.pagination.currentPage && (e += `page=${t.state.pagination.currentPage + 1}&`), t.state.pagination && t.state.pagination.perPage && (e += `limit=${t.state.pagination.perPage}&`), t.state.pagination && t.state.pagination.query && (e += `query=${t.state.pagination.query}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== t.state.pagination && !e.endsWith("?") || (e += "page=1&limit=500");
                            var a, o = await this._vm.api.get(e);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: t.state.pagination && t.state.pagination.query ? t.state.pagination.query : null
                            }, t.dispatch("setPagination", a), t.commit("ADD_ALL", o.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.current_page, 10),
                            lastPage: parseInt(t.response.last_page, 10),
                            firstPageUrl: t.response.first_page_url,
                            nextPageUrl: t.response.next_page_url,
                            prevPageUrl: t.response.prev_page_url,
                            lastPageUrl: t.response.last_page_url,
                            links: t.response.links,
                            perPage: parseInt(t.response.per_page, 10),
                            total: parseInt(t.response.total, 10),
                            from: parseInt(t.response.from, 10),
                            to: parseInt(t.response.to, 10),
                            query: t.query
                        };
                        await e.commit("SET_PAGINATION", t)
                    }, async setFilter(e, t) {
                        await e.commit("SET_FILTER", t)
                    }, async clearSelected(e) {
                        await e.commit("SET_SELECTED", [])
                    }, async deleteProxies(e, t) {
                        t = await this._vm.api.delete("/proxy", {data: t});
                        return 200 === t.status && t.data && !0 === t.data.success && (e.commit("SET_SELECTED", []), e.dispatch("main/alert", {
                            color: "success",
                            message: O.t("common.deleted")
                        }, {root: !0})), t
                    }, async setProxyForEdit(e, t) {
                        await e.commit("SET_PROXY_FOR_EDIT", t)
                    }, async editProxy(e, t) {
                        t = await this._vm.api.patch("/proxy/" + t.id, t.payload);
                        return 200 === t.status && (await e.dispatch("replaceProxy", t.data.data), e.dispatch("main/alert", {
                            color: "success",
                            message: O.t("common.saved")
                        }, {root: !0}), !0)
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async replaceProxy(e, t) {
                        await e.commit("REPLACE_PROXY", t)
                    }, async replaceLastCheck(e, t) {
                        await e.commit("REPLACE_LAST_CHECK", t)
                    }
                }
            }, C = {
                namespaced: !0,
                state: {
                    initialDolphinTokenState: "",
                    settings: {
                        user: {
                            dolphinIntegration: {token: ""},
                            homepages: {all: "", facebook: "", google: "", tiktok: "", crypto: ""}
                        }
                    },
                    dialogs: {}
                },
                getters: {...y, getField: a.a, settings: e => e.settings, dialogs: e => e.dialogs},
                mutations: {
                    ...u, updateField: a.c, SET_SETTINGS: (e, t) => {
                        var a = {
                            user: {
                                dolphinIntegration: {token: t.user && t.user.dolphinIntegration && t.user.dolphinIntegration.token ? t.user.dolphinIntegration.token : ""},
                                homepages: {all: "", facebook: "", google: "", tiktok: "", crypto: ""}
                            }
                        };
                        t.user && t.user.homepages && (t.user.homepages.all && (a.user.homepages.all = t.user.homepages.all), t.user.homepages.facebook && (a.user.homepages.facebook = t.user.homepages.facebook), t.user.homepages.google && (a.user.homepages.google = t.user.homepages.google), t.user.homepages.tiktok && (a.user.homepages.tiktok = t.user.homepages.tiktok), t.user.homepages.crypto) && (a.user.homepages.crypto = t.user.homepages.crypto), e.settings = a, e.initialDolphinTokenState = a.user.dolphinIntegration.token
                    }
                },
                actions: {
                    ...g, async loadSettings(e) {
                        var t = await this._vm.api.get("/settings");
                        t && 200 === t.status && t.data && t.data.data && (await e.commit("SET_SETTINGS", t.data.data), this._vm.localApi.post("/settings", e.state.settings))
                    }, async saveSettings(t) {
                        try {
                            let e;
                            !t.state.initialDolphinTokenState && t.state.settings.user.dolphinIntegration.token ? (e = (new this._vm.$amplitude.Identify).set("dolphin token", !0), await this._vm.$amplitude.getInstance().identify(e), this._vm.$amplitude.getInstance().logEvent("Dolphin Token Add")) : (e = (new this._vm.$amplitude.Identify).set("dolphin token", !1), await this._vm.$amplitude.getInstance().identify(e), this._vm.$amplitude.getInstance().logEvent("Dolphin Token Delete"))
                        } catch (e) {
                        }
                        200 === (await this._vm.api.patch("/settings", t.state.settings)).status && t.dispatch("main/alert", {
                            color: "success",
                            message: O.t("common.saved")
                        }, {root: !0})
                    }
                }
            }, x = {
                namespaced: !0,
                state: {
                    statuses: {all: [], selected: [], forMainDialog: {name: "", color: "blue"}},
                    pagination: {},
                    dialogs: {mainDialog: !1, delete: !1},
                    loading: {mainTable: !1},
                    mainDialogMode: "create",
                    selectedProfile: !1
                },
                getters: {
                    ...y,
                    getField: a.a,
                    statuses: e => e.statuses,
                    dialogs: e => e.dialogs,
                    mainDialogMode: e => e.mainDialogMode,
                    loading: e => e.loading,
                    pagination: e => e.pagination,
                    selectedProfile: e => e.selectedProfile
                },
                mutations: {
                    ...u, updateField: a.c, SET_SELECTED_PROFILE: (e, t) => {
                        e.selectedProfile = t
                    }, SET_ALL: (e, t) => {
                        e.statuses.all = t
                    }, ADD_ALL: (e, t) => {
                        e.statuses.all = e.statuses.all.concat(t)
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_STATUS_FOR_MAIN_DIALOG: (e, t) => {
                        e.statuses.forMainDialog = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_SELECTED: (e, t) => {
                        e.statuses.selected = t
                    }, SET_MAIN_DIALOG_MODE: (e, t) => {
                        e.mainDialogMode = t
                    }, REMOVE_STATUSES: (e, t) => {
                        e.statuses.all = e.statuses.all.filter(e => !t.includes(parseInt(e.id, 10)))
                    }, REPLACE_STATUS: (e, t) => {
                        var a = e.statuses.all.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)),
                            a = (-1 < a && e.statuses.all.splice(a, 1, t), e.statuses.selected.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)));
                        -1 < a && e.statuses.selected.splice(a, 1, t)
                    }
                },
                actions: {
                    ...g, async loadAllStatuses(e) {
                        try {
                            var t = await this._vm.api.get("/browser_profiles/statuses?page=1&limit=50");
                            if (200 === t.status && t.data.data && Array.isArray(t.data.data)) {
                                var a = {response: t.data};
                                for (await e.dispatch("setPagination", a), await e.commit("SET_ALL", t.data.data); e.state.pagination.currentPage < e.state.pagination.lastPage;) await e.dispatch("loadNextStatuses")
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadStatuses(t, a = null) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/browser_profiles/statuses?";
                            a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), a && a.query && (e += `query=${encodeURIComponent(a.query)}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== a && !e.endsWith("?") || (e += "page=1&limit=10");
                            var o, r = await this._vm.api.get(e);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null
                            }, await t.dispatch("setPagination", o), localStorage.setItem("statuses-pagination", JSON.stringify(t.state.pagination)), t.commit("SET_ALL", r.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async loadNextStatuses(t) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/browser_profiles/statuses?";
                            t.state.pagination && t.state.pagination.currentPage && (e += `page=${t.state.pagination.currentPage + 1}&`), t.state.pagination && t.state.pagination.perPage && (e += `limit=${t.state.pagination.perPage}&`), t.state.pagination && t.state.pagination.query && (e += `query=${t.state.pagination.query}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== t.state.pagination && !e.endsWith("?") || (e += "page=1&limit=10");
                            var a, o = await this._vm.api.get(e);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: t.state.pagination && t.state.pagination.query ? t.state.pagination.query : null
                            }, t.dispatch("setPagination", a), t.commit("ADD_ALL", o.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.current_page, 10),
                            lastPage: parseInt(t.response.last_page, 10),
                            firstPageUrl: t.response.first_page_url,
                            nextPageUrl: t.response.next_page_url,
                            prevPageUrl: t.response.prev_page_url,
                            lastPageUrl: t.response.last_page_url,
                            links: t.response.links,
                            perPage: parseInt(t.response.per_page, 10),
                            total: parseInt(t.response.total, 10),
                            from: parseInt(t.response.from, 10),
                            to: parseInt(t.response.to, 10),
                            query: t.query
                        };
                        await e.commit("SET_PAGINATION", t)
                    }, async clearStatusForMainDialog(e) {
                        await e.commit("SET_STATUS_FOR_MAIN_DIALOG", {name: "", color: "blue"})
                    }, async clearSelected(e) {
                        e.commit("SET_SELECTED", [])
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async removeStatuses(e, t) {
                        await e.commit("REMOVE_STATUSES", t)
                    }, async setUserFieldForMainDialog(e, t) {
                        t = {id: t.id, name: void 0 === t.name ? "" : t.name, color: void 0 === t.color ? "blue" : t.color};
                        await e.commit("SET_STATUS_FOR_MAIN_DIALOG", t)
                    }, async setMainDialogMode(e, t) {
                        await e.commit("SET_MAIN_DIALOG_MODE", t)
                    }, async replaceStatus(e, t) {
                        await e.commit("REPLACE_STATUS", t)
                    }
                }
            }, k = {
                namespaced: !0,
                state: {
                    userFields: {
                        all: [],
                        selected: [],
                        forMainDialog: {name: "", type: "text", mainWebsite: ["all"], content: {items: []}}
                    },
                    pagination: {},
                    dialogs: {mainDialog: !1, delete: !1},
                    loading: {mainTable: !1},
                    mainDialogMode: "create"
                },
                getters: {
                    ...y,
                    getField: a.a,
                    userFields: e => e.userFields,
                    dialogs: e => e.dialogs,
                    mainDialogMode: e => e.mainDialogMode,
                    loading: e => e.loading,
                    pagination: e => e.pagination
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.userFields.all = t
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_USER_FIELD_FOR_MAIN_DIALOG: (e, t) => {
                        e.userFields.forMainDialog = t
                    }, SET_SELECTED: (e, t) => {
                        e.userFields.selected = t
                    }, SET_MAIN_DIALOG_MODE: (e, t) => {
                        e.mainDialogMode = t
                    }, REMOVE_USER_FIELDS: (e, t) => {
                        e.userFields.all = e.userFields.all.filter(e => !t.includes(parseInt(e.id, 10)))
                    }, REPLACE_USERFIELD: (e, t) => {
                        var a = e.userFields.all.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)),
                            a = (-1 < a && e.userFields.all.splice(a, 1, t), e.userFields.selected.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10)));
                        -1 < a && e.userFields.selected.splice(a, 1, t)
                    }
                },
                actions: {
                    ...g, async loadUserFields(e, t = null) {
                        await e.commit("SET_LOADING", {key: "mainTable", value: !0});
                        200 === (t = t && t.page && t.itemsPerPage ? await this._vm.api.get(`/browser_profiles/user_fields?page=${t.page}&limit=` + t.itemsPerPage) : await this._vm.api.get("/browser_profiles/user_fields?page=1&limit=10")).status && (e.dispatch("setPagination", t.data), e.commit("SET_ALL", t.data.data)), await e.commit("SET_LOADING", {
                            key: "mainTable",
                            value: !1
                        })
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.current_page, 10),
                            lastPage: parseInt(t.last_page, 10),
                            firstPageUrl: t.first_page_url,
                            nextPageUrl: t.next_page_url,
                            prevPageUrl: t.prev_page_url,
                            lastPageUrl: t.last_page_url,
                            links: t.links,
                            perPage: parseInt(t.per_page, 10),
                            total: parseInt(t.total, 10),
                            from: parseInt(t.from, 10),
                            to: parseInt(t.to, 10)
                        };
                        await e.commit("SET_PAGINATION", t)
                    }, async clearUserFieldForMainDialog(e) {
                        await e.commit("SET_USER_FIELD_FOR_MAIN_DIALOG", {
                            name: "",
                            type: "text",
                            mainWebsite: ["all"],
                            content: {items: []}
                        })
                    }, async clearSelected(e) {
                        e.commit("SET_SELECTED", [])
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async removeUserFields(e, t) {
                        await e.commit("REMOVE_USER_FIELDS", t)
                    }, async setUserFieldForMainDialog(e, t) {
                        t = {
                            id: t.id,
                            name: void 0 === t.name ? "" : t.name,
                            type: void 0 === t.type ? "text" : t.type,
                            mainWebsite: void 0 === t.mainWebsite ? ["all"] : t.mainWebsite.concat([]),
                            content: void 0 === t.content ? {items: []} : {...t.content}
                        };
                        await e.commit("SET_USER_FIELD_FOR_MAIN_DIALOG", t)
                    }, async setMainDialogMode(e, t) {
                        await e.commit("SET_MAIN_DIALOG_MODE", t)
                    }, async replaceUserField(e, t) {
                        await e.commit("REPLACE_USERFIELD", t)
                    }
                }
            }, b = {
                namespaced: !0,
                state: {
                    users: {all: [], forEdit: {}},
                    dialogs: {create: !1, delete: !1, edit: !1},
                    loading: {mainTable: !1},
                    pagination: {},
                    filters: {user: ""},
                    allUsersForDialog: []
                },
                getters: {
                    ...y,
                    getField: a.a,
                    users: e => e.users,
                    filters: e => e.filters,
                    loading: e => e.loading,
                    pagination: e => e.pagination,
                    allUsersForDialog: e => e.allUsersForDialog
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.users.all = t
                    }, ADD_ALL: (e, t) => {
                        e.users.all = e.users.all.concat(t)
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_FILTER: (e, t) => {
                        e.filters[t.filter] = t.data
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_USER_FOR_EDIT: (e, t) => {
                        e.users.forEdit = t
                    }, REPLACE_USER: (e, t) => {
                        var a = e.users.all.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10));
                        -1 < a && e.users.all.splice(a, 1, t)
                    }, REMOVE_USERS: (e, t) => {
                        e.users.all = e.users.all.filter(e => !t.includes(parseInt(e.id, 10)))
                    }, SET_ALL_USERS_FOR_DIALOG: (e, t) => {
                        e.allUsersForDialog = e.allUsersForDialog.concat(t)
                    }, CLEAR_ALL_USERS_FOR_DIALOG: e => {
                        e.allUsersForDialog = []
                    }
                },
                actions: {
                    ...g, async loadAllUsers(e) {
                        try {
                            var t = await this._vm.apiv2.get("/team/users?page=1&limit=50");
                            if (200 === t.status && t.data.data && Array.isArray(t.data.data)) {
                                var a = {response: t.data};
                                for (await e.dispatch("setPagination", a), await e.commit("SET_ALL", t.data.data); e.state.pagination.currentPage < e.state.pagination.lastPage;) await e.dispatch("loadNextUsers")
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadUsers(t, a = null) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/team/users?";
                            a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), a && a.query && (e += `query=${encodeURIComponent(a.query)}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== a && !e.endsWith("?") || (e += "page=1&limit=50");
                            var o, r = await this._vm.apiv2.get(e);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null
                            }, await t.dispatch("setPagination", o), localStorage.setItem("users-pagination", JSON.stringify(t.state.pagination)), t.commit("SET_ALL", r.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async loadNextUsers(t) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/team/users?";
                            t.state.pagination && t.state.pagination.currentPage && (e += `page=${t.state.pagination.currentPage + 1}&`), t.state.pagination && t.state.pagination.perPage && (e += `limit=${t.state.pagination.perPage}&`), t.state.pagination && t.state.pagination.query && (e += `query=${t.state.pagination.query}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== t.state.pagination && !e.endsWith("?") || (e += "page=1&limit=50");
                            var a, o = await this._vm.apiv2.get(e);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: t.state.pagination && t.state.pagination.query ? t.state.pagination.query : null
                            }, t.dispatch("setPagination", a), t.commit("ADD_ALL", o.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.meta.current_page, 10),
                            lastPage: parseInt(t.response.meta.last_page, 10),
                            firstPageUrl: t.response.links.first,
                            nextPageUrl: t.response.links.next,
                            prevPageUrl: t.response.links.prev,
                            lastPageUrl: t.response.links.last,
                            links: t.response.links,
                            perPage: parseInt(t.response.meta.per_page, 10),
                            total: parseInt(t.response.meta.total, 10),
                            from: parseInt(t.response.meta.from, 10),
                            to: parseInt(t.response.meta.to, 10),
                            query: t.query
                        };
                        await e.commit("SET_PAGINATION", t)
                    }, async clearAll(e) {
                        await e.commit("SET_ALL", [])
                    }, async setUserForEdit(e, t) {
                        t.password = null, void 0 === t.displayName && (t.displayName = null), void 0 === t.teamleads && (t.teamleads = null), await e.commit("SET_USER_FOR_EDIT", t)
                    }, async replaceUser(e, t) {
                        await e.commit("REPLACE_USER", t)
                    }, async removeUsers(e, t) {
                        await e.commit("REMOVE_USERS", t)
                    }, async loadAllUsersForDialog(e, t = 1) {
                        try {
                            1 === parseInt(t) && await e.commit("CLEAR_ALL_USERS_FOR_DIALOG");
                            var a = await this._vm.apiv2.get(`/team/users?page=${t}&limit=50`);
                            if (200 === a.status && a.data.data && Array.isArray(a.data.data)) {
                                const t = a.data.meta;
                                await e.commit("SET_ALL_USERS_FOR_DIALOG", a.data.data), parseInt(t.current_page, 10) < parseInt(t.last_page, 10) && await e.dispatch("loadAllUsersForDialog", parseInt(t.current_page, 10) + 1)
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
            }, ie = {
                namespaced: !0,
                state: {health: {}, oldUserAgents: {}},
                getters: {...y, getField: a.a, health: e => e.health, oldUserAgents: e => e.oldUserAgents},
                mutations: {
                    ...u, updateField: a.c, SET_HEALTH: (e, t) => {
                        e.health = t
                    }, SET_OLD_USER_AGENTS: (e, t) => {
                        e.oldUserAgents = t
                    }
                },
                actions: {
                    ...g, async setHealth({commit: e}, t) {
                        e("SET_HEALTH", t)
                    }, async setOldUserAgents({commit: e}, t) {
                        e("SET_OLD_USER_AGENTS", t)
                    }
                }
            }, h = {
                namespaced: !0,
                state: {
                    bookmarks: {all: [], selected: [], bookmarkForEdit: {}},
                    pagination: {},
                    dialogs: {create: !1, delete: !1, edit: !1},
                    loading: {mainTable: !1}
                },
                getters: {
                    ...y,
                    getField: a.a,
                    bookmarks: e => e.bookmarks,
                    pagination: e => e.pagination,
                    loading: e => e.loading
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.bookmarks.all = t
                    }, ADD_ALL: (e, t) => {
                        e.bookmarks.all = e.bookmarks.all.concat(t)
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_SELECTED: (e, t) => {
                        e.bookmarks.selected = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_BOOKMARK_FOR_EDIT: (e, t) => {
                        e.bookmarks.bookmarkForEdit = t
                    }
                },
                actions: {
                    ...g, async loadAllBookmarks(e) {
                        try {
                            var t = await this._vm.apiv2.get("/bookmarks?page=1&limit=50");
                            if (200 === t.status && t.data.data && Array.isArray(t.data.data)) {
                                var a = {response: t.data};
                                for (await e.dispatch("setPagination", a), await e.commit("SET_ALL", t.data.data); e.state.pagination.currentPage < e.state.pagination.lastPage;) await e.dispatch("loadNextBookmarks")
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadBookmarks(t, a = null) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/bookmarks?";
                            a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), a && a.query && (e += `query=${encodeURIComponent(a.query)}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== a && !e.endsWith("?") || (e += "page=1&limit=50");
                            var o, r = await this._vm.apiv2.get(e);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null
                            }, await t.dispatch("setPagination", o), localStorage.setItem("bookmarks-pagination", JSON.stringify(t.state.pagination)), t.commit("SET_ALL", r.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async loadNextBookmarks(t) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/bookmarks?";
                            t.state.pagination && t.state.pagination.currentPage && (e += `page=${t.state.pagination.currentPage + 1}&`), t.state.pagination && t.state.pagination.perPage && (e += `limit=${t.state.pagination.perPage}&`), t.state.pagination && t.state.pagination.query && (e += `query=${t.state.pagination.query}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== t.state.pagination && !e.endsWith("?") || (e += "page=1&limit=50");
                            var a, o = await this._vm.apiv2.get(e);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: t.state.pagination && t.state.pagination.query ? t.state.pagination.query : null
                            }, t.dispatch("setPagination", a), t.commit("ADD_ALL", o.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.meta.current_page, 10),
                            lastPage: parseInt(t.response.meta.last_page, 10),
                            firstPageUrl: t.response.links.first,
                            nextPageUrl: t.response.links.next,
                            prevPageUrl: t.response.links.prev,
                            lastPageUrl: t.response.links.last,
                            links: t.response.links,
                            perPage: parseInt(t.response.meta.per_page, 10),
                            total: parseInt(t.response.meta.total, 10),
                            from: parseInt(t.response.meta.from, 10),
                            to: parseInt(t.response.meta.to, 10),
                            query: t.query
                        };
                        console.log("pagination", t), await e.commit("SET_PAGINATION", t)
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async clearSelected(e) {
                        await e.commit("SET_SELECTED", [])
                    }, async deleteBookmarks(e, t) {
                        t = await this._vm.apiv2.delete("/bookmarks", {data: t});
                        return 200 === t.status && t.data && !0 === t.data.success && (e.commit("SET_SELECTED", []), e.dispatch("main/alert", {
                            color: "success",
                            message: O.t("common.deleted")
                        }, {root: !0})), t
                    }, async setBookmarkForEdit(e, t) {
                        await e.commit("SET_BOOKMARK_FOR_EDIT", t)
                    }
                }
            }, ae = {
                namespaced: !0,
                state: {
                    extensions: {all: [], selected: []},
                    pagination: {},
                    dialogs: {create: !1, delete: !1},
                    loading: {mainTable: !1}
                },
                getters: {
                    ...y,
                    getField: a.a,
                    extensions: e => e.extensions,
                    pagination: e => e.pagination,
                    loading: e => e.loading
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.extensions.all = t
                    }, ADD_ALL: (e, t) => {
                        e.extensions.all = e.extensions.all.concat(t)
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_SELECTED: (e, t) => {
                        e.extensions.selected = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }
                },
                actions: {
                    ...g, async loadAllExtensions(e) {
                        try {
                            var t = await this._vm.api.get("/extensions?page=1&limit=50");
                            if (200 === t.status && t.data.data && Array.isArray(t.data.data)) {
                                var a = {response: t.data};
                                for (await e.dispatch("setPagination", a), await e.commit("SET_ALL", t.data.data); e.state.pagination.currentPage < e.state.pagination.lastPage;) await e.dispatch("loadNextExtensions")
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadExtensions(t, a = null) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/extensions?";
                            a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), a && a.query && (e += `query=${encodeURIComponent(a.query)}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== a && !e.endsWith("?") || (e += "page=1&limit=50");
                            var o, r = await this._vm.api.get(e);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null
                            }, await t.dispatch("setPagination", o), localStorage.setItem("extensions-pagination", JSON.stringify(t.state.pagination)), t.commit("SET_ALL", r.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async loadNextExtensions(t) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/extensions?";
                            t.state.pagination && t.state.pagination.currentPage && (e += `page=${t.state.pagination.currentPage + 1}&`), t.state.pagination && t.state.pagination.perPage && (e += `limit=${t.state.pagination.perPage}&`), t.state.pagination && t.state.pagination.query && (e += `query=${t.state.pagination.query}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== t.state.pagination && !e.endsWith("?") || (e += "page=1&limit=50");
                            var a, o = await this._vm.api.get(e);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: t.state.pagination && t.state.pagination.query ? t.state.pagination.query : null
                            }, t.dispatch("setPagination", a), t.commit("ADD_ALL", o.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.current_page, 10),
                            lastPage: parseInt(t.response.last_page, 10),
                            firstPageUrl: t.response.first_page_url,
                            nextPageUrl: t.response.next_page_url,
                            prevPageUrl: t.response.prev_page_url,
                            lastPageUrl: t.response.last_page_url,
                            links: t.response.links,
                            perPage: parseInt(t.response.per_page, 10),
                            total: parseInt(t.response.total, 10),
                            from: parseInt(t.response.from, 10),
                            to: parseInt(t.response.to, 10),
                            query: t.query
                        };
                        await e.commit("SET_PAGINATION", t)
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async clearSelected(e) {
                        await e.commit("SET_SELECTED", [])
                    }, async deleteExtensions(e, t) {
                        t = await this._vm.api.delete("/extensions", {data: t});
                        return 200 === t.status && t.data && !0 === t.data.success && (await this._vm.localApi.patch("/extensions", {hashes: t.data.hashes}), e.commit("SET_SELECTED", []), e.dispatch("main/alert", {
                            color: "success",
                            message: O.t("common.deleted")
                        }, {root: !0})), t
                    }
                }
            }, f = {
                namespaced: !0,
                state: {browserProfile: {}, browserProfileTouched: !1, loading: {mainDialog: !1}},
                getters: {
                    getField: a.a,
                    browserProfile: e => e.browserProfile,
                    loading: e => e.loading,
                    browserProfileTouched: e => e.browserProfileTouched
                },
                mutations: {
                    updateField: a.c, TOUCH_MULTIPLE_IMPORT: (e, t) => {
                        e.browserProfileTouched = t
                    }, SET_EMPTY_BROWSER_PROFILE: (e, t) => {
                        e.browserProfile = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, PUSH_TO_NEW_SAVED_PROXIES: (e, t) => {
                        e.browserProfile.newSavedProxies.push(t), e.browserProfile.needToSetProxyId = !0
                    }
                },
                actions: {
                    async setLoading(e, t) {
                        e.commit("SET_LOADING", t)
                    }, async touchMultipleImport(e, t) {
                        e.commit("TOUCH_MULTIPLE_IMPORT", t)
                    }, async setEmptyBrowserProfile(e, t) {
                        e.commit("SET_EMPTY_BROWSER_PROFILE", t)
                    }, async addBrowserProfiles(e, t) {
                        const a = e.state.browserProfile, o = {
                            browserType: a.browserType,
                            args: [],
                            tags: a.tags,
                            statusId: a.status ? a.status.id : 0,
                            platform: a.platform,
                            mainWebsite: "none" === a.mainWebsite ? "" : a.mainWebsite,
                            webrtc: {mode: a.webrtc.mode, ipAddress: a.webrtc.ipAddress},
                            canvas: {mode: a.canvas.mode},
                            webgl: {mode: a.webgl.mode},
                            webgpu: {mode: a.webgpu.mode},
                            webglInfo: {mode: a.webglInfo.mode, vendor: a.webglInfo.vendor, renderer: a.webglInfo.renderer},
                            clientRect: {mode: a.clientRect.mode},
                            timezone: {mode: a.timezone.mode, value: a.timezone.value},
                            locale: {mode: a.locale.mode, value: a.locale.value},
                            geolocation: {
                                mode: a.geolocation.mode,
                                latitude: a.geolocation.latitude,
                                longitude: a.geolocation.longitude
                            },
                            cpu: {mode: a.cpu.mode, value: a.cpu.value},
                            memory: {mode: a.memory.mode, value: a.memory.value},
                            macAddress: {mode: a.macAddress.mode, value: a.macAddress.value},
                            deviceName: {mode: a.deviceName.mode, value: a.deviceName.value},
                            screen: {mode: a.screen.mode, resolution: a.screen.resolution},
                            audio: {mode: a.audio.mode},
                            mediaDevices: {
                                mode: a.mediaDevices.mode,
                                audioInputs: a.mediaDevices.audioInputs,
                                videoInputs: a.mediaDevices.videoInputs,
                                audioOutputs: a.mediaDevices.audioOutputs
                            },
                            ports: {mode: a.ports.mode, blacklist: a.ports.blacklist},
                            doNotTrack: a.doNotTrack
                        };
                        "fromFile" !== a.useragent.mode && (o.useragent = {
                            mode: a.useragent.mode,
                            value: a.useragent.value
                        }), 1 === a.proxyMode && (o.proxy = a.proxyNew, "" === o.proxy.name && (a.proxyInput.includes("://") ? o.proxy.name = a.proxyInput : o.proxy.name = a.proxyNew.type + "://" + a.proxyInput), "" === o.proxy.changeIpUrl && delete o.proxy.changeIpUrl, "" === o.proxy.login && delete o.proxy.login, "" === o.proxy.password) && delete o.proxy.password;
                        var r = await this._vm.api.post("/browser_profiles/mass", {common: o, items: t});
                        if (200 === r.status && r.data && Array.isArray(r.data.ids)) {
                            e.dispatch("main/alert", {
                                color: "success",
                                message: `${O.tc("browserProfiles.multipleImport.imported", r.data.ids.length)} ${r.data.ids.length} ` + O.tc("browserProfiles.multipleImport.profiles", r.data.ids.length)
                            }, {root: !0});
                            const t = e.rootState.main.subscription, o = {
                                site: "none" === a.mainWebsite ? "" : a.mainWebsite,
                                os: a.platform,
                                proxy: 3 === parseInt(a.proxyMode, 10) ? "from file" : 2 === parseInt(a.proxyMode, 10) ? "saved proxies" : 1 === parseInt(a.proxyMode, 10) ? "new proxy" : "no proxy",
                                useragent: a.useragent.mode,
                                webrtc: a.webrtc.mode,
                                canvas: a.canvas.mode,
                                webgl: a.webgl.mode,
                                timezone: a.timezone.mode,
                                language: a.locale.mode,
                                "copy profile": !1,
                                "mass import": !0,
                                "browser type": a.browserType,
                                "team profiles count": t && t.browserProfiles && t.browserProfiles.count ? t.browserProfiles.count : "not found"
                            };
                            e.dispatch("sendAmplitude", {event: "Profile Create", eventProperties: o, ids: r.data.ids})
                        }
                    }, async addBrowserProfile(e, t) {
                        const a = e.state.browserProfile, o = {
                            name: "" + t.name,
                            notes: t.notes,
                            useragent: t.useragent,
                            proxy: t.proxy,
                            browserType: a.browserType,
                            tags: a.tags,
                            statusId: a.status ? a.status.id : 0,
                            platform: a.platform,
                            mainWebsite: "none" === a.mainWebsite ? "" : a.mainWebsite,
                            webrtc: {mode: a.webrtc.mode, ipAddress: a.webrtc.ipAddress},
                            canvas: {mode: a.canvas.mode},
                            webgl: {mode: a.webgl.mode},
                            webgpu: "off" === a.webgpu.mode ? {mode: "off"} : "real" === a.webglInfo.mode ? {mode: "empty"} : {mode: "manual"},
                            webglInfo: {mode: a.webglInfo.mode, vendor: a.webglInfo.vendor, renderer: a.webglInfo.renderer},
                            clientRect: {mode: a.clientRect.mode},
                            timezone: {mode: a.timezone.mode, value: a.timezone.value},
                            locale: {mode: a.locale.mode, value: a.locale.value},
                            geolocation: {
                                mode: a.geolocation.mode,
                                latitude: a.geolocation.latitude,
                                longitude: a.geolocation.longitude
                            },
                            cpu: {mode: a.cpu.mode, value: a.cpu.value},
                            memory: {mode: a.memory.mode, value: a.memory.value},
                            macAddress: {mode: a.macAddress.mode, value: a.macAddress.value},
                            deviceName: {mode: a.deviceName.mode, value: a.deviceName.value},
                            screen: {mode: a.screen.mode, resolution: a.screen.resolution},
                            audio: {mode: a.audio.mode},
                            mediaDevices: {
                                mode: a.mediaDevices.mode,
                                audioInputs: a.mediaDevices.audioInputs,
                                videoInputs: a.mediaDevices.videoInputs,
                                audioOutputs: a.mediaDevices.audioOutputs
                            },
                            ports: {mode: a.ports.mode, blacklist: a.ports.blacklist},
                            doNotTrack: a.doNotTrack,
                            appCodeName: "",
                            platformName: "",
                            connectionDownlink: 0,
                            connectionEffectiveType: "",
                            connectionRtt: 0,
                            connectionSaveData: 0,
                            cpuArchitecture: "",
                            osVersion: "",
                            vendorSub: "",
                            productSub: "",
                            vendor: "",
                            product: "",
                            platformVersion: a.platformVersion,
                            uaFullVersion: a.uaFullVersion,
                            login: a.login,
                            password: a.password,
                            args: []
                        };
                        if ("fromFile" !== a.useragent.mode && ("random" === a.useragent.mode ? o.useragent = {
                            mode: "manual",
                            value: t.randomUseragent
                        } : o.useragent = {
                            mode: a.useragent.mode,
                            value: a.useragent.value
                        }), "random" === a.webglInfo.mode && (o.webglInfo = {
                            mode: "manual",
                            vendor: t.randomWebglInfoVendor,
                            renderer: t.randomWebglInfoRenderer
                        }, o.webgl2Maximum = t.randomWebgl2Maximum), "random" === a.cpu.mode && (o.cpu = {
                            mode: "manual",
                            value: t.randomCpu
                        }), "random" === a.memory.mode && (o.memory = {
                            mode: "manual",
                            value: t.randomMemory
                        }), "random" === a.screen.mode && (o.screen = {
                            mode: "manual",
                            resolution: t.randomResolution
                        }), "random" === a.mediaDevices.mode && (o.mediaDevices = {
                            mode: "manual",
                            audioInputs: t.randomAudioInputs,
                            videoInputs: t.randomVideoInputs,
                            audioOutputs: t.randomAudioOutputs
                        }), 1 === a.proxyMode) if (o.proxy = this._vm.$_.cloneDeep(a.proxyNew), "" === o.proxy.name && (a.proxyInput.includes("://") ? o.proxy.name = a.proxyInput : o.proxy.name = a.proxyNew.type + "://" + a.proxyInput), "" === o.proxy.changeIpUrl && delete o.proxy.changeIpUrl, "" === o.proxy.login && delete o.proxy.login, "" === o.proxy.password && delete o.proxy.password, this._vm.$_.isEmpty(a.newSavedProxies)) e.dispatch("pushToNewSavedProxies", this._vm.$_.cloneDeep(o.proxy)); else try {
                            for (const e of a.newSavedProxies) {
                                var r, s, i, n, l, d;
                                e.host === (null == (r = o.proxy) ? void 0 : r.host) && e.port === (null == (s = o.proxy) ? void 0 : s.port) && e.type === (null == (i = o.proxy) ? void 0 : i.type) && e.login === (null == (n = o.proxy) ? void 0 : n.login) && e.password === (null == (l = o.proxy) ? void 0 : l.password) && e.changeIpUrl === (null == (d = o.proxy) ? void 0 : d.changeIpUrl) && (o.proxy = {id: e.id})
                            }
                            void 0 === o.proxy.id && e.dispatch("pushToNewSavedProxies", this._vm.$_.cloneDeep(o.proxy))
                        } catch (e) {
                        }
                        var c = await this._vm.api.post("/browser_profiles", o);
                        if (200 === c.status && c.data && c.data.browserProfileId) {
                            const o = e.rootState.main.subscription,
                                r = (t.cookies && ("free" !== o.plan || o.browserProfiles.additionalProfiles || o.users.additionalUsers ? e.dispatch("sendCookies", {
                                    id: c.data.browserProfileId,
                                    cookies: t.cookies
                                }) : this._vm.localApi.post("/cookies/import", {
                                    cookies: t.cookies,
                                    profileId: c.data.browserProfileId,
                                    transfer: 0
                                })), {
                                    site: "none" === a.mainWebsite ? "" : a.mainWebsite,
                                    os: a.platform,
                                    proxy: 3 === parseInt(a.proxyMode, 10) ? "from file" : 2 === parseInt(a.proxyMode, 10) ? "saved proxies" : 1 === parseInt(a.proxyMode, 10) ? "new proxy" : "no proxy",
                                    useragent: a.useragent.mode,
                                    webrtc: a.webrtc.mode,
                                    canvas: a.canvas.mode,
                                    webgl: a.webgl.mode,
                                    timezone: a.timezone.mode,
                                    language: a.locale.mode,
                                    "copy profile": !1,
                                    "mass import": !0,
                                    "browser type": a.browserType,
                                    "team profiles count": o && o.browserProfiles && o.browserProfiles.count ? o.browserProfiles.count : "not found",
                                    cookie: !!t.cookies
                                });
                            if ("free" === o.plan && !o.browserProfiles.additionalProfiles && !o.users.additionalUsers) {
                                const e = localStorage.getItem("profileCreatedEventLastSent");
                                if (e && m()(e).diff(new Date, "hours") < 24) return;
                                localStorage.setItem("profileCreatedEventLastSent", m()(new Date))
                            }
                            e.dispatch("sendAmplitude", {event: "Profile Create", eventProperties: r})
                        }
                        return c.data && c.data.browserProfileId ? c.data.browserProfileId : null
                    }, async pushToNewSavedProxies({commit: e}, t) {
                        await e("PUSH_TO_NEW_SAVED_PROXIES", t)
                    }, async sendAmplitude(e, t) {
                        await this._vm.$amplitude.getInstance().logEvent(t.event, t.eventProperties)
                    }, async sendCookies(e, t) {
                        await this._vm.syncApi.post("?actionType=importCookies&browserProfileId=" + t.id, {cookies: t.cookies})
                    }
                }
            }, T = {
                namespaced: !0,
                state: {
                    homepages: {all: [], selected: [], homepageForEdit: {}},
                    dialogs: {create: !1, delete: !1, edit: !1},
                    loading: {mainTable: !1}
                },
                getters: {
                    ...y,
                    getField: a.a,
                    homepages: e => e.homepages,
                    pagination: e => e.pagination,
                    loading: e => e.loading
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.homepages.all = t
                    }, CONCAT_ALL: (e, t) => {
                        e.homepages.all = e.homepages.all.concat(t)
                    }, SET_SELECTED: (e, t) => {
                        e.homepages.selected = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_HOME_PAGE_FOR_EDIT: (e, t) => {
                        e.homepages.homepageForEdit = t
                    }, REPLACE_SELECTED_HOMEPAGES: o => {
                        o.homepages.selected.length && o.homepages.selected.forEach((t, e) => {
                            console.log("asdas");
                            var a = o.homepages.all.findIndex(e => parseInt(e.id, 10) === parseInt(t.id, 10));
                            -1 < a ? o.homepages.selected.splice(e, 1, o.homepages.all[a]) : o.homepages.selected = o.homepages.selected.filter(e => parseInt(e.id, 10) !== parseInt(t.id, 10))
                        })
                    }, SELECT_HOMEPAGE: (e, t) => {
                        e.homepages.selected.push(t)
                    }, DESELECT_HOMEPAGE: (e, t) => {
                        e.homepages.selected = e.homepages.selected.filter(e => parseInt(e.id, 10) !== parseInt(t.id, 10))
                    }
                },
                actions: {
                    ...g, async loadAllHomepages({commit: t}) {
                        try {
                            var a, o;
                            await t("SET_ALL", []), await t("SET_LOADING", {key: "mainTable", value: !0});
                            let e = await this._vm.apiv2.get("/homepages");
                            if (200 === e.status && null != (a = e.data) && a.data) for (await t("CONCAT_ALL", e.data.data); e.data.current_page < e.data.last_page;) 200 === (e = await this._vm.apiv2.get("/homepages?page=" + (e.data.current_page + 1))).status && null != (o = e.data) && o.data && await t("CONCAT_ALL", e.data.data)
                        } catch (e) {
                            console.log(e)
                        } finally {
                            await t("SET_LOADING", {key: "mainTable", value: !1}), await t("REPLACE_SELECTED_HOMEPAGES")
                        }
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async clearSelected(e) {
                        await e.commit("SET_SELECTED", [])
                    }, async setHomepageForEdit(e, t) {
                        await e.commit("SET_HOME_PAGE_FOR_EDIT", t)
                    }, async selectHomepage({commit: e}, t) {
                        await e("SELECT_HOMEPAGE", t)
                    }, async deselectHomepage({commit: e}, t) {
                        await e("DESELECT_HOMEPAGE", t)
                    }
                }
            }, A = {
                namespaced: !0,
                state: {
                    automationScenarios: {all: [], selected: [], bookmarkForEdit: {}},
                    pagination: {},
                    dialogs: {create: !1, delete: !1, edit: !1},
                    loading: {mainTable: !1}
                },
                getters: {
                    ...y,
                    getField: a.a,
                    automationScenarios: e => e.automationScenarios,
                    pagination: e => e.pagination,
                    loading: e => e.loading
                },
                mutations: {
                    ...u, updateField: a.c, SET_ALL: (e, t) => {
                        e.automationScenarios.all = t
                    }, ADD_ALL: (e, t) => {
                        e.automationScenarios.all = e.automationScenarios.all.concat(t)
                    }, SET_PAGINATION: (e, t) => {
                        e.pagination = t
                    }, SET_SELECTED: (e, t) => {
                        e.automationScenarios.selected = t
                    }, SET_LOADING: (e, t) => {
                        e.loading[t.key] = t.value
                    }, SET_BOOKMARK_FOR_EDIT: (e, t) => {
                        e.automationScenarios.bookmarkForEdit = t
                    }
                },
                actions: {
                    ...g, async loadAllScenarios(e, t) {
                        try {
                            var a = null != t && t.query ? await this._vm.api.get("/scripts?page=1&limit=50&query=" + t.query) : await this._vm.api.get("/scripts?page=1&limit=50");
                            if (200 === a.status && a.data.data && Array.isArray(a.data.data)) {
                                const t = {response: a.data};
                                for (await e.dispatch("setPagination", t), await e.commit("SET_ALL", a.data.data); e.state.pagination.currentPage < e.state.pagination.lastPage;) await e.dispatch("loadNextBookmarks")
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }, async loadScenarios(t, a = null) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/scripts?";
                            a && a.page && (e += `page=${a.page}&`), a && a.itemsPerPage && (e += `limit=${a.itemsPerPage}&`), a && a.query && (e += `query=${encodeURIComponent(a.query)}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== a && !e.endsWith("?") || (e += "page=1&limit=50");
                            var o, r = await this._vm.api.get(e);
                            200 === r.status && r.data.data && Array.isArray(r.data.data) && (o = {
                                response: r.data,
                                query: a && a.query ? a.query : null
                            }, await t.dispatch("setPagination", o), localStorage.setItem("automationScenarios-pagination", JSON.stringify(t.state.pagination)), t.commit("SET_ALL", r.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async loadNextBookmarks(t) {
                        await t.commit("SET_LOADING", {key: "mainTable", value: !0});
                        try {
                            let e = "/scripts?";
                            t.state.pagination && t.state.pagination.currentPage && (e += `page=${t.state.pagination.currentPage + 1}&`), t.state.pagination && t.state.pagination.perPage && (e += `limit=${t.state.pagination.perPage}&`), t.state.pagination && t.state.pagination.query && (e += `query=${t.state.pagination.query}&`), e.endsWith("&") && (e = e.slice(0, e.length - 1)), null !== t.state.pagination && !e.endsWith("?") || (e += "page=1&limit=50");
                            var a, o = await this._vm.api.get(e);
                            200 === o.status && o.data.data && Array.isArray(o.data.data) && (a = {
                                response: o.data,
                                query: t.state.pagination && t.state.pagination.query ? t.state.pagination.query : null
                            }, t.dispatch("setPagination", a), t.commit("ADD_ALL", o.data.data))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await t.commit("SET_LOADING", {key: "mainTable", value: !1})
                        }
                    }, async setPagination(e, t) {
                        t = {
                            currentPage: parseInt(t.response.current_page, 10),
                            lastPage: parseInt(t.response.last_page, 10),
                            firstPageUrl: t.response.first_page_url,
                            nextPageUrl: t.response.next_page_url,
                            prevPageUrl: t.response.prev_page_url,
                            lastPageUrl: t.response.last_page_url,
                            links: t.response.links,
                            perPage: parseInt(t.response.per_page, 10),
                            total: parseInt(t.response.total, 10),
                            from: parseInt(t.response.from, 10),
                            to: parseInt(t.response.to, 10),
                            query: t.query
                        };
                        await e.commit("SET_PAGINATION", t)
                    }, async clearAll(e) {
                        e.commit("SET_ALL", [])
                    }, async clearSelected(e) {
                        await e.commit("SET_SELECTED", [])
                    }, async deleteBookmarks(e, t) {
                        t = await this._vm.api.delete("/scripts", {data: t});
                        return 200 === t.status && t.data && !0 === t.data.success && (e.commit("SET_SELECTED", []), e.dispatch("main/alert", {
                            color: "success",
                            message: O.t("common.deleted")
                        }, {root: !0})), t
                    }, async setBookmarkForEdit(e, t) {
                        await e.commit("SET_BOOKMARK_FOR_EDIT", t)
                    }
                }
            }, o = {
                namespaced: !0,
                state: {
                    dialogs: {freeTariff: !1, freeTariffExtraBrowserProfiles: !1},
                    freeTariffExtraBrowserProfiles: !1,
                    freePeriod: !1
                },
                getters: {
                    ...y,
                    getField: a.a,
                    freeTariffExtraBrowserProfiles: e => e.freeTariffExtraBrowserProfiles,
                    freePeriod: e => e.freePeriod
                },
                mutations: {
                    ...u, updateField: a.c, SET_FREE_TARIFF_EXTRA_BROWSER_PROFILES: (e, t) => {
                        e.freeTariffExtraBrowserProfiles = t
                    }, SET_FREE_PERIOD: (e, t) => {
                        e.freePeriod = t
                    }
                },
                actions: {
                    ...g, setFreeTariffExtraBrowserProfiles({commit: e}, t) {
                        e("SET_FREE_TARIFF_EXTRA_BROWSER_PROFILES", t)
                    }, setFreePeriod({commit: e}, t) {
                        e("SET_FREE_PERIOD", t)
                    }
                }
            }, y = {
                namespaced: !0,
                state: {
                    dialogs: {individualCondition: !1},
                    alert: null,
                    selectedDiscount: null,
                    isRussianCard: !1,
                    detectedCountryCode: "",
                    balance: {},
                    initialPaymentInfo: {
                        plan: "",
                        profilesCount: null,
                        additionalProfiles: null,
                        additionalUsers: null,
                        prolongMonths: 0,
                        discount: 0,
                        paymentMethod: "unlimint",
                        countryCode: null,
                        promoCode: null
                    },
                    paymentInfo: {
                        plan: "",
                        profilesCount: null,
                        additionalProfiles: null,
                        additionalUsers: null,
                        prolongMonths: 0,
                        discount: 0,
                        paymentMethod: "unlimint",
                        countryCode: null,
                        promoCode: null
                    },
                    companyInfo: {
                        companyName: "",
                        countryCode: "",
                        country: "",
                        postalCode: "",
                        address: "",
                        addressDetails: "",
                        city: "",
                        stateRegion: "",
                        vatId: "",
                        purchaseOrder: ""
                    },
                    paymentSummary: {
                        planBasePrice: 0,
                        additionalUsersPrice: 0,
                        additionalProfilesPrice: 0,
                        paymentFee: 0,
                        paymentFeePercentage: 0,
                        discount: 0,
                        discountPercentage: 0,
                        countryFee: 0,
                        countryFeePercentage: 0,
                        total: 0,
                        totalPrice: 0,
                        availableDays: 0,
                        difference: 0
                    },
                    paymentSummaryLoading: !1,
                    promoCodeState: {status: "", discount: 0, errorText: ""},
                    invoice: {
                        id: null,
                        merchant_id: null,
                        sum: 0,
                        teamId: null,
                        description: "",
                        coin: null,
                        days: null,
                        provider: null,
                        currency: "RUR",
                        opt_client_id: null,
                        signature: null,
                        paymentUrl: null
                    }
                },
                getters: {
                    ...y,
                    getField: a.a,
                    isRussianCard: e => e.isRussianCard,
                    detectedCountryCode: e => e.detectedCountryCode,
                    selectedDiscount: e => e.selectedDiscount,
                    balance: e => e.balance,
                    paymentInfo: e => e.paymentInfo,
                    initialPaymentInfo: e => e.initialPaymentInfo,
                    companyInfo: e => e.companyInfo,
                    paymentSummary: e => e.paymentSummary,
                    paymentSummaryLoading: e => e.paymentSummaryLoading,
                    promoCodeState: e => e.promoCodeState,
                    invoice: e => e.invoice,
                    alert: e => e.alert
                },
                mutations: {
                    ...u, updateField: a.c, SET_PROLONG_MONTHS: (e, t) => {
                        e.paymentInfo.prolongMonths = t
                    }, SET_ADDITIONAL_USERS: (e, t) => {
                        e.paymentInfo.additionalUsers = t
                    }, SET_ADDITIONAL_PROFILES: (e, t) => {
                        e.paymentInfo.additionalProfiles = t
                    }, SET_SELECTED_DISCOUNT: (e, t) => {
                        e.selectedDiscount = t
                    }, SET_PAYMENT_SUMMARY: (e, t) => {
                        e.paymentSummary = Object.assign({}, t)
                    }, SET_PAYMENT_SUMMARY_LOADING: (e, t) => {
                        e.paymentSummaryLoading = t
                    }, SET_BALANCE: (e, t) => {
                        e.balance = t
                    }, UPDATE_PAYMENT_INFO: (e, t) => {
                        e.paymentInfo = Object.assign({}, e.paymentInfo, t)
                    }, SET_INITIAL_PAYMENT_INFO: (e, t) => {
                        e.initialPaymentInfo = Object.assign({}, e.paymentInfo, t)
                    }, SET_PROMO_CODE: (e, t) => {
                        e.paymentInfo.promoCode = t
                    }, SET_PROMO_CODE_STATE: (e, t) => {
                        e.promoCodeState = t
                    }, SET_PAYMENT_METHOD: (e, t) => {
                        e.paymentInfo.paymentMethod = t.paymentMethod
                    }, UPDATE_INVOICE: (e, t) => {
                        e.invoice = Object.assign({}, e.invoice, t)
                    }, SET_IS_RUSSIAN_CARD: (e, t) => {
                        e.isRussianCard = t
                    }, SET_DETECTED_COUNTRY_CODE: (e, t) => {
                        e.detectedCountryCode = t
                    }, SET_ALERT: (e, t) => {
                        e.alert = t
                    }
                },
                actions: {
                    ...g, async setProlongMonths({commit: e}, t) {
                        e("SET_PROLONG_MONTHS", t)
                    }, async setAdditionalUsers({commit: e}, t) {
                        e("SET_ADDITIONAL_USERS", t)
                    }, async setAdditionalProfiles({commit: e}, t) {
                        e("SET_ADDITIONAL_PROFILES", t)
                    }, setSelectedDiscount({commit: e}, t) {
                        e("SET_SELECTED_DISCOUNT", t)
                    }, setPaymentSummaryLoading({commit: e}, t) {
                        e("SET_PAYMENT_SUMMARY_LOADING", t)
                    }, async setPaymentSummary({commit: e}, t) {
                        e("SET_PAYMENT_SUMMARY", t)
                    }, async setBalance({commit: e}, t) {
                        e("SET_BALANCE", t)
                    }, async setInitialPaymentInfo({commit: e}, t) {
                        e("SET_INITIAL_PAYMENT_INFO", t)
                    }, async updatePaymentInfo({commit: e}, t) {
                        e("UPDATE_PAYMENT_INFO", t)
                    }, setPromoCode({commit: e}, t) {
                        e("SET_PROMO_CODE", t)
                    }, setPromoCodeState({commit: e}, t) {
                        e("SET_PROMO_CODE_STATE", t)
                    }, setPaymentMethod({commit: e}, t) {
                        e("SET_PAYMENT_METHOD", {paymentMethod: t})
                    }, updateInvoice({commit: e}, t) {
                        e("UPDATE_INVOICE", t)
                    }, setIsRussianCard({commit: e}, t) {
                        e("SET_IS_RUSSIAN_CARD", t)
                    }, setDetectedCountryCode({commit: e}, t) {
                        e("SET_DETECTED_COUNTRY_CODE", t)
                    }, setAlert({commit: e}, t) {
                        e("SET_ALERT", t)
                    }, removeAlert({commit: e}) {
                        e("SET_ALERT", null)
                    }, removeInvoice({commit: e}) {
                        e("UPDATE_INVOICE", {
                            id: null,
                            merchant_id: null,
                            sum: 0,
                            teamId: null,
                            description: "",
                            coin: null,
                            days: null,
                            provider: null,
                            currency: "RUR",
                            opt_client_id: null,
                            signature: null,
                            paymentUrl: null
                        })
                    }
                }
            }, Pe = (s.a.use(t.a), new t.a.Store({
                modules: {
                    automation: A,
                    browserProfiles: D,
                    main: se,
                    proxy: oe,
                    settings: C,
                    browserProfilesStatuses: x,
                    userFields: k,
                    users: b,
                    bookmarks: h,
                    extensions: ae,
                    browserProfilesMultipleImport: f,
                    settingsHomepages: T,
                    health: ie,
                    experiments: o,
                    payment: y
                }
            })), u = (r("5363"), r("f309")), a = r("da5b"), g = r.n(a), t = r("2992"), A = r.n(t), D = {name: "BlastStar"},
            se = Object(n.a)(D, function () {
                var e = this._self._c;
                return e("svg", {
                    attrs: {
                        width: "20",
                        height: "21",
                        viewBox: "0 0 20 21",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M12.5419 4.4871C12.4387 4.43548 12.3871 4.34516 12.3871 4.21613C12.3871 4.0871 12.4387 3.99677 12.5419 3.94516L14.8645 2.97742L15.8323 0.654839C15.8839 0.551613 15.9742 0.5 16.1032 0.5C16.2323 0.5 16.3226 0.551613 16.3742 0.654839L17.3419 2.97742L19.6645 3.94516C19.7677 3.99677 19.8193 4.0871 19.8193 4.21613C19.8193 4.34516 19.7677 4.43548 19.6645 4.4871L17.3419 5.45484L16.3742 7.77742C16.3226 7.88064 16.2323 7.93225 16.1032 7.93225C15.9742 7.93225 15.8839 7.88064 15.8323 7.77742L14.8645 5.45484L12.5419 4.4871ZM19.6645 16.3323C19.7677 16.3839 19.8193 16.4742 19.8193 16.6032C19.8193 16.7323 19.7677 16.8226 19.6645 16.8742L17.3419 17.8419L16.3742 20.1645C16.3226 20.2677 16.2323 20.3193 16.1032 20.3193C15.9742 20.3193 15.8839 20.2677 15.8323 20.1645L14.8645 17.8419L12.5419 16.8742C12.4387 16.8226 12.3871 16.7323 12.3871 16.6032C12.3871 16.4742 12.4387 16.3839 12.5419 16.3323L14.8645 15.3645L15.8323 13.0419C15.8839 12.9387 15.9742 12.8871 16.1032 12.8871C16.2323 12.8871 16.3226 12.9387 16.3742 13.0419L17.3419 15.3645L19.6645 16.3323ZM14.5161 9.82903C14.7484 9.95806 14.8645 10.1516 14.8645 10.4097C14.8645 10.6677 14.7484 10.8484 14.5161 10.9516L10.1806 13.1193L7.97419 17.4935C7.87096 17.7258 7.69032 17.8419 7.43225 17.8419C7.17419 17.8419 6.99355 17.7258 6.89032 17.4935L4.68387 13.1193L0.348387 10.9516C0.116129 10.8484 0 10.6677 0 10.4097C0 10.1516 0.116129 9.95806 0.348387 9.82903L4.68387 7.66129L6.89032 3.2871C6.99355 3.08064 7.17419 2.97742 7.43225 2.97742C7.69032 2.97742 7.87096 3.08064 7.97419 3.2871L10.1806 7.66129L14.5161 9.82903Z",
                        fill: "#C8C8C8"
                    }
                })])
            }, [], !1, null, "298fd9bc", null).exports, R = {
                gray: Object.freeze({
                    900: "#19181A",
                    850: "#242126",
                    800: "#2E2832",
                    700: "#4A464D",
                    600: "#646166",
                    500: "#7C797F",
                    400: "#959199",
                    300: "#ADAAB1",
                    200: "#CECDD1",
                    100: "#DEDEE0",
                    50: "#EEEEF0",
                    40: "#F4F4F7",
                    20: "#F9F9FC",
                    white: "#FFFFFF"
                }),
                brand: Object.freeze({
                    700: "#A91DEE",
                    500: "#B645EE",
                    300: "#CA6CF9",
                    200: "#D8ADED",
                    100: "#E8C3FA",
                    50: "#F4E3FD"
                }),
                red: Object.freeze({
                    700: "#B71921",
                    500: "#F5222D",
                    300: "#FF8282",
                    200: "#F0A3A8",
                    100: "#FCB8BC",
                    50: "#FEDEE0"
                }),
                orange: Object.freeze({
                    700: "#B76D00",
                    500: "#EA9E06",
                    300: "#FFD666",
                    200: "#F2D69D",
                    100: "#F8E0B0",
                    50: "#FCF1DA"
                }),
                blue: Object.freeze({
                    700: "#006C9C",
                    500: "#18A5E2",
                    300: "#5FDBF4",
                    200: "#A0D3E8",
                    100: "#B6E3F6",
                    50: "#DDF2FB"
                }),
                green: Object.freeze({
                    700: "#0F8D57",
                    500: "#1AC47A",
                    300: "#78ED9F",
                    200: "#8BE0BB",
                    100: "#B6ECD4",
                    50: "#DDF6EB"
                }),
                lightGreen: Object.freeze({300: "#E9FF64"})
            }, Se = {};
        for (const qe in R) for (const e in R[qe]) Se["" + qe + e] = R[qe][e];
        var oe = Se, C = {
                "button-primary-background-default": R.brand[500],
                "button-primary-background-hover": R.brand[300],
                "button-primary-background-pressed": R.brand[700],
                "button-primary-background-loading": R.brand[700],
                "button-primary-background-disabled": R.gray[50],
                "button-primary-border-hover": R.brand[300],
                "button-primary-foreground-default": R.gray.white,
                "button-primary-foreground-hover": R.gray.white,
                "button-primary-foreground-pressed": R.gray.white,
                "button-primary-foreground-loading": R.gray.white,
                "button-primary-foreground-disabled": R.gray[400],
                "button-secondary-gray-background-default": R.gray[100],
                "button-secondary-gray-background-hover": R.gray[200],
                "button-secondary-gray-background-pressed": R.gray[200],
                "button-secondary-gray-background-loading": R.gray[100],
                "button-secondary-gray-background-disabled": R.gray[100],
                "button-secondary-gray-foreground-default": R.gray[900],
                "button-secondary-gray-foreground-hover": R.gray[900],
                "button-secondary-gray-foreground-loading": R.gray[900],
                "button-secondary-gray-foreground-pressed": R.gray[900],
                "button-secondary-gray-foreground-disabled": R.gray[900],
                "button-secondary-warning-background-default": R.orange[100],
                "button-secondary-warning-background-hover": R.orange[200],
                "button-secondary-warning-background-pressed": R.orange[200],
                "button-secondary-warning-background-loading": R.orange[100],
                "button-secondary-warning-background-disabled": R.orange[100],
                "button-secondary-warning-foreground-default": R.gray[900],
                "button-secondary-warning-foreground-hover": R.gray[900],
                "button-secondary-warning-foreground-loading": R.gray[900],
                "button-secondary-warning-foreground-pressed": R.gray[900],
                "button-secondary-warning-foreground-disabled": R.gray[900],
                "button-secondary-error-background-default": R.red[100],
                "button-secondary-error-background-hover": R.red[200],
                "button-secondary-error-background-pressed": R.red[200],
                "button-secondary-error-background-loading": R.red[100],
                "button-secondary-error-background-disabled": R.red[100],
                "button-secondary-error-foreground-default": R.gray[900],
                "button-secondary-error-foreground-hover": R.gray[900],
                "button-secondary-error-foreground-loading": R.gray[900],
                "button-secondary-error-foreground-pressed": R.gray[900],
                "button-secondary-foreground-disabled": R.gray[900],
                "button-secondary-success-background-default": R.green[100],
                "button-secondary-success-background-hover": R.green[200],
                "button-secondary-success-background-pressed": R.green[200],
                "button-secondary-success-background-loading": R.green[100],
                "button-secondary-success-background-disabled": R.green[100],
                "button-secondary-success-foreground-default": R.gray[900],
                "button-secondary-success-foreground-hover": R.gray[900],
                "button-secondary-success-foreground-loading": R.gray[900],
                "button-secondary-success-foreground-pressed": R.gray[900],
                "button-secondary-success-foreground-disabled": R.gray[900],
                "button-secondary-info-background-default": R.blue[100],
                "button-secondary-info-background-hover": R.blue[200],
                "button-secondary-info-background-pressed": R.blue[200],
                "button-secondary-info-background-loading": R.blue[200],
                "button-secondary-info-background-disabled": R.blue[100],
                "button-secondary-info-foreground-default": R.gray[900],
                "button-secondary-info-foreground-hover": R.gray[900],
                "button-secondary-info-foreground-loading": R.gray[900],
                "button-secondary-info-foreground-pressed": R.gray[900],
                "button-secondary-info-foreground-disabled": R.gray[900],
                "button-tertiary-background-hover": R.brand[50],
                "button-tertiary-background-pressed": R.brand[100],
                "button-tertiary-foreground-default": R.brand[500],
                "button-tertiary-foreground-hover": R.brand[500],
                "button-tertiary-foreground-pressed": R.brand[700],
                "button-tertiary-foreground-loading": R.brand[700],
                "button-tertiary-foreground-disabled": R.gray[400]
            }, x = {"border-primary": R.gray[50], "border-secondary": R.gray[100], "border-brand": R.brand[500]}, k = {
                "alert-warning-background": R.orange[50],
                "alert-warning-border": R.orange[100],
                "alert-warning-foreground": R.orange[700],
                "alert-warning-icon": R.orange[500],
                "alert-warning-close": R.orange[700],
                "alert-success-background": R.green[50],
                "alert-success-border": R.green[100],
                "alert-success-foreground": R.green[700],
                "alert-success-icon": R.green[500],
                "alert-success-close": R.green[700],
                "alert-info-background": R.blue[50],
                "alert-info-border": R.blue[100],
                "alert-info-foreground": R.blue[700],
                "alert-info-icon": R.blue[500],
                "alert-info-close": R.blue[700],
                "alert-error-background": R.red[50],
                "alert-error-border": R.red[100],
                "alert-error-foreground": R.red[700],
                "alert-error-icon": R.red[500],
                "alert-error-close": R.red[700]
            }, b = {
                "background-primary-default": R.gray.white,
                "background-primary-hover": R.gray[40],
                "background-secondary-default": R.gray[40],
                "background-secondary-hover": R.gray[50],
                "background-brand": R.brand[500],
                backdrop: R.gray[900],
                "background-light-green": R.lightGreen[300]
            }, h = {
                "dropdown-background-default": R.gray.white,
                "dropdown-background-active": R.gray.white,
                "dropdown-background-disabled": R.gray.white,
                "dropdown-background-error": R.gray.white,
                "dropdown-border-default": R.gray[100],
                "dropdown-border-active": R.gray.white,
                "dropdown-border-disabled": R.gray.white,
                "dropdown-border-error": R.gray.white,
                "dropdown-foreground-default": R.gray[300],
                "dropdown-foreground-active": R.gray.white,
                "dropdown-foreground-disabled": R.gray.white,
                "dropdown-foreground-error": R.gray.white,
                "dropdown-label-default": R.gray[900],
                "dropdown-label-active": R.gray[900],
                "dropdown-label-disabled": R.gray.white,
                "dropdown-label-error": R.gray[900],
                "dropdown-icon": R.gray[300]
            }, ae = {
                "controls-background-inactive-default": R.gray[200],
                "controls-background-inactive-hover": R.gray[100],
                "controls-background-active-default": R.brand[500],
                "controls-background-active-hover": R.brand[300],
                "controls-background-disabled": R.gray[100],
                "controls-foreground-default": R.gray.white,
                "controls-foreground-hover": R.gray.white,
                "controls-foreground-active": R.gray.white,
                "controls-foreground-disabled": R.gray[20],
                "controls-inactive-hover": R.gray[200],
                "controls-active-hover": R.brand[500],
                "progress-bar-background-default": R.gray[50],
                "progress-bar-foreground-default": R.brand[500]
            }, f = {
                "icon-primary": R.gray[900],
                "icon-secondary": R.gray[500],
                "icon-tertiary": R.gray[300],
                "icon-additional-default": R.gray[200],
                "icon-white": R.gray.white,
                "icon-brand-default": R.brand[500],
                "icon-error-default": R.red[500],
                "icon-success-default": R.green[500],
                "icon-warning-default": R.orange[500],
                "icon-info": R.blue[500]
            }, T = {
                "text-primary": R.gray[900],
                "text-primary-invert": R.gray.white,
                "text-secondary": R.gray[500],
                "text-caption": R.gray[400],
                "text-additional": R.gray[300],
                "text-disabled": R.gray[300],
                "text-white": R.gray.white,
                "text-brand": R.brand[500],
                "text-error": R.red[700],
                "text-success": R.green[700],
                "text-warning": R.orange[700],
                "text-info": R.blue[700]
            }, ie = {
                "input-background-default": R.gray.white,
                "input-background-disabled": R.gray[20],
                "input-border-default": R.gray[100],
                "input-border-focused": x["border-brand"],
                "input-border-disabled": R.gray.white,
                "input-border-error": R.red[500],
                "input-border-success": R.green[500],
                "input-foreground-placeholder": R.gray[300],
                "input-foreground-typed": T["text-primary"],
                "input-foreground-additional": T["text-additional"],
                "input-foreground-disabled": T["text-additional"],
                "input-foreground-error": T["text-error"],
                "input-foreground-success": T["text-success"],
                "input-label-default": T["text-primary"],
                "input-label-additional": f["icon-additional"],
                "input-label-disabled": T["text-disabled"]
            }, o = {
                "link-primary-text-default": R.brand[500],
                "link-primary-text-hover": R.brand[300],
                "link-primary-border-default": R.brand[50]
            }, y = {"loader-brand": R.brand[500], "loader-white": R.gray.white, "loader-black": R.gray[900]}, a = {
                "pagination-border-default": R.gray[50],
                "pagination-border-hover": R.gray[100],
                "pagination-border-active": R.brand[500],
                "pagination-background-active": R.brand[50],
                "pagination-icon-default": R.gray[100],
                "pagination-icon-hover": R.gray[900]
            }, t = {
                "tab-nav-foreground-default": R.gray[900],
                "tab-nav-foreground-hover": R.brand[500],
                "tab-nav-foreground-active": R.brand[500],
                "tab-nav-foreground-disabled": R.gray[400],
                "tab-nav-border-default": R.gray[900],
                "tab-nav-border-hover": R.brand[500],
                "tab-nav-border-active": R.brand[500],
                "tab-nav-border-disabled": R.gray[400],
                "tab-background-default": R.gray[50],
                "tab-background-hover": R.gray[100],
                "tab-background-active": R.gray.white,
                "tab-background-disabled": C["button-secondary-gray-background-disabled"],
                "tab-border-active": R.brand[700],
                "tab-foreground-default": R.gray[900],
                "tab-foreground-hover": R.gray[900],
                "tab-foreground-active": R.gray[900],
                "tab-foreground-disabled": C["button-secondary-gray-foreground-disabled"]
            }, n = {
                "tag-gray-background-default": R.gray[50],
                "tag-gray-background-hover": R.gray[700],
                "tag-gray-foreground-default": R.gray[800],
                "tag-brand-background-default": R.brand[500],
                "tag-brand-background-hover": R.brand[700],
                "tag-brand-foreground-default": R.gray.white,
                "tag-success-background-default": R.green[500],
                "tag-transparent-tag-success-background-default": R.green[50],
                "tag-transparent-tag-success-foreground-default": R.green[700],
                "tag-success-background-hover": R.green[700],
                "tag-success-foreground-default": T["text-white"],
                "tag-error-background-default": R.red[500],
                "tag-error-background-hover": R.red[700],
                "tag-error-foreground-default": T["text-white"],
                "tag-warning-background-default": R.orange[500],
                "tag-warning-background-hover": R.orange[700],
                "tag-warning-foreground-default": T["text-white"],
                "tag-info-background-default": R.blue[500],
                "tag-info-background-hover": R.blue[700],
                "tag-info-foreground-default": T["text-white"]
            }, D = {
                "tooltip-background-default": R.gray["900 alfa 75"],
                "tooltip-foreground-default": T["text-primary-invert"]
            }, Te = {
                "transparent-tag-brand-background-default": R.brand[50],
                "transparent-tag-brand-foreground-default": R.brand[300]
            }, Ie = {"foundation-brand-500": R.brand[500]},
            C = Object.assign({}, C, x, k, b, h, ae, f, ie, o, y, a, t, n, T, D, Te, D, Ie), L = {
                gray: Object.freeze({
                    900: "#19181A",
                    850: "#262129",
                    800: "#342D38",
                    700: "#403B45",
                    600: "#615A66",
                    500: "#79727F",
                    400: "#938D99",
                    300: "#ABA6B1",
                    200: "#CBC9D1",
                    100: "#DCDCE0",
                    50: "#EEEEF0",
                    40: "#F4F4F7",
                    20: "#F9F9FC",
                    white: "#FFFFFF"
                }),
                brand: Object.freeze({
                    700: "#B328F8",
                    500: "#C24FFC",
                    300: "#DE8FFF",
                    200: "#763D91",
                    100: "#602D79",
                    50: "#3B2347"
                }),
                red: Object.freeze({
                    700: "#D4333B",
                    500: "#FA3C46",
                    300: "#FF8282",
                    200: "#85353B",
                    100: "#6A252A",
                    50: "#461F23"
                }),
                orange: Object.freeze({
                    700: "#B76D00",
                    500: "#EA9E06",
                    300: "#FFD666",
                    200: "#7D5C1E",
                    100: "#644813",
                    50: "#433316"
                }),
                blue: Object.freeze({
                    700: "#006C9C",
                    500: "#18A5E2",
                    300: "#5FDBF4",
                    200: "#26607A",
                    100: "#194B62",
                    50: "#193442"
                }),
                green: Object.freeze({
                    700: "#0F8D57",
                    500: "#1AC47A",
                    300: "#78ED9F",
                    200: "#267051",
                    100: "#19563C",
                    50: "#193A2D"
                }),
                lightGreen: Object.freeze({300: "#E6F77C"})
            }, ke = {};
        for (const Ye in L) for (const e in L[Ye]) ke["" + Ye + e] = L[Ye][e];
        var x = ke, k = {
                "button-primary-background-default": L.brand[500],
                "button-primary-background-hover": L.brand[300],
                "button-primary-background-pressed": L.brand[700],
                "button-primary-background-loading": L.brand[700],
                "button-primary-background-disabled": L.gray[850],
                "button-primary-border-hover": L.brand[300],
                "button-primary-foreground-default": L.gray.white,
                "button-primary-foreground-hover": L.gray.white,
                "button-primary-foreground-pressed": L.gray.white,
                "button-primary-foreground-loading": L.gray.white,
                "button-primary-foreground-disabled": L.gray[600],
                "button-secondary-gray-background-default": L.gray[700],
                "button-secondary-gray-background-hover": L.gray[600],
                "button-secondary-gray-background-pressed": L.gray[600],
                "button-secondary-gray-background-loading": L.gray[700],
                "button-secondary-gray-background-disabled": L.gray[700],
                "button-secondary-gray-foreground-default": L.gray.white,
                "button-secondary-gray-foreground-hover": L.gray.white,
                "button-secondary-gray-foreground-loading": L.gray.white,
                "button-secondary-gray-foreground-pressed": L.gray.white,
                "button-secondary-gray-foreground-disabled": L.gray.white,
                "button-secondary-warning-background-default": L.orange[100],
                "button-secondary-warning-background-hover": L.orange[200],
                "button-secondary-warning-background-pressed": L.orange[200],
                "button-secondary-warning-background-loading": L.orange[100],
                "button-secondary-warning-background-disabled": L.orange[200],
                "button-secondary-warning-foreground-default": L.gray.white,
                "button-secondary-warning-foreground-hover": L.gray.white,
                "button-secondary-warning-foreground-loading": L.gray.white,
                "button-secondary-warning-foreground-pressed": L.gray.white,
                "button-secondary-warning-foreground-disabled": L.gray.white,
                "button-secondary-error-background-default": L.red[100],
                "button-secondary-error-background-hover": L.red[200],
                "button-secondary-error-background-pressed": L.red[200],
                "button-secondary-error-background-loading": L.red[100],
                "button-secondary-error-background-disabled": L.red[100],
                "button-secondary-error-foreground-default": L.gray.white,
                "button-secondary-error-foreground-hover": L.gray.white,
                "button-secondary-error-foreground-loading": L.gray.white,
                "button-secondary-error-foreground-pressed": L.gray.white,
                "button-secondary-foreground-disabled": L.gray.white,
                "button-secondary-success-background-default": L.green[100],
                "button-secondary-success-background-hover": L.green[200],
                "button-secondary-success-background-pressed": L.green[200],
                "button-secondary-success-background-loading": L.green[100],
                "button-secondary-success-background-disabled": L.green[100],
                "button-secondary-success-foreground-default": L.gray.white,
                "button-secondary-success-foreground-hover": L.gray.white,
                "button-secondary-success-foreground-loading": L.gray.white,
                "button-secondary-success-foreground-pressed": L.gray.white,
                "button-secondary-success-foreground-disabled": L.gray.white,
                "button-secondary-info-background-default": L.blue[100],
                "button-secondary-info-background-hover": L.blue[200],
                "button-secondary-info-background-pressed": L.blue[200],
                "button-secondary-info-background-loading": L.blue[100],
                "button-secondary-info-background-disabled": L.blue[100],
                "button-secondary-info-foreground-default": L.gray.white,
                "button-secondary-info-foreground-hover": L.gray.white,
                "button-secondary-info-foreground-loading": L.gray.white,
                "button-secondary-info-foreground-pressed": L.gray.white,
                "button-secondary-info-foreground-disabled": L.gray.white,
                "button-tertiary-background-hover": L.brand[50],
                "button-tertiary-background-pressed": L.brand[100],
                "button-tertiary-foreground-default": L.brand[500],
                "button-tertiary-foreground-hover": L.brand[300],
                "button-tertiary-foreground-pressed": L.brand[300],
                "button-tertiary-foreground-loading": L.brand[700],
                "button-tertiary-foreground-disabled": L.gray[500]
            }, b = {"border-primary": L.gray[800], "border-secondary": L.gray[700], "border-brand": L.brand[500]}, h = {
                "alert-warning-background": L.orange[50],
                "alert-warning-border": L.orange[100],
                "alert-warning-foreground": L.orange[300],
                "alert-warning-icon": L.orange[500],
                "alert-warning-close": L.orange[300],
                "alert-success-background": L.green[50],
                "alert-success-border": L.green[100],
                "alert-success-foreground": L.green[300],
                "alert-success-icon": L.green[500],
                "alert-success-close": L.green[300],
                "alert-info-background": L.blue[50],
                "alert-info-border": L.blue[100],
                "alert-info-foreground": L.blue[300],
                "alert-info-icon": L.blue[500],
                "alert-info-close": L.blue[300],
                "alert-error-background": L.red[50],
                "alert-error-border": L.red[100],
                "alert-error-foreground": L.red[300],
                "alert-error-icon": L.red[500],
                "alert-error-close": L.red[300]
            }, ae = {
                "background-primary-default": L.gray[900],
                "background-primary-hover": L.gray[850],
                "background-secondary-default": L.gray[850],
                "background-secondary-hover": L.gray[800],
                "background-brand": L.brand[500],
                backdrop: L.gray[900],
                "background-light-green": L.lightGreen[300]
            }, f = {
                "dropdown-background-default": L.gray[850],
                "dropdown-background-active": L.gray.white,
                "dropdown-background-disabled": L.gray.white,
                "dropdown-background-error": L.gray.white,
                "dropdown-border-default": L.gray[800],
                "dropdown-border-active": L.gray.white,
                "dropdown-border-disabled": L.gray.white,
                "dropdown-border-error": L.gray.white,
                "dropdown-foreground-default": L.gray[600],
                "dropdown-foreground-active": L.gray.white,
                "dropdown-foreground-disabled": L.gray.white,
                "dropdown-foreground-error": L.gray.white,
                "dropdown-label-default": L.gray.white,
                "dropdown-label-active": L.gray.white,
                "dropdown-label-disabled": L.gray.white,
                "dropdown-label-error": L.gray.white,
                "dropdown-icon": L.gray[600]
            }, ie = {
                "controls-background-inactive-default": L.gray[600],
                "controls-background-inactive-hover": L.gray[500],
                "controls-background-active-default": L.brand[500],
                "controls-background-active-hover": L.brand[300],
                "controls-background-disabled": L.gray[700],
                "controls-foreground-default": L.gray.white,
                "controls-foreground-hover": L.gray.white,
                "controls-foreground-active": L.gray.white,
                "controls-foreground-disabled": L.gray[400],
                "controls-inactive-hover": L.gray[600],
                "controls-active-hover": L.brand[500],
                "progress-bar-background-default": L.gray[800],
                "progress-bar-foreground-default": L.brand[500]
            }, o = {
                "icon-primary": L.gray.white,
                "icon-secondary-default": L.gray[400],
                "icon-tertiary": L.gray[500],
                "icon-additional-default": L.gray[600],
                "icon-white-default": L.gray.white,
                "icon-brand-default": L.brand[500],
                "icon-error-default": L.red[500],
                "icon-success-default": L.green[500],
                "icon-warning-default": L.orange[500],
                "icon-info-default": L.blue[500]
            }, y = {
                "text-primary": L.gray.white,
                "text-primary-invert": L.gray[900],
                "text-secondary": L.gray[400],
                "text-caption": L.gray[500],
                "text-additional": L.gray[600],
                "text-disabled": L.gray[600],
                "text-white": L.gray.white,
                "text-brand": L.brand[500],
                "text-error": L.red[300],
                "text-success": L.green[300],
                "text-warning": L.orange[300],
                "text-info": L.blue[300]
            }, a = {
                "input-background-default": L.gray[850],
                "input-background-disabled": L.gray[850],
                "input-border-default": L.gray[800],
                "input-border-focused": b["border-brand"],
                "input-border-disabled": L.gray.white,
                "input-border-error": L.red[500],
                "input-border-success": L.green[500],
                "input-foreground-placeholder": L.gray[600],
                "input-foreground-typed": y["text-primary"],
                "input-foreground-additional": y["text-additional"],
                "input-foreground-disabled": y["text-disabled"],
                "input-foreground-error": y["text-error"],
                "input-foreground-success": y["text-success"],
                "input-label-default": y["text-primary"],
                "input-label-additional": o["icon-additional-default"],
                "input-label-disabled": y["text-disabled"]
            }, t = {
                "link-primary-text-default": L.brand[300],
                "link-primary-text-hover": L.brand[500],
                "link-primary-border-default": L.brand[100]
            }, n = {"loader-brand": L.brand[500], "loader-white": L.gray.white, "loader-black": L.gray.white}, T = {
                "pagination-border-default": L.gray[800],
                "pagination-border-hover": L.gray[700],
                "pagination-border-active": L.brand[500],
                "pagination-background-active": L.brand[50],
                "pagination-icon-default": L.gray[600],
                "pagination-icon-hover": L.gray.white
            }, Te = {
                "tab-nav-foreground-default": L.gray.white,
                "tab-nav-foreground-hover": L.brand[500],
                "tab-nav-foreground-active": L.brand[500],
                "tab-nav-foreground-disabled": L.gray[600],
                "tab-nav-border-default": L.gray.white,
                "tab-nav-border-hover": L.brand[500],
                "tab-nav-border-active": L.brand[500],
                "tab-nav-border-disabled": L.gray[600],
                "tab-background-default": L.gray[800],
                "tab-background-hover": L.gray[700],
                "tab-background-active": L.gray[800],
                "tab-background-disabled": k["button-secondary-gray-background-disabled"],
                "tab-border-active": L.brand[700],
                "tab-foreground-default": L.gray.white,
                "tab-foreground-hover": L.gray.white,
                "tab-foreground-active": L.gray.white,
                "tab-foreground-disabled": k["button-secondary-gray-foreground-disabled"]
            }, D = {
                "tag-gray-background-default": L.gray[700],
                "tag-gray-background-hover": L.gray[600],
                "tag-gray-foreground-default": L.gray[50],
                "tag-brand-background-default": L.brand[700],
                "tag-brand-background-hover": L.brand[500],
                "tag-brand-foreground-default": L.gray.white,
                "tag-success-background-default": L.green[700],
                "tag-transparent-tag-success-background-default": L.green[50],
                "tag-transparent-tag-success-foreground-default": L.green[300],
                "tag-success-background-hover": L.green[500],
                "tag-success-foreground-default": y["text-white"],
                "tag-error-background-default": L.red[700],
                "tag-error-background-hover": L.red[500],
                "tag-error-foreground-default": y["text-white"],
                "tag-warning-background-default": L.orange[700],
                "tag-warning-background-hover": L.orange[500],
                "tag-warning-foreground-default": y["text-white"],
                "tag-info-background-default": L.blue[700],
                "tag-info-background-hover": L.blue[500],
                "tag-info-foreground-default": y["text-white"],
                "tag-gray-border-hover": L.gray[500],
                "tag-brand-border-hover": L.brand[100],
                "tag-success-border-hover": L.green[100],
                "tag-error-border-hover": L.red[100],
                "tag-warning-border-hover": L.orange[100],
                "tag-info-border-hover": L.blue[100],
                "tag-success-border-default": L.green[700],
                "tag-error-border-default": L.red[700],
                "tag-warning-border-default": L.orange[700],
                "tag-info-border-default": L.blue[700]
            }, Ie = {
                "transparent-tag-brand-background-default": L.brand[50],
                "transparent-tag-brand-foreground-default": L.brand[300]
            }, Ae = {"tooltip-background-default": L.gray.white, "tooltip-foreground-default": y["text-primary-invert"]},
            xe = {"foundation-brand-500": L.brand[500]},
            k = Object.assign({}, k, b, h, ae, f, ie, o, a, t, n, T, Te, D, y, Ie, Ae, xe), b = {...oe, ...C},
            h = {...x, ...k}, De = (s.a.use(u.a), new u.a({
                icons: {iconfont: "mdi", values: {custom: {blastStar: se}}},
                theme: {
                    options: {customProperties: !0},
                    dark: !localStorage.getItem("profileTheme") || "dark" === localStorage.getItem("profileTheme"),
                    themes: {light: b, dark: h}
                },
                lang: {locales: {en: g.a, ru: A.a}, current: localStorage.getItem("profileLanguage") || "en"}
            })), Ce = (r("d5e8"), r("15f5"), r("cee4")), ae = r("1dce"), f = r.n(ae), ie = r("d61f"), o = r("5132"),
            a = r.n(o), t = r("8e27"), n = r.n(t), T = r("9490"), Oe = r.n(T), Te = r("24f8"), Re = r.n(Te);
        r("87b8"), r("5aea"), r("b731"), Object.defineProperty(s.a.prototype, "$_", {value: Q.a});
        let Le, Ne, N = "http://127.0.0.1:5000", Fe = "https://sync.dolphin-anty-api.com", Ue,
            Be = "http://localhost:3001";
        if ("localhost" !== location.hostname) try {
            const e = new URL(location.href),
                t = (Ue = parseInt(e.searchParams.get("localApiPort")), localStorage.setItem("antyLocalApiPort", Ue), Be = "http://localhost:" + Ue, N = e.searchParams.get("baseUrl") ? e.searchParams.get("baseUrl") : "http://127.0.0.1:5000", Fe = e.searchParams.get("syncBaseUrl") ? e.searchParams.get("syncBaseUrl") : "https://sync.dolphin-anty-api.com", e.searchParams.get("token"));
            if (t) {
                localStorage.setItem("remoteApiToken", t);
                const e = t.split(pe.a);
                e && e.length && (localStorage.setItem("accessToken", e[0]), e[1]) && localStorage.setItem("refreshToken", e[1]), location.href = r("ec3a").removeParam(location.href, "token")
            }
            localStorage.setItem("baseUrl", N), Le = e.searchParams.get("branchName"), Ne = e.searchParams.get("branchHash")
        } catch (e) {
            console.log(e)
        }
        s.a.use(new a.a({
            debug: !1,
            connection: n()(Be, {transports: ["websocket", "polling"]}),
            vuex: {store: Pe, actionPrefix: "SOCKET_", mutationPrefix: "SOCKET_"}
        })), s.a.use(ie.a);
        const $e = ["http://127.0.0.1:5000", "https://api.dolphin-anty-ru.online", "https://api.dolphin-anty-ua.online", "https://api.dolphin-anty-cn.online"],
            Me = async () => {
                var e = [];
                for (const a of $e) {
                    var t = new Promise(async (e, t) => {
                        try {
                            await Ce.a.head(a + "/branches", {timeout: 6e4}), e(a)
                        } catch (e) {
                            t(a)
                        }
                    });
                    e.push(t)
                }
                return Promise.any(e)
            }, We = Ce.a.create({
                baseURL: Be + "/v1.0",
                headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")},
                httpAgent: new Oe.a.Agent({keepAlive: !0}),
                httpsAgent: new Re.a.Agent({keepAlive: !0})
            });
        (async () => {
            ["https://anty-api.com", ...$e].includes(N) && (N = await Me() || N, console.log("API Host detected: " + N), console.log("SYNC Host detected: " + Fe));
            let a = "https://apiv2.dolphin-anty-api.com/api/v2";
            Object.entries({
                "https://anty-api.com": "https://apiv2.dolphin-anty-api.com/api/v2",
                "http://127.0.0.1:5000": "https://apiv2.dolphin-anty-api.com/api/v2",
                "https://api.dolphin-anty-ru.online": "https://apiv2.dolphin-anty-ru.online/api/v2",
                "https://api.dolphin-anty-ua.online": "https://apiv2.dolphin-anty-ua.online/api/v2",
                "https://api.dolphin-anty-cn.online": "https://apiv2.dolphin-anty-cn.online/api/v2"
            }).forEach(([e, t]) => {
                N === e && (a = t)
            }), console.log("APIv2 Host detected: " + a);
            var e = Ce.a.create({
                baseURL: N,
                headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")},
                httpAgent: new Oe.a.Agent({keepAlive: !0}),
                httpsAgent: new Re.a.Agent({keepAlive: !0})
            }), t = Ce.a.create({
                baseURL: a,
                headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")},
                httpAgent: new Oe.a.Agent({keepAlive: !0}),
                httpsAgent: new Re.a.Agent({keepAlive: !0})
            }), o = Ce.a.create({
                baseURL: Fe,
                headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")},
                httpAgent: new Oe.a.Agent({keepAlive: !0}),
                httpsAgent: new Re.a.Agent({keepAlive: !0})
            });
            s.a.prototype.localApi = We, s.a.prototype.baseUrl = N, s.a.prototype.branchName = Le, s.a.prototype.branchHash = Ne, s.a.prototype.landingUrl = "https://anty.dolphin.ru.com", s.a.prototype.chromeVersion = 120, s.a.prototype.api = e, s.a.prototype.apiv2 = t, s.a.prototype.syncApi = o, s.a.config.ignoredElements = [/^ion-/], new s.a({
                router: _e,
                store: Pe,
                vuetify: De,
                i18n: O,
                beforeCreate() {
                    this.$store.dispatch("main/initializeStore")
                },
                render: e => e(we)
            }).$mount("#app")
        })(), s.a.config.productionTip = !1;
        let je = (e, t) => {
            const a = {};
            Object.keys(localStorage).forEach(t => {
                if (!t.match(/setItem|amplitude|loglevel|locale|profileTheme|profileLanguage|remoteApiToken|refreshToken|accessToken|remoteSessionId/) && "undefined" !== localStorage.getItem(t)) try {
                    a[t] = JSON.parse(localStorage.getItem(t))
                } catch (e) {
                    a[t] = localStorage.getItem(t)
                }
            })
        };
        je = Q.a.debounce(je, 700);
        const ze = window.localStorage.setItem, Ge = window.localStorage.removeItem;
        localStorage.setItem = (e, t, a = !0) => {
            ze.call(localStorage, e, t), a && je(e, t)
        }, localStorage.removeItem = (e, t = !0) => {
            Ge.call(localStorage, e), t && je(e)
        }, s.a.use(f.a), s.a.directive("custom-click-outside", {
            bind: function (t, a, o) {
                t.clickOutsideEvent = function (e) {
                    t === e.target || t.contains(e.target) || o.context[a.expression](e)
                }, document.body.addEventListener("click", t.clickOutsideEvent)
            }, unbind: function (e) {
                document.body.removeEventListener("click", e.clickOutsideEvent)
            }
        })
    }, "5aea": function (e, t, a) {
    }, "5c06": function (e, t, a) {
    }, "5cf8": function (e, t, a) {
        "use strict";
        a("3b26")
    }, "60cf": function (e, t, a) {
        "use strict";
        var o = a("8336"), r = a("b0af"), s = a("99d9"), i = a("169a"), n = {
            name: "DialogsTemplate",
            props: {
                title: {type: String, required: !1, default: () => null},
                subtitle: {type: String, required: !1},
                titleIcon: {type: Object, required: !1, default: () => ({})},
                showActions: {type: Boolean, default: !1},
                escPressClose: {type: Boolean, required: !1},
                dialogsWidth: {type: String, required: !1, default: () => "790px"},
                maxCardHeight: {type: Number, default: void 0}
            }
        }, a = (a("e393"), a("2877")), a = Object(a.a)(n, function () {
            var t = this, e = t._self._c;
            return e(i.a, {
                attrs: {
                    value: !0,
                    width: t.dialogsWidth,
                    "overlay-color": "rgb(46, 40, 50)",
                    "overlay-opacity": "0.8",
                    scrollable: "",
                    "content-class": "shadow-none",
                    persistent: !t.escPressClose
                }, on: {
                    "click:outside": function (e) {
                        return t.$emit("close")
                    }, keydown: function (e) {
                        if (!e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])) return null;
                        t.escPressClose && t.$emit("close")
                    }
                }
            }, [e(r.a, {
                staticClass: "custom-card",
                staticStyle: {"border-radius": "24px", padding: "40px"},
                attrs: {elevation: "0", "max-height": t.maxCardHeight}
            }, [e("div", {staticClass: "dialogs-template-title-text"}, [e(o.a, {
                attrs: {
                    icon: "",
                    color: "grey",
                    small: ""
                }, on: {
                    click: function (e) {
                        return t.$emit("close")
                    }
                }
            }, [e("ion-icon", {
                staticStyle: {"font-size": "24px"},
                attrs: {name: "close-outline"}
            })], 1)], 1), e("div", {staticClass: "free-dialog-hand-emoji"}, [0 < Object.keys(t.titleIcon).length ? e("img", {
                attrs: {
                    src: t.titleIcon.src,
                    alt: t.titleIcon.alt,
                    width: t.titleIcon.width,
                    height: t.titleIcon.height
                }
            }) : t._e(), e("div", {staticClass: "title-subtitle-box"}, [e(s.d, {
                staticClass: "pa-0 font-weight-bold",
                staticStyle: {"font-size": "32px"}
            }, [t.title ? [t._v(" " + t._s(t.title) + " ")] : [t._t("title")]], 2), t.subtitle ? e("span", {style: "color: " + (t.$vuetify.theme.dark ? "rgba(255, 255, 255, 0.71)" : "rgba(51, 51, 51, 0.71);")}, [t._v(" " + t._s(t.subtitle) + " ")]) : t._e()], 1)]), e(s.c, {staticClass: "pa-0 mt-4 rounded-0"}, [t._t("default")], 2), t.showActions ? e(s.a, {staticClass: "pa-0"}, [t._t("actions")], 2) : t._e()], 1)], 1)
        }, [], !1, null, null, null);
        t.a = a.exports
    }, "65b2": function (e, t, a) {
    }, "6bb0": function (e, t, a) {
        "use strict";
        t.a = {
            methods: {
                addHashQueryParam(e, t, a) {
                    var o = e.lastIndexOf("?") > e.lastIndexOf("#") ? e.substr(e.lastIndexOf("?") + 1) : "",
                        r = new URLSearchParams(o);
                    return r.set(t, a), e.replace("?" + o, "") + "?" + r.toString()
                }, openExternalLink(e, t = !1) {
                    if (t) {
                        const t = localStorage.getItem("accessToken"), a = localStorage.getItem("refreshToken");
                        t && (e = this.addHashQueryParam(e, "token", t), a) && (e = this.addHashQueryParam(e, "refreshToken", a))
                    }
                    this.localApi.post("/open-external-link", {url: e})
                }
            }
        }
    }, "6cfc": function (e, t, a) {
        "use strict";
        a.d(t, "c", function () {
            return o
        }), a.d(t, "a", function () {
            return i
        }), a.d(t, "b", function () {
            return n
        });
        var r = a("2ef0");
        const s = e => {
            e = localStorage.getItem(e);
            return e ? JSON.parse(e) : null
        }, o = (e, {path: t, data: a}) => {
            var o = s(e) || {};
            Object(r.set)(o, t, a), localStorage.setItem(e, JSON.stringify(o))
        }, i = (e, {path: t, default: a}) => {
            e = s(e) || {};
            return Object(r.get)(e, t, a)
        }, n = t => {
            var e = localStorage.getItem(t);
            if (e) try {
                return JSON.parse(e)
            } catch (e) {
                console.warn("Cannot parse local " + t)
            }
            return null
        }
    }, "6ed5": function (e, t, a) {
        "use strict";
        a("14d9"), a("3c65");
        var o = a("2f62"), r = a("2238"), s = a("c1df"), i = a.n(s),
            n = [{value: 10, disabled: !1}, {value: 20, disabled: !1}, {value: 30, disabled: !1}, {
                value: 40,
                disabled: !1
            }, {value: 50, disabled: !1}], l = a("0cdd");
        let d = 0;
        t.a = {
            data() {
                return {
                    POLLING_INTERVAL: 1e4,
                    MAX_POLLING_DURATION: 6e4,
                    INVOICE_SUCCESS_TIMEOUT: 5e3,
                    profilesCountListForFreePlan: n,
                    moment: i.a,
                    isFetchingStatus: !1,
                    invoiceSuccessStatus: !1
                }
            },
            computed: {
                ...Object(o.c)({
                    profile: "main/profile",
                    paymentInfo: "payment/paymentInfo",
                    paymentSummary: "payment/paymentSummary",
                    subscription: "main/subscription",
                    companyInfo: "payment/companyInfo",
                    balance: "payment/balance",
                    invoice: "payment/invoice"
                }), subscriptionIsExpired() {
                    return this.moment.utc(this.subscription.expiration).unix() < Math.floor(Date.now() / 1e3)
                }, userOnPayedPlan() {
                    return this.subscription.plan !== r.g || 10 < this.subscription.browserProfiles.limit
                }, getProfilesCountListForFreePlan() {
                    return !this.subscriptionIsExpired && this.userOnPayedPlan ? this.profilesCountListForFreePlan.map(e => 10 === e.value ? {
                        ...e,
                        disabled: !0
                    } : e) : this.profilesCountListForFreePlan
                }, needPay() {
                    return 0 < this.paymentSummary.difference
                }
            },
            methods: {
                changePaymentPlanCount(e, t, a, o, r) {
                    "plus" === e ? this.$store.dispatch(t, a + o) : "minus" === e ? a - 1 < r || this.$store.dispatch(t, a - o) : this.$store.dispatch(t, Number(e))
                }, filterProlongPeriods(e = !0) {
                    var t = this.paymentSummary.availableDays;
                    let a = 1;
                    for (let e = 30; e <= 360; e += 30) t >= e && a++;
                    return this.setProlongPeriods(a, e)
                }, setProlongPeriods(a, e = !1) {
                    var o = [];
                    for (let t = a; t <= 12; t++) {
                        const a = t + " " + this.$tc("payment.choosePlan.prolongMonths.months", t).toLowerCase();
                        let e = 0;
                        6 <= t && t < 12 ? e = 20 : 12 === t && (e = 40), o.push({month: t, text: a, sale: e})
                    }
                    return e && 0 < this.paymentSummary.availableDays && o.unshift({
                        month: 0,
                        text: this.$t("payment.choosePlan.prolongMonths.noProlong"),
                        sale: 0
                    }), o
                }, calculatePriceWithDiscount(e, t) {
                    return Math.round(e - e * t / 100)
                }, async updatePaymentInfo(e = !1) {
                    var t, a;
                    if (this.paymentInfo.plan) {
                        const o = {
                            source: "application",
                            plan: this.paymentInfo.plan,
                            countryCode: null == (t = this.companyInfo.countryCode) ? void 0 : t.toUpperCase(),
                            paymentMethod: this.paymentInfo.paymentMethod,
                            usersLimit: parseInt(this.paymentInfo.additionalUsers, 10) + 1,
                            browserProfilesLimit: this.paymentInfo.profilesCount + this.paymentInfo.additionalProfiles,
                            provider: "upgrade",
                            promo: this.paymentInfo.promoCode || null,
                            teamId: this.profile.teamId,
                            refund: !1,
                            renew: e
                        };
                        this.paymentInfo.prolongMonths && (o.days = 30 * parseInt(this.paymentInfo.prolongMonths, 10)), this.companyInfo.vatId && (o.vatId = this.companyInfo.vatId), this.paymentInfo.prolongMonths || this.subscription.plan !== r.g || 10 !== this.subscription.browserProfiles.limit || (o.days = 30), o.plan === r.g && (o.browserProfilesLimit = this.paymentInfo.additionalProfiles, o.browserProfilesLimit += 10, o.usersLimit = 1), o.plan === r.e && o.browserProfilesLimit < 1e3 && (o.browserProfilesLimit = 1e3), this.setProviderByPaymentMethod(o), this.clearCompanyInfoForNonCardPaymentMethods(o);
                        try {
                            0 === o.days && delete o.days, d++, await this.$store.dispatch("payment/setPaymentSummaryLoading", !0);
                            const e = await this.api.post("/subscription/balance", o);
                            if (200 === e.status && null != (a = e.data) && a.data) {
                                const t = e.data.data, o = {
                                    planBasePrice: t.new.basePrice,
                                    additionalUsersPrice: t.new.additionalUsersPrice,
                                    additionalProfilesPrice: t.new.additionalProfilesPrice,
                                    paymentFee: t.new.paymentFee,
                                    paymentFeePercentage: t.new.paymentFeePercentageRate,
                                    discount: t.new.discount,
                                    discountPercentage: t.new.discountPercentageRate,
                                    countryFee: t.new.countryFee,
                                    countryFeePercentage: t.new.countryPercent,
                                    total: t.new.total,
                                    totalPrice: t.new.totalPrice,
                                    availableDays: t.new.availableDays,
                                    difference: t.new.difference
                                };
                                this.paymentInfo.plan === r.g && 0 === this.paymentInfo.additionalProfiles && (o.availableDays = 0), await this.$store.dispatch("payment/setPaymentSummary", o), await this.$store.dispatch("payment/setBalance", t)
                            }
                        } catch (e) {
                            console.log(e, "Error on balance update")
                        } finally {
                            0 === --d && await this.$store.dispatch("payment/setPaymentSummaryLoading", !1)
                        }
                    }
                }, async createPaymentInvoice() {
                    var e;
                    const t = {
                        source: "application",
                        plan: this.paymentInfo.plan.toLowerCase(),
                        usersLimit: parseInt(this.paymentInfo.additionalUsers, 10) + 1,
                        browserProfilesLimit: this.paymentInfo.profilesCount + this.paymentInfo.additionalProfiles,
                        days: 30 * parseInt(this.paymentInfo.prolongMonths),
                        provider: "upgrade",
                        promo: this.paymentInfo.promoCode || null,
                        teamId: this.profile.teamId,
                        planBasePrice: this.paymentSummary.planBasePrice + this.paymentSummary.additionalUsersPrice + this.paymentSummary.additionalProfilesPrice,
                        remainingFare: this.balance.balance,
                        companyInfo: this.companyInfo
                    };
                    this.setProviderByPaymentMethod(t), this.clearCompanyInfoForNonCardPaymentMethods(t), null != (e = t.companyInfo) && e.countryCode && (t.companyInfo.countryCode = t.companyInfo.countryCode.toUpperCase());
                    try {
                        0 === t.days && delete t.days;
                        const e = await this.api.post("/subscription/invoices/upgrade", t);
                        if (e.data && e.data.success && e.data.data) {
                            const t = {
                                signature: e.data.data.signature,
                                email: this.profile.username,
                                sum: e.data.data.sum,
                                provider: e.data.data.provider,
                                days: e.data.data.days,
                                id: e.data.data.invoiceId,
                                currency: "RUB" === e.data.data.currency ? "RUR" : e.data.data.currency,
                                teamId: this.profile.teamId,
                                description: "Dolphin Anty invoice #" + e.data.data.invoiceId,
                                paymentUrl: e.data.data.unlimintPaymentUrl || e.data.data.inxyPaymentUrl
                            };
                            return await this.$store.dispatch("payment/updateInvoice", t), e
                        }
                    } catch (e) {
                        console.log(e, "Error on invoice create")
                    }
                }, setProviderByPaymentMethod(e) {
                    switch (this.paymentInfo.paymentMethod) {
                        case r.j:
                            e.provider = r.k;
                            break;
                        case r.i:
                            e.provider = r.i;
                            break;
                        case r.o:
                        case r.l:
                            e.provider = this.paymentInfo.provider || r.m, e.coin = this.paymentInfo.coin;
                            break;
                        case r.p:
                            e.provider = this.paymentInfo.provider, e.coin = this.paymentInfo.coin;
                            break;
                        case r.n:
                            e.provider = r.n;
                            break;
                        default:
                            e.provider = "upgrade", delete e.coin
                    }
                    return e
                }, getLastThreeDays(e) {
                    var t = this.moment.parseZone(e).diff(this.moment(), "hours"), t = Math.ceil(t / 24),
                        e = this.moment.parseZone(e).diff(this.moment(), "seconds");
                    return t <= 3 && 0 <= t ? 0 === t && 0 < e ? 1 : t : null
                }, async checkPromoCode(e) {
                    try {
                        var t, a = await this.api.post("/subscription/check-promo", {promo: e});
                        return 200 === a.status && null != (t = a.data) && t.data ? a.data.data : null
                    } catch (e) {
                        return console.error(e), null
                    }
                }, clearCompanyInfoForNonCardPaymentMethods(e) {
                    [r.j, r.n].includes(e.paymentMethod) || (delete e.companyInfo, delete e.countryCode, delete e.vatId)
                }, async saveNewPlan() {
                    await this.$store.dispatch("payment/setPaymentSummaryLoading", !0);
                    await this.$store.dispatch("payment/updatePaymentInfo", {
                        paymentMethod: "upgrade",
                        prolongMonths: 0
                    });
                    var e, t = await this.createPaymentInvoice();
                    try {
                        t && 200 === t.status && !0 === (null == (e = t.data) ? void 0 : e.success) ? (await this.$store.dispatch("main/getSubscription"), await this.$store.dispatch("payment/setAlert", l.b.SUCCESSFUL_PLAN_UPDATE), await this.$router.push({name: "Payment"})) : console.error("invoiceResponse", t)
                    } finally {
                        await this.$store.dispatch("payment/setPaymentSummaryLoading", !1)
                    }
                }, startPollingInvoiceStatus() {
                    if (!this.isFetchingStatus && this.invoice.id) {
                        this.isFetchingStatus = !0, this.invoiceSuccessStatus = !1;
                        const t = setInterval(() => {
                            var e;
                            this.invoice.id ? (e = `/subscription/invoices/${this.invoice.id}/status`, this.api.get(e).then(e => {
                                "success" === e.data.status && (clearInterval(t), this.isFetchingStatus = !1, this.invoiceSuccessStatus = !0, this.invoice.id && (this.$store.dispatch("main/getSubscription"), this.$store.dispatch("payment/setAlert", l.b.PLAN_PAYMENT_SUCCESS), this.$store.dispatch("payment/removeInvoice"), this.$router.push({name: "Payment"})), setTimeout(() => {
                                    this.invoiceSuccessStatus = !1
                                }, this.INVOICE_SUCCESS_TIMEOUT))
                            })) : (clearInterval(t), this.isFetchingStatus = !1)
                        }, this.POLLING_INTERVAL);
                        setTimeout(() => {
                            clearInterval(t), this.isFetchingStatus = !1
                        }, this.MAX_POLLING_DURATION)
                    }
                }
            }
        }
    }, "6f11": function (e, t, a) {
    }, 7704: function (e) {
        e.exports = JSON.parse('{"authorization":{"emailIsTaken":"Почта уже занята","fieldEmail":"Введите email","fieldRequired":"Это поле обязательно","generatePassword":"Сгенерировать пароль","hidePassword":"Скрыть пароль","invalidUsernamePassword":"Ошибка! Вы ввели неправильный логин или пароль. Проверьте данные и повторите попытку входа.","needCaptcha":"Требуется капча","passwordLength":"Пароль должен содержать минимум 5 символов","passwordRepeat":"Пароли не совпадают","promoCode":"Промо-код","promoCodeNotFound":"Промо-код не найден","rateLimitExceed":"Слишком много попыток авторизации. Попробуйте через час.","showPassword":"Показать пароль","somethingWentWrong":"Что-то пошло не так","wrongLogin":"Требуется капча! Неправильный логин или пароль. Попробуйте еще раз или нажмите Забыли пароль, чтобы сбросить его."},"automation":{"businessDescriptionLabel":" Приведите краткое описание своей коммерческой деятельности*","businessDescriptionPlaceholder":"Пример: интернет-магазин одежды","issueDescriptionLabel":"Описание проблемы*","issueDescriptionPlaceholder":"Опишите проблему как можно более подробно.","onboardingSubmit":"Хорошо","onboardingText1":"Эта функция поможет вам автоматически отправить апелляцию на разблокировку рекламного аккаунта, который\\n   был заблокирован Google.","onboardingText2":"Сервис заполнит форму \\"<a\\n                target=\\"_blank\\"\\n                href=\\"https://support.google.com/google-ads/contact/pf_suspended?ctx=123\\"\\n>Блокировка аккаунта в связи с нарушением Условий использования</a>\\" на основание\\n              вашей рекламой кампании и платежной информации.","onboardingTitle":"Автоматизация разблокировки","start":"Старт"},"browserProfiles":{"PasteCommandLineSwitches":"Вставьте аргументы каждый с новой строки","accuracy":"Точность","accuracyError":"Точность может быть от 1 до 1000","addNoise":"Добавлять шум","altered":"Подменять","audio":"Аудио","auto":"Авто","automation":"Автоматизация","banners":{"expiresPlan":{"payNow":"ОПЛАТИТЬ СЕЙЧАС","tariffExpires":"Действие тарифного плана заканчивается через {0} {1}. Не забудь его оплатить до","usageLimitExceeded":"Тарифный план закончился. Оплати подписку или перейди на бесплатный тариф, чтобы продолжить пользоваться Dolphin{anty}."},"twoFactor":{"aboutHow":"как включение 2fa спасет ваш аккаунт от взлома","enable2factor":"Включить 2fa","learnMore":"Узнайте подробнее","protectYourAcc":"Защитите ваш аккаунт с помощью двухфакторной аутентификации"},"incorrectTime":{"fixYourTime":"Время на твоем компьютере отличается от времени сервера Dolphin{anty}.\\nВо избежание проблем с запуском профилей и облачной синхронизацией данных, установи корректное время на компьютере."}},"bits":"бит | бита","bringToTop":"Поднять окно","browserNotDownloaded":"Не скачано ядро браузера. Нажмите \\"Состояние\\" внизу и скачайте ядро или просто перезапустите программу.","browserProfileNotStarted":"Браузер не запущен","cameras":"Камеры","changeWebgl":"Измените WebGL Info, чтобы иметь возможность настраивать WebGPU","chromeNotFound":"Не найден Chrome","commandLineSwitches":"Аргументы запуска","cookieRobot":"Cookie робот","cookieRobotFailed":"Cookie робот - возникла ошибка при открытии","cookieRobotFinished":"Cookie робот завершил работу","cookieRobotStarted":"Cookie робот начал работу","cookieRobotSubtitle":"","cookiesFromFile":"Куки из файла","core":"ядро | ядра | ядер","cpu":"Процессор","deleteDisabledTooltip":"Среди выбранных профилей имеется профиль без прав на удаление","deviceName":"Имя устройства","deviceNameInfo":"Имя устройства - название устройства, с которого подменяется запуск","dialogShare":{"noSharedPermissions":"Нет розданных прав","permissions":{"delete":"Удалять","share":"Раздавать","startStop":"Старт/Стоп","update":"Выполнять действия","view":"Просмотр"},"permissionsFor":"Доступы для"},"dragNDropOrPasteCookies":"Вставьте куки или перетащите файл drag and drop","dynamics":"Динамики","errorAtLeast3Symbols":"Это поле должно содержать минимум 3 символа","errorAtLeast5Symbols":"Это поле должно содержать минимум 5 символов","errors":{"downloadDatadirError":"Ошибка скачивания данных с облака","errorDownloadAndUnpack":"Ошибка скачивания и распаковки","errorMirrorDownload":"Ошибка скачивания с зеркала","errorRemoteApi":"Не удалось получить ответ от Remote API","failedToGetIPData":"Не удалось получить данные из ip прокси. Проверьте соединение"},"exportCookies":"Экспортировать кукисы","exportDisabledTooltip":"Среди выбранных профилей имеется профиль без прав на экспорт кукисы","exportedCookiesToDownloads":"Кукисы экспортированы в загрузки","extensionSync":"Синхронизация расширений","extensionSyncButton":"Синхронизировать","extensionSyncText":"<p><strong>Внимание! Перед выполнением ознакомьтесь для чего этот функционал нужен и как он работает:</strong><br>\\n– Этот функционал нужен только для тех, кто работает с браузерными профилями на разных физических устройствах и испытывает проблемы с потерей данных в браузерных расширения.<br>\\n– После активации все данные в расширениях сотрутся и их нужно будет ввести заново. Убедитесь что все нужные данные из расширений у вас сохранены, перед выполнением.<br>\\n– После активации данной функции, ваши браузерные профили начнут синхронизировать данные между физическими устройствами, уйдут проблемы с разлогинами в расширениях metamask, scenum и др.</p>\\n<p><strong>Почему по другому нельзя:</strong><br>\\nВ настоящее время хром формирует ID расширений хешируя путь до папки с этим расширением.<br>\\nДля синхронизации настроек на любой операционной системе и различных пк нам пришлось изменить функцию, которая отвечает за формирование ID и сделать так, чтобы результат на любой ОС был одинаковый. Поэтому настройки расширений которые используют стандартные названия – слетят. Перед переводом на новые названия советуем сделать бекап настроек.</p>\\n","forProfile":"для профиля","forceStop":"Принудительный стоп","fromFile":"Из файла","gb":"Гб","geolocation":"Геолокация","importCookies":"Импортировать кукисы","installChrome":"установите Chrome","installChromeEnd":" и перезапустите приложение.","installChromeStart":"Наша система использует в своей базе обычный Chrome. Нужно, чтобы он был установлен на вашем компьютере. Пожалуйста,","ipAddress":"IP адрес","language":"Язык","languageError":"Выберите язык","languageSelect":"Переключить язык","latitude":"Широта","latitudeError":"Широта может быть от -90 до 90","launch":"Запустить","learnSyncError":"Ошибка синхронизации. Нажмите, чтобы узнать подробнее","log":{"first":"Сначала","new":"Новые","old":"Старые","session":"Сессия работы","sessionTime":"Время сессии","start":"Запуск","stop":"Остановка","update":"Редактирование"},"loginOrPasswordEmpty":"Это поле тоже надо заполнить","longitude":"Долгота","longitudeError":"Долгота может быть от -180 до 180","macAddress":"MAC-адрес","macAddressInfo":"MAC-адрес -  уникальный физический адрес устройства.","mainWebsite":"Основной сайт","mainWebsites":"Основные сайты","managedProfile":"Управляемый профиль","manual":"Вручную","manually":"ВРУЧНУЮ","master":"Мастер","masterProfile":"Мастер-профиль","mediaDevices":"Медиа","memory":"Память","microphones":"Микрофоны","multipleImport":{"imported":"Не импортировано | Импортирован | Импортировано | Импортировано","invalidData":"Неверные данные","profiles":"нет профилей | профиль | профиля | профилей"},"multipleImportHeaders":{"cookie":"Cookie","notion":"Заметка","profileName":"Название профиля","proxy":"Прокси","proxyType":"Тип прокси","userAgent":"User agent"},"newFingerprint":"Новый отпечаток","newProfile":"Новый профиль","noStatus":"Без статуса","noWebsite":"Без сайта","noise":"Шум","off":"Выкл","order":{"asc":"По возрастанию","desc":"По убыванию","label":"Порядок"},"parallelStartWarning":"Параллельный запуск браузерного профиля на нескольких устройствах может привести к непредвиденным ошибкам и потере данных. Хотите продолжить?","pinToTop":"Закрепить вверху","ports":"Порты","portsToProtect":"Блокировать порты","profileIsLaunchedBy":"Профиль запущен пользователем","profiles":"профилей | профиль | профиля | профилей","protect":"Блокировать","proxies":"","proxy":{"changeIpUrl":"Ссылка для смены IP","changeProxyIp":"Менять IP прокси","host":"Хост","newProxy":"Новый прокси","newProxyError":"Новый прокси должен содержать как минимум тип, хост и порт","noProxy":"Без прокси","optional":"Не обязательно","port":"Порт","proxyName":"Название прокси","proxySave":"Сохранить прокси","proxySelect":"Выберите прокси","savedProxies":"Выбрать прокси"},"random":"Рандомно","real":"Реальный","realGeo":"Реальная","realMultiple":"Реальные","renderer":"Видеокарта","screenWarning":"Вы собираетесь запустить браузерный профиль, разрешение экрана которого больше физического разрешения вашего экрана","searchField":"Поиск (нажми /)","secondsAgo":"секунд назад | секунду назад | секунды назад | секунд назад","shareDisabledTooltip":"Среди выбранных профилей имеется профиль без прав на раздачу","software":"Софтовый","sortBy":{"created_at":"Дате создания","label":"Сортировать по","name":"Имени","notes":"Заметкам","proxy":"Прокси","tags":"Тегам","totalSessionDuration":"Общей продолжительности сеанса","updated_at":"Дате обновления"},"startAnyway":"Запустить все равно","startSynchronizer":"Запустить синхронизатор","successfullyAdded":"Успешно добавил","synchronizer":"Синхронизатор","synchronizerPlan":"Доступно на платных тарифах","synchronizerAlert":"Вы пытаетесь запустить в синхронизаторе уже запущенный профиль","synchronizerDoesntWorkOnMacos":"Пока функция доступна только на Windows и Linux","synchronizerHint":"Действия, совершаемые тобой в мастер-профиле будут повторены в управляемых профилях. Подробнее в","synchronizerHint2":"документации.","synchronizerLaunched":"Синхронизатор запущен","synchronizerStopped":"Синхронизатор остановлен","synchronizerTitle":"Запустить {count} профилей через синхронизатор | Запустить {count} профиль через синхронизатор | Запустить {count} профиля через синхронизатор | Запустить {count} профилей через синхронизатор","timezone":"Часовой пояс","timezoneError":"Выберите часовой пояс","timezoneSelect":"Выберите часовой пояс","title":"Название профиля","transfer":"Передать","transferEmptyUser":"Выберите юзера","transferProfiles":"Передать профили","transferYourSelf":"Вы не можете передать профиль самому себе!","turnedOff":"Выключено","unpinFromTop":"Открепить","useragentError":"Укажите useragent","vendor":"Производитель","webglInfo":"WebGL инфо","webrtcError":"Это поле должно содержать IP-адрес"},"columns":{"browserProfiles":{"columnsSelected":"Столбцов выбрано","lastEdited":"Изменен","createdAt":"Создан","mainWebsite":"Основной сайт","noSuchUserfield":"Нет поля","notes":"Заметки","platform":"Платформа","proxy":"Прокси","savePreset":"Сохранить настройку столбцов","status":"Статус","tags":"Теги","timer":"Таймер","worktime":"Время работы"},"proxies":{"browser_profiles_count":"Профили","geo":"ГЕО","name":"Название","status":"Статус"}},"common":{"Understandably":"Понятно","aCopy":"Копия","access":"Доступ","add":"Добавить","addPermissions":"Добавить права","addProfiles":"+ Добавить профили","added":"Добавлено","additional":"Дополнительно","all":"Все","and":"и","antyBrowser":"Браузер Anty","basket":"корзина","bookmarks":"Закладки","browser":"Браузер","cancel":"Отмена","cancelBasket":"Выйти","change":"Изменить","changeIp":"Изменить ip","changeIpUrl":"Ссылка для смены IP","changeProxy":"Изменить прокси","checkConnection":"Проверить соединение","checkData":"Проверить данные","checkPlans":"Посмотреть тарифы","checked":"Проверено","chromeWebStoreURL":"Ссылка на Chrome Web Store","clear":"Очистить","close":"Закрыть","color":"Цвет","columns":"Колонки","comment":"Комментарий","confirm":"Подтвердить","copied":"Cкопировал","copiesNumbers":"Количество копий","copy":"Копировать","copyProfile":"Копировать профиль","create":"Создать","createProfile":"Создать профиль","created":"Добавлено","customizeColumns":"Настроить столбцы","data":"Данные","dataCheck":"Проверка данных","dayShort":"Д","delete":"Удалить","deleted":"Удалил","deleted_at":"Удален","deselectAll":"Убрать все","displayName":"Отображаемое имя","doNotLoadImages":"Не загружать изображения","dolphinAntyVersion":"Версия Dolphin{anty}","dolphinExtension":"Расширение Dolphin","done":"Готово","download":"Скачать","downloadFailed":"Ошибка скачивания браузер, пожалуйста, обратитесь в поддержку","downloadInProcess":"Браузер загружается","downloadTemplate":"Скачать шаблон","dragNDropOrPaste":"Перетащите файл или кликните чтобы вставить текст","edit":"Редактировать","editProfile":"Редактировать профиль","email":"Почта","empty":"Пусто","enterEmail":"Введите e-mail","enterListOfLinks":"Вставьте список ссылок разделенный новой строкой или через запятую","errorOccurred":"Ой! Произошла ошибка","errorOops":"Ой! Что-то пошло не так","errorToDeveloper":"Передайте эти данные разработчику ","errorsCodes":{"E_ACCESS_PROFILE":"У вас нет доступа к этим браузерным профилям","E_BROWSER_PROFILE_ACCESS_DENIED":"У вас нет доступа к этому браузерному профилю","E_BROWSER_PROFILE_ACCESS_EDIT_NO_USERS":"Необходимо указать пользователей","E_BROWSER_PROFILE_ACCESS_EDIT_WRONG_ACTION":"Неверное действие","E_BROWSER_PROFILE_ACCESS_NOT_FOUND":"Доступ к браузерному профилю не найден","E_BROWSER_PROFILE_CANT_GET_DATA_FROM_REMOTE_API":"Не удалось получить данные браузерного профиля из удаленного API","E_BROWSER_PROFILE_DATA_SHOULD_BE_ARRAY":"Данные должны быть массивом","E_BROWSER_PROFILE_EVENT_WRONG_TYPE":"Неправильный тип события","E_BROWSER_PROFILE_NOT_FOUND":"Браузерный профиль не найден","E_BROWSER_PROFILE_STATUS_DELETE_MUST_BE_UNASSIGNED":"Вы не можете удалить статус, пока он прикреплен к профилям","E_BROWSER_PROFILE_STATUS_WRONG_COLOR":"Неправильный цвет статуса","E_BROWSER_PROFILE_USER_FIELDS_ACCESS_DENIED":"Fields do not belong to the current team","E_BROWSER_PROFILE_USER_FIELDS_LIMIT":"You have reached the User Fields limit.","E_BROWSER_PROFILE_USER_FIELDS_NOT_FOUND":"Fields not found","E_BROWSER_PROFILE_USER_FIELDS_WRONG_MAINWEBSITE":"Check parameter [mainWebsite]","E_BROWSER_PROFILE_USER_FIELDS_WRONG_TYPE":"Check parameter [type]","E_EXTENSION_CHROME_STORE_ERROR":"Ошибка скачивания расширения из Chrome Store","E_EXTENSION_CHROME_STORE_NOT_FOUND":"Расширение не найдено в Chrome Store","E_EXTENSION_WRONG_MAINWEBSITE":"Неправильный основной сайт расширения","E_EXTENSION_WRONG_URL":"Неправильная ссылка на расширение","E_EXTENSION_ZIP_NO_MANIFEST":"Zip архив с расширением некорректен. Пожалуйста, проверьте, что все файлы находятся в корне архива.","E_FINGERPRINT_NOT_FOUND":"Отпечатки не найдены","E_GENERAL_ERROR":"Неожиданная ошибка","E_GENERAL_EXCEPTION":"Неожиданная ошибка","E_HOMEPAGE_LIMIT":"Вы достигли лимита домашних страниц","E_HOMEPAGE_WRONG_MAINWEBSITE":"Неверный основной сайт","E_LIMIT_PROFILES":"Вы достигли лимита браузерных профилей. Пожалуйста, обновите подписку","E_LIMIT_PROFILES_ARCHIVED":"Вы не можете восстановить {0} профилей, у вас не хватает места {1}","E_LIMIT_RECOVERIES_COUNT":"Вы достигли лимита на восстановление этого профиля.","E_LIMIT_USERS":"Вы достигли лимита пользователей. Пожалуйста, обновите подписку","E_NOT_FOUND_USER":"Пользователь не найден","E_PROFILE_WRONG_LANGUAGE":"Неверный язык","E_PROFILE_WRONG_THEME":"Неверная тема","E_PROMO_NOT_FOUND":"Промокод не найден","E_PROXY_ACCESS_DENIED":"У вас нет доступа к прокси","E_PROXY_EMPTY":"Обязательно укажите тип прокси, айпи и порт","E_PROXY_LIMIT":"Вы не можете создать проксей больше, чем ваш лимит профилей.","E_PROXY_NOT_FOUND":"Прокси не найден","E_PROXY_WRONG_TYPE":"Выберите верный тип прокси: ","E_SETTINGS_WRONG_DATA":"Неверный формат поля data","E_SUBSCRIPTION_EXPIRED":"Ваша подписка неактивна. Пожалуйста, обновите её","E_SUBSCRIPTION_LIMITS_OTHER_TEAM":"Команда получателя переполнит свой лимит профилей","E_TEAM_ACCESS_DENIED":"Доступ запрещен","E_TEAM_DELETE_YOURSELF":"Вы не можете удалить себя","E_TEAM_NOT_FOUND":"Команда не найдена","E_TEAM_NOT_TEAMLEAD":"Не все, кого вы назначили тимлидом, имеют роль тимлидов","E_TEAM_TEAMLEADS_NON_USER_ROLE":"You should not provide teamleads for non-user role","E_TRANSFER_FREE_PLAN":"Функционал передачи профилей недоступен на бесплатных тарифах","E_USER_ACCESS_DENIED":"Нет доступа к пользователю","E_USER_NOT_ADMIN":"Действие доступно только администраторам","E_USER_NOT_FOUND":"Пользователь не найден","E_VERSION_TOO_OLD":"Кто-то из вашей команды обновил этот профиль до более свежей версии Chrome. Пожалуйста, обновите Dolphin Anty, чтобы иметь возможность запустить профиль"},"exists":"Уже существует","extension":"Расширение","extensions":"Расширения","fieldRequired":"Это поле обязательно","fileExportedToDownloads":"Файл экспортирован в загрузки","filters":"Фильтры","forgotPassword":"Не помню пароль","freeTariffCreateProfile":"Добавьте 10 профилей за $10 или перейдите на тариф Base - 100 профилей за $89 в месяц","from":"из","general":"Основное","generatePassword":"Сгенерировать пароль","getFromFile":"Из файла","headless":"Запустить в headless режиме","health":"Состояние","homepage":"Стартовая страница","host":"Хост","id":"ID","import":"Импорт","invalidCode":"Неверный код","invalidCookies":"Указанные куки пусты или недействительны","invalidCookiesLinks":"","later":"Позже","launch":"Запуск","limitsOverflowedMessage":"Вы исчерпали лимиты своего тарифа. Удалите лишние профили и/или пользователей или повысьте тариф.","linkAdd":"Добавить ссылку","linkIsOk":"","linkUpdate":"Изменить ссылку","loadMore":"Загрузить еще","logIn":"Войти","login":"Логин","mainWebsite":"Основной сайт","massImport":"Массовый импорт","name":"Название","newPassword":"Новый пароль (необяз)","newProfile":"Новый профиль","no":"Нет","noData":"Нет данных","noDataAvailable":"Отсутствуют данные","noName":"Без названия","notes":"Заметки","off":"Выкл.","on":"Вкл.","or":"Или","owner":"Владелец","page":"Страница","pages":"Страниц | Страница | Страницы | Страниц","password":"Пароль","passwordCopied":"Скопировал пароль в буфер","passwordRepeat":"Повторите пароль","pasteData":"Вставьте данные из буфера обмена","pasteOrDropCookies":"Вставьте cookies из буфера обмена или перетащите файл drag and drop","payment":"Оплатить","permissions":"Доступы","permissionsShow":"Показать доступы","platform":"Платформа","port":"Порт","profileHistory":"Журнал действий","profiles":"Профили","profilesDelete":"Удалить профили","profilesStart":"Запустить профили","profilesStop":"Остановить профили","proxiesDelete":"Удалить прокси","proxy":"Прокси","proxyChange":"Изменить прокси","proxyUtility":"Утилита прокси","randomizeFingerprint":"Рандомизировать fingerprint","register":"Зарегистрироваться","registration":"Регистрация","remindLater":"Напомнить позже","removeLink":"Удалить ссылку","removePermissions":"Снять права","renew":"Продлить","resolution":"Разрешение","restore":"Восстановить","restored":"Выбранные профиля восстановлены","role":"Роль","run":"Запустить","save":"Сохранить","saved":"Сохранил","screen":"Экран","scripts":{"createTab":{"checkboxLabel":"Приватность","checkboxOne":"Добавить только для себя и для моей команды","checkboxTwo":"Добавить для всех","h1":"Сохранить сценарий","h2":"Вы можете поделиться скриптом с другими пользователями","inputLabel":"Добавьте название скрипта","inputPlaceholder":"Введите название"},"creator":"Создатель","desc1":"Здесь будут отображены ваши сценарии","desc2":"Внимание! Это бета версия нашего нового функционала. Пожалуйста, обо всех найденных ошибках сообщайте нашей поддержке","header":"Мои сценарии","name":"Название","noData":{"btn":"Создать сценарий","h1":"Мои сценарии","h2":"Здесь будут отображены ваши сценарии"},"price":"Стоимость","tabs":{"tab1":"Мои сценарии","tab2":"Создание"}},"search":"Поиск","secondShort":"Сек","selectAll":"Выбрать все","selectTariff":"Выбрать тариф","selected":"Выбрано","send":"Отправить","settings":"Настройки","setupStarted":"Настройка браузера","share":"Поделиться","sharedToEntireTeam":"Общая для всей команды","somethingWentWrong":"Что-то пошло не так","start":"Старт","status":"Статус","statusNo":"Без статуса","statuses":"Статусы","stop":"Стоп","stopCookieRobot":"","storage":"Хранилище","subscriptionExpiredMessage":"У вас закончилась подписка.","success":"Успех","syncProfilesList":"Обновить список профилей","tags":"Теги","tariffConversion":"Нужны ещё профили? Можно докупить или перейти на новый тариф. При первой оплате с промо “WOWDOLPHIN” скидка 20%!","teamleads":"Тимлиды","transfer":"Передать","transferWithProxy":"Передать вместе с прокси","twoFactorAuthDesc":"Введите 6-значный код аутентификации, сгенерированный приложением authenticator на вашем телефоне. Если вы потеряли доступ к своему устройству аутентификации, введите один из своих резервных кодов.","twoFactorEnterCode":"Код из authenticator или один из резервных кодов","type":"Тип","unknown":"Неизвестно","unpackingStarted":"Распаковка браузера","updatePlan":"Улучшить тариф","updateProfile":"Редактировать профиль","upgrade":"Улучшить","upgradePlan":"Улучшить тариф","upload":"Загрузить","use":"Использовать","useTheLatestVersion":"Пожалуйста, всегда используйте последнюю версию приложения! Лишь в этом случае мы можем гарантировать работоспособность сервиса","user":"Пользователь","userData":"Анкета","userFields":{"bigText":"Большой текст","checkbox":"Чекбокс","checklist":"Чеклист","select":"Выпадающий список","selectMultiple":"Выпадающий список (много)","text":"Текст"},"username":"Имя пользователя","users":"Пользователи","validChromeWebstoreUrlField":"Ссылка должна начинаться с \'https://chrome.google.com/webstore/detail/\'","validCookies":"{type} формат. Куков найдено:","version":"Версия","warning":"Предупреждение","websiteNo":"Без сайта","websitesAll":"Все сайты","windowsIsNotSupported":"Внимание! Google официально перестает поддерживать Win7/8 c версии Chrome 110. С 13 февраля Dolphin{Anty} не будет работать на этих версиях ОС.<br/> Для продолжения работы рекомендуем обновить версию ПО вашего ПК.","wrongFormat":"Неверный формат","yes":"Да","you":"Вы","downloadLogs":"Скачать логи"},"dialogs":{"addBrowserProfile":{"failedConnection":"Соединение не удалось. Прокси нерабочий или на нем закрыт доступ к адресу проверки.","notYet":"Прокси еще не проверялся","successfulConnection":"Успешно."},"basket":{"title":"У вас {0} удаленных профилей","warring":"Это корзина удаленных профилей. Профили будут автоматически удалены через 48 часов после попадания в корзину"},"confirmAction":"Подтвердите действие","copyErrorText":"Пожалуйста, скопируйте ошибку и передайте в службу поддержки","deleteBrowserProfiles":{"attention":"Внимание, на Free тарифе нет корзины профилей. При удаленнии твои профили будут удалены без возможности восстановления","youAreDeleting":"Вы удаляете","youAreDeleting2":"Ты удаляешь"},"endedPlan":{"subtitle":"Оплати подписку или перейди на Free тариф","title":"Тарифный план закончился"},"feedback":{"bug":"Баг","feature":"Функционал","feedbackSent":"Спасибо! Будем на связи!","idea":"Идея","review":"Отзыв"},"freeTariff":{"buttonContinueOnFree":"Продолжить на FREE","choosePlan":"выбрать план","desc":"Не хватает профилей или членов команды? <br> В любой момент вы можете докупить еще, или перейти на более гибкий тариф: Base, Team или Enterprise","desc1":"10 профилей","desc2":"1 пользователь в команде","desc3":"Полный функционал браузерных подмен","desc4":"Облачная синхронизация данных","desc5":"Необходимое количество профилей","desc6":"Удобная работа в команде","desc7":"Автоматизация через RPA","exceededDesc":"Вы можете купить еще профили или перейти на новый тариф","exceededTitle":"Вы достигли лимита бесплатных профилей","freeAvailable":"На этом тарифе вам доступно: <br> Пользователей: 1 <br> Профилей: 10","freePlan":"Функционал Free","freeWelcomeTitle":"Привет! Твой план — Free","subscriptionFeatures":"Возможности подписки","title":"Вы используете Dolphin{anty} <br> на Free-тарифе","yourTariffFree":"Ваш тариф: "},"help":{"changeIpUrlBody":"<p>Ссылка для смены IP используется для мобильных прокси.</p><p>Если Вы не знаете, где ее взять или как пользоваться, то скорее всего Ваши прокси не мобильные или поставляются без этой ссылки.</p><p>Указывая данную ссылку, для Вас появляется возможность воcпользоваться двумя опциями Anty:</p><ul><li>Вручную менять IP адрес прокси перед очередным запуском профиля</li><li>Ссылка для смены IP адреса используется для мобильных прокси.<br>Если Вы не знаете, где ее взять или как пользоваться, то скорее всего Ваши прокси не мобильные или поставляются без этой ссылки.<br>Указав данную ссылку, у вас появится возможность отправить запрос на смену IP адреса прокси в один клик из интерфейса Dolphin{anty}. Данная функция будет доступна в столбце “Прокси”. </li></ul>","proxyBody":"<p>Возможные форматы прокси:</p><ul style=\\"font-family: monospace;\\"><li>host:port</li><li>host:port:login:password</li><li>login:password@host:port</li><li>[hostIPv6]:port:login:password</li></ul></br><p>Кроме того слева от любого из форматов можно указать тип прокси:</p><ul style=\\"font-family: monospace;\\"><li>http://192.168.0.1:8000</li><li>socks5://login:password@192.168.0.1:8000</li><li>socks4://192.168.0.1:8000:login:password</li><li>http://[2a06:c006:bd1e:00a1:2d4c:1cbd:4653:e7bc]:8000</li></ul>","proxyNameBody":"<p>Указывая имя для прокси, вы сохраняете его в Вашей библиотеке прокси.</p><p>В последствии Вы сможете указывать сохраненный прокси для новых профилей, а также привязать его к уже имеющимся профилям.</p>"},"logoutConfirmation":"Вы действительно хотите выйти?","osCompatibility":{"close":"Закрыть","desc":"Google прекратил поддержку Chrome для Windows 7/8 и macOS Sierra 10.15 или старше. Используя Dolphin{anty} на этих ОС, ты рискуешь столкнуться с критическими ошибками. Рекомендуем обновить операционную систему.","runAnyway":"Все равно запустить","title":"Проблемы совместимости браузерных профилей с твоей ОС"},"repeat":"Повторить","syncError":"Ошибка синхронизации профиля","tags":{"addTags":"Добавить теги","removeTags":"Убрать теги"},"trialPeriod":{"daysRemains":"осталось {days} дня","daysRemainsSingle":"остался {days} день","desc1":"В течении триального периода вам доступны <br> 1000 профилей и 5 юзеров. ","desc2":"После чего вы сможете продолжить работу на free-тарифе или перейти на платный тариф","expired":"Чтобы продолжать работу на тарифе Free удалите","expiredBanner":"Триальный период истек. Чтобы продолжать работу на тарифе Free удалите","extraProfiles":"лишние профили ({profilesCount})","extraUsers":"лишних юзеров ({usersCount})","orSelectDifferentTariff":", или выберите другой тариф","remainingDays":"До окончания триального периода осталось {days} дня","remainingDaysSingle":"До окончания триального периода остался {days} день","title":"Привет! Сейчас вы используете триальный период","trialPeriodExpired":"Триальный период истек"},"warning":{"createProfile":"Хорошо, все равно создать профиль","differentPlatform":"<p>Anty сделает то, о чем Вы попросите.</p><p>Но мы должны предупредить Вас, что эмуляция операционной системы, отличной от Вашей, возможна не на все 100%.</p><p>Не смотря на все рекламные заявления, которые Вы можете видеть у наших уважаемых конкурентов, есть ряд непреодолимых технических аспектов, по которым чужая ОС может быть определена.</p><p>Поэтому считаем честным и правильным проинформировать Вас об этом. Рекомендуем заводить профили с платформой, которая не отличается от вашей.</p>","doNotShowWarning":"Не показывать больше это предупреждение","updateProfile":"Хорошо, все равно редактировать профиль"}},"errors":{"uploadDenied":"Синхронизация недоступна. Профиль был запущен после Вас.","downloadLogError":"Ошибка скачивания лога"},"extensions":{"addFromChromeWebStore":"Добавить из chrome web store","extensionName":"Название расширения","uploadFile":"Загрузить файл","uploadZip":"Загрузить .zip файл"},"homepages":{"pagesLimitWarning":"Превышен лимит стартовых страниц. Допускается наличие только 10 личных стартовых страниц.","personal":"Личная","shared":"Общая"},"infoBar":{"apiPort":"Порт Api","checkForUpdates":"Проверить обновления","machineId":"ID устройства","oldUseragents":"Старые юзерагенты","plans":{"base":"Base","beta":"Beta","enterprise":"Enterprise","free":"Free","team":"Team","trial":"Trial"},"profiles":"Профили","upgradeAll":"Обновить все","users":"Пользователи"},"proxy":{"active":"Рабочий","checkYourself":"Проверьте, прежде чем добавить","createProxy":"Создать прокси","editing":"Редактирование прокси","error":"Ошибка","formats":"<p>Возможные форматы:</p><ul><li>192.168.0.1:8000</li><li>http://192.168.0.1:8000:myproxy[https://change-my-proxy.com]</li><li>socks5://login:password@192.168.0.1:8000</li><li>192.168.0.1:8000:login:password</li><li>http://[2a06:c006:bd1e:00a1:2d4c:1cbd:4653:e7bc]:8000</li></ul><br /><p>*По желанию можно добавить <b>:название</b> в конце любого варианта<br />**Если в начала вы не указываете тип прокси, система примет их за HTTP<br />***В конце для каждого прокси можно указать ссылку для смены IP в квадратных скобках</p>","noProxy":"Нет прокси"},"restrict":{"accountCallToMove":"! Перенесите все важные данные из этих аккаунтов в основной","accountsLinked":"Аккаунты, связанные с этим устройством","buttonPrimary":"Перейти на платный тариф","buttonSecond":"Тут какая-то ошибка","callBuySubscription":"Перейдите на платный тариф, чтобы снять ограничения. Для вас будет действовать промокод NOABUSE на скидку 20%","p1":"Похоже, вы используете тариф Free на нескольких аккаунтах на одном устройстве. Это запрещено правилами нашего продукта","p2Alert":"все аккаунты, кроме основного, будут заморожены. Основной аккаунт, который был первым ассоциирован с данным устройством:","p2AlertNose":"Через {days} дней | Через {days} день | Через {days} дня | Через {days} дней","p2Block":"Но ваш основной аккаунт, который был первым ассоциирован с данным устройством,","p2BlockTail":"по прежнему работает","secondScreen":{"h1":"У меня только один аккаунт, но я использую virtual dedicated server","h2":"Что если я не успею оплатить в течении 7 дней, смогу ли я сделать это позже?","h3":"У меня нет доступа к основному аккаунту","p1":"Эта проблема могла возникнуть, если ваш отпечаток VDS используют другие пользователи. Выберите VDS с выделенным уникальным отпечатком, тогда вы сможете избежать подобных ситуаций","p2End":"— они помогут перенести профили на один аккаунт, если вы не успели это сделать в течение 7 дней","p2Site":"сайт","p2Start":"Обратитесь в нашу поддержку через приложение или","p3":"Обратитесь в нашу поддержку. Мы сделаем основным другой аккаунт, к которому у вас есть доступ и вы сможете перенести профили на него"},"titleAlert":"Упс! Ограничение функционала вашего аккаунта {date}","titleBlock":"Упс! Мы заморозили несколько ваших аккаунтов на тарифе Free","tooltipPromo":"Действует при первой оплате"},"settings":{"dolphinIntegration":"Интеграция с Dolphin Facebook ads","dolphinToken":"Токен Dolphin","homepages":"Стартовые страницы","homepagesCreate":"Создать стартовые страницы","popup":{"h1":"Dolphin для рекламы в Facebook","link":"Подробнее о Dolphin","smText":"разработан специально для affiliate marketing","text":"Dolphin{anty} поддерживает интеграцию с  продуктом - Dolphin. Dolphin  позволяет работать с сотнями рекламных аккаунтов Facebook, создавать рекламу на десятках аккаунтов всего за несколько минут и экономит огромное кол-во времени. Это незаменимый инструмент для тех кто работает с Facebook ads в индустрии affiliate marketing на профессиональном уровне. Интеграция занимает меньше минуты. "},"statuses":{"addNew":"Добавить новый","createStatus":"Создать статус","deleteStatus":"Удалить статус","editStatus":"Редактировать статус","statuses":"Статусы"},"userFields":{"actions":"Действия","addItem":"Добавить элемент","allWebsites":"Все сайты","createField":"Создать поле","deleteField":"Удалить поле","example":"Пример","field":"Поле","type":"Тип","userFields":"Пользовательские поля","visibility":"Видимость"}},"payment":{"paymentTabs":{"billing":"Биллинг","settings":"Настройки","documentation":"Документация"},"alert":{"unpaidOrder":{"title":"У тебя есть неоплаченный заказ","text2":"Заказ истекает:"},"subscriptionEnd":{"title":"Срок действия тарифа истекает через","titleTail":"{days} дней | {days} день | {days} дня | {days} дней","text2":"Не забудь оплатить тариф до {0} года"},"orderInProgress":{"title":"Ваш заказ обрабатывается, пожалуйста, подождите..."},"limitError":{"title":"Лимит твоего тарифа превышен","text2":"Удали ненужные профили браузера и/или пользователей или обновите свой тариф"},"tariffExpired":{"title":"Срок действия тарифа закончился","text2":"Удали ненужные профили браузера и/или пользователей или обновите свой тариф"},"tariffPaymentFailed":{"title":"Оплата тарифа не удалась"},"tariffPaymentSuccess":{"title":"Тариф успешно оплачен","text2":"Хорошего тебе дня!"},"successfulTariffUpdate":{"title":"Тариф успешно обновлен"},"checkStatus":"Проверить статус","payNow":"Оплатить сейчас"},"billing":{"title":"Биллинг","plan":"Тариф {0}","nextPayment":"Следующий платеж на {0}","unlimited":"Безлимитный","expires":"Истекает {0}","dueDate":"Истекает {0}","disable":"Отключить автоматическое продление","changePlan":"Сменить тариф","upgradePlan":"Обновить тариф","profiles":"Профили","users":"Пользователи"},"breadcrumbs":{"checkout":"Оплата","choosePlan":"Выбери тариф","upgradePlan":"Обновить тариф","goToBilling":"Вернуться в Биллинг","back":"Вернуться"},"choosePlan":{"title":"Выбери тариф","prolongMonths":{"months":"Нет месяцев | Месяц | Месяца | Месяцев","month":"месяц","noProlong":"Без продления"},"card":{"profilesCount":"До {0} браузерных профилей","user":"{0} пользователь","forFeatures":"Для начинающих","collaborationTeam":"Для соло и небольших команд","profitableTeam":"Для команд побольше","forLargeTeam":"Для больших команд и компаний","addBrowserProfiles":"${0} за каждые 10 дополнительных профилей","addBrowserProfilesWithSale":"${0} <span>${1}</span> за каждые 10 дополнительных профилей","addUsers":"${0} за дополнительного пользователя","addUsersWithSale":"${0} <span>${1}</span> за дополнительного пользователя","currentPlan":"Текущий план"},"dialog":{"getMoreProfiles":"Хочешь больше браузерных профилей?","contactForIndividualOffer":"Свяжись с нами, чтобы получить любое количество профилей. Для","specialOffer":" крупных клиентов мы предлагаем индивидуальные условия."},"profilesDoYouNeed":"Сколько браузерных профилей тебе нужно?","howManyAdditionalUsers":"Сколько дополнительных пользователей?","usersDoYouNeed":"Сколько дополнительных пользователей тебе нужно?","priceAdditionalProfiles":"Цена за профили:","priceAdditionalUsers":"Цена за пользователей:","subTotal":"Всего:","withoutPaymentSystemFee":"Без комиссии платежной системы","individualConditions":"Хочешь индивидуальные условия?"},"upgradePlan":{"title":"Обновить тариф <span>{0}</span>","availableTextAlert":"У тебя останется {0} дней при обновлении тарифа с новыми условиями","sale":"Скидка","subscriptionPeriod":"Период оплаты","resetTooltip":"Сброс к текущим настройкам тарифного плана"},"buttons":{"contactUs":"Написать нам","save":"Сохранить","goToPayment":"Перейти к оплате","reset":"Сбросить","upgradePlan":"Обновить тариф"},"checkout":{"title":"Оплата","subscriptionPeriod":"Период оплаты","method":"Способ оплаты","paymentFor":"Оплата тарифа в dolphin-anty.com","summary":{"orderSummary":"К оплате","plan":"Тариф {type}","discount":"Скидка ({0}%)","users":"Пользователи, {0} шт.","profiles":"Профили, {0} шт.","paymentSystemFee":"Коммиссия платежной системы {0}%","estimatedTax":"Предполагаемый налог ({0}%)","discountForUnusedPlan":"Скидка за неиспользованный тарифный план","total":"Итого","iHavePromo":"У меня есть промокод","promoCodeIsInvalid":"Промокод недействителен","successfullyActivated":"Успешно активирован","apply":"Применить","promo":"Промокод","yourSubscriptionWillRenew":"Ваша подписка будет автоматически продлена {0}","youCanCancelYourSubscription":"Вы можете отменить подписку в любое время до этой даты","youWillBeRedirected":"Вы будете перенаправлены на страницу оплаты. Если этого не произошло, перейдите по ссылке ниже:","payNow":"Оплатить сейчас","errors":{"promoForFirstPayment":"Данный промокод действителен только при первой оплате","promoLimitExceed":"Промокод недействителен","somethingWentWrong":"Что-то пошло не так. Пожалуйста, свяжитесь с саппортом."}},"paymentMethod":{"stablecoins":"Стейблкоины","card":"Карта","eWallet":"Эл. деньги","crypto":"Крипта"},"fee":"Комиссия {0}%","cardMethods":{"switcherLabel":"У меня карта российского банка","country":"Страна","postalCode":"Почтовый индекс","companyInformation":"Информация о компании (необязательно)","companyInformationDesk":"Эта информация будет отображаться в вашем счете и использоваться для расчета налогов","bigButton":"Добавить информацию о компании","companyNameLabel":"Название компании","addressLine1":"Адрес 1","addressLine2":"Адрес 2","city":"Город","stateRegion":"Область / Район","vatId":"VAT ID","purchaseOrder":"Номер заказа #","placeHolderPostcode":"Почтовый индекс"}}},"sidebar":{"automation":"Автоматизация","automationScenario":"Запуск сценария","automationScenarioMenu":{"automation":"Автоматизации","edit":"Автоматизации редактирования","login":"Автоматизации логина","management":"Управление скриптами"},"bookmarks":"Закладки","browserProfiles":"Браузеры","dolphinAntyStatus":"Статус Dolphin Anty","extensions":"Расширения","feedback":"Обратная связь","flow":"Сценарии","flowDisabledOnFree":"Только на платных тарифах","lessThanLeft":"Осталось меньше {0} дней","logOut":"Выйти","payNow":"Оплатить","proxy":"Прокси","settings":"Настройки","subscriptionExpired":"Тариф закончился","support":"Поддержка","users":"Пользователи"},"update":{"buttonCancel":"Позже","buttonOk":"Установить","title":"Доступно обновление {version}"},"users":{"createUser":"Создать пользователя","deleteUserWarning":"При удалении пользователя будут удалены все браузерные профили, которые созданы этим пользователем.","editUser":"Редактировать пользователя","roles":{"admin":"Админ","teamlead":"Тимлид","user":"Пользователь"}},"validation":{"max":"Поле не может быть более {length} символов"},"validationNew":{"accepted":"Вы должны принять {attribute}.","active_url":"Поле {attribute} содержит недействительный URL.","after":"В поле {attribute} должна быть дата больше :date.","after_or_equal":"В поле {attribute} должна быть дата больше или равняться :date.","alpha":"Поле {attribute} может содержать только буквы.","alpha_dash":"Поле {attribute} может содержать только буквы, цифры, дефис и нижнее подчеркивание.","alpha_num":"Поле {attribute} может содержать только буквы и цифры.","array":"Поле {attribute} должно быть массивом.","before":"В поле {attribute} должна быть дата раньше :date.","before_or_equal":"В поле {attribute} должна быть дата раньше или равняться :date.","between":{"array":"Количество элементов в поле {attribute} должно быть между :min и :max.","file":"Размер файла в поле {attribute} должен быть между :min и :max Килобайт(а).","numeric":"Поле {attribute} должно быть между :min и :max.","string":"Количество символов в поле {attribute} должно быть между :min и :max."},"boolean":"Поле {attribute} должно иметь значение логического типа.","confirmed":"Поле {attribute} не совпадает с подтверждением.","date":"Поле {attribute} не является датой.","date_equals":"Поле {attribute} должно быть датой равной :date.","date_format":"Поле {attribute} не соответствует формату :format.","different":"Поля {attribute} и :other должны различаться.","digits":"Длина цифрового поля {attribute} должна быть :digits.","digits_between":"Длина цифрового поля {attribute} должна быть между :min и :max.","dimensions":"Поле {attribute} имеет недопустимые размеры изображения.","distinct":"Поле {attribute} содержит повторяющееся значение.","email":"Поле {attribute} должно быть действительным электронным адресом.","ends_with":"Поле {attribute} должно заканчиваться одним из следующих значений: {values}","exists":"Выбранное значение для {attribute} некорректно.","file":"Поле {attribute} должно быть файлом.","filled":"Поле {attribute} обязательно для заполнения.","gt":{"array":"Количество элементов в поле {attribute} должно быть больше {value}.","file":"Размер файла в поле {attribute} должен быть больше {value} Килобайт(а).","numeric":"Поле {attribute} должно быть больше {value}.","string":"Количество символов в поле {attribute} должно быть больше {value}."},"gte":{"array":"Количество элементов в поле {attribute} должно быть {value} или больше.","file":"Размер файла в поле {attribute} должен быть {value} Килобайт(а) или больше.","numeric":"Поле {attribute} должно быть {value} или больше.","string":"Количество символов в поле {attribute} должно быть {value} или больше."},"image":"Поле {attribute} должно быть изображением.","in":"Выбранное значение для {attribute} ошибочно.","in_array":"Поле {attribute} не существует в :other.","integer":"Поле {attribute} должно быть целым числом.","ip":"Поле {attribute} должно быть действительным IP-адресом.","ipv4":"Поле {attribute} должно быть действительным IPv4-адресом.","ipv6":"Поле {attribute} должно быть действительным IPv6-адресом.","json":"Поле {attribute} должно быть JSON строкой.","length_between":"Длина поля должна быть между  {min} и {max}","lt":{"array":"Количество элементов в поле {attribute} должно быть меньше {value}.","file":"Размер файла в поле {attribute} должен быть меньше {value} Килобайт(а).","numeric":"Поле {attribute} должно быть меньше {value}.","string":"Количество символов в поле {attribute} должно быть меньше {value}."},"lte":{"array":"Количество элементов в поле {attribute} должно быть {value} или меньше.","file":"Размер файла в поле {attribute} должен быть {value} Килобайт(а) или меньше.","numeric":"Поле {attribute} должно быть {value} или меньше.","string":"Количество символов в поле {attribute} должно быть {value} или меньше."},"max":{"array":"Количество элементов в поле {attribute} не может превышать :max.","file":"Размер файла в поле {attribute} не может быть больше :max Килобайт(а).","numeric":"Поле {attribute} не может быть больше :max.","string":"Количество символов в поле {attribute} не может превышать :max."},"mimes":"Поле {attribute} должно быть файлом одного из следующих типов: {values}.","mimetypes":"Поле {attribute} должно быть файлом одного из следующих типов: {values}.","min":{"array":"Количество элементов в поле {attribute} должно быть не меньше :min.","file":"Размер файла в поле {attribute} должен быть не меньше :min Килобайт(а).","numeric":"Поле {attribute} должно быть не меньше :min.","string":"Количество символов в поле {attribute} должно быть не меньше :min."},"multiple_of":"","not_in":"Выбранное значение для {attribute} ошибочно.","not_regex":"Выбранный формат для {attribute} ошибочный.","numeric":"Поле {attribute} должно быть числом.","password":"Неверный пароль.","present":"Поле {attribute} должно присутствовать.","regex":"Поле {attribute} имеет ошибочный формат.","required":"Поле {attribute} обязательно для заполнения.","required_if":"Поле {attribute} обязательно для заполнения, когда :other равно {value}.","required_unless":"Поле {attribute} обязательно для заполнения, когда :other не равно {values}.","required_with":"Поле {attribute} обязательно для заполнения, когда {values} указано.","required_with_all":"Поле {attribute} обязательно для заполнения, когда {values} указано.","required_without":"Поле {attribute} обязательно для заполнения, когда {values} не указано.","required_without_all":"Поле {attribute} обязательно для заполнения, когда ни одно из {values} не указано.","same":"Значения полей {attribute} и :other должны совпадать.","size":{"array":"Количество элементов в поле {attribute} должно быть равным :size.","file":"Размер файла в поле {attribute} должен быть равен :size Килобайт(а).","numeric":"Поле {attribute} должно быть равным :size.","string":"Количество символов в поле {attribute} должно быть равным :size."},"starts_with":"Поле {attribute} должно начинаться из одного из следующих значений: {values}","string":"Поле {attribute} должно быть строкой.","timezone":"Поле {attribute} должно быть действительным часовым поясом.","unique":"Такое значение поля {attribute} уже существует.","uploaded":"Загрузка поля {attribute} не удалась.","url":"Поле {attribute} имеет ошибочный формат URL."}}')
    }, 7948: function (e, t, a) {
        "use strict";
        var o = a("c1df"), s = a.n(o);
        t.a = {
            methods: {
                async checkFreeSubscriptionTariff() {
                    if ("free" === this.subscription.plan && !this.subscription.expiration) try {
                        var {
                            success: e,
                            lastShow: t
                        } = (await this.localApi(`/check-popup-last-show/${this.profile.id}/free-unpaid-tariff`))["data"];
                        e && !t && await this.$store.dispatch("main/openDialog", "freeUnpaidTariff")
                    } catch (e) {
                        console.log(e, "Error on getting popup last show")
                    }
                }, async checkSubscriptionForFreeTariff(e, t) {
                    var a;
                    if (["A", "B"].includes(e.freeToPayConversionGroup) && (null == (a = e.team) || !a.hadTransactions) && "free" === t.plan.toLowerCase()) {
                        const e = s()(new Date), {
                                success: a,
                                lastShow: o
                            } = (await this.localApi(`/check-popup-last-show/${this.profile.id}/free-profiles-limit`))["data"],
                            r = t.browserProfiles.count >= t.browserProfiles.limit;
                        if (!t.browserProfiles.additionalProfiles && !t.users.additionalUsers) if (this.$store.dispatch("experiments/setFreePeriod", !0), a && o) {
                            const t = s.a.duration(e.diff(s()(o))), a = t.asDays();
                            4 <= a && (await this.localApi.post(`/check-popup-last-show/${this.profile.id}/free-profiles-limit`, {lastShow: e}), await this.$store.dispatch("experiments/openDialog", "freeTariff"))
                        } else await this.localApi.post(`/check-popup-last-show/${this.profile.id}/free-profiles-limit`, {lastShow: e});
                        r ? this.$store.dispatch("experiments/setFreeTariffExtraBrowserProfiles", !0) : this.$store.dispatch("experiments/setFreeTariffExtraBrowserProfiles", !1)
                    }
                }, async checkForTariffExperiments(e, t) {
                    await this.checkSubscriptionForFreeTariff(e, t), await this.checkForTariffExpiration(t)
                }, async checkForTariffExpiration(e) {
                    null != e && e.expiration && this.getDaysUntilExpiration(null == e ? void 0 : e.expiration) <= 3 ? await this.$store.dispatch("main/setBanners", {
                        key: "expiresPlan",
                        value: !0
                    }) : await this.$store.dispatch("main/setBanners", {key: "expiresPlan", value: !1})
                }, getDaysUntilExpiration(e) {
                    var t = (new Date).getTime(), e = new Date(e).getTime() - t;
                    return Math.round(e / 864e5)
                }
            }
        }
    }, "845e": function (e, t, a) {
    }, "86ca": function (e, t, a) {
        e.exports = a.p + "img/faceanty.f96dedf2.png"
    }, "87b8": function (e, t, a) {
    }, a16a: function (e, t, a) {
        "use strict";
        var o = a("2f62"), r = a("c1df"), s = a.n(r), r = {
            name: "BrowserProfilesMainTableCellLastEdited",
            props: {browserProfile: {type: Object, default: () => ({id: 0})}},
            data() {
                return {moment: s.a}
            },
            computed: {
                ...Object(o.c)({profile: "main/profile"}), updatedAt() {
                    var e, t, a,
                        o = this.moment(this.browserProfile.updated_at).format("YYYY-MM-DDTHH:mm:ss") + "+03:00";
                    try {
                        return parseInt(this.moment(o).unix()) + 59 < parseInt(Date.now() / 1e3) ? this.moment.parseZone(o).local().locale(this.profile.language).format("DD MMM HH:mm") : (e = parseInt(Date.now() / 1e3, 10), t = parseInt(this.moment.parseZone(o).local().locale(this.profile.language).unix(), 10), (a = Math.abs(e - t || 1)) + " " + this.$tc("browserProfiles.secondsAgo", a))
                    } catch (e) {
                        return this.moment.parseZone(o).local().locale(this.profile.language).format("DD MMM HH:mm")
                    }
                }
            }
        }, o = a("2877"), a = Object(o.a)(r, function () {
            var e = this;
            return (0, e._self._c)("span", {
                staticClass: "text-capitalize",
                attrs: {id: "browserProfilesMainTableCellLastEdited"}
            }, [e._v(" " + e._s(e.browserProfile.updated_at ? e.updatedAt : "-") + " ")])
        }, [], !1, null, null, null);
        t.a = a.exports
    }, acb1: function (e, t, a) {
    }, b38e: function (e, t, a) {
        "use strict";
        var o = a("8336"), r = a("132d"), s = a("3a2f"), i = (a("14d9"), a("c1df")), n = a.n(i), i = a("2f62"),
            l = a("5935"), i = {
                name: "BrowserProfilesMainTableCellProxy",
                components: {ExpiredPlanDisabledWrapper: a("fe3a").a},
                props: {
                    browserProfile: {type: Object, default: () => ({id: 0})},
                    doNotChange: {type: Boolean, default: !1}
                },
                data() {
                    return {
                        moment: n.a,
                        loadingChangeIpUrl: !1,
                        changeIpResponse: null,
                        loadingCheckProxy: !1,
                        responseSuccess: null,
                        responseMessage: null
                    }
                },
                computed: {
                    ...Object(i.c)({
                        pagination: "browserProfiles/pagination",
                        disableUi: "main/disableUi"
                    }), ...Object(l.b)("proxy", ["proxies"]), proxy() {
                        return this.proxies.all.find(e => parseInt(e.id, 10) === parseInt(this.browserProfile.proxyId, 10)) || null
                    }, proxyInput() {
                        return this.browserProfile.proxy && this.browserProfile.proxy.name ? this.browserProfile.proxy.name : this.browserProfile.proxy && !this.browserProfile.proxy.name ? this.$t("common.noName") : "-"
                    }, lastCheckExists() {
                        return null !== this.proxy && this.proxy.lastCheck && void 0 !== this.proxy.lastCheck.status && void 0 !== this.proxy.lastCheck.createdAt
                    }
                },
                methods: {
                    async changeProxy() {
                        await this.$store.dispatch("browserProfiles/setBrowserProfileForEdit", this.$_.cloneDeep(this.browserProfile)), this.$store.dispatch("browserProfiles/openDialog", "changeProxyFromCell")
                    }, async changeIpUrl() {
                        if (null !== this.proxy) try {
                            this.loadingChangeIpUrl = !0;
                            var e = await this.localApi(`/browser_profiles/${this.browserProfile.id}/change_proxy_ip`);
                            if (200 !== e.status || !e.data) throw e;
                            switch (this.responseSuccess = e.data.success, e.data.success) {
                                case!0:
                                    await this.$store.dispatch("browserProfiles/loadBrowserProfiles", {
                                        page: this.pagination.currentPage,
                                        itemsPerPage: this.pagination.perPage,
                                        query: this.pagination.query,
                                        tags: this.pagination.tags,
                                        mainWebsites: this.pagination.mainWebsites,
                                        statuses: this.pagination.statuses,
                                        users: this.pagination.users
                                    }), this.responseMessage = e.data.response;
                                    break;
                                case!1:
                                    this.responseMessage = {data: e.data.data, error: e.data.error}
                            }
                            setTimeout(() => {
                                this.responseSuccess = null, this.responseMessage = null
                            }, 3e4)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            this.loadingChangeIpUrl = !1
                        }
                    }, async checkProxy() {
                        if (null !== this.proxy) try {
                            var e, t, a;
                            this.loadingCheckProxy = !0, this.proxies.checking.includes(this.proxy.id) || (this.proxies.checking.push(this.proxy.id), e = this.proxy.login && this.proxy.password ? {
                                type: this.proxy.type,
                                host: this.proxy.host,
                                port: this.proxy.port,
                                login: this.proxy.login,
                                password: this.proxy.password
                            } : {
                                type: this.proxy.type,
                                host: this.proxy.host,
                                port: this.proxy.port
                            }, t = await this.localApi.post("/check/proxy", e), this.proxies.checking = this.proxies.checking.filter(e => parseInt(e, 10) !== parseInt(this.proxy.id, 10)), await this.api.post(`/proxy/${this.proxy.id}/last_check`, {
                                city: t.data.city || void 0,
                                country: t.data.country || void 0,
                                ip: t.data.ip || void 0,
                                region: t.data.region || void 0,
                                status: !!t.data.success && t.data.success,
                                timezone: t.data.timezone || void 0
                            }), a = {
                                page: this.pagination.currentPage,
                                itemsPerPage: this.pagination.perPage,
                                query: this.pagination.query,
                                tags: this.pagination.tags,
                                mainWebsites: this.pagination.mainWebsites,
                                statuses: this.pagination.statuses,
                                users: this.pagination.users
                            }, this.$store.dispatch("browserProfiles/loadBrowserProfiles", a))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            await this.$store.dispatch("proxy/loadProxiesByCurrentBrowserProfilesPage"), this.loadingCheckProxy = !1
                        }
                    }
                }
            }, l = (a("5cf8"), a("2877")), a = Object(l.a)(i, function () {
                var t = this, a = t._self._c;
                return a("div", {
                    staticStyle: {
                        "font-size": "12px",
                        "word-break": "break-all"
                    }
                }, [!t.doNotChange && t.proxy ? a(s.a, {
                    attrs: {top: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [t.proxy.lastCheck ? a("expired-plan-disabled-wrapper", [a(o.a, t._g({
                                attrs: {
                                    "x-small": "",
                                    icon: "",
                                    loading: t.loadingCheckProxy,
                                    color: t.proxy.lastCheck.status ? "green" : "red",
                                    disabled: t.disableUi
                                }, on: {click: t.checkProxy}
                            }, e), [a("ion-icon", {
                                staticStyle: {"font-size": "14px"},
                                attrs: {name: "swap-horizontal-outline"}
                            })], 1)], 1) : a("expired-plan-disabled-wrapper", [a(o.a, t._g({
                                attrs: {
                                    "x-small": "",
                                    icon: "",
                                    loading: t.loadingCheckProxy,
                                    disabled: t.disableUi
                                }, on: {click: t.checkProxy}
                            }, e), [a("ion-icon", {
                                staticStyle: {"font-size": "14px"},
                                attrs: {name: "swap-horizontal-outline"}
                            })], 1)], 1)]
                        }
                    }], null, !1, 4005421095)
                }, [a("span", [t._v(t._s(t.$t("common.checkConnection")))])]) : t._e(), !t.doNotChange && t.proxy && t.proxy.changeIpUrl ? a(s.a, {
                    attrs: {top: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [a("expired-plan-disabled-wrapper", [a(o.a, t._g({
                                attrs: {
                                    "x-small": "",
                                    icon: "",
                                    loading: t.loadingChangeIpUrl,
                                    color: null === t.responseSuccess ? "default" : t.responseSuccess ? "green" : "red",
                                    disabled: t.disableUi
                                }, on: {click: t.changeIpUrl}
                            }, e), [a("ion-icon", {
                                staticStyle: {"font-size": "14px"},
                                attrs: {name: "refresh-outline"}
                            })], 1)], 1)]
                        }
                    }], null, !1, 476300433)
                }, [a("span", [t._v(t._s(null === t.responseMessage ? t.$t("common.changeIp") : t.responseMessage))])]) : t._e(), t._v(" " + t._s(t.proxyInput) + " "), a("expired-plan-disabled-wrapper", [t.doNotChange ? t._e() : a(o.a, {
                    staticClass: "anty-proxy-edit-pencil",
                    attrs: {icon: "", "x-small": "", color: "primary", disabled: t.disableUi},
                    on: {click: t.changeProxy}
                }, [a(r.a, {attrs: {size: 12}}, [t._v(" fas fa-pencil-alt ")])], 1)], 1), t.proxy ? a("div", [t.lastCheckExists ? a("div", {staticClass: "d-flex align-center"}, [t.proxy.lastCheck.status ? a("div", {
                    staticClass: "ml-1",
                    staticStyle: {"font-size": "12px", color: "#9E9E9E", "min-width": "120px"}
                }, [a("div", [void 0 !== t.proxy.lastCheck.ip && void 0 !== t.proxy.lastCheck.country ? a("flag", {
                    staticStyle: {
                        width: "16px",
                        "background-size": "100%"
                    }, attrs: {iso: t.proxy.lastCheck.country.toLowerCase()}
                }) : t._e(), void 0 !== t.proxy.lastCheck.ip ? a("span", {staticStyle: {"margin-left": "2px"}}, [t._v(" " + t._s(t.proxy.lastCheck.ip) + " ")]) : t._e()], 1)]) : t._e()]) : t._e()]) : t._e()], 1)
            }, [], !1, null, null, null);
        t.a = a.exports
    }, b731: function (e, t, a) {
    }, bc36: function (e, t, a) {
        e.exports = a.p + "img/hand_emoji.9e34bd8f.svg"
    }, bf86: function (e, t, a) {
        "use strict";
        a("364b")
    }, cf05: function (e, t, a) {
        e.exports = a.p + "img/logo.38f21525.png"
    }, d57b: function (e, t, a) {
    }, da22: function (e, t, a) {
        "use strict";
        a("450b")
    }, dd20: function (e, t, a) {
        "use strict";
        a("0bb0")
    }, e29d: function (e, t, a) {
        "use strict";
        var o = a("c6a6"), r = a("f41f");
        a("14d9");
        var s = {
            name: "Pagination",
            props: {
                disablePagination: {type: Boolean, default: !1},
                shortPagination: {type: Boolean, default: !1},
                goToPagePayload: {type: Object, default: () => ({})},
                goToPageAction: {type: String, default: ""},
                pagination: {type: Object, default: () => ({})},
                footerOptions: {type: Object, default: () => ({})},
                itemsPerPage: {type: Array, default: () => [25, 50, 100]}
            },
            computed: {
                footerPagination() {
                    var e = {};
                    return e.page = this.pagination.currentPage, e.itemsPerPage = this.pagination.perPage, e.pageStart = this.pagination.from - 1, e.pageStop = this.pagination.to, e.pageCount = this.pagination.lastPage, e.itemsLength = this.pagination.total, e
                }, pages() {
                    var t = [];
                    if (this.footerPagination && this.footerPagination.pageCount) for (let e = 1; e <= this.footerPagination.pageCount; e++) t.push(e);
                    return t
                }
            },
            methods: {
                updateFooterOptions(e) {
                    e = {
                        page: e.page,
                        itemsPerPage: e.itemsPerPage,
                        query: this.pagination.query, ...this.goToPagePayload
                    };
                    this.$store.dispatch(this.goToPageAction, e)
                }, goToPage(e) {
                    e = {
                        page: e,
                        itemsPerPage: this.pagination.perPage,
                        query: this.pagination.query, ...this.goToPagePayload
                    };
                    this.$store.dispatch(this.goToPageAction, e)
                }
            }
        }, a = a("2877"), a = Object(a.a)(s, function () {
            var e = this, t = e._self._c;
            return e.goToPagePayload ? t(r.a, {
                staticClass: "footer-with-custom-pager",
                attrs: {
                    "show-first-last-page": !e.shortPagination,
                    "disable-items-per-page": e.disablePagination,
                    "disable-pagination": e.disablePagination,
                    options: e.footerOptions,
                    pagination: e.footerPagination,
                    "items-per-page-options": e.itemsPerPage
                },
                on: {"update:options": e.updateFooterOptions},
                scopedSlots: e._u([e.shortPagination ? null : {
                    key: "page-text", fn: function () {
                        return [t("div", {staticClass: "d-flex justify-between align-center"}, [t(o.a, {
                            staticClass: "compact-input footer-select-page",
                            attrs: {
                                value: e.pagination.currentPage,
                                items: e.pages,
                                disabled: e.disablePagination,
                                dense: "",
                                "hide-details": ""
                            },
                            on: {change: e.goToPage},
                            scopedSlots: e._u([{
                                key: "prepend", fn: function () {
                                    return [t("div", {staticStyle: {"margin-top": "2px"}}, [e._v(" " + e._s(e.$t("common.page") + ": ") + " ")])]
                                }, proxy: !0
                            }], null, !1, 2525780348)
                        }), t("span", {
                            staticClass: "ml-9",
                            attrs: {id: "browserProfilesMainTableFooterPaginationInfo"}
                        }, [e._v(" " + e._s(`${e.footerPagination.itemsLength ? e.footerPagination.pageStart + 1 : 0} - ${e.footerPagination.itemsLength ? e.footerPagination.pageStop : 0} ${e.$t("common.from")} ` + e.footerPagination.itemsLength) + " ")])], 1)]
                    }, proxy: !0
                }], null, !0)
            }) : e._e()
        }, [], !1, null, "2da375ee", null);
        t.a = a.exports
    }, e393: function (e, t, a) {
        "use strict";
        a("65b2")
    }, ed5c: function (e, t, a) {
        "use strict";
        a("4b17")
    }, edd4: function (e) {
        e.exports = JSON.parse('{"authorization":{"emailIsTaken":"Email is already taken","fieldEmail":"This field should be email","fieldRequired":"This field is required","generatePassword":"Generate password","hidePassword":"Hide password","invalidUsernamePassword":"Error! You entered the wrong login or password. Please check your input data and try logging in again.","needCaptcha":"Captcha required","passwordLength":"Password should contain at least 5 symbols","passwordRepeat":"Those passwords didn\'t match","promoCode":"Promo code","promoCodeNotFound":"Promo code not found","rateLimitExceed":"Too many authorization attempts. Try again in an hour.","showPassword":"Show password","somethingWentWrong":"Something went wrong","wrongLogin":"Captcha required! Wrong email or password. Try again or click Forgot password to reset it."},"automation":{"businessDescriptionLabel":"Please provide a brief description of your business.*","businessDescriptionPlaceholder":"Example: My site sells clothing online to consumers in the UK.","issueDescriptionLabel":"Summary of the issue*","issueDescriptionPlaceholder":"Please be as detailed as possible.","onboardingSubmit":"Submit","onboardingText1":"This feature will help you automatically submit an appeal to unsuspend an account  that has been suspension by Google.","onboardingText2":"The service will fill out the \\"     <a\\n                target=\\"_blank\\"\\n                href=\\"https://support.google.com/google-ads/contact/pf_suspended?ctx=123\\"\\n>Account suspension due to violation of Terms & Conditions </a>\\" form based on your advertising campaign and billing information.","onboardingTitle":"Automation of unblocking","start":"Start"},"browserProfiles":{"PasteCommandLineSwitches":"Paste command line switches each on a new line","accuracy":"Accuracy","accuracyError":"Accuracy can be set from 1 to 1000","addNoise":"Add noise","altered":"Altered","audio":"Audio","auto":"Auto","automation":"Automation","banners":{"expiresPlan":{"payNow":"PAY NOW","tariffExpires":"The plan expires after {0} {1}. Don\'t forget to pay it before","usageLimitExceeded":"Your plan has ended. Pay for the subscription or switch to a free plan to continue using Dolphin{anty}."},"twoFactor":{"aboutHow":"about how enabling 2fa will save your account from being hacked","enable2factor":"Enable 2fa","learnMore":"Learn more","protectYourAcc":"Protect your account with two-factor authentication"},"incorrectTime":{"fixYourTime":"The time on your computer is different from the time of the Dolphin{anty} server.\\nTo avoid problems with launching profiles and cloud data synchronization, set the correct time on your computer."}},"bits":"bits | bits","bringToTop":"Bring to Top","browserNotDownloaded":"Browser core was not downloaded. Click on \\"health\\" link on the bottom and download it or just restart app.","browserProfileNotStarted":"Browser not started","cameras":"Video inputs","changeWebgl":"Change WebGL Info to be able to customize WebGPU","chromeNotFound":"Chrome not found","commandLineSwitches":"Command line switches","cookieRobot":"Cookie robot","cookieRobotFailed":"Cookie robot - an error with opening profile was occurred","cookieRobotFinished":"Cookie robot has finished work","cookieRobotStarted":"Cookie robot has start work","cookieRobotSubtitle":"Cookie robot collects cookies from different web-sites","cookiesFromFile":"Cookies From file","core":"core | cores | cores","cpu":"Cpu","deleteDisabledTooltip":"Some of profiles have no deleting permissions","deviceName":"DeviceName","deviceNameInfo":"Device name - name of the device from which the start is switched","dialogShare":{"noSharedPermissions":"No shared permissions","permissions":{"delete":"Delete","share":"Share","startStop":"Start/Stop","update":"Update","view":"View"},"permissionsFor":"Permissions for"},"dragNDropOrPasteCookies":"Paste your cookies or drag and drop your file here","dynamics":"Audio outputs","errorAtLeast3Symbols":"This field should contain at least 3 symbols","errorAtLeast5Symbols":"This field should contain at least 5 symbols","errors":{"downloadDatadirError":"Error while downloading data from cloud storage","errorDownloadAndUnpack":"Download and unpack error","errorMirrorDownload":"Mirror download error","errorRemoteApi":"Failed to get response from Remote API","failedToGetIPData":"Failed to get IP data: Check your proxy connection"},"exportCookies":"Export cookies","exportDisabledTooltip":"Some of profiles have no export cookies permissions","exportedCookiesToDownloads":"Cookies were exported to downloads","extensionSync":"Extension sync","extensionSyncButton":"Sync","extensionSyncText":"<p><strong>Warning. Before you do this, please read what this functionality is for and how it works:</strong><br>\\n– This functionality is only needed for those who work with browser profiles on different physical devices and have problems with losing data in browser extensions.<br>\\n– After activation, all data in the extensions will be erased and will need to be re-entered. Make sure you have saved all the necessary data from the extensions before doing this.<br>\\n– After activating this feature, your browser profiles will start to synchronize data between physical devices, problems with authorization in extensions metamask, scenum, etc. will disappear.</p>\\n<p><strong>Why it’s not possible otherwise:</strong><br>\\nCurrently, chrome generates extension IDs by hashing the path to the folder with that extension.<br>\\nTo synchronize the settings on any operating system and on different PCs, we had to change the function responsible for generating the ID and make the result be the same on any OS. That’s why settings of extensions which use standard names will be lost. Before transferring to the new names, we advise you to make a backup of settings.</p>\\n","forProfile":"for profile","forceStop":"Force stop","fromFile":"From file","gb":"Gb","geolocation":"Geolocation","importCookies":"Import cookies","installChrome":"install Chrome","installChromeEnd":" and restart the app.","installChromeStart":"Our system uses regular Chrome in its base. It needs to be installed on your computer. Please","ipAddress":"IP address","language":"Language","languageError":"Choose language","languageSelect":"Switch language","latitude":"Latitude","latitudeError":"Latitude can be set from -90 to 90","launch":"Launch","learnSyncError":"Sync error. Click to see more","log":{"first":"First","new":"New","old":"Old","session":"Session","sessionTime":"Session time","start":"Start","stop":"Stop","update":"Update"},"loginOrPasswordEmpty":"This field must also be filled","longitude":"Longitude","longitudeError":"Longitude can be set from -90 to 90","macAddress":"MAC address","macAddressInfo":"MAC address is the unique physical address of the device","mainWebsite":"Main website","mainWebsites":"Main websites","managedProfile":"Managed Profile","manual":"Manual","manually":"MANUALLY","master":"Master","masterProfile":"Master profile","mediaDevices":"Media devices","memory":"Memory","microphones":"Audio inputs","multipleImport":{"imported":"Not imported | Imported | Imported | Imported","invalidData":"Invalid data","profiles":"no profiles | profile | profiles | profiles"},"multipleImportHeaders":{"cookie":"Cookie","notion":"Notion","profileName":"Profile name","proxy":"Proxy","proxyType":"Proxy type","userAgent":"User agent"},"newFingerprint":"New fingerprint","newProfile":"New profile","noStatus":"No status","noWebsite":"No website","noise":"Noise","off":"Off","order":{"asc":"Ascending","desc":"Descending","label":"Order"},"parallelStartWarning":"Running a browser profile in parallel on multiple devices can lead to unexpected errors and data loss. Do you want to continue?","pinToTop":"Pin to top","ports":"Ports","portsToProtect":"Ports to protect","profileIsLaunchedBy":"Profile is launched by","profiles":"profiles | profile | profiles | profiles","protect":"Protect","proxies":"Proxies","proxy":{"changeIpUrl":"Change IP URL","changeProxyIp":"Change proxy IP","host":"Host","newProxy":"New proxy","newProxyError":"New proxy should contain at least type, host and port","noProxy":"No proxy","optional":"Optional","port":"Port","proxyName":"Proxy name","proxySave":"Save proxy","proxySelect":"Select proxy","savedProxies":"Saved proxies"},"random":"Random","real":"Real","realGeo":"Real","realMultiple":"Real","renderer":"Renderer","screenWarning":"You are going to launch browser profile which has screen resolution more than your physical","searchField":"Search (press /)","secondsAgo":"seconds ago | second ago | seconds ago | seconds ago","shareDisabledTooltip":"Some of profiles have no sharing permissions","software":"Software","sortBy":{"created_at":"Created at","label":"Sort by","name":"Name","notes":"Notes","proxy":"Proxy","tags":"Tags","totalSessionDuration":"Total Session Duration","updated_at":"Updated at"},"startAnyway":"Start anyway","startSynchronizer":"Start synchronizer","successfullyAdded":"Successfully added","synchronizer":"Synchronizer","synchronizerPlan":"Available on paid plans","synchronizerAlert":"You are trying to launch an already running profile in the synchronizer","synchronizerHint":"The actions you perform in the master profile will be repeated in managed profiles. More details in the","synchronizerHint2":"documentation.","synchronizerLaunched":"Synchronizer started","synchronizerStopped":"Synchronizer stopped","synchronizerTitle":"Launch {count} profiles via synchronizer | Launch {count} profile via synchronizer | Launch {count} profiles via synchronizer | Launch {count} profiles via synchronizer","timezone":"Timezone","timezoneError":"Choose timezone","timezoneSelect":"Select timezone","title":"Profile name","transfer":"Transfer","transferEmptyUser":"Select user","transferProfiles":"Transfer profiles","transferYourSelf":"You can\'t transfer a profile to yourself!","turnedOff":"OFF","unpinFromTop":"Unpin from top","useragentError":"Set useragent","vendor":"Vendor","webglInfo":"WebGL Info","webrtcError":"This field should contain IP address"},"columns":{"browserProfiles":{"columnsSelected":"Columns selected","lastEdited":"Last edited","createdAt":"Created","mainWebsite":"Main website","noSuchUserfield":"No such userfield","notes":"Notes","platform":"Platform","proxy":"Proxy","savePreset":"Save as preset columns","status":"Status","tags":"Tags","timer":"Timer","worktime":"Worktime"},"proxies":{"browser_profiles_count":"Profiles","geo":"GEO","name":"Name","status":"Status"}},"common":{"Understandably":"Understood","aCopy":"Copy","access":"Access","add":"Add","addPermissions":"Add permissions","addProfiles":"+ Add profiles","added":"Added","additional":"Additional","all":"All","and":"and","antyBrowser":"Anty browser","basket":"trash bin","bookmarks":"Bookmarks","browser":"Browser","cancel":"Cancel","cancelBasket":"Cancel","change":"Change","changeIp":"Change ip","changeIpUrl":"IP change link","changeProxy":"Change proxy","checkConnection":"Check connection","checkData":"Check data","checkPlans":"Check plans","checked":"Checked","chromeWebStoreURL":"Chrome Web Store URL","clear":"Clear","close":"Close","color":"Color","columns":"Columns","comment":"Comment","confirm":"Confirm","copied":"Copied","copiesNumbers":"Number of copies ","copy":"Copy","copyProfile":"Сopy profile","create":"Create","createProfile":"Create profile","created":"Created","customizeColumns":"Customize columns","data":"Data","dataCheck":"Data check","dayShort":"D","delete":"Delete","deleted":"Deleted","deleted_at":"Deleted","deselectAll":"Deselect all","displayName":"Display name","doNotLoadImages":"Don`t load images","dolphinAntyVersion":"Dolphin Anty version","dolphinExtension":"Dolphin extension","done":"Done","download":"Download","downloadFailed":"Error while downloading browser, please contact support","downloadInProcess":"Browser is downloading","downloadTemplate":"Download the template","dragNDropOrPaste":"Drag and drop or click to paste the text","edit":"Edit","editProfile":"Edit profile","email":"Email","empty":"Empty","enterEmail":"Enter e-mail","enterListOfLinks":"Enter list of links separated by a new line  or comma or drop text file here...","errorOccurred":"Oops! An error occurred","errorOops":"Oops! Something went wrong","errorToDeveloper":"Send this data to developers","errorsCodes":{"E_ACCESS_PROFILE":"You do not have access to these browser profiles","E_BROWSER_PROFILE_ACCESS_DENIED":"You do not have access to this Browser profile","E_BROWSER_PROFILE_ACCESS_EDIT_NO_USERS":"The users field is required","E_BROWSER_PROFILE_ACCESS_EDIT_WRONG_ACTION":"Wrong action parameter","E_BROWSER_PROFILE_ACCESS_NOT_FOUND":"Browser profile access not found","E_BROWSER_PROFILE_CANT_GET_DATA_FROM_REMOTE_API":"Failed to get browser profile data from remote API","E_BROWSER_PROFILE_DATA_SHOULD_BE_ARRAY":"Data is not an array","E_BROWSER_PROFILE_EVENT_WRONG_TYPE":"Check parameter [type]","E_BROWSER_PROFILE_NOT_FOUND":"Browser Profile not found","E_BROWSER_PROFILE_STATUS_DELETE_MUST_BE_UNASSIGNED":"You cannot delete a status while it is assigned to at least 1 Browser profile","E_BROWSER_PROFILE_STATUS_WRONG_COLOR":"Check other color","E_BROWSER_PROFILE_USER_FIELDS_ACCESS_DENIED":"Fields do not belong to the current team","E_BROWSER_PROFILE_USER_FIELDS_LIMIT":"You have reached the User Fields limit.","E_BROWSER_PROFILE_USER_FIELDS_NOT_FOUND":"Fields not found","E_BROWSER_PROFILE_USER_FIELDS_WRONG_MAINWEBSITE":"Check parameter [mainWebsite]","E_BROWSER_PROFILE_USER_FIELDS_WRONG_TYPE":"Check parameter [type]","E_EXTENSION_CHROME_STORE_ERROR":"Error while downloading extension in Chrome Store","E_EXTENSION_CHROME_STORE_NOT_FOUND":"Extension not found in Chrome Store","E_EXTENSION_WRONG_MAINWEBSITE":"Invalid mainWebsite value","E_EXTENSION_WRONG_URL":"Invalid extension URL","E_EXTENSION_ZIP_NO_MANIFEST":"Zip archive is formed incorrectly. Please check that all files are in the root of the archive.","E_FINGERPRINT_NOT_FOUND":"Fingerprints not found","E_GENERAL_ERROR":"Unexpected error","E_GENERAL_EXCEPTION":"Unexpected error","E_HOMEPAGE_LIMIT":"You have reached homepages limit","E_HOMEPAGE_WRONG_MAINWEBSITE":"Invalid main website value","E_LIMIT_PROFILES":"You have reached browser profiles limit. Please update your subscription","E_LIMIT_PROFILES_ARCHIVED":"You cannot restore {0} profiles, you do not have enough space {1} ","E_LIMIT_RECOVERIES_COUNT":"You have reached limit for recoveries of this profile","E_LIMIT_USERS":"You have reached users limit. Please update your subscription","E_NOT_FOUND_USER":"User not found","E_PROFILE_WRONG_LANGUAGE":"Wrong value of language parameter","E_PROFILE_WRONG_THEME":"Wrong value of theme parameter","E_PROMO_NOT_FOUND":"Promo code not found","E_PROXY_ACCESS_DENIED":"You do not have access to these proxy","E_PROXY_EMPTY":"Required proxy fields missing: type, host, port","E_PROXY_LIMIT":"You cannot create more proxy than your maximum browser profiles amount.","E_PROXY_NOT_FOUND":"Proxy not found","E_PROXY_WRONG_TYPE":"Proxy type must be one of types: ","E_SETTINGS_WRONG_DATA":"Wrong data format","E_SUBSCRIPTION_EXPIRED":"Your subscription is not active. Please update your subscription","E_SUBSCRIPTION_LIMITS_OTHER_TEAM":"Receiver team will exceed their profiles limit","E_TEAM_ACCESS_DENIED":"Access denied","E_TEAM_DELETE_YOURSELF":"You cannot delete yourself","E_TEAM_NOT_FOUND":"Team not found","E_TEAM_NOT_TEAMLEAD":"Not all of provided teamleads are have role \\"teamlead\\"","E_TEAM_TEAMLEADS_NON_USER_ROLE":"You should not provide teamleads for non-user role","E_TRANSFER_FREE_PLAN":"This feature is not available on free plans","E_USER_ACCESS_DENIED":"This user is not from your team","E_USER_NOT_ADMIN":"Available only for admins","E_USER_NOT_FOUND":"User not found","E_VERSION_TOO_OLD":"Some of your teammate updated this profile to"},"exists":"Already exists","extension":"Extension","extensions":"Extensions","fieldRequired":"This field is required","fileExportedToDownloads":"File exported to downloads","filters":"Filters","forgotPassword":"Forgot password","freeTariffCreateProfile":"You can add 10 extra profiles for 10$ or switch to Base plan with 100 profiles only for 89$ per month","from":"from","general":"General","generatePassword":"Generate password","getFromFile":"Get from file","headless":"Run in headless mode","health":"Health","homepage":"Homepage","host":"Host","id":"ID","import":"Import","invalidCode":"Invalid code","invalidCookies":"Cookies data you’ve specified is empty or invalid","invalidCookiesLinks":"Some of link you’ve specified is not correct","later":"Later","launch":"Start","limitsOverflowedMessage":"You\'ve exceeded your plan limits. Remove unnecessary profiles and/or users or upgrade your plan.","linkAdd":"Add link","linkIsOk":"Ok","linkUpdate":"Update link","loadMore":"Load more","logIn":"Sign in","login":"Login","mainWebsite":"Main website","massImport":"Mass import","name":"Name","newPassword":"New password (optional)","newProfile":"New profile","no":"No","noData":"No data","noDataAvailable":"No data available","noName":"No name","notes":"Notes","off":"Off","on":"On","or":"Or","owner":"Owner","page":"Page","pages":"Pages | Page | Pages | Pages","password":"Password","passwordCopied":"Password was copied to clipboard","passwordRepeat":"Repeat your password","pasteData":"Paste your data from clipboard","pasteOrDropCookies":"Paste your cookies or drag and drop your file here","payment":"Payment","permissions":"Permissions","permissionsShow":"Show permissions","platform":"Platform","port":"Port","profileHistory":"Activity log","profiles":"Profiles","profilesDelete":"Delete profiles","profilesStart":"Start profiles","profilesStop":"Stop profiles","proxiesDelete":"Delete proxies","proxy":"Proxy","proxyChange":"Change proxy","proxyUtility":"Proxy utility","randomizeFingerprint":"Randomize fingerprint","register":"Register","registration":"Registration","remindLater":"Remind later","removeLink":"Remove link","removePermissions":"Remove permissions","renew":"Renew","resolution":"Resolution","restore":"restore","restored":"Selected profiles restored","role":"Role","run":"Run","save":"Save","saved":"Saved","screen":"Screen","scripts":{"createTab":{"checkboxLabel":"Privacy","checkboxOne":"Add for you and form your team only","checkboxTwo":"Add for all","h1":"Add the scenario","h2":"You can share the scenario with other users","inputLabel":"Add a scenario name","inputPlaceholder":"Enter a name"},"creator":"Creator","desc1":"Your scenarios will be displayed here","desc2":"Attention! This is beta version of our new functionality. Please report any bugs you find to our support.","header":"Your Scenarios","name":"Title","noData":{"btn":"Create scenario","h1":"Your Scenarios","h2":"Your Scenarios will be displayed here"},"price":"Price","tabs":{"tab1":"My scenarios","tab2":"Create"}},"search":"Search","secondShort":"Sec","selectAll":"Select all","selectTariff":"Choose a plan","selected":"Selected","send":"Send","settings":"Settings","setupStarted":"Browser setup","share":"Share","sharedToEntireTeam":"Shared to entire team","somethingWentWrong":"Something went wrong","start":"Start","status":"Status","statusNo":"No status","statuses":"Statuses","stop":"Stop","stopCookieRobot":"Stop Cookies Robot","storage":"Storage","subscriptionExpiredMessage":"Your subscription has been expired.","success":"Success","syncProfilesList":"Refresh profiles list","tags":"Tags","tariffConversion":"Need more profiles? You can add them, or switch to new plan. With promocode “WOWDOLPHIN” - 20% discount on first payment!","teamleads":"Teamleads","transfer":"Transfer","transferWithProxy":"Transfer with proxy","twoFactorAuthDesc":"Enter the 6 digit authentication code generated by the authenticator app on your phone. If you\'ve lost access to your authentication device, enter one of your backup codes.","twoFactorEnterCode":"Authenticator app code or backup code","type":"Type","unknown":"Unknown","unpackingStarted":"Unpacking browser","updatePlan":"Update plan","updateProfile":"Update profile","upgrade":"Upgrade","upgradePlan":"Upgrade plan","upload":"Upload","use":"Use","useTheLatestVersion":"Please always use the latest version of the application! Only in this case we can guarantee the service performance","user":"User","userData":"User data","userFields":{"bigText":"Big text","checkbox":"Checkbox","checklist":"Checklist","select":"Select","selectMultiple":"Select multiple","text":"Text"},"username":"Username","users":"Users","validChromeWebstoreUrlField":"Url must start with \'https://chrome.google.com/webstore/detail/\'","validCookies":"{type} format. Сookies found:","version":"Version","warning":"Warning","websiteNo":"No website","websitesAll":"All websites","windowsIsNotSupported":"Attention! Google officially ceases to support Win7/8 with Chrome 110. From February 13, Dolphin{Anty} will not work on these versions of the OS.<br /> To continue working we recommend to upgrade the software version of your PC.","wrongFormat":"Wrong format","yes":"Yes","you":"You","downloadLogs":"Download logs"},"dialogs":{"addBrowserProfile":{"failedConnection":"Fail. Proxy is invalid or is restricted for checking host.","notYet":"Proxy has not been checked yet","successfulConnection":"Success."},"basket":{"title":"You have {0} deleted profiles","warring":"This is the trash bin of deleted profiles. Profiles will automatically be deleted 48 hours after being in the trash bin"},"confirmAction":"Confirm this action please","copyErrorText":"Copy error text and provide it to our support team please","deleteBrowserProfiles":{"attention":"Attention, there is no trash bin in the Free plan. If you delete your profiles, they will be permanently deleted","youAreDeleting":"You are deleting","youAreDeleting2":"You are deleting"},"endedPlan":{"subtitle":"Pay for the subscription or switch to the Free plan.","title":"Your plan has ended"},"feedback":{"bug":"Bug","feature":"Features","feedbackSent":"Thanks! We’ve got your feedback!","idea":"Idea","review":"Review"},"freeTariff":{"buttonContinueOnFree":"Continue on FREE","choosePlan":"choose a plan","desc":"Not enough profiles or team members? <br> You can add more anytime, or switch to better plan: <br> Base, Team or Enterprise","desc1":"10 profiles","desc2":"1 user","desc3":"Full functionality of browser fingerprint","desc4":"Cloud data synchronisation","desc5":"Required number of profiles","desc6":"Convenient teamwork","desc7":"Automation through RPA","exceededDesc":"You can add more, or switch to new plan","exceededTitle":"You’ve reached limit of free profiles","freeAvailable":"With this plan, you have access to: <br> Users: 1 <br> Profiles: 10","freePlan":"Free plan","freeWelcomeTitle":"Hello! Your plan now - Free","subscriptionFeatures":"Subscription features","title":"You use Dolphin{anty} with Free plan","yourTariffFree":"Your plan: "},"help":{"changeIpUrlBody":"<p>The link to change IP is used for mobile proxies.</p><p>If you do not know where to get it or how to use it, then most likely your proxies are not mobile or are supplied without this link.</p><p>By specifying this link, you have the opportunity to use two Anty options:</p><ul><li>Manually change the proxy IP address before the next profile launch</li><li>The link to change IP address is used for mobile proxies.<br>If you do not know where to get it or how to use it, then most likely your proxies are not mobile or are supplied without this link.<br> By specifying this link, you have the opportunity to change IP address in one click from Dolphin{anty} interface. This feature will be available in the \\"Proxy\\" column.</li></ul>","proxyBody":"<p>Valid proxy formats:</p><ul style=\\"font-family: monospace;\\"><li>host:port</li><li>host:port:login:password</li><li>login:password@host:port</li><li>[hostIPv6]:port:login:password</li></ul></br><p>In addition, to the left of any of the formats, you can specify the type of proxy:</p><ul style=\\"font-family: monospace;\\"><li>http://192.168.0.1:8000</li><li>socks5://login:password@192.168.0.1:8000</li><li>socks4://192.168.0.1:8000:login:password</li><li>http://[2a06:c006:bd1e:00a1:2d4c:1cbd:4653:e7bc]:8000</li></ul>","proxyNameBody":"<p>By specifying a name for a proxy, you save it to your proxy library.</p><p>Later you will be able to specify the saved proxy for new profiles, as well as bind it to existing profiles.</p>"},"logoutConfirmation":"Do you really want to log out?","osCompatibility":{"close":"close","desc":"Google has stopped supporting Chrome for Windows 7/8 and macOS Sierra 10.15 or later. Using Dolphin{anty} on these OSes, you risk encountering critical errors. We recommend updating your operating system.","runAnyway":"run anyway","title":"Compatibility issues with browser profiles on your OS."},"repeat":"Repeat","syncError":"Sync error on profile","tags":{"addTags":"Add tags","removeTags":"Remove tags"},"trialPeriod":{"daysRemains":"{days} days left","daysRemainsSingle":"","desc1":"During the trial period you able to create up to 1000 <br> profiles and 5 team members","desc2":"After that, you can continue working on a free plan or switch to a paid plan.","expired":"To continue working on the Free plan, delete","expiredBanner":"The trial period has expired. To continue working on the Free plan, delete","extraProfiles":"extra profiles ({profilesCount})","extraUsers":"extra users ({usersCount})","orSelectDifferentTariff":", or choose another plan","remainingDays":"{days} days left until the end of the trial period","remainingDaysSingle":"","title":"Hello! You are currently using the trial period","trialPeriodExpired":"Trial period expired"},"warning":{"createProfile":"OK, create a profile anyway","differentPlatform":"<p>Anty will do what you ask.</p><p>But we must warn you that emulating an operating system other than yours is not 100% possible.</p><p>Despite all the advertising claims that you may see from our respected competitors, there are a number of overwhelming technical aspects by which a foreign OS can be determined.</p><p>Therefore, we consider it honest and correct to inform you about this. We recommend creating profiles with a platform that does not differ from yours.</p>","doNotShowWarning":"Don\'t show me this warning again","updateProfile":"OK, update a profile anyway"}},"errors":{"uploadDenied":"Sync denied. Someone started profile after you.","downloadLogError":"Error while downloading log"},"extensions":{"addFromChromeWebStore":"Add from chrome web store","extensionName":"Extension name","uploadFile":"Upload file","uploadZip":"Upload .zip file"},"homepages":{"pagesLimitWarning":"Homepages limit exceeded. You can have only 10 homepages.","personal":"Personal","shared":"Shared"},"infoBar":{"apiPort":"API Port","checkForUpdates":"Check for updates","machineId":"Machine ID","oldUseragents":"Old useragents","plans":{"base":"Base","beta":"Beta","enterprise":"Enterprise","free":"Free","team":"Team","trial":"Trial"},"profiles":"Profiles","upgradeAll":"Upgrade all","users":"Users"},"proxy":{"active":"Active","checkYourself":"Check yourself before you add it","createProxy":"Create proxy","editing":"Proxy editing","error":"Error","formats":"<p>Allowed formats:</p><ul><li>192.168.0.1:8000</li><li>http://192.168.0.1:8000:myproxy[https://change-my-proxy.com]</li><li>socks5://login:password@192.168.0.1:8000</li><li>192.168.0.1:8000:login:password</li><li>http://[2a06:c006:bd1e:00a1:2d4c:1cbd:4653:e7bc]:8000</li></ul><br /><p>*Additionally you can add <b>:name</b> at the end for any of formats<br />**Empty type at the beginning will cause HTTP type<br />***At the end, for each proxy, you can specify a link to change IP in square brackets</p>","noProxy":"No proxy"},"restrict":{"accountCallToMove":"! Transfer all important data from these accounts to the main account","accountsLinked":"Accounts connected to this device","buttonPrimary":"Switch to paid plan","buttonSecond":"There is some mistake","callBuySubscription":"Switch to a paid plan to remove restrictions. Use promo code NOABUSE for a 20% discount on first payment","p1":"It seems you use Free plan on several accounts from one device. It is prohibited by terms of use of our service.","p2Alert":"all accounts, except the main, one will be frozen. Primary account that was first associated with:","p2AlertNose":"After {days} days | After {days} day | After {days} days | After {days} days","p2Block":"But you main account, which was associated with this device,","p2BlockTail":"still works","secondScreen":{"h1":"I have only one account, but I use virtual dedicated server","h2":"What if I don\'t have time to pay within 7 days, can I do it later?","h3":"I don’t have access to main account","p1":"This issue might occur if other users are using your VDS fingerprint. Choose a VDS with a dedicated unique fingerprint, then you can avoid such situations","p2End":"- they will help you transfer profiles to one account if you did not manage to do it within 7 days","p2Site":"website","p2Start":"Contact our support via the app or","p3":"Contact our support. We will make another account as the main account to which you have access and you will be able to transfer profiles to it"},"titleAlert":"Oops! Restriction of the functionality on your account {date}","titleBlock":"Oops! We freezed several of your accounts with Free plan","tooltipPromo":"First payment only"},"settings":{"dolphinIntegration":"Dolphin for Facebook ads integration\\n","dolphinToken":"Dolphin token","homepages":"Homepages","homepagesCreate":"Create homepages","popup":{"h1":"Dolphin for Facebook ads","link":"read more about Dolphin","smText":"developed for affiliate marketing","text":"Dolphin allows you to work with hundreds of Facebook ad accounts in one window, create ads on dozens of ad accounts in just a few minutes and save a huge amount of time. This is an indispensable tool for those who work with Facebook ads in affiliate marketing  on a professional level. Integration takes less than a minute."},"statuses":{"addNew":"Add new","createStatus":"Create status","deleteStatus":"Delete status","editStatus":"Edit status","statuses":"Statuses"},"userFields":{"actions":"Actions","addItem":"Add item","allWebsites":"All websites","createField":"Create field","deleteField":"Delete field","example":"Example","field":"Field","type":"Type","userFields":"User fields","visibility":"Visibility"}},"payment":{"paymentTabs":{"billing":"Billing","settings":"Settings","documentation":"Documentation"},"alert":{"unpaidOrder":{"title":"You have pending order, please process as soon as possible","text2":"Order expires:"},"subscriptionEnd":{"title":"Your plan expires in","titleTail":"{days} days | {days} day | {days} days | {days} days","text2":"Don\'t forget to pay for the plan before {0}"},"orderInProgress":{"title":"Your order is being processed, please wait..."},"limitError":{"title":"Your plan limit has been exceeded","text2":"Delete unnecessary browser profiles and/or users or upgrade your plan"},"tariffExpired":{"title":"Subscription expired","text2":"Delete unnecessary browser profiles and/or users or upgrade your plan"},"tariffPaymentFailed":{"title":"Payment failed"},"tariffPaymentSuccess":{"title":"Your plan has been successfully paid","text2":"Have a nice day!"},"successfulTariffUpdate":{"title":"Your plan has been successfully updated"},"checkStatus":"Check status","payNow":"Pay now"},"billing":{"title":"Billing","plan":"{0} Plan","nextPayment":"Next payment is {0}","unlimited":"Unlimited","expires":"Expires {0}","dueDate":"Due {0}","disable":"Disable automatic renewal","changePlan":"Change plan","upgradePlan":"Upgrade Plan","profiles":"Profiles","users":"Users"},"breadcrumbs":{"checkout":"Checkout","choosePlan":"Choose Plan","upgradePlan":"Upgrade Plan","goToBilling":"Go to Billing","back":"Back"},"choosePlan":{"title":"Choose Plan","prolongMonths":{"months":"No months | Month | Months | Months","month":"month","noProlong":"No renewal"},"card":{"profilesCount":"Save up to {0} browser profiles","user":"{0} user","forFeatures":"For beginners","collaborationTeam":"For solo and small teams","profitableTeam":"For bigger teams","forLargeTeam":"For large teams and companies","addBrowserProfiles":"10 add. browser profiles for ${0}","addBrowserProfilesWithSale":"10 add. profiles for ${0} <span>${1}</span>","addUsers":"1 add. user for ${0}","addUsersWithSale":"1 add. user for ${0} <span>${1}</span>","currentPlan":"Current plan"},"dialog":{"getMoreProfiles":"Get more browser profiles","contactForIndividualOffer":"Contact us to get any number of browser profiles.","specialOffer":"For large customers we offer individual offers."},"profilesDoYouNeed":"How many browser profiles do you need?","howManyAdditionalUsers":"How many additional users?","usersDoYouNeed":"How many additional users do you need?","priceAdditionalProfiles":"Price for additional profiles:","priceAdditionalUsers":"Price for additional users:","subTotal":"Subtotal:","withoutPaymentSystemFee":"Without payment system fee","individualConditions":"Do you want individual conditions?"},"upgradePlan":{"title":"Upgrade <span>{0}</span> Plan","availableTextAlert":"You have {0} days available when updating the current plan","sale":"Sale","subscriptionPeriod":"Subscription period","resetTooltip":"Reset to current plan preferences"},"buttons":{"contactUs":"Contact us","save":"Save","goToPayment":"Go to payment","reset":"Reset","upgradePlan":"Upgrade Plan"},"checkout":{"title":"Checkout","subscriptionPeriod":"Subscription period","method":"Payment method","paymentFor":"Payment for plan dolphin-anty.com","summary":{"orderSummary":"Order summary","plan":"{type} Plan","discount":"Discount ({0}%)","users":"Users, {0} pcs.","profiles":"Profiles, {0} pcs.","paymentSystemFee":"Payment system fee {0}%","estimatedTax":"Estimated tax ({0}%)","discountForUnusedPlan":"Discount for unused plan","total":"Total","iHavePromo":"I have a promo code","promoCodeIsInvalid":"Promo code is invalid","successfullyActivated":"Successfully activated","apply":"Apply","promo":"Promo code","yourSubscriptionWillRenew":"Your subscription will automatically renew on {0}","youCanCancelYourSubscription":"You can cancel your subscription at any time before this date","youWillBeRedirected":"You will be redirected to the payment page. If this did not happen, follow the link below:","payNow":"Pay now","errors":{"promoForFirstPayment":"This promo code is valid for the first payment only","promoLimitExceed":"Promo code is invalid","somethingWentWrong":"Something went wrong. Please contact support."}},"paymentMethod":{"stablecoins":"Stablecoins","card":"Card","eWallet":"E-Wallet","crypto":"Crypto"},"fee":"Fee {0}%","cardMethods":{"switcherLabel":"I use Russian bank card","country":"Country","postalCode":"Postal Code","companyInformation":"Company information (optional)","companyInformationDesk":"This information will be displayed on your invoice and used to calculate taxes","bigButton":"Add company information","companyNameLabel":"Company Name","addressLine1":"Address","addressLine2":"Address details","city":"City","stateRegion":"State / Region","vatId":"VAT ID","purchaseOrder":"Purchase Order #","placeHolderPostcode":"Postal Code"}}},"sidebar":{"automation":"Automation","automationScenario":"Script run","automationScenarioMenu":{"automation":"Automation","edit":"Automation edit","login":"Automation login","management":"Scripts management"},"bookmarks":"Bookmarks","browserProfiles":"Browsers","dolphinAntyStatus":"Dolphin Anty status","extensions":"Extensions","feedback":"Feedback","flow":"Scenarios","flowDisabledOnFree":"Only on paid plans","lessThanLeft":"Less than {0} days left","logOut":"Log out","payNow":"Pay now","proxy":"Proxies","settings":"Settings","subscriptionExpired":"Subscription expired","support":"Support","users":"Users"},"update":{"buttonCancel":"Later","buttonOk":"Install","title":"Update {version} is avaliable"},"users":{"createUser":"Create user","deleteUserWarning":"After deleting a user, all browser profiles created by that user will be deleted.","editUser":"Edit user","roles":{"admin":"Admin","teamlead":"Teamlead","user":"User"}},"validation":{"max":"The field may not be greater than {length} characters"},"validationNew":{"accepted":"The {attribute} must be accepted.","active_url":"The {attribute} is not a valid URL.","after":"The {attribute} must be a date after :date.","after_or_equal":"The {attribute} must be a date after or equal to :date.","alpha":"The {attribute} may only contain letters.","alpha_dash":"The {attribute} may only contain letters, numbers, dashes and underscores.","alpha_num":"The {attribute} may only contain letters and numbers.","array":"The {attribute} must be an array.","before":"The {attribute} must be a date before :date.","before_or_equal":"The {attribute} must be a date before or equal to :date.","between":{"array":"The {attribute} must have between :min and :max items.","file":"The {attribute} must be between :min and :max kilobytes.","numeric":"The {attribute} must be between :min and :max.","string":"The {attribute} must be between :min and :max characters."},"boolean":"The {attribute} field must be true or false.","confirmed":"The {attribute} confirmation does not match.","date":"The {attribute} is not a valid date.","date_equals":"The {attribute} must be a date equal to :date.","date_format":"The {attribute} does not match the format :format.","different":"The {attribute} and :other must be different.","digits":"The {attribute} must be :digits digits.","digits_between":"The {attribute} must be between :min and :max digits.","dimensions":"The {attribute} has invalid image dimensions.","distinct":"The {attribute} field has a duplicate value.","email":"The {attribute} must be a valid email address.","ends_with":"The {attribute} must end with one of the following: {values}.","exists":"The selected {attribute} is invalid.","file":"The {attribute} must be a file.","filled":"The {attribute} field must have a value.","gt":{"array":"The {attribute} must have more than {value} items.","file":"The {attribute} must be greater than {value} kilobytes.","numeric":"The {attribute} must be greater than {value}.","string":"The {attribute} must be greater than {value} characters."},"gte":{"array":"The {attribute} must have {value} items or more.","file":"The {attribute} must be greater than or equal {value} kilobytes.","numeric":"The {attribute} must be greater than or equal {value}.","string":"The {attribute} must be greater than or equal {value} characters."},"image":"The {attribute} must be an image.","in":"The selected {attribute} is invalid.","in_array":"The {attribute} field does not exist in :other.","integer":"The {attribute} must be an integer.","ip":"The {attribute} must be a valid IP address.","ipv4":"The {attribute} must be a valid IPv4 address.","ipv6":"The {attribute} must be a valid IPv6 address.","json":"The {attribute} must be a valid JSON string.","length_between":"The field length must be between {min} and {max}","lt":{"array":"The {attribute} must have less than {value} items.","file":"The {attribute} must be less than {value} kilobytes.","numeric":"The {attribute} must be less than {value}.","string":"The {attribute} must be less than {value} characters."},"lte":{"array":"The {attribute} must not have more than {value} items.","file":"The {attribute} must be less than or equal {value} kilobytes.","numeric":"The {attribute} must be less than or equal {value}.","string":"The {attribute} must be less than or equal {value} characters."},"max":{"array":"The {attribute} may not have more than :max items.","file":"The {attribute} may not be greater than :max kilobytes.","numeric":"The {attribute} may not be greater than :max.","string":"The {attribute} may not be greater than :max characters."},"mimes":"The {attribute} must be a file of type: {values}.","mimetypes":"The {attribute} must be a file of type: {values}.","min":{"array":"The {attribute} must have at least :min items.","file":"The {attribute} must be at least :min kilobytes.","numeric":"The {attribute} must be at least :min.","string":"The {attribute} must be at least :min characters."},"multiple_of":"The {attribute} must be a multiple of {value}","not_in":"The selected {attribute} is invalid.","not_regex":"The {attribute} format is invalid.","numeric":"The {attribute} must be a number.","password":"The password is incorrect.","present":"The {attribute} field must be present.","regex":"The {attribute} format is invalid.","required":"The {attribute} field is required.","required_if":"The {attribute} field is required when :other is {value}.","required_unless":"The {attribute} field is required unless :other is in {values}.","required_with":"The {attribute} field is required when {values} is present.","required_with_all":"The {attribute} field is required when {values} are present.","required_without":"The {attribute} field is required when {values} is not present.","required_without_all":"The {attribute} field is required when none of {values} are present.","same":"The {attribute} and :other must match.","size":{"array":"The {attribute} must contain :size items.","file":"The {attribute} must be :size kilobytes.","numeric":"The {attribute} must be :size.","string":"The {attribute} must be :size characters."},"starts_with":"The {attribute} must start with one of the following: {values}.","string":"The {attribute} must be a string.","timezone":"The {attribute} must be a valid zone.","unique":"The {attribute} has already been taken.","uploaded":"The {attribute} failed to upload.","url":"The {attribute} format is invalid."}}')
    }, f9e0: function (e, t, a) {
        "use strict";
        var r = a("8336"), s = a("cc20"), i = a("8860"), n = a("da13"), l = a("e449"), d = a("3a2f"), o = a("2f62"),
            c = a("29f1"), c = {
                name: "BrowserProfilesMainTableCellStatus",
                components: {ExpiredPlanDisabledWrapper: a("fe3a").a},
                mixins: [c.a],
                props: {
                    browserProfile: {type: Object, default: () => ({id: 0})},
                    doNotChange: {type: Boolean, default: !1}
                },
                computed: {
                    ...Object(o.c)({
                        browserProfilesStatuses: "browserProfilesStatuses/statuses",
                        profile: "main/profile",
                        disableUi: "main/disableUi"
                    })
                },
                methods: {
                    openStatusDialog() {
                        this.$store.dispatch("browserProfilesStatuses/openDialog", "mainDialog"), this.$store.dispatch("browserProfilesStatuses/setMainDialogMode", "AddNew"), this.$store.commit("browserProfilesStatuses/SET_SELECTED_PROFILE", this.browserProfile.id)
                    }, async changesStatus(e) {
                        try {
                            this.amplitudeSendStatusChange(this.browserProfile, this.subscription)
                        } catch (e) {
                        }
                        var t = this.$_.cloneDeep(this.browserProfile);
                        t.status = {color: e.color, id: e.id, name: e.name};
                        try {
                            const e = await this.api.patch("/browser_profiles/" + this.browserProfile.id, {statusId: t.status.id});
                            if (200 !== e.status || !e.data && !e.data.data) throw e;
                            this.$store.dispatch("browserProfiles/loadCurrentPage")
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
            }, o = (a("516e"), a("2877")), a = Object(o.a)(c, function () {
                var a = this, o = a._self._c;
                return o("expired-plan-disabled-wrapper", [o("div", {
                    class: {"cell-status-not-changeable": a.doNotChange || a.disableUi},
                    attrs: {id: "browserProfilesMainTableCellStatus"}
                }, [o(l.a, {
                    attrs: {"offset-y": "", disabled: a.doNotChange || a.disableUi},
                    scopedSlots: a._u([{
                        key: "activator", fn: function ({on: e, attrs: t}) {
                            return [a.browserProfile.status ? o(s.a, a._g(a._b({
                                staticStyle: {
                                    "text-transform": "uppercase",
                                    "font-weight": "normal",
                                    height: "28px",
                                    "letter-spacing": "0.0892857143em"
                                },
                                attrs: {
                                    id: "browserProfilesMainTableCellStatusChipFor-" + a.browserProfile.id + a.browserProfile.status.color,
                                    outlined: "",
                                    label: "",
                                    small: "",
                                    color: a.browserProfile.status.color
                                }
                            }, "v-chip", t, !1), e), [a._v(" " + a._s(a.browserProfile.status.name) + " ")]) : o(s.a, a._g(a._b({
                                staticStyle: {
                                    "text-transform": "uppercase",
                                    "font-weight": "normal",
                                    height: "28px",
                                    "letter-spacing": "0.0892857143em"
                                }, attrs: {outlined: "", label: "", small: "", color: "grey"}
                            }, "v-chip", t, !1), e), [a._v(" " + a._s(a.$t("common.statusNo")) + " ")])]
                        }
                    }])
                }, [o(i.a, {attrs: {id: "browserProfilesMainTableCellStatusMenuFor-" + a.browserProfile.id}}, [o(n.a, [a.profile ? o(d.a, {
                    attrs: {top: ""},
                    scopedSlots: a._u([{
                        key: "activator", fn: function ({on: e}) {
                            return [o(r.a, a._g({
                                staticClass: "mr-2",
                                attrs: {id: "settingsStatusesTopbarButtonCreate", color: "primary", icon: ""},
                                on: {
                                    click: function (e) {
                                        return e.preventDefault(), a.openStatusDialog.apply(null, arguments)
                                    }
                                }
                            }, e), [o("ion-icon", {staticStyle: {"font-size": "26px"}, attrs: {name: "add-outline"}})], 1)]
                        }
                    }], null, !1, 733500175)
                }, [o("span", [a._v(a._s(a.$t("settings.statuses.addNew")))])]) : a._e()], 1), a._l(a.browserProfilesStatuses.all.filter(e => !e.deleted), function (t) {
                    return o(n.a, {key: "anty-main-table-statuses-" + t.id}, [o(s.a, {
                        staticStyle: {
                            "text-transform": "uppercase",
                            "font-weight": "bold",
                            height: "28px"
                        },
                        attrs: {
                            outlined: "",
                            label: "",
                            small: "",
                            color: t.color,
                            disabled: !!a.browserProfile.status && parseInt(t.id, 10) === parseInt(a.browserProfile.status.id, 10)
                        },
                        on: {
                            click: function (e) {
                                return a.changesStatus(t)
                            }
                        }
                    }, [a._v(" " + a._s(t.name) + " ")])], 1)
                })], 2)], 1)], 1)])
            }, [], !1, null, "05e25b1e", null);
        t.a = a.exports
    }, fc50: function (e, t, a) {
        "use strict";
        var o = a("8336"), r = a("cc20"), s = a("132d"), i = a("5935"), n = a("2f62"), n = {
            name: "BrowserProfilesMainTableCellTags",
            components: {ExpiredPlanDisabledWrapper: a("fe3a").a},
            props: {
                browserProfile: {type: Object, default: () => ({id: 0})},
                doNotChange: {type: Boolean, default: !1}
            },
            computed: {...Object(n.c)({disableUi: "main/disableUi"}), ...Object(i.b)("browserProfiles", ["forTagsDialog", "browserProfiles"])},
            methods: {
                addForTagsDialog() {
                    this.forTagsDialog.singleBrowserProfile = !0, this.forTagsDialog.browserProfile.id = this.browserProfile.id, this.forTagsDialog.browserProfile.tags = this.browserProfile.tags.slice()
                }, async addTags() {
                    this.addForTagsDialog(), await this.$store.dispatch("browserProfiles/openDialog", "tags")
                }
            }
        }, i = (a("3428"), a("2877")), a = Object(i.a)(n, function () {
            var t = this, a = t._self._c;
            return a("div", {class: {"cell-status-not-changeable": t.doNotChange}}, [t.browserProfile.tags && Array.isArray(t.browserProfile.tags) && 0 < t.browserProfile.tags.length ? [t._l(t.browserProfile.tags, function (e) {
                return a(r.a, {
                    key: `item-${t.browserProfile.id}-tag-` + e,
                    staticClass: "mr-1 my-1",
                    attrs: {outlined: "", "x-small": "", label: "", color: "primary"}
                }, [t._v(" " + t._s(e) + " ")])
            }), a("expired-plan-disabled-wrapper", [t.doNotChange ? t._e() : a(o.a, {
                staticClass: "anty-tags-edit-pencil",
                attrs: {
                    icon: "",
                    "x-small": "",
                    color: "primary",
                    disabled: t.disableUi || t.browserProfiles.loading.includes("tags")
                },
                on: {click: t.addTags}
            }, [a(s.a, {attrs: {size: 12}}, [t._v(" fas fa-pencil-alt ")])], 1)], 1)] : t.doNotChange || t.browserProfiles.loading.includes("tags") ? t._e() : a("expired-plan-disabled-wrapper", [a("span", {
                staticClass: "anty-adsmanager-main-table-link",
                class: {"anty-adsmanager-main-table-link-disabled": t.disableUi},
                on: {click: t.addTags}
            }, [t._v(" " + t._s(t.$t("common.tags").toLowerCase()) + " ")])])], 2)
        }, [], !1, null, null, null);
        t.a = a.exports
    }, fe3a: function (e, t, a) {
        "use strict";
        var o = a("7948"), r = a("2f62"), o = {
            name: "ExpiredPlanDisabledWrapper",
            mixins: [o.a],
            computed: {
                ...Object(r.c)({
                    subscription: "main/subscription",
                    isSubscriptionExpired: "main/isSubscriptionExpired"
                })
            },
            methods: {
                async showDialogForExpiredUser() {
                    this.subscription && this.isSubscriptionExpired && await this.$store.dispatch("main/openDialog", "endedPlan")
                }
            }
        }, r = a("2877"), a = Object(r.a)(o, function () {
            return (0, this._self._c)("span", {on: {click: this.showDialogForExpiredUser}}, [this._t("default")], 2)
        }, [], !1, null, null, null);
        t.a = a.exports
    }, ffe0: function (e, t, a) {
        "use strict";
        a("acb1")
    }
});