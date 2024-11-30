// 2 type of array we have one is homogenus and heterogeius

// var course = ["Angular", "ReactJs", ".Net"] ;

// for(let i = 0 ; i <course.length; i++){

// }

// var student = {
//     firstName: 'jack',
//     lastName: 'Sparrow',
//     score:90
// };

// let{firstName, lastName, score} = student;

// var arr : number [] = [20, 30, 12, 30, 100, 20];
// arr.splice(2,3,88,99); // 2nd posution se o 3 value delete karega 

// console.log(arr.toString());

// var a = ['20']; //43235345

// var b = [20]; //4342343 memory location is diff

// console.log(a[0] === b[0]);  // false 

//the process of assining array elememnt to indual variable is called?
//ans array De-structuring





// optional parameter ?
// function display(id: number, name: string, role?:string) {
//     console.log("Id :",id);
//     console.log("NAme :",name);
//     if(role != undefined){
//         console.log("Role :",role);
//     }
// }
// display(1,'jack', 'Anu')

//Default values
function display(id: number, name: string, role:"Guest User") {
    console.log("Id :",id);
    console.log("Name :",name);
    if(role != undefined){
        console.log("Role :",role);
    }
}
display(1,'jack', 'Ram') //agr hm call karte time jo derahe hai o hi console honga agr nai diya toh fir parameter ka ka arument pass honga



// function overload
function doubleMe(x: number);
function doubleMe(x: string);
function doubleMe(x: string[]);

function doubleMe(x: any){

}
doubleMe(10); // number call honga 1st wala ...mhnje je value pass kru tech data type nusar follow honaer

confirm()

alert()

var s1 = "kdfhdkj"; 
s1.charAt(0);// mendatry 


//rest parameter

var product = function(...nums); //rest parameter must be in the last of the parameter


//arrow function
var hello = (name:string): string => {
    return "Hello "+ name;
}
console.log(hello('jack'));


// we can declear the array in 14 form ....
let arr1: boolean[] = [];

let arr2: boolean[] new Array();

let arr3: boolean[] = Array();

let arr4: Array<string> = [];

let arr4: Array<boolean> = new Array();

//Interface
//is contract bet 2 parties 

//SOLID ---> solid jo hai guidlines pe kam krte hai ground level pe nai 

//Desing pattern === > lower level pe kam krte hai ,,,ground level pe

//O--- open for extension and close for modification

//I-- Interface segergation
//An interface is stucture while acts as a contract









































