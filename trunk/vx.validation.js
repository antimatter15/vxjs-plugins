_._validation = {
  url: ["keyup",function(el){
    return /^(ftp|http|https|)(:\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(el.value)
  }],
  required: ["keyup",function(el){
    return !!el.value
  }],
  email: ["keyup",function(el){
    
  }],
  number: ["keyup",function(el){
    return el.value==parseFloat(el.value)+''
  }],
  integer: ["keyup",function(el){
    return el.value==parseInt(el.value)+''
  }]
}

_.validate = function(h){
  var l, c, v, i, k
  
  for(l in _._validation){
    c=_.L(l,h) //get all of class
    v=_._validation[l] //the thingy that does validation
    
    k = function(e){ //attach event (defined by config)
        e._v=e._v?e._v:[]; //if no validtor, then create
        if(!v[1](e)){ //test if fail
          console.log("fail",e)
          e._v.push(l); //phail! add to fail-list
          _.addclass(e,"fail");
        }else{
          console.log("notfail")
          e._v=_.arrayremove(e._v,l)//passes, get rid of failures for test
          _.removeclass(e,"fail");
        }
    }
    for(i=c.length;i--;){ //loop elements
      _.E(c[i], v[0], function(e){
        k(e.target)
      })
      k(c[i]); //run now for the heck of it
    }
  }
  _.E(h, "submit", function(e){
    if(_.L("fail",e.target).length != 0){
      e.preventDefault();
      alert("phail");
    }
  })
}
