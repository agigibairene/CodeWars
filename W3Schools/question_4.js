/*
    4. Write a JavaScript program to compute the sum of an array of integers.  
    Example : var array = [1, 2, 3, 4, 5, 6]
    Expected Output : 21
*/

function sumTwo(array, sum=0, index=0){
    if (array[index] === undefined){
        return sum;
    }

    return sumTwo(array, sum + array[index], index + 1);
}
var array = [1, 2, 3, 4, 6]
console.log(sumTwo(array));