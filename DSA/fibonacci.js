// Formula for fibonacci sequence
// F(n-1) + F(n-2)  n>1

function fibonacci(num){
    const fiboArray = [0,1];
    for (let n=2; n<=num; n++){
        fiboArray.push(fiboArray[n-1] + fiboArray[n-2]);
    }
    return fiboArray;
}

console.log(fibonacci(15))
