/*In this kata you will create a function that takes a
 list of non-negative integers and strings 
and returns a new list with the strings filtered out.
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/


function filter_list(l) {
    // Return a new array with the strings filtered out
    let x = [];
    for (let i=0; i<=l.length; i++){
      if (typeof(l[i]) === "number"){
        x.push(l[i]);
      }
    }
    console.log(x);
}

filter_list([1,2,'aasf','1','123',123])

let values = [1,2,'aasf','1','123',123]
const filterValues = values.filter(item =>
    (typeof(item) === "number")
)

console.log(filterValues)
