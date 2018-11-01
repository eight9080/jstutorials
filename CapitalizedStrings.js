/**
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
**/
String.prototype.toJadenCase = function () {
  return this.replace(/\w\S*/g, c => {
    console.log("Word "+c);
   return c.charAt(0).toUpperCase()+c.substr(1).toLowerCase();
  }
  );

};
console.log("People  all".toJadenCase());

function order(words){
  var arrayWords = words.split(/\s+/g);
  var result = [];
  arrayWords.forEach(element => {
    var val = element.match(/[0-9]+/g);
    result[val]=element;
  });
  var resultString ="";
  result.forEach(el => {
    resultString+=el+" ";
  });
  return resultString.trim();
}

//order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est"
console.log("Order: "+order("is2 Thi1s T4est 3a"));

function order2(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    


function deleteNth(arr,n){
  var occurances = arr.reduce((acc, current) => {
     acc[current] ? acc[current]++ : acc[current]=1;
     return acc;
  }, {}
  );
  
  var result = [];

  arr.forEach(el => {
    if(occurances[el]>n){
      occurances[el]=n;
    }
    if(occurances[el]>0){
      result.push(el);
      occurances[el]--;
    }
  });
  
  return result;
}

var elems = deleteNth([20,37,20,21], 1); // [20,37,21]
console.log('Delete n array: '+ elems);