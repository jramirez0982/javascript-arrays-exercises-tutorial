let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

let mySampleArrayReverse = [];
// Your code here
let longitudArreglo = mySampleArray.length;

for(let i = 0; i<longitudArreglo-1; i++){
    mySampleArrayReverse[longitudArreglo-1-i] = mySampleArray[i];
    console.log(mySampleArray[longitudArreglo-i-2]);   
}

console.log(mySampleArrayReverse);

