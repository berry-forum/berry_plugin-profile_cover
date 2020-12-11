module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=11)}([function(t,r,e){"use strict";function o(t,r){if(void 0===r&&(r=2),0===t)return"0 Bytes";var e=r<0?0:r,o=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,o)).toFixed(e))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}e.d(r,"a",(function(){return o}))},function(t,r){t.exports=flarum.core.compat["components/Button"]},function(t,r){t.exports=flarum.core.compat["models/User"]},function(t,r){t.exports=flarum.core.compat.Model},function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["utils/ItemList"]},function(t,r){t.exports=flarum.core.compat["components/UserCard"]},function(t,r){t.exports=flarum.core.compat["utils/UserControls"]},function(t,r){t.exports=flarum.core.compat["components/Modal"]},function(t,r){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,r,e){"use strict";function o(){return(o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}e.r(r);var n=e(4),a=e(2),i=e.n(a),s=e(6),c=e.n(s),u=e(7),l=e.n(u),p=e(1),f=e.n(p),d=e(3),h=e.n(d);var v=e(8),b=e.n(v),y=e(5),g=e.n(y),x=e(9),_=e.n(x),w=e(0),B=function(t){var r,e;function n(){return t.apply(this,arguments)||this}e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var a=n.prototype;return a.oninit=function(r){t.prototype.oninit.call(this,r),this.maxSize=parseFloat(app.forum.attribute("sycho-profile-cover.max_size")||2048),this.alertAttrs={content:app.translator.trans("sycho-profile-cover.forum.notice",{size:Object(w.a)(this.maxSize*Math.pow(2,10))})},this.loading=!1,this.cover=this.attrs.user.cover_thumbnail()||this.attrs.user.cover(),this.context=""},a.content=function(){var t={},r="Modal-image CoverEditor-cover";return this.cover&&(t.style={backgroundImage:"url("+app.forum.attribute("baseUrl")+"/assets/covers/"+this.cover+")"},r+=" CoverEditor-active"),[m("div",o({className:r},t),this.loading?m(_.a,null):""),m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fieldsItems().toArray()))]},a.className=function(){return"Cover-modal Modal--small"},a.title=function(){return app.translator.trans("sycho-profile-cover.forum.edit_cover")},a.fieldsItems=function(){var t=new g.a;return t.add("actions",this.controlItems().toArray()),t},a.controlItems=function(){var t=new g.a;return t.add("upload",m(f.a,{icon:"fas fa-upload",className:"Button",onclick:this.openPicker.bind(this)},app.translator.trans("core.forum.user.avatar_upload_button"))),t.add("remove",m(f.a,{icon:"fas fa-times",className:"Button",onclick:this.remove.bind(this)},app.translator.trans("core.forum.user.avatar_remove_button"))),t},a.openPicker=function(){var t=this;$('<input type="file">').appendTo("body").hide().click().on("change",(function(r){t.upload($(r.target)[0].files[0])}))},a.upload=function(t){if(!this.loading){var r=new FormData;r.append("cover",t),this.loading=!0,this.context="added",m.redraw(),app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/users/"+this.attrs.user.id()+"/cover",serialize:function(t){return t},body:r}).then(this.success.bind(this),this.failure.bind(this))}},a.remove=function(){this.loading=!0,this.context="removed",m.redraw(),app.request({method:"DELETE",url:app.forum.attribute("apiUrl")+"/users/"+this.attrs.user.id()+"/cover"}).then(this.success.bind(this),this.failure.bind(this))},a.success=function(t){app.store.pushPayload(t),this.showAlert("success"),this.loading=!1,m.redraw(),this.hide()},a.failure=function(){this.showAlert("error"),this.loading=!1,m.redraw()},a.showAlert=function(t){this.alertAttrs.content=app.translator.trans("sycho-profile-cover.forum."+this.context+"."+t),this.alertAttrs.type=t},n}(b.a);app.initializers.add("sycho-profile-cover",(function(t){i.a.prototype.cover=h.a.attribute("cover"),i.a.prototype.cover_thumbnail=h.a.attribute("cover_thumbnail"),i.a.prototype.canSetProfileCover=h.a.attribute("canSetProfileCover"),Object(n.extend)(c.a.prototype,"view",(function(r){if(r.attrs.style&&this.attrs.user.cover()){var e=this.attrs.user.cover(),n=this.attrs.user.cover_thumbnail();if(e){this.attrs.controlsButtonClassName.includes("Button--icon")&&n&&(e=n);var a=t.forum.attribute("baseUrl")+"/assets/covers/"+e;r.attrs.style=o(r.attrs.style,{backgroundImage:"url("+a+")"})}}})),Object(n.extend)(l.a,"moderationControls",(function(r,e){if(e.canSetProfileCover())return r.add("cover",m(f.a,{icon:"fas fa-image",onclick:function(){return t.modal.show(B,{user:e})}},t.translator.trans("sycho-profile-cover.forum.cover"))),r}))}))}]);
//# sourceMappingURL=forum.js.map