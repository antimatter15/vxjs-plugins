_.hasclass = function(e,c){return _.I(c,e.className.split(" "))<0}
_.addclass = function(e,c){if(!_.hasclass(e,c))e.className+=" "+c}
_.removeclass = function(e,c){e.className=_.arrayremove(e.className.join(" "),c).join(" ")}
_.arrayremove = function(e,o){for(f=e.length;f--;)e[f]==o?f.splice(f,1):0;return e}