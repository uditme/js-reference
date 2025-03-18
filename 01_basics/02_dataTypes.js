"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object







                                // STACK and HEAP memory


// Stack(Primitive) [like, variables]
// Heap(Non- Primitive) [like, arrays, objects]

let out= console.log;

let myname= "udit";
let myname2= myname;

myname2= "ish";
out(myname, myname2)

// copied and then changed

let user1= {
    email: "abc@gmail.com",
    upi: "abc@sbi"
}

let user2= user1;

user2.email= "udit@gmail.com";

out(user1)
out(user2)

// same value in user1 and user2 as {...} is an object so it is made in heap
// and both variables user1, and user2 are pointed to an object in heap


