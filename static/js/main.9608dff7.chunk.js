(this.webpackJsonpprojectaki = this.webpackJsonpprojectaki || []).push([
  [0],
  {
    12: function(e, n, t) {
      e.exports = t(22);
    },
    17: function(e, n, t) {},
    18: function(e, n, t) {
      e.exports = t.p + "static/media/logo.5d5d9eef.svg";
    },
    22: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        c = t.n(a),
        o = t(7),
        r = t.n(o),
        i = (t(17), t(11)),
        l = (t(18), t(19), t(20), t(21), t(10)),
        s = t(8),
        u = t(9),
        m = t.n(u),
        v = ""
          .concat("aeiouy")
          .concat(
            "\u03b1\u03ac\u03b5\u03ad\u03b9\u03af\u03c5\u03cd\u03b7\u03ae\u03bf\u03cc\u03c9\u03ce"
          ),
        d = {
          ά: "\u03b1",
          ί: "\u03b9",
          έ: "\u03b5",
          ό: "\u03bf",
          ή: "\u03b7",
          υ: "\u03c5"
        },
        f = {
          ούλης: { en: "oulis" },
          ούλα: { en: "oula" },
          ούλι: { en: "ouli" },
          άκος: { en: "akos" },
          άκι: { en: "aki" },
          ίτσα: { en: "itsa" },
          ίτσι: { en: "itsi" },
          ίτα: { en: "ita" },
          πίτσι: { en: "pitsi" },
          ίνι: { en: "ini" },
          όνι: { en: "oni" },
          μπιρμπιλόνι: { en: "birbiloni" },
          ούιν: { en: "ouin" }
        },
        p = {
          ουλ: { en: "\u03bf\u03c5\u03bb" },
          ακ: { en: "\u03b1\u03ba" },
          ατ: { en: "\u03b1\u03c4" },
          ιν: { en: "\u03b9\u03bd" },
          ικ: { en: "\u03b9\u03ba" },
          πιτσ: { en: "\u03c0\u03b9\u03c4\u03c3" },
          κουτσ: { en: "\u03ba\u03bf\u03c5\u03c4\u03c3" },
          κουλ: { en: "\u03ba\u03bf\u03c5\u03bb" }
        },
        g = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n = new RegExp("^[".concat(v, "]"), "i");
          return n.test(e.trim());
        },
        h = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n = new RegExp("(.*)([^".concat(v, "])([").concat(v, "]*)$"), "i");
          return e.trim().replace(n, "$1$2");
        },
        E = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return (
            Object.keys(d).forEach(function(n) {
              e = e.replace(n, d[n]);
            }),
            e
          );
        },
        b = function e() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
          if (a && a.length) {
            var c = Object(s.a)(a),
              o = c[0],
              r = c.slice(1);
            return e(n, e(o, t), r);
          }
          var i = E(h(n.trim()));
          return g(t) ? i + t : i + "\u03bf" + t;
        };
      var w = function() {
        var e = Object(a.useState)(""),
          n = Object(i.a)(e, 2),
          t = n[0],
          o = n[1],
          r = Object(a.useRef)();
        return (
          (function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n = new RegExp("[".concat(v, "]$"), "i");
            n.test(e.trim());
          })(t),
          c.a.createElement(
            "div",
            { className: "container mt-5" },
            c.a.createElement(
              "div",
              { className: "row" },
              c.a.createElement(
                "div",
                { className: "col-12 col-md-6" },
                c.a.createElement(
                  "div",
                  { className: "input-group" },
                  c.a.createElement("input", {
                    type: "text",
                    ref: r,
                    className: "form-control mr-4"
                  }),
                  c.a.createElement(
                    "button",
                    {
                      className: "btn btn-primary",
                      onClick: function() {
                        return o(r.current.value);
                      }
                    },
                    "\u0393\u03b9\u03b1 \u03c0\u03ad\u03c2"
                  )
                )
              ),
              c.a.createElement(
                "div",
                { className: "col-12" },
                c.a.createElement(
                  "div",
                  null,
                  t &&
                    c.a.createElement(
                      "div",
                      {
                        className:
                          "d-flex flex-row flex-wrap align-items-center"
                      },
                      (function() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          n = [[]].concat(Object(l.a)(m()(Object.keys(p))));
                        return Object.keys(f).map(function(t, a) {
                          return n.map(function(n, o) {
                            return c.a.createElement(
                              "div",
                              {
                                className: "pr-4",
                                key: "".concat(a, "_").concat(o)
                              },
                              b(e, t, n)
                            );
                          });
                        });
                      })(t)
                    )
                )
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(
        c.a.createElement(c.a.StrictMode, null, c.a.createElement(w, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function(e) {
              e.unregister();
            })
            .catch(function(e) {
              console.error(e.message);
            });
    }
  },
  [[12, 1, 2]]
]);
//# sourceMappingURL=main.9608dff7.chunk.js.map
