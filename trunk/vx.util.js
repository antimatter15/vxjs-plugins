_.hasclass = function(e,c){return _.I(c,e.className.split(" "))>0}
_.addclass = function(e,c){if(!_.hasclass(e,c))e.className+=" "+c}
_.removeclass = function(e,c){e.className=_.arrayremove(e.className.split(" "),c).join(" ")}
_.arrayremove = function(e,o){return (','+e.join(",")+',').split(','+o+',').join(',').split(',')}
_.toarray = function(a){for(var b=a.length,c=[];b--;)c.push(a[b]);return c}
//for(f=e.length;f--;)e[f]==o?f.splice(f,1):0;return e}