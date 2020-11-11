! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 124)
}([function(t, e, n) {
    var i = n(20)("wks"),
        r = n(17),
        o = n(1).Symbol,
        a = "function" == typeof o;
    (t.exports = function(t) {
        return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
    }).store = i
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    var i = n(1),
        r = n(14),
        o = n(5),
        a = n(10),
        s = n(24),
        c = function(t, e, n) {
            var u, l, f, p, h = t & c.F,
                _ = t & c.G,
                d = t & c.S,
                v = t & c.P,
                y = t & c.B,
                m = _ ? i : d ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
                g = _ ? r : r[e] || (r[e] = {}),
                x = g.prototype || (g.prototype = {});
            for (u in _ && (n = e), n) f = ((l = !h && m && void 0 !== m[u]) ? m : n)[u], p = y && l ? s(f, i) : v && "function" == typeof f ? s(Function.call, f) : f, m && a(m, u, f, t & c.U), g[u] != f && o(g, u, p), v && x[u] != f && (x[u] = f)
        };
    i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var i = n(6);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    var i = n(9),
        r = n(19);
    t.exports = n(7) ? function(t, e, n) {
        return i.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    t.exports = !n(3)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var i = n(4),
        r = n(36),
        o = n(23),
        a = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = o(e, !0), i(n), r) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var i = n(1),
        r = n(5),
        o = n(8),
        a = n(17)("src"),
        s = n(49),
        c = ("" + s).split("toString");
    n(14).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var u = "function" == typeof n;
        u && (o(n, "name") || r(n, "name", e)), t[e] !== n && (u && (o(n, a) || r(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === i ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[a] || s.call(this)
    })
}, function(t, e, n) {
    var i = n(15),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var i = n(13);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e, n) {
    var i = n(34),
        r = n(13);
    t.exports = function(t) {
        return i(r(t))
    }
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var i = n(14),
        r = n(1),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(21) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = !1
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var i = n(6);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var i = n(22);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var i = n(43),
        r = n(30);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(24),
        r = n(34),
        o = n(12),
        a = n(11),
        s = n(50);
    t.exports = function(t, e) {
        var n = 1 == t,
            c = 2 == t,
            u = 3 == t,
            l = 4 == t,
            f = 6 == t,
            p = 5 == t || f,
            h = e || s;
        return function(e, s, _) {
            for (var d, v, y = o(e), m = r(y), g = i(s, _, 3), x = a(m.length), b = 0, S = n ? h(e, x) : c ? h(e, 0) : void 0; x > b; b++)
                if ((p || b in m) && (v = g(d = m[b], b, y), t))
                    if (n) S[b] = v;
                    else if (v) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return d;
                case 6:
                    return b;
                case 2:
                    S.push(d)
            } else if (l) return !1;
            return f ? -1 : u || l ? l : S
        }
    }
}, function(t, e, n) {
    var i = n(20)("keys"),
        r = n(17);
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}, function(t, e, n) {
    "use strict";
    var i = n(3);
    t.exports = function(t, e) {
        return !!t && i(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var i = n(0)("unscopables"),
        r = Array.prototype;
    null == r[i] && n(5)(r, i, {}), t.exports = function(t) {
        r[i][t] = !0
    }
}, function(t, e, n) {
    var i = n(9).f,
        r = n(8),
        o = n(0)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    "use strict";
    var i, r, o = n(52),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        c = a,
        u = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (u || l) && (c = function(t) {
        var e, n, i, r, c = this;
        return l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))), u && (e = c.lastIndex), i = a.call(c, t), u && i && (c.lastIndex = c.global ? i.index + i[0].length : e), l && i && i.length > 1 && s.call(i[0], n, function() {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        }), i
    }), t.exports = c
}, function(t, e, n) {
    var i = n(18);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var i = n(6),
        r = n(1).document,
        o = i(r) && i(r.createElement);
    t.exports = function(t) {
        return o ? r.createElement(t) : {}
    }
}, function(t, e, n) {
    t.exports = !n(7) && !n(3)(function() {
        return 7 != Object.defineProperty(n(35)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var i = n(4),
        r = n(59),
        o = n(30),
        a = n(28)("IE_PROTO"),
        s = function() {},
        c = function() {
            var t, e = n(35)("iframe"),
                i = o.length;
            for (e.style.display = "none", n(60).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c.prototype[o[i]];
            return c()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s.prototype = i(t), n = new s, s.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : r(n, e)
    }
}, function(t, e, n) {
    var i = n(18),
        r = n(0)("toStringTag"),
        o = "Arguments" == i(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    "use strict";
    var i = n(54)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? i(t, e).length : 1)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(38),
        r = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var o = n.call(t, e);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== i(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return r.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n(62);
    var i = n(10),
        r = n(5),
        o = n(3),
        a = n(13),
        s = n(0),
        c = n(33),
        u = s("species"),
        l = !o(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var p = s(t),
            h = !o(function() {
                var e = {};
                return e[p] = function() {
                    return 7
                }, 7 != "" [t](e)
            }),
            _ = h ? !o(function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[u] = function() {
                    return n
                }), n[p](""), !e
            }) : void 0;
        if (!h || !_ || "replace" === t && !l || "split" === t && !f) {
            var d = /./ [p],
                v = n(a, p, "" [t], function(t, e, n, i, r) {
                    return e.exec === c ? h && !r ? {
                        done: !0,
                        value: d.call(e, n, i)
                    } : {
                        done: !0,
                        value: t.call(n, e, i)
                    } : {
                        done: !1
                    }
                }),
                y = v[0],
                m = v[1];
            i(String.prototype, t, y), r(RegExp.prototype, p, 2 == e ? function(t, e) {
                return m.call(t, this, e)
            } : function(t) {
                return m.call(t, this)
            })
        }
    }
}, function(t, e, n) {
    var i = n(18);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(8),
        r = n(16),
        o = n(44)(!1),
        a = n(28)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = r(t),
            c = 0,
            u = [];
        for (n in s) n != a && i(s, n) && u.push(n);
        for (; e.length > c;) i(s, n = e[c++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    var i = n(16),
        r = n(11),
        o = n(46);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = i(e),
                u = r(c.length),
                l = o(a, u);
            if (t && n != n) {
                for (; u > l;)
                    if ((s = c[l++]) != s) return !0
            } else
                for (; u > l; l++)
                    if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var i = n(15),
        r = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var i = n(43),
        r = n(30).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(45),
        r = n(19),
        o = n(16),
        a = n(23),
        s = n(8),
        c = n(36),
        u = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? u : function(t, e) {
        if (t = o(t), e = a(e, !0), c) try {
            return u(t, e)
        } catch (t) {}
        if (s(t, e)) return r(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    t.exports = n(20)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var i = n(51);
    t.exports = function(t, e) {
        return new(i(t))(e)
    }
}, function(t, e, n) {
    var i = n(6),
        r = n(42),
        o = n(0)("species");
    t.exports = function(t) {
        var e;
        return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(4);
    t.exports = function() {
        var t = i(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(27)(5),
        o = !0;
    "find" in [] && Array(1).find(function() {
        o = !1
    }), i(i.P + i.F * o, "Array", {
        find: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(31)("find")
}, function(t, e, n) {
    var i = n(15),
        r = n(13);
    t.exports = function(t) {
        return function(e, n) {
            var o, a, s = String(r(e)),
                c = i(n),
                u = s.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    var i = n(8),
        r = n(12),
        o = n(28)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    "use strict";
    var i = n(31),
        r = n(66),
        o = n(25),
        a = n(16);
    t.exports = n(57)(Array, "Array", function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    "use strict";
    var i = n(21),
        r = n(2),
        o = n(10),
        a = n(5),
        s = n(25),
        c = n(58),
        u = n(32),
        l = n(55),
        f = n(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    t.exports = function(t, e, n, _, d, v, y) {
        c(n, e, _);
        var m, g, x, b = function(t) {
                if (!p && t in E) return E[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            S = e + " Iterator",
            O = "values" == d,
            w = !1,
            E = t.prototype,
            k = E[f] || E["@@iterator"] || d && E[d],
            j = k || b(d),
            N = d ? O ? b("entries") : j : void 0,
            P = "Array" == e && E.entries || k;
        if (P && (x = l(P.call(new t))) !== Object.prototype && x.next && (u(x, S, !0), i || "function" == typeof x[f] || a(x, f, h)), O && k && "values" !== k.name && (w = !0, j = function() {
                return k.call(this)
            }), i && !y || !p && !w && E[f] || a(E, f, j), s[e] = j, s[S] = h, d)
            if (m = {
                    values: O ? j : b("values"),
                    keys: v ? j : b("keys"),
                    entries: N
                }, y)
                for (g in m) g in E || o(E, g, m[g]);
            else r(r.P + r.F * (p || w), e, m);
        return m
    }
}, function(t, e, n) {
    "use strict";
    var i = n(37),
        r = n(19),
        o = n(32),
        a = {};
    n(5)(a, n(0)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(a, {
            next: r(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e, n) {
    var i = n(9),
        r = n(4),
        o = n(26);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, a = o(e), s = a.length, c = 0; s > c;) i.f(t, n = a[c++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(1).document;
    t.exports = i && i.documentElement
}, function(t, e, n) {
    "use strict";
    var i = n(4),
        r = n(12),
        o = n(11),
        a = n(15),
        s = n(39),
        c = n(40),
        u = Math.max,
        l = Math.min,
        f = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g,
        h = /\$([$&`']|\d\d?)/g;
    n(41)("replace", 2, function(t, e, n, _) {
        return [function(i, r) {
            var o = t(this),
                a = null == i ? void 0 : i[e];
            return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        }, function(t, e) {
            var r = _(n, t, this, e);
            if (r.done) return r.value;
            var f = i(t),
                p = String(this),
                h = "function" == typeof e;
            h || (e = String(e));
            var v = f.global;
            if (v) {
                var y = f.unicode;
                f.lastIndex = 0
            }
            for (var m = [];;) {
                var g = c(f, p);
                if (null === g) break;
                if (m.push(g), !v) break;
                "" === String(g[0]) && (f.lastIndex = s(p, o(f.lastIndex), y))
            }
            for (var x, b = "", S = 0, O = 0; O < m.length; O++) {
                g = m[O];
                for (var w = String(g[0]), E = u(l(a(g.index), p.length), 0), k = [], j = 1; j < g.length; j++) k.push(void 0 === (x = g[j]) ? x : String(x));
                var N = g.groups;
                if (h) {
                    var P = [w].concat(k, E, p);
                    void 0 !== N && P.push(N);
                    var F = String(e.apply(void 0, P))
                } else F = d(w, p, E, k, N, e);
                E >= S && (b += p.slice(S, E) + F, S = E + w.length)
            }
            return b + p.slice(S)
        }];

        function d(t, e, i, o, a, s) {
            var c = i + t.length,
                u = o.length,
                l = h;
            return void 0 !== a && (a = r(a), l = p), n.call(s, l, function(n, r) {
                var s;
                switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, i);
                    case "'":
                        return e.slice(c);
                    case "<":
                        s = a[r.slice(1, -1)];
                        break;
                    default:
                        var l = +r;
                        if (0 === l) return n;
                        if (l > u) {
                            var p = f(l / 10);
                            return 0 === p ? n : p <= u ? void 0 === o[p - 1] ? r.charAt(1) : o[p - 1] + r.charAt(1) : n
                        }
                        s = o[l - 1]
                }
                return void 0 === s ? "" : s
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(33);
    n(2)({
        target: "RegExp",
        proto: !0,
        forced: i !== /./.exec
    }, {
        exec: i
    })
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(27)(0),
        o = n(29)([].forEach, !0);
    i(i.P + i.F * !o, "Array", {
        forEach: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var i = n(6),
        r = n(18),
        o = n(0)("match");
    t.exports = function(t) {
        var e;
        return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
    }
}, function(t, e, n) {
    var i = n(4),
        r = n(22),
        o = n(0)("species");
    t.exports = function(t, e) {
        var n, a = i(t).constructor;
        return void 0 === a || null == (n = i(a)[o]) ? e : r(n)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var i = n(1),
        r = n(14),
        o = n(21),
        a = n(68),
        s = n(9).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    e.f = n(0)
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    "use strict";
    var i = n(64),
        r = n(4),
        o = n(65),
        a = n(39),
        s = n(11),
        c = n(40),
        u = n(33),
        l = n(3),
        f = Math.min,
        p = [].push,
        h = !l(function() {
            RegExp(4294967295, "y")
        });
    n(41)("split", 2, function(t, e, n, l) {
        var _;
        return _ = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
            var r = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!i(t)) return n.call(r, t, e);
            for (var o, a, s, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, h = void 0 === e ? 4294967295 : e >>> 0, _ = new RegExp(t.source, l + "g");
                (o = u.call(_, r)) && !((a = _.lastIndex) > f && (c.push(r.slice(f, o.index)), o.length > 1 && o.index < r.length && p.apply(c, o.slice(1)), s = o[0].length, f = a, c.length >= h));) _.lastIndex === o.index && _.lastIndex++;
            return f === r.length ? !s && _.test("") || c.push("") : c.push(r.slice(f)), c.length > h ? c.slice(0, h) : c
        } : "0".split(void 0, 0).length ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, i) {
            var r = t(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r, i) : _.call(String(r), n, i)
        }, function(t, e) {
            var i = l(_, t, this, e, _ !== n);
            if (i.done) return i.value;
            var u = r(t),
                p = String(this),
                d = o(u, RegExp),
                v = u.unicode,
                y = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (h ? "y" : "g"),
                m = new d(h ? u : "^(?:" + u.source + ")", y),
                g = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === g) return [];
            if (0 === p.length) return null === c(m, p) ? [p] : [];
            for (var x = 0, b = 0, S = []; b < p.length;) {
                m.lastIndex = h ? b : 0;
                var O, w = c(m, h ? p : p.slice(b));
                if (null === w || (O = f(s(m.lastIndex + (h ? 0 : b)), p.length)) === x) b = a(p, b, v);
                else {
                    if (S.push(p.slice(x, b)), S.length === g) return S;
                    for (var E = 1; E <= w.length - 1; E++)
                        if (S.push(w[E]), S.length === g) return S;
                    b = x = O
                }
            }
            return S.push(p.slice(x)), S
        }]
    })
}, function(t, e, n) {
    for (var i = n(56), r = n(26), o = n(10), a = n(1), s = n(5), c = n(25), u = n(0), l = u("iterator"), f = u("toStringTag"), p = c.Array, h = {
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
            TouchList: !1
        }, _ = r(h), d = 0; d < _.length; d++) {
        var v, y = _[d],
            m = h[y],
            g = a[y],
            x = g && g.prototype;
        if (x && (x[l] || s(x, l, p), x[f] || s(x, f, y), c[y] = p, m))
            for (v in i) x[v] || o(x, v, i[v], !0)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(38),
        r = {};
    r[n(0)("toStringTag")] = "z", r + "" != "[object z]" && n(10)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}, function(t, e, n) {
    var i = n(2);
    i(i.P, "Function", {
        bind: n(74)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(22),
        r = n(6),
        o = n(75),
        a = [].slice,
        s = {};
    t.exports = Function.bind || function(t) {
        var e = i(this),
            n = a.call(arguments, 1),
            c = function() {
                var i = n.concat(a.call(arguments));
                return this instanceof c ? function(t, e, n) {
                    if (!(e in s)) {
                        for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
                        s[e] = Function("F,a", "return new F(" + i.join(",") + ")")
                    }
                    return s[e](t, n)
                }(e, i.length, i) : o(e, i, t)
            };
        return r(e.prototype) && (c.prototype = e.prototype), c
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var i = n(2),
        r = n(13),
        o = n(3),
        a = n(77),
        s = "[" + a + "]",
        c = RegExp("^" + s + s + "*"),
        u = RegExp(s + s + "*$"),
        l = function(t, e, n) {
            var r = {},
                s = o(function() {
                    return !!a[t]() || "​" != "​" [t]()
                }),
                c = r[t] = s ? e(f) : a[t];
            n && (r[n] = c), i(i.P + i.F * s, "String", r)
        },
        f = l.trim = function(t, e) {
            return t = String(r(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t
        };
    t.exports = l
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        r = n(8),
        o = n(18),
        a = n(79),
        s = n(23),
        c = n(3),
        u = n(47).f,
        l = n(48).f,
        f = n(9).f,
        p = n(76).trim,
        h = i.Number,
        _ = h,
        d = h.prototype,
        v = "Number" == o(n(37)(d)),
        y = "trim" in String.prototype,
        m = function(t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, i, r, o = (e = y ? e.trim() : p(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            i = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            i = 8, r = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var a, c = e.slice(2), u = 0, l = c.length; u < l; u++)
                        if ((a = c.charCodeAt(u)) < 48 || a > r) return NaN;
                    return parseInt(c, i)
                }
            }
            return +e
        };
    if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
        h = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof h && (v ? c(function() {
                d.valueOf.call(n)
            }) : "Number" != o(n)) ? a(new _(m(e)), n, h) : m(e)
        };
        for (var g, x = n(7) ? u(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; x.length > b; b++) r(_, g = x[b]) && !r(h, g) && f(h, g, l(_, g));
        h.prototype = d, d.constructor = h, n(10)(i, "Number", h)
    }
}, function(t, e, n) {
    var i = n(6),
        r = n(80).set;
    t.exports = function(t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && i(o) && r && r(t, o), t
    }
}, function(t, e, n) {
    var i = n(6),
        r = n(4),
        o = function(t, e) {
            if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
            try {
                (i = n(24)(Function.call, n(48).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return o(t, n), e ? t.__proto__ = n : i(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(t, e, n) {
    n(67)("asyncIterator")
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        r = n(8),
        o = n(7),
        a = n(2),
        s = n(10),
        c = n(83).KEY,
        u = n(3),
        l = n(20),
        f = n(32),
        p = n(17),
        h = n(0),
        _ = n(68),
        d = n(67),
        v = n(84),
        y = n(42),
        m = n(4),
        g = n(6),
        x = n(16),
        b = n(23),
        S = n(19),
        O = n(37),
        w = n(85),
        E = n(48),
        k = n(9),
        j = n(26),
        N = E.f,
        P = k.f,
        F = w.f,
        M = i.Symbol,
        I = i.JSON,
        A = I && I.stringify,
        T = h("_hidden"),
        C = h("toPrimitive"),
        L = {}.propertyIsEnumerable,
        R = l("symbol-registry"),
        D = l("symbols"),
        q = l("op-symbols"),
        G = Object.prototype,
        $ = "function" == typeof M,
        z = i.QObject,
        V = !z || !z.prototype || !z.prototype.findChild,
        U = o && u(function() {
            return 7 != O(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var i = N(G, e);
            i && delete G[e], P(t, e, n), i && t !== G && P(G, e, i)
        } : P,
        J = function(t) {
            var e = D[t] = O(M.prototype);
            return e._k = t, e
        },
        B = $ && "symbol" == typeof M.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof M
        },
        W = function(t, e, n) {
            return t === G && W(q, e, n), m(t), e = b(e, !0), m(n), r(D, e) ? (n.enumerable ? (r(t, T) && t[T][e] && (t[T][e] = !1), n = O(n, {
                enumerable: S(0, !1)
            })) : (r(t, T) || P(t, T, S(1, {})), t[T][e] = !0), U(t, e, n)) : P(t, e, n)
        },
        Y = function(t, e) {
            m(t);
            for (var n, i = v(e = x(e)), r = 0, o = i.length; o > r;) W(t, n = i[r++], e[n]);
            return t
        },
        H = function(t) {
            var e = L.call(this, t = b(t, !0));
            return !(this === G && r(D, t) && !r(q, t)) && (!(e || !r(this, t) || !r(D, t) || r(this, T) && this[T][t]) || e)
        },
        K = function(t, e) {
            if (t = x(t), e = b(e, !0), t !== G || !r(D, e) || r(q, e)) {
                var n = N(t, e);
                return !n || !r(D, e) || r(t, T) && t[T][e] || (n.enumerable = !0), n
            }
        },
        X = function(t) {
            for (var e, n = F(x(t)), i = [], o = 0; n.length > o;) r(D, e = n[o++]) || e == T || e == c || i.push(e);
            return i
        },
        Q = function(t) {
            for (var e, n = t === G, i = F(n ? q : x(t)), o = [], a = 0; i.length > a;) !r(D, e = i[a++]) || n && !r(G, e) || o.push(D[e]);
            return o
        };
    $ || (s((M = function() {
        if (this instanceof M) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === G && e.call(q, n), r(this, T) && r(this[T], t) && (this[T][t] = !1), U(this, t, S(1, n))
            };
        return o && V && U(G, t, {
            configurable: !0,
            set: e
        }), J(t)
    }).prototype, "toString", function() {
        return this._k
    }), E.f = K, k.f = W, n(47).f = w.f = X, n(45).f = H, n(69).f = Q, o && !n(21) && s(G, "propertyIsEnumerable", H, !0), _.f = function(t) {
        return J(h(t))
    }), a(a.G + a.W + a.F * !$, {
        Symbol: M
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) h(Z[tt++]);
    for (var et = j(h.store), nt = 0; et.length > nt;) d(et[nt++]);
    a(a.S + a.F * !$, "Symbol", {
        for: function(t) {
            return r(R, t += "") ? R[t] : R[t] = M(t)
        },
        keyFor: function(t) {
            if (!B(t)) throw TypeError(t + " is not a symbol!");
            for (var e in R)
                if (R[e] === t) return e
        },
        useSetter: function() {
            V = !0
        },
        useSimple: function() {
            V = !1
        }
    }), a(a.S + a.F * !$, "Object", {
        create: function(t, e) {
            return void 0 === e ? O(t) : Y(O(t), e)
        },
        defineProperty: W,
        defineProperties: Y,
        getOwnPropertyDescriptor: K,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: Q
    }), I && a(a.S + a.F * (!$ || u(function() {
        var t = M();
        return "[null]" != A([t]) || "{}" != A({
            a: t
        }) || "{}" != A(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = e = i[1], (g(e) || void 0 !== t) && !B(t)) return y(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !B(e)) return e
            }), i[1] = e, A.apply(I, i)
        }
    }), M.prototype[C] || n(5)(M.prototype, C, M.prototype.valueOf), f(M, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
}, function(t, e, n) {
    var i = n(17)("meta"),
        r = n(6),
        o = n(8),
        a = n(9).f,
        s = 0,
        c = Object.isExtensible || function() {
            return !0
        },
        u = !n(3)(function() {
            return c(Object.preventExtensions({}))
        }),
        l = function(t) {
            a(t, i, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function(t, e) {
                if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, i)) {
                    if (!c(t)) return "F";
                    if (!e) return "E";
                    l(t)
                }
                return t[i].i
            },
            getWeak: function(t, e) {
                if (!o(t, i)) {
                    if (!c(t)) return !0;
                    if (!e) return !1;
                    l(t)
                }
                return t[i].w
            },
            onFreeze: function(t) {
                return u && f.NEED && c(t) && !o(t, i) && l(t), t
            }
        }
}, function(t, e, n) {
    var i = n(26),
        r = n(69),
        o = n(45);
    t.exports = function(t) {
        var e = i(t),
            n = r.f;
        if (n)
            for (var a, s = n(t), c = o.f, u = 0; s.length > u;) c.call(t, a = s[u++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var i = n(16),
        r = n(47).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? function(t) {
            try {
                return r(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : r(i(t))
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(27)(1);
    i(i.P + i.F * !n(29)([].map, !0), "Array", {
        map: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var i = n(12),
        r = n(26);
    n(88)("keys", function() {
        return function(t) {
            return r(i(t))
        }
    })
}, function(t, e, n) {
    var i = n(2),
        r = n(14),
        o = n(3);
    t.exports = function(t, e) {
        var n = (r.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), i(i.S + i.F * o(function() {
            n(1)
        }), "Object", a)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(22),
        o = n(12),
        a = n(3),
        s = [].sort,
        c = [1, 2, 3];
    i(i.P + i.F * (a(function() {
        c.sort(void 0)
    }) || !a(function() {
        c.sort(null)
    }) || !n(29)(s)), "Array", {
        sort: function(t) {
            return void 0 === t ? s.call(o(this)) : s.call(o(this), r(t))
        }
    })
}, , , , , , function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(96);
    i(i.P + i.F * n(97)("includes"), "String", {
        includes: function(t) {
            return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var i = n(64),
        r = n(13);
    t.exports = function(t, e, n) {
        if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(t))
    }
}, function(t, e, n) {
    var i = n(0)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[i] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(44)(!0);
    i(i.P, "Array", {
        includes: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(31)("includes")
}, function(t, e, n) {
    "use strict";
    var i = n(4),
        r = n(11),
        o = n(39),
        a = n(40);
    n(41)("match", 1, function(t, e, n, s) {
        return [function(n) {
            var i = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, function(t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var c = i(t),
                u = String(this);
            if (!c.global) return a(c, u);
            var l = c.unicode;
            c.lastIndex = 0;
            for (var f, p = [], h = 0; null !== (f = a(c, u));) {
                var _ = String(f[0]);
                p[h] = _, "" === _ && (c.lastIndex = o(u, r(c.lastIndex), l)), h++
            }
            return 0 === h ? null : p
        }]
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    n(99), n(125), n(98), n(95), n(78), n(56), n(72), n(87), n(89), n(63), n(86), n(81), n(82), n(71), n(126), n(61), n(70), n(73), n(53);
    ckan.module("querytool-viz-preview", function() {
        var t = function(t, e) {
            var n = ckan.sandbox().client.endpoint + "/api/3/action/" + t;
            return $.post(n, JSON.stringify(e), "json")
        };
        return {
            initialize: function() {
                var t = this.create_sql();
                this.get_resource_datа(t);
                var e = this.el.closest(".chart_field");
                if (e.length > 0) {
                    var n = e.find(".update-chart-btn"),
                        i = e.find(".delete-chart-btn");
                    n.click(this.updateChart.bind(this)), i.click(this.deleteChart.bind(this))
                }
                this.sandbox.subscribe("querytool:updateCharts", this.updateChart.bind(this))
            },
            create_sql: function() {
                var t = this.options.sql_string.split("*")[1];
                t = t.replace("+", "%2B");
                var e = !0 === this.options.filter_name ? "" : this.options.filter_name,
                    n = !0 === this.options.filter_value ? "" : this.options.filter_value,
                    i = !0 === this.options.y_axis ? "" : this.options.y_axis,
                    r = !0 === this.options.static_reference_columns ? [] : this.options.static_reference_columns,
                    o = this.getStaticReferenceColumn(r, i);
                !0 === this.options.category_name || this.options.category_name;
                e && n && (t += ' AND ("' + this.options.filter_name + "\" = '" + this.options.filter_value + "')");
                return o ? 'SELECT AVG("' + o + '") as static_reference_column, "' + this.options.x_axis + '", SUM("' + this.options.y_axis + '") as "' + this.options.y_axis + '"' + t + ' GROUP BY "' + this.options.x_axis + '"' : 'SELECT "' + this.options.x_axis + '", SUM("' + this.options.y_axis + '") as "' + this.options.y_axis + '"' + t + ' GROUP BY "' + this.options.x_axis + '"'
            },
            "get_resource_datа": function(e) {
                var n = !0 === this.options.category_name ? "" : this.options.category_name,
                    i = !0 === this.options.x_axis ? "" : this.options.x_axis,
                    r = !0 === this.options.y_axis ? "" : this.options.y_axis,
                    o = e.split("FROM")[1].split("WHERE")[0].split('"')[1],
                    a = this.options.chart_type,
                    s = !0 === this.options.filter_name ? "" : this.options.filter_name,
                    c = !0 === this.options.filter_value ? "" : this.options.filter_value,
                    u = !0 === this.options.static_reference_columns ? [] : this.options.static_reference_columns,
                    l = this.getStaticReferenceColumn(u, r),
                    f = !0 === this.options.dynamic_reference_type ? "" : this.options.dynamic_reference_type,
                    p = !0 === this.options.dynamic_reference_factor ? "" : this.options.dynamic_reference_factor,
                    h = $("#visualizations-form").data("mainFilters"),
                    _ = !0 === this.options.query_filters ? h : this.options.query_filters,
                    d = {};
                s && c && (d = {
                    name: s,
                    value: c
                }), t("querytool_get_chart_data", {
                    category: n,
                    sql_string: e,
                    resource_id: o,
                    x_axis: i,
                    y_axis: r,
                    chart_type: a,
                    previous_filters: JSON.stringify(_),
                    chart_filter: JSON.stringify(d)
                }).done(function(t) {
                    if (t.success) {
                        if (this.fetched_data = t.result, this.y_axis_max = null, this.y_axis_avg = null, this.y_axis_min = null, this.static_reference_value = null, this.dynamic_reference_value = null, n) this.y_axis_max = this.fetched_data.y_axis_max, this.y_axis_avg = this.fetched_data.y_axis_avg, this.y_axis_min = this.fetched_data.y_axis_min, delete this.fetched_data.y_axis_max, delete this.fetched_data.y_axis_avg, delete this.fetched_data.y_axis_min;
                        else {
                            var e = [],
                                i = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var s, c = this.fetched_data[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                    var u = s.value;
                                    e.push(+u[r.toLowerCase()])
                                }
                            } catch (t) {
                                o = !0, a = t
                            } finally {
                                try {
                                    i || null == c.return || c.return()
                                } finally {
                                    if (o) throw a
                                }
                            }
                            this.y_axis_max = Math.max.apply(null, e), this.y_axis_avg = e.reduce(function(t, e) {
                                return t + e
                            }, 0) / e.length, this.y_axis_min = Math.min.apply(null, e)
                        }
                        if (l)
                            if (n) this.static_reference_value = this.fetched_data.static_reference_value, delete this.fetched_data.static_reference_value;
                            else {
                                var h = [],
                                    _ = !0,
                                    d = !1,
                                    v = void 0;
                                try {
                                    for (var y, m = this.fetched_data[Symbol.iterator](); !(_ = (y = m.next()).done); _ = !0) {
                                        u = y.value;
                                        h.push(+u.static_reference_column), delete u.static_reference_column
                                    }
                                } catch (t) {
                                    d = !0, v = t
                                } finally {
                                    try {
                                        _ || null == m.return || m.return()
                                    } finally {
                                        if (d) throw v
                                    }
                                }
                                this.static_reference_value = h.reduce(function(t, e) {
                                    return t + e
                                }, 0) / h.length
                            } f && ("Maximum" === f ? this.dynamic_reference_value = this.y_axis_max : "Average" === f ? this.dynamic_reference_value = this.y_axis_avg : "Minimum" === f && (this.dynamic_reference_value = this.y_axis_min), "" !== p && (this.dynamic_reference_value = this.dynamic_reference_value * p)), this.createChart(this.fetched_data)
                    } else this.el.text(this._("Chart could not be created."))
                }.bind(this)).error(function(t) {
                    this.el.text(this._("Chart could not be created."))
                }.bind(this))
            },
            createChart: function(t) {
                var e, n = this.options.x_axis.toLowerCase(),
                    i = this.options.y_axis.toLowerCase(),
                    r = t,
                    o = this.options.show_legend,
                    a = this.options.x_text_rotate,
                    s = this.options.x_text_multiline,
                    c = this.options.x_tick_culling_max,
                    u = this.options.tooltip_name,
                    l = this.options.data_format,
                    f = this.options.y_tick_format,
                    p = (!0 === this.options.chart_padding_left || this.options.chart_padding_left, !0 === this.options.chart_padding_bottom || this.options.chart_padding_bottom, !0 === this.options.padding_top || this.options.padding_top, !0 === this.options.padding_bottom || this.options.padding_bottom, !0 === this.options.tick_count ? "" : this.options.tick_count),
                    h = this.options.show_labels,
                    _ = !0 === this.options.y_label ? null : this.options.y_label,
                    d = this.options.y_label_hide,
                    v = this.options.y_from_zero,
                    y = this.options.data_sort,
                    m = this.options.measure_label,
                    g = !0 === this.options.category_name ? "" : this.options.category_name,
                    x = !0 === this.options.static_reference_label ? "" : this.options.static_reference_label,
                    b = !0 === this.options.dynamic_reference_label ? "" : this.options.dynamic_reference_label,
                    S = this.options.show_labels_as_percentages || !1,
                    O = {
                        bindto: this.el[0],
                        color: {
                            pattern: this.options.colors.split(",")
                        },
                        padding: {
                            right: 50,
                            bottom: 16
                        }
                    },
                    w = !0 === this.options.title ? "" : this.options.title,
                    E = !0 === this.options.query_filters ? [] : this.options.query_filters;
                E.length || (E = !0 === this.options.info_query_filters ? [] : this.options.info_query_filters);
                var k = !0 === this.options.filter_name ? "" : this.options.filter_name,
                    j = !0 === this.options.filter_slug ? "" : this.options.filter_slug,
                    N = !0 === this.options.filter_value ? "" : this.options.filter_value,
                    P = k ? {
                        name: k,
                        slug: j,
                        value: N
                    } : void 0;
                w = this.renderChartTitle(w, {
                    measure: {
                        name: i,
                        alias: m
                    },
                    filters: E,
                    optionalFilter: P
                }), O.title = {
                    text: w,
                    position: "upper-left",
                    padding: {
                        left: 0,
                        right: 0,
                        bottom: 18,
                        top: 0
                    }
                }, O.legend = {
                    show: o
                }, O.tooltip = {
                    format: {}
                };
                var F = d ? "" : _ || m || "",
                    M = y;
                if ("sbar" === this.options.chart_type && "shbar" === this.options.chart_type || g || this.sortData(y, r, i, n), O.legend = {
                        show: o
                    }, O.tooltip = {
                        format: {}
                    }, !0 !== u && "" !== u && (O.tooltip.format.title = function(t) {
                        return "donut" === O.data.type || "pie" === O.data.type ? u : u + " " + t
                    }), O.tooltip.format.value = function(t, e, n) {
                        return this.sortFormatData(l, t)
                    }.bind(this), "donut" === this.options.chart_type || "pie" === this.options.chart_type) e = r.map(function(t) {
                    return [t[n], t[i]]
                }), O.data = {
                    columns: e,
                    type: this.options.chart_type,
                    order: "default" === y ? "desc" : y
                }, 0 == S && (O[this.options.chart_type] = {
                    label: {
                        format: function(t, e, n) {
                            return t
                        }
                    }
                });
                else if ("sbar" === this.options.chart_type || "shbar" === this.options.chart_type) {
                    var I = "shbar" === this.options.chart_type,
                        A = 0;
                    I && (A = a), e = r.map(function(t) {
                        return [t[n], t[i]]
                    }), O.data = {
                        columns: e,
                        type: "bar",
                        order: M
                    };
                    var T = e.map(function(t) {
                        return t[0]
                    });
                    O.data.groups = [T], O.axis = {
                        rotated: I,
                        y: {
                            tick: {
                                count: p,
                                format: function(t) {
                                    return this.sortFormatData(f, t)
                                }.bind(this),
                                rotate: A
                            },
                            padding: {
                                top: 50,
                                bottom: 50
                            }
                        },
                        x: {
                            tick: {
                                rotate: a,
                                multiline: s,
                                multilineMax: 3
                            }
                        }
                    }
                } else {
                    var C = !1,
                        L = this.options.chart_type;
                    A = 0;
                    if ("hbar" === this.options.chart_type && (C = !0, L = "bar", A = a, 2 == r.length && (O.padding = {
                            left: 110
                        })), "bscatter" === this.options.chart_type) {
                        var R = d3.scale.log().base(10).domain([1, 1e3]).range([0, 10]);
                        L = "scatter", O.point = {
                            r: function(t) {
                                var e = t.value;
                                return R(e)
                            },
                            sensitivity: 100,
                            focus: {
                                expand: {
                                    enabled: !0
                                }
                            }
                        }
                    }
                    var D = [];
                    if (g) {
                        var q = {};
                        for (var G in Object.keys(r).sort().forEach(function(t) {
                                q[t] = r[t]
                            }), q) D.push(q[G]);
                        O.data = {
                            x: "x",
                            columns: D,
                            type: L,
                            labels: h
                        }
                    } else {
                        D = r.map(function(t) {
                            return Number(t[i])
                        });
                        var $ = r.map(function(t) {
                            return t[n]
                        });
                        D.unshift(this.options.x_axis), O.data = {
                            columns: [D],
                            type: L,
                            labels: h
                        }
                    }
                    h && (O.data.labels = {
                        format: function(t) {
                            return this.sortFormatData(l, t)
                        }.bind(this)
                    }), "line" === this.options.chart_type ? O.axis = {
                        y: {
                            tick: {
                                count: p,
                                format: function(t) {
                                    return this.sortFormatData(f, t)
                                }.bind(this),
                                rotate: A
                            },
                            padding: {
                                top: 50,
                                bottom: 50
                            },
                            label: {
                                text: F,
                                position: "outer-middle"
                            }
                        },
                        x: {
                            type: "category",
                            categories: $,
                            tick: {
                                culling: {
                                    max: c || 0
                                },
                                rotate: a,
                                multiline: s,
                                multilineMax: 3
                            }
                        },
                        rotated: C
                    } : O.axis = {
                        y: {
                            tick: {
                                count: p,
                                format: function(t) {
                                    return this.sortFormatData(f, t)
                                }.bind(this),
                                rotate: A
                            },
                            padding: {
                                top: 50,
                                bottom: 50
                            },
                            label: {
                                text: F,
                                position: "outer-middle"
                            }
                        },
                        x: {
                            type: "category",
                            categories: $,
                            tick: {
                                rotate: a,
                                multiline: s,
                                multilineMax: 3
                            }
                        },
                        rotated: C
                    }, O.point = {
                        r: 3
                    }
                }
                if (!["sbar", "shbar", "donut", "pie"].includes(this.options.chart_type)) {
                    if (O.grid = {
                            y: {
                                lines: []
                            }
                        }, this.static_reference_value) {
                        O.grid.y.lines.push({
                            value: this.static_reference_value,
                            text: x,
                            class: "base"
                        });
                        var z = this.sortFormatData(l, this.static_reference_value);
                        O.grid.y.lines.push({
                            value: this.static_reference_value,
                            text: x + " (" + z + ")",
                            class: "active html2canvas-ignore"
                        })
                    }
                    if (this.dynamic_reference_value) {
                        O.grid.y.lines.push({
                            value: this.dynamic_reference_value,
                            text: b,
                            class: "base"
                        });
                        var V = this.sortFormatData(l, this.dynamic_reference_value);
                        O.grid.y.lines.push({
                            value: this.dynamic_reference_value,
                            text: b + " (" + V + ")",
                            class: "active html2canvas-ignore"
                        })
                    }(this.static_reference_value || this.dynamic_reference_value) && (O.axis.y.min = Math.min.apply(null, [this.static_reference_value, this.dynamic_reference_value, this.y_axis_min].filter(function(t) {
                        return !isNaN(t) && null !== t
                    })), O.axis.y.max = Math.max.apply(null, [this.static_reference_value, this.dynamic_reference_value, this.y_axis_max].filter(function(t) {
                        return !isNaN(t) && null !== t
                    })), O.axis.y.padding = {
                        bottom: 50,
                        top: 50
                    }, ["bar", "hbar"].includes(this.options.chart_type) && (O.axis.y.padding.bottom = 0))
                } ["line", "area", "spline", "scatter", "bscatter", "bar", "hbar", "sbar", "shbar"].includes(this.options.chart_type) && v && (O.axis.y.min = 0, O.axis.y.padding = O.axis.y.padding || {}, O.axis.y.padding.bottom = 0);
                c3.generate(O)
            },
            updateChart: function() {
                var t = this.el.closest(".chart_field"),
                    e = t.find("[name*=chart_field_graph_]").val(),
                    n = t.find("[name*=chart_field_color_]").val(),
                    i = t.find("input[name*=chart_field_chart_padding_left_]").val(),
                    r = t.find("input[name*=chart_field_chart_padding_bottom_]").val(),
                    o = t.find("[name*=chart_field_axis_x_]").val(),
                    a = t.find("[name*=chart_field_axis_y_]").val(),
                    s = t.find("textarea[name*=chart_field_title_]").val(),
                    c = t.find("input[name*=chart_field_legend_]").is(":checked"),
                    u = t.find("[name*=chart_field_x_text_rotate_]").val(),
                    l = t.find("[name*=chart_field_x_text_multiline_]").is(":checked"),
                    f = t.find("[name*=chart_field_x_tick_culling_max_]").val(),
                    p = t.find("input[name*=chart_field_tooltip_name_]").val(),
                    h = t.find("[name*=chart_field_data_format_]").val(),
                    _ = t.find("[name*=chart_field_y_ticks_format_]").val(),
                    d = t.find("input[name*=chart_field_padding_top_]").val(),
                    v = t.find("input[name*=chart_field_padding_bottom_]").val(),
                    y = t.find("input[name*=chart_field_tick_count_]").val(),
                    m = t.find("[name*=chart_field_filter_name_]").val(),
                    g = t.find("[name*=chart_field_filter_value_]").val(),
                    x = t.find("[name*=chart_field_category_name_]").val(),
                    b = t.find("select[name*=chart_field_sort_]").val(),
                    S = t.find("input[name*=chart_field_labels_]").is(":checked"),
                    O = t.find("input[name*=chart_field_y_label_]").val(),
                    w = t.find("input[name*=chart_field_y_label_hide_]").is(":checked"),
                    E = t.find("input[name*=chart_field_y_from_zero_]").is(":checked"),
                    k = t.find("select[name*=chart_field_static_reference_columns_]").val(),
                    j = t.find("input[name*=chart_field_static_reference_label_]").val(),
                    N = t.find("select[name*=chart_field_dynamic_reference_type_]").val(),
                    P = t.find("input[name*=chart_field_dynamic_reference_factor_]").val(),
                    F = t.find("input[name*=chart_field_dynamic_reference_label_]").val(),
                    M = $("#choose_y_axis_column option:selected").text(),
                    I = t.find("[name*=chart_field_show_labels_as_percentages_]").is(":checked");
                if (this.fetched_data && this.options.x_axis === o && this.options.y_axis === a && this.options.filter_name === m && this.options.filter_value === g && this.options.category_name === x && this.options.chart_type === e && this.options.static_reference_columns === k && this.options.dynamic_reference_type === N && this.options.dynamic_reference_factor === P) return this.options.colors = n, this.options.chart_type = e, this.options.title = s, this.options.show_legend = c, this.options.x_text_rotate = u, this.options.x_text_multiline = l, this.options.x_tick_culling_max = f, this.options.tooltip_name = p, this.options.data_format = h, this.options.y_tick_format = _, this.options.chart_padding_left = i, this.options.chart_padding_bottom = r, this.options.padding_top = d, this.options.padding_bottom = v, this.options.show_labels = S, this.options.y_label = O, this.options.y_label_hide = w, this.options.y_from_zero = E, this.options.tick_count = y, this.options.data_sort = b, this.options.static_reference_columns = k, this.options.static_reference_label = j, this.options.dynamic_reference_type = N, this.options.dynamic_reference_factor = P, this.options.dynamic_reference_label = F, this.options.measure_label = M, this.options.show_labels_as_percentages = I, void this.createChart(this.fetched_data);
                this.options.colors = n, this.options.chart_type = e, this.options.x_axis = o, this.options.y_axis = a, this.options.title = s, this.options.show_legend = c, this.options.x_text_rotate = u, this.options.x_text_multiline = l, this.options.x_tick_culling_max = f, this.options.tooltip_name = p, this.options.data_format = h, this.options.y_tick_format = _, this.options.chart_padding_left = i, this.options.chart_padding_bottom = r, this.options.padding_top = d, this.options.padding_bottom = v, this.options.show_labels = S, this.options.tick_count = y, this.options.y_label = O, this.options.y_label_hide = w, this.options.y_from_zero = E, this.options.filter_name = m, this.options.filter_value = g, this.options.category_name = x, this.options.data_sort = b, this.options.static_reference_columns = k, this.options.static_reference_label = j, this.options.dynamic_reference_type = N, this.options.dynamic_reference_factor = P, this.options.dynamic_reference_label = F, this.options.measure_label = M, this.options.show_labels_as_percentages = I;
                var A = this.create_sql();
                this.get_resource_datа(A)
            },
            deleteChart: function() {
                this.el.closest(".chart_field").remove()
            },
            teardown: function() {
                this.sandbox.unsubscribe("querytool:updateCharts", this.updateChart.bind(this))
            },
            sortData: function(t, e, n, i) {
                "asc" === t ? e.sort(function(t, e) {
                    return t[n] - e[n]
                }) : "desc" === t ? (e.sort(function(t, e) {
                    return t[n] - e[n]
                }), e.reverse()) : (e.sort(function(t, e) {
                    var n = t[i],
                        r = e[i];
                    if (isNaN(n) || isNaN(r)) {
                        var o, a = n.match(/^\d{1,2}\./),
                            s = r.match(/^\d{1,2}\./);
                        return a && s ? 0 === (o = parseInt(a[0]) - parseInt(s[0])) ? 0 : o / Math.abs(o) : a && !s ? -1 : !a && s ? 1 : n < r ? -1 : n > r ? 1 : 0
                    }
                    return 0 === (o = Number(n) - Number(r)) ? 0 : o / Math.abs(o)
                }), e.forEach(function(t) {
                    isNaN(t[i]) && (t[i] = t[i].replace(/^\d{1,2}\./, ""))
                }))
            },
            sortFormatData: function(t, e) {
                var n = 0,
                    i = "";
                return "$" === t ? (n = this.countDecimals(e, 2), i = d3.format("$,." + n + "f")) : "s" === t ? (e = Math.round(10 * e) / 10, i = d3.format(t)) : i = d3.format(t), i(e)
            },
            countDecimals: function(t, e) {
                return Math.min(10 * t % 1 ? 2 : t % 1 ? 1 : 0, e)
            },
            renderChartTitle: function(t, e) {
                var n = nunjucks.configure({
                        tags: {
                            variableStart: "{",
                            variableEnd: "}"
                        }
                    }),
                    i = {
                        measure: e.measure.alias
                    },
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var s, c = e.filters[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                        var u = s.value;
                        i[u.slug] = u.value
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                e.optionalFilter && (i.optional_filter = e.optionalFilter.value);
                try {
                    return n.renderString(t, i)
                } catch (e) {
                    return t
                }
            },
            getStaticReferenceColumn: function(t, e) {
                var n = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var o, a = (t || [])[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        var s = o.value,
                            c = s.split("|")[0],
                            u = s.split("|")[1];
                        if (c === e) return u
                    }
                } catch (t) {
                    i = !0, r = t
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw r
                    }
                }
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(27)(2);
    i(i.P + i.F * !n(29)([].filter, !0), "Array", {
        filter: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(127);
    i(i.P + i.F * !n(29)([].reduce, !0), "Array", {
        reduce: function(t) {
            return r(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    var i = n(22),
        r = n(12),
        o = n(34),
        a = n(11);
    t.exports = function(t, e, n, s, c) {
        i(e);
        var u = r(t),
            l = o(u),
            f = a(u.length),
            p = c ? f - 1 : 0,
            h = c ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (p in l) {
                    s = l[p], p += h;
                    break
                }
                if (p += h, c ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; c ? p >= 0 : f > p; p += h) p in l && (s = e(s, l[p], p, u));
        return s
    }
}]);
//# sourceMappingURL=viz-preview.js.map