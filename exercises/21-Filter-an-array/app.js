let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

let resultingNames = allNames.filter(function (name) {
    if (name[0] === "R") return name;
}
)
// Your code here

console.log(resultingNames);
