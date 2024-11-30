var n1 = 10;
console.log(n1);
var movie = "KGF";
var s1 = "you are the create of your destiny";
var s2 = "Powerful people come from powerful places  ".concat(movie);
console.log(s1);
console.log(s2);
var b1 = true;
var b2 = false;
var b3;
console.log(b1); //
console.log(b2); //
var b3;
function test() {
    return b3 = false; //
    console.log(b3);
}
console.log('test method called', test()); //
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["north"] = "north";
    CardinalDirections["east"] = "east";
    CardinalDirections["west"] = "west";
    CardinalDirections["south"] = "south";
})(CardinalDirections || (CardinalDirections = {}));
var currectDirection = CardinalDirections.north;
console.log('currectDirection', currectDirection);
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 2] = "female";
})(Gender || (Gender = {}));
console.log(Gender.male);
console.log(Gender.female);
console.log(Gender[1]);
console.log(Gender[2]);
var a1 = {
    productID: 1,
    productName: 'Iphone',
    productPrice: 150000
};
console.log(a1.productName);
//homogenous
var arr1 = ['Angular', 'Javascript'];
//heterogeous
var arr2 = ['CodeMind', 123, true];
console.log(arr2);
