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

const string = "aba"
const str = string.split("");
const output = str.reduce((acc, curr)=>{
  if (acc[curr]){
    acc[curr] ++
  }
  else{
    acc[curr] = 1
  }
  return acc
}
, {})
console.log(output)
