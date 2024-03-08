"use strict";
// Question 16
let moreGuest = ["Areej", "Maidah", "Anish"];
console.log(moreGuest); //return old array
//Invite a new friends onf an array
moreGuest.push("Kamran");
moreGuest.unshift("Anaya");
moreGuest.splice(0, 2, "Aira");
moreGuest.forEach(guest => {
    console.log(`This a new ${guest} guest for joing a to day dinner`);
});
// Question 17
// invite only two guest 
console.log("Unfortunately, i can invite only 2 person!");
while (moreGuest.length > 2) {
    let removeGuest = moreGuest.pop();
    console.log(`${removeGuest} i can't invite the dinner`);
}
moreGuest.forEach(Guest => {
    console.log(`Dear,${Guest} you still invite to dinner`);
});
moreGuest.splice(0, moreGuest.length);
console.log(moreGuest);
// Question 18
let places = ["Turkey", "Soudia Arab", "Thailand", "Jpan", "New yourk"];
// simple console
console.log("Normal console", places);
//sort
console.log("alphabetical order", places.sort());
// reverse
console.log("Reverse order", places.reverse());
