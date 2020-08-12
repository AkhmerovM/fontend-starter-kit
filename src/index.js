console.log('callsdsa');
// var a = new Promise(()=> {});
const path = require('path');
const paths = {
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
}
console.log('DAVALK1A');
const lal = [1 , 5, 5];
lal.map((i)=> {
    return i+2;
});
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);
let c = new Set([1, 5, 77, 89, 1]);
console.log(c);
let john = { name: "John" };
let sas = {...john};
console.log(john.name);
console.log(sas.name);
const set = new WeakSet();

set.add(john);
console.log(set);
console.log(set.has(john));
let asd = (name) => {
    return name;
};
[1].reduce((i, el)=> {
    console.log(el  );
}, {})