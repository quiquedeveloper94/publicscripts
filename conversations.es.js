import { i as $, E as le, j as L, k as F, l as z, U as ie, m as w, n as V, o as ee, H as fe, q as ae, u as P, v as q, w as M, x as R, y as ve, z as oe, A as y, B as ue, C as ce, D as de, F as _e, G, I as U, J as re, K as J, L as he, M as pe, N as me, O as ge, P as ke, Q as we, R as Te, S as Ee, T as be, V as ye, W as Ie, c as Ae, p as Ne, a as X, X as B, Y as Re, Z as xe, e as x, g as N, b as Ce, f as Z, _ as je, $ as A, h as O, r as D, t as K, s as Q } from "./custom-element-DhhHMzUm.js";
function Y(o, e, [a, t] = [0, 0]) {
  w && a === 0 && V();
  var v = o, f = null, n = null, c = ie, h = a > 0 ? le : 0, d = !1;
  const s = (l, r = !0) => {
    d = !0, p(r, l);
  }, p = (l, r) => {
    if (c === (c = l)) return;
    let i = !1;
    if (w && t !== -1) {
      if (a === 0) {
        const k = ee(v);
        k === fe ? t = 0 : k === ae ? t = 1 / 0 : (t = parseInt(k.substring(1)), t !== t && (t = c ? 1 / 0 : -1));
      }
      const g = t > a;
      !!c === g && (v = P(), q(v), M(!1), i = !0, t = -1);
    }
    c ? (f ? L(f) : r && (f = F(() => r(v))), n && z(n, () => {
      n = null;
    })) : (n ? L(n) : r && (n = F(() => r(v, [a + 1, t]))), f && z(f, () => {
      f = null;
    })), i && M(!0);
  };
  $(() => {
    d = !1, e(s), d || p(null, null);
  }, h), w && (v = R);
}
function Se(o, e) {
  return e;
}
function De(o, e, a, t) {
  for (var v = [], f = e.length, n = 0; n < f; n++)
    me(e[n].e, v, !0);
  var c = f > 0 && v.length === 0 && a !== null;
  if (c) {
    var h = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    ge(h), h.append(
      /** @type {Element} */
      a
    ), t.clear(), I(o, e[0].prev, e[f - 1].next);
  }
  ke(v, () => {
    for (var d = 0; d < f; d++) {
      var s = e[d];
      c || (t.delete(s.k), I(o, s.prev, s.next)), we(s.e, !c);
    }
  });
}
function Me(o, e, a, t, v, f = null) {
  var n = o, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  {
    var h = (
      /** @type {Element} */
      o
    );
    n = w ? q(
      /** @type {Comment | Text} */
      ve(h)
    ) : h.appendChild(oe());
  }
  w && V();
  var d = null, s = !1, p = ue(() => {
    var l = a();
    return be(l) ? l : l == null ? [] : re(l);
  });
  $(() => {
    var l = y(p), r = l.length;
    if (s && r === 0)
      return;
    s = r === 0;
    let i = !1;
    if (w) {
      var g = ee(n) === ae;
      g !== (r === 0) && (n = P(), q(n), M(!1), i = !0);
    }
    if (w) {
      for (var k = null, u, _ = 0; _ < r; _++) {
        if (R.nodeType === ce && /** @type {Comment} */
        R.data === de) {
          n = /** @type {Comment} */
          R, i = !0, M(!1);
          break;
        }
        var E = l[_], T = t(E, _);
        u = te(
          R,
          c,
          k,
          null,
          E,
          T,
          _,
          v,
          e,
          a
        ), c.items.set(T, u), k = u;
      }
      r > 0 && q(P());
    }
    w || He(l, c, n, v, e, t, a), f !== null && (r === 0 ? d ? L(d) : d = F(() => f(n)) : d !== null && z(d, () => {
      d = null;
    })), i && M(!0), y(p);
  }), w && (n = R);
}
function He(o, e, a, t, v, f, n) {
  var c = o.length, h = e.items, d = e.first, s = d, p, l = null, r = [], i = [], g, k, u, _;
  for (_ = 0; _ < c; _ += 1) {
    if (g = o[_], k = f(g, _), u = h.get(k), u === void 0) {
      var E = s ? (
        /** @type {TemplateNode} */
        s.e.nodes_start
      ) : a;
      l = te(
        E,
        e,
        l,
        l === null ? e.first : l.next,
        g,
        k,
        _,
        t,
        v,
        n
      ), h.set(k, l), r = [], i = [], s = l.next;
      continue;
    }
    if (Oe(u, g, _), (u.e.f & U) !== 0 && L(u.e), u !== s) {
      if (p !== void 0 && p.has(u)) {
        if (r.length < i.length) {
          var T = i[0], m;
          l = T.prev;
          var b = r[0], C = r[r.length - 1];
          for (m = 0; m < r.length; m += 1)
            W(r[m], T, a);
          for (m = 0; m < i.length; m += 1)
            p.delete(i[m]);
          I(e, b.prev, C.next), I(e, l, b), I(e, C, T), s = T, l = C, _ -= 1, r = [], i = [];
        } else
          p.delete(u), W(u, s, a), I(e, u.prev, u.next), I(e, u, l === null ? e.first : l.next), I(e, l, u), l = u;
        continue;
      }
      for (r = [], i = []; s !== null && s.k !== k; )
        (s.e.f & U) === 0 && (p ?? (p = /* @__PURE__ */ new Set())).add(s), i.push(s), s = s.next;
      if (s === null)
        continue;
      u = s;
    }
    r.push(u), l = u, s = u.next;
  }
  if (s !== null || p !== void 0) {
    for (var j = p === void 0 ? [] : re(p); s !== null; )
      (s.e.f & U) === 0 && j.push(s), s = s.next;
    var S = j.length;
    if (S > 0) {
      var H = c === 0 ? a : null;
      De(e, j, H, h);
    }
  }
  J.first = e.first && e.first.e, J.last = l && l.e;
}
function Oe(o, e, a, t) {
  pe(o.v, e), o.i = a;
}
function te(o, e, a, t, v, f, n, c, h, d) {
  var s = (h & Te) !== 0, p = (h & Ee) === 0, l = s ? p ? _e(v, !1, !1) : G(v) : v, r = (h & he) === 0 ? n : G(n), i = {
    i: r,
    v: l,
    k: f,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: t
  };
  try {
    return i.e = F(() => c(o, l, r, d), w), i.e.prev = a && a.e, i.e.next = t && t.e, a === null ? e.first = i : (a.next = i, a.e.next = i.e), t !== null && (t.prev = i, t.e.prev = i.e), i;
  } finally {
  }
}
function W(o, e, a) {
  for (var t = o.next ? (
    /** @type {TemplateNode} */
    o.next.e.nodes_start
  ) : a, v = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, f = (
    /** @type {TemplateNode} */
    o.e.nodes_start
  ); f !== t; ) {
    var n = (
      /** @type {TemplateNode} */
      ye(f)
    );
    v.before(f), f = n;
  }
}
function I(o, e, a) {
  e === null ? o.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function qe(o, e, a, t, v) {
  var c;
  w && V();
  var f = (c = e.$$slots) == null ? void 0 : c[a], n = !1;
  f === !0 && (f = e.children, n = !0), f === void 0 || f(o, n ? () => t : t);
}
function Le(o, e) {
  Ie(() => {
    var a = o.getRootNode(), t = (
      /** @type {ShadowRoot} */
      a.host ? (
        /** @type {ShadowRoot} */
        a
      ) : (
        /** @type {Document} */
        a.head ?? /** @type {Document} */
        a.ownerDocument.head
      )
    );
    if (!t.querySelector("#" + e.hash)) {
      const v = document.createElement("style");
      v.id = e.hash, v.textContent = e.code, t.appendChild(v);
    }
  });
}
var Fe = x('<div class="loading svelte-vn2jwk">Loading...</div>'), Ue = x('<div class="error svelte-vn2jwk"> </div>'), Be = x('<div class="empty svelte-vn2jwk">No items found</div>'), Ye = x('<div class="item svelte-vn2jwk"><pre class="svelte-vn2jwk"> </pre></div>'), ze = x('<div class="items-list svelte-vn2jwk"></div>'), Pe = x('<div class="api-data-container svelte-vn2jwk"><!> <!></div>');
const Ve = {
  hash: "svelte-vn2jwk",
  code: ".api-data-container.svelte-vn2jwk {font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;padding:1rem;border:1px solid #e1e5e9;border-radius:8px;background:white;}.loading.svelte-vn2jwk {color:#666;text-align:center;padding:1rem;}.error.svelte-vn2jwk {color:#dc3545;background:#f8d7da;border:1px solid #f5c6cb;border-radius:4px;padding:0.75rem;margin-bottom:1rem;}.empty.svelte-vn2jwk {color:#666;text-align:center;padding:1rem;font-style:italic;}.items-list.svelte-vn2jwk {display:flex;flex-direction:column;gap:1rem;}.item.svelte-vn2jwk {background:#f8f9fa;border:1px solid #e9ecef;border-radius:4px;padding:1rem;}.item.svelte-vn2jwk pre:where(.svelte-vn2jwk) {margin:0;white-space:pre-wrap;word-break:break-word;font-size:0.875rem;color:#495057;}"
};
function Ge(o, e) {
  Ne(e, !0), Le(o, Ve);
  let a = X(e, "url", 7, ""), t = X(e, "accessToken", 7, ""), v = B(Re([])), f = B(!1), n = B(null);
  const c = async () => {
    if (!a()) {
      A(n, "URL is required");
      return;
    }
    A(f, !0), A(n, null);
    try {
      const r = {
        // 'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
      };
      t() && (r.Authorization = `Bearer ${t()}`);
      const i = await fetch(a(), { method: "GET", headers: r });
      if (!i.ok)
        throw new Error(`HTTP error! status: ${i.status}`);
      const g = await i.json();
      A(v, Array.isArray(g.data) ? g.data : [g.data], !0);
    } catch (r) {
      A(n, r instanceof Error ? r.message : "Failed to fetch data", !0), A(v, [], !0);
    } finally {
      A(f, !1);
    }
  };
  xe(() => {
    a() && c();
  });
  var h = Pe(), d = O(h);
  {
    var s = (r) => {
      var i = Fe();
      N(r, i);
    }, p = (r, i) => {
      {
        var g = (u) => {
          var _ = Ue(), E = O(_);
          D(_), K(() => Q(E, `Error: ${y(n) ?? ""}`)), N(u, _);
        }, k = (u, _) => {
          {
            var E = (m) => {
              var b = Be();
              N(m, b);
            }, T = (m) => {
              var b = ze();
              Me(b, 21, () => y(v), Se, (C, j) => {
                var S = Ye(), H = O(S), se = O(H, !0);
                D(H), D(S), K((ne) => Q(se, ne), [
                  () => JSON.stringify(y(j), null, 2)
                ]), N(C, S);
              }), D(b), N(m, b);
            };
            Y(
              u,
              (m) => {
                y(v).length === 0 ? m(E) : m(T, !1);
              },
              _
            );
          }
        };
        Y(
          r,
          (u) => {
            y(n) ? u(g) : u(k, !1);
          },
          i
        );
      }
    };
    Y(d, (r) => {
      y(f) ? r(s) : r(p, !1);
    });
  }
  var l = je(d, 2);
  return qe(l, e, "default", {}), D(h), N(o, h), Ce({
    get url() {
      return a();
    },
    set url(r = "") {
      a(r), Z();
    },
    get accessToken() {
      return t();
    },
    set accessToken(r = "") {
      t(r), Z();
    }
  });
}
customElements.define("api-data-display", Ae(Ge, { url: {}, accessToken: {} }, ["default"], [], !0));
export {
  Ge as default
};
