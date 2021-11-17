/**
 * Author:    kain van der meer
 * Created:   11.8.21
 * for: art 101, lab 11
 **/

 //make the buttons using jQuery
$("#C").append("<button>yay</button>");
$("#P").append("<button>yay1</button>");
$("#R").append("<button>yay2</button>");

//buttons when clicked run the same username function we have been using.
$("button").click(function(){
  var userName = window.prompt("Hi. give me your name so I can fix you.");
  console.log("username =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  return nameSorted;
})
