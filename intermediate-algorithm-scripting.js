"use strict";

////////////////////
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the
// sum of all the numbers between them. The lowest number will not always come first.
console.log("--- (1)");
function sumAll(arr) {
    // Get the high-end and low-end values passed
    let highEnd = Math.max(...arr);
    let lowEnd = Math.min(...arr);

    // Generate array from low-end to high-end
    let list = [];
    for (let i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }

    // Using reduce to sum the generated array (overkill, could have just used sum when
    // generating the array)
    let theSum = list.reduce(function (accumulator, element) {
        return accumulator + element;
    }, 0);
    return theSum;
}
console.log("sumAll([1, 4] -> " + sumAll([1, 4]));
console.log("sumAll([4, 1] -> " + sumAll([4, 1]));
console.log("sumAll([5, 10] -> " + sumAll([5, 10]));
console.log("sumAll([10, 5] -> " + sumAll([10, 5]));

////////////////////
// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.
console.log("\n--- (2)");
function diffArray(arr1, arr2) {
    // concatenate the arrays
    const newArr = arr1.concat(arr2);
    // create a set (unique values only) from the concatenated arrays
    const createSet = new Set(newArr);
    const setArr = [...createSet];

    let notInArr1 = [];
    let notInArr2 = [];
    // iterate through the values in the set and check to see if these values exist in either arr1 or arr2
    for (let i = 0; i < setArr.length; i++) {
        let arr1IndexOfSetValue = arr1.indexOf(setArr[i]);
        let arr2IndexOfSetValue = arr2.indexOf(setArr[i]);
        if (arr1IndexOfSetValue < 0) {
            // arr1 doesn't have this value from the concatenated set
            notInArr1.push(setArr[i]);
        }
        if (arr2IndexOfSetValue < 0) {
            // arr2 doesn't have this value from the concatenated set
            notInArr2.push(setArr[i]);
        }
    }
    let onlyInOneArr = notInArr1.concat(notInArr2);
    return onlyInOneArr;
}
console.log(
    "diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5] -> " +
        diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
);
console.log(
    '[1, "calf", 3, "piglet"], [1, "calf", 3, 4] -> ' +
        diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
);
console.log(
    '[], ["snuffleupagus", "cookie monster", "elmo"] -> ' +
        diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
);
console.log(
    '[1, "calf", 3, "piglet"], [7, "filly"] -> ' +
        diffArray([1, "calf", 3, "piglet"], [7, "filly"])
);

