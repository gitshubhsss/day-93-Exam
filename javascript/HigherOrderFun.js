//Higher order functions are the funtions who takes the other funtions as an parameter or return the funtions
//calulate the area of the following radious

let radius=[3,9,2,5];

let area=function(radius){//this funtion is to calculate the area of the circle
    return Math.PI * radius*radius;
}

//cicumference of the circle

let cicumference=function(radius){
    return 2*Math.PI*radius*radius;
}

let calulateArea=function(radius,callbackFuntion){
    let resultArray=[];
    for (const value of radius) {
        resultArray.push(callbackFuntion(value))
    }
    return resultArray;
}

console.log(calulateArea(radius,cicumference));