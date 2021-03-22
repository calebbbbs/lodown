'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take a value of any kind, and return that value unchanged. 
 * 
 * @param {value} value: The value to be returned unchanged.
 * 
 * @return {value}: Returns the value inputed, unchanged. 
 * 
 * Usage:
 *  
 *  //The echoChamber\\
 *  
 *  Whatever you set echo to, the echoChamber will say it back to you. 
 * 
 *  var echo = "Caleb"
 *  let echoChamber = function identity(value){
 *    return value;
 *  }
 *   console.log(echoChamber(echo));  // -> Caleb
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * tyopOf: Designed to take in a single value, and return this value in string form.
 * Typeof <value> is given to local variable type. Since null and array will return 
 * object as their type, we must explicitly check if the value resolves to one of them,
 * before checking for a traditional object {}.
 * 
 * @param {value} value: The value to have typeof checked and returned as a string.
 * 
 * @return {type} string: Returns the data type of the value inputed as the argument.
 * 
 * Usage:
 * 
 * //What's Your Type\\
 *  let type = ['string', [], {}, undefined, 55, true, null, typeOf];
 * 
 * let whatYourType = function (array, name){
 *           let x = [];
 *           x.push(Math.floor(Math.random() * array.length))
 *           var b = array[x];
 *           return `${name}'s type is ${typeOf(b)}! Play again!`;
 *       }
 * console.log(whatsYourType(type, "Caleb")); // -> Caleb's type is boolean! Play again!
 * console.log(whatsYourType(type, "Taylor")); // -> Taylor's type is number! Play again!
 * console.log(whatsYourType(type, "Sally")); // -> Sally's type is function! Play again!
 */
 function typeOf(value) {
    let type = typeof value
    if(value === null){
        return 'null';
    } else if (Array.isArray(value)){
        return 'array';
    } else {
        return type;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array, and a number. The number is run through a number
 * of tests. It will return an empty array if the array inputed is not an array or if the number
 * is negative. It will return the whole array if the number is bigger than the length of the 
 * array. If the number is not a number or not given, the first element of the array will be returned.
 * If the number passes all the tests, the function will return a sliced version of the array, taken out
 * at the first index, and sliced as many indexes as there are numbers. 
 * 
 * @param: {array} array: The array being used within the tests, also will have return a sliced portion 
 * be part of return. 
 * @param: {number} number: The number is the number being used in the tests, also will be the number of
 * elements returned at the end of the array when function completes. 
 * 
 * return: The return has the opportunity to be 4 different outcomes, depending on whether or not
 * the array and number given both pass checks given within the function. If the array is not an array, or
 * the number is negative, the function will return an empty array. If the number is greater than the length
 * of the array, the function returns the whole array. If number is not given or undefined, the functin
 * will return the first element of the array. If all checks are passed, the .slice() method will return a 
 * new array of the elements equal to number, beginning at index 0.  
 * 
 * 
 * 
 * */
 function first(array, number) {
    if ((!Array.isArray(array)) || (number < 0)) { 
        return [];
    } else if (number > array.length) {
        return array;
    } else if ((Number.isNaN(number)) || (number === undefined)){
        return array[0];
    } else {
        return array.slice(0, number);
    }
            
} 
module.exports.first = first;
 
/**
 * last : Last is designed to take an array and a number, perform a number of checks on the 
 * arguments provided, then return an array of elements equal to <number> in reverse. 
 * Last() first checks to see that <array> is an array, and if it is not an array returns an empty
 * array. If <array> is an array, it performs a for loop that will loop through the array in reverse.
 * Last then checks to see if <number> is a number or that <number> is given, and, if either one of 
 * those fail, last() will return the last element of <array>. If <number> is negative, <array> will 
 * return an empty array. If <number> is greater than the lengh of <array>, the whole array will be
 * returned by last(). Once all of these checks pass, the funtion will then proceed to push the elements
 * into an array created to hold the elements that will be returned from the function. 
 * 
 * @param {array} array: The array that the function will use for tests, as well as holding the elements
 * to be returned at the end of the function.
 * @param {number} number: The number to be checked and then used when performing the return. The return amount 
 * of the function is equal to number provided. 
 * 
 * @return The last() function in its entirety is set to return the elements of the array in descending
 * order. When that happens, you must flip the arry array with .reverse() because the last element
 * still ended up being last in the order. If the array provided was not an array, the return of the 
 * function will be an empty array. If <number> is not a number or not given, then last() returns the 
 * last element of the array. If <number> is negative, last() returns an empty array; if number is greater
 * than the length of the array, last() returns the whole array. Once, all the checks are passed, will the 
 * elements that passed be pushed into the arry array that is then returned in reverse.
 * 
 * 
 * 
 * 
 * 
 * 
 * */
 function last(array, number){
    if (!Array.isArray(array)){
        return [];
    } else {
        let arry = [];
        for(let i = array.length - 1; i > 0; i--){
            if ((Number.isNaN(number)) || (number === undefined)){
                return array[array.length - 1];
            } else if (number < 0){
                return [];
            } else if(array.length < number){
                return array;
            } else {
                arry.push(array[i]);
            }
        }
    return arry.reverse();
    }
} 
module.exports.last = last;
 
/**
 * indexOf: Designed to take an array and a value. We search for the first occurence 
 * of the value in the array and return its index. I used the .includes() method to look
 * through the array for value, and if it was found, I returned the index with the .findIndex method.
 * The Array.findIndex() method searches through an array, and returns the index of whatever satisfies
 * the callback function. In this case it is foor the first time <value> occurs in <array>.
 * 
 * @param: (array) array: The array to be searched through.
 * @param: {value} value: The value ti be searched for.
 * 
 * @return {either index or -1} number: The index number to returned, or -1 if not found.
 * 
 * usage:
 * 
 * //Who's been invited\\
 * 
 * Check to see whosBeenInvited to the party! Search through your invited list and see!
 * 
 * invited = ["Milki", "Nyrobe", "Jimbo", "Jane", "Ben"];
 *  
 *
 * let whosBeenInvited = function (list, value){
 *      if(indexOf(list, value) === -1){
 *           return "Not Invited Yet";
 *       } else {
 *          return "Invited";
 *       }
 *   }
 *   
 *   console.log(whosBeenInvited(invited, "Jane")); // -> Invited
 *   console.log(whosBeenInvited(invited, "Bill")); // -> Not Invited Yet
 * 
 */
 function indexOf(array, value){
    if(array.includes(value)) {
        return array.findIndex((element) => element === value) ;
    } else {
        return -1; 
    }
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to look thgough an array and see if a provided value is 
 * included within the array. The .includes() method makes another appearance
 * as it searches through the <array> to look for <value>.
 * 
 * @param {array} array: The array to be looked through for value.
 * @param {value} value: The value to be looked for in the array.
 * 
 * @return {true or false} boolean: Will return true if array contains value, false if not.
 * 
 * usage:
 * 
 * //Saved in my phone\\
 * 
 * Check to see if you have a contact in your contacts list.
 * 
 * let contacts = ["Bill", "Tim", "Jonathon", "Coach", "Isabelle", "Maddy"]
 * 
 * let inMyPhone = function (array, value){
 *   if (contains(array, value) === false){
 *       return "I don't have  your number.";
 *   } else {
 *       return "Its already saved in here."
 *   }
 * }
 *
 * console.log(inMyPhone(contacts, "Tim")); // -> Its already saved in here. 
 * console.log(inMyPhone(contacts, "Halle")); // -> I don't have your number.
 */ 
function contains(array, value){
    return array.includes(value) ? true : false; 
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * Usage: 
 * Capitalize each word
 * let arr = ["i", "want", "to", "seem", "professional"];
 * 
 *   let capitalized = function(array){
 *       let capital = [];
 *       each(array, function(val, i, col){
 *           capital.push(val[0].toUpperCase() + val.slice(1))
 *       })
 *       return capital;
 *   }  
 *
 * console.log(capitalized(arr));
 */
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to loop through an array, and create a new array with all of
 * the duplicates removed. The indexOf() function we created is used to help identify
 * if the new array (pushed) contains any of the elements already, and if it does not, we want to 
 * push that character inside of the new array. After the characters that are already included
 * are disregarded, you are left with a new array containing a unique set of characters.
 * 
 * @param {array}: An array, presumably, containing a bunch of duplicate characters.
 * 
 * @return {array}: Returns an array containing only unique characters.
 * 
 * Usage:
 * 
 * //Age of people at the party\\
 * 
 * Ask everyone here how old they are, and then we will get the ages of everyone at the party.
 * 
 * let ages = [24, 21, 33, 24, 25, 21, 21, 31, 33, 25, 25, 24, 31, 21];
 * 
 * let agesAtParty = function(list){
 *     return unique(list).sort(); 
 *   }
 *
 * console.log(agesAtParty(ages)); // -> [ 21, 24, 25, 31, 33 ]
 */
 function unique(array){
    var pushed = [];
    for (let i = 0; i < array.length; i++){
        if(indexOf(pushed, array[i]) === -1) {
            pushed.push(array[i]);
        } 
    }
    return pushed;
}
module.exports.unique = unique;

/**
 * filter: Designed to take in a an array, and filter through the elements with
 * a test function provided. An empty array is given to hold the filtered elements
 * of the array argument. A for loop is performed to loop through the array to search
 * for elements that meet the requirements of the function provided as func.
 * The filter function will then proceed to push the elements that passed the test function 
 * into the filtered array that will then be returned with the filtered results. 
 * 
 * @param{array}: The array to be looped through that will have returned elements filtered out of.
 * @param{function} test: This function perform a test on the array provided, and returns a boolean. If
 * true, the elements are pushed into filtered array, if false move to next element. 
 * 
 * @return {array}: An array of filtered elements from <array> is returned from filter(). The elements
 * will be comprised of the elements who passed the test function. 
 * 
 *   Usage:
 *
 * //Names with less than five letters\\
 * 
 * let age = ["Caleb", "James", "Iggy", "Bob", "Joseph"];
 *
 *  //filter the names with less than 5 letters
 * 
 *   let fiveLetters = function(array) {
 *       lessThan = [];
 *       filter(array, function(val){
 *           if(val.length < 5){
 *               lessThan.push(val);
 *          }
 *      });
 *      return lessThan; 
 *  }
 *  console.log(fiveLetters(age)); // -> ["Iggy", "Bob"]
 * 
 */ 
function filter(array, func){
    let filtered = [];
    for (let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            filtered.push(array[i]);
        }
    }
    return filtered;
}
module.exports.filter = filter;


/**
 * reject: Designed to take an array and a function. The function
 * performs a test on each element within the array by performing a for loop
 * on <array>. The elements that fail the test are then passed to an empty 
 * array that was created to hold and return the values that failed the test function. 
 * 
 * @param {array}: The array that have the test function perform its test to.
 * @param {function} test: The test function that will perform the test on
 * <array>.
 * 
 * @return: reject() returns a new array of rejected values after the test 
 * is perfomed on <array>. This array was created before the for loop and 
 * returned outside of the for loop and if statement. 
 * 
 * Usage:
 * //workingTheDoor\\
 * 
 * Nobody in unless they're old enough to drink. 21+.
 * 
 * A group of friends all come up at the same time and you check all of their ids
 * 
 * let checkTheID = function(number){
     var swipe;
     reje
 }
 * 
 */ 

function reject(array, func){
    let rejected = [];
    for (let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false) {
            rejected.push(array[i]);
        }
    }
    return rejected;
}
module.exports.reject = reject;


/**
 * partition: Designed to take in an array and a function as parameters. The 
 * array will have the function perfrom a test on it and the results from that
 * test function will be based on some form of boolean logic. The results are then
 * pushed into separate empty arrays, one for passed results and one for failed results.
 * The two arrays are then returned together inside of another array, with the passed
 * results being before the failed results in the array.
 * 
 * @param {array}: The array that has the test from func perfromed on
 * @param {function} test: The function that contains the test to be performed on <array>.
 * 
 * @return {array}: The return is an array of arrays. Having both the failed and passed
 * arrays being pushed into the output array. Order asked for the passed array to be first,
 * followed by the failed array. 
 * 
 * 
 * 
 * 
 */
 function partition(array, func) {
    let failed = [];
    let passed = []; 
    for (let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            passed.push(array[i]);
        } else {
            failed.push(array[i]);
        }
    }
    let output = [];
    output.push(passed, failed);
    return output;
}
module.exports.partition = partition;


/**
 * map: Designed to take in a collection, and a function as parameters.
 * The each() function we created earlier is inside of map and is called upon the
 * collection and will loop through the collection, and perform a test on either the index for 
 * an array or key for an object. The vaules that pass the test will then be pushed
 * into the empty array made to hole and return the passing values. 
 *  
 * @param {array or object} collection: The collection that will be having the test
 * performed on it to return the passing elements into a new array.
 * @param{function} test: The function that will perform a test on <collection>
 * and have passing results returned in a new array.
 * 
 * @return: {array}: The map() function will return a new array of values, from either
 * an object or array, that pass the provided function. After the function tests the 
 * collection, and the passing results are pushed into the empty array created to hold
 * and return the results. The return is done outside of the each function call. 
 * 
 * Usage:
 * 
 * //positive or negative?\\
 * 
 * You're working on a science experiment and numbers contains the values returned from when you 
 * conducted your experiment. Negative intergers are what we need, so return a new array with only
 * negative numbers.
 * 
 * let numbers = [1, -5, -6, 3, 7, -9, 2, -3];
 * 
 * use map to give an array of only negative numbers
 * 
 * let negativeNumbers = function(array){
 *      var returned = [];
 *      map(array, function(val, i, col){
 *          if(val < 0){
 *              returned.push(val);
 *          }
 *      })
 *      return returned.sort();   
 * }
 * console.log(negativeNumbers(numbers)); // -> [ -3, -5, -6, -9 ] in ascending order thanks to .sort().
 * 
 */
function map(collection, func){
    var maap = [];
    each(collection, function(val, i,  col) {
        var result = func(val, i, col);
        maap.push(result);
    });
    return maap;
}
module.exports.map = map;


/**
 * pluck: Designed to take in an array o objects and a property. Using the map() function
 * we just defined above, pluck() will search through the array of objects, check to see
 * if the property parameter matches a key of an object, the key is pushed into an
 * empty array left to store and return the results of map(). It quite literally "plucks"
 * the key from the objects in the array.
 * 
 * @param {array}: The array of objects to be searched through to see if the property given matched 
 * any keys of the objects stored inside of it. 
 * @param {property}: If the property parameter matches a property value an object inside 
 * of the array, its value is pushed into the empty array ,arry. 
 * 
 * @return: Since map() returns an array of values who have passed the test, in this case 
 * the values of the properties that matched the property parameter, this tells us that the
 * return of pluck() is a new array of every property value matching the prop parameter.
 * 
 * 
 */ 
function pluck(array, prop){
    let arr = [];
    map(array, function(object, i, col) {
        arr.push(object[prop]);
    });
    return arr;
}
module.exports.pluck = pluck;


/**
 * every: Designed to take a collection and a function. The collection will have either
 * the elements or properties tested by the function. The each() we created earlier will
 * loop through either an array or object, allowing us to use this for both types of collections.
 * If all the elements or propertioes pass the function test, every() will return true. If at least one of elements 
 * or properties does not pass the test, every() will then return false. The variable everyEvery is 
 * initialized to true, then if at least one element or property does not pass funct, everyEvery is then 
 * reassigned to false. If <funct> is not provided, every() will return true unless
 * one of the elements or properties is falsy. 
 * 
 * @param {array or object} collection: The array or object that will be looped through with
 * each() and passed through the funct test.
 * @param {function} test: The test that will be performed on the collection to determine
 * if every element or property is true of something.
 * 
 * @return: The return is either true or false, assigned to and returned by the 
 * variable everyEvery. Initialized to be true, everyEvery will be true unless the test produces
 * a failed result, thus reassgning everyEvery to false, and having the return be false. 
 * 
 * 
 * Usage:
 * 
 * //Old enough for the club?\\
 * 
 * A group of friends want to go to a club, although not everyone is old enough. Let's see what happens.
 * 
 * let friendsAges = [19, 20, 19, 19, 18, 20, 19]
 *
 * let doorGuy = function(array){
 *  var gettingIn = true;
 *  every(array, function(val){
 *      if (val < 19){
 *          gettingIn = false;
 *      }
 *  })
 *   return gettingIn;
 * }
 *
 * console.log(doorGuy(friendsAges)); // -> false is printed, they didn't get passed the doorguy.
 */
function every(collection, funct){
    var everyEvery = true;
    each(collection, function(val, i, col){
    if(funct === undefined){
      if(!!col[i] == 0){
        everyEvery = false;
      }
    } else {
        if(funct(val, i, col) === false){
            everyEvery = false;
        }
    }
});
    return everyEvery;
};
module.exports.every = every;


/**
 * some: Designed to take a collection, and a function. This is a very similar function
 * to every(), except for all having to be true for it to return true, only one true result
 * is needed for some to return true. It is not looking for all of the results to be true like
 * every, only some of them. Some is nothing more than at least 1. The collection is looped though
 * agian with each() and instead of everyEvery, this time someSome is the variable holding and returning
 * the correct boolean response. It is initialized to false in some, and if at least one element or 
 * property passes the test, then it is reassigned to true. 
 * 
 * @param {array or object} collection: each() allows us to loop through either type of collection, and the collection
 * will have its elements or properties tested by <func>. 
 * @param {function} test: The func parameter is the test that will be performed on <collection> to check
 * if some of the elements or properties are true.
 * 
 * @return: The return is either true or false. The variable someSome is set to false, and will be reassigned
 * to true if at least one element or property passes the func test. 
 * 
 * 
 */ 
function some(collection, func){
  var someSome = false;
  each(collection, function(val, i, col){
      if(func === undefined){
         if(!!col[i]){
            someSome = true;
         }    
      } else {
         if(func(val, i, col)){
            someSome = true;
            }
         }
  });
  return someSome;
};
module.exports.some = some;


/**
 * reduce: Designed to take an array, a function and a seed, or also known as an accumulator.
 * The reduce () is designed to reduce the elements within <array> and record the results
 * into the seed. Each time the array loops, the elements are "reduced" together until there are 
 * no more elements to reduce and the final total is returned by the seed. 
 * 
 * @param {array}: The array that will be looped through, and have elements reduced.
 * @param {function}: The function performed that will reduce the elements in some form or fashion.
 * 
 * @return: the return of reduce() is the total recorded to seed, which will be the total of all
 * the iterations of array after it is reduced. 
 * 
 * 
 * 
 */

function reduce(array, func, seed){
    if (seed !== undefined){
    for(let i = 0; i < array.length; i++){
      seed = func(seed, array[i], i, array);
    }
    return seed;
    } else {
         seed = array[0];
        for (var i = 1; i < array.length; i++){
            seed = func(seed, array[i], i, array);
        }
        return seed;
    }
}
module.exports.reduce = reduce;



/**
 * extend: Designed to take in an object, and at least one more object. Useing the .assign()
 * and ...args spread operator, extend() is able to take in as many arguments as needed. Since
 * extend() requires more than zero arguments, ...args give you the ability to put in as many
 * arguments as you would require. Object1 has all of the arguments copied to it.
 * 
 * @param{object1} object: The object that will have all the properties of the other objects copied
 * to. 
 * @param{object2} object: Object2 will have its properties copied to object1 with the .assign() method.
 * @param{...args} spread operator: Allows there to be more arguments than parameters provided. Used to
 * add more objects to the function when called than parameters would suggest. 
 * 
 * @return: extend() will return object1 after all of the objects provided in the function call are
 * copied to it. 
 * 
 * 
 * 
 * 
 */
 
 function extend(object1, object2, ...args){
    return Object.assign(object1, object2, ...args);
};
module.exports.extend = extend;