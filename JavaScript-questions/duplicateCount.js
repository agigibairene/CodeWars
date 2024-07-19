/*
    Write a function that will return the count of distinct 
    case-insensitive alphabetic characters and numeric digits 
    that occur more than once in the input string. The input string 
    can be assumed to contain only alphabets (both uppercase and lowercase) 
    and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
    text = text.toUpperCase();

    const characters = {};
    
    const newArr = text.split("");
    // Return an obj with the number times each letter was duplicated
    for (let i=0; i<newArr.length; i++){
      if (characters.hasOwnProperty([newArr[i]])){
        characters[newArr[i]] ++;
      }
     else{
        characters[newArr[i]] = 1
      };
    }

    
    let count = 0;
    // loop through {} to count the number of characters that where duplicate 2 or more times
    for (const char in characters){
        // Increment the count if the number is greater than 1
        if (characters[char] >1){
            count ++;
        }
    }

    return count;
}

// console.log(duplicateCount("Irenei"))

