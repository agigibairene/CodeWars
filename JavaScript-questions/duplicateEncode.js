/*The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only once 
in the original string, or ")" if that character appears more than once in the 
original string. Ignore capitalization when determining if a character is a 
duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word){
    // change word to lower case and split into an arra
    const lower = word.toLowerCase().split("");
    const words = [];
    // loop through the words
    for (let i = 0; i < lower.length; i++){
        // check if the last index of the current word[i] is the same as the current index
        // Which checking for duplicates
        if (lower.lastIndexOf(lower[i]) === lower.indexOf(lower[i])){
            words.push("(")
        }
        else{
            words.push(")")
        }
    }
    // join words in the array together
    return words.join("");
}

console.log(duplicateEncode("din"))