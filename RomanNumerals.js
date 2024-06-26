/*
    Create a function that takes a Roman numeral as its argument and returns its value as a 
    numeric decimal integer. You don't need to validate the form of the Roman numeral.
    Modern Roman numerals are written by expressing each decimal digit of the number to 
    be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is 
    rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
    The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1
*/

function solution (roman) {

    const romanNumerals ={
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    }

    let sum = 0;

    for (let i = 0; i < roman.length; i++) {
        // check if there is a next value && check if the CURRENT NUMERICAL value is less than the NEXT NUMERICAL value
        if ( i < roman.length - 1 && romanNumerals[roman[i]] < romanNumerals[roman[i+1]]){

            // if the next character is greater than the current value 
            // substract the smaller value (CURRENT VALUE) from the bigger value (NEXT VALUE i+1) 
            sum += (romanNumerals[roman[i+1]] - romanNumerals[roman[i]]);
            
            // skip to the next character so you don't make double addition of the same character
            i++;
        }
        else{
            sum += romanNumerals[roman[i]];
        }
    }
        
    console.log(sum);
}

// solution("MCMXC")
// solution('MDCLXVI')