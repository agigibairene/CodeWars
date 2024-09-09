var twoSum = function(numbers, target) {
    for (let i=0; i<numbers.length; i++){
      for (let j=i+1; j<numbers.length; j++){
          if (numbers[i] + numbers[j] === target){
            // i === 0 ? i+ 1 || j === 0 ? j+ 1 
           return [i+1, j+1];
          }
      }
    }  
};
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))