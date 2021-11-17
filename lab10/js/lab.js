/**
 * Author:    kain van der meer
 * Created:   11.3.21
 * for: art 101, lab 10
 **/

 function sortuser(word) {
   var userName = word
   console.log("username =", userName);
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   var nameSorted = nameArraySort.join('');
   return nameSorted;
 }

 buttonEl = document.getElementById("my-button");
 inputEl = document.getElementById("user-name");
 outputEl = document.getElementById("output");
 buttonEl.addEventListener("click", function(){
   var user = inputEl.value;
   var new1El = document.createElement("p");
   new1El.innerHTML = sortuser(user);
   outputEl.appendChild(new1El);
 })
