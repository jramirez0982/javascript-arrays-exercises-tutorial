let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let dataTypeMix=[];

for(let i in mix){
    dataTypeMix.push((typeof(mix[i])));
}

console.log(dataTypeMix);
