let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];


let newArray = theBools.map(function (item) {

    if (item === 0) return "woko";
    else if (item === 1) return "wiki";

})

console.log(newArray);

// Your code here
