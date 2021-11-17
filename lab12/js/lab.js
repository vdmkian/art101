/**
 * Author:    kain van der meer
 * Created:   11.15.21
 * for: art 101, lab 12
 **/

//just like harry potter sorts the people into hosues
function sortingHat(str){
  if (str == "Harry Potter"){
    return "Gryffindor"
  }
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  if (mod == 1){
    return "Raven claw"
  }
  if (mod == 2){
    return "Slytherin"
  }
  if (mod == 3){
    return "Huffelpuff"
  }
}

var myButton = document.getElementById("button")
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
