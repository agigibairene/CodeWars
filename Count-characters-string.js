/*The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
    // TODO
    const characters = {}
    
    const newArr = string.split("");

    for (let i=0; i<newArr.length; i++){
      if (characters.hasOwnProperty([newArr[i]])){
        characters[newArr[i]] ++;
      }
     else{
        characters[newArr[i]] = 1
    };
    
    }
    return characters;
}
