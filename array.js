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
function display(id, name, role) {
    console.log("Id :", id);
    console.log("NAme :", name);
    if (role != undefined) {
        console.log("Role :", role);
    }
}
display(1, 'jack', 'Anu');
