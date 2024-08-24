/*
  Write a function that takes in a string of one or more words, 
  and returns the same string, but with all words that have five or 
  more letters reversed (Just like the name of this Kata). Strings 
  passed in will consist of only letters and spaces. Spaces will be 
  included only when more than one word is present.

  Examples:
    "Hey fellow warriors"  --> "Hey wollef sroirraw" 
    "This is a test        --> "This is a test" 
    "This is another test" --> "This is rehtona test"
*/


String spinWords(String str) {
  // your code here
  List <String> words = str.split(" ");
  print(words);

  List <String> reversedWords = [words[0]];
  for (int i=1; i<words.length; i++){
    if (words[i].length < 5){
      reversedWords.add(words[i]);
    }
    else{
      String word = words[i].split("").reversed.join("");
      reversedWords.add(word);
    }
  }
  return reversedWords.join(" ");
}

void main() {
  print(spinWords("Welcome"));
  print(spinWords("Hey fellow warriors"));
  print(spinWords("This is a test"));
}