////////////////////
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of
// the same value as these arguments.
console.log("\n--- (3)");
// The destroyer function only takes one argument, but more than 1 argument is passed to this
// function when called. Need to use Array.from(arguments) to get these additional arguments
function destroyer(arr) {
    // get the values to be removed from the function arguments
    const valsToRemove = Array.from(arguments).slice(1);
    // use filter function to create new array with the desired values removed
    let retArr = arr.filter(function (x) {
        return !valsToRemove.includes(x);
    });
    return retArr;
}
console.log(
    "destroyer([1, 2, 3, 1, 2, 3], 2, 3) -> " +
        JSON.stringify(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
);
console.log(
    "destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) -> " +
        JSON.stringify(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
);
console.log(
    'destroyer(["tree", "hamburger", 53], "tree", 53] -> ' +
        JSON.stringify(destroyer(["tree", "hamburger", 53], "tree", 53))
);

////////////////////
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that
// have matching name and value pairs (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the returned array.
console.log("\n--- (4)");
function whatIsInAName(collection, source) {
    // Get the key(s) from the object which was passed as the second argument
    const sourceKeys = Object.keys(source);
    console.log(sourceKeys);

    // If the collection object doesn't have a key/value pair that the source has, filter it out
    // Iterate over the collection...
    let newCollection = collection.filter(function (object) {
        // For each key/value pair in a collection object...
        for (let i = 0; i < sourceKeys.length; i++) {
            // Does this collection object have all the key/value pairs that the source has?...
            // eg: if source["last"] !== object["last"], filter out this object
            // eg: if source["apple"] !== object["apple"], filter out this object
            if (source[sourceKeys[i]] !== object[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });

    // Return filtered collection that only has the key/values that the source has
    return newCollection;
}
console.log(
    whatIsInAName(
        [
            { first: "Romeo", last: "Montague" },
            { first: "Mercutio", last: null },
            { first: "Tybalt", last: "Capulet" },
        ],
        { last: "Capulet" }
    )
);
console.log(
    whatIsInAName(
        [
            { apple: 1, bat: 2 },
            { apple: 1 },
            { apple: 1, bat: 2, cookie: 2 },
            { bat: 2 },
        ],
        { apple: 1, bat: 2 }
    )
);
console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, cookie: 2 }
    )
);

//// Methods used
// reduce()
// concat()
// new Set()
// indexOf()
// push()  [mutable]
// Array.from(arguments) [create an array from the arguments passed to a function]
// slice() [mutable]
// includes()
// Object.keys(obj) [get the keys from Object obj as an array]
// filter()
// replace(/(group1)(group2)/g, "$1 $2") [$1 is group1 match, $2 is group2 match]
// toLowerCase()

////////////////////
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
console.log("\n--- (5)");
function spinalCase(str) {
    // replace match of "lowercaseUPPERCASE" text with "lowercase UPPERCASE"
    let newStr1 = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // regex for white space and underscores
    let myRegex = /\s+|_+/g;
    // replace spaces and underscores with hyphens
    let newStr2 = newStr1.replace(myRegex, "-");
    // convert to lowercase
    let newStr3 = newStr2.toLowerCase();
    return newStr3;
}
console.log(
    "spinalCase('This Is Spinal Tap') -> " + spinalCase("This Is Spinal Tap")
);
console.log(
    "spinalCase('thisIsSpinalTap') -> " + spinalCase("thisIsSpinalTap")
);

//////////////////// Pig Latin (all inputs are lowercase)
// - If a word begins with a consonant, take the first consonant or consonant
//   cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
console.log("\n--- (6) Pig Latin");
function translatePigLatin(str) {
    let constonantCount = 0;
    let constonantArray = [];
    let vowel = ["a", "e", "i", "o", "u"].includes(str[0]);
    // deal with vowel first letter
    if (vowel) {
        let newStr = str.concat("way");
        return newStr;
    }
    // deal with constonant first letter
    else {
        // first letter
        constonantCount++;
        constonantArray.push(str[0]);
        // possible cluster of constonants
        for (let i = 1; i < str.length; i++) {
            vowel = ["a", "e", "i", "o", "u"].includes(str[i]);
            if (vowel) {
                break;
            } else {
                constonantCount++;
                constonantArray.push(str[i]);
            }
        }
        // remove correct amount of constonants from the start of the string
        let sliceStr = str.slice(constonantCount, str.length);
        // perform concatonation of the strings
        let newStr = sliceStr.concat(...constonantArray).concat("ay");
        console.log(constonantArray);
        console.log(sliceStr);
        console.log(newStr);
        return newStr;
    }
}
translatePigLatin("cchhssonsonant");

////////// Search and Replace
console.log("\n--- (7)");
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
    // determine if "before" starts with lower or uppler case letter
    let lowerCase = false;
    let beforeFirstChar = before[0];
    if (beforeFirstChar === beforeFirstChar.toLowerCase()) {
        lowerCase = true;
    }

    // make case of "after's" first letter match that of "before's" first letter
    let afterNew = "";
    if (lowerCase) {
        afterNew = after[0].toLowerCase().concat(after.slice(1, after.length));
    } else {
        afterNew = after[0].toUpperCase().concat(after.slice(1, after.length));
    }

    // replace
    let newStr = str.replace(before, afterNew);
    console.log(afterNew);
    console.log(newStr);
    return newStr;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

////////// DNA Pairing
console.log("\n--- (8)");
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented
// by the characters AT and CG, which form building blocks of the DNA double
// helix (AT, TA, GC, CG).
function pairElement(str) {
    str = str.split("").map((c) => {
        let ret = [];
        switch (c) {
            case "G":
                ret = ["G", "C"];
                break;
            case "C":
                ret = ["C", "G"];
                break;
            case "A":
                ret = ["A", "T"];
                break;
            case "T":
                ret = ["T", "A"];
                break;
            default:
                console.log("DNA switch error");
                break;
        }
        return ret;
    });
    return str;
}
console.log(pairElement("GCG")); //[["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA")); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); //[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

////////// Missing Letter
console.log("\n--- (9)");
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    // Use charCodeAt to get a numeric UTF-16 code for each character.
    for (let i = 1; i < str.length; i++) {
        // Check if the difference between consecutive UTF-16 code isn't 1.
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) !== 1) {
            // Calculate the missing character's code by adding 1 to the previous code.
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
    // If no missing letter is found, return undefined.
    return undefined;
}

console.log(fearNotLetter("abce")); // Output: "d"
console.log(fearNotLetter("abcdefghjklmno")); // Output: "i"
console.log(fearNotLetter("stvwx")); // Output: "u"
console.log(fearNotLetter("bcdf")); // Output: "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // Output: undefined.

////////// Sorted Union
console.log("\n--- (10)");
// Write a function that takes two or more arrays and returns a new array of unique
// values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their
// original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final
// array should not be sorted in numerical order.

// There is an unknown number of arrays in argument list.
// Use the "rest" operator to put unknown amount of input parameters into an array of arrays
// - eg: ([1,3,2],[5,2,1,4],[2,1]) rested to [[1,3,2],[5,2,1,4],[2,1]]
function uniteUnique(...variableAmountOfArraysIn) {
    let numberoOfInputArrays = variableAmountOfArraysIn.length;
    console.log(numberoOfInputArrays);
    // eg: multi-dimensional [[1,3,2],[5,2,1,4],[2,1]] flattened to [1,3,2,5,2,1,4,2,1]
    const flattenedArray = variableAmountOfArraysIn.flat();
    // eg: get rid of duplicates by creating a set, eg: [1,3,2,5,2,1,4,2,1] to [1,3,2,5,4]
    const mySet = new Set(flattenedArray);
    // return mySet as an array
    return [...mySet];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // [1, 3, 2, 5, 4, 6]
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]

////////// Convert HTML Entities
console.log("\n--- (11)");
// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
// <=&lt; >=&gt; "=&quot; '=&apos; &=&amp;
function convertHTML(str) {
    // Create an object to store character / entity pairs
    const charEntity = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
        "&": "&amp;",
    };
    // Split the string into an array of individual characters.
    // Go over each individual character and use the charEntity
    // pairings and a short-circuited OR to change the necessary
    // individual characters (if charEntity[individualChar]
    // doesn't exist, it'll be undefined ("falsey"), thus
    // "individualChar" will be returned from the short-circuit.
    str = str.split("").map((individualChar) => {
        return charEntity[individualChar] || individualChar;
    });
    // Rejoin the individual characters back into a string.
    return str.join("");
}
console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); //Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); //Schindler&apos;s List
console.log(convertHTML("<>")); //&lt;&gt;.
console.log(convertHTML("abc")); //abc

