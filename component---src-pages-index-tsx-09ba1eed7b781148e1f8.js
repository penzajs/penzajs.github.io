(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    206: function (n, I, g) {
      "use strict";
      g.r(I);
      var t = g(210),
        C = g.n(t),
        e = g(1),
        i = g(208),
        A = g(233),
        M = g(232),
        o = g(231),
        c = g(230),
        a = g(221),
        r = g.n(a),
        m = g(212),
        l = g.n(m),
        u = "#f5f3f7",
        N = "#fbfafc",
        s = "#000",
        j = 16,
        D = 2.441,
        z = 1.953,
        d = 1.563,
        L = 1.25,
        w = 1.45,
        y = 1.2;
      function b() {
        var n = C()([
          "\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    ",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = C()(["\n      text-decoration: underline;\n    "]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = C()([
          "\n  ",
          "\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: ",
          "px !important;\n    line-height: ",
          " !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: ",
          ";\n    color: ",
          ";\n    background-color: ",
          ";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  // Set defaults for links\n  a {\n    color: ",
          ";\n    text-decoration: none;\n\n    ",
          "\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  // Figure elements\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid ",
          ";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid ",
          ";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-child(odd) {\n        td {\n          background-color: ",
          ";\n        }\n        tr {\n          background-color: ",
          ";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: ",
          ";\n    font-weight: 600;\n    line-height: ",
          ";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: ",
          "rem;\n  }\n\n  h2 {\n    font-size: ",
          "rem;\n  }\n\n  h3 {\n    font-size: ",
          "rem;\n  }\n\n  h4, h5, h6 {\n    font-size: ",
          "rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: $color-heading;\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid ",
          ";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid ",
          ";\n    color: ",
          ";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    ",
          "\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      Object(i.injectGlobal)(
        x(),
        l.a,
        j,
        w,
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
        s,
        "#fff",
        "#663399",
        (function (n) {
          for (
            var I = arguments.length, g = new Array(I > 1 ? I - 1 : 0), t = 1;
            t < I;
            t++
          )
            g[t - 1] = arguments[t];
          return Object(i.css)(
            ["&:hover,&:focus{", ";}"],
            i.css.apply(void 0, [n].concat(g))
          );
        })(T()),
        u,
        u,
        N,
        N,
        s,
        y,
        D,
        z,
        d,
        L,
        u,
        u,
        "rgba(0, 0, 0, 0.54)",
        (function (n) {
          for (
            var I = arguments.length, g = new Array(I > 1 ? I - 1 : 0), t = 1;
            t < I;
            t++
          )
            g[t - 1] = arguments[t];
          return Object(i.css)(
            ["@media (min-width:", "em){", ";}"],
            (function (n) {
              return n / j;
            })(768),
            i.css.apply(void 0, [n].concat(g))
          );
        })(b())
      );
      var p = i.default.div.withConfig({
          displayName: "LayoutRoot__StyledLayoutRoot",
        })(["display:flex;flex-direction:column;min-height:100vh;"]),
        Y = function (n) {
          var I = n.children,
            g = n.className;
          return e.createElement(p, { className: g }, I);
        },
        Z = i.default.main.withConfig({
          displayName: "LayoutMain__StyledLayoutMain",
        })(["display:flex;flex-direction:column;flex:1;"]),
        h = function (n) {
          var I = n.children,
            g = n.className;
          return e.createElement(Z, { className: g }, I);
        },
        f = function (n) {
          var I = n.children;
          return e.createElement(
            Y,
            null,
            e.createElement(r.a, {
              title: "PenzaJS",
              meta: [
                { name: "description", content: "PenzaJS" },
                {
                  name: "keywords",
                  content: "gatsbyjs, gatsby, javascript, sample, something",
                },
              ],
            }),
            e.createElement(h, null, I)
          );
        },
        O = g(211),
        E = g.n(O);
      function S() {
        var n = C()(["\n  width: 2rem;\n  height: 2rem;\n"]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = C()(["\n  width: 2rem;\n  height: 2rem;\n"]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = C()(["\n  width: 2rem;\n  height: 2rem;\n"]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = C()(["\n  width: 2rem;\n  height: 2rem;\n"]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      var B = i.default.div.withConfig({ displayName: "pages__Root" })([
          "background-color:#111;display:flex;flex-grow:1;justify-content:center;",
        ]),
        W = i.default.div.withConfig({ displayName: "pages__Content" })([
          "display:flex;flex-direction:column;align-self:center;",
        ]),
        Q = i.default.div.withConfig({ displayName: "pages__Icons" })([
          "display:flex;flex-direction:row;justify-content:center;padding-top:1rem;",
        ]),
        U = A.a.extend(k()),
        J = M.a.extend(v()),
        R = o.a.extend(G()),
        P = c.a.extend(S()),
        X = i.default.a.withConfig({ displayName: "pages__Link" })([
          "color:white;cursor:pointer;& + &{margin-left:1rem;}",
        ]),
        H = i.default.img.withConfig({ displayName: "pages__Logo" })([
          "align-self:center;max-width:15rem;",
        ]);
      I.default = function () {
        return e.createElement(
          f,
          null,
          e.createElement(
            B,
            null,
            e.createElement(
              W,
              null,
              e.createElement(H, { src: E.a }),
              e.createElement(
                Q,
                null,
                e.createElement(
                  X,
                  { href: "https://vk.com/penzajs" },
                  e.createElement(U, null)
                ),
                e.createElement(
                  X,
                  { href: "https://tg.me/penza_js" },
                  e.createElement(P, null)
                ),
                e.createElement(
                  X,
                  { href: "https://github.com/penzajs" },
                  e.createElement(R, null)
                ),
                e.createElement(
                  X,
                  { href: "https://www.facebook.com/groups/penzajs/" },
                  e.createElement(J, null)
                )
              )
            )
          )
        );
      };
    },
    211: function (n, I) {
      n.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDc3NS42Nzg2NSA3NzUuNjc4NjUiCiAgIGhlaWdodD0iNzc1LjY3ODY1IgogICB3aWR0aD0iNzc1LjY3ODY1IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNiI+PGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGgxOCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aAogICAgICAgICBpZD0icGF0aDE2IgogICAgICAgICBkPSJNIDAsNTgxLjc1OSBIIDU4MS43NTkgViAwIEggMCBaIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzMzLDAsMCwtMS4zMzMzMzMzLDAsNzc1LjY3ODY3KSIKICAgICBpZD0iZzEwIj48ZwogICAgICAgaWQ9ImcxMiI+PGcKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTgpIgogICAgICAgICBpZD0iZzE0Ij48ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4MS43NTkzLDU4LjQxMzEpIgogICAgICAgICAgIGlkPSJnMjAiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDIyIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2YwZGI0ZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGMgMCwtMzIuMjYyIC0yNi4xNTEsLTU4LjQxMyAtNTguNDEzLC01OC40MTMgaCAtNDY0LjkzMyBjIC0zMi4yNjEsMCAtNTguNDEzLDI2LjE1MSAtNTguNDEzLDU4LjQxMyB2IDQ2NC45MzMgYyAwLDMyLjI2MSAyNi4xNTIsNTguNDEzIDU4LjQxMyw1OC40MTMgSCAtNTguNDEzIEMgLTI2LjE1MSw1MjMuMzQ2IDAsNDk3LjE5NCAwLDQ2NC45MzMgWiIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTguMzM0NSwxODAuOTExMSkiCiAgICAgICAgICAgaWQ9ImcyNCI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMjYiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMmIyYjJiO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAwLDAgMjQuNTAzLDQzLjA3OCBjIDEwLjI3NSwtOS44ODEgMjMuNzEzLC0xOC45NzEgNDEuODkyLC0xOC45NzEgMjQuODk4LDAgNDEuMTAxLDE2LjU5OSA0MS4xMDEsNDIuMjg5IHYgMTU5LjcxNyBsIDI2LjM1MywtMTUuOTA1IDI5Ljc2Nyw2NC45NDQgViA2NS42MDUgYyAwLC02Mi40NDMgLTM4LjczMSwtOTEuMjkzIC05Mi44NzQsLTkxLjI5MyBDIDQ0LjI2MywtMjUuNjg4IDE4Ljk3LC0xOC41NzQgMCwwIiAvPjwvZz48ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1NC4zNTc5LDE4OS4yMSkiCiAgICAgICAgICAgaWQ9ImcyOCI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMzAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMmIyYjJiO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAwLDAgMjYuMDgzLDQwLjcwNyBjIDE0LjYyNCwtMTYuMjAzIDM3LjU0NSwtMjguMDYgNjMuNjI5LC0yOC4wNiAyMy4zMTcsMCAzNS45NjQsMTMuMDQyIDM1Ljk2NCwyOS4yNDUgMCw0Ni4yNDEgLTExNy43NzMsMzAuNDMxIC0xMTcuNzczLDExOS43NDkgMCw0MS40OTcgMzIuNDA4LDc3LjA2NiA4Ni45NDYsNzcuMDY2IDMyLjAxMywwIDU5LjY3NSwtMTAuMjc2IDc5LjgzMiwtMjkuMjQ2IEwgMTQ5LjM4OSwxNjkuOTQgYyAtMTUuODEsMTUuMDE4IC0zNS45NjYsMjIuMTMyIC01Ni41MTcsMjIuMTMyIC0xOC45NywwIC0zMC44MjQsLTEwLjY3MSAtMzAuODI0LC0yNi44NzQgMCwtNDEuMTAzIDExNy4zNzYsLTMwLjAzNiAxMTcuMzc2LC0xMTguOTU4IEMgMTc5LjQyNCwwIDE0Ny44MDcsLTMzLjk4NyA5MC4xMDUsLTMzLjk4NyA1MC4xOSwtMzMuOTg3IDIwLjk0NiwtMjAuOTQ0IDAsMCIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDIuMTI2NSw5NS4wMDEpIgogICAgICAgICAgIGlkPSJnMzIiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDM0IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzJiMmIyYjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Ik0gMCwwIEMgMCw1LjE1MiAtMy44MDgsOC4wNjMgLTguOTYsOC4wNjMgSCAtMjQuNTI4IFYgLTcuOTUyIEggLTguOTYgQyAtMy44MDgsLTcuOTUyIDAsLTUuMDQgMCwwIE0gLTQzLjc5MiwtNDkuODQgViAyNC44NjQgSCAtNi4zODQgQyAxMC40MTYsMjQuODY0IDE5LjYsMTMuNTUyIDE5LjYsMCAxOS42LC0xMy40NCAxMC40MTYsLTI0Ljc1MiAtNi4zODQsLTI0Ljc1MiBIIC0yNC41MjggViAtNDkuODQgWiIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzQuODI5Niw0NS4xNjExKSIKICAgICAgICAgICBpZD0iZzM2Ij48cGF0aAogICAgICAgICAgICAgaWQ9InBhdGgzOCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMyYjJiMmI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJNIDAsMCBWIDc0LjcwNCBIIDU0Ljc2OCBWIDU3LjkwMyBIIDE5LjI2NCBWIDQ2LjI1NiBoIDM0LjcxOSB2IC0xNi44IEggMTkuMjY0IFYgMTYuOCBIIDU0Ljc2OCBWIDAgWiIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTYuMTI0NSw0NS4xNjExKSIKICAgICAgICAgICBpZD0iZzQwIj48cGF0aAogICAgICAgICAgICAgaWQ9InBhdGg0MiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMyYjJiMmI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJNIDAsMCAtMzEuNTg0LDQzLjIzMSBWIDAgaCAtMTkuMjY1IHYgNzQuNzA0IGggMTkuODI1IEwgLTAuNzg1LDMzLjYgViA3NC43MDQgSCAxOC41OTIgTCAxOC41OTIsMCBaIiAvPjwvZz48ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5MC4yODI3LDQ1LjE2MTEpIgogICAgICAgICAgIGlkPSJnNDQiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDQ2IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzJiMmIyYjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Ik0gMCwwIFYgMTUuMzQ0IEwgMzEuODA5LDU3LjkwMyBIIDAgViA3NC43MDQgSCA1Ny4yMzIgViA1OS4zNTkgTCAyNS4zMTIsMTYuOCBIIDU4LjAxNiBWIDAgWiIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTYuMTIxNiwxMDAuODI1MikiCiAgICAgICAgICAgaWQ9Imc0OCI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoNTAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMmIyYjJiO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0iTSAwLDAgLTkuNTIsLTI4LjExMiBIIDkuNTIxIFogbSAxOC40OCwtNTUuNjY0IC0zLjY5NiwxMC43NTIgaCAtMjkuNDU2IGwgLTMuNjk2LC0xMC43NTIgaCAtMjEuODQgTCAtMTIuMDk2LDE5LjA0IEggMTIuMDk3IEwgNDAuMzIsLTU1LjY2NCBaIiAvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=";
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-09ba1eed7b781148e1f8.js.map
