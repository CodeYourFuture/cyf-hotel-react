(this["webpackJsonpreact-hotel"] = this["webpackJsonpreact-hotel"] || []).push([
  [0],
  {
    12: function(e, t, a) {},
    16: function(e, t, a) {},
    17: function(e, t, a) {
      e.exports = a.p + "static/media/CYF_Hotel-logo.dfcb1d15.png";
    },
    18: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(4),
        c = a.n(r),
        o = (a(12),
        function(e) {
          return l.a.createElement(
            "footer",
            null,
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "ul",
                null,
                l.a.createElement("li", null, e.contact[0]),
                l.a.createElement("li", null, e.contact[1]),
                l.a.createElement("li", null, e.contact[2])
              )
            ),
            l.a.createElement(
              "p",
              null,
              "\xa9 CYF 2022 by ",
              l.a.createElement(
                "a",
                { href: "https://www.github.com/OmidOmar" },
                "OmidOmar"
              )
            )
          );
        }),
        m = a(1),
        s = function(e) {
          var t = Object(n.useState)(""),
            a = Object(m.a)(t, 2),
            r = a[0],
            c = a[1],
            o = function(e) {
              c(e.target.value);
            };
          return l.a.createElement(
            "div",
            { className: "search" },
            l.a.createElement(
              "div",
              { className: "page-header" },
              l.a.createElement(
                "h4",
                { className: "text-left" },
                "Search Bookings"
              )
            ),
            l.a.createElement(
              "div",
              { className: "row search-wrapper" },
              l.a.createElement(
                "div",
                { className: "col" },
                l.a.createElement(
                  "form",
                  {
                    className: "form-group search-box",
                    onSubmit: function(t) {
                      t.preventDefault(), e.search(r);
                    }
                  },
                  l.a.createElement(
                    "label",
                    { htmlFor: "customerName" },
                    "Customer id"
                  ),
                  l.a.createElement(
                    "div",
                    { className: "search-row" },
                    l.a.createElement("input", {
                      type: "text",
                      id: "customerId",
                      className: "form-control",
                      placeholder: "Customer id",
                      value: r,
                      onChange: o
                    }),
                    l.a.createElement(
                      "button",
                      { className: "btn btn-primary" },
                      "Search IDs"
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col" },
                l.a.createElement(
                  "form",
                  {
                    className: "form-group search-box",
                    onSubmit: function(t) {
                      t.preventDefault(), e.search(r);
                    }
                  },
                  l.a.createElement(
                    "label",
                    { htmlFor: "customerName" },
                    "Customer name"
                  ),
                  l.a.createElement(
                    "div",
                    { className: "search-row" },
                    l.a.createElement("input", {
                      type: "text",
                      id: "customerName",
                      className: "form-control",
                      placeholder: "Customer name",
                      value: r,
                      onChange: o
                    }),
                    l.a.createElement(
                      "button",
                      { className: "btn btn-primary" },
                      "Search Names"
                    )
                  )
                )
              )
            )
          );
        },
        i = a(2),
        u = a.n(i),
        d = function(e) {
          var t = e.id,
            a = Object(n.useState)([]),
            r = Object(m.a)(a, 2),
            c = r[0],
            o = r[1];
          return (
            Object(n.useEffect)(
              function() {
                fetch("https://cyf-react.glitch.me/customers/".concat(t))
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return o(e);
                  });
              },
              [t]
            ),
            console.log(c),
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "ul",
                { id: "customerInfo" },
                l.a.createElement("li", null, "Title: ", c.title),
                l.a.createElement("li", null, "First Name: ", c.firstName),
                l.a.createElement("li", null, "Surname: ", c.surname, " "),
                l.a.createElement("li", null, "Email: ", c.email, " "),
                l.a.createElement("li", null, "Phone: ", c.phoneNumber, " "),
                l.a.createElement("li", null, "VIP: ", c.vip ? "Yes" : "No")
              )
            )
          );
        },
        h = function(e) {
          var t = e.customerObject,
            a = e.error,
            r = e.handleSort,
            c = Object(n.useState)(null),
            o = Object(m.a)(c, 2),
            s = o[0],
            i = o[1],
            h = function(e) {
              var t = e.x,
                a = Object(n.useState)(!1),
                r = Object(m.a)(a, 2),
                c = r[0],
                o = r[1];
              return l.a.createElement(
                "tr",
                {
                  className: c ? "bg-warning" : null,
                  onClick: function(e) {
                    "Show Profile" !== e.target.innerHTML
                      ? o(!c)
                      : i(e.target.value);
                  },
                  key: t.id,
                  id: t.id
                },
                l.a.createElement("td", null, t.title),
                l.a.createElement("td", null, t.firstName),
                l.a.createElement("td", null, t.surname),
                l.a.createElement("td", null, t.email),
                l.a.createElement("td", null, t.roomId),
                l.a.createElement("td", null, t.checkInDate),
                l.a.createElement("td", null, t.checkOutDate),
                l.a.createElement(
                  "td",
                  null,
                  ~~u.a
                    .duration(u()(t.checkOutDate).diff(u()(t.checkInDate)))
                    .asDays() + " nights"
                ),
                l.a.createElement(
                  "td",
                  null,
                  l.a.createElement(
                    "button",
                    { className: "btn btn-primary", value: t.id },
                    "Show Profile"
                  )
                )
              );
            };
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              { className: "table-responsive" },
              l.a.createElement(
                "p",
                { id: "result" },
                "Results (",
                t.length,
                " found)"
              ),
              l.a.createElement(
                "table",
                { className: "table" },
                l.a.createElement(
                  "thead",
                  null,
                  l.a.createElement(
                    "tr",
                    null,
                    l.a.createElement("th", { onClick: r }, "Title"),
                    l.a.createElement("th", { onClick: r }, "First Name"),
                    l.a.createElement("th", { onClick: r }, "Last Name"),
                    l.a.createElement("th", { onClick: r }, "Email"),
                    l.a.createElement("th", { onClick: r }, "Room ID"),
                    l.a.createElement("th", { onClick: r }, "Check In"),
                    l.a.createElement("th", { onClick: r }, "Check Out"),
                    l.a.createElement("th", null, "Duration of Stay")
                  )
                ),
                l.a.createElement(
                  "tbody",
                  null,
                  a
                    ? l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement("td", { colSpan: "8" }, a)
                      )
                    : t.map(function(e, t) {
                        return l.a.createElement(h, { key: t, x: e });
                      })
                )
              )
            ),
            l.a.createElement("div", null, s && l.a.createElement(d, { id: s }))
          );
        },
        E = a(5),
        f = a.n(E),
        p = function() {
          var e = Object(n.useState)([]),
            t = Object(m.a)(e, 2),
            a = t[0],
            r = t[1],
            c = Object(n.useState)(""),
            o = Object(m.a)(c, 2),
            i = o[0],
            u = o[1],
            d = Object(n.useState)(!1),
            E = Object(m.a)(d, 2),
            p = E[0],
            b = E[1],
            g = Object(n.useState)("Email"),
            v = Object(m.a)(g, 2),
            N = v[0],
            w = v[1],
            k = Object(n.useState)(!1),
            O = Object(m.a)(k, 2),
            C = O[0],
            j = O[1];
          Object(n.useEffect)(
            function() {
              fetch("https://cyf-react.glitch.me/")
                .then(function(e) {
                  if (!e.ok)
                    throw Error("An error occurred, couldn't fetch the data.");
                  return e.json();
                })
                .then(function(e) {
                  var t = e;
                  b(!0),
                    (t = t
                      ? e.sort(function(e, t) {
                          return e[N] > t[N] ? 1 : -1;
                        })
                      : e.sort(function(e, t) {
                          return e[N] < t[N] ? 1 : -1;
                        })),
                    r(t);
                })
                .catch(function(e) {
                  return u(e.message);
                });
            },
            [N, C]
          );
          return l.a.createElement(
            "div",
            { className: "App-content" },
            l.a.createElement(
              "div",
              { className: "container" },
              l.a.createElement(s, {
                search: function(e) {
                  var t = a.filter(function(t) {
                    return parseInt(e)
                      ? t.id === parseInt(e)
                      : t.firstName.toLowerCase() === e.toLowerCase() ||
                          t.surname.toLowerCase() === e.toLowerCase();
                  });
                  r(t);
                }
              }),
              p
                ? l.a.createElement(h, {
                    handleSort: function(e) {
                      var t = e.target.innerHTML;
                      "First Name" === t
                        ? (t = "firstName")
                        : "Last Name" === t
                        ? (t = "surname")
                        : "Check In" === t
                        ? (t = "checkInDate")
                        : "Check Out" === t
                        ? (t = "checkOutDate")
                        : "Room ID" === t
                        ? (t = "roomId")
                        : ("Title" !== t && "Email" !== t) ||
                          (t = t.toLowerCase()),
                        j(!C),
                        console.log(!C),
                        w(t);
                    },
                    customerObject: a,
                    error: i
                  })
                : l.a.createElement(
                    "div",
                    { className: "loader" },
                    l.a.createElement(f.a, { color: "#36d7b7" })
                  )
            )
          );
        },
        b = [
          {
            link: "https://www.visitlondon.com",
            image:
              "https://cdn.londonandpartners.com/-/media/images/london/visit/whats-on/christmas/jamie-davies-a8x39eo35be-unsplash.jpg?mw=640&hash=B4BD045F5989E8D48FE70174C0E4199E000ABD27",
            title: "London",
            info:
              "Be dazzled by Christmassy shop window displays, sparkling fairy\n            lights and famous landmarks lit up come nightfall, on this\n            night-time bus tour."
          },
          {
            link: "https://www.peoplemakeglasgow.com",
            image:
              "https://peoplemakeglasgow.com/imager/general/249543/Events-and-Festivals_Ice-Experience-at-Elfingrove_Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg",
            title: "Glasgow",
            info:
              "With events, shopping and fantastic places to eat and drink, here is our guide to the top 21 things to do in Glasgow this winter."
          },
          {
            link: "https://www.visitmanchester.com",
            image:
              "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2",
            title: "Manchester",
            info:
              "Welcome to the tourism site of Manchester where you can search for things to do in here and find out what's on, getting inspiration for your visit to this region."
          }
        ],
        g = function() {
          return l.a.createElement(
            "div",
            { className: "card-container" },
            b.map(function(e, t) {
              return l.a.createElement(
                "a",
                { key: t, href: e.link, target: "blank" },
                l.a.createElement(
                  "div",
                  { className: "card shadow-lg mb-5 bg-white" },
                  l.a.createElement("img", {
                    className: "card-img-top",
                    src: e.image,
                    alt: "CYF Hotel Logo"
                  }),
                  l.a.createElement(
                    "div",
                    { className: "card-body" },
                    l.a.createElement(
                      "h5",
                      { className: "card-title" },
                      e.title
                    ),
                    l.a.createElement("p", { className: "card-text" }, e.info)
                  )
                )
              );
            })
          );
        },
        v = (a(16),
        function(e) {
          var t = Object(n.useState)(0),
            a = Object(m.a)(t, 2),
            r = a[0],
            c = a[1];
          return l.a.createElement(
            "li",
            null,
            e.type,
            ": ",
            r,
            " ",
            l.a.createElement(N, {
              orderOne: function() {
                return c(++r);
              }
            })
          );
        }),
        N = function(e) {
          return l.a.createElement(
            "button",
            { className: "btn btn-info btn-add", onClick: e.orderOne },
            "+"
          );
        },
        w = function() {
          return l.a.createElement(
            "div",
            { className: "orders" },
            l.a.createElement("h3", null, "Restaurant Orders"),
            l.a.createElement(
              "ul",
              { className: "order" },
              l.a.createElement(v, { type: "Chocolate Cake" }),
              l.a.createElement(v, { type: "Pizzas" }),
              l.a.createElement(v, { type: "Salads" })
            )
          );
        },
        k = [
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ],
        O = function() {
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "header",
              { className: "App-header" },
              l.a.createElement("img", {
                className: "App-logo",
                src: a(17),
                alt: "CYF hotel logo"
              }),
              "CYF Hotel"
            )
          );
        },
        C = function() {
          return l.a.createElement(
            "div",
            { className: "App" },
            l.a.createElement(O, null),
            l.a.createElement(g, null),
            l.a.createElement(p, null),
            l.a.createElement("hr", null),
            l.a.createElement(w, null),
            l.a.createElement(o, { contact: k })
          );
        };
      c.a.render(l.a.createElement(C, null), document.getElementById("root"));
    },
    6: function(e, t, a) {
      e.exports = a(18);
    }
  },
  [[6, 1, 2]]
]);
//# sourceMappingURL=main.161f5cff.chunk.js.map
