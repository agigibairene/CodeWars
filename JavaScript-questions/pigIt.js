/*
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
    Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    const arr = str.split(' '); 

    // Checking if every letter is a letter or a symbol
    function alphabet(word){
        for (let i = 0; i < word.length; i++){
            if ((word[i] >= "a" && word[i] <= "z")  || (word[i] >= "A" && word[i] <= "Z")){
                return true;    
            }
            else{
                return false; 
            }
        }
       
    }

    const newArr = arr.map(item => {
        if (alphabet(item)){
           return item.slice(1) + item.charAt(0) + "ay"
        }
        else{
            return item
        }
    }
    ).join(" ");

    return newArr;
}
// pigIt('Pig latin is cool');
// console.log(pigIt('Hello world !')); 