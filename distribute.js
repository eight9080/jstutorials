const distributeEvenly = (array) => {
  var map = {};
  array.forEach(element => {
    var countEl = map[element]|| 0;
    map[element]=countEl+1;
  });
  var result = [];
  var keys = Object.keys(map);
  keys.forEach(el => {
      result.push({code: el, number: map[el]});
  });

  var result1 = [];
  var i = 0;
  while(result.length>0){
      if(i>=result.length){
          i=0;
      }
    var item = result[i];
    result1.push(item.code);

    if(item.number<=1){
        result.splice(i,1);
    }else{
        item.number--;
        i++;
    }
  }
  return result1;
};