define(["../var/support","../var/document"],function(t,e){return function(){var n;t.shrinkWrapBlocks=function(){if(null!=n)return n;n=!1;var t,i,r;return i=e.getElementsByTagName("body")[0],i&&i.style?(t=e.createElement("div"),r=e.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",i.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(e.createElement("div")).style.width="5px",n=3!==t.offsetWidth),i.removeChild(r),n):void 0}}(),t});