_._validation = {
  url: ["keyup",function(el){
    return /^(ftp|http|https|)(:\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(el.value)
  }],
  required: ["keyup",function(el){
    return !!el.value
  }],
  email: ["keyup",function(element){
    
  }],
  number: ["keyup",function(el){
    return el.value==parseFloat(el.value)+''
  }],
  integer: ["keyup",function(el){
    return el.value==parseInt(el.value)+''
  }]
}

_.validate = function(h){
  var l, c, v, i
  for(l in _._validation){
    c=_.L(l,h) //get all of class
    v=_._validation[l] //the thingy that does validation
    for(i=c.length;i--;){ //loop elements
      _.E(c[i], "keyup", function(e){ //attach event (defined by config)
        console.log("sumptin happenz")
        e.target._v=e.target._v?e.target._v:[]; //if no validtor, then create
        if(!v[1](e.target)){ //test if fail
          console.log("fail",e.target)
          e.target._v.push(l); //phail! add to fail-list
          _.addclass(e.target,"fail");
        }else{
          console.log("notfail")
          e.target._v=_.arrayremove(e.target._v,l)//passes, get rid of failures for test
          _.removeclass(e.target,"fail");
        }
      })
    }
  }
  _.E(h, "submit", function(e){
    if(_.L("fail",e.target).length == 0){
      e.preventDefault();
      alert("phail");
    }
  })
}
