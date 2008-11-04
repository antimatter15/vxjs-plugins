/* vX AJAX Post Form JS plugin by soren121 */
_.ajaxSubmit=function(c,r){var t=_.G(c),z={},y=t.getElementsByTagName("*");for(var i=y.length;i--;) z[y[i].name]=y[i].value;_.X(t.action,r,'?'+_.Q(z),t.method=="post")}
