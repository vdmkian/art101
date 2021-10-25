/**
 * Author:    kain van der meer
 * Created:   10.20.21
 * for: art 101, lab 6
 **/
 var myTransport = ["car","bus","walking","bike","run"];

 var myMainRide = {make: "toyota", model: "camry", color: "grey", year: "2003", age: 18, ownit: "true"};

 document.writeln("how I get from place to place: " + myTransport + <br>);

 document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
