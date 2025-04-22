// Your code here
function matrixBuilder(tamMatrix){
    let builderArray = [];
    for(let i=0; i<tamMatrix; i++){
        
        let rowMatrix = [];

        for(let j=0; j<tamMatrix; j++){
            let randonNumber = (Math.round(Math.random()));
            rowMatrix.push(randonNumber);
        }

        builderArray.push(rowMatrix);
    }
    return builderArray
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
