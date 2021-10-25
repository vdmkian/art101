/**
 * Author:    kain van der meer
 * Created:   10.25.21
 * for: art 101, lab 7
 **/
function sortuser() {
  var userName = window.prompt("Hi. give me your name so I can fix you.");
  console.log("username =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  return nameSorted;
}

document.writeln("Don't worry I fixed your name: ",
  sortuser(), "</br>");
