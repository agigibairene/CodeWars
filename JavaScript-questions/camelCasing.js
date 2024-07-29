/*
    Complete the method/function so that it converts dash/underscore delimited words into camel casing.
    The first word within the output should be capitalized only if the original word was capitalized 
    (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

    Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
    "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCasing(str) {
    if (str.length === 0){
        return  "";
    }
    // remove - _
    const splitWords = str.split(/[_ -]/);
    for (let i = 1; i < splitWords.length; i++) {
        splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1);
    }
    return splitWords.join('');
}
toCamelCasing("The_Stealth-Warrior");
console.log(toCamelCasing("The_Stealth_Warrior"));
console.log(toCamelCasing("the-stealth-warrior"));