////////// Sum All Odd Fibonacci Numbers
console.log("\n--- (12)");
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are
//less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number
// in the sequence is the sum of the two previous numbers. The first seven numbers of
// the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
function sumFibs(num) {
    let sumTotal = 0;
    // starting with "0, 1" as the first two numbers in the Fib sequence
    let previousNumber = 0;
    let currentNumber = 1;

    // {0, 1}, 1, 2, 3, 5, 8... we start at {0, 1}
    while (currentNumber <= num) {
        // we're only summing the odd numbers
        sumTotal += currentNumber % 2 !== 0 ? currentNumber : 0;

        // calculate the next number in the Fib sequence
        let previousNumberTemp = previousNumber;
        previousNumber = currentNumber;
        currentNumber += previousNumberTemp;
    }
    return sumTotal;
}
console.log(sumFibs(1)); // a number
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025)); // 135721

////////// Sum All Primes
console.log("\n--- (13)");
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast,
// 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers
// that are less than or equal to num
function sumPrimes(num) {
    let sumOfPrimes = 0;
    // look through the range of numbers [2..num-1], <=1 cannot be prime and num cannot be prime
    for (let n = 0; n <= num; n++) {
        // for each number in this range, check if it's a prime, if it's a prime,
        // then add it to the sum of primes
        sumOfPrimes += primeNumberCheck(n);
        console.log(`n = ${n}, sumOfPrimes = ${sumOfPrimes}\n-----`);
    }
    return sumOfPrimes;
}

