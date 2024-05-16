function *genNumbers(){
    let i=0;
    yield 1;
}

let gen=genNumbers();
console.log(gen.next());

// ---------------->  { value: 1, done: false } 