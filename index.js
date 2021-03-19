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
 * 
 *      let type = ['string', 'array', 'object', 'undefined', 'number', 'boolean', 'null', 'function']; 
 *
 *      let randomType = function (array){
 *          for (let i = 0; i < array.length; i++){
 *              return Math.floor(Math.random() * array.length)
 *          }
 *      }
 *
 *      let yourType = function 
 * 
        let type = ['string', 'array', 'object', 'undefined', 'number', 'boolean', 'null', 'function']; 
  
         let random = function (array){
            let x = [];
             x.push(Math.floor(Math.random() * array.length))
            }
            return array[x];
        }
    
        console.log(random(type));
 *
 * 
 * 
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
};
module.exports.typeOf = typeOf;

/**
 * first
 * */
 
/**
 * last
 * */
 
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
    invited = ["Milki", "Nyrobe", "Jimbo", "Jane", "Ben"];
    
    let whosBeenInvited = function (list, value){
        if(indexOf(list, value) === -1){
            return "Not Invited Yet";
        } else {
            return "Invited";
        }
    }
    
    console.log(whosBeenInvited(invited, "Jane")); // -> Invited
    console.log(whosBeenInvited(invited, "Bill")); // -> Not Invited Yet
 * 
 */
 function indexOf(array, value){
    if(array.includes(value)) {
        return array.findIndex((element) => element === value) ;
    } else {
        return -1; 
    }
}
module.exports.indexOf = each;
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
