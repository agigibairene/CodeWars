/*
You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more 
than 1000 in some test cases due to an error in the test cases). You do not need to test for this. 
This is only here to tell you that you do not need to worry about your solution timing out.
#Output
The middle character(s) of the word represented as a string.

*/

function getMiddle(s){
    const wordLength = s.length;
    const index =  Math.floor(wordLength/2);

    if (wordLength % 2 === 0){
        return s.slice(index-1, index+1);
    }
    else{
        const middle = s[index];
        return middle;
    }
}

getMiddle("middle")


function findEvenIndex(arr){
    const total = arr.reduce((acc,curr)=>{
        acc += curr;
        return acc;
    }, 0)
    const average = Math.floor(total / 2)
    if (total % 2 === 0){
        let avg = 0;
        for (let i=0; i<arr.length; i++){
            avg += arr[i];
            if (avg === average){
                return arr[i];
            }
        }
    }
    else{
        return -1;
    }
}
console.log(findEvenIndex([20,10,30,10,10,15,35]));