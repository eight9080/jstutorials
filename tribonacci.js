function tribonacci(signature,n){
   var result = signature;
   for(i=3; i<n; i++){
       result.push(result[i-3]+result[i-2]+result[i-1]);
   }
   return result.slice(0,n);
  }

  console.log(tribonacci([0,0,1],10));
