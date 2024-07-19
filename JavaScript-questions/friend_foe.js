/*
    Make a program that filters a list of strings and returns a list with only your friends name in it.
    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
    Otherwise, you can be sure he's not...
    Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
    i.e.
    friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
    Note: keep the original order of the names in the output.
*/

function friend(friends){
    // create a new array of friends
    const friendNames =[];
    // loop through the array "friends"
    for (let i = 0; i < friends.length; i++){
        // check if friend[i] length is 4, if yes then add to your friends names
        if (friends[i].length === 4){
            friendNames.push(friends[i]);
        }
    }
    return friendNames;
}
console.log(friend( ["Ryan", "Kieran", "Jason", "Yous"]))


// ALTERNATIVE USING FILTER FUNCTION

function friends(names){
    const friendsNames = names.filter(name => name.length === 4);
    return friendsNames
}
console.log(friends( ["Ryan", "Kieran", "Jason", "Yous"]))
