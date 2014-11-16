function valky(){

  function valkyFactory(obj, val, delim, par){
    var delim = delim || '.';
    var par = par || [];
    var keys = Object.keys(obj);

    for(var i=0; i < keys.length; i++){
      var k = keys[i];
      if(obj[k] === val){
        par.push(k);
        break;
      }

      if(typeof obj[k] === 'object'){
        par.push(k);
        valkyFactory(obj[k], val, delim, par);
      }
    }
    return par.join(delim);

  };

  return valkyFactory;

}

module.exports = valky();