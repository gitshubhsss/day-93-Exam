
function add(a,b,c,d,e,f){
    return a+b+c+d+e+f;
}

const nums=[1,1,1,1,1,1];

let result =add(...nums);
console.log(result);

//this is how the spread syntax works