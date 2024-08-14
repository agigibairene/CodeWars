function palindrome(num){
   return num < 0 ? false : num === +num.toString().split("").reverse().join("");
    
}
console.log(palindrome(134));
console.log(palindrome(121));


const obj  = {a: 1, b:2};
console.log(Object.assign(obj))