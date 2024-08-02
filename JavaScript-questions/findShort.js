/*
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    const arrWords = s.split(" ");
    let short = 8;
    for (let i=0; i<arrWords.length; i++){
      if (arrWords[i].length < short){
        short = arrWords[i].length;
      }
    }
    return short;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("Let's travel abroad shall we"));
