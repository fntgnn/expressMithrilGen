var m = require("mithril");

var Layout = require('./components/Layout');
var Homepage = require("./components/Homepage");
var PostsShow = require("./components/PostsShow");

m.route(document.body, "/", {
    "/": {
      render: function(vnode) {
          return m(Layout, m(Homepage))
      }
    },
    "/posts/:id": {
        render: function(vnode) {
            return m(Layout, m(PostsShow, vnode.attrs))
        }
    }
})
