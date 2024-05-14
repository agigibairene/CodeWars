/*
    Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
    Examples:
    "Hey fellow warriors"  --> "Hey wollef sroirraw" 
    "This is a test        --> "This is a test" 
    "This is another test" --> "This is rehtona test"
*/


function spinWords(string) {
    // split words into an array 
    const newArray = string.split(" ");

    const words = [];

    // loop through words using forEach function
    newArray.forEach(element => {

        // Check if the word length is greater than 4
        if (element.length > 4){

            // split words into letters, reverse them using reverse() and join them again
           const reversedWord = element.split("").reverse().join("");
           words.push(reversedWord)
        }
        else {
            // return the word if is  <= 4 characters
           words.push(element)
        }
    });

    console.log(words.join(" "))
}

spinWords("Hey fellow warriors")