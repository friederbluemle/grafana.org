define(["../core","../var/rnotwhite","../var/strundefined","../core/access","./support","../selector"],function(t,e,n,r,i){var o,a,s=t.expr.attrHandle;t.fn.extend({attr:function(e,n){return r(this,t.attr,e,n,arguments.length>1)},removeAttr:function(e){return this.each(function(){t.removeAttr(this,e)})}}),t.extend({attr:function(e,r,i){var s,u,c=e.nodeType;if(e&&3!==c&&8!==c&&2!==c)return typeof e.getAttribute===n?t.prop(e,r,i):(1===c&&t.isXMLDoc(e)||(r=r.toLowerCase(),s=t.attrHooks[r]||(t.expr.match.bool.test(r)?a:o)),void 0===i?s&&"get"in s&&null!==(u=s.get(e,r))?u:(u=t.find.attr(e,r),null==u?void 0:u):null!==i?s&&"set"in s&&void 0!==(u=s.set(e,i,r))?u:(e.setAttribute(r,i+""),i):void t.removeAttr(e,r))},removeAttr:function(n,r){var i,o,a=0,s=r&&r.match(e);if(s&&1===n.nodeType)for(;i=s[a++];)o=t.propFix[i]||i,t.expr.match.bool.test(i)&&(n[o]=!1),n.removeAttribute(i)},attrHooks:{type:{set:function(e,n){if(!i.radioValue&&"radio"===n&&t.nodeName(e,"input")){var r=e.value;return e.setAttribute("type",n),r&&(e.value=r),n}}}}}),a={set:function(e,n,r){return n===!1?t.removeAttr(e,r):e.setAttribute(r,r),r}},t.each(t.expr.match.bool.source.match(/\w+/g),function(e,n){var r=s[n]||t.find.attr;s[n]=function(t,e,n){var i,o;return n||(o=s[e],s[e]=i,i=null!=r(t,e,n)?e.toLowerCase():null,s[e]=o),i}})});