!(function (n) {
  "function" == typeof define && define.amd ? define(n) : n();
})(function () {
  "use strict";
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self && self;
  var n = { exports: {} };
  "undefined" != typeof self && self,
    (n.exports = (function (n) {
      var e = {};
      function r(t) {
        if (e[t]) return e[t].exports;
        var o = (e[t] = { i: t, l: !1, exports: {} });
        return n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = n),
        (r.c = e),
        (r.d = function (n, e, t) {
          r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
        }),
        (r.r = function (n) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (r.t = function (n, e) {
          if ((1 & e && (n = r(n)), 8 & e)) return n;
          if (4 & e && "object" == typeof n && n && n.__esModule) return n;
          var t = Object.create(null);
          if (
            (r.r(t),
              Object.defineProperty(t, "default", { enumerable: !0, value: n }),
              2 & e && "string" != typeof n)
          )
            for (var o in n)
              r.d(
                t,
                o,
                function (e) {
                  return n[e];
                }.bind(null, o)
              );
          return t;
        }),
        (r.n = function (n) {
          var e =
            n && n.__esModule
              ? function () {
                return n.default;
              }
              : function () {
                return n;
              };
          return r.d(e, "a", e), e;
        }),
        (r.o = function (n, e) {
          return {}.hasOwnProperty.call(n, e);
        }),
        (r.p = ""),
        r((r.s = 0))
      );
    })([
      function (n, e, r) {
        function t(n, e) {
          return (t =
            Object.setPrototypeOf ||
            function (n, e) {
              return (n.__proto__ = e), n;
            })(n, e);
        }
        function o(n, e) {
          (n.prototype = Object.create(e.prototype)),
            (n.prototype.constructor = n),
            t(n, e);
        }
        function i() {
          return (i =
            Object.assign ||
            function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var t in r)
                  ({}).hasOwnProperty.call(r, t) && (n[t] = r[t]);
              }
              return n;
            }).apply(this, arguments);
        }
        function a(n) {
          try {
            if (!n) return !1;
            if ("undefined" != typeof Promise && n instanceof Promise)
              return !0;
            if (
              "undefined" != typeof window &&
              "function" == typeof window.Window &&
              n instanceof window.Window
            )
              return !1;
            if (
              "undefined" != typeof window &&
              "function" == typeof window.constructor &&
              n instanceof window.constructor
            )
              return !1;
            var e = {}.toString;
            if (e) {
              var r = e.call(n);
              if (
                "[object Window]" === r ||
                "[object global]" === r ||
                "[object DOMWindow]" === r
              )
                return !1;
            }
            if ("function" == typeof n.then) return !0;
          } catch (n) {
            return !1;
          }
          return !1;
        }
        r.r(e),
          r.d(e, "PopupOpenError", function () {
            return Nn;
          }),
          r.d(e, "create", function () {
            return Rr;
          }),
          r.d(e, "destroy", function () {
            return zr;
          }),
          r.d(e, "destroyComponents", function () {
            return Ar;
          }),
          r.d(e, "destroyAll", function () {
            return Ir;
          }),
          r.d(e, "PROP_TYPE", function () {
            return hr;
          }),
          r.d(e, "PROP_SERIALIZATION", function () {
            return wr;
          }),
          r.d(e, "CONTEXT", function () {
            return pr;
          }),
          r.d(e, "EVENT", function () {
            return vr;
          });
        var u,
          c = [],
          f = [],
          s = 0;
        function d() {
          if (!s && u) {
            var n = u;
            (u = null), n.resolve();
          }
        }
        function l() {
          s += 1;
        }
        function h() {
          (s -= 1), d();
        }
        var w = (function () {
          function n(n) {
            var e = this;
            if (
              ((this.resolved = void 0),
                (this.rejected = void 0),
                (this.errorHandled = void 0),
                (this.value = void 0),
                (this.error = void 0),
                (this.handlers = void 0),
                (this.dispatching = void 0),
                (this.stack = void 0),
                (this.resolved = !1),
                (this.rejected = !1),
                (this.errorHandled = !1),
                (this.handlers = []),
                n)
            ) {
              var r,
                t,
                o = !1,
                i = !1,
                a = !1;
              l();
              try {
                n(
                  function (n) {
                    a ? e.resolve(n) : ((o = !0), (r = n));
                  },
                  function (n) {
                    a ? e.reject(n) : ((i = !0), (t = n));
                  }
                );
              } catch (n) {
                return h(), void this.reject(n);
              }
              h(), (a = !0), o ? this.resolve(r) : i && this.reject(t);
            }
          }
          var e = n.prototype;
          return (
            (e.resolve = function (n) {
              if (this.resolved || this.rejected) return this;
              if (a(n))
                throw new Error("Can not resolve promise with another promise");
              return (
                (this.resolved = !0), (this.value = n), this.dispatch(), this
              );
            }),
            (e.reject = function (n) {
              var e = this;
              if (this.resolved || this.rejected) return this;
              if (a(n))
                throw new Error("Can not reject promise with another promise");
              if (!n) {
                var r =
                  n && "function" == typeof n.toString
                    ? n.toString()
                    : {}.toString.call(n);
                n = new Error(
                  "Expected reject to be called with Error, got " + r
                );
              }
              return (
                (this.rejected = !0),
                (this.error = n),
                this.errorHandled ||
                setTimeout(function () {
                  e.errorHandled ||
                    (function (n, e) {
                      if (-1 === c.indexOf(n)) {
                        c.push(n),
                          setTimeout(function () {
                            throw n;
                          }, 1);
                        for (var r = 0; r < f.length; r++) f[r](n, e);
                      }
                    })(n, e);
                }, 1),
                this.dispatch(),
                this
              );
            }),
            (e.asyncReject = function (n) {
              return (this.errorHandled = !0), this.reject(n), this;
            }),
            (e.dispatch = function () {
              var e = this.resolved,
                r = this.rejected,
                t = this.handlers;
              if (!this.dispatching && (e || r)) {
                (this.dispatching = !0), l();
                for (
                  var o = function (n, e) {
                    return n.then(
                      function (n) {
                        e.resolve(n);
                      },
                      function (n) {
                        e.reject(n);
                      }
                    );
                  },
                  i = 0;
                  i < t.length;
                  i++
                ) {
                  var u = t[i],
                    c = u.onSuccess,
                    f = u.onError,
                    s = u.promise,
                    d = void 0;
                  if (e)
                    try {
                      d = c ? c(this.value) : this.value;
                    } catch (n) {
                      s.reject(n);
                      continue;
                    }
                  else if (r) {
                    if (!f) {
                      s.reject(this.error);
                      continue;
                    }
                    try {
                      d = f(this.error);
                    } catch (n) {
                      s.reject(n);
                      continue;
                    }
                  }
                  if (d instanceof n && (d.resolved || d.rejected)) {
                    var w = d;
                    w.resolved ? s.resolve(w.value) : s.reject(w.error),
                      (w.errorHandled = !0);
                  } else
                    a(d)
                      ? d instanceof n && (d.resolved || d.rejected)
                        ? d.resolved
                          ? s.resolve(d.value)
                          : s.reject(d.error)
                        : o(d, s)
                      : s.resolve(d);
                }
                (t.length = 0), (this.dispatching = !1), h();
              }
            }),
            (e.then = function (e, r) {
              if (e && "function" != typeof e && !e.call)
                throw new Error(
                  "Promise.then expected a function for success handler"
                );
              if (r && "function" != typeof r && !r.call)
                throw new Error(
                  "Promise.then expected a function for error handler"
                );
              var t = new n();
              return (
                this.handlers.push({ promise: t, onSuccess: e, onError: r }),
                (this.errorHandled = !0),
                this.dispatch(),
                t
              );
            }),
            (e.catch = function (n) {
              return this.then(void 0, n);
            }),
            (e.finally = function (e) {
              if (e && "function" != typeof e && !e.call)
                throw new Error("Promise.finally expected a function");
              return this.then(
                function (r) {
                  return n.try(e).then(function () {
                    return r;
                  });
                },
                function (r) {
                  return n.try(e).then(function () {
                    throw r;
                  });
                }
              );
            }),
            (e.timeout = function (n, e) {
              var r = this;
              if (this.resolved || this.rejected) return this;
              var t = setTimeout(function () {
                r.resolved ||
                  r.rejected ||
                  r.reject(
                    e || new Error("Promise timed out after " + n + "ms")
                  );
              }, n);
              return this.then(function (n) {
                return clearTimeout(t), n;
              });
            }),
            (e.toPromise = function () {
              if ("undefined" == typeof Promise)
                throw new TypeError("Could not find Promise");
              return Promise.resolve(this);
            }),
            (e.lazy = function () {
              return (this.errorHandled = !0), this;
            }),
            (n.resolve = function (e) {
              return e instanceof n
                ? e
                : a(e)
                  ? new n(function (n, r) {
                    return e.then(n, r);
                  })
                  : new n().resolve(e);
            }),
            (n.reject = function (e) {
              return new n().reject(e);
            }),
            (n.asyncReject = function (e) {
              return new n().asyncReject(e);
            }),
            (n.all = function (e) {
              var r = new n(),
                t = e.length,
                o = [].slice();
              if (!t) return r.resolve(o), r;
              for (
                var i = function (n, e, i) {
                  return e.then(
                    function (e) {
                      (o[n] = e), 0 == (t -= 1) && r.resolve(o);
                    },
                    function (n) {
                      i.reject(n);
                    }
                  );
                },
                u = 0;
                u < e.length;
                u++
              ) {
                var c = e[u];
                if (c instanceof n) {
                  if (c.resolved) {
                    (o[u] = c.value), (t -= 1);
                    continue;
                  }
                } else if (!a(c)) {
                  (o[u] = c), (t -= 1);
                  continue;
                }
                i(u, n.resolve(c), r);
              }
              return 0 === t && r.resolve(o), r;
            }),
            (n.hash = function (e) {
              var r = {},
                t = [],
                o = function (n) {
                  if (e.hasOwnProperty(n)) {
                    var o = e[n];
                    a(o)
                      ? t.push(
                        o.then(function (e) {
                          r[n] = e;
                        })
                      )
                      : (r[n] = o);
                  }
                };
              for (var i in e) o(i);
              return n.all(t).then(function () {
                return r;
              });
            }),
            (n.map = function (e, r) {
              return n.all(e.map(r));
            }),
            (n.onPossiblyUnhandledException = function (n) {
              return (function (n) {
                return (
                  f.push(n),
                  {
                    cancel: function () {
                      f.splice(f.indexOf(n), 1);
                    },
                  }
                );
              })(n);
            }),
            (n.try = function (e, r, t) {
              if (e && "function" != typeof e && !e.call)
                throw new Error("Promise.try expected a function");
              var o;
              l();
              try {
                o = e.apply(r, t || []);
              } catch (e) {
                return h(), n.reject(e);
              }
              return h(), n.resolve(o);
            }),
            (n.delay = function (e) {
              return new n(function (n) {
                setTimeout(n, e);
              });
            }),
            (n.isPromise = function (e) {
              return !!(e && e instanceof n) || a(e);
            }),
            (n.flush = function () {
              return (e = n), (r = u = u || new e()), d(), r;
              var e, r;
            }),
            n
          );
        })();
        function p(n) {
          return "[object RegExp]" === {}.toString.call(n);
        }
        var v = "Call was rejected by callee.\r\n";
        function m(n) {
          return void 0 === n && (n = window), n.location.protocol;
        }
        function y(n) {
          if ((void 0 === n && (n = window), n.mockDomain)) {
            var e = n.mockDomain.split("//")[0];
            if (e) return e;
          }
          return m(n);
        }
        function g(n) {
          return void 0 === n && (n = window), "about:" === y(n);
        }
        function b(n) {
          if ((void 0 === n && (n = window), n))
            try {
              if (n.parent && n.parent !== n) return n.parent;
            } catch (n) { }
        }
        function E(n) {
          if ((void 0 === n && (n = window), n && !b(n)))
            try {
              return n.opener;
            } catch (n) { }
        }
        function _(n) {
          try {
            return !0;
          } catch (n) { }
          return !1;
        }
        function x(n) {
          void 0 === n && (n = window);
          var e = n.location;
          if (!e) throw new Error("Can not read window location");
          var r = m(n);
          if (!r) throw new Error("Can not read window protocol");
          if ("file:" === r) return "file://";
          if ("about:" === r) {
            var t = b(n);
            return t && _() ? x(t) : "about://";
          }
          var o = e.host;
          if (!o) throw new Error("Can not read window host");
          return r + "//" + o;
        }
        function P(n) {
          void 0 === n && (n = window);
          var e = x(n);
          return e && n.mockDomain && 0 === n.mockDomain.indexOf("mock:")
            ? n.mockDomain
            : e;
        }
        function C(n) {
          if (
            !(function (n) {
              try {
                if (n === window) return !0;
              } catch (n) { }
              try {
                var e = Object.getOwnPropertyDescriptor(n, "location");
                if (e && !1 === e.enumerable) return !1;
              } catch (n) { }
              try {
                if (g(n) && _()) return !0;
              } catch (n) { }
              try {
                if (
                  (function (n) {
                    return void 0 === n && (n = window), "mock:" === y(n);
                  })(n) &&
                  _()
                )
                  return !0;
              } catch (n) { }
              try {
                if (x(n) === x(window)) return !0;
              } catch (n) { }
              return !1;
            })(n)
          )
            return !1;
          try {
            if (n === window) return !0;
            if (g(n) && _()) return !0;
            if (P(window) === P(n)) return !0;
          } catch (n) { }
          return !1;
        }
        function O(n) {
          if (!C(n)) throw new Error("Expected window to be same domain");
          return n;
        }
        function S(n, e) {
          if (!n || !e) return !1;
          var r = b(e);
          return r
            ? r === n
            : -1 !==
            (function (n) {
              var e = [];
              try {
                for (; n.parent !== n;) e.push(n.parent), (n = n.parent);
              } catch (n) { }
              return e;
            })(e).indexOf(n);
        }
        function D(n) {
          var e,
            r,
            t = [];
          try {
            e = n.frames;
          } catch (r) {
            e = n;
          }
          try {
            r = e.length;
          } catch (n) { }
          if (0 === r) return t;
          if (r) {
            for (var o = 0; o < r; o++) {
              var i = void 0;
              try {
                i = e[o];
              } catch (n) {
                continue;
              }
              t.push(i);
            }
            return t;
          }
          for (var a = 0; a < 100; a++) {
            var u = void 0;
            try {
              u = e[a];
            } catch (n) {
              return t;
            }
            if (!u) return t;
            t.push(u);
          }
          return t;
        }
        function W(n) {
          for (var e = [], r = 0, t = D(n); r < t.length; r++) {
            var o = t[r];
            e.push(o);
            for (var i = 0, a = W(o); i < a.length; i++) e.push(a[i]);
          }
          return e;
        }
        function N(n) {
          void 0 === n && (n = window);
          try {
            if (n.top) return n.top;
          } catch (n) { }
          if (b(n) === n) return n;
          try {
            if (S(window, n) && window.top) return window.top;
          } catch (n) { }
          try {
            if (S(n, window) && window.top) return window.top;
          } catch (n) { }
          for (var e = 0, r = W(n); e < r.length; e++) {
            var t = r[e];
            try {
              if (t.top) return t.top;
            } catch (n) { }
            if (b(t) === t) return t;
          }
        }
        function T(n) {
          var e = N(n);
          if (!e) throw new Error("Can not determine top window");
          var r = [].concat(W(e), [e]);
          return -1 === r.indexOf(n) && (r = [].concat(r, [n], W(n))), r;
        }
        var j = [],
          k = [];
        function R(n, e) {
          void 0 === e && (e = !0);
          try {
            if (n === window) return !1;
          } catch (n) {
            return !0;
          }
          try {
            if (!n) return !0;
          } catch (n) {
            return !0;
          }
          try {
            if (n.closed) return !0;
          } catch (n) {
            return !n || n.message !== v;
          }
          if (e && C(n))
            try {
              if (n.mockclosed) return !0;
            } catch (n) { }
          try {
            if (!n.parent || !n.top) return !0;
          } catch (n) { }
          var r = (function (n, e) {
            for (var r = 0; r < n.length; r++)
              try {
                if (n[r] === e) return r;
              } catch (n) { }
            return -1;
          })(j, n);
          if (-1 !== r) {
            var t = k[r];
            if (
              t &&
              (function (n) {
                if (!n.contentWindow) return !0;
                if (!n.parentNode) return !0;
                var e = n.ownerDocument;
                if (e && e.documentElement && !e.documentElement.contains(n)) {
                  for (var r = n; r.parentNode && r.parentNode !== r;)
                    r = r.parentNode;
                  if (!r.host || !e.documentElement.contains(r.host)) return !0;
                }
                return !1;
              })(t)
            )
              return !0;
          }
          return !1;
        }
        function A(n) {
          return (
            void 0 === n && (n = window), E((n = n || window)) || b(n) || void 0
          );
        }
        function I(n, e) {
          for (var r = 0; r < n.length; r++)
            for (var t = n[r], o = 0; o < e.length; o++)
              if (t === e[o]) return !0;
          return !1;
        }
        function z(n, e) {
          if ("string" == typeof n) {
            if ("string" == typeof e) return "*" === n || e === n;
            if (p(e)) return !1;
            if (Array.isArray(e)) return !1;
          }
          return p(n)
            ? p(e)
              ? n.toString() === e.toString()
              : !Array.isArray(e) && Boolean(e.match(n))
            : !!Array.isArray(n) &&
            (Array.isArray(e)
              ? JSON.stringify(n) === JSON.stringify(e)
              : !p(e) &&
              n.some(function (n) {
                return z(n, e);
              }));
        }
        function F(n) {
          try {
            if (n === window) return !0;
          } catch (n) {
            if (n && n.message === v) return !0;
          }
          try {
            if ("[object Window]" === {}.toString.call(n)) return !0;
          } catch (n) {
            if (n && n.message === v) return !0;
          }
          try {
            if (window.Window && n instanceof window.Window) return !0;
          } catch (n) {
            if (n && n.message === v) return !0;
          }
          try {
            if (n && n.self === n) return !0;
          } catch (n) {
            if (n && n.message === v) return !0;
          }
          try {
            if (n && n.parent === n) return !0;
          } catch (n) {
            if (n && n.message === v) return !0;
          }
          try {
            if (n && n.top === n) return !0;
          } catch (n) {
            if (n && n.message === v) return !0;
          }
          try {
            if (
              n &&
              "__unlikely_value__" === n.__cross_domain_utils_window_check__
            )
              return !1;
          } catch (n) {
            return !0;
          }
          try {
            if ("postMessage" in n && "self" in n && "location" in n) return !0;
          } catch (n) { }
          return !1;
        }
        function M(n) {
          if (C(n)) return O(n).frameElement;
          for (
            var e = 0, r = document.querySelectorAll("iframe");
            e < r.length;
            e++
          ) {
            var t = r[e];
            if (t && t.contentWindow && t.contentWindow === n) return t;
          }
        }
        function q(n) {
          if (
            (function (n) {
              return void 0 === n && (n = window), Boolean(b(n));
            })(n)
          ) {
            var e = M(n);
            if (e && e.parentElement)
              return void e.parentElement.removeChild(e);
          }
          try {
            n.close();
          } catch (n) { }
        }
        function L(n, e) {
          for (var r = 0; r < n.length; r++)
            try {
              if (n[r] === e) return r;
            } catch (n) { }
          return -1;
        }
        var U,
          B = (function () {
            function n() {
              if (
                ((this.name = void 0),
                  (this.weakmap = void 0),
                  (this.keys = void 0),
                  (this.values = void 0),
                  (this.name =
                    "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
                  (function () {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                      var n = new WeakMap(),
                        e = {};
                      return (
                        Object.freeze(e),
                        n.set(e, "__testvalue__"),
                        "__testvalue__" === n.get(e)
                      );
                    } catch (n) {
                      return !1;
                    }
                  })())
              )
                try {
                  this.weakmap = new WeakMap();
                } catch (n) { }
              (this.keys = []), (this.values = []);
            }
            var e = n.prototype;
            return (
              (e._cleanupClosedWindows = function () {
                for (
                  var n = this.weakmap, e = this.keys, r = 0;
                  r < e.length;
                  r++
                ) {
                  var t = e[r];
                  if (F(t) && R(t)) {
                    if (n)
                      try {
                        n.delete(t);
                      } catch (n) { }
                    e.splice(r, 1), this.values.splice(r, 1), (r -= 1);
                  }
                }
              }),
              (e.isSafeToReadWrite = function (n) {
                return !F(n);
              }),
              (e.set = function (n, e) {
                if (!n) throw new Error("WeakMap expected key");
                var r = this.weakmap;
                if (r)
                  try {
                    r.set(n, e);
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var t = this.name,
                      o = n[t];
                    return void (o && o[0] === n
                      ? (o[1] = e)
                      : Object.defineProperty(n, t, {
                        value: [n, e],
                        writable: !0,
                      }));
                  } catch (n) { }
                this._cleanupClosedWindows();
                var i = this.keys,
                  a = this.values,
                  u = L(i, n);
                -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
              }),
              (e.get = function (n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e)
                  try {
                    if (e.has(n)) return e.get(n);
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var r = n[this.name];
                    return r && r[0] === n ? r[1] : void 0;
                  } catch (n) { }
                this._cleanupClosedWindows();
                var t = L(this.keys, n);
                if (-1 !== t) return this.values[t];
              }),
              (e.delete = function (n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e)
                  try {
                    e.delete(n);
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var r = n[this.name];
                    r && r[0] === n && (r[0] = r[1] = void 0);
                  } catch (n) { }
                this._cleanupClosedWindows();
                var t = this.keys,
                  o = L(t, n);
                -1 !== o && (t.splice(o, 1), this.values.splice(o, 1));
              }),
              (e.has = function (n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e)
                  try {
                    if (e.has(n)) return !0;
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var r = n[this.name];
                    return !(!r || r[0] !== n);
                  } catch (n) { }
                return this._cleanupClosedWindows(), -1 !== L(this.keys, n);
              }),
              (e.getOrSet = function (n, e) {
                if (this.has(n)) return this.get(n);
                var r = e();
                return this.set(n, r), r;
              }),
              n
            );
          })();
        function J(n) {
          return (J = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
        }
        function H() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () { })
              ),
              !0
            );
          } catch (n) {
            return !1;
          }
        }
        function Y(n, e, r) {
          return (Y = H()
            ? Reflect.construct
            : function (n, e, r) {
              var o = [null];
              o.push.apply(o, e);
              var i = new (Function.bind.apply(n, o))();
              return r && t(i, r.prototype), i;
            }).apply(null, arguments);
        }
        function Z(n) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (Z = function (n) {
            if (
              null === n ||
              ((r = n),
                -1 === Function.toString.call(r).indexOf("[native code]"))
            )
              return n;
            var r;
            if ("function" != typeof n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== e) {
              if (e.has(n)) return e.get(n);
              e.set(n, o);
            }
            function o() {
              return Y(n, arguments, J(this).constructor);
            }
            return (
              (o.prototype = Object.create(n.prototype, {
                constructor: {
                  value: o,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              t(o, n)
            );
          })(n);
        }
        function G(n) {
          var e = !1;
          try {
            (n instanceof window.Element ||
              (null !== n &&
                "object" == typeof n &&
                1 === n.nodeType &&
                "object" == typeof n.style &&
                "object" == typeof n.ownerDocument)) &&
              (e = !0);
          } catch (n) { }
          return e;
        }
        function V(n) {
          return n.name || n.__name__ || n.displayName || "anonymous";
        }
        function $(n, e) {
          try {
            delete n.name, (n.name = e);
          } catch (n) { }
          return (n.__name__ = n.displayName = e), n;
        }
        function X(n) {
          if ("function" == typeof btoa)
            return btoa(
              encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
                return String.fromCharCode(parseInt(e, 16));
              })
            ).replace(/[=]/g, "");
          if ("undefined" != typeof Buffer)
            return Buffer.from(n, "utf8")
              .toString("base64")
              .replace(/[=]/g, "");
          throw new Error("Can not find window.btoa or Buffer");
        }
        function K() {
          var n = "0123456789abcdef";
          return (
            "uid_" +
            "xxxxxxxxxx".replace(/./g, function () {
              return n.charAt(Math.floor(Math.random() * n.length));
            }) +
            "_" +
            X(new Date().toISOString().slice(11, 19).replace("T", "."))
              .replace(/[^a-zA-Z0-9]/g, "")
              .toLowerCase()
          );
        }
        function Q(n) {
          try {
            return JSON.stringify([].slice.call(n), function (n, e) {
              return "function" == typeof e
                ? "memoize[" +
                (function (n) {
                  if (
                    ((U = U || new B()),
                      null == n ||
                      ("object" != typeof n && "function" != typeof n))
                  )
                    throw new Error("Invalid object");
                  var e = U.get(n);
                  return e || ((e = typeof n + ":" + K()), U.set(n, e)), e;
                })(e) +
                "]"
                : G(e)
                  ? {}
                  : e;
            });
          } catch (n) {
            throw new Error(
              "Arguments not serializable -- can not be used to memoize"
            );
          }
        }
        function nn() {
          return {};
        }
        var en = 0,
          rn = 0;
        function tn(n, e) {
          void 0 === e && (e = {});
          var r,
            t,
            o = e.thisNamespace,
            i = void 0 !== o && o,
            a = e.time,
            u = en;
          en += 1;
          var c = function () {
            for (var e = arguments.length, o = new Array(e), c = 0; c < e; c++)
              o[c] = arguments[c];
            var f, s;
            u < rn && ((r = null), (t = null), (u = en), (en += 1)),
              (f = i ? (t = t || new B()).getOrSet(this, nn) : (r = r || {}));
            try {
              s = Q(o);
            } catch (e) {
              return n.apply(this, arguments);
            }
            var d = f[s];
            if (
              (d && a && Date.now() - d.time < a && (delete f[s], (d = null)),
                d)
            )
              return d.value;
            var l = Date.now(),
              h = n.apply(this, arguments);
            return (f[s] = { time: l, value: h }), h;
          };
          return (
            (c.reset = function () {
              (r = null), (t = null);
            }),
            $(c, (e.name || V(n)) + "::memoized")
          );
        }
        function on(n) {
          var e = {};
          function r() {
            for (
              var r = arguments,
              t = this,
              o = arguments.length,
              i = new Array(o),
              a = 0;
              a < o;
              a++
            )
              i[a] = arguments[a];
            var u = Q(i);
            return (
              e.hasOwnProperty(u) ||
              (e[u] = w
                .try(function () {
                  return n.apply(t, r);
                })
                .finally(function () {
                  delete e[u];
                })),
              e[u]
            );
          }
          return (
            (r.reset = function () {
              e = {};
            }),
            $(r, V(n) + "::promiseMemoized")
          );
        }
        function an() { }
        function un(n) {
          var e = !1;
          return $(function () {
            if (!e) return (e = !0), n.apply(this, arguments);
          }, V(n) + "::once");
        }
        function cn(n, e) {
          if ((void 0 === e && (e = 1), e >= 3))
            return "stringifyError stack overflow";
          try {
            if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
            if ("string" == typeof n) return n;
            if (n instanceof Error) {
              var r = n && n.stack,
                t = n && n.message;
              if (r && t) return -1 !== r.indexOf(t) ? r : t + "\n" + r;
              if (r) return r;
              if (t) return t;
            }
            return n && n.toString && "function" == typeof n.toString
              ? n.toString()
              : {}.toString.call(n);
          } catch (n) {
            return "Error while stringifying error: " + cn(n, e + 1);
          }
        }
        function fn(n) {
          return "string" == typeof n
            ? n
            : n && n.toString && "function" == typeof n.toString
              ? n.toString()
              : {}.toString.call(n);
        }
        function sn(n, e) {
          if (!e) return n;
          if (Object.assign) return Object.assign(n, e);
          for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
          return n;
        }
        function dn(n) {
          return n;
        }
        function ln(n, e) {
          var r;
          return (
            (function t() {
              r = setTimeout(function () {
                n(), t();
              }, e);
            })(),
            {
              cancel: function () {
                clearTimeout(r);
              },
            }
          );
        }
        function hn(n) {
          return [].slice.call(n);
        }
        function wn(n) {
          return null != n;
        }
        function pn(n) {
          return "[object RegExp]" === {}.toString.call(n);
        }
        function vn(n, e, r) {
          if (n.hasOwnProperty(e)) return n[e];
          var t = r();
          return (n[e] = t), t;
        }
        function mn(n) {
          var e,
            r = [],
            t = !1,
            o = {
              set: function (e, r) {
                return (
                  t ||
                  ((n[e] = r),
                    o.register(function () {
                      delete n[e];
                    })),
                  r
                );
              },
              register: function (n) {
                var o = un(function () {
                  return n(e);
                });
                return (
                  t ? n(e) : r.push(o),
                  {
                    cancel: function () {
                      var n = r.indexOf(o);
                      -1 !== n && r.splice(n, 1);
                    },
                  }
                );
              },
              all: function (n) {
                e = n;
                var o = [];
                for (t = !0; r.length;) {
                  var i = r.shift();
                  o.push(i());
                }
                return w.all(o).then(an);
              },
            };
          return o;
        }
        function yn(n, e) {
          if (null == e) throw new Error("Expected " + n + " to be present");
          return e;
        }
        (tn.clear = function () {
          rn = en;
        }),
          tn(function (n) {
            if (Object.values) return Object.values(n);
            var e = [];
            for (var r in n) n.hasOwnProperty(r) && e.push(n[r]);
            return e;
          });
        var gn = (function (n) {
          function e(e) {
            var r;
            return (
              ((r = n.call(this, e) || this).name = r.constructor.name),
              "function" == typeof Error.captureStackTrace
                ? Error.captureStackTrace(
                  (function (n) {
                    if (void 0 === n)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return n;
                  })(r),
                  r.constructor
                )
                : (r.stack = new Error(e).stack),
              r
            );
          }
          return o(e, n), e;
        })(Z(Error));
        function bn() {
          var n = document.body;
          if (!n) throw new Error("Body element not found");
          return n;
        }
        function En() {
          return Boolean(document.body) && "complete" === document.readyState;
        }
        function _n() {
          return (
            Boolean(document.body) && "interactive" === document.readyState
          );
        }
        function xn(n) {
          return encodeURIComponent(n);
        }
        function Pn(n) {
          return (function (e, r, t) {
            void 0 === t && (t = []);
            var o = (e.__inline_memoize_cache__ =
              e.__inline_memoize_cache__ || {}),
              i = Q(t);
            return o.hasOwnProperty(i)
              ? o[i]
              : (o[i] = function () {
                var e = {};
                if (!n) return e;
                if (-1 === n.indexOf("=")) return e;
                for (var r = 0, t = n.split("&"); r < t.length; r++) {
                  var o = t[r];
                  (o = o.split("="))[0] &&
                    o[1] &&
                    (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
                }
                return e;
              }.apply(void 0, t));
          })(Pn, 0, [n]);
        }
        function Cn(n, e) {
          return (
            void 0 === e && (e = {}),
            e && Object.keys(e).length
              ? (void 0 === (r = i({}, Pn(n), e)) && (r = {}),
                Object.keys(r)
                  .filter(function (n) {
                    return "string" == typeof r[n] || "boolean" == typeof r[n];
                  })
                  .map(function (n) {
                    var e = r[n];
                    if ("string" != typeof e && "boolean" != typeof e)
                      throw new TypeError("Invalid type for query");
                    return xn(n) + "=" + xn(e.toString());
                  })
                  .join("&"))
              : n
          );
          var r;
        }
        function On(n, e) {
          n.appendChild(e);
        }
        function Sn(n, e) {
          return (
            void 0 === e && (e = document),
            G(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
          );
        }
        function Dn(n) {
          return new w(function (e, r) {
            var t = fn(n),
              o = Sn(n);
            if (o) return e(o);
            if (En())
              return r(
                new Error(
                  "Document is ready and element " + t + " does not exist"
                )
              );
            var i = setInterval(function () {
              if ((o = Sn(n))) e(o), clearInterval(i);
              else if (En())
                return (
                  clearInterval(i),
                  r(
                    new Error(
                      "Document is ready and element " + t + " does not exist"
                    )
                  )
                );
            }, 10);
          });
        }
        tn(function () {
          return new w(function (n) {
            if (En() || _n()) return n();
            var e = setInterval(function () {
              if (En() || _n()) return clearInterval(e), n();
            }, 10);
          });
        });
        var Wn,
          Nn = (function (n) {
            function e() {
              return n.apply(this, arguments) || this;
            }
            return o(e, n), e;
          })(gn);
        function Tn(n) {
          if ((Wn = Wn || new B()).has(n)) {
            var e = Wn.get(n);
            if (e) return e;
          }
          var r = new w(function (e, r) {
            n.addEventListener("load", function () {
              !(function (n) {
                if (
                  ((function () {
                    for (var n = 0; n < j.length; n++) {
                      var e = !1;
                      try {
                        e = j[n].closed;
                      } catch (n) { }
                      e && (k.splice(n, 1), j.splice(n, 1));
                    }
                  })(),
                    n && n.contentWindow)
                )
                  try {
                    j.push(n.contentWindow), k.push(n);
                  } catch (n) { }
              })(n),
                e(n);
            }),
              n.addEventListener("error", function (t) {
                n.contentWindow ? e(n) : r(t);
              });
          });
          return Wn.set(n, r), r;
        }
        function jn(n) {
          return Tn(n).then(function (n) {
            if (!n.contentWindow)
              throw new Error("Could not find window in iframe");
            return n.contentWindow;
          });
        }
        function kn(n, e) {
          void 0 === n && (n = {});
          var r = n.style || {},
            t = (function (n, e, r) {
              void 0 === n && (n = "div"),
                void 0 === e && (e = {}),
                (n = n.toLowerCase());
              var t,
                o,
                i,
                a = document.createElement(n);
              if (
                (e.style && sn(a.style, e.style),
                  e.class && (a.className = e.class.join(" ")),
                  e.id && a.setAttribute("id", e.id),
                  e.attributes)
              )
                for (
                  var u = 0, c = Object.keys(e.attributes);
                  u < c.length;
                  u++
                ) {
                  var f = c[u];
                  a.setAttribute(f, e.attributes[f]);
                }
              if (
                (e.styleSheet &&
                  ((t = a),
                    (o = e.styleSheet),
                    void 0 === i && (i = window.document),
                    t.styleSheet
                      ? (t.styleSheet.cssText = o)
                      : t.appendChild(i.createTextNode(o))),
                  e.html)
              ) {
                if ("iframe" === n)
                  throw new Error(
                    "Iframe html can not be written unless container provided and iframe in DOM"
                  );
                a.innerHTML = e.html;
              }
              return a;
            })("iframe", {
              attributes: i({ allowTransparency: "true" }, n.attributes || {}),
              style: i({ backgroundColor: "transparent", border: "none" }, r),
              html: n.html,
              class: n.class,
            }),
            o = window.navigator.userAgent.match(/MSIE|Edge/i);
          return (
            t.hasAttribute("id") || t.setAttribute("id", K()),
            Tn(t),
            e &&
            (function (n, e) {
              void 0 === e && (e = document);
              var r = Sn(n, e);
              if (r) return r;
              throw new Error("Can not find element: " + fn(n));
            })(e).appendChild(t),
            (n.url || o) && t.setAttribute("src", n.url || "about:blank"),
            t
          );
        }
        function Rn(n, e, r) {
          return (
            n.addEventListener(e, r),
            {
              cancel: function () {
                n.removeEventListener(e, r);
              },
            }
          );
        }
        function An(n) {
          n.style.setProperty("display", "");
        }
        function In(n) {
          n.style.setProperty("display", "none", "important");
        }
        function zn(n) {
          n && n.parentNode && n.parentNode.removeChild(n);
        }
        function Fn(n) {
          return !(
            n &&
            n.parentNode &&
            n.ownerDocument &&
            n.ownerDocument.documentElement &&
            n.ownerDocument.documentElement.contains(n)
          );
        }
        function Mn(n, e, r) {
          var t = void 0 === r ? {} : r,
            o = t.width,
            i = void 0 === o || o,
            a = t.height,
            u = void 0 === a || a,
            c = t.interval,
            f = void 0 === c ? 100 : c,
            s = t.win,
            d = void 0 === s ? window : s,
            l = n.offsetWidth,
            h = n.offsetHeight,
            w = !1;
          e({ width: l, height: h });
          var p,
            v,
            m = function () {
              if (
                !w &&
                (function (n) {
                  return Boolean(
                    n.offsetWidth || n.offsetHeight || n.getClientRects().length
                  );
                })(n)
              ) {
                var r = n.offsetWidth,
                  t = n.offsetHeight;
                ((i && r !== l) || (u && t !== h)) &&
                  e({ width: r, height: t }),
                  (l = r),
                  (h = t);
              }
            };
          return (
            d.addEventListener("resize", m),
            void 0 !== d.ResizeObserver
              ? ((p = new d.ResizeObserver(m)).observe(n), (v = ln(m, 10 * f)))
              : void 0 !== d.MutationObserver
                ? ((p = new d.MutationObserver(m)).observe(n, {
                  attributes: !0,
                  childList: !0,
                  subtree: !0,
                  characterData: !1,
                }),
                  (v = ln(m, 10 * f)))
                : (v = ln(m, f)),
            {
              cancel: function () {
                (w = !0),
                  p.disconnect(),
                  window.removeEventListener("resize", m),
                  v.cancel();
              },
            }
          );
        }
        function qn(n) {
          for (; n.parentNode;) n = n.parentNode;
          return "[object ShadowRoot]" === n.toString();
        }
        var Ln = "undefined" != typeof document ? document.currentScript : null,
          Un = tn(function () {
            if (Ln) return Ln;
            if (
              (Ln = (function () {
                try {
                  var n = (function () {
                    try {
                      throw new Error("_");
                    } catch (n) {
                      return n.stack || "";
                    }
                  })(),
                    e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                    r = e && e[1];
                  if (!r) return;
                  for (
                    var t = 0,
                    o = [].slice
                      .call(document.getElementsByTagName("script"))
                      .reverse();
                    t < o.length;
                    t++
                  ) {
                    var i = o[t];
                    if (i.src && i.src === r) return i;
                  }
                } catch (n) { }
              })())
            )
              return Ln;
            throw new Error("Can not determine current script");
          }),
          Bn = K();
        function Jn(n) {
          return (
            (function (n) {
              if ("number" == typeof n) return n;
              var e = n.match(/^([0-9]+)(px|%)$/);
              if (!e) throw new Error("Could not match css value from " + n);
              return parseInt(e[1], 10);
            })(n) + "px"
          );
        }
        function Hn(n) {
          return "number" == typeof n
            ? Jn(n)
            : "string" == typeof (e = n) && /^[0-9]+%$/.test(e)
              ? n
              : Jn(n);
          var e;
        }
        function Yn(n) {
          void 0 === n && (n = window);
          var e = "__post_robot_10_0_46__";
          return n !== window ? n[e] : (n[e] = n[e] || {});
        }
        tn(function () {
          var n;
          try {
            n = Un();
          } catch (n) {
            return Bn;
          }
          var e = n.getAttribute("data-uid");
          if (e && "string" == typeof e) return e;
          if ((e = n.getAttribute("data-uid-auto")) && "string" == typeof e)
            return e;
          if (n.src) {
            var r = (function (n) {
              for (var e = "", r = 0; r < n.length; r++) {
                var t = n[r].charCodeAt(0) * r;
                n[r + 1] && (t += n[r + 1].charCodeAt(0) * (r - 1)),
                  (e += String.fromCharCode(97 + (Math.abs(t) % 26)));
              }
              return e;
            })(JSON.stringify({ src: n.src, dataset: n.dataset }));
            e = "uid_" + r.slice(r.length - 30);
          } else e = K();
          return n.setAttribute("data-uid-auto", e), e;
        });
        var Zn = function () {
          return {};
        };
        function Gn(n, e) {
          return (
            void 0 === n && (n = "store"),
            void 0 === e && (e = Zn),
            vn(Yn(), n, function () {
              var n = e();
              return {
                has: function (e) {
                  return n.hasOwnProperty(e);
                },
                get: function (e, r) {
                  return n.hasOwnProperty(e) ? n[e] : r;
                },
                set: function (e, r) {
                  return (n[e] = r), r;
                },
                del: function (e) {
                  delete n[e];
                },
                getOrSet: function (e, r) {
                  return vn(n, e, r);
                },
                reset: function () {
                  n = e();
                },
                keys: function () {
                  return Object.keys(n);
                },
              };
            })
          );
        }
        var Vn,
          $n = function () { };
        function Xn() {
          var n = Yn();
          return (
            (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new $n()),
            n.WINDOW_WILDCARD
          );
        }
        function Kn(n, e) {
          return (
            void 0 === n && (n = "store"),
            void 0 === e && (e = Zn),
            Gn("windowStore").getOrSet(n, function () {
              var r = new B(),
                t = function (n) {
                  return r.getOrSet(n, e);
                };
              return {
                has: function (e) {
                  return t(e).hasOwnProperty(n);
                },
                get: function (e, r) {
                  var o = t(e);
                  return o.hasOwnProperty(n) ? o[n] : r;
                },
                set: function (e, r) {
                  return (t(e)[n] = r), r;
                },
                del: function (e) {
                  delete t(e)[n];
                },
                getOrSet: function (e, r) {
                  return vn(t(e), n, r);
                },
              };
            })
          );
        }
        function Qn() {
          return Gn("instance").getOrSet("instanceID", K);
        }
        function ne(n, e) {
          var r = e.domain,
            t = Kn("helloPromises"),
            o = t.get(n);
          o && o.resolve({ domain: r });
          var i = w.resolve({ domain: r });
          return t.set(n, i), i;
        }
        function ee(n, e) {
          return (0, e.send)(
            n,
            "postrobot_hello",
            { instanceID: Qn() },
            { domain: "*", timeout: -1 }
          ).then(function (e) {
            var r = e.origin,
              t = e.data.instanceID;
            return ne(n, { domain: r }), { win: n, domain: r, instanceID: t };
          });
        }
        function re(n, e) {
          var r = e.send;
          return Kn("windowInstanceIDPromises").getOrSet(n, function () {
            return ee(n, { send: r }).then(function (n) {
              return n.instanceID;
            });
          });
        }
        function te(n) {
          Kn("knownWindows").set(n, !0);
        }
        function oe(n) {
          return (
            "object" == typeof n && null !== n && "string" == typeof n.__type__
          );
        }
        function ie(n) {
          return void 0 === n
            ? "undefined"
            : null === n
              ? "null"
              : Array.isArray(n)
                ? "array"
                : "function" == typeof n
                  ? "function"
                  : "object" == typeof n
                    ? n instanceof Error
                      ? "error"
                      : "function" == typeof n.then
                        ? "promise"
                        : "[object RegExp]" === {}.toString.call(n)
                          ? "regex"
                          : "[object Date]" === {}.toString.call(n)
                            ? "date"
                            : "object"
                    : "string" == typeof n
                      ? "string"
                      : "number" == typeof n
                        ? "number"
                        : "boolean" == typeof n
                          ? "boolean"
                          : void 0;
        }
        function ae(n, e) {
          return { __type__: n, __val__: e };
        }
        var ue,
          ce =
            (((Vn = {}).function = function () { }),
              (Vn.error = function (n) {
                return ae("error", {
                  message: n.message,
                  stack: n.stack,
                  code: n.code,
                  data: n.data,
                });
              }),
              (Vn.promise = function () { }),
              (Vn.regex = function (n) {
                return ae("regex", n.source);
              }),
              (Vn.date = function (n) {
                return ae("date", n.toJSON());
              }),
              (Vn.array = function (n) {
                return n;
              }),
              (Vn.object = function (n) {
                return n;
              }),
              (Vn.string = function (n) {
                return n;
              }),
              (Vn.number = function (n) {
                return n;
              }),
              (Vn.boolean = function (n) {
                return n;
              }),
              (Vn.null = function (n) {
                return n;
              }),
              (Vn[void 0] = function (n) {
                return ae("undefined", n);
              }),
              Vn),
          fe = {},
          se =
            (((ue = {}).function = function () {
              throw new Error(
                "Function serialization is not implemented; nothing to deserialize"
              );
            }),
              (ue.error = function (n) {
                var e = n.stack,
                  r = n.code,
                  t = n.data,
                  o = new Error(n.message);
                return (
                  (o.code = r),
                  t && (o.data = t),
                  (o.stack = e + "\n\n" + o.stack),
                  o
                );
              }),
              (ue.promise = function () {
                throw new Error(
                  "Promise serialization is not implemented; nothing to deserialize"
                );
              }),
              (ue.regex = function (n) {
                return new RegExp(n);
              }),
              (ue.date = function (n) {
                return new Date(n);
              }),
              (ue.array = function (n) {
                return n;
              }),
              (ue.object = function (n) {
                return n;
              }),
              (ue.string = function (n) {
                return n;
              }),
              (ue.number = function (n) {
                return n;
              }),
              (ue.boolean = function (n) {
                return n;
              }),
              (ue.null = function (n) {
                return n;
              }),
              (ue[void 0] = function () { }),
              ue),
          de = {};
        function le() {
          for (
            var n = Gn("idToProxyWindow"), e = 0, r = n.keys();
            e < r.length;
            e++
          ) {
            var t = r[e];
            n.get(t).shouldClean() && n.del(t);
          }
        }
        function he(n, e) {
          var r = e.send,
            t = e.id,
            o = void 0 === t ? K() : t,
            i = n.then(function (n) {
              if (C(n)) return O(n).name;
            }),
            a = n.then(function (n) {
              if (R(n))
                throw new Error("Window is closed, can not determine type");
              return E(n) ? "popup" : "iframe";
            });
          i.catch(an), a.catch(an);
          var u = function () {
            return n.then(function (n) {
              if (!R(n)) return C(n) ? O(n).name : i;
            });
          };
          return {
            id: o,
            getType: function () {
              return a;
            },
            getInstanceID: on(function () {
              return n.then(function (n) {
                return re(n, { send: r });
              });
            }),
            close: function () {
              return n.then(q);
            },
            getName: u,
            focus: function () {
              return n.then(function (n) {
                n.focus();
              });
            },
            isClosed: function () {
              return n.then(function (n) {
                return R(n);
              });
            },
            setLocation: function (e, r) {
              return (
                void 0 === r && (r = {}),
                n.then(function (n) {
                  var t =
                    window.location.protocol + "//" + window.location.host,
                    o = r.method,
                    i = void 0 === o ? "get" : o,
                    a = r.body;
                  if (0 === e.indexOf("/")) e = "" + t + e;
                  else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(t))
                    throw new Error(
                      "Expected url to be http or https url, or absolute path, got " +
                      JSON.stringify(e)
                    );
                  if ("post" === i)
                    return u().then(function (n) {
                      if (!n)
                        throw new Error(
                          "Can not post to window without target name"
                        );
                      !(function (n) {
                        var e = n.url,
                          r = n.target,
                          t = n.body,
                          o = n.method,
                          i = void 0 === o ? "post" : o,
                          a = document.createElement("form");
                        if (
                          (a.setAttribute("target", r),
                            a.setAttribute("method", i),
                            a.setAttribute("action", e),
                            (a.style.display = "none"),
                            t)
                        )
                          for (
                            var u = 0, c = Object.keys(t);
                            u < c.length;
                            u++
                          ) {
                            var f,
                              s = c[u],
                              d = document.createElement("input");
                            d.setAttribute("name", s),
                              d.setAttribute(
                                "value",
                                null == (f = t[s]) ? void 0 : f.toString()
                              ),
                              a.appendChild(d);
                          }
                        bn().appendChild(a), a.submit(), bn().removeChild(a);
                      })({ url: e, target: n, method: i, body: a });
                    });
                  if ("get" !== i) throw new Error("Unsupported method: " + i);
                  if (C(n))
                    try {
                      if (n.location && "function" == typeof n.location.replace)
                        return void n.location.replace(e);
                    } catch (n) { }
                  n.location = e;
                })
              );
            },
            setName: function (e) {
              return n.then(function (n) {
                var r = C(n),
                  t = M(n);
                if (!r)
                  throw new Error(
                    "Can not set name for cross-domain window: " + e
                  );
                (O(n).name = e),
                  t && t.setAttribute("name", e),
                  (i = w.resolve(e));
              });
            },
          };
        }
        new w(function (n) {
          if (window.document && window.document.body)
            return n(window.document.body);
          var e = setInterval(function () {
            if (window.document && window.document.body)
              return clearInterval(e), n(window.document.body);
          }, 10);
        });
        var we = (function () {
          function n(n) {
            var e = n.send,
              r = n.win,
              t = n.serializedWindow;
            (this.id = void 0),
              (this.isProxyWindow = !0),
              (this.serializedWindow = void 0),
              (this.actualWindow = void 0),
              (this.actualWindowPromise = void 0),
              (this.send = void 0),
              (this.name = void 0),
              (this.actualWindowPromise = new w()),
              (this.serializedWindow =
                t || he(this.actualWindowPromise, { send: e })),
              Gn("idToProxyWindow").set(this.getID(), this),
              r && this.setWindow(r, { send: e });
          }
          var e = n.prototype;
          return (
            (e.getID = function () {
              return this.serializedWindow.id;
            }),
            (e.getType = function () {
              return this.serializedWindow.getType();
            }),
            (e.isPopup = function () {
              return this.getType().then(function (n) {
                return "popup" === n;
              });
            }),
            (e.setLocation = function (n, e) {
              var r = this;
              return this.serializedWindow.setLocation(n, e).then(function () {
                return r;
              });
            }),
            (e.getName = function () {
              return this.serializedWindow.getName();
            }),
            (e.setName = function (n) {
              var e = this;
              return this.serializedWindow.setName(n).then(function () {
                return e;
              });
            }),
            (e.close = function () {
              var n = this;
              return this.serializedWindow.close().then(function () {
                return n;
              });
            }),
            (e.focus = function () {
              var n = this,
                e = this.isPopup(),
                r = this.getName(),
                t = w.hash({ isPopup: e, name: r }).then(function (n) {
                  var e = n.name;
                  n.isPopup && e && window.open("", e, "noopener");
                }),
                o = this.serializedWindow.focus();
              return w.all([t, o]).then(function () {
                return n;
              });
            }),
            (e.isClosed = function () {
              return this.serializedWindow.isClosed();
            }),
            (e.getWindow = function () {
              return this.actualWindow;
            }),
            (e.setWindow = function (n, e) {
              var r = e.send;
              (this.actualWindow = n),
                this.actualWindowPromise.resolve(this.actualWindow),
                (this.serializedWindow = he(this.actualWindowPromise, {
                  send: r,
                  id: this.getID(),
                })),
                Kn("winToProxyWindow").set(n, this);
            }),
            (e.awaitWindow = function () {
              return this.actualWindowPromise;
            }),
            (e.matchWindow = function (n, e) {
              var r = this,
                t = e.send;
              return w.try(function () {
                return r.actualWindow
                  ? n === r.actualWindow
                  : w
                    .hash({
                      proxyInstanceID: r.getInstanceID(),
                      knownWindowInstanceID: re(n, { send: t }),
                    })
                    .then(function (e) {
                      var o = e.proxyInstanceID === e.knownWindowInstanceID;
                      return o && r.setWindow(n, { send: t }), o;
                    });
              });
            }),
            (e.unwrap = function () {
              return this.actualWindow || this;
            }),
            (e.getInstanceID = function () {
              return this.serializedWindow.getInstanceID();
            }),
            (e.shouldClean = function () {
              return Boolean(this.actualWindow && R(this.actualWindow));
            }),
            (e.serialize = function () {
              return this.serializedWindow;
            }),
            (n.unwrap = function (e) {
              return n.isProxyWindow(e) ? e.unwrap() : e;
            }),
            (n.serialize = function (e, r) {
              var t = r.send;
              return le(), n.toProxyWindow(e, { send: t }).serialize();
            }),
            (n.deserialize = function (e, r) {
              var t = r.send;
              return (
                le(),
                Gn("idToProxyWindow").get(e.id) ||
                new n({ serializedWindow: e, send: t })
              );
            }),
            (n.isProxyWindow = function (n) {
              return Boolean(n && !F(n) && n.isProxyWindow);
            }),
            (n.toProxyWindow = function (e, r) {
              var t = r.send;
              if ((le(), n.isProxyWindow(e))) return e;
              var o = e;
              return (
                Kn("winToProxyWindow").get(o) || new n({ win: o, send: t })
              );
            }),
            n
          );
        })();
        function pe(n, e, r, t, o) {
          var i = Kn("methodStore"),
            a = Gn("proxyWindowMethods");
          we.isProxyWindow(t)
            ? a.set(n, { val: e, name: r, domain: o, source: t })
            : (a.del(n),
              (i.getOrSet(t, function () {
                return {};
              })[n] = { domain: o, name: r, val: e, source: t }));
        }
        function ve(n, e) {
          var r = Kn("methodStore"),
            t = Gn("proxyWindowMethods");
          return (
            r.getOrSet(n, function () {
              return {};
            })[e] || t.get(e)
          );
        }
        function me(n, e, r, t, o) {
          var i, a, u;
          (a = (i = { on: o.on, send: o.send }).on),
            (u = i.send),
            Gn("builtinListeners").getOrSet("functionCalls", function () {
              return a("postrobot_method", { domain: "*" }, function (n) {
                var e = n.source,
                  r = n.origin,
                  t = n.data,
                  o = t.id,
                  i = t.name,
                  a = ve(e, o);
                if (!a)
                  throw new Error(
                    "Could not find method '" +
                    i +
                    "' with id: " +
                    t.id +
                    " in " +
                    P(window)
                  );
                var c = a.source,
                  f = a.domain,
                  s = a.val;
                return w
                  .try(function () {
                    if (!z(f, r))
                      throw new Error(
                        "Method '" +
                        t.name +
                        "' domain " +
                        JSON.stringify(
                          pn(a.domain) ? a.domain.source : a.domain
                        ) +
                        " does not match origin " +
                        r +
                        " in " +
                        P(window)
                      );
                    if (we.isProxyWindow(c))
                      return c.matchWindow(e, { send: u }).then(function (n) {
                        if (!n)
                          throw new Error(
                            "Method call '" +
                            t.name +
                            "' failed - proxy window does not match source in " +
                            P(window)
                          );
                      });
                  })
                  .then(
                    function () {
                      return s.apply({ source: e, origin: r }, t.args);
                    },
                    function (n) {
                      return w
                        .try(function () {
                          if (s.onError) return s.onError(n);
                        })
                        .then(function () {
                          var e;
                          throw (
                            (n.stack &&
                              (n.stack =
                                "Remote call to " +
                                i +
                                "(" +
                                (void 0 === (e = t.args) && (e = []),
                                  hn(e)
                                    .map(function (n) {
                                      return "string" == typeof n
                                        ? "'" + n + "'"
                                        : void 0 === n
                                          ? "undefined"
                                          : null === n
                                            ? "null"
                                            : "boolean" == typeof n
                                              ? n.toString()
                                              : Array.isArray(n)
                                                ? "[ ... ]"
                                                : "object" == typeof n
                                                  ? "{ ... }"
                                                  : "function" == typeof n
                                                    ? "() => { ... }"
                                                    : "<" + typeof n + ">";
                                    })
                                    .join(", ") + ") failed\n\n") +
                                n.stack),
                              n)
                          );
                        });
                    }
                  )
                  .then(function (n) {
                    return { result: n, id: o, name: i };
                  });
              });
            });
          var c = r.__id__ || K();
          n = we.unwrap(n);
          var f = r.__name__ || r.name || t;
          return (
            "string" == typeof f &&
            "function" == typeof f.indexOf &&
            0 === f.indexOf("anonymous::") &&
            (f = f.replace("anonymous::", t + "::")),
            we.isProxyWindow(n)
              ? (pe(c, r, f, n, e),
                n.awaitWindow().then(function (n) {
                  pe(c, r, f, n, e);
                }))
              : pe(c, r, f, n, e),
            ae("cross_domain_function", { id: c, name: f })
          );
        }
        function ye(n, e, r, t) {
          var o,
            i = t.on,
            a = t.send;
          return (function (n, e) {
            void 0 === e && (e = fe);
            var r = JSON.stringify(n, function (n) {
              var r = this[n];
              if (oe(this)) return r;
              var t = ie(r);
              if (!t) return r;
              var o = e[t] || ce[t];
              return o ? o(r, n) : r;
            });
            return void 0 === r ? "undefined" : r;
          })(
            r,
            (((o = {}).promise = function (r, t) {
              return (function (n, e, r, t, o) {
                return ae("cross_domain_zalgo_promise", {
                  then: me(
                    n,
                    e,
                    function (n, e) {
                      return r.then(n, e);
                    },
                    t,
                    { on: o.on, send: o.send }
                  ),
                });
              })(n, e, r, t, { on: i, send: a });
            }),
              (o.function = function (r, t) {
                return me(n, e, r, t, { on: i, send: a });
              }),
              (o.object = function (n) {
                return F(n) || we.isProxyWindow(n)
                  ? ae("cross_domain_window", we.serialize(n, { send: a }))
                  : n;
              }),
              o)
          );
        }
        function ge(n, e, r, t) {
          var o,
            i = t.send;
          return (function (n, e) {
            if ((void 0 === e && (e = de), "undefined" !== n))
              return JSON.parse(n, function (n, r) {
                if (oe(this)) return r;
                var t, o;
                if (
                  (oe(r)
                    ? ((t = r.__type__), (o = r.__val__))
                    : ((t = ie(r)), (o = r)),
                    !t)
                )
                  return o;
                var i = e[t] || se[t];
                return i ? i(o, n) : o;
              });
          })(
            r,
            (((o = {}).cross_domain_zalgo_promise = function (n) {
              return (function (n, e, r) {
                return new w(r.then);
              })(0, 0, n);
            }),
              (o.cross_domain_function = function (r) {
                return (function (n, e, r, t) {
                  var o = r.id,
                    i = r.name,
                    a = t.send,
                    u = function (r) {
                      function t() {
                        var u = arguments;
                        return we
                          .toProxyWindow(n, { send: a })
                          .awaitWindow()
                          .then(function (n) {
                            var c = ve(n, o);
                            if (c && c.val !== t)
                              return c.val.apply(
                                { source: window, origin: P() },
                                u
                              );
                            var f = [].slice.call(u);
                            return r.fireAndForget
                              ? a(
                                n,
                                "postrobot_method",
                                { id: o, name: i, args: f },
                                { domain: e, fireAndForget: !0 }
                              )
                              : a(
                                n,
                                "postrobot_method",
                                { id: o, name: i, args: f },
                                { domain: e, fireAndForget: !1 }
                              ).then(function (n) {
                                return n.data.result;
                              });
                          })
                          .catch(function (n) {
                            throw n;
                          });
                      }
                      return (
                        void 0 === r && (r = {}),
                        (t.__name__ = i),
                        (t.__origin__ = e),
                        (t.__source__ = n),
                        (t.__id__ = o),
                        (t.origin = e),
                        t
                      );
                    },
                    c = u();
                  return (c.fireAndForget = u({ fireAndForget: !0 })), c;
                })(n, e, r, { send: i });
              }),
              (o.cross_domain_window = function (n) {
                return we.deserialize(n, { send: i });
              }),
              o)
          );
        }
        var be = {};
        function Ee(n, e, r, t) {
          var o = t.on,
            i = t.send;
          return w
            .try(function () {
              var t = Kn().getOrSet(n, function () {
                return {};
              });
              return (
                (t.buffer = t.buffer || []),
                t.buffer.push(r),
                (t.flush =
                  t.flush ||
                  w.flush().then(function () {
                    if (R(n)) throw new Error("Window is closed");
                    var r,
                      a = ye(
                        n,
                        e,
                        (((r = {}).__post_robot_10_0_46__ = t.buffer || []), r),
                        { on: o, send: i }
                      );
                    delete t.buffer;
                    for (
                      var u = Object.keys(be), c = [], f = 0;
                      f < u.length;
                      f++
                    ) {
                      var s = u[f];
                      try {
                        be[s](n, a, e);
                      } catch (n) {
                        c.push(n);
                      }
                    }
                    if (c.length === u.length)
                      throw new Error(
                        "All post-robot messaging strategies failed:\n\n" +
                        c
                          .map(function (n, e) {
                            return e + ". " + cn(n);
                          })
                          .join("\n\n")
                      );
                  })),
                t.flush.then(function () {
                  delete t.flush;
                })
              );
            })
            .then(an);
        }
        function _e(n) {
          return Gn("responseListeners").get(n);
        }
        function xe(n) {
          Gn("responseListeners").del(n);
        }
        function Pe(n) {
          return Gn("erroredResponseListeners").has(n);
        }
        function Ce(n) {
          var e = n.name,
            r = n.win,
            t = n.domain,
            o = Kn("requestListeners");
          if (("*" === r && (r = null), "*" === t && (t = null), !e))
            throw new Error("Name required to get request listener");
          for (var i = 0, a = [r, Xn()]; i < a.length; i++) {
            var u = a[i];
            if (u) {
              var c = o.get(u);
              if (c) {
                var f = c[e];
                if (f) {
                  if (t && "string" == typeof t) {
                    if (f[t]) return f[t];
                    if (f.__domain_regex__)
                      for (
                        var s = 0, d = f.__domain_regex__;
                        s < d.length;
                        s++
                      ) {
                        var l = d[s],
                          h = l.listener;
                        if (z(l.regex, t)) return h;
                      }
                  }
                  if (f["*"]) return f["*"];
                }
              }
            }
          }
        }
        function Oe(n, e, r, t) {
          var o = t.on,
            i = t.send,
            a = Ce({ name: r.name, win: n, domain: e }),
            u =
              "postrobot_method" === r.name &&
                r.data &&
                "string" == typeof r.data.name
                ? r.data.name + "()"
                : r.name;
          function c(t, a, c) {
            return w.flush().then(function () {
              if (!r.fireAndForget && !R(n))
                try {
                  return Ee(
                    n,
                    e,
                    {
                      id: K(),
                      origin: P(window),
                      type: "postrobot_message_response",
                      hash: r.hash,
                      name: r.name,
                      ack: t,
                      data: a,
                      error: c,
                    },
                    { on: o, send: i }
                  );
                } catch (n) {
                  throw new Error(
                    "Send response message failed for " +
                    u +
                    " in " +
                    P() +
                    "\n\n" +
                    cn(n)
                  );
                }
            });
          }
          return w
            .all([
              w.flush().then(function () {
                if (!r.fireAndForget && !R(n))
                  try {
                    return Ee(
                      n,
                      e,
                      {
                        id: K(),
                        origin: P(window),
                        type: "postrobot_message_ack",
                        hash: r.hash,
                        name: r.name,
                      },
                      { on: o, send: i }
                    );
                  } catch (n) {
                    throw new Error(
                      "Send ack message failed for " +
                      u +
                      " in " +
                      P() +
                      "\n\n" +
                      cn(n)
                    );
                  }
              }),
              w
                .try(function () {
                  if (!a)
                    throw new Error(
                      "No handler found for post message: " +
                      r.name +
                      " from " +
                      e +
                      " in " +
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      window.location.pathname
                    );
                  return a.handler({ source: n, origin: e, data: r.data });
                })
                .then(
                  function (n) {
                    return c("success", n);
                  },
                  function (n) {
                    return c("error", null, n);
                  }
                ),
            ])
            .then(an)
            .catch(function (n) {
              if (a && a.handleError) return a.handleError(n);
              throw n;
            });
        }
        function Se(n, e, r) {
          if (!Pe(r.hash)) {
            var t = _e(r.hash);
            if (!t)
              throw new Error(
                "No handler found for post message ack for message: " +
                r.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
              );
            try {
              if (!z(t.domain, e))
                throw new Error(
                  "Ack origin " +
                  e +
                  " does not match domain " +
                  t.domain.toString()
                );
              if (n !== t.win)
                throw new Error("Ack source does not match registered window");
            } catch (n) {
              t.promise.reject(n);
            }
            t.ack = !0;
          }
        }
        function De(n, e, r) {
          if (!Pe(r.hash)) {
            var t,
              o = _e(r.hash);
            if (!o)
              throw new Error(
                "No handler found for post message response for message: " +
                r.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
              );
            if (!z(o.domain, e))
              throw new Error(
                "Response origin " +
                e +
                " does not match domain " +
                ((t = o.domain),
                  Array.isArray(t)
                    ? "(" + t.join(" | ") + ")"
                    : p(t)
                      ? "RegExp(" + t.toString() + ")"
                      : t.toString())
              );
            if (n !== o.win)
              throw new Error(
                "Response source does not match registered window"
              );
            xe(r.hash),
              "error" === r.ack
                ? o.promise.reject(r.error)
                : "success" === r.ack &&
                o.promise.resolve({ source: n, origin: e, data: r.data });
          }
        }
        function We(n, e) {
          var r = e.on,
            t = e.send,
            o = Gn("receivedMessages");
          try {
            if (!window || window.closed || !n.source) return;
          } catch (n) {
            return;
          }
          var i = n.source,
            a = n.origin,
            u = (function (n, e, r, t) {
              var o,
                i = t.on,
                a = t.send;
              try {
                o = ge(e, r, n, { on: i, send: a });
              } catch (n) {
                return;
              }
              if (o && "object" == typeof o && null !== o) {
                var u = o.__post_robot_10_0_46__;
                if (Array.isArray(u)) return u;
              }
            })(n.data, i, a, { on: r, send: t });
          if (u) {
            te(i);
            for (var c = 0; c < u.length; c++) {
              var f = u[c];
              if (o.has(f.id)) return;
              if ((o.set(f.id, !0), R(i) && !f.fireAndForget)) return;
              0 === f.origin.indexOf("file:") && (a = "file://");
              try {
                "postrobot_message_request" === f.type
                  ? Oe(i, a, f, { on: r, send: t })
                  : "postrobot_message_response" === f.type
                    ? De(i, a, f)
                    : "postrobot_message_ack" === f.type && Se(i, a, f);
              } catch (n) {
                setTimeout(function () {
                  throw n;
                }, 0);
              }
            }
          }
        }
        function Ne(n, e, r) {
          if (!n) throw new Error("Expected name");
          if (("function" == typeof (e = e || {}) && ((r = e), (e = {})), !r))
            throw new Error("Expected handler");
          var t = (function n(e, r) {
            var t = e.name,
              o = e.win,
              i = e.domain,
              a = Kn("requestListeners");
            if (!t || "string" != typeof t)
              throw new Error("Name required to add request listener");
            if (o && "*" !== o && we.isProxyWindow(o)) {
              var u = o.awaitWindow().then(function (e) {
                return n({ name: t, win: e, domain: i }, r);
              });
              return {
                cancel: function () {
                  u.then(function (n) {
                    return n.cancel();
                  }, an);
                },
              };
            }
            var c = o;
            if (Array.isArray(c)) {
              for (var f = [], s = 0, d = c; s < d.length; s++)
                f.push(n({ name: t, domain: i, win: d[s] }, r));
              return {
                cancel: function () {
                  for (var n = 0; n < f.length; n++) f[n].cancel();
                },
              };
            }
            if (Array.isArray(i)) {
              for (var l = [], h = 0, w = i; h < w.length; h++)
                l.push(n({ name: t, win: c, domain: w[h] }, r));
              return {
                cancel: function () {
                  for (var n = 0; n < l.length; n++) l[n].cancel();
                },
              };
            }
            var p = Ce({ name: t, win: c, domain: i });
            (c && "*" !== c) || (c = Xn());
            var v = (i = i || "*").toString();
            if (p)
              throw c && i
                ? new Error(
                  "Request listener already exists for " +
                  t +
                  " on domain " +
                  i.toString() +
                  " for " +
                  (c === Xn() ? "wildcard" : "specified") +
                  " window"
                )
                : c
                  ? new Error(
                    "Request listener already exists for " +
                    t +
                    " for " +
                    (c === Xn() ? "wildcard" : "specified") +
                    " window"
                  )
                  : i
                    ? new Error(
                      "Request listener already exists for " +
                      t +
                      " on domain " +
                      i.toString()
                    )
                    : new Error("Request listener already exists for " + t);
            var m,
              y,
              g = a.getOrSet(c, function () {
                return {};
              }),
              b = vn(g, t, function () {
                return {};
              });
            return (
              pn(i)
                ? (m = vn(b, "__domain_regex__", function () {
                  return [];
                })).push((y = { regex: i, listener: r }))
                : (b[v] = r),
              {
                cancel: function () {
                  delete b[v],
                    y &&
                    (m.splice(m.indexOf(y, 1)),
                      m.length || delete b.__domain_regex__),
                    Object.keys(b).length || delete g[t],
                    c && !Object.keys(g).length && a.del(c);
                },
              }
            );
          })(
            { name: n, win: e.window, domain: e.domain || "*" },
            {
              handler: r || e.handler,
              handleError:
                e.errorHandler ||
                function (n) {
                  throw n;
                },
            }
          );
          return {
            cancel: function () {
              t.cancel();
            },
          };
        }
        (be.postrobot_post_message = function (n, e, r) {
          0 === r.indexOf("file:") && (r = "*"), n.postMessage(e, r);
        }),
          (be.postrobot_global = function (n, e) {
            if (
              !(function (n) {
                return (
                  (n = n || window).navigator.mockUserAgent ||
                  n.navigator.userAgent
                );
              })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
            )
              throw new Error("Global messaging not needed for browser");
            if (!C(n))
              throw new Error(
                "Post message through global disabled between different domain windows"
              );
            if (
              !1 !==
              (function (n, e) {
                var r = N(n) || n,
                  t = N(e) || e;
                try {
                  if (r && t) return r === t;
                } catch (n) { }
                var o = T(n),
                  i = T(e);
                if (I(o, i)) return !0;
                var a = E(r),
                  u = E(t);
                return (a && I(T(a), i)) || (u && I(T(u), o)), !1;
              })(window, n)
            )
              throw new Error(
                "Can only use global to communicate between two different windows, not between frames"
              );
            var r = Yn(n);
            if (!r)
              throw new Error(
                "Can not find postRobot global on foreign window"
              );
            r.receiveMessage({ source: window, origin: P(), data: e });
          });
        var Te = function n(e, r, t, o) {
          var i = (o = o || {}).domain || "*",
            a = o.timeout || -1,
            u = o.timeout || 5e3,
            c = o.fireAndForget || !1;
          return we
            .toProxyWindow(e, { send: n })
            .awaitWindow()
            .then(function (e) {
              return w
                .try(function () {
                  if (
                    ((function (n, e, r) {
                      if (!n) throw new Error("Expected name");
                      if (
                        r &&
                        "string" != typeof r &&
                        !Array.isArray(r) &&
                        !pn(r)
                      )
                        throw new TypeError(
                          "Can not send " +
                          n +
                          ". Expected domain " +
                          JSON.stringify(r) +
                          " to be a string, array, or regex"
                        );
                      if (R(e))
                        throw new Error(
                          "Can not send " + n + ". Target window is closed"
                        );
                    })(r, e, i),
                      (function (n, e) {
                        var r = A(e);
                        if (r) return r === n;
                        if (e === n) return !1;
                        if (N(e) === e) return !1;
                        for (var t = 0, o = D(n); t < o.length; t++)
                          if (o[t] === e) return !0;
                        return !1;
                      })(window, e))
                  )
                    return (function (n, e, r) {
                      void 0 === e && (e = 5e3), void 0 === r && (r = "Window");
                      var t = (function (n) {
                        return Kn("helloPromises").getOrSet(n, function () {
                          return new w();
                        });
                      })(n);
                      return (
                        -1 !== e &&
                        (t = t.timeout(
                          e,
                          new Error(r + " did not load after " + e + "ms")
                        )),
                        t
                      );
                    })(e, u);
                })
                .then(function (r) {
                  return (function (n, e, r, t) {
                    var o = t.send;
                    return w.try(function () {
                      return "string" == typeof e
                        ? e
                        : w
                          .try(function () {
                            return (
                              r ||
                              ee(n, { send: o }).then(function (n) {
                                return n.domain;
                              })
                            );
                          })
                          .then(function (n) {
                            if (!z(e, e))
                              throw new Error(
                                "Domain " + fn(e) + " does not match " + fn(e)
                              );
                            return n;
                          });
                    });
                  })(e, i, (void 0 === r ? {} : r).domain, { send: n });
                })
                .then(function (o) {
                  var i = o,
                    u =
                      "postrobot_method" === r && t && "string" == typeof t.name
                        ? t.name + "()"
                        : r,
                    f = new w(),
                    s = r + "_" + K();
                  if (!c) {
                    var d = { name: r, win: e, domain: i, promise: f };
                    !(function (n, e) {
                      Gn("responseListeners").set(n, e);
                    })(s, d);
                    var l = Kn("requestPromises").getOrSet(e, function () {
                      return [];
                    });
                    l.push(f),
                      f.catch(function () {
                        !(function (n) {
                          Gn("erroredResponseListeners").set(n, !0);
                        })(s),
                          xe(s);
                      });
                    var h = (function (n) {
                      return Kn("knownWindows").get(n, !1);
                    })(e)
                      ? 1e4
                      : 2e3,
                      p = a,
                      v = h,
                      m = p,
                      y = ln(function () {
                        return R(e)
                          ? f.reject(
                            new Error(
                              "Window closed for " +
                              r +
                              " before " +
                              (d.ack ? "response" : "ack")
                            )
                          )
                          : d.cancelled
                            ? f.reject(
                              new Error(
                                "Response listener was cancelled for " + r
                              )
                            )
                            : ((v = Math.max(v - 500, 0)),
                              -1 !== m && (m = Math.max(m - 500, 0)),
                              d.ack || 0 !== v
                                ? 0 === m
                                  ? f.reject(
                                    new Error(
                                      "No response for postMessage " +
                                      u +
                                      " in " +
                                      P() +
                                      " in " +
                                      p +
                                      "ms"
                                    )
                                  )
                                  : void 0
                                : f.reject(
                                  new Error(
                                    "No ack for postMessage " +
                                    u +
                                    " in " +
                                    P() +
                                    " in " +
                                    h +
                                    "ms"
                                  )
                                ));
                      }, 500);
                    f.finally(function () {
                      y.cancel(), l.splice(l.indexOf(f, 1));
                    }).catch(an);
                  }
                  return Ee(
                    e,
                    i,
                    {
                      id: K(),
                      origin: P(window),
                      type: "postrobot_message_request",
                      hash: s,
                      name: r,
                      data: t,
                      fireAndForget: c,
                    },
                    { on: Ne, send: n }
                  ).then(
                    function () {
                      return c ? f.resolve() : f;
                    },
                    function (n) {
                      throw new Error(
                        "Send request message failed for " +
                        u +
                        " in " +
                        P() +
                        "\n\n" +
                        cn(n)
                      );
                    }
                  );
                });
            });
        };
        function je(n) {
          return we.toProxyWindow(n, { send: Te });
        }
        function ke(n) {
          return "[object RegExp]" === {}.toString.call(n);
        }
        function Re(n) {
          return void 0 === n && (n = window), n.location.protocol;
        }
        function Ae(n) {
          if ((void 0 === n && (n = window), n.mockDomain)) {
            var e = n.mockDomain.split("//")[0];
            if (e) return e;
          }
          return Re(n);
        }
        function Ie(n) {
          return void 0 === n && (n = window), "about:" === Ae(n);
        }
        function ze(n) {
          if ((void 0 === n && (n = window), n))
            try {
              if (n.parent && n.parent !== n) return n.parent;
            } catch (n) { }
        }
        function Fe(n) {
          if ((void 0 === n && (n = window), n && !ze(n)))
            try {
              return n.opener;
            } catch (n) { }
        }
        function Me(n) {
          try {
            return !0;
          } catch (n) { }
          return !1;
        }
        function qe(n) {
          void 0 === n && (n = window);
          var e = n.location;
          if (!e) throw new Error("Can not read window location");
          var r = Re(n);
          if (!r) throw new Error("Can not read window protocol");
          if ("file:" === r) return "file://";
          if ("about:" === r) {
            var t = ze(n);
            return t && Me() ? qe(t) : "about://";
          }
          var o = e.host;
          if (!o) throw new Error("Can not read window host");
          return r + "//" + o;
        }
        function Le(n) {
          void 0 === n && (n = window);
          var e = qe(n);
          return e && n.mockDomain && 0 === n.mockDomain.indexOf("mock:")
            ? n.mockDomain
            : e;
        }
        function Ue(n) {
          if (
            !(function (n) {
              try {
                if (n === window) return !0;
              } catch (n) { }
              try {
                var e = Object.getOwnPropertyDescriptor(n, "location");
                if (e && !1 === e.enumerable) return !1;
              } catch (n) { }
              try {
                if (Ie(n) && Me()) return !0;
              } catch (n) { }
              try {
                if (
                  (function (n) {
                    return void 0 === n && (n = window), "mock:" === Ae(n);
                  })(n) &&
                  Me()
                )
                  return !0;
              } catch (n) { }
              try {
                if (qe(n) === qe(window)) return !0;
              } catch (n) { }
              return !1;
            })(n)
          )
            return !1;
          try {
            if (n === window) return !0;
            if (Ie(n) && Me()) return !0;
            if (Le(window) === Le(n)) return !0;
          } catch (n) { }
          return !1;
        }
        function Be(n) {
          if (!Ue(n)) throw new Error("Expected window to be same domain");
          return n;
        }
        function Je(n, e) {
          if (!n || !e) return !1;
          var r = ze(e);
          return r
            ? r === n
            : -1 !==
            (function (n) {
              var e = [];
              try {
                for (; n.parent !== n;) e.push(n.parent), (n = n.parent);
              } catch (n) { }
              return e;
            })(e).indexOf(n);
        }
        function He(n) {
          var e,
            r,
            t = [];
          try {
            e = n.frames;
          } catch (r) {
            e = n;
          }
          try {
            r = e.length;
          } catch (n) { }
          if (0 === r) return t;
          if (r) {
            for (var o = 0; o < r; o++) {
              var i = void 0;
              try {
                i = e[o];
              } catch (n) {
                continue;
              }
              t.push(i);
            }
            return t;
          }
          for (var a = 0; a < 100; a++) {
            var u = void 0;
            try {
              u = e[a];
            } catch (n) {
              return t;
            }
            if (!u) return t;
            t.push(u);
          }
          return t;
        }
        function Ye(n) {
          for (var e = [], r = 0, t = He(n); r < t.length; r++) {
            var o = t[r];
            e.push(o);
            for (var i = 0, a = Ye(o); i < a.length; i++) e.push(a[i]);
          }
          return e;
        }
        function Ze(n) {
          void 0 === n && (n = window);
          try {
            if (n.top) return n.top;
          } catch (n) { }
          if (ze(n) === n) return n;
          try {
            if (Je(window, n) && window.top) return window.top;
          } catch (n) { }
          try {
            if (Je(n, window) && window.top) return window.top;
          } catch (n) { }
          for (var e = 0, r = Ye(n); e < r.length; e++) {
            var t = r[e];
            try {
              if (t.top) return t.top;
            } catch (n) { }
            if (ze(t) === t) return t;
          }
        }
        function Ge(n) {
          var e = Ze(n);
          if (!e) throw new Error("Can not determine top window");
          var r = [].concat(Ye(e), [e]);
          return -1 === r.indexOf(n) && (r = [].concat(r, [n], Ye(n))), r;
        }
        var Ve = [],
          $e = [];
        function Xe(n, e) {
          void 0 === e && (e = !0);
          try {
            if (n === window) return !1;
          } catch (n) {
            return !0;
          }
          try {
            if (!n) return !0;
          } catch (n) {
            return !0;
          }
          try {
            if (n.closed) return !0;
          } catch (n) {
            return !n || "Call was rejected by callee.\r\n" !== n.message;
          }
          if (e && Ue(n))
            try {
              if (n.mockclosed) return !0;
            } catch (n) { }
          try {
            if (!n.parent || !n.top) return !0;
          } catch (n) { }
          var r = (function (n, e) {
            for (var r = 0; r < n.length; r++)
              try {
                if (n[r] === e) return r;
              } catch (n) { }
            return -1;
          })(Ve, n);
          if (-1 !== r) {
            var t = $e[r];
            if (
              t &&
              (function (n) {
                if (!n.contentWindow) return !0;
                if (!n.parentNode) return !0;
                var e = n.ownerDocument;
                if (e && e.documentElement && !e.documentElement.contains(n)) {
                  for (var r = n; r.parentNode && r.parentNode !== r;)
                    r = r.parentNode;
                  if (!r.host || !e.documentElement.contains(r.host)) return !0;
                }
                return !1;
              })(t)
            )
              return !0;
          }
          return !1;
        }
        function Ke(n, e) {
          for (var r = He(n), t = 0; t < r.length; t++) {
            var o = r[t];
            try {
              if (Ue(o) && o.name === e && -1 !== r.indexOf(o)) return o;
            } catch (n) { }
          }
          try {
            if (-1 !== r.indexOf(n.frames[e])) return n.frames[e];
          } catch (n) { }
          try {
            if (-1 !== r.indexOf(n[e])) return n[e];
          } catch (n) { }
        }
        function Qe(n) {
          return (
            void 0 === n && (n = window),
            Fe((n = n || window)) || ze(n) || void 0
          );
        }
        function nr(n, e) {
          for (var r = 0; r < n.length; r++)
            for (var t = n[r], o = 0; o < e.length; o++)
              if (t === e[o]) return !0;
          return !1;
        }
        function er(n) {
          void 0 === n && (n = window);
          for (var e = 0, r = n; r;) (r = ze(r)) && (e += 1);
          return e;
        }
        function rr(n, e) {
          if ("string" == typeof n) {
            if ("string" == typeof e) return "*" === n || e === n;
            if (ke(e)) return !1;
            if (Array.isArray(e)) return !1;
          }
          return ke(n)
            ? ke(e)
              ? n.toString() === e.toString()
              : !Array.isArray(e) && Boolean(e.match(n))
            : !!Array.isArray(n) &&
            (Array.isArray(e)
              ? JSON.stringify(n) === JSON.stringify(e)
              : !ke(e) &&
              n.some(function (n) {
                return rr(n, e);
              }));
        }
        function tr(n) {
          return n.match(/^(https?|mock|file):\/\//)
            ? n.split("/").slice(0, 3).join("/")
            : Le();
        }
        function or(n, e, r, t) {
          var o;
          return (
            void 0 === r && (r = 1e3),
            void 0 === t && (t = 1 / 0),
            (function i() {
              if (Xe(n)) return o && clearTimeout(o), e();
              t <= 0 ? clearTimeout(o) : ((t -= r), (o = setTimeout(i, r)));
            })(),
            {
              cancel: function () {
                o && clearTimeout(o);
              },
            }
          );
        }
        function ir(n) {
          try {
            if (n === window) return !0;
          } catch (n) {
            if (n && "Call was rejected by callee.\r\n" === n.message)
              return !0;
          }
          try {
            if ("[object Window]" === {}.toString.call(n)) return !0;
          } catch (n) {
            if (n && "Call was rejected by callee.\r\n" === n.message)
              return !0;
          }
          try {
            if (window.Window && n instanceof window.Window) return !0;
          } catch (n) {
            if (n && "Call was rejected by callee.\r\n" === n.message)
              return !0;
          }
          try {
            if (n && n.self === n) return !0;
          } catch (n) {
            if (n && "Call was rejected by callee.\r\n" === n.message)
              return !0;
          }
          try {
            if (n && n.parent === n) return !0;
          } catch (n) {
            if (n && "Call was rejected by callee.\r\n" === n.message)
              return !0;
          }
          try {
            if (n && n.top === n) return !0;
          } catch (n) {
            if (n && "Call was rejected by callee.\r\n" === n.message)
              return !0;
          }
          try {
            if (
              n &&
              "__unlikely_value__" === n.__cross_domain_utils_window_check__
            )
              return !1;
          } catch (n) {
            return !0;
          }
          try {
            if ("postMessage" in n && "self" in n && "location" in n) return !0;
          } catch (n) { }
          return !1;
        }
        function ar(n) {
          if (!Ue(n))
            throw new Error(
              "Can not get global for window on different domain"
            );
          return (
            n.__zoid_9_0_87__ || (n.__zoid_9_0_87__ = {}), n.__zoid_9_0_87__
          );
        }
        function ur(n, e) {
          try {
            return e(ar(n));
          } catch (n) { }
        }
        function cr(n) {
          return {
            get: function () {
              var e = this;
              return w.try(function () {
                if (e.source && e.source !== window)
                  throw new Error(
                    "Can not call get on proxy object from a remote window"
                  );
                return n;
              });
            },
          };
        }
        function fr(n) {
          return X(JSON.stringify(n));
        }
        function sr(n) {
          var e = ar(n);
          return (e.references = e.references || {}), e.references;
        }
        function dr(n) {
          var e,
            r,
            t = n.data,
            o = n.metaData,
            i = n.sender,
            a = n.receiver,
            u = n.passByReference,
            c = void 0 !== u && u,
            f = n.basic,
            s = void 0 !== f && f,
            d = je(a.win),
            l = s
              ? JSON.stringify(t)
              : ye(d, a.domain, t, { on: Ne, send: Te }),
            h = c
              ? ((e = l),
                (r = K()),
                (sr(window)[r] = e),
                { type: "uid", uid: r })
              : { type: "raw", val: l };
          return {
            serializedData: fr({
              sender: { domain: i.domain },
              metaData: o,
              reference: h,
            }),
            cleanReference: function () {
              var n, e;
              (n = window), "uid" === (e = h).type && delete sr(n)[e.uid];
            },
          };
        }
        function lr(n) {
          var e,
            r,
            t = n.sender,
            o = n.basic,
            i = void 0 !== o && o,
            a = (function (n) {
              return JSON.parse(
                (function (n) {
                  if ("function" == typeof atob)
                    return decodeURIComponent(
                      [].map
                        .call(atob(n), function (n) {
                          return (
                            "%" +
                            ("00" + n.charCodeAt(0).toString(16)).slice(-2)
                          );
                        })
                        .join("")
                    );
                  if ("undefined" != typeof Buffer)
                    return Buffer.from(n, "base64").toString("utf8");
                  throw new Error("Can not find window.atob or Buffer");
                })(n)
              );
            })(n.data),
            u = a.reference,
            c = a.metaData;
          (e = "function" == typeof t.win ? t.win({ metaData: c }) : t.win),
            (r =
              "function" == typeof t.domain
                ? t.domain({ metaData: c })
                : "string" == typeof t.domain
                  ? t.domain
                  : a.sender.domain);
          var f = (function (n, e) {
            if ("raw" === e.type) return e.val;
            if ("uid" === e.type) return sr(n)[e.uid];
            throw new Error("Unsupported ref type: " + e.type);
          })(e, u);
          return {
            data: i
              ? JSON.parse(f)
              : (function (n, e, r) {
                return ge(n, e, r, { on: Ne, send: Te });
              })(e, r, f),
            metaData: c,
            sender: { win: e, domain: r },
            reference: u,
          };
        }
        var hr = {
          STRING: "string",
          OBJECT: "object",
          FUNCTION: "function",
          BOOLEAN: "boolean",
          NUMBER: "number",
          ARRAY: "array",
        },
          wr = { JSON: "json", DOTIFY: "dotify", BASE64: "base64" },
          pr = { IFRAME: "iframe", POPUP: "popup" },
          vr = {
            RENDER: "zoid-render",
            RENDERED: "zoid-rendered",
            DISPLAY: "zoid-display",
            ERROR: "zoid-error",
            CLOSE: "zoid-close",
            DESTROY: "zoid-destroy",
            PROPS: "zoid-props",
            RESIZE: "zoid-resize",
            FOCUS: "zoid-focus",
          };
        function mr(n) {
          return "__zoid__" + n.name + "__" + n.serializedPayload + "__";
        }
        function yr(n) {
          if (!n) throw new Error("No window name");
          var e = n.split("__"),
            r = e[1],
            t = e[2],
            o = e[3];
          if ("zoid" !== r)
            throw new Error("Window not rendered by zoid - got " + r);
          if (!t) throw new Error("Expected component name");
          if (!o) throw new Error("Expected serialized payload ref");
          return { name: t, serializedInitialPayload: o };
        }
        var gr = tn(function (n) {
          var e = lr({
            data: yr(n).serializedInitialPayload,
            sender: {
              win: function (n) {
                return (function (n) {
                  if ("opener" === n.type) return yn("opener", Fe(window));
                  if ("parent" === n.type && "number" == typeof n.distance)
                    return yn(
                      "parent",
                      ((e = window),
                        void 0 === (r = n.distance) && (r = 1),
                        (function (n, e) {
                          void 0 === e && (e = 1);
                          for (var r = n, t = 0; t < e; t++) {
                            if (!r) return;
                            r = ze(r);
                          }
                          return r;
                        })(e, er(e) - r))
                    );
                  var e, r;
                  if (
                    "global" === n.type &&
                    n.uid &&
                    "string" == typeof n.uid
                  ) {
                    var t = (function () {
                      var e = n.uid,
                        r = Qe(window);
                      if (!r) throw new Error("Can not find ancestor window");
                      for (var t = 0, o = Ge(r); t < o.length; t++) {
                        var i = o[t];
                        if (Ue(i)) {
                          var a = ur(i, function (n) {
                            return n.windows && n.windows[e];
                          });
                          if (a) return { v: a };
                        }
                      }
                    })();
                    if ("object" == typeof t) return t.v;
                  } else if ("name" === n.type) {
                    var o = n.name;
                    return yn(
                      "namedWindow",
                      (function (n, e) {
                        return (
                          Ke(n, e) ||
                          (function n(e, r) {
                            var t = Ke(e, r);
                            if (t) return t;
                            for (var o = 0, i = He(e); o < i.length; o++) {
                              var a = n(i[o], r);
                              if (a) return a;
                            }
                          })(Ze(n) || n, e)
                        );
                      })(yn("ancestor", Qe(window)), o)
                    );
                  }
                  throw new Error(
                    "Unable to find " + n.type + " parent component window"
                  );
                })(n.metaData.windowRef);
              },
            },
          });
          return { parent: e.sender, payload: e.data, reference: e.reference };
        });
        function br() {
          return gr(window.name);
        }
        function Er(n, e) {
          if ((void 0 === e && (e = window), n === ze(e)))
            return { type: "parent", distance: er(n) };
          if (n === Fe(e)) return { type: "opener" };
          if (Ue(n) && (t = n) !== Ze(t)) {
            var r = Be(n).name;
            if (r) return { type: "name", name: r };
          }
          var t;
        }
        function _r(n, e, r, t, o) {
          if (!n.hasOwnProperty(r)) return t;
          var i = n[r];
          return "function" == typeof i.childDecorate
            ? i.childDecorate({
              value: t,
              uid: o.uid,
              tag: o.tag,
              close: o.close,
              focus: o.focus,
              onError: o.onError,
              onProps: o.onProps,
              resize: o.resize,
              getParent: o.getParent,
              getParentDomain: o.getParentDomain,
              show: o.show,
              hide: o.hide,
              export: o.export,
              getSiblings: o.getSiblings,
            })
            : t;
        }
        function xr() {
          return w.try(function () {
            window.focus();
          });
        }
        function Pr() {
          return w.try(function () {
            window.close();
          });
        }
        var Cr = function () {
          return an;
        },
          Or = function (n) {
            return un(n.value);
          };
        function Sr(n, e, r) {
          for (var t = 0, o = Object.keys(i({}, n, e)); t < o.length; t++) {
            var a = o[t];
            r(a, e[a], n[a]);
          }
        }
        function Dr(n, e, r) {
          var t = {};
          return w
            .all(
              (function (n, e, o) {
                var i = [];
                return (
                  Sr(n, e, function (n, e, o) {
                    var a = (function (n, e, o) {
                      return w.resolve().then(function () {
                        var i, a;
                        if (null != o && e) {
                          var u = ((i = {}),
                            (i.get = e.queryParam),
                            (i.post = e.bodyParam),
                            i)[r],
                            c = ((a = {}),
                              (a.get = e.queryValue),
                              (a.post = e.bodyValue),
                              a)[r];
                          if (u)
                            return w
                              .hash({
                                finalParam: w.try(function () {
                                  return "function" == typeof u
                                    ? u({ value: o })
                                    : "string" == typeof u
                                      ? u
                                      : n;
                                }),
                                finalValue: w.try(function () {
                                  return "function" == typeof c && wn(o)
                                    ? c({ value: o })
                                    : o;
                                }),
                              })
                              .then(function (r) {
                                var o,
                                  i = r.finalParam,
                                  a = r.finalValue;
                                if ("boolean" == typeof a) o = a.toString();
                                else if ("string" == typeof a) o = a.toString();
                                else if ("object" == typeof a && null !== a) {
                                  if (e.serialization === wr.JSON)
                                    o = JSON.stringify(a);
                                  else if (e.serialization === wr.BASE64)
                                    o = X(JSON.stringify(a));
                                  else if (
                                    e.serialization === wr.DOTIFY ||
                                    !e.serialization
                                  ) {
                                    o = (function n(e, r, t) {
                                      for (var o in (void 0 === r && (r = ""),
                                        void 0 === t && (t = {}),
                                        (r = r ? r + "." : r),
                                        e))
                                        e.hasOwnProperty(o) &&
                                          null != e[o] &&
                                          "function" != typeof e[o] &&
                                          (e[o] &&
                                            Array.isArray(e[o]) &&
                                            e[o].length &&
                                            e[o].every(function (n) {
                                              return "object" != typeof n;
                                            })
                                            ? (t["" + r + o + "[]"] =
                                              e[o].join(","))
                                            : e[o] && "object" == typeof e[o]
                                              ? (t = n(e[o], "" + r + o, t))
                                              : (t["" + r + o] =
                                                e[o].toString()));
                                      return t;
                                    })(a, n);
                                    for (
                                      var u = 0, c = Object.keys(o);
                                      u < c.length;
                                      u++
                                    ) {
                                      var f = c[u];
                                      t[f] = o[f];
                                    }
                                    return;
                                  }
                                } else
                                  "number" == typeof a && (o = a.toString());
                                t[i] = o;
                              });
                        }
                      });
                    })(n, e, o);
                    i.push(a);
                  }),
                  i
                );
              })(e, n)
            )
            .then(function () {
              return t;
            });
        }
        function Wr(n) {
          var e,
            r,
            t,
            o,
            a,
            u,
            c,
            f,
            s = n.uid,
            d = n.options,
            l = n.overrides,
            h = void 0 === l ? {} : l,
            p = n.parentWin,
            v = void 0 === p ? window : p,
            m = d.propsDef,
            y = d.containerTemplate,
            g = d.prerenderTemplate,
            b = d.tag,
            E = d.name,
            _ = d.attributes,
            x = d.dimensions,
            P = d.autoResize,
            C = d.url,
            S = d.domain,
            D = d.exports,
            W = new w(),
            N = [],
            T = mn(),
            j = {},
            k = {},
            A = { visible: !0 },
            I = h.event
              ? h.event
              : ((e = {}),
                (r = {}),
                (t = {
                  on: function (n, e) {
                    var t = (r[n] = r[n] || []);
                    t.push(e);
                    var o = !1;
                    return {
                      cancel: function () {
                        o || ((o = !0), t.splice(t.indexOf(e), 1));
                      },
                    };
                  },
                  once: function (n, e) {
                    var r = t.on(n, function () {
                      r.cancel(), e();
                    });
                    return r;
                  },
                  trigger: function (n) {
                    for (
                      var e = arguments.length,
                      t = new Array(e > 1 ? e - 1 : 0),
                      o = 1;
                      o < e;
                      o++
                    )
                      t[o - 1] = arguments[o];
                    var i = r[n],
                      a = [];
                    if (i)
                      for (
                        var u = function (n) {
                          var e = i[n];
                          a.push(
                            w.try(function () {
                              return e.apply(void 0, t);
                            })
                          );
                        },
                        c = 0;
                        c < i.length;
                        c++
                      )
                        u(c);
                    return w.all(a).then(an);
                  },
                  triggerOnce: function (n) {
                    if (e[n]) return w.resolve();
                    e[n] = !0;
                    for (
                      var r = arguments.length,
                      o = new Array(r > 1 ? r - 1 : 0),
                      i = 1;
                      i < r;
                      i++
                    )
                      o[i - 1] = arguments[i];
                    return t.trigger.apply(t, [n].concat(o));
                  },
                  reset: function () {
                    r = {};
                  },
                })),
            z = h.props ? h.props : {},
            F = h.onError,
            M = h.getProxyContainer,
            q = h.show,
            L = h.hide,
            U = h.close,
            B = h.renderContainer,
            J = h.getProxyWindow,
            H = h.setProxyWin,
            Y = h.openFrame,
            Z = h.openPrerenderFrame,
            G = h.prerender,
            V = h.open,
            $ = h.openPrerender,
            X = h.watchForUnload,
            Q = h.getInternalState,
            nn = h.setInternalState,
            en = function () {
              return w.try(function () {
                return h.resolveInitPromise
                  ? h.resolveInitPromise()
                  : W.resolve();
              });
            },
            rn = function (n) {
              return w.try(function () {
                return h.rejectInitPromise
                  ? h.rejectInitPromise(n)
                  : W.reject(n);
              });
            },
            on = function (n) {
              for (var e = {}, r = 0, t = Object.keys(z); r < t.length; r++) {
                var o = t[r],
                  i = m[o];
                (i && !1 === i.sendToChild) ||
                  (i && i.sameDomain && !rr(n, Le(window))) ||
                  (e[o] = z[o]);
              }
              return w.hash(e);
            },
            fn = function () {
              return w.try(function () {
                return Q ? Q() : A;
              });
            },
            dn = function (n) {
              return w.try(function () {
                return nn ? nn(n) : (A = i({}, A, n));
              });
            },
            pn = function () {
              return J
                ? J()
                : w.try(function () {
                  var n = z.window;
                  if (n) {
                    var e = je(n);
                    return (
                      T.register(function () {
                        return n.close();
                      }),
                      e
                    );
                  }
                  return new we({ send: Te });
                });
            },
            vn = function (n) {
              return H
                ? H(n)
                : w.try(function () {
                  o = n;
                });
            },
            yn = function () {
              return q
                ? q()
                : w
                  .hash({
                    setState: dn({ visible: !0 }),
                    showElement: a ? a.get().then(An) : null,
                  })
                  .then(an);
            },
            gn = function () {
              return L
                ? L()
                : w
                  .hash({
                    setState: dn({ visible: !1 }),
                    showElement: a ? a.get().then(In) : null,
                  })
                  .then(an);
            },
            bn = function () {
              return "function" == typeof C ? C({ props: z }) : C;
            },
            En = function () {
              return "function" == typeof _ ? _({ props: z }) : _;
            },
            _n = function () {
              return tr(bn());
            },
            xn = function (n, e) {
              var r = e.windowName;
              return Y
                ? Y(n, { windowName: r })
                : w.try(function () {
                  if (n === pr.IFRAME)
                    return cr(
                      kn({
                        attributes: i({ name: r, title: E }, En().iframe),
                      })
                    );
                });
            },
            Pn = function (n) {
              return Z
                ? Z(n)
                : w.try(function () {
                  if (n === pr.IFRAME)
                    return cr(
                      kn({
                        attributes: i(
                          {
                            name:
                              "__zoid_prerender_frame__" +
                              E +
                              "_" +
                              K() +
                              "__",
                            title: "prerender__" + E,
                          },
                          En().iframe
                        ),
                      })
                    );
                });
            },
            Wn = function (n, e, r) {
              return $
                ? $(n, e, r)
                : w.try(function () {
                  if (n === pr.IFRAME) {
                    if (!r)
                      throw new Error("Expected proxy frame to be passed");
                    return r.get().then(function (n) {
                      return (
                        T.register(function () {
                          return zn(n);
                        }),
                        jn(n)
                          .then(function (n) {
                            return Be(n);
                          })
                          .then(function (n) {
                            return je(n);
                          })
                      );
                    });
                  }
                  throw new Error("No render context available for " + n);
                });
            },
            Nn = function () {
              return w.try(function () {
                if (o) return w.all([I.trigger(vr.FOCUS), o.focus()]).then(an);
              });
            },
            Tn = function () {
              var n = ar(window);
              return (
                (n.windows = n.windows || {}),
                (n.windows[s] = window),
                T.register(function () {
                  delete n.windows[s];
                }),
                s
              );
            },
            Ln = function (n, e, r, t) {
              if (e === Le(window)) return { type: "global", uid: Tn() };
              if (n !== window)
                throw new Error(
                  "Can not construct cross-domain window reference for different target window"
                );
              if (z.window) {
                var o = t.getWindow();
                if (!o)
                  throw new Error(
                    "Can not construct cross-domain window reference for lazy window prop"
                  );
                if (Qe(o) !== window)
                  throw new Error(
                    "Can not construct cross-domain window reference for window prop with different ancestor"
                  );
              }
              if (r === pr.POPUP) return { type: "opener" };
              if (r === pr.IFRAME)
                return { type: "parent", distance: er(window) };
              throw new Error("Can not construct window reference for child");
            },
            Un = function (n, e) {
              return w.try(function () {
                (c = n),
                  (u = e),
                  en(),
                  T.register(function () {
                    return e.close.fireAndForget().catch(an);
                  });
              });
            },
            Bn = function (n) {
              var e = n.width,
                r = n.height;
              return w.try(function () {
                I.trigger(vr.RESIZE, { width: e, height: r });
              });
            },
            Jn = function (n) {
              return w
                .try(function () {
                  return I.trigger(vr.DESTROY);
                })
                .catch(an)
                .then(function () {
                  return T.all(n);
                })
                .then(function () {
                  W.asyncReject(n || new Error("Component destroyed"));
                });
            },
            Hn = tn(function (n) {
              return w.try(function () {
                if (U) {
                  if (Xe(U.__source__)) return;
                  return U();
                }
                return w
                  .try(function () {
                    return I.trigger(vr.CLOSE);
                  })
                  .then(function () {
                    return Jn(n || new Error("Component closed"));
                  });
              });
            }),
            Yn = function (n, e) {
              var r = e.proxyWin,
                t = e.proxyFrame,
                o = e.windowName;
              return V
                ? V(n, { proxyWin: r, proxyFrame: t, windowName: o })
                : w
                  .try(function () {
                    if (n === pr.IFRAME) {
                      if (!t)
                        throw new Error("Expected proxy frame to be passed");
                      return t.get().then(function (n) {
                        return jn(n).then(function (e) {
                          return (
                            T.register(function () {
                              return zn(n);
                            }),
                            T.register(function () {
                              return (function (n) {
                                for (
                                  var e = 0,
                                  r = Kn("requestPromises").get(n, []);
                                  e < r.length;
                                  e++
                                )
                                  r[e]
                                    .reject(
                                      new Error(
                                        "Window " +
                                        (R(n) ? "closed" : "cleaned up") +
                                        " before response"
                                      )
                                    )
                                    .catch(an);
                              })(e);
                            }),
                            e
                          );
                        });
                      });
                    }
                    throw new Error("No render context available for " + n);
                  })
                  .then(function (n) {
                    return (
                      r.setWindow(n, { send: Te }),
                      r.setName(o).then(function () {
                        return r;
                      })
                    );
                  });
            },
            Zn = function () {
              return w.try(function () {
                var n = Rn(
                  window,
                  "unload",
                  un(function () {
                    Jn(new Error("Window navigated away"));
                  })
                ),
                  e = or(v, Jn, 3e3);
                if ((T.register(e.cancel), T.register(n.cancel), X)) return X();
              });
            },
            Gn = function (n) {
              var e = !1;
              return n
                .isClosed()
                .then(function (r) {
                  return r
                    ? ((e = !0),
                      Hn(new Error("Detected component window close")))
                    : w
                      .delay(200)
                      .then(function () {
                        return n.isClosed();
                      })
                      .then(function (n) {
                        if (n)
                          return (
                            (e = !0),
                            Hn(new Error("Detected component window close"))
                          );
                      });
                })
                .then(function () {
                  return e;
                });
            },
            Vn = function (n) {
              return F
                ? F(n)
                : w.try(function () {
                  if (-1 === N.indexOf(n))
                    return (
                      N.push(n), W.asyncReject(n), I.trigger(vr.ERROR, n)
                    );
                });
            },
            $n = new w(),
            Xn = function (n) {
              return w.try(function () {
                $n.resolve(n);
              });
            };
          Un.onError = Vn;
          var Qn = function (n, e) {
            return n({
              uid: s,
              container: e.container,
              context: e.context,
              doc: e.doc,
              frame: e.frame,
              prerenderFrame: e.prerenderFrame,
              focus: Nn,
              close: Hn,
              state: j,
              props: z,
              tag: b,
              dimensions: "function" == typeof x ? x({ props: z }) : x,
              event: I,
            });
          },
            ne = function (n, e) {
              var r = e.context;
              return G
                ? G(n, { context: r })
                : w.try(function () {
                  if (g) {
                    var e = n.getWindow();
                    if (
                      e &&
                      Ue(e) &&
                      (function (n) {
                        try {
                          if (!n.location.href) return !0;
                          if ("about:blank" === n.location.href) return !0;
                        } catch (n) { }
                        return !1;
                      })(e)
                    ) {
                      var t = (e = Be(e)).document,
                        o = Qn(g, { context: r, doc: t });
                      if (o) {
                        if (o.ownerDocument !== t)
                          throw new Error(
                            "Expected prerender template to have been created with document from child window"
                          );
                        !(function (n, e) {
                          var r = e.tagName.toLowerCase();
                          if ("html" !== r)
                            throw new Error(
                              "Expected element to be html, got " + r
                            );
                          for (
                            var t = n.document.documentElement,
                            o = 0,
                            i = hn(t.children);
                            o < i.length;
                            o++
                          )
                            t.removeChild(i[o]);
                          for (
                            var a = 0, u = hn(e.children);
                            a < u.length;
                            a++
                          )
                            t.appendChild(u[a]);
                        })(e, o);
                        var i = P.width,
                          a = void 0 !== i && i,
                          u = P.height,
                          c = void 0 !== u && u,
                          f = P.element,
                          s = void 0 === f ? "body" : f;
                        if ((s = Sn(s, t)) && (a || c)) {
                          var d = Mn(
                            s,
                            function (n) {
                              Bn({
                                width: a ? n.width : void 0,
                                height: c ? n.height : void 0,
                              });
                            },
                            { width: a, height: c, win: e }
                          );
                          I.on(vr.RENDERED, d.cancel);
                        }
                      }
                    }
                  }
                });
            },
            ee = function (n, e) {
              var r = e.proxyFrame,
                t = e.proxyPrerenderFrame,
                o = e.context,
                i = e.rerender;
              return B
                ? B(n, {
                  proxyFrame: r,
                  proxyPrerenderFrame: t,
                  context: o,
                  rerender: i,
                })
                : w
                  .hash({
                    container: n.get(),
                    frame: r ? r.get() : null,
                    prerenderFrame: t ? t.get() : null,
                    internalState: fn(),
                  })
                  .then(function (n) {
                    var e = n.container,
                      r = n.internalState.visible,
                      t = Qn(y, {
                        context: o,
                        container: e,
                        frame: n.frame,
                        prerenderFrame: n.prerenderFrame,
                        doc: document,
                      });
                    if (t) {
                      r || In(t), On(e, t);
                      var u = (function (n, e) {
                        e = un(e);
                        var r,
                          t,
                          o,
                          i = !1,
                          a = [],
                          u = function () {
                            i = !0;
                            for (var n = 0; n < a.length; n++)
                              a[n].disconnect();
                            r && r.cancel(),
                              o && o.removeEventListener("unload", c),
                              t && zn(t);
                          },
                          c = function () {
                            i || (e(), u());
                          };
                        if (Fn(n)) return c(), { cancel: u };
                        if (window.MutationObserver)
                          for (var f = n.parentElement; f;) {
                            var s = new window.MutationObserver(function () {
                              Fn(n) && c();
                            });
                            s.observe(f, { childList: !0 }),
                              a.push(s),
                              (f = f.parentElement);
                          }
                        return (
                          (t = document.createElement("iframe")).setAttribute(
                            "name",
                            "__detect_close_" + K() + "__"
                          ),
                          (t.style.display = "none"),
                          jn(t).then(function (n) {
                            (o = O(n)).addEventListener("unload", c);
                          }),
                          n.appendChild(t),
                          (r = ln(function () {
                            Fn(n) && c();
                          }, 1e3)),
                          { cancel: u }
                        );
                      })(t, function () {
                        var n = new Error(
                          "Detected container element removed from DOM"
                        );
                        return w.delay(1).then(function () {
                          if (!Fn(t)) return T.all(n), i().then(en, rn);
                          Hn(n);
                        });
                      });
                      return (
                        T.register(function () {
                          return u.cancel();
                        }),
                        T.register(function () {
                          return zn(t);
                        }),
                        (a = cr(t))
                      );
                    }
                  });
            },
            re = function () {
              return {
                state: j,
                event: I,
                close: Hn,
                focus: Nn,
                resize: Bn,
                onError: Vn,
                updateProps: oe,
                show: yn,
                hide: gn,
              };
            },
            te = function (n) {
              void 0 === n && (n = {});
              var e = f,
                r = re();
              sn(k, n),
                (function (n, e, r, t, o) {
                  var i = t.state,
                    a = t.close,
                    u = t.focus,
                    c = t.event,
                    f = t.onError;
                  Sr(r, n, function (n, t, s) {
                    var d = !1,
                      l = s;
                    Object.defineProperty(e, n, {
                      configurable: !0,
                      enumerable: !0,
                      get: function () {
                        return d
                          ? l
                          : ((d = !0),
                            (function () {
                              if (!t) return l;
                              var d = t.alias;
                              if (
                                (d && !wn(s) && wn(r[d]) && (l = r[d]),
                                  t.value &&
                                  (l = t.value({
                                    props: e,
                                    state: i,
                                    close: a,
                                    focus: u,
                                    event: c,
                                    onError: f,
                                    container: o,
                                  })),
                                  !t.default ||
                                  wn(l) ||
                                  wn(r[n]) ||
                                  (l = t.default({
                                    props: e,
                                    state: i,
                                    close: a,
                                    focus: u,
                                    event: c,
                                    onError: f,
                                    container: o,
                                  })),
                                  wn(l))
                              ) {
                                if (
                                  t.type === hr.ARRAY
                                    ? !Array.isArray(l)
                                    : typeof l !== t.type
                                )
                                  throw new TypeError(
                                    "Prop is not of type " + t.type + ": " + n
                                  );
                              } else if (!1 !== t.required && !wn(r[n]))
                                throw new Error(
                                  'Expected prop "' + n + '" to be defined'
                                );
                              return (
                                wn(l) &&
                                t.decorate &&
                                (l = t.decorate({
                                  value: l,
                                  props: e,
                                  state: i,
                                  close: a,
                                  focus: u,
                                  event: c,
                                  onError: f,
                                  container: o,
                                })),
                                l
                              );
                            })());
                      },
                    });
                  }),
                    Sr(e, n, an);
                })(m, z, k, r, e);
            },
            oe = function (n) {
              return (
                te(n),
                W.then(function () {
                  var n = u,
                    e = o;
                  if (n && e && c)
                    return on(c).then(function (r) {
                      return n.updateProps(r).catch(function (n) {
                        return Gn(e).then(function (e) {
                          if (!e) throw n;
                        });
                      });
                    });
                })
              );
            },
            ie = function (n) {
              return M
                ? M(n)
                : w
                  .try(function () {
                    return Dn(n);
                  })
                  .then(function (n) {
                    return (
                      qn(n) &&
                      (n = (function n(e) {
                        var r = (function (n) {
                          var e = (function (n) {
                            for (; n.parentNode;) n = n.parentNode;
                            if (qn(n)) return n;
                          })(n);
                          if (e && e.host) return e.host;
                        })(e);
                        if (!r)
                          throw new Error("Element is not in shadow dom");
                        var t = "shadow-slot-" + K(),
                          o = document.createElement("slot");
                        o.setAttribute("name", t), e.appendChild(o);
                        var i = document.createElement("div");
                        return (
                          i.setAttribute("slot", t),
                          r.appendChild(i),
                          qn(r) ? n(i) : i
                        );
                      })(n)),
                      (f = n),
                      cr(n)
                    );
                  });
            };
          return {
            init: function () {
              I.on(vr.RENDER, function () {
                return z.onRender();
              }),
                I.on(vr.DISPLAY, function () {
                  return z.onDisplay();
                }),
                I.on(vr.RENDERED, function () {
                  return z.onRendered();
                }),
                I.on(vr.CLOSE, function () {
                  return z.onClose();
                }),
                I.on(vr.DESTROY, function () {
                  return z.onDestroy();
                }),
                I.on(vr.RESIZE, function () {
                  return z.onResize();
                }),
                I.on(vr.FOCUS, function () {
                  return z.onFocus();
                }),
                I.on(vr.PROPS, function (n) {
                  return z.onProps(n);
                }),
                I.on(vr.ERROR, function (n) {
                  return z && z.onError
                    ? z.onError(n)
                    : rn(n).then(function () {
                      setTimeout(function () {
                        throw n;
                      }, 1);
                    });
                }),
                T.register(I.reset);
            },
            render: function (n) {
              var e = n.target,
                r = n.container,
                t = n.context,
                i = n.rerender;
              return w
                .try(function () {
                  var n = _n(),
                    a = S || _n();
                  !(function (n, e, r) {
                    if (n !== window) {
                      if (
                        !(function (n, e) {
                          var r = Ze(n) || n,
                            t = Ze(e) || e;
                          try {
                            if (r && t) return r === t;
                          } catch (n) { }
                          var o = Ge(n),
                            i = Ge(e);
                          if (nr(o, i)) return !0;
                          var a = Fe(r),
                            u = Fe(t);
                          return (a && nr(Ge(a), i)) || (u && nr(Ge(u), o)), !1;
                        })(window, n)
                      )
                        throw new Error("Can only renderTo an adjacent frame");
                      var t = Le();
                      if (!rr(e, t) && !Ue(n))
                        throw new Error(
                          "Can not render remotely to " +
                          e.toString() +
                          " - can only render to " +
                          t
                        );
                      if (r && "string" != typeof r)
                        throw new Error(
                          "Container passed to renderTo must be a string selector, got " +
                          typeof r +
                          " }"
                        );
                    }
                  })(e, a, r);
                  var u = w.try(function () {
                    if (e !== window)
                      return (function (n, e) {
                        for (
                          var r = {}, t = 0, o = Object.keys(z);
                          t < o.length;
                          t++
                        ) {
                          var i = o[t],
                            a = m[i];
                          a && a.allowDelegate && (r[i] = z[i]);
                        }
                        var u = Te(e, "zoid_delegate_" + E, {
                          uid: s,
                          overrides: {
                            props: r,
                            event: I,
                            close: Hn,
                            onError: Vn,
                            getInternalState: fn,
                            setInternalState: dn,
                            resolveInitPromise: en,
                            rejectInitPromise: rn,
                          },
                        })
                          .then(function (n) {
                            var r = n.data.parent;
                            return (
                              T.register(function (n) {
                                if (!Xe(e)) return r.destroy(n);
                              }),
                              r.getDelegateOverrides()
                            );
                          })
                          .catch(function (n) {
                            throw new Error(
                              "Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" +
                              cn(n)
                            );
                          });
                        return (
                          (M = function () {
                            for (
                              var n = arguments.length,
                              e = new Array(n),
                              r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return u.then(function (n) {
                              return n.getProxyContainer.apply(n, e);
                            });
                          }),
                          (B = function () {
                            for (
                              var n = arguments.length,
                              e = new Array(n),
                              r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return u.then(function (n) {
                              return n.renderContainer.apply(n, e);
                            });
                          }),
                          (q = function () {
                            for (
                              var n = arguments.length,
                              e = new Array(n),
                              r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return u.then(function (n) {
                              return n.show.apply(n, e);
                            });
                          }),
                          (L = function () {
                            for (
                              var n = arguments.length,
                              e = new Array(n),
                              r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return u.then(function (n) {
                              return n.hide.apply(n, e);
                            });
                          }),
                          (X = function () {
                            for (
                              var n = arguments.length,
                              e = new Array(n),
                              r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return u.then(function (n) {
                              return n.watchForUnload.apply(n, e);
                            });
                          }),
                          n === pr.IFRAME &&
                          ((J = function () {
                            for (
                              var n = arguments.length,
                              e = new Array(n),
                              r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return u.then(function (n) {
                              return n.getProxyWindow.apply(n, e);
                            });
                          }),
                            (Y = function () {
                              for (
                                var n = arguments.length,
                                e = new Array(n),
                                r = 0;
                                r < n;
                                r++
                              )
                                e[r] = arguments[r];
                              return u.then(function (n) {
                                return n.openFrame.apply(n, e);
                              });
                            }),
                            (Z = function () {
                              for (
                                var n = arguments.length,
                                e = new Array(n),
                                r = 0;
                                r < n;
                                r++
                              )
                                e[r] = arguments[r];
                              return u.then(function (n) {
                                return n.openPrerenderFrame.apply(n, e);
                              });
                            }),
                            (G = function () {
                              for (
                                var n = arguments.length,
                                e = new Array(n),
                                r = 0;
                                r < n;
                                r++
                              )
                                e[r] = arguments[r];
                              return u.then(function (n) {
                                return n.prerender.apply(n, e);
                              });
                            }),
                            (V = function () {
                              for (
                                var n = arguments.length,
                                e = new Array(n),
                                r = 0;
                                r < n;
                                r++
                              )
                                e[r] = arguments[r];
                              return u.then(function (n) {
                                return n.open.apply(n, e);
                              });
                            }),
                            ($ = function () {
                              for (
                                var n = arguments.length,
                                e = new Array(n),
                                r = 0;
                                r < n;
                                r++
                              )
                                e[r] = arguments[r];
                              return u.then(function (n) {
                                return n.openPrerender.apply(n, e);
                              });
                            })),
                          u
                        );
                      })(t, e);
                  }),
                    c = z.window,
                    f = Zn(),
                    l = Dr(m, z, "post"),
                    h = I.trigger(vr.RENDER),
                    p = ie(r),
                    v = pn(),
                    y = p.then(function () {
                      return te();
                    }),
                    g = y.then(function () {
                      return Dr(m, z, "get").then(function (n) {
                        return (function (n, e) {
                          var r,
                            t,
                            o = e.query || {},
                            i = e.hash || {},
                            a = n.split("#");
                          t = a[1];
                          var u = (r = a[0]).split("?");
                          r = u[0];
                          var c = Cn(u[1], o),
                            f = Cn(t, i);
                          return (
                            c && (r = r + "?" + c), f && (r = r + "#" + f), r
                          );
                        })(
                          (function (n) {
                            if (0 !== tr(n).indexOf("mock:")) return n;
                            throw new Error(
                              "Mock urls not supported out of test mode"
                            );
                          })(bn()),
                          { query: n }
                        );
                      });
                    }),
                    _ = v.then(function (r) {
                      return (function (n) {
                        var e = void 0 === n ? {} : n,
                          r = e.proxyWin,
                          t = e.initialChildDomain,
                          o = e.childDomainMatch,
                          i = e.target,
                          a = void 0 === i ? window : i,
                          u = e.context;
                        return (function (n) {
                          var e = void 0 === n ? {} : n,
                            r = e.proxyWin,
                            t = e.childDomainMatch,
                            o = e.context;
                          return on(e.initialChildDomain).then(function (n) {
                            return {
                              uid: s,
                              context: o,
                              tag: b,
                              childDomainMatch: t,
                              version: "9_0_87",
                              props: n,
                              exports:
                                ((e = r),
                                {
                                  init: function (n) {
                                    return Un(this.origin, n);
                                  },
                                  close: Hn,
                                  checkClose: function () {
                                    return Gn(e);
                                  },
                                  resize: Bn,
                                  onError: Vn,
                                  show: yn,
                                  hide: gn,
                                  export: Xn,
                                }),
                            };
                            var e;
                          });
                        })({
                          proxyWin: r,
                          initialChildDomain: t,
                          childDomainMatch: o,
                          context: u,
                        }).then(function (n) {
                          var e = dr({
                            data: n,
                            metaData: { windowRef: Ln(a, t, u, r) },
                            sender: { domain: Le(window) },
                            receiver: { win: r, domain: o },
                            passByReference: t === Le(),
                          }),
                            i = e.serializedData;
                          return T.register(e.cleanReference), i;
                        });
                      })({
                        proxyWin: (o = {
                          proxyWin: r,
                          initialChildDomain: n,
                          childDomainMatch: a,
                          target: e,
                          context: t,
                        }).proxyWin,
                        initialChildDomain: o.initialChildDomain,
                        childDomainMatch: o.childDomainMatch,
                        target: o.target,
                        context: o.context,
                      }).then(function (n) {
                        return mr({ name: E, serializedPayload: n });
                      });
                      var o;
                    }),
                    x = _.then(function (n) {
                      return xn(t, { windowName: n });
                    }),
                    P = Pn(t),
                    C = w
                      .hash({
                        proxyContainer: p,
                        proxyFrame: x,
                        proxyPrerenderFrame: P,
                      })
                      .then(function (n) {
                        return ee(n.proxyContainer, {
                          context: t,
                          proxyFrame: n.proxyFrame,
                          proxyPrerenderFrame: n.proxyPrerenderFrame,
                          rerender: i,
                        });
                      })
                      .then(function (n) {
                        return n;
                      }),
                    O = w
                      .hash({ windowName: _, proxyFrame: x, proxyWin: v })
                      .then(function (n) {
                        var e = n.proxyWin;
                        return c
                          ? e
                          : Yn(t, {
                            windowName: n.windowName,
                            proxyWin: e,
                            proxyFrame: n.proxyFrame,
                          });
                      }),
                    D = w
                      .hash({ proxyWin: O, proxyPrerenderFrame: P })
                      .then(function (n) {
                        return Wn(t, n.proxyWin, n.proxyPrerenderFrame);
                      }),
                    N = O.then(function (n) {
                      return (o = n), vn(n);
                    }),
                    j = w
                      .hash({ proxyPrerenderWin: D, state: N })
                      .then(function (n) {
                        return ne(n.proxyPrerenderWin, { context: t });
                      }),
                    k = w
                      .hash({ proxyWin: O, windowName: _ })
                      .then(function (n) {
                        if (c) return n.proxyWin.setName(n.windowName);
                      }),
                    R = w.hash({ body: l }).then(function (n) {
                      return d.method
                        ? d.method
                        : Object.keys(n.body).length
                          ? "post"
                          : "get";
                    }),
                    A = w
                      .hash({
                        proxyWin: O,
                        windowUrl: g,
                        body: l,
                        method: R,
                        windowName: k,
                        prerender: j,
                      })
                      .then(function (n) {
                        return n.proxyWin.setLocation(n.windowUrl, {
                          method: n.method,
                          body: n.body,
                        });
                      }),
                    F = O.then(function (n) {
                      !(function n(e, r) {
                        var t = !1;
                        return (
                          T.register(function () {
                            t = !0;
                          }),
                          w
                            .delay(2e3)
                            .then(function () {
                              return e.isClosed();
                            })
                            .then(function (o) {
                              if (!t)
                                return o
                                  ? Hn(new Error("Detected " + r + " close"))
                                  : n(e, r);
                            })
                        );
                      })(n, t);
                    }),
                    U = w
                      .hash({ container: C, prerender: j })
                      .then(function () {
                        return I.trigger(vr.DISPLAY);
                      }),
                    H = O.then(function (n) { }),
                    K = A.then(function () {
                      return w.try(function () {
                        var n = z.timeout;
                        if (n)
                          return W.timeout(
                            n,
                            new Error(
                              "Loading component timed out after " +
                              n +
                              " milliseconds"
                            )
                          );
                      });
                    }),
                    Q = W.then(function () {
                      return I.trigger(vr.RENDERED);
                    });
                  return w.hash({
                    initPromise: W,
                    buildUrlPromise: g,
                    onRenderPromise: h,
                    getProxyContainerPromise: p,
                    openFramePromise: x,
                    openPrerenderFramePromise: P,
                    renderContainerPromise: C,
                    openPromise: O,
                    openPrerenderPromise: D,
                    setStatePromise: N,
                    prerenderPromise: j,
                    loadUrlPromise: A,
                    buildWindowNamePromise: _,
                    setWindowNamePromise: k,
                    watchForClosePromise: F,
                    onDisplayPromise: U,
                    openBridgePromise: H,
                    runTimeoutPromise: K,
                    onRenderedPromise: Q,
                    delegatePromise: u,
                    watchForUnloadPromise: f,
                    finalSetPropsPromise: y,
                  });
                })
                .catch(function (n) {
                  return w.all([Vn(n), Jn(n)]).then(
                    function () {
                      throw n;
                    },
                    function () {
                      throw n;
                    }
                  );
                })
                .then(an);
            },
            destroy: Jn,
            getProps: function () {
              return z;
            },
            setProps: te,
            export: Xn,
            getHelpers: re,
            getDelegateOverrides: function () {
              return w.try(function () {
                return {
                  getProxyContainer: ie,
                  show: yn,
                  hide: gn,
                  renderContainer: ee,
                  getProxyWindow: pn,
                  watchForUnload: Zn,
                  openFrame: xn,
                  openPrerenderFrame: Pn,
                  prerender: ne,
                  open: Yn,
                  openPrerender: Wn,
                  setProxyWin: vn,
                };
              });
            },
            getExports: function () {
              return D({
                getExports: function () {
                  return $n;
                },
              });
            },
          };
        }
        function Nr(n) {
          var e = n.uid,
            r = n.frame,
            t = n.prerenderFrame,
            o = n.doc,
            i = n.props,
            a = n.event,
            u = n.dimensions,
            c = u.width,
            f = u.height;
          if (r && t) {
            var s = o.createElement("div");
            s.setAttribute("id", e);
            var d = o.createElement("style");
            return (
              i.cspNonce && d.setAttribute("nonce", i.cspNonce),
              d.appendChild(
                o.createTextNode(
                  "\n            #" +
                  e +
                  " {\n                display: inline-block;\n                position: relative;\n                width: " +
                  c +
                  ";\n                height: " +
                  f +
                  ";\n            }\n\n            #" +
                  e +
                  " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "
                )
              ),
              s.appendChild(r),
              s.appendChild(t),
              s.appendChild(d),
              t.classList.add("zoid-visible"),
              r.classList.add("zoid-invisible"),
              a.on(vr.RENDERED, function () {
                t.classList.remove("zoid-visible"),
                  t.classList.add("zoid-invisible"),
                  r.classList.remove("zoid-invisible"),
                  r.classList.add("zoid-visible"),
                  setTimeout(function () {
                    zn(t);
                  }, 1);
              }),
              a.on(vr.RESIZE, function (n) {
                var e = n.width,
                  r = n.height;
                "number" == typeof e && (s.style.width = Hn(e)),
                  "number" == typeof r && (s.style.height = Hn(r));
              }),
              s
            );
          }
        }
        var Tr = mn(),
          jr = mn();
        function kr(n) {
          var e,
            r,
            t = (function (n) {
              var e = n.tag,
                r = n.url,
                t = n.domain,
                o = n.bridgeUrl,
                a = n.props,
                u = void 0 === a ? {} : a,
                c = n.dimensions,
                f = void 0 === c ? {} : c,
                s = n.autoResize,
                d = void 0 === s ? {} : s,
                l = n.allowedParentDomains,
                h = void 0 === l ? "*" : l,
                w = n.attributes,
                p = void 0 === w ? {} : w,
                v = n.defaultContext,
                m = void 0 === v ? pr.IFRAME : v,
                y = n.containerTemplate,
                g = void 0 === y ? Nr : y,
                b = n.prerenderTemplate,
                E = void 0 === b ? null : b,
                _ = n.validate,
                x = n.eligible,
                P =
                  void 0 === x
                    ? function () {
                      return { eligible: !0 };
                    }
                    : x,
                C = n.logger,
                O = void 0 === C ? { info: an } : C,
                S = n.exports,
                D = void 0 === S ? an : S,
                W = n.method,
                N = n.children,
                T =
                  void 0 === N
                    ? function () {
                      return {};
                    }
                    : N,
                j = e.replace(/-/g, "_"),
                k = i(
                  {},
                  {
                    window: {
                      type: hr.OBJECT,
                      sendToChild: !1,
                      required: !1,
                      allowDelegate: !0,
                      validate: function (n) {
                        var e = n.value;
                        if (!ir(e) && !we.isProxyWindow(e))
                          throw new Error("Expected Window or ProxyWindow");
                        if (ir(e)) {
                          if (Xe(e)) throw new Error("Window is closed");
                          if (!Ue(e))
                            throw new Error("Window is not same domain");
                        }
                      },
                      decorate: function (n) {
                        return je(n.value);
                      },
                    },
                    timeout: { type: hr.NUMBER, required: !1, sendToChild: !1 },
                    cspNonce: { type: hr.STRING, required: !1 },
                    onDisplay: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: Cr,
                      decorate: Or,
                    },
                    onRendered: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      default: Cr,
                      decorate: Or,
                    },
                    onRender: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      default: Cr,
                      decorate: Or,
                    },
                    onClose: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: Cr,
                      decorate: Or,
                    },
                    onDestroy: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: Cr,
                      decorate: Or,
                    },
                    onResize: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: Cr,
                    },
                    onFocus: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: Cr,
                    },
                    close: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.close;
                      },
                    },
                    focus: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.focus;
                      },
                    },
                    resize: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.resize;
                      },
                    },
                    uid: {
                      type: hr.STRING,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.uid;
                      },
                    },
                    tag: {
                      type: hr.STRING,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.tag;
                      },
                    },
                    getParent: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.getParent;
                      },
                    },
                    getParentDomain: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.getParentDomain;
                      },
                    },
                    show: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.show;
                      },
                    },
                    hide: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.hide;
                      },
                    },
                    export: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.export;
                      },
                    },
                    onError: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.onError;
                      },
                    },
                    onProps: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.onProps;
                      },
                    },
                    getSiblings: {
                      type: hr.FUNCTION,
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.getSiblings;
                      },
                    },
                  },
                  u
                );
              if (!g) throw new Error("Container template required");
              return {
                name: j,
                tag: e,
                url: r,
                domain: t,
                bridgeUrl: o,
                method: W,
                propsDef: k,
                dimensions: f,
                autoResize: d,
                allowedParentDomains: h,
                attributes: p,
                defaultContext: m,
                containerTemplate: g,
                prerenderTemplate: E,
                validate: _,
                logger: O,
                eligible: P,
                children: T,
                exports:
                  "function" == typeof D
                    ? D
                    : function (n) {
                      for (
                        var e = n.getExports,
                        r = {},
                        t = function (n, t) {
                          var o = t[n],
                            i = D[o].type,
                            a = e().then(function (n) {
                              return n[o];
                            });
                          r[o] =
                            i === hr.FUNCTION
                              ? function () {
                                for (
                                  var n = arguments.length,
                                  e = new Array(n),
                                  r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return a.then(function (n) {
                                  return n.apply(void 0, e);
                                });
                              }
                              : a;
                        },
                        o = 0,
                        i = Object.keys(D);
                        o < i.length;
                        o++
                      )
                        t(o, i);
                      return r;
                    },
              };
            })(n),
            o = t.name,
            a = t.tag,
            u = t.defaultContext,
            c = t.eligible,
            f = t.children,
            s = ar(window),
            d = [],
            l = function () {
              if (
                (function (n) {
                  try {
                    return yr(window.name).name === n;
                  } catch (n) { }
                  return !1;
                })(o)
              ) {
                var n = br().payload;
                if (n.tag === a && rr(n.childDomainMatch, Le())) return !0;
              }
              return !1;
            },
            h = tn(function () {
              if (l()) {
                if (window.xprops)
                  throw (
                    (delete s.components[a],
                      new Error(
                        "Can not register " +
                        o +
                        " as child - child already registered"
                      ))
                  );
                var n = (function (n) {
                  var e,
                    r = n.tag,
                    t = n.propsDef,
                    o = n.autoResize,
                    i = n.allowedParentDomains,
                    a = [],
                    u = br(),
                    c = u.parent,
                    f = u.payload,
                    s = c.win,
                    d = c.domain,
                    l = new w(),
                    h = f.version,
                    p = f.uid,
                    v = f.exports,
                    m = f.context,
                    y = f.props;
                  if ("9_0_87" !== h)
                    throw new Error(
                      "Parent window has zoid version " +
                      h +
                      ", child window has version 9_0_87"
                    );
                  var g = v.show,
                    b = v.hide,
                    E = v.close,
                    _ = v.onError,
                    x = v.checkClose,
                    P = v.export,
                    C = v.resize,
                    O = v.init,
                    S = function () {
                      return s;
                    },
                    D = function () {
                      return d;
                    },
                    W = function (n) {
                      return (
                        a.push(n),
                        {
                          cancel: function () {
                            a.splice(a.indexOf(n), 1);
                          },
                        }
                      );
                    },
                    N = function (n) {
                      return C.fireAndForget({
                        width: n.width,
                        height: n.height,
                      });
                    },
                    T = function (n) {
                      return l.resolve(n), P(n);
                    },
                    j = function (n) {
                      var t = (void 0 === n ? {} : n).anyParent,
                        o = [],
                        i = e.parent;
                      if ((void 0 === t && (t = !i), !t && !i))
                        throw new Error("No parent found for " + r + " child");
                      for (var a = 0, u = Ge(window); a < u.length; a++) {
                        var c = u[a];
                        if (Ue(c)) {
                          var f = Be(c).xprops;
                          if (f && S() === f.getParent()) {
                            var s = f.parent;
                            if (t || !i || (s && s.uid === i.uid)) {
                              var d = ur(c, function (n) {
                                return n.exports;
                              });
                              o.push({ props: f, exports: d });
                            }
                          }
                        }
                      }
                      return o;
                    },
                    k = function (n, o, i) {
                      void 0 === i && (i = !1);
                      var u = (function (n, e, r, t, o, i) {
                        void 0 === i && (i = !1);
                        for (
                          var a = {}, u = 0, c = Object.keys(r);
                          u < c.length;
                          u++
                        ) {
                          var f = c[u],
                            s = e[f];
                          if (
                            !s ||
                            !s.sameDomain ||
                            (t === Le(window) && Ue(n))
                          ) {
                            var d = _r(e, 0, f, r[f], o);
                            (a[f] = d),
                              s && s.alias && !a[s.alias] && (a[s.alias] = d);
                          }
                        }
                        if (!i)
                          for (
                            var l = 0, h = Object.keys(e);
                            l < h.length;
                            l++
                          ) {
                            var w = h[l];
                            r.hasOwnProperty(w) ||
                              (a[w] = _r(e, 0, w, void 0, o));
                          }
                        return a;
                      })(
                        s,
                        t,
                        n,
                        o,
                        {
                          tag: r,
                          show: g,
                          hide: b,
                          close: E,
                          focus: xr,
                          onError: _,
                          resize: N,
                          getSiblings: j,
                          onProps: W,
                          getParent: S,
                          getParentDomain: D,
                          uid: p,
                          export: T,
                        },
                        i
                      );
                      e ? sn(e, u) : (e = u);
                      for (var c = 0; c < a.length; c++) (0, a[c])(e);
                    },
                    R = function (n) {
                      return w.try(function () {
                        return k(n, d, !0);
                      });
                    };
                  return {
                    init: function () {
                      return w
                        .try(function () {
                          return (
                            Ue(s) &&
                            (function (n) {
                              var e = n.componentName,
                                r = n.parentComponentWindow,
                                t = lr({
                                  data: yr(window.name)
                                    .serializedInitialPayload,
                                  sender: { win: r },
                                  basic: !0,
                                }),
                                o = t.sender;
                              if (
                                "uid" === t.reference.type ||
                                "global" === t.metaData.windowRef.type
                              ) {
                                var i = dr({
                                  data: t.data,
                                  metaData: { windowRef: Er(r) },
                                  sender: { domain: o.domain },
                                  receiver: { win: window, domain: Le() },
                                  basic: !0,
                                });
                                window.name = mr({
                                  name: e,
                                  serializedPayload: i.serializedData,
                                });
                              }
                            })({
                              componentName: n.name,
                              parentComponentWindow: s,
                            }),
                            (ar(window).exports = n.exports({
                              getExports: function () {
                                return l;
                              },
                            })),
                            (function (n, e) {
                              if (!rr(n, e))
                                throw new Error(
                                  "Can not be rendered by domain: " + e
                                );
                            })(i, d),
                            te(s),
                            window.addEventListener(
                              "beforeunload",
                              function () {
                                x.fireAndForget();
                              }
                            ),
                            window.addEventListener("unload", function () {
                              x.fireAndForget();
                            }),
                            or(s, function () {
                              Pr();
                            }),
                            O({ updateProps: R, close: Pr })
                          );
                        })
                        .then(function () {
                          return ((n = o.width),
                            (e = void 0 !== n && n),
                            (r = o.height),
                            (t = void 0 !== r && r),
                            (i = o.element),
                            Dn(void 0 === i ? "body" : i)
                              .catch(an)
                              .then(function (n) {
                                return { width: e, height: t, element: n };
                              })).then(function (n) {
                                var e = n.width,
                                  r = n.height,
                                  t = n.element;
                                t &&
                                  (e || r) &&
                                  m !== pr.POPUP &&
                                  Mn(
                                    t,
                                    function (n) {
                                      N({
                                        width: e ? n.width : void 0,
                                        height: r ? n.height : void 0,
                                      });
                                    },
                                    { width: e, height: r }
                                  );
                              });
                          var n, e, r, t, i;
                        })
                        .catch(function (n) {
                          _(n);
                        });
                    },
                    getProps: function () {
                      return e || (k(y, d), e);
                    },
                  };
                })(t);
                return n.init(), n;
              }
            });
          if (
            (h(),
              (e = Ne("zoid_allow_delegate_" + o, function () {
                return !0;
              })),
              (r = Ne("zoid_delegate_" + o, function (n) {
                var e = n.data;
                return {
                  parent: Wr({
                    uid: e.uid,
                    options: t,
                    overrides: e.overrides,
                    parentWin: n.source,
                  }),
                };
              })),
              jr.register(e.cancel),
              jr.register(r.cancel),
              (s.components = s.components || {}),
              s.components[a])
          )
            throw new Error(
              "Can not register multiple components with the same tag: " + a
            );
          return (
            (s.components[a] = !0),
            {
              init: function n(e) {
                var r,
                  s = "zoid-" + a + "-" + K(),
                  l = e || {},
                  h = c({ props: l }),
                  p = h.eligible,
                  v = h.reason,
                  m = l.onDestroy;
                l.onDestroy = function () {
                  if ((r && p && d.splice(d.indexOf(r), 1), m))
                    return m.apply(void 0, arguments);
                };
                var y = Wr({ uid: s, options: t });
                y.init(),
                  p ? y.setProps(l) : l.onDestroy && l.onDestroy(),
                  Tr.register(function (n) {
                    return y.destroy(
                      n || new Error("zoid destroyed all components")
                    );
                  });
                var g = function (e) {
                  var r = (void 0 === e ? {} : e).decorate;
                  return n((void 0 === r ? dn : r)(l));
                },
                  b = function (n, e, t) {
                    return w
                      .try(function () {
                        if (!p) {
                          var e = new Error(
                            v || o + " component is not eligible"
                          );
                          return y.destroy(e).then(function () {
                            throw e;
                          });
                        }
                        if (!ir(n))
                          throw new Error("Must pass window to renderTo");
                        return (function (n, e) {
                          return w.try(function () {
                            if (n.window) return je(n.window).getType();
                            if (e) {
                              if (e !== pr.IFRAME && e !== pr.POPUP)
                                throw new Error("Unrecognized context: " + e);
                              return e;
                            }
                            return u;
                          });
                        })(l, t);
                      })
                      .then(function (o) {
                        if (
                          ((e = (function (n, e) {
                            if (e) {
                              if ("string" != typeof e && !G(e))
                                throw new TypeError(
                                  "Expected string or element selector to be passed"
                                );
                              return e;
                            }
                            if (n === pr.POPUP) return "body";
                            throw new Error(
                              "Expected element to be passed to render iframe"
                            );
                          })(o, e)),
                            n !== window && "string" != typeof e)
                        )
                          throw new Error(
                            "Must pass string element when rendering to another window"
                          );
                        return y.render({
                          target: n,
                          container: e,
                          context: o,
                          rerender: function () {
                            var o = g();
                            return sn(r, o), o.renderTo(n, e, t);
                          },
                        });
                      })
                      .catch(function (n) {
                        return y.destroy(n).then(function () {
                          throw n;
                        });
                      });
                  };
                return (
                  (r = i(
                    {},
                    y.getExports(),
                    y.getHelpers(),
                    (function () {
                      for (
                        var n = f(),
                        e = {},
                        r = function (r, t) {
                          var o = t[r],
                            a = n[o];
                          e[o] = function (n) {
                            var e = y.getProps(),
                              r = i({}, n, {
                                parent: {
                                  uid: s,
                                  props: e,
                                  export: y.export,
                                },
                              });
                            return a(r);
                          };
                        },
                        t = 0,
                        o = Object.keys(n);
                        t < o.length;
                        t++
                      )
                        r(t, o);
                      return e;
                    })(),
                    {
                      isEligible: function () {
                        return p;
                      },
                      clone: g,
                      render: function (n, e) {
                        return b(window, n, e);
                      },
                      renderTo: function (n, e, r) {
                        return b(n, e, r);
                      },
                    }
                  )),
                  p && d.push(r),
                  r
                );
              },
              instances: d,
              driver: function (n, e) {
                throw new Error("Driver support not enabled");
              },
              isChild: l,
              canRenderTo: function (n) {
                return Te(n, "zoid_allow_delegate_" + o)
                  .then(function (n) {
                    return n.data;
                  })
                  .catch(function () {
                    return !1;
                  });
              },
              registerChild: h,
            }
          );
        }
        var Rr = function (n) {
          !(function () {
            var n, e, r, t;
            Yn().initialized ||
              ((Yn().initialized = !0),
                (e = (n = { on: Ne, send: Te }).on),
                (r = n.send),
                ((t = Yn()).receiveMessage =
                  t.receiveMessage ||
                  function (n) {
                    return We(n, { on: e, send: r });
                  }),
                (function (n) {
                  var e = n.on,
                    r = n.send;
                  Gn().getOrSet("postMessageListener", function () {
                    return Rn(window, "message", function (n) {
                      !(function (n, e) {
                        var r = e.on,
                          t = e.send;
                        w.try(function () {
                          var e = n.source || n.sourceElement,
                            o =
                              n.origin ||
                              (n.originalEvent && n.originalEvent.origin),
                            i = n.data;
                          if (("null" === o && (o = "file://"), e)) {
                            if (!o)
                              throw new Error(
                                "Post message did not have origin domain"
                              );
                            We(
                              { source: e, origin: o, data: i },
                              { on: r, send: t }
                            );
                          }
                        });
                      })(n, { on: e, send: r });
                    });
                  });
                })({ on: Ne, send: Te }),
                (function (n) {
                  var e = n.on,
                    r = n.send;
                  Gn("builtinListeners").getOrSet("helloListener", function () {
                    var n = e("postrobot_hello", { domain: "*" }, function (n) {
                      return (
                        ne(n.source, { domain: n.origin }), { instanceID: Qn() }
                      );
                    }),
                      t = A();
                    return t && ee(t, { send: r }).catch(function (n) { }), n;
                  });
                })({ on: Ne, send: Te }));
          })();
          var e = kr(n),
            r = function (n) {
              return e.init(n);
            };
          (r.driver = function (n, r) {
            return e.driver(n, r);
          }),
            (r.isChild = function () {
              return e.isChild();
            }),
            (r.canRenderTo = function (n) {
              return e.canRenderTo(n);
            }),
            (r.instances = e.instances);
          var t = e.registerChild();
          return t && (window.xprops = r.xprops = t.getProps()), r;
        };
        function Ar(n) {
          var e = Tr.all(n);
          return (Tr = mn()), e;
        }
        var Ir = Ar;
        function zr(n) {
          var e;
          return (
            Ir(),
            delete window.__zoid_9_0_87__,
            (function () {
              for (
                var n = Gn("responseListeners"), e = 0, r = n.keys();
                e < r.length;
                e++
              ) {
                var t = r[e],
                  o = n.get(t);
                o && (o.cancelled = !0), n.del(t);
              }
            })(),
            (e = Gn().get("postMessageListener")) && e.cancel(),
            delete window.__post_robot_10_0_46__,
            jr.all(n)
          );
        }
      },
    ]));
  const e = n.exports.create({
    url: "https://crypto.com/price/widget/coin-blocks",
    tag: "coin-blocks",
    defaultContext: "iframe",
    dimensions: { width: "100%", height: "none" },
    autoResize: { width: !1, height: !0 },
    attributes: { iframe: {} },
    props: {
      mixedTypeSlugs: { type: "array", required: !0 },
      origin: { type: "string", required: !0 },
    },
  }),
    r = n.exports.create({
      url: "https://crypto.com/price/widget/coin-list",
      tag: "coin-list",
      defaultContext: "iframe",
      dimensions: { width: "100%", height: "none" },
      autoResize: { width: !1, height: !0 },
      attributes: { iframe: {} },
      props: {
        mixedTypeSlugs: { type: "array", required: !0 },
        origin: { type: "string", required: !0 },
      },
    }),
    t = n.exports.create({
      url: "https://crypto.com/price/widget/coin-marquee",
      tag: "coin-marquee",
      defaultContext: "iframe",
      dimensions: { width: "100%", height: "none" },
      autoResize: { width: !1, height: !0 },
      attributes: { iframe: {} },
      props: {
        mixedTypeSlugs: { type: "array", required: !0 },
        origin: { type: "string", required: !0 },
      },
    }),
    o = n.exports.create({
      url: "https://crypto.com/price/widget/coin-ticker",
      tag: "coin-ticker",
      defaultContext: "iframe",
      dimensions: { width: "100%", height: "none" },
      autoResize: { width: !1, height: !0 },
      attributes: { iframe: {} },
      props: {
        mixedTypeSlugs: { type: "array", required: !0 },
        origin: { type: "string", required: !0 },
      },
    });
  var i, a, u;
  !(function (n) {
    (n.CoinBlocks = "CoinBlocks"),
      (n.CoinList = "CoinList"),
      (n.CoinMarquee = "CoinMarquee"),
      (n.CoinTicker = "CoinTicker");
  })(i || (i = {})),
    (function (n) {
      (n.Light = "light"), (n.Dark = "dark");
    })(a || (a = {})),
    (function (n) {
      (n.Classic = "classic"), (n.Modern = "modern");
    })(u || (u = {}));
  const c = (n, e) => {
    var r, t, o;
    const i = document.querySelectorAll(e);
    for (const e of i)
      if (e instanceof HTMLElement)
        try {
          let i = window.location.hostname;
          try {
            i =
              (null ===
                (r =
                  null === window || void 0 === window
                    ? void 0
                    : window.top) || void 0 === r
                ? void 0
                : r.location.hostname) ||
              i ||
              "unknown";
          } catch (n) {
            console.error(
              "Failed to access `window.top.location.hostname`",
              n
            );
          }
          n({
            mixedTypeSlugs: [
              (null === (t = e.dataset.coins) || void 0 === t
                ? void 0
                : t.split(",")) || [],
              (null === (o = e.dataset.coinIds) || void 0 === o
                ? void 0
                : o.split(",").map((n) => parseInt(n))) || [],
            ],
            origin: e.dataset.origin || i,
            isTransparent: "true" === e.dataset.transparent || !1,
            themeMode: e.dataset.theme === a.Dark ? a.Dark : a.Light,
            designMode: e.dataset.design === u.Modern ? u.Modern : u.Classic,
            hidePoweredByCrypto:
              "true" === e.dataset.hidePoweredByCrypto || !1,
          }).render(e);
        } catch (n) {
          console.error("Failed to render widget", n);
        }
  },
    f = () => {
      c(e, "#crypto-widget-CoinBlocks"),
        c(r, "#crypto-widget-CoinList"),
        c(t, "#crypto-widget-CoinMarquee"),
        c(o, "#crypto-widget-CoinTicker");
    };
  "complete" === document.readyState || "interactive" === document.readyState
    ? f()
    : window.addEventListener("DOMContentLoaded", f);
});
