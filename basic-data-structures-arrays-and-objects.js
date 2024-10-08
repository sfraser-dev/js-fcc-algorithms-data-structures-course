"use strict";

console.log("--splice remove array elements");
// splicing out values (and summing with reduce())
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
console.log("arr=" + arr);
// use array reduce function to reduce an array to a single value
// here, the arrow callback function iterates over array elements
// and sums them against an accumulator (initial accumulator=0)
let sum1 = arr.reduce((a, b) => a + b, 0);
console.log("sum1=" + sum1);
// make sum of array elements equal 10
arr.splice(1, 4);
let sum2 = arr.reduce((a, b) => a + b, 0);
console.log("arr=" + arr);
console.log("sum2 = " + sum2);

// add elements to array using splice
console.log("--add elements to array using splice");
const numbers = [10, 11, 12, 12, 15];
console.log("numbers=" + numbers);
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log("numbers=" + numbers);

// splice remove 2 elements from start and add 2 elements in their place
console.log("--splice remove 2 elements and add 2 elements");
console.log((["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"]));
function htmlColorNames(arr) {
    // starting at index 0, remove 2 elements, add in 2 more elements
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}
console.log(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"]));

// slice() copies or extracts a given number of elements to a new array
// it leaves the array it is called upon untouched
console.log("--slice an array to create a new array");
console.log(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]);
function forecast(arr) {
    // make it warm and sunny only (from index x upto (but not including) y)
    arr = arr.slice(2, 4);
    return arr;
}
console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));

// Note:
// splice() changes the original array whereas slice() doesn't
// but both splice() and slice() returns array object

// ... spread operator for copying arrays with readable syntax
console.log("--spread operator for copying arrays with readable syntax");
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// spread operator for concatenating array
console.log("--spread operator for concatenating array");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("arr1=" + arr1);
console.log("arr2=" + arr2);
arr1 = [...arr1, ...arr2];
console.log("arr1 concatenated=" + arr1);

// spread operator allows easy insertion of array into another array
console.log("--spread operator allows easy insertion of array into another array");
function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}
console.log(spreadOut());

// using indexOf() to quickly check if particular element exists in an array
console.log("--using indexOf() to quickly check if particular element exists in an array");
function quickCheck(arr, elem) {
    let val = arr.indexOf(elem); // arr.includes() is boolean version of this
    if (val < 0) {
        return `${elem} is not in the array`;
    } else {
        return `${elem} is at index ${val} in the array`;
    }
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
console.log(quickCheck(["squash", "onions", "shallots"], "onions"));

// for loop, remove nested array if it contains "elem"
console.log("--for loop, remove nested array if it contains 'elem'");
function filteredArray(arr, elem) {
    let newArr = [];
    let found = false;
    // outer array
    for (let i = 0; i < arr.length; i++) {
        // inner array
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === elem) {
                found = true;
            }
        }
        if (found === false) {
            newArr.push(arr[i]);
        }
        found = false;
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2));

// add key-value pairs (properties) to JS objects
console.log("--add key-value pairs (properties) to JS objects");
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.grapes = 35; // add grapes key to object (literally)
let bananaStringVariable = "bananas";
foods[bananaStringVariable] = 13; // use bracket notation with variables
foods.strawberries = 27;
console.log(foods);

// access object keys via bracket notation to change object properties
console.log("--access object keys via bracket notation to change object properties");
foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log("amount of apples in object is " + checkInventory("apples"));

// use the delete keyword to remove object properties
console.log("--use the delete keyword to remove object properties");
foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);

// check if object has a property via hasOwnProperty() or in
console.log("---check if object has a property via hasOwnProperty() or in");
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function isEveryoneHere_in(userObj) {
    if ("Alan" in userObj && "Jeff" in userObj && "Sarah" in userObj && "Ryan" in userObj) {
        return "Everyone is here";
    } else {
        return "Not everyone is here";
    }
}
console.log("'name' in userObj: " + isEveryoneHere_in(users));
// Using "userObj.hasOwnProperty("Alan").. ESLint says this is not recommended
// we can use use Object.hasOwn(userObj,"Alan") instead (ESLint happy, FCC interpreter happy, node happy)
function isEveryoneHere_hasProperty(userObj) {
    if (Object.hasOwn(userObj, "Alan") && Object.hasOwn(userObj, "Jeff") &&
        Object.hasOwn(userObj, "Sarah") && Object.hasOwn(userObj, "Ryan")) {
        return "Everyone is here";
    } else {
        return "Not everyone is here";
    }
}
console.log("Object.hasOwn(userObj,'name'): " + isEveryoneHere_hasProperty(users));

// use 'for .. in ..' to iterate through object property keys, count online users
// (Oh bin! Obin; affray! of array)
console.log("--use 'for .. in ..' to iterate through object property keys, count online users");
users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};
function countOnline(usersObj) {
    let count = 0;
    for (let user in usersObj) {
        if (usersObj[user]["online"] === true) {
            count++;
        }
    }
    return count;
}
console.log(countOnline(users));

// using Object.keys to get an array containing all the properties in an object
console.log("--using Object.keys to get an array containing all the properties in an object");
users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function getArrayOfUsers(obj) {
    const keys = Object.keys(obj);
    return keys;
}
console.log(getArrayOfUsers(users));
// returns [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

