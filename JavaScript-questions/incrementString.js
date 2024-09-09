/*
    Your job is to write a function which increments a string, to create a new string.
    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    Examples:
    foo -> foo1
    foobar23 -> foobar24
    foo0042 -> foo0043
    foo9 -> foo10
    foo099 -> foo100

*/



function incrementString (strng) {
    // return incrementedString
    const regexNumber = /\d+$/
    const lastDigits = strng.match(regexNumber);
    
    if (lastDigits){
        const digits = lastDigits[0];
        const addOne = (Number(digits)+1).toString();
        const digitLen = digits.length;
        const finalValue = addOne.toString().padStart(digitLen, "0")
      return strng.replace(regexNumber, finalValue);
    }
    else{
      return strng+"1";
    }
    
}
// console.log(incrementString("foo1"))
console.log(incrementString("foo004"))
console.log(incrementString("009"))
console.log(incrementString("fo99obar99"))
console.log(incrementString("fo99obar199"))

