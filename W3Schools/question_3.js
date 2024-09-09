/*
    3. Write a JavaScript program to get integers in the range (x, y) using recursion.  
    Example : range(2, 9)
    Expected Output : [3, 4, 5, 6, 7, 8]
*/

function range(start, target, result=start+1, arr=[]) {
    if (result >= target){
        return arr;
    }   
    else{
       arr.push(result); 
        return range(start, target, result+1, arr);
    }
}
console.log(range(2, 9))