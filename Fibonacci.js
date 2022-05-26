function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var sum = 0;
    for(var i = 0; i < n; i++){
        sum = fibArr[i] + fibArr[fibArr.length - 1];
        fibArr.push(sum);
    }
    fibArr.pop();
    fibArr.pop();
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
