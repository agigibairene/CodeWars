var groupAnagrams = function(strs) {
    let arr = [];
    for (let i=0; i<strs.length; i++){
        for (let j=i+1; j<strs.length; j++){
            if (strs[i].split("").sort().join("") == strs[j].split("").sort().join("")){
                 arr.push([strs[i], strs[j]]);
            }
             arr.push([strs[i]]);
        }
    }
    return arr;
};
strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));

var x =  "eat";
console.log(x.split("").sort().join(""));