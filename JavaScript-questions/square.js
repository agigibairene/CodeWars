function squareDigits(num){
    const val = num.toString().split("");
    const result = val.map(number => Math.pow(Number(number) , 2))
    console.log(typeof(result.join("")))
    return Number(result.join(""))
}
console.log(squareDigits(3454643));