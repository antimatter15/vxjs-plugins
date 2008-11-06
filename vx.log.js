_.logdata = [];
_.log = function(){
  _.logdata.push(_.toarray(arguments).join(" "));
}

if(!window.console){
  window.console = {
    log: _.log
  }
}