var m = require("mithril");

module.exports = {
  view: function(vnode){
    return m('div',[
      m("nav.navbar.navbar-light", [
        m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "Home"),
        m("ul.nav.navbar-nav.pull-right",[
          m("a.navbar-item[href='#']", {oncreate: m.route.link}, "Sign in"),
          m("a.navbar-item[href='#']", {oncreate: m.route.link}, "Sign out"),
        ])
      ]),
      m("section", vnode.children)
    ]);
  }
}
