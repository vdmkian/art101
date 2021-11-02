/**
 * Author:    kain van der meer
 * Created:   11.1.21
 * for: art 101, lab 9
 **/

//getting the output
var outputEl = document.getElementById("output");

//aking new vars
var new1El = document.createElement("p");
new1El.innerHTML = "something new";
var new2El = document.createElement("p");
new2El.innerHTML = "something else";

//putting new vars in output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//making it big and blue
document.getElementById("output").style.color = "blue";
document.getElementById("output").style.fontSize = "60px";
