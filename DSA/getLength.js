/*
    Challenge: getLength
`Get the length of an array using recursion without accessing its length property.

Input: {Array} array - array whose length is sought
Output: {Number}
*/

function getLength(array, count=0) {
	// let count = 0;
    // for (let i = 0; i < array.length; i++) {
    //     count++;
    // }
    // return count;
    if (array[count] === undefined){
        return count;
    }

    return getLength(array, count+1);

}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
