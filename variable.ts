var n1: number = 10;

console.log(n1);


var movie = `KGF`
var s1: string = "you are the create of your destiny" ;

var s2: string = `Powerful people come from powerful places  ${movie}`;

console.log(s1);
console.log(s2);

var b1 : boolean = true;

var b2 : boolean = false;

var b3 : boolean;

console.log(b1); //
console.log(b2); //

var b3 : boolean ;

function test(){
    return b3 = false //
    console.log(b3)
}
console.log('test method called', test());//


enum CardinalDirections {
    north = 'north',
    east = 'east',
    west = 'west',
    south = 'south'
}

let currectDirection =  CardinalDirections.north
console.log('currectDirection',currectDirection);



enum Gender {
    male = 1,
    female = 2
}
console.log(Gender.male);
console.log(Gender.female);

console.log(Gender[1])
console.log(Gender[2])



var a1 = {
    productID: 1,
    productName : 'Iphone',
    productPrice : 150000 

}
console.log(a1.productName);

//homogenous

var arr1: Array <string> = ['Angular', 'Javascript'];

//heterogeous
var arr2: any[] = ['CodeMind', 123, true];

console.log(arr2);









