/*
    6. Write a JavaScript program to get the first n Fibonacci numbers.  
    Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
*/

function fibonacci(n, arr=[0,1]){
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return arr;
    else{
        const nthValue = arr[arr.length -1] + arr[arr.length - 2];
        arr.push(nthValue);
        return fibonacci(n-1, arr);
    }
}

console.log(fibonacci(5));