function primeNumberCheck(intIn) {
    // edge cases, no primes below 2
    if (intIn <= 1) {
        return 0;
    } else {
        //-- for (let i = 2; i < intIn; ++i) {
        //-- speed up possible: say num=a*b, if "a"=6 & "b"=6, "num"=36. checking "b"=7 redundant as
        // "a" would have to be less than 6 (all already checked). Only need to check [2..sqrt(intIn)]
        // don't need to check 1 or the number itself.
        for (let i = 2; i * i <= intIn; ++i) {
            if (intIn % i === 0) {
                // factor found, thus, intIn is NOT a prime number
                return 0;
            }
        }
        // no factor found in for loop, thus, intIn IS a prime number
        return intIn;
    }
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156

////////// Smallest Common Multiple
console.log("\n--- (14)");
// Find the smallest common multiple of the provided parameters that can be evenly
// divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is
// also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
    // sort the array from low to high
    arr.sort((a, b) => a - b);
    const [min, max] = arr;

    // initialise possible common multiple to the larger value
    // say we wanted to find the lowest common multiple (LCM) of values 4 and 6
    // multiples of 4: 4, 8,12,16,20,24,28,32
    // multiples of 6: 6,12,18,24,30,36,42,48
    // LCM of values 4 and 6 is 12, so we should test the multiples of 6,
    // the higher of the values, as this is definitely a multiple of 6, check to
    // see if it's also a multiple of 4
    let possibleLCM = max;

    // test our possible lowest common multiple and see if it is divisible by all of [min...max]
    while (!isCommonMultiple(possibleLCM, min, max)) {
        // if not a LCM, increment the higher of the values by itself
        possibleLCM += max;
    }

    return possibleLCM;
}

function isCommonMultiple(possibleLCM, min, max) {
    // iterate through all integers in [min...max] (inclusive) to check all are multiples
    for (let i = min; i <= max; i++) {
        if (possibleLCM % i !== 0) {
            // not a multiple, this is not the LCM, try another LCM
            return false;
        }
    }
    // LCM found
    return true;
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2550
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820

////////// Drop It
console.log("\n--- (15)");
// Given the array arr, iterate through and remove each element starting from the
// first element (the 0 index) until the function func returns true when the iterated
// element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise,
// arr should be returned as an empty array.
function dropElements(arr, callback) {
    // Find the first element where the callback function returns true
    let dropIndex = arr.findIndex(callback);

    // If no element meets the condition, return empty array, otherwise, use slice
    // function to return new array [dropIndex, arrLength) (dropIndex inclusive,
    // arrLength exclusive)
    return dropIndex === -1 ? [] : arr.slice(dropIndex, arr.length);
}

console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n >= 3;
    })
); // [3, 4]
console.log(
    dropElements([0, 1, 0, 1], function (n) {
        return n === 1;
    })
); // [1, 0, 1]
console.log(
    dropElements([1, 2, 3], function (n) {
        return n > 0;
    })
); // [1, 2, 3]
console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n > 5;
    })
); // []
console.log(
    dropElements([1, 2, 3, 7, 4], function (n) {
        return n > 3;
    })
); // [7, 4]
console.log(
    dropElements([1, 2, 3, 9, 2], function (n) {
        return n > 2;
    })
); // [3, 9, 2]

////////// Steamroller
console.log("\n--- (16)");
// Flatten a nested array. You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or
// Array.prototype.flatMap() methods. Global variables should not be used.
const steamrollArray = function (arr) {
    let result = [];

    // iterate over array
    arr.forEach((element) => {
        // is element an array?
        if (Array.isArray(element)) {
            // if element is an array, flatten it by recursively calling steamrollArray()
            result = result.concat(steamrollArray(element));
        } else {
            // element is not an array, add it to the results array
            result.push(element);
        }
    });

    // returning a fully flattened array
    return result;
};

console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
