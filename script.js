// letcure: let and const


// ES5

// var name5 = 'Jane Smith';
// var age = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6

// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane miller';
// console.log(name6);

// ES5
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         var firstName = 'John';
//         var yearofBirth = 1990;
//     }

//     console.log(firstName + ', born in ' + yearofBirth + ', is now officially allowed to drive a car.');
// }

// driversLicense5(true);

// ES6 

let firstName = 'John';
const yearofBirth = 1990;

function driversLicense6(passedTest) {
    if (passedTest) {
        console.log(`${firstName} is now allowed to drive because he was born in ${yearofBirth}`);
    }
}

driversLicense6(true); 