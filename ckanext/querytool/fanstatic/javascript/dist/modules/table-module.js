!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 128));
})([
    function (t, e, n) {
        var r = n(20)("wks"),
            o = n(17),
            i = n(1).Symbol,
            a = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = (a && i[t]) || (a ? i : o)("Symbol." + t));
        }).store = r;
    },
    function (t, e) {
        var n = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (t, e, n) {
        var r = n(1),
            o = n(14),
            i = n(5),
            a = n(10),
            u = n(24),
            s = function (t, e, n) {
                var c,
                    l,
                    f,
                    p,
                    d = t & s.F,
                    v = t & s.G,
                    h = t & s.S,
                    g = t & s.P,
                    y = t & s.B,
                    _ = v ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    b = v ? o : o[e] || (o[e] = {}),
                    m = b.prototype || (b.prototype = {});
                for (c in (v && (n = e), n))
                    (f = ((l = !d && _ && void 0 !== _[c]) ? _ : n)[c]), (p = y && l ? u(f, r) : g && "function" == typeof f ? u(Function.call, f) : f), _ && a(_, c, f, t & s.U), b[c] != f && i(b, c, p), g && m[c] != f && (m[c] = f);
            };
        (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (t.exports = s);
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e, n) {
        var r = n(6);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(9),
            o = n(19);
        t.exports = n(7)
            ? function (t, e, n) {
                  return r.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e, n) {
        t.exports = !n(3)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(4),
            o = n(36),
            i = n(23),
            a = Object.defineProperty;
        e.f = n(7)
            ? Object.defineProperty
            : function (t, e, n) {
                  if ((r(t), (e = i(e, !0)), r(n), o))
                      try {
                          return a(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(5),
            i = n(8),
            a = n(17)("src"),
            u = n(49),
            s = ("" + u).split("toString");
        (n(14).inspectSource = function (t) {
            return u.call(t);
        }),
            (t.exports = function (t, e, n, u) {
                var c = "function" == typeof n;
                c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, a) || o(n, a, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? (t[e] = n) : u ? (t[e] ? (t[e] = n) : o(t, e, n)) : (delete t[e], o(t, e, n)));
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && this[a]) || u.call(this);
            });
    },
    function (t, e, n) {
        var r = n(15),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        var r = n(13);
        t.exports = function (t) {
            return Object(r(t));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e) {
        var n = (t.exports = { version: "2.6.5" });
        "number" == typeof __e && (__e = n);
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e, n) {
        var r = n(34),
            o = n(13);
        t.exports = function (t) {
            return r(o(t));
        };
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    },
    function (t, e, n) {
        var r = n(14),
            o = n(1),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {});
        })("versions", []).push({ version: r.version, mode: n(21) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(6);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
            if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var r = n(22);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(43),
            o = n(30);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, o);
            };
    },
    function (t, e, n) {
        var r = n(24),
            o = n(34),
            i = n(12),
            a = n(11),
            u = n(50);
        t.exports = function (t, e) {
            var n = 1 == t,
                s = 2 == t,
                c = 3 == t,
                l = 4 == t,
                f = 6 == t,
                p = 5 == t || f,
                d = e || u;
            return function (e, u, v) {
                for (var h, g, y = i(e), _ = o(y), b = r(u, v, 3), m = a(_.length), x = 0, S = n ? d(e, m) : s ? d(e, 0) : void 0; m > x; x++)
                    if ((p || x in _) && ((g = b((h = _[x]), x, y)), t))
                        if (n) S[x] = g;
                        else if (g)
                            switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return h;
                                case 6:
                                    return x;
                                case 2:
                                    S.push(h);
                            }
                        else if (l) return !1;
                return f ? -1 : c || l ? l : S;
            };
        };
    },
    function (t, e, n) {
        var r = n(20)("keys"),
            o = n(17);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t));
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        t.exports = function (t, e) {
            return (
                !!t &&
                r(function () {
                    e ? t.call(null, function () {}, 1) : t.call(null);
                })
            );
        };
    },
    function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (t, e, n) {
        var r = n(0)("unscopables"),
            o = Array.prototype;
        null == o[r] && n(5)(o, r, {}),
            (t.exports = function (t) {
                o[r][t] = !0;
            });
    },
    function (t, e, n) {
        var r = n(9).f,
            o = n(8),
            i = n(0)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o((t = n ? t : t.prototype), i) && r(t, i, { configurable: !0, value: e });
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            o,
            i = n(52),
            a = RegExp.prototype.exec,
            u = String.prototype.replace,
            s = a,
            c = ((r = /a/), (o = /b*/g), a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
            l = void 0 !== /()??/.exec("")[1];
        (c || l) &&
            (s = function (t) {
                var e,
                    n,
                    r,
                    o,
                    s = this;
                return (
                    l && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))),
                    c && (e = s.lastIndex),
                    (r = a.call(s, t)),
                    c && r && (s.lastIndex = s.global ? r.index + r[0].length : e),
                    l &&
                        r &&
                        r.length > 1 &&
                        u.call(r[0], n, function () {
                            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                        }),
                    r
                );
            }),
            (t.exports = s);
    },
    function (t, e, n) {
        var r = n(18);
        t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return "String" == r(t) ? t.split("") : Object(t);
              };
    },
    function (t, e, n) {
        var r = n(6),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        t.exports =
            !n(7) &&
            !n(3)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(35)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(4),
            o = n(59),
            i = n(30),
            a = n(28)("IE_PROTO"),
            u = function () {},
            s = function () {
                var t,
                    e = n(35)("iframe"),
                    r = i.length;
                for (e.style.display = "none", n(60).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), s = t.F; r--; ) delete s.prototype[i[r]];
                return s();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return null !== t ? ((u.prototype = r(t)), (n = new u()), (u.prototype = null), (n[a] = t)) : (n = s()), void 0 === e ? n : o(n, e);
            };
    },
    function (t, e, n) {
        var r = n(18),
            o = n(0)("toStringTag"),
            i =
                "Arguments" ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (n = (function (t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : i
                ? r(e)
                : "Object" == (a = r(e)) && "function" == typeof e.callee
                ? "Arguments"
                : a;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(54)(!0);
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(38),
            o = RegExp.prototype.exec;
        t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var i = n.call(t, e);
                if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i;
            }
            if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        n(62);
        var r = n(10),
            o = n(5),
            i = n(3),
            a = n(13),
            u = n(0),
            s = n(33),
            c = u("species"),
            l = !i(function () {
                var t = /./;
                return (
                    (t.exec = function () {
                        var t = [];
                        return (t.groups = { a: "7" }), t;
                    }),
                    "7" !== "".replace(t, "$<a>")
                );
            }),
            f = (function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments);
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            })();
        t.exports = function (t, e, n) {
            var p = u(t),
                d = !i(function () {
                    var e = {};
                    return (
                        (e[p] = function () {
                            return 7;
                        }),
                        7 != ""[t](e)
                    );
                }),
                v = d
                    ? !i(function () {
                          var e = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (e = !0), null;
                              }),
                              "split" === t &&
                                  ((n.constructor = {}),
                                  (n.constructor[c] = function () {
                                      return n;
                                  })),
                              n[p](""),
                              !e
                          );
                      })
                    : void 0;
            if (!d || !v || ("replace" === t && !l) || ("split" === t && !f)) {
                var h = /./[p],
                    g = n(a, p, ""[t], function (t, e, n, r, o) {
                        return e.exec === s ? (d && !o ? { done: !0, value: h.call(e, n, r) } : { done: !0, value: t.call(n, e, r) }) : { done: !1 };
                    }),
                    y = g[0],
                    _ = g[1];
                r(String.prototype, t, y),
                    o(
                        RegExp.prototype,
                        p,
                        2 == e
                            ? function (t, e) {
                                  return _.call(t, this, e);
                              }
                            : function (t) {
                                  return _.call(t, this);
                              }
                    );
            }
        };
    },
    function (t, e, n) {
        var r = n(18);
        t.exports =
            Array.isArray ||
            function (t) {
                return "Array" == r(t);
            };
    },
    function (t, e, n) {
        var r = n(8),
            o = n(16),
            i = n(44)(!1),
            a = n(28)("IE_PROTO");
        t.exports = function (t, e) {
            var n,
                u = o(t),
                s = 0,
                c = [];
            for (n in u) n != a && r(u, n) && c.push(n);
            for (; e.length > s; ) r(u, (n = e[s++])) && (~i(c, n) || c.push(n));
            return c;
        };
    },
    function (t, e, n) {
        var r = n(16),
            o = n(11),
            i = n(46);
        t.exports = function (t) {
            return function (e, n, a) {
                var u,
                    s = r(e),
                    c = o(s.length),
                    l = i(a, c);
                if (t && n != n) {
                    for (; c > l; ) if ((u = s[l++]) != u) return !0;
                } else for (; c > l; l++) if ((t || l in s) && s[l] === n) return t || l || 0;
                return !t && -1;
            };
        };
    },
    function (t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    function (t, e, n) {
        var r = n(15),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
        };
    },
    function (t, e, n) {
        var r = n(43),
            o = n(30).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, o);
            };
    },
    function (t, e, n) {
        var r = n(45),
            o = n(19),
            i = n(16),
            a = n(23),
            u = n(8),
            s = n(36),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(7)
            ? c
            : function (t, e) {
                  if (((t = i(t)), (e = a(e, !0)), s))
                      try {
                          return c(t, e);
                      } catch (t) {}
                  if (u(t, e)) return o(!r.f.call(t, e), t[e]);
              };
    },
    function (t, e, n) {
        t.exports = n(20)("native-function-to-string", Function.toString);
    },
    function (t, e, n) {
        var r = n(51);
        t.exports = function (t, e) {
            return new (r(t))(e);
        };
    },
    function (t, e, n) {
        var r = n(6),
            o = n(42),
            i = n(0)("species");
        t.exports = function (t) {
            var e;
            return o(t) && ("function" != typeof (e = t.constructor) || (e !== Array && !o(e.prototype)) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = function () {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(27)(5),
            i = !0;
        "find" in [] &&
            Array(1).find(function () {
                i = !1;
            }),
            r(r.P + r.F * i, "Array", {
                find: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }),
            n(31)("find");
    },
    function (t, e, n) {
        var r = n(15),
            o = n(13);
        t.exports = function (t) {
            return function (e, n) {
                var i,
                    a,
                    u = String(o(e)),
                    s = r(n),
                    c = u.length;
                return s < 0 || s >= c
                    ? t
                        ? ""
                        : void 0
                    : (i = u.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343
                    ? t
                        ? u.charAt(s)
                        : i
                    : t
                    ? u.slice(s, s + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
            };
        };
    },
    function (t, e, n) {
        var r = n(8),
            o = n(12),
            i = n(28)("IE_PROTO"),
            a = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (t = o(t)), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
            };
    },
    function (t, e, n) {
        "use strict";
        var r = n(31),
            o = n(66),
            i = n(25),
            a = n(16);
        (t.exports = n(57)(
            Array,
            "Array",
            function (t, e) {
                (this._t = a(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length ? ((this._t = void 0), o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
            },
            "values"
        )),
            (i.Arguments = i.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    function (t, e, n) {
        "use strict";
        var r = n(21),
            o = n(2),
            i = n(10),
            a = n(5),
            u = n(25),
            s = n(58),
            c = n(32),
            l = n(55),
            f = n(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            d = function () {
                return this;
            };
        t.exports = function (t, e, n, v, h, g, y) {
            s(n, e, v);
            var _,
                b,
                m,
                x = function (t) {
                    if (!p && t in w) return w[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this, t);
                    };
                },
                S = e + " Iterator",
                O = "values" == h,
                E = !1,
                w = t.prototype,
                T = w[f] || w["@@iterator"] || (h && w[h]),
                P = T || x(h),
                A = h ? (O ? x("entries") : P) : void 0,
                N = ("Array" == e && w.entries) || T;
            if (
                (N && (m = l(N.call(new t()))) !== Object.prototype && m.next && (c(m, S, !0), r || "function" == typeof m[f] || a(m, f, d)),
                O &&
                    T &&
                    "values" !== T.name &&
                    ((E = !0),
                    (P = function () {
                        return T.call(this);
                    })),
                (r && !y) || (!p && !E && w[f]) || a(w, f, P),
                (u[e] = P),
                (u[S] = d),
                h)
            )
                if (((_ = { values: O ? P : x("values"), keys: g ? P : x("keys"), entries: A }), y)) for (b in _) b in w || i(w, b, _[b]);
                else o(o.P + o.F * (p || E), e, _);
            return _;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(37),
            o = n(19),
            i = n(32),
            a = {};
        n(5)(a, n(0)("iterator"), function () {
            return this;
        }),
            (t.exports = function (t, e, n) {
                (t.prototype = r(a, { next: o(1, n) })), i(t, e + " Iterator");
            });
    },
    function (t, e, n) {
        var r = n(9),
            o = n(4),
            i = n(26);
        t.exports = n(7)
            ? Object.defineProperties
            : function (t, e) {
                  o(t);
                  for (var n, a = i(e), u = a.length, s = 0; u > s; ) r.f(t, (n = a[s++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement;
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            o = n(12),
            i = n(11),
            a = n(15),
            u = n(39),
            s = n(40),
            c = Math.max,
            l = Math.min,
            f = Math.floor,
            p = /\$([$&`']|\d\d?|<[^>]*>)/g,
            d = /\$([$&`']|\d\d?)/g;
        n(41)("replace", 2, function (t, e, n, v) {
            return [
                function (r, o) {
                    var i = t(this),
                        a = null == r ? void 0 : r[e];
                    return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
                },
                function (t, e) {
                    var o = v(n, t, this, e);
                    if (o.done) return o.value;
                    var f = r(t),
                        p = String(this),
                        d = "function" == typeof e;
                    d || (e = String(e));
                    var g = f.global;
                    if (g) {
                        var y = f.unicode;
                        f.lastIndex = 0;
                    }
                    for (var _ = []; ; ) {
                        var b = s(f, p);
                        if (null === b) break;
                        if ((_.push(b), !g)) break;
                        "" === String(b[0]) && (f.lastIndex = u(p, i(f.lastIndex), y));
                    }
                    for (var m, x = "", S = 0, O = 0; O < _.length; O++) {
                        b = _[O];
                        for (var E = String(b[0]), w = c(l(a(b.index), p.length), 0), T = [], P = 1; P < b.length; P++) T.push(void 0 === (m = b[P]) ? m : String(m));
                        var A = b.groups;
                        if (d) {
                            var N = [E].concat(T, w, p);
                            void 0 !== A && N.push(A);
                            var I = String(e.apply(void 0, N));
                        } else I = h(E, p, w, T, A, e);
                        w >= S && ((x += p.slice(S, w) + I), (S = w + E.length));
                    }
                    return x + p.slice(S);
                },
            ];
            function h(t, e, r, i, a, u) {
                var s = r + t.length,
                    c = i.length,
                    l = d;
                return (
                    void 0 !== a && ((a = o(a)), (l = p)),
                    n.call(u, l, function (n, o) {
                        var u;
                        switch (o.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, r);
                            case "'":
                                return e.slice(s);
                            case "<":
                                u = a[o.slice(1, -1)];
                                break;
                            default:
                                var l = +o;
                                if (0 === l) return n;
                                if (l > c) {
                                    var p = f(l / 10);
                                    return 0 === p ? n : p <= c ? (void 0 === i[p - 1] ? o.charAt(1) : i[p - 1] + o.charAt(1)) : n;
                                }
                                u = i[l - 1];
                        }
                        return void 0 === u ? "" : u;
                    })
                );
            }
        });
    },
    function (t, e, n) {
        "use strict";
        var r = n(33);
        n(2)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r });
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(27)(0),
            i = n(29)([].forEach, !0);
        r(r.P + r.F * !i, "Array", {
            forEach: function (t) {
                return o(this, t, arguments[1]);
            },
        });
    },
    function (t, e, n) {
        var r = n(6),
            o = n(18),
            i = n(0)("match");
        t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
        };
    },
    function (t, e, n) {
        var r = n(4),
            o = n(22),
            i = n(0)("species");
        t.exports = function (t, e) {
            var n,
                a = r(t).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t };
        };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(14),
            i = n(21),
            a = n(68),
            u = n(9).f;
        t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || u(e, t, { value: a.f(t) });
        };
    },
    function (t, e, n) {
        e.f = n(0);
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
        "use strict";
        var r = n(64),
            o = n(4),
            i = n(65),
            a = n(39),
            u = n(11),
            s = n(40),
            c = n(33),
            l = n(3),
            f = Math.min,
            p = [].push,
            d = !l(function () {
                RegExp(4294967295, "y");
            });
        n(41)("split", 2, function (t, e, n, l) {
            var v;
            return (
                (v =
                    "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
                        ? function (t, e) {
                              var o = String(this);
                              if (void 0 === t && 0 === e) return [];
                              if (!r(t)) return n.call(o, t, e);
                              for (
                                  var i,
                                      a,
                                      u,
                                      s = [],
                                      l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                                      f = 0,
                                      d = void 0 === e ? 4294967295 : e >>> 0,
                                      v = new RegExp(t.source, l + "g");
                                  (i = c.call(v, o)) && !((a = v.lastIndex) > f && (s.push(o.slice(f, i.index)), i.length > 1 && i.index < o.length && p.apply(s, i.slice(1)), (u = i[0].length), (f = a), s.length >= d));

                              )
                                  v.lastIndex === i.index && v.lastIndex++;
                              return f === o.length ? (!u && v.test("")) || s.push("") : s.push(o.slice(f)), s.length > d ? s.slice(0, d) : s;
                          }
                        : "0".split(void 0, 0).length
                        ? function (t, e) {
                              return void 0 === t && 0 === e ? [] : n.call(this, t, e);
                          }
                        : n),
                [
                    function (n, r) {
                        var o = t(this),
                            i = null == n ? void 0 : n[e];
                        return void 0 !== i ? i.call(n, o, r) : v.call(String(o), n, r);
                    },
                    function (t, e) {
                        var r = l(v, t, this, e, v !== n);
                        if (r.done) return r.value;
                        var c = o(t),
                            p = String(this),
                            h = i(c, RegExp),
                            g = c.unicode,
                            y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (d ? "y" : "g"),
                            _ = new h(d ? c : "^(?:" + c.source + ")", y),
                            b = void 0 === e ? 4294967295 : e >>> 0;
                        if (0 === b) return [];
                        if (0 === p.length) return null === s(_, p) ? [p] : [];
                        for (var m = 0, x = 0, S = []; x < p.length; ) {
                            _.lastIndex = d ? x : 0;
                            var O,
                                E = s(_, d ? p : p.slice(x));
                            if (null === E || (O = f(u(_.lastIndex + (d ? 0 : x)), p.length)) === m) x = a(p, x, g);
                            else {
                                if ((S.push(p.slice(m, x)), S.length === b)) return S;
                                for (var w = 1; w <= E.length - 1; w++) if ((S.push(E[w]), S.length === b)) return S;
                                x = m = O;
                            }
                        }
                        return S.push(p.slice(m)), S;
                    },
                ]
            );
        });
    },
    function (t, e, n) {
        for (
            var r = n(56),
                o = n(26),
                i = n(10),
                a = n(1),
                u = n(5),
                s = n(25),
                c = n(0),
                l = c("iterator"),
                f = c("toStringTag"),
                p = s.Array,
                d = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                v = o(d),
                h = 0;
            h < v.length;
            h++
        ) {
            var g,
                y = v[h],
                _ = d[y],
                b = a[y],
                m = b && b.prototype;
            if (m && (m[l] || u(m, l, p), m[f] || u(m, f, y), (s[y] = p), _)) for (g in r) m[g] || i(m, g, r[g], !0);
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(38),
            o = {};
        (o[n(0)("toStringTag")] = "z"),
            o + "" != "[object z]" &&
                n(10)(
                    Object.prototype,
                    "toString",
                    function () {
                        return "[object " + r(this) + "]";
                    },
                    !0
                );
    },
    function (t, e, n) {
        var r = n(2);
        r(r.P, "Function", { bind: n(74) });
    },
    function (t, e, n) {
        "use strict";
        var r = n(22),
            o = n(6),
            i = n(75),
            a = [].slice,
            u = {};
        t.exports =
            Function.bind ||
            function (t) {
                var e = r(this),
                    n = a.call(arguments, 1),
                    s = function () {
                        var r = n.concat(a.call(arguments));
                        return this instanceof s
                            ? (function (t, e, n) {
                                  if (!(e in u)) {
                                      for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
                                      u[e] = Function("F,a", "return new F(" + r.join(",") + ")");
                                  }
                                  return u[e](t, n);
                              })(e, r.length, r)
                            : i(e, r, t);
                    };
                return o(e.prototype) && (s.prototype = e.prototype), s;
            };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    function (t, e, n) {
        var r = n(2),
            o = n(13),
            i = n(3),
            a = n(77),
            u = "[" + a + "]",
            s = RegExp("^" + u + u + "*"),
            c = RegExp(u + u + "*$"),
            l = function (t, e, n) {
                var o = {},
                    u = i(function () {
                        return !!a[t]() || "​" != "​"[t]();
                    }),
                    s = (o[t] = u ? e(f) : a[t]);
                n && (o[n] = s), r(r.P + r.F * u, "String", o);
            },
            f = (l.trim = function (t, e) {
                return (t = String(o(t))), 1 & e && (t = t.replace(s, "")), 2 & e && (t = t.replace(c, "")), t;
            });
        t.exports = l;
    },
    function (t, e) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    },
    function (t, e, n) {
        "use strict";
        var r = n(1),
            o = n(8),
            i = n(18),
            a = n(79),
            u = n(23),
            s = n(3),
            c = n(47).f,
            l = n(48).f,
            f = n(9).f,
            p = n(76).trim,
            d = r.Number,
            v = d,
            h = d.prototype,
            g = "Number" == i(n(37)(h)),
            y = "trim" in String.prototype,
            _ = function (t) {
                var e = u(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n,
                        r,
                        o,
                        i = (e = y ? e.trim() : p(e, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === i) {
                        switch (e.charCodeAt(1)) {
                            case 66:
                            case 98:
                                (r = 2), (o = 49);
                                break;
                            case 79:
                            case 111:
                                (r = 8), (o = 55);
                                break;
                            default:
                                return +e;
                        }
                        for (var a, s = e.slice(2), c = 0, l = s.length; c < l; c++) if ((a = s.charCodeAt(c)) < 48 || a > o) return NaN;
                        return parseInt(s, r);
                    }
                }
                return +e;
            };
        if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
            d = function (t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof d &&
                    (g
                        ? s(function () {
                              h.valueOf.call(n);
                          })
                        : "Number" != i(n))
                    ? a(new v(_(e)), n, d)
                    : _(e);
            };
            for (
                var b, m = n(7) ? c(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0;
                m.length > x;
                x++
            )
                o(v, (b = m[x])) && !o(d, b) && f(d, b, l(v, b));
            (d.prototype = h), (h.constructor = d), n(10)(r, "Number", d);
        }
    },
    function (t, e, n) {
        var r = n(6),
            o = n(80).set;
        t.exports = function (t, e, n) {
            var i,
                a = e.constructor;
            return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(t, i), t;
        };
    },
    function (t, e, n) {
        var r = n(6),
            o = n(4),
            i = function (t, e) {
                if ((o(t), !r(e) && null !== e)) throw TypeError(e + ": can't set as prototype!");
            };
        t.exports = {
            set:
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function (t, e, r) {
                          try {
                              (r = n(24)(Function.call, n(48).f(Object.prototype, "__proto__").set, 2))(t, []), (e = !(t instanceof Array));
                          } catch (t) {
                              e = !0;
                          }
                          return function (t, n) {
                              return i(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                          };
                      })({}, !1)
                    : void 0),
            check: i,
        };
    },
    function (t, e, n) {
        n(67)("asyncIterator");
    },
    function (t, e, n) {
        "use strict";
        var r = n(1),
            o = n(8),
            i = n(7),
            a = n(2),
            u = n(10),
            s = n(83).KEY,
            c = n(3),
            l = n(20),
            f = n(32),
            p = n(17),
            d = n(0),
            v = n(68),
            h = n(67),
            g = n(84),
            y = n(42),
            _ = n(4),
            b = n(6),
            m = n(16),
            x = n(23),
            S = n(19),
            O = n(37),
            E = n(85),
            w = n(48),
            T = n(9),
            P = n(26),
            A = w.f,
            N = T.f,
            I = E.f,
            j = r.Symbol,
            M = r.JSON,
            L = M && M.stringify,
            F = d("_hidden"),
            R = d("toPrimitive"),
            k = {}.propertyIsEnumerable,
            C = l("symbol-registry"),
            D = l("symbols"),
            $ = l("op-symbols"),
            U = Object.prototype,
            G = "function" == typeof j,
            z = r.QObject,
            V = !z || !z.prototype || !z.prototype.findChild,
            q =
                i &&
                c(function () {
                    return (
                        7 !=
                        O(
                            N({}, "a", {
                                get: function () {
                                    return N(this, "a", { value: 7 }).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (t, e, n) {
                          var r = A(U, e);
                          r && delete U[e], N(t, e, n), r && t !== U && N(U, e, r);
                      }
                    : N,
            B = function (t) {
                var e = (D[t] = O(j.prototype));
                return (e._k = t), e;
            },
            X =
                G && "symbol" == typeof j.iterator
                    ? function (t) {
                          return "symbol" == typeof t;
                      }
                    : function (t) {
                          return t instanceof j;
                      },
            Y = function (t, e, n) {
                return (
                    t === U && Y($, e, n),
                    _(t),
                    (e = x(e, !0)),
                    _(n),
                    o(D, e) ? (n.enumerable ? (o(t, F) && t[F][e] && (t[F][e] = !1), (n = O(n, { enumerable: S(0, !1) }))) : (o(t, F) || N(t, F, S(1, {})), (t[F][e] = !0)), q(t, e, n)) : N(t, e, n)
                );
            },
            J = function (t, e) {
                _(t);
                for (var n, r = g((e = m(e))), o = 0, i = r.length; i > o; ) Y(t, (n = r[o++]), e[n]);
                return t;
            },
            W = function (t) {
                var e = k.call(this, (t = x(t, !0)));
                return !(this === U && o(D, t) && !o($, t)) && (!(e || !o(this, t) || !o(D, t) || (o(this, F) && this[F][t])) || e);
            },
            H = function (t, e) {
                if (((t = m(t)), (e = x(e, !0)), t !== U || !o(D, e) || o($, e))) {
                    var n = A(t, e);
                    return !n || !o(D, e) || (o(t, F) && t[F][e]) || (n.enumerable = !0), n;
                }
            },
            Z = function (t) {
                for (var e, n = I(m(t)), r = [], i = 0; n.length > i; ) o(D, (e = n[i++])) || e == F || e == s || r.push(e);
                return r;
            },
            K = function (t) {
                for (var e, n = t === U, r = I(n ? $ : m(t)), i = [], a = 0; r.length > a; ) !o(D, (e = r[a++])) || (n && !o(U, e)) || i.push(D[e]);
                return i;
            };
        G ||
            (u(
                (j = function () {
                    if (this instanceof j) throw TypeError("Symbol is not a constructor!");
                    var t = p(arguments.length > 0 ? arguments[0] : void 0),
                        e = function (n) {
                            this === U && e.call($, n), o(this, F) && o(this[F], t) && (this[F][t] = !1), q(this, t, S(1, n));
                        };
                    return i && V && q(U, t, { configurable: !0, set: e }), B(t);
                }).prototype,
                "toString",
                function () {
                    return this._k;
                }
            ),
            (w.f = H),
            (T.f = Y),
            (n(47).f = E.f = Z),
            (n(45).f = W),
            (n(69).f = K),
            i && !n(21) && u(U, "propertyIsEnumerable", W, !0),
            (v.f = function (t) {
                return B(d(t));
            })),
            a(a.G + a.W + a.F * !G, { Symbol: j });
        for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt; ) d(Q[tt++]);
        for (var et = P(d.store), nt = 0; et.length > nt; ) h(et[nt++]);
        a(a.S + a.F * !G, "Symbol", {
            for: function (t) {
                return o(C, (t += "")) ? C[t] : (C[t] = j(t));
            },
            keyFor: function (t) {
                if (!X(t)) throw TypeError(t + " is not a symbol!");
                for (var e in C) if (C[e] === t) return e;
            },
            useSetter: function () {
                V = !0;
            },
            useSimple: function () {
                V = !1;
            },
        }),
            a(a.S + a.F * !G, "Object", {
                create: function (t, e) {
                    return void 0 === e ? O(t) : J(O(t), e);
                },
                defineProperty: Y,
                defineProperties: J,
                getOwnPropertyDescriptor: H,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: K,
            }),
            M &&
                a(
                    a.S +
                        a.F *
                            (!G ||
                                c(function () {
                                    var t = j();
                                    return "[null]" != L([t]) || "{}" != L({ a: t }) || "{}" != L(Object(t));
                                })),
                    "JSON",
                    {
                        stringify: function (t) {
                            for (var e, n, r = [t], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                            if (((n = e = r[1]), (b(e) || void 0 !== t) && !X(t)))
                                return (
                                    y(e) ||
                                        (e = function (t, e) {
                                            if (("function" == typeof n && (e = n.call(this, t, e)), !X(e))) return e;
                                        }),
                                    (r[1] = e),
                                    L.apply(M, r)
                                );
                        },
                    }
                ),
            j.prototype[R] || n(5)(j.prototype, R, j.prototype.valueOf),
            f(j, "Symbol"),
            f(Math, "Math", !0),
            f(r.JSON, "JSON", !0);
    },
    function (t, e, n) {
        var r = n(17)("meta"),
            o = n(6),
            i = n(8),
            a = n(9).f,
            u = 0,
            s =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            c = !n(3)(function () {
                return s(Object.preventExtensions({}));
            }),
            l = function (t) {
                a(t, r, { value: { i: "O" + ++u, w: {} } });
            },
            f = (t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function (t, e) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, r)) {
                        if (!s(t)) return "F";
                        if (!e) return "E";
                        l(t);
                    }
                    return t[r].i;
                },
                getWeak: function (t, e) {
                    if (!i(t, r)) {
                        if (!s(t)) return !0;
                        if (!e) return !1;
                        l(t);
                    }
                    return t[r].w;
                },
                onFreeze: function (t) {
                    return c && f.NEED && s(t) && !i(t, r) && l(t), t;
                },
            });
    },
    function (t, e, n) {
        var r = n(26),
            o = n(69),
            i = n(45);
        t.exports = function (t) {
            var e = r(t),
                n = o.f;
            if (n) for (var a, u = n(t), s = i.f, c = 0; u.length > c; ) s.call(t, (a = u[c++])) && e.push(a);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(16),
            o = n(47).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return a && "[object Window]" == i.call(t)
                ? (function (t) {
                      try {
                          return o(t);
                      } catch (t) {
                          return a.slice();
                      }
                  })(t)
                : o(r(t));
        };
    },
    ,
    function (t, e, n) {
        var r = n(12),
            o = n(26);
        n(88)("keys", function () {
            return function (t) {
                return o(r(t));
            };
        });
    },
    function (t, e, n) {
        var r = n(2),
            o = n(14),
            i = n(3);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                a = {};
            (a[t] = e(n)),
                r(
                    r.S +
                        r.F *
                            i(function () {
                                n(1);
                            }),
                    "Object",
                    a
                );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(22),
            i = n(12),
            a = n(3),
            u = [].sort,
            s = [1, 2, 3];
        r(
            r.P +
                r.F *
                    (a(function () {
                        s.sort(void 0);
                    }) ||
                        !a(function () {
                            s.sort(null);
                        }) ||
                        !n(29)(u)),
            "Array",
            {
                sort: function (t) {
                    return void 0 === t ? u.call(i(this)) : u.call(i(this), o(t));
                },
            }
        );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
        "use strict";
        var r = n(4),
            o = n(11),
            i = n(39),
            a = n(40);
        n(41)("match", 1, function (t, e, n, u) {
            return [
                function (n) {
                    var r = t(this),
                        o = null == n ? void 0 : n[e];
                    return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r));
                },
                function (t) {
                    var e = u(n, t, this);
                    if (e.done) return e.value;
                    var s = r(t),
                        c = String(this);
                    if (!s.global) return a(s, c);
                    var l = s.unicode;
                    s.lastIndex = 0;
                    for (var f, p = [], d = 0; null !== (f = a(s, c)); ) {
                        var v = String(f[0]);
                        (p[d] = v), "" === v && (s.lastIndex = i(c, o(s.lastIndex), l)), d++;
                    }
                    return 0 === d ? null : p;
                },
            ];
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
        "use strict";
        n.r(e);
        n(61), n(63), n(99), n(78), n(81), n(82), n(129), n(71), n(56), n(72), n(87), n(89), n(70), n(73), n(53);
        ckan.module("querytool-table", function () {
            var t = {
                    es: {
                        sProcessing: "Procesando...",
                        sLengthMenu: "Mostrar _MENU_ registros",
                        sZeroRecords: "No se encontraron resultados",
                        sEmptyTable: "Ningún dato disponible en esta tabla",
                        sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
                        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
                        sInfoPostFix: "",
                        sSearch: "Buscar:",
                        sUrl: "",
                        sInfoThousands: ",",
                        sLoadingRecords: "Cargando...",
                        oPaginate: { sFirst: "Primero", sLast: "Último", sNext: "Siguiente", sPrevious: "Anterior" },
                        oAria: { sSortAscending: ": Activar para ordenar la columna de manera ascendente", sSortDescending: ": Activar para ordenar la columna de manera descendente" },
                    },
                    fr: {
                        sProcessing: "Traitement en cours...",
                        sSearch: "Rechercher&nbsp;:",
                        sLengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
                        sInfo: "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
                        sInfoEmpty: "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
                        sInfoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
                        sInfoPostFix: "",
                        sLoadingRecords: "Chargement en cours...",
                        sZeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
                        sEmptyTable: "Aucune donn&eacute;e disponible dans le tableau",
                        oPaginate: { sFirst: "Premier", sPrevious: "Pr&eacute;c&eacute;dent", sNext: "Suivant", sLast: "Dernier" },
                        oAria: { sSortAscending: ": activer pour trier la colonne par ordre croissant", sSortDescending: ": activer pour trier la colonne par ordre d&eacute;croissant" },
                        select: { rows: { _: "%d lignes séléctionnées", 0: "Aucune ligne séléctionnée", 1: "1 ligne séléctionnée" } },
                    },
                    pt_BR: {
                        sEmptyTable: "Nenhum registro encontrado",
                        sInfo: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                        sInfoEmpty: "Mostrando 0 até 0 de 0 registros",
                        sInfoFiltered: "(Filtrados de _MAX_ registros)",
                        sInfoPostFix: "",
                        sInfoThousands: ".",
                        sLengthMenu: "_MENU_ resultados por página",
                        sLoadingRecords: "Carregando...",
                        sProcessing: "Processando...",
                        sZeroRecords: "Nenhum registro encontrado",
                        sSearch: "Pesquisar",
                        oPaginate: { sNext: "Próximo", sPrevious: "Anterior", sFirst: "Primeiro", sLast: "Último" },
                        oAria: { sSortAscending: ": Ordenar colunas de forma ascendente", sSortDescending: ": Ordenar colunas de forma descendente" },
                    },
                    zh_CN: {
                        sProcessing: "处理中...",
                        sLengthMenu: "显示 _MENU_ 项结果",
                        sZeroRecords: "没有匹配结果",
                        sInfo: "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        sInfoEmpty: "显示第 0 至 0 项结果，共 0 项",
                        sInfoFiltered: "(由 _MAX_ 项结果过滤)",
                        sInfoPostFix: "",
                        sSearch: "搜索:",
                        sUrl: "",
                        sEmptyTable: "表中数据为空",
                        sLoadingRecords: "载入中...",
                        sInfoThousands: ",",
                        oPaginate: { sFirst: "首页", sPrevious: "上页", sNext: "下页", sLast: "末页" },
                        oAria: { sSortAscending: ": 以升序排列此列", sSortDescending: ": 以降序排列此列" },
                    },
                },
                e = function (t, e, n) {
                    var r = ckan.sandbox().client.endpoint + "/api/3/action/" + t + "?" + (e = $.param(e));
                    $.getJSON(r, n);
                };
            return {
                initialize: function () {
                    this.createTable();
                    var t = this.el.closest(".table_item");
                    t.length > 0 && t.find(".update-table-btn").click(this.updateTable.bind(this));
                    this.sandbox.subscribe("querytool:updateTables", this.updateTable.bind(this));
                },
                createTable: function (n, r, o) {
                    var i = this,
                        a = this.options.table_id,
                        u = $("html").attr("lang"),
                        s = (this.options.resource_id, n || this.options.y_axis),
                        c = !0 === this.options.measure_label ? "" : this.options.measure_label,
                        l = this.options.main_value;
                    !0 === l && (l = $("[name*=table_main_value_]").val()), o && (l = r);
                    console.log("TABLE");
                    console.log(this.options);

                    //var queryFilters = "";
                    //var queryFilters = (this.options.query_filters === true) ? [] : this.options.query_filters;
                    //if (queryFilters.length) queryFilters = (this.options.info_query_filters === true) ? [] : this.options.info_query_filters;
                    //queryFilters = this.options.info_query_filters;
                    //console.log(queryFilters)


                    //Custom solution 
                    var queryFilters = [];
                    if (this.options.info_query_filters.length > 0) {
                        if(this.options.info_query_filters === true) {
                            queryFilters = [];
                        } else {
                            queryFilters = this.options.info_query_filters;
                        }
                    }

                    var optionalFilterName = (this.options.filter_name === true) ? '' : this.options.filter_name;
                    var optionalFilterSlug = (this.options.filter_slug === true) ? '' : this.options.filter_slug;
                    var optionalFilterValue = (this.options.filter_value === true) ? '' : this.options.filter_value;
                    var optionalFilter = optionalFilterName ? {name: optionalFilterName, slug: optionalFilterSlug, value: optionalFilterValue} : undefined;
                    var tableGroupBy = this.options.table_group_by ? '' : parseInt(this.options.table_group_by);
                    
                    var f = !0 === this.options.category_name ? "" : this.options.category_name,
                        p = this.renderChartTitle(this.options.table_title,{
                            measure: {name: this.options.y_axis, alias: this.options.measure_label},
                            filters: queryFilters,
                            optionalFilter: optionalFilter,
                        }),
                        d = this.create_sql_string(l, s, f);
                    e("querytool_get_resource_data", { sql_string: d }, function (e) {
                        var n = e.result;
                        i.sortData(n, s.toLowerCase(), l.toLowerCase());
                        var r = f ? i.render_data_table_with_category(n, f, l, s, c) : i.render_data_table(n, l, s, c),
                            o = $("#table-item-" + a);
                        console.log(tableGroupBy)
                        $.fn.DataTable.isDataTable(o) && o.DataTable().destroy(),
                            o.html(r),
                            o.DataTable({
                                language: t[u],
                                dom: '<"dt-header' + a + '">r<lf>tip<"dtf-butons"B>',
                                buttons: [
                                    { extend: "csv", className: "btn btn-default" },
                                    { extend: "excel", className: "btn btn-default" },
                                    { extend: "pdf", className: "btn btn-default" },
                                ],
                                processing: !0,
                                rowsGroup: [
                                    tableGroupBy
                                ]
                            }),
                            $("div.dt-header" + a).text(p);
                    });
                },
                create_sql_string: function (t, e, n) {
                    var r = this.options.sql_string.split("*")[1],
                        o = !0 === this.options.filter_name ? "" : this.options.filter_name,
                        i = !0 === this.options.filter_value ? "" : this.options.filter_value;
                    o && i && (r += ' AND ("' + this.options.filter_name + "\" = '" + this.options.filter_value + "')");
                    return n ? 'SELECT "' + n + '", "' + t + '", SUM("' + e + '") as "' + e + '"' + r + ' GROUP BY "' + n + '", "' + t + '"' : 'SELECT "' + t + '", SUM("' + e + '") as "' + e + '"' + r + ' GROUP BY "' + t + '"';
                },
                render_data_table: function (t, e, n, r) {
                    var o = { main_value: (e = e.toLowerCase()), measure_label: r, y_axis: (n = n.toLowerCase()), rows: t };
                    return this.render_template(
                        "\n          <table>\n            <thead>\n              <tr>\n                <th>{main_value|capitalize}</th>\n                <th>{measure_label|capitalize}</th>\n              </tr>\n            </thead>\n            <tbody>\n              {% for row in rows %}\n                <tr>\n                  <td>{row[main_value]|process_table_value}</td>\n                  <td>{row[y_axis]|process_table_value}</td>\n                </tr>\n              {% endfor %}\n            </tbody>\n          </table>\n          ",
                        o
                    );
                },
                render_data_table_with_category: function (t, e, n, r, o) {
                    (e = e.toLowerCase()), (n = n.toLowerCase()), (r = r.toLowerCase());
                    var i = {},
                        a = {},
                        u = !0,
                        s = !1,
                        c = void 0;
                    try {
                        for (var l, f = t[Symbol.iterator](); !(u = (l = f.next()).done); u = !0) {
                            var p = l.value;
                            i[p[n]] || (i[p[n]] = {});
                            var d = i[p[n]];
                            (d[n] = p[n]), (d[p[e]] = p[r]), (a[p[e]] = !0);
                        }
                    } catch (t) {
                        (s = !0), (c = t);
                    } finally {
                        try {
                            u || null == f.return || f.return();
                        } finally {
                            if (s) throw c;
                        }
                    }
                    var v = { main_value: n, measure_label: o, y_axis: r, y_axis_groups: Object.keys(a).sort(), rows: Object.values(i) };
                    return this.render_template(
                        '\n          <table>\n            <thead>\n              <tr>\n                <th rowspan="2">{main_value|capitalize}</th>\n                <th colspan="{y_axis_groups.length}">{measure_label|capitalize}</th>\n              </tr>\n              <tr>\n                {% for y_axis_group in y_axis_groups %}\n                  <th>{y_axis_group}</th>\n                {% endfor %}\n              </tr>\n            </thead>\n            <tbody>\n              {% for row in rows %}\n                <tr>\n                  <td>{row[main_value]|process_table_value}</td>\n                  {% for y_axis_group in y_axis_groups %}\n                    <td>{row[y_axis_group]|process_table_value}</td>\n                  {% endfor %}\n                </tr>\n              {% endfor %}\n            </tbody>\n          </table>\n          ',
                        v
                    );
                },
                render_template: function (t, e) {
                    try {
                        var n = nunjucks.configure({ tags: { variableStart: "{", variableEnd: "}" } });
                        return n.addFilter("process_table_value", this.process_table_value.bind(this)), n.renderString(t, e);
                    } catch (t) {
                        return "";
                    }
                },
                process_table_value: function (t) {
                    if (isNaN(t)) return t;
                    var e = !0 === this.options.data_format ? "" : this.options.data_format,
                        n = 0,
                        r = "";
                    return "$" === e ? ((n = this.countDecimals(t, 2)), (r = d3.format("$,." + n + "f"))) : "s" === e ? ((t = Math.round(10 * t) / 10), (r = d3.format(e))) : (r = d3.format(e)), r(t);
                },
                countDecimals: function (t, e) {
                    return Math.min((10 * t) % 1 ? 2 : t % 1 ? 1 : 0, e);
                },
                updateTable: function () {
                    var t = $("[name=choose_y_axis_column]").val(),
                        e = this.el.parent().parent().find("[id*=table_main_value_]").val(),
                        n = $("#choose_y_axis_column option:selected").text();
                    (this.options.category_name = this.el.parent().parent().find("[id*=table_category_name_]").val()),
                        (this.options.data_format = this.el.parent().parent().find("[id*=table_data_format_]").val()),
                        (this.options.filter_name = this.el.parent().parent().find("[id*=table_field_filter_name_]").val()),
                        (this.options.filter_value = this.el.parent().parent().find("[id*=table_field_filter_value_]").val()),
                        (this.options.table_title = this.el.parent().parent().find("[id*=table_field_title_]").val()),
                        (this.options.table_group_by = this.el.parent().parent().find("[id*=table_group_by_]").val()),
                        (this.options.measure_label = n),
                        this.createTable(t, e, !0);
                },
                sortData: function (t, e, n) {
                    t.sort(function (t, e) {
                        var r = t[n],
                            o = e[n];
                        if (isNaN(r) || isNaN(o)) {
                            var i,
                                a = r.match(/^\d{1,2}\./),
                                u = o.match(/^\d{1,2}\./);
                            return a && u ? (0 === (i = parseInt(a[0]) - parseInt(u[0])) ? 0 : i / Math.abs(i)) : a && !u ? -1 : !a && u ? 1 : r < o ? -1 : r > o ? 1 : 0;
                        }
                        return 0 === (i = Number(r) - Number(o)) ? 0 : i / Math.abs(i);
                    })

                    t.forEach(function(record) {

                        if (isNaN(record[n])) {
                            //Custom Sorting Solution 
                            record[Object.keys(record)[0]] = record[Object.keys(record)[0]].replace(/^\d{1,2}\./, '');
                       
                            record[n] = record[n].replace(/^\d{1,2}\./, '');
                        }
                    });
                    //console.log(t)
                },
                teardown: function () {
                    this.sandbox.unsubscribe("querytool:updateTables", this.updateTable.bind(this));
                },
                renderChartTitle: function (title, options) {

                    // Configure nunjucks
                    var env = nunjucks.configure({tags: {variableStart: '{', variableEnd: '}'}});

                    // Prepare data
                    var data = {measure: options.measure.alias};
                    for (let filter of options.filters) data[filter.slug] = filter.value;
                    if (options.optionalFilter) data.optional_filter = options.optionalFilter.value;

                    // Render and return
                    try {
                        return env.renderString(title, data);
                    } catch (error) {
                        return title;
                    }
          
                }
            };
        });
    },
    function (t, e, n) {
        var r = n(2),
            o = n(130)(!1);
        r(r.S, "Object", {
            values: function (t) {
                return o(t);
            },
        });
    },
    function (t, e, n) {
        var r = n(26),
            o = n(16),
            i = n(45).f;
        t.exports = function (t) {
            return function (e) {
                for (var n, a = o(e), u = r(a), s = u.length, c = 0, l = []; s > c; ) i.call(a, (n = u[c++])) && l.push(t ? [n, a[n]] : a[n]);
                return l;
            };
        };
    },
]);
//# sourceMappingURL=table-module.js.map
