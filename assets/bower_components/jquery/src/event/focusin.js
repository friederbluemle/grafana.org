define(["../core","../data/var/dataPriv","./support","../event","./trigger"],function(t,e,n){return n.focusin||t.each({focus:"focusin",blur:"focusout"},function(n,i){var r=function(e){t.event.simulate(i,e.target,t.event.fix(e))};t.event.special[i]={setup:function(){var t=this.ownerDocument||this,o=e.access(t,i);o||t.addEventListener(n,r,!0),e.access(t,i,(o||0)+1)},teardown:function(){var t=this.ownerDocument||this,o=e.access(t,i)-1;o?e.access(t,i,o):(t.removeEventListener(n,r,!0),e.remove(t,i))}}}),t});