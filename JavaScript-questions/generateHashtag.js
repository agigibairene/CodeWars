/*
    The marketing team is spending way too much time typing in hashtags.
    Let's help them with our own Hashtag Generator!

    Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
*/

function generateHashtag (str) {
    if (str.trim().length === 0){
        return false;
    }
    
    // trim to remove whitespaces
    const arr = str.trim().split(" ");
    const newArray =  arr.map(word =>word.charAt(0).toUpperCase() + word.substring(1));
    const joinedArray = "#" + newArray.join("");

    if (joinedArray.length === 0 || joinedArray.length > 140) {
        return false;
    }
    else{
        return joinedArray;
    }
}
// generateHashtag(" Hello there thanks for trying my Kata")
// console.log(generateHashtag( " "))
// console.log(generateHashtag(" Hello  world         "))

