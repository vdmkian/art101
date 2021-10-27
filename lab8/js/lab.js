/**
 * Author:    kain van der meer
 * Created:   10.20.27
 * for: art 101, lab 8
 **/
var numbers = [1,2,3,4,5,6,7,8,9];

 function squared (x){
   var results = x * x
   return results;
 }

 //tested
 console.log("whats 1 squared?", squared(1));
 console.log("whats 2 squared?", squared(2));
 console.log("whats 12 squared?", squared(12));

 console.log("my numbers are:", numbers);
 var result = numbers.map(squared);
 console.log("my numbers squared are:", result);
