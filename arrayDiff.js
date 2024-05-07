/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

function arrayDiff(a, b) {
    return a.filter(values => !b.includes(values));

}


// ALTERNATIVE SOLUTION 

function arrayDif(a,b){
    // Define an empty array
    const newArray = [];

    // Loop through the array a
    for (let i = 0; i < a.length; i++){
        // Check if a[i] is not in the array b
        if (!b.includes(a[i])){
            // push a[i] into new array
            newArray.push(a[i]);
        }
    }
    return newArray;
}

// arrayDiff([1,2],[1]);
arrayDif([1,2,2,2,3],[2,4]);
arrayDif([1,2,2,3], [3]);