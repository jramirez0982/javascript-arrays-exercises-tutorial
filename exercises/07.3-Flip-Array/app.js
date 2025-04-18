let arr = [45,67,87,23,5,32,60];

// Your code here
let arrReverse =[];
for(let i in arr){
    arrReverse.push(arr[arr.length-i-1]);
}
console.log(arrReverse);