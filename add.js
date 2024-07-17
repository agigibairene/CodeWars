/*
    We need to sum big numbers and we require your help.
    Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
    Example
    add("123", "321"); -> "444"
    add("11", "99");   -> "110"
*/

function add(a, b) {
    const num1 = BigInt(a);
    const num2 = BigInt(b);

    const sum = num1 + num2;
    return sum.toString();

}
console.log(add("123", "321")); //
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))