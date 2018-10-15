function solution(number){
    var symbols  = [
        "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"
    ];

    var values = [1000,900,500,400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var result = '';
    var i = 0;
    while(i>=0 && number!==0){
        while(number>=values[i]){
            number-=values[i];
            result+=symbols[i];
        }
        i++;
    }
    return result;
  }

  function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }

  console.log('result '+solution(1));