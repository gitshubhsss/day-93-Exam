//symbols are the premitive datatypes introduce in ES6 
//it is basically used to create a unique identifier keys that avoid collision

let sym=Symbol('test');

let obj={
    [sym]:"value"
}
console.log(obj[sym]);