_._validation = {
  url: ["keyup",function(el){
    return /^(ftp|http|https|)(:\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(el.value)
  }],
  required: ["keyup",function(el){
    return !!el.value
  }],
  email: ["keyup",function(element){
    
  }]
}

_.validate = function(h){
  var l, c, v, i
  for(l in _._validation){
    c=_.L(l,h) //get all of class
    v=_._validation[l] //the thingy that does validation
    for(i=c.length;c--;){ //loop elements
      _.E(c[i], v[0], function(e){ //attach event (defined by config)
        e.target._v=e.target._v?[]; //if no validtor, then create
        if(v[1](e.target)==!1){ //test if fail
          e.target._v.push(l); //phail! add to fail-list
          _.addclass(e.target,"fail");
        }else{
          e.target._v=_.arrayremove(e.target._v,l)//passes, get rid of failures for test
          _.removeclass(e.target,"fail");
        }
      })
    }
  }
  _.E(h, "submit", function(e){
    if(_.L("fail",e).length == 0){
      e.preventDefault();
    }
  })
}
