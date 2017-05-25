var m = require("mithril");

var PostsShow = {
  view: function(vnode){
    return m("div","PostShow"+vnode.attrs.id);
  }

}
module.exports = PostsShow;
