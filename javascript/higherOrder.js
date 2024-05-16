let radius=[5,2,5,8];

let area=function(radius){
    return Math.PI*radius*radius;
}

let calculateArea=function(radius,area){
    let result=[];
    for (const value of radius) {
        result.push(area(value))
    }
}
console.log(radius);