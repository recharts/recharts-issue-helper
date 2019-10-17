(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    115: function(e, t, a) {
      e.exports = {
        submitBtn: "IssueForm_submitBtn__13Qx-",
        radioGroup: "IssueForm_radioGroup__MOMrX"
      };
    },
    148: function(e, t) {},
    168: function(e, t, a) {
      e.exports = { intro: "Intro_intro__1SxD-" };
    },
    177: function(e, t, a) {
      e.exports = a(390);
    },
    182: function(e) {
      e.exports = {
        "intro.modal": "the reason behind our strict policy issue",
        "issue.create": "Create",
        "issue.actually": "What is actually happening?",
        "issue.type": "This is a",
        "issue.expected": "What is expected?",
        "issue.type.bug": "Bug report",
        "issue.extra": "Any additional comments? (optional)",
        "issue.type.feature": "Feature Request",
        "issue.motivation": "What problem does this feature solve?",
        "issue.extraHelp":
          "e.g. some background/context of how you ran into this bug.",
        "issue.title": "Title",
        "issue.repo": "I am opening an issue for",
        "issue.preview": "Preview",
        "issue.proposal": "What does the proposed API look like?",
        "issue.repoHelp":
          "Please make sure to file the issue at appropriate repo.",
        "issue.reproduction": "Link to minimal reproduction",
        "issue.steps": "Step to reproduce",
        "issue.version": "Version",
        "issue.versionHelp":
          "Check if the issue is reproducible with the latest stable version.",
        "previewModal.title": "Preview Issue",
        "repro.about": "About Reproductions"
      };
    },
    183: function(e) {
      e.exports = {
        "intro.modal":
          "\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u4e48\u4e25\u683c\u7684 issue \u89c4\u5b9a",
        "issue.create": "\u521b\u5efa",
        "issue.react": "React",
        "issue.reactHelp": "react / react-native \u7248\u672c",
        "issue.browser": "\u6d4f\u89c8\u5668",
        "issue.browserHelp": "\u6d4f\u89c8\u5668\u7248\u672c",
        "issue.system": "\u7cfb\u7edf",
        "issue.systemHelp": "\u7cfb\u7edf\u7248\u672c",
        "issue.actually":
          "\u5b9e\u9645\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f",
        "issue.type": "\u8fd9\u662f\u4e00\u4e2a",
        "issue.expected":
          "\u671f\u671b\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f",
        "issue.type.bug": "\u9519\u8bef\u62a5\u544a",
        "issue.extra": "\u8865\u5145\u8bf4\u660e\uff08\u53ef\u9009\uff09",
        "issue.type.feature": "\u529f\u80fd\u8981\u6c42",
        "issue.motivation":
          "\u8fd9\u4e2a\u529f\u80fd\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f",
        "issue.extraHelp":
          "\u6bd4\u5982\uff1a\u9047\u5230\u8fd9\u4e2a bug \u7684\u4e1a\u52a1\u573a\u666f\u3001\u4e0a\u4e0b\u6587\u3002",
        "issue.title": "Issue \u6807\u9898",
        "issue.repo": "\u76f8\u5173\u4ed3\u5e93",
        "issue.preview": "\u9884\u89c8",
        "issue.proposal":
          "\u4f60\u671f\u671b\u7684 API \u662f\u600e\u6837\u7684\uff1f",
        "issue.repoHelp":
          "\u8bf7\u786e\u4fdd\u5c06 issue \u53d1\u5f80\u76f8\u5173\u7684\u4ed3\u5e93\u3002",
        "issue.reproduction": "\u91cd\u73b0\u94fe\u63a5",
        "issue.steps": "\u91cd\u73b0\u6b65\u9aa4",
        "issue.version": "\u7248\u672c",
        "issue.versionHelp":
          "\u8bf7\u68c0\u67e5\u95ee\u9898\u662f\u5426\u5b58\u5728\u4e8e\u6700\u65b0\u7248\u672c\u4e2d\u3002",
        "previewModal.title": "Issue \u9884\u89c8",
        "repro.about": "\u5173\u4e8e\u91cd\u73b0"
      };
    },
    194: function(e, t) {},
    200: function(e, t) {},
    389: function(e, t, a) {},
    390: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a(5),
        s = a(32),
        o = a(146),
        i = a(182);
      window.appLocale.en = {
        messages: Object(s.a)({}, i),
        locale: "en-US",
        data: o
      };
      var l = a(147),
        c = a(183);
      window.appLocale.zh = {
        messages: Object(s.a)({}, c),
        locale: "zh-CN",
        data: l
      };
      a(59), a(185);
      var u = a(398),
        p = a(35),
        m = a(10),
        d = a(30),
        f = (a(86), a(396)),
        h = a(175),
        E = a(149),
        b = a(150),
        v = a(151),
        g = a(152),
        w = a(153),
        y = a(154),
        x = a(155),
        k = a(156),
        M = a(157),
        C = a(158),
        I = a(159),
        O = a(160),
        H = a(161),
        _ = a(162),
        S = a(163);
      var j = Object(S.a)(
        (function() {
          var e = window.localStorage.getItem("locale");
          return (
            e ||
            ("zh-cn" === window.navigator.language.toLowerCase() ? "zh" : "en")
          );
        })()
      );
      function R() {
        j.write("en" === j.read() ? "zh" : "en"),
          window.localStorage.setItem("locale", j.read());
      }
      var A = j,
        N = {
          en: {
            intro: _.a,
            introModal: H.a,
            motivationHelp: O.a,
            proposalHelp: I.a,
            reproHelp: C.a,
            reproModal: M.a,
            stepsHelp: k.a
          },
          zh: {
            intro: x.a,
            introModal: y.a,
            motivationHelp: w.a,
            proposalHelp: g.a,
            reproHelp: v.a,
            reproModal: b.a,
            stepsHelp: E.a
          }
        },
        z = function(e) {
          var t = e.id,
            a = Object(h.a)(e, ["id"]),
            r = n.useContext(A),
            s = N[r][t];
          return n.createElement("div", a, n.createElement(s, null));
        },
        F = function(e) {
          var t = e.visible,
            a = e.onCancel;
          return n.createElement(
            f.a,
            {
              title: n.createElement(m.a, {
                id: "intro.modal",
                defaultMessage: "The reason behind our strict issue policy"
              }),
              footer: "",
              visible: t,
              onCancel: a,
              width: "680px"
            },
            n.createElement(z, { className: "paragraph", id: "introModal" })
          );
        },
        V = a(168),
        q = a.n(V),
        B = function() {
          var e = Object(n.useState)(!1),
            t = Object(d.a)(e, 2),
            a = t[0],
            r = t[1],
            s = n.useRef(null);
          return (
            n.useEffect(function() {
              s.current.addEventListener("click", function(e) {
                "#intro-modal" === e.target.getAttribute("href") &&
                  (e.preventDefault(),
                  r(function(e) {
                    return !0;
                  }));
              });
            }, []),
            n.createElement(
              "div",
              { className: "".concat(q.a.intro, " paragraph"), ref: s },
              n.createElement(F, {
                visible: a,
                onCancel: function() {
                  return r(function(e) {
                    return !1;
                  });
                }
              }),
              n.createElement(z, { id: "intro" })
            )
          );
        },
        P = a(51),
        T = (a(254), a(145), a(101), a(135), a(102), a(393)),
        W = a(394),
        L = a(392),
        D = a(397),
        J = a(395),
        G = T.a.Item,
        U = W.a.Option,
        Q = J.a.TextArea,
        X = function(e) {
          var t = e.form.getFieldDecorator,
            a = e.versions;
          return n.createElement(
            "div",
            null,
            n.createElement(
              G,
              null,
              n.createElement(
                L.a,
                { span: 11 },
                n.createElement(
                  G,
                  {
                    label: n.createElement(m.a, {
                      id: "issue.version",
                      defaultMessage: "Version"
                    }),
                    help: n.createElement(m.a, {
                      id: "issue.versionHelp",
                      defaultMessage:
                        "Check if the issue is reproducible with the latest stable version."
                    })
                  },
                  t("version", { initialValue: a[0] })(
                    n.createElement(
                      W.a,
                      { showSearch: !0 },
                      a.map(function(e) {
                        return n.createElement(U, { key: e }, e);
                      })
                    )
                  )
                )
              ),
              n.createElement(
                L.a,
                { span: 12, offset: 1 },
                n.createElement(
                  G,
                  {
                    label: n.createElement(m.a, {
                      id: "issue.react",
                      defaultMessage: "React"
                    }),
                    help: n.createElement(m.a, {
                      id: "issue.reactHelp",
                      defaultMessage: "react/react-native version..."
                    })
                  },
                  t("react", { rules: [{ required: !0 }] })(
                    n.createElement(J.a, null)
                  )
                )
              )
            ),
            n.createElement(
              G,
              null,
              n.createElement(
                L.a,
                { span: 11 },
                n.createElement(
                  G,
                  {
                    label: n.createElement(m.a, {
                      id: "issue.system",
                      defaultMessage: "System"
                    }),
                    help: n.createElement(m.a, {
                      id: "issue.systemHelp",
                      defaultMessage: "System version..."
                    })
                  },
                  t("system", { rules: [{ required: !0 }] })(
                    n.createElement(J.a, null)
                  )
                )
              ),
              n.createElement(
                L.a,
                { span: 12, offset: 1 },
                n.createElement(
                  G,
                  {
                    label: n.createElement(m.a, {
                      id: "issue.browser",
                      defaultMessage: "Browser"
                    }),
                    help: n.createElement(m.a, {
                      id: "issue.browserHelp",
                      defaultMessage: "Browser version..."
                    })
                  },
                  t("browser", { rules: [{ required: !0 }] })(
                    n.createElement(J.a, null)
                  )
                )
              )
            ),
            n.createElement(
              G,
              {
                label: n.createElement(m.a, {
                  id: "issue.reproduction",
                  defaultMessage: "Link to minimal reproduction"
                }),
                help: n.createElement(z, { id: "reproHelp" })
              },
              t("reproduction", { rules: [{ required: !0 }] })(
                n.createElement(J.a, { type: "url" })
              )
            ),
            n.createElement(
              G,
              {
                label: n.createElement(m.a, {
                  id: "issue.steps",
                  defaultMessage: "Step to reproduce"
                }),
                help: n.createElement(z, { id: "stepsHelp" })
              },
              t("steps", { rules: [{ required: !0 }] })(
                n.createElement(Q, { autosize: { minRows: 2 } })
              )
            ),
            n.createElement(
              G,
              {
                label: n.createElement(m.a, {
                  id: "issue.expected",
                  defaultMessage: "What is expected?"
                })
              },
              t("expected", { rules: [{ required: !0 }] })(
                n.createElement(Q, { autosize: { minRows: 2 } })
              )
            ),
            n.createElement(
              G,
              {
                label: n.createElement(m.a, {
                  id: "issue.actually",
                  defaultMessage: "What is actually happening?"
                })
              },
              t("actual", { rules: [{ required: !0 }] })(
                n.createElement(Q, { autosize: { minRows: 2 } })
              )
            ),
            n.createElement(
              G,
              {
                label: n.createElement(m.a, {
                  id: "issue.extra",
                  defaultMessage: "Any additional comments?(optional)"
                }),
                help: n.createElement(m.a, {
                  id: "issue.extraHelp",
                  defaultMessage:
                    "e.g. some background/context of how you ran into this bug."
                })
              },
              t("extra", {})(n.createElement(Q, { autosize: { minRows: 2 } }))
            )
          );
        },
        $ = T.a.Item,
        K = J.a.TextArea,
        Y = function(e) {
          var t = e.form.getFieldDecorator;
          return n.createElement(
            "div",
            null,
            n.createElement(
              $,
              {
                label: n.createElement(m.a, {
                  id: "issue.motivation",
                  defaultMessage: "What problem does this feature solve?"
                }),
                help: n.createElement(z, { id: "motivationHelp" })
              },
              t("motivation", { rules: [{ required: !0 }] })(
                n.createElement(K, { autosize: { minRows: 2 } })
              )
            ),
            n.createElement(
              $,
              {
                label: n.createElement(m.a, {
                  id: "issue.proposal",
                  defaultMessage: "What does the proposed API look like?"
                }),
                help: n.createElement(z, { id: "proposalHelp" })
              },
              t("proposal", { rules: [{ required: !0 }] })(
                n.createElement(K, { autosize: { minRows: 2 } })
              )
            )
          );
        },
        Z = a(173),
        ee = new (a.n(Z)).a(),
        te = function(e) {
          var t = e.visible,
            a = e.content,
            r = e.onCancel,
            s = e.onCreate;
          return n.createElement(
            f.a,
            {
              title: n.createElement(m.a, {
                id: "previewModal.title",
                defaultMessage: "Issue Preview"
              }),
              cancelText: "",
              width: "680px",
              visible: t,
              onCancel: r,
              footer: n.createElement(
                p.a,
                { onClick: s, type: "primary" },
                n.createElement(m.a, {
                  id: "issue.create",
                  defaultMessage: "Create"
                })
              )
            },
            n.createElement("div", {
              className: "paragraph",
              dangerouslySetInnerHTML: { __html: ee.render(a) }
            })
          );
        },
        ae = function(e) {
          var t = e.visible,
            a = e.onCancel;
          return n.createElement(
            f.a,
            {
              title: n.createElement(m.a, {
                id: "repro.about",
                defaultMessage: "About Reproductions"
              }),
              footer: "",
              visible: t,
              onCancel: a,
              width: "680px"
            },
            n.createElement(z, { className: "paragraph", id: "reproModal" })
          );
        };
      function ne(e, t) {
        return "bug" === e
          ? (function(e) {
              var t = e.version,
                a = e.react,
                n = e.system,
                r = e.browser,
                s = e.reproduction,
                o = e.steps,
                i = e.expected,
                l = e.actual,
                c = e.extra;
              e.repo;
              return "\n### Reproduction link\n"
                .concat(
                  (function(e) {
                    if (!e) return;
                    if (e.indexOf("codesandbox.io") >= 0)
                      return "[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](".concat(
                        e,
                        ")"
                      );
                    return "[".concat(e, "](").concat(e, ")");
                  })(s),
                  "\n\n### Steps to reproduce\n"
                )
                .concat(o, "\n\n### What is expected?\n")
                .concat(i, "\n\n### What is actually happening?\n")
                .concat(
                  l,
                  "\n\n| Environment | Info |\n|---|---|\n| Recharts | "
                )
                .concat(t, " |\n| React | ")
                .concat(a, " |\n| System | ")
                .concat(n, " |\n| Browser | ")
                .concat(r, " |\n\n")
                .concat(c ? "---\n".concat(c) : "", "\n")
                .trim();
            })(t)
          : (function(e) {
              var t = e.motivation,
                a = e.proposal;
              return "\n### What problem does this feature solve?\n"
                .concat(t, "\n\n### What does the proposed API look like?\n")
                .concat(a, "\n")
                .trim();
            })(t);
      }
      var re = a(117),
        se = a(383),
        oe = "https://registry.npm.taobao.org",
        ie = "https://api.github.com",
        le = { recharts: "recharts" };
      function ce(e) {
        if (e.status >= 200 && e.status < 300) return e;
        throw new Error(e.statusText);
      }
      function ue(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            e.match(/^\d+\.\d+\.\d+$/) ? t.push(e) : a.push(e);
          }),
          [].concat(
            Object(re.a)(
              t.sort(function(e, t) {
                return -se(e, t);
              })
            ),
            Object(re.a)(
              a.sort(function(e, t) {
                return -se(e, t);
              })
            )
          )
        );
      }
      function pe() {
        var e = Object(n.useState)([]),
          t = Object(d.a)(e, 2),
          a = t[0],
          r = t[1];
        return {
          similarIssues: a,
          searchIssues: function(e, t) {
            t
              ? (function(e, t) {
                  var a = encodeURIComponent(
                    "is:issue repo:recharts/".concat(e, " ").concat(t)
                  );
                  return fetch(
                    "".concat(ie, "/search/issues?q=").concat(a, "&per_page=5")
                  )
                    .then(ce)
                    .then(function(e) {
                      return e.json();
                    })
                    .then(function(e) {
                      return e.items;
                    });
                })(e, t).then(function(e) {
                  return r(function(t) {
                    return e;
                  });
                })
              : r(function(e) {
                  return [];
                });
          }
        };
      }
      function me() {
        var e = Object(n.useState)({}),
          t = Object(d.a)(e, 2),
          a = t[0],
          r = t[1];
        return {
          repoVersions: a,
          fetchVersions: function(e) {
            (function(e) {
              var t = fetch("".concat(oe, "/").concat(le[e]))
                .then(ce)
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  var t = e.versions;
                  return Object.keys(t).filter(function(e) {
                    return !e.includes("-");
                  });
                })
                .then(function(e) {
                  return ue(e);
                })
                .then(function(e) {
                  return e.slice(0, 100);
                });
              return fetch(
                ""
                  .concat(ie, "/repos/recharts/")
                  .concat(e, "/tags?per_page=100")
              )
                .then(ce)
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  return e.map(function(e) {
                    return e.name;
                  });
                })
                .then(function(e) {
                  return ue(e);
                })
                .catch(function(e) {
                  return console.warn(e), t;
                });
            })(e).then(function(t) {
              return r(function(a) {
                return Object(s.a)({}, a, Object(P.a)({}, e, t));
              });
            });
          }
        };
      }
      var de = a(115),
        fe = a.n(de),
        he = T.a.Item,
        Ee = W.a.Option,
        be = window.location.search
          .slice(1)
          .split("&")
          .reduce(function(e, t) {
            var a = t.split("="),
              n = Object(d.a)(a, 2),
              r = n[0],
              o = n[1];
            return Object(s.a)({}, e, Object(P.a)({}, r, o));
          }, {});
      be.repo || (be.repo = "recharts");
      var ve = T.a.create({
          onValuesChange: function() {
            var e = arguments.length <= 2 ? void 0 : arguments[2],
              t = {};
            try {
              t = JSON.parse(localStorage.getItem("form")) || {};
            } catch (n) {}
            var a = Object(s.a)({}, t);
            Object.keys(e).forEach(function(t) {
              e[t] && (a[t] = e[t]);
            }),
              localStorage.setItem("form", JSON.stringify(a, null, 2));
          }
        })(function(e) {
          var t = e.form,
            a = Object(n.useState)(!1),
            r = Object(d.a)(a, 2),
            s = r[0],
            o = r[1],
            i = Object(n.useState)(!1),
            l = Object(d.a)(i, 2),
            c = l[0],
            u = l[1],
            f = n.useRef(null),
            h = pe(),
            E = h.similarIssues,
            b = h.searchIssues,
            v = me(),
            g = v.repoVersions,
            w = v.fetchVersions,
            y = t.getFieldDecorator,
            x = t.getFieldValue,
            k = t.getFieldsValue,
            M = t.setFieldsValue,
            C = n.useCallback(function() {
              f.current.addEventListener("click", function(e) {
                "#repro-modal" === e.target.getAttribute("href") &&
                  (e.preventDefault(),
                  u(function(e) {
                    return !0;
                  }));
              });
            }, []),
            I = n.useCallback(function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = localStorage.getItem("form");
              if (t) {
                var a = JSON.parse(t),
                  n = Object.keys(a);
                e.forEach(function(e) {
                  delete a[e];
                }),
                  a.type && M({ type: a.type }),
                  setTimeout(function() {
                    var e = k();
                    n.forEach(function(t) {
                      t in e || delete a[t];
                    }),
                      M(a);
                  }, 100);
              }
            }, []),
            O = n.useCallback(function(e) {
              t.resetFields(["version"]), g[e] || w(e);
            }, []),
            H = n.useCallback(function() {
              I(["type"]);
            }, []),
            _ = n.useCallback(function() {
              var e = x("repo"),
                t = x("title");
              b(e, t);
            }, []),
            S = n.useCallback(function(e) {
              e.preventDefault(),
                t.validateFieldsAndScroll(function(e) {
                  e ||
                    o(function(e) {
                      return !0;
                    });
                });
            }, []),
            j = n.useCallback(function() {
              var e = x("type"),
                t = x("repo"),
                a = encodeURIComponent(x("title")).replace(/%2B/gi, "+"),
                n = R(e),
                r = "\n- [ ] I have searched the [issues](https://github.com/recharts/"
                  .concat(
                    t,
                    "/issues) of this repository and believe that this is not a duplicate.\n\n"
                  )
                  .concat(n, "\n"),
                s = "".concat(
                  r,
                  "\n\n\x3c!-- generated by reccharts-issue-helper. DO NOT REMOVE --\x3e"
                ),
                o = encodeURIComponent(s).replace(/%2B/gi, "+"),
                i = "feature" === e ? "&labels=Feature%20Request" : "";
              localStorage.clear(),
                window.open(
                  "https://github.com/recharts/"
                    .concat(t, "/issues/new?title=")
                    .concat(a, "&body=")
                    .concat(o)
                    .concat(i)
                );
            }, []);
          n.useEffect(function() {
            w(be.repo), C(), I();
          }, []);
          var R = function(e) {
              return ne(e, k());
            },
            A = x("type"),
            N = R(A),
            z = x("repo"),
            F = g[z] || [],
            V = n.createElement(
              he,
              null,
              n.createElement("h3", null, "Similar Issues:"),
              n.createElement(
                "ul",
                null,
                E.map(function(e) {
                  return n.createElement(
                    "li",
                    { key: e.id },
                    n.createElement(
                      "a",
                      {
                        href: e.html_url,
                        target: "_blank",
                        rel: "noreferrer noopener"
                      },
                      e.title
                    )
                  );
                })
              )
            );
          return (
            console.log(be),
            n.createElement(
              "div",
              { ref: f },
              n.createElement(
                T.a,
                { layout: "horizontal", onSubmit: S },
                n.createElement(te, {
                  visible: s,
                  content: N,
                  onCancel: function() {
                    return o(function(e) {
                      return !1;
                    });
                  },
                  onCreate: j
                }),
                n.createElement(ae, {
                  visible: c,
                  onCancel: function() {
                    return u(function(e) {
                      return !1;
                    });
                  }
                }),
                n.createElement(
                  he,
                  null,
                  n.createElement(
                    L.a,
                    { span: 11 },
                    n.createElement(
                      he,
                      {
                        label: n.createElement(m.a, {
                          id: "issue.repo",
                          defaultMessage: "I am opening an issue for"
                        }),
                        help: n.createElement(m.a, {
                          id: "issue.repoHelp",
                          defaultMessage:
                            "Please make sure to file the issue at appropriate repo."
                        })
                      },
                      y("repo", { initialValue: be.repo })(
                        n.createElement(
                          W.a,
                          { onChange: O },
                          n.createElement(Ee, { key: "recharts" }, "recharts"),
                          n.createElement(
                            Ee,
                            { key: "react-smooth" },
                            "react-smooth"
                          ),
                          n.createElement(
                            Ee,
                            { key: "recharts-scale" },
                            "recharts-scale"
                          )
                        )
                      )
                    )
                  ),
                  n.createElement(
                    L.a,
                    { span: 12, offset: 1 },
                    n.createElement(
                      he,
                      {
                        label: n.createElement(m.a, {
                          id: "issue.type",
                          defaultMessage: "This is a"
                        })
                      },
                      y("type", { initialValue: "bug" })(
                        n.createElement(
                          D.a.Group,
                          { onChange: H, className: fe.a.radioGroup },
                          n.createElement(
                            D.a.Button,
                            { value: "bug" },
                            n.createElement(m.a, {
                              id: "issue.type.bug",
                              defaultMessage: "Bug Report"
                            })
                          ),
                          n.createElement(
                            D.a.Button,
                            { value: "feature" },
                            n.createElement(m.a, {
                              id: "issue.type.feature",
                              defaultMessage: "Feature Request"
                            })
                          )
                        )
                      )
                    )
                  )
                ),
                n.createElement(
                  he,
                  {
                    label: n.createElement(m.a, {
                      id: "issue.title",
                      defaultMessage: "Title"
                    })
                  },
                  y("title", { rules: [{ required: !0 }] })(
                    n.createElement(J.a, { onBlur: _ })
                  )
                ),
                E.length > 0 && V,
                "feature" !== A
                  ? n.createElement(X, { form: t, versions: F })
                  : n.createElement(Y, { form: t }),
                n.createElement(
                  he,
                  null,
                  n.createElement(
                    "div",
                    { className: fe.a.submitBtn },
                    n.createElement(
                      p.a,
                      { type: "primary", size: "large", htmlType: "submit" },
                      n.createElement(m.a, {
                        id: "issue.preview",
                        defaultMessage: "Preview"
                      })
                    )
                  )
                )
              )
            )
          );
        }),
        ge = a(45),
        we = a.n(ge),
        ye = u.a.Header,
        xe = u.a.Content,
        ke = u.a.Footer,
        Me = function() {
          var e = n.useContext(A),
            t = window.appLocale[e];
          return (
            Object(m.c)(t.data),
            n.createElement(
              A.Provider,
              null,
              n.createElement(
                u.a,
                { className: "layout" },
                n.createElement(
                  ye,
                  { className: we.a.header },
                  n.createElement(
                    "div",
                    { className: we.a.headerContainer },
                    n.createElement(
                      "div",
                      { className: we.a.logo },
                      n.createElement(
                        "span",
                        { className: we.a.recharts },
                        "<Recharts/>"
                      ),
                      n.createElement("h1", null, "Issue Helper")
                    ),
                    n.createElement(
                      "div",
                      { className: we.a.locale },
                      n.createElement(
                        p.a,
                        { size: "small", onClick: R },
                        "en" === e ? "\u4e2d\u6587" : "English"
                      )
                    )
                  )
                ),
                n.createElement(
                  m.b,
                  { locale: t.locale, messages: t.messages },
                  n.createElement(
                    xe,
                    { className: we.a.content },
                    n.createElement(B, null),
                    n.createElement(ve, null)
                  )
                ),
                n.createElement(
                  ke,
                  { style: { textAlign: "center" } },
                  "Forked from",
                  " ",
                  n.createElement(
                    "a",
                    {
                      href: "http://new-issue.ant.design/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    },
                    "Antd Issue Helper"
                  ),
                  " ",
                  "to",
                  " ",
                  n.createElement(
                    "a",
                    {
                      href: "https://github.com/recharts/recharts-issue-helper"
                    },
                    "Recharts Issue Helper"
                  )
                )
              )
            )
          );
        };
      a(389);
      r.render(n.createElement(Me, null), document.getElementById("root"));
    },
    45: function(e, t, a) {
      e.exports = {
        header: "App_header__3PkVz",
        headerContainer: "App_headerContainer__1S79i",
        logo: "App_logo__iSzr8",
        recharts: "App_recharts__3A8r3",
        content: "App_content__3Pkhh"
      };
    }
  },
  [[177, 1, 2]]
]);
//# sourceMappingURL=main.d313b968.chunk.js.map
