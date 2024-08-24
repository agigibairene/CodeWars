/*
    An isogram is a word that has no repeating letters, consecutive or 
    non-consecutive. Implement a function that determines whether a string that 
    contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

    Example: (Input --> Output)

    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    const toLower = str.toLowerCase();
    let dict = {};
    const words = toLower.split("");
    
    for (let i=0;  i<words.length; i++){
      if (dict.hasOwnProperty(words[i])){
        return false;
      }
      dict[words[i]] = 1;
    }
    return true;

}

console.log(isIsogram("Dermatoglyphics"));