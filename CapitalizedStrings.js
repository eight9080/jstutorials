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

}
console.log("People  all".toJadenCase());
