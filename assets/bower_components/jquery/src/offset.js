define(["./core","./var/strundefined","./core/access","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(t,e,n,r,i,o,u){function a(e){return t.isWindow(e)?e:9===e.nodeType&&e.defaultView}var c=window.document.documentElement;return t.offset={setOffset:function(e,n,r){var i,o,u,a,c,l,s,f=t.css(e,"position"),d=t(e),p={};"static"===f&&(e.style.position="relative"),c=d.offset(),u=t.css(e,"top"),l=t.css(e,"left"),s=("absolute"===f||"fixed"===f)&&(u+l).indexOf("auto")>-1,s?(i=d.position(),a=i.top,o=i.left):(a=parseFloat(u)||0,o=parseFloat(l)||0),t.isFunction(n)&&(n=n.call(e,r,c)),null!=n.top&&(p.top=n.top-c.top+a),null!=n.left&&(p.left=n.left-c.left+o),"using"in n?n.using.call(e,p):d.css(p)}},t.fn.extend({offset:function(n){if(arguments.length)return void 0===n?this:this.each(function(e){t.offset.setOffset(this,n,e)});var r,i,o=this[0],u={top:0,left:0},c=o&&o.ownerDocument;if(c)return r=c.documentElement,t.contains(r,o)?(typeof o.getBoundingClientRect!==e&&(u=o.getBoundingClientRect()),i=a(c),{top:u.top+i.pageYOffset-r.clientTop,left:u.left+i.pageXOffset-r.clientLeft}):u},position:function(){if(this[0]){var e,n,r=this[0],i={top:0,left:0};return"fixed"===t.css(r,"position")?n=r.getBoundingClientRect():(e=this.offsetParent(),n=this.offset(),t.nodeName(e[0],"html")||(i=e.offset()),i.top+=t.css(e[0],"borderTopWidth",!0),i.left+=t.css(e[0],"borderLeftWidth",!0)),{top:n.top-i.top-t.css(r,"marginTop",!0),left:n.left-i.left-t.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||c;e&&!t.nodeName(e,"html")&&"static"===t.css(e,"position");)e=e.offsetParent;return e||c})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,r){var i="pageYOffset"===r;t.fn[e]=function(t){return n(this,function(t,e,n){var o=a(t);return void 0===n?o?o[r]:t[e]:void(o?o.scrollTo(i?window.pageXOffset:n,i?n:window.pageYOffset):t[e]=n)},e,t,arguments.length,null)}}),t.each(["top","left"],function(e,n){t.cssHooks[n]=o(u.pixelPosition,function(e,o){return o?(o=i(e,n),r.test(o)?t(e).position()[n]+"px":o):void 0})}),t});