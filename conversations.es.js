import { i as $, E as le, j as L, k as F, l as z, U as ie, m as w, n as V, o as ee, H as fe, q as ae, u as P, v as q, w as M, x as C, y as oe, z as ve, A as y, B as ue, C as ce, D as de, F as _e, G, I as U, J as re, K as J, L as he, M as pe, N as me, O as ge, P as ke, Q as we, R as Te, S as Ee, T as be, V as ye, W as Ae, c as Ie, p as Ne, a as X, X as B, Y as Ce, Z as Re, e as R, g as N, b as xe, f as Z, _ as je, $ as I, h as O, r as D, t as K, s as Q } from "./custom-element-DhhHMzUm.js";
function Y(v, e, [a, t] = [0, 0]) {
  w && a === 0 && V();
  var o = v, f = null, n = null, c = ie, h = a > 0 ? le : 0, d = !1;
  const s = (l, r = !0) => {
    d = !0, p(r, l);
  }, p = (l, r) => {
    if (c === (c = l)) return;
    let i = !1;
    if (w && t !== -1) {
      if (a === 0) {
        const k = ee(o);
        k === fe ? t = 0 : k === ae ? t = 1 / 0 : (t = parseInt(k.substring(1)), t !== t && (t = c ? 1 / 0 : -1));
      }
      const g = t > a;
      !!c === g && (o = P(), q(o), M(!1), i = !0, t = -1);
    }
    c ? (f ? L(f) : r && (f = F(() => r(o))), n && z(n, () => {
      n = null;
    })) : (n ? L(n) : r && (n = F(() => r(o, [a + 1, t]))), f && z(f, () => {
      f = null;
    })), i && M(!0);
  };
  $(() => {
    d = !1, e(s), d || p(null, null);
  }, h), w && (o = C);
}
function Se(v, e) {
  return e;
}
function De(v, e, a, t) {
  for (var o = [], f = e.length, n = 0; n < f; n++)
    me(e[n].e, o, !0);
  var c = f > 0 && o.length === 0 && a !== null;
  if (c) {
    var h = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    ge(h), h.append(
      /** @type {Element} */
      a
    ), t.clear(), A(v, e[0].prev, e[f - 1].next);
  }
  ke(o, () => {
    for (var d = 0; d < f; d++) {
      var s = e[d];
      c || (t.delete(s.k), A(v, s.prev, s.next)), we(s.e, !c);
    }
  });
}
function Me(v, e, a, t, o, f = null) {
  var n = v, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  {
    var h = (
      /** @type {Element} */
      v
    );
    n = w ? q(
      /** @type {Comment | Text} */
      oe(h)
    ) : h.appendChild(ve());
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
        if (C.nodeType === ce && /** @type {Comment} */
        C.data === de) {
          n = /** @type {Comment} */
          C, i = !0, M(!1);
          break;
        }
        var E = l[_], T = t(E, _);
        u = te(
          C,
          c,
          k,
          null,
          E,
          T,
          _,
          o,
          e,
          a
        ), c.items.set(T, u), k = u;
      }
      r > 0 && q(P());
    }
    w || He(l, c, n, o, e, t, a), f !== null && (r === 0 ? d ? L(d) : d = F(() => f(n)) : d !== null && z(d, () => {
      d = null;
    })), i && M(!0), y(p);
  }), w && (n = C);
}
function He(v, e, a, t, o, f, n) {
  var c = v.length, h = e.items, d = e.first, s = d, p, l = null, r = [], i = [], g, k, u, _;
  for (_ = 0; _ < c; _ += 1) {
    if (g = v[_], k = f(g, _), u = h.get(k), u === void 0) {
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
        o,
        n
      ), h.set(k, l), r = [], i = [], s = l.next;
      continue;
    }
    if (Oe(u, g, _), (u.e.f & U) !== 0 && L(u.e), u !== s) {
      if (p !== void 0 && p.has(u)) {
        if (r.length < i.length) {
          var T = i[0], m;
          l = T.prev;
          var b = r[0], x = r[r.length - 1];
          for (m = 0; m < r.length; m += 1)
            W(r[m], T, a);
          for (m = 0; m < i.length; m += 1)
            p.delete(i[m]);
          A(e, b.prev, x.next), A(e, l, b), A(e, x, T), s = T, l = x, _ -= 1, r = [], i = [];
        } else
          p.delete(u), W(u, s, a), A(e, u.prev, u.next), A(e, u, l === null ? e.first : l.next), A(e, l, u), l = u;
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
function Oe(v, e, a, t) {
  pe(v.v, e), v.i = a;
}
function te(v, e, a, t, o, f, n, c, h, d) {
  var s = (h & Te) !== 0, p = (h & Ee) === 0, l = s ? p ? _e(o, !1, !1) : G(o) : o, r = (h & he) === 0 ? n : G(n), i = {
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
    return i.e = F(() => c(v, l, r, d), w), i.e.prev = a && a.e, i.e.next = t && t.e, a === null ? e.first = i : (a.next = i, a.e.next = i.e), t !== null && (t.prev = i, t.e.prev = i.e), i;
  } finally {
  }
}
function W(v, e, a) {
  for (var t = v.next ? (
    /** @type {TemplateNode} */
    v.next.e.nodes_start
  ) : a, o = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, f = (
    /** @type {TemplateNode} */
    v.e.nodes_start
  ); f !== t; ) {
    var n = (
      /** @type {TemplateNode} */
      ye(f)
    );
    o.before(f), f = n;
  }
}
function A(v, e, a) {
  e === null ? v.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function qe(v, e, a, t, o) {
  var c;
  w && V();
  var f = (c = e.$$slots) == null ? void 0 : c[a], n = !1;
  f === !0 && (f = e.children, n = !0), f === void 0 || f(v, n ? () => t : t);
}
function Le(v, e) {
  Ae(() => {
    var a = v.getRootNode(), t = (
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
      const o = document.createElement("style");
      o.id = e.hash, o.textContent = e.code, t.appendChild(o);
    }
  });
}
var Fe = R('<div class="loading svelte-vn2jwk">Loading...</div>'), Ue = R('<div class="error svelte-vn2jwk"> </div>'), Be = R('<div class="empty svelte-vn2jwk">No items found</div>'), Ye = R('<div class="item svelte-vn2jwk"><pre class="svelte-vn2jwk"> </pre></div>'), ze = R('<div class="items-list svelte-vn2jwk"></div>'), Pe = R('<div class="api-data-container svelte-vn2jwk"><!> <!></div>');
const Ve = {
  hash: "svelte-vn2jwk",
  code: ".api-data-container.svelte-vn2jwk {font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;padding:1rem;border:1px solid #e1e5e9;border-radius:8px;background:white;}.loading.svelte-vn2jwk {color:#666;text-align:center;padding:1rem;}.error.svelte-vn2jwk {color:#dc3545;background:#f8d7da;border:1px solid #f5c6cb;border-radius:4px;padding:0.75rem;margin-bottom:1rem;}.empty.svelte-vn2jwk {color:#666;text-align:center;padding:1rem;font-style:italic;}.items-list.svelte-vn2jwk {display:flex;flex-direction:column;gap:1rem;}.item.svelte-vn2jwk {background:#f8f9fa;border:1px solid #e9ecef;border-radius:4px;padding:1rem;}.item.svelte-vn2jwk pre:where(.svelte-vn2jwk) {margin:0;white-space:pre-wrap;word-break:break-word;font-size:0.875rem;color:#495057;}"
};
function Ge(v, e) {
  Ne(e, !0), Le(v, Ve);
  let a = X(e, "url", 7, ""), t = X(e, "accessToken", 7, ""), o = B(Ce([])), f = B(!1), n = B(null);
  const c = async () => {
    if (!a()) {
      I(n, "URL is required");
      return;
    }
    I(f, !0), I(n, null);
    try {
      const r = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      t() && (r.Authorization = `Bearer ${t()}`);
      const i = await fetch(a(), { method: "GET", headers: r });
      if (!i.ok)
        throw new Error(`HTTP error! status: ${i.status}`);
      const g = await i.json();
      I(o, Array.isArray(g) ? g : [g], !0);
    } catch (r) {
      I(n, r instanceof Error ? r.message : "Failed to fetch data", !0), I(o, [], !0);
    } finally {
      I(f, !1);
    }
  };
  Re(() => {
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
              Me(b, 21, () => y(o), Se, (x, j) => {
                var S = Ye(), H = O(S), se = O(H, !0);
                D(H), D(S), K((ne) => Q(se, ne), [
                  () => JSON.stringify(y(j), null, 2)
                ]), N(x, S);
              }), D(b), N(m, b);
            };
            Y(
              u,
              (m) => {
                y(o).length === 0 ? m(E) : m(T, !1);
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
  return qe(l, e, "default", {}), D(h), N(v, h), xe({
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
customElements.define("api-data-display", Ie(Ge, { url: {}, accessToken: {} }, ["default"], [], !0));
export {
  Ge as default
};
