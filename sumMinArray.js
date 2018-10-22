/**
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455
 */
function sumTwoSmallestNumbers(numbers) {  
  var min1 = null;
  var min2 = null;  
  numbers.forEach(element => {
      if(min1===null){
          min1=element;
          return;
      }
      if(min1>element){
          min2=min1;
          min1=element;
          return;
      }
      if(min2===null){
          min2=element;
          return;
      }
      if(min2>element){
          min2=element;
      }
  });
  return min1+min2;
};

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
