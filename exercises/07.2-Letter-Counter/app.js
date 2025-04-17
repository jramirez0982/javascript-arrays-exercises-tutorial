let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let letra = ""
// Your code here

for (let i = 0; i < par.length; i++) {
    if (par[i] != " ") {
        letra = par[i].toLowerCase();
        if (counts.hasOwnProperty(letra) == true) {
            counts[letra] = counts[letra] + 1;
        } else {
            counts[letra] = 1;
        }
    }
}
console.log(counts);
