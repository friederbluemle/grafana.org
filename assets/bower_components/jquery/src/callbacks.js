define(["./core","./var/rnotwhite"],function(t,e){function n(n){var i=r[n]={};return t.each(n.match(e)||[],function(t,e){i[e]=!0}),i}var r={};return t.Callbacks=function(e){e="string"==typeof e?r[e]||n(e):t.extend({},e);var i,o,a,s,u,c,l=[],f=!e.once&&[],d=function(t){for(i=e.memory&&t,o=!0,c=s||0,s=0,u=l.length,a=!0;l&&u>c;c++)if(l[c].apply(t[0],t[1])===!1&&e.stopOnFalse){i=!1;break}a=!1,l&&(f?f.length&&d(f.shift()):i?l=[]:p.disable())},p={add:function(){if(l){var n=l.length;!function r(n){t.each(n,function(n,i){var o=t.type(i);"function"===o?e.unique&&p.has(i)||l.push(i):i&&i.length&&"string"!==o&&r(i)})}(arguments),a?u=l.length:i&&(s=n,d(i))}return this},remove:function(){return l&&t.each(arguments,function(e,n){for(var r;(r=t.inArray(n,l,r))>-1;)l.splice(r,1),a&&(u>=r&&u--,c>=r&&c--)}),this},has:function(e){return e?t.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],u=0,this},disable:function(){return l=f=i=void 0,this},disabled:function(){return!l},lock:function(){return f=void 0,i||p.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!l||o&&!f||(e=e||[],e=[t,e.slice?e.slice():e],a?f.push(e):d(e)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o}};return p},t});