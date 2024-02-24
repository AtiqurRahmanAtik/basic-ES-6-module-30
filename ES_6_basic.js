// function sum(a=10,b=0,c){
    
//     let total = a + b;
//     return total;
// }

// let total = sum(5,1)
// console.log(total);

let fName = 'atik';
let lName = 'rahman';

// let fullName = "my name is : "+fName +" " + lName;

let fullName= `my name is ${fName}    ${lName}`
console.log(fullName);


let names= `llaoitjn falgaggj alggl
altiojfm alglal
altiojfm alglal`;

console.log(names);



//  (num1,num2) =>{

//     let sum = num1 + num2;
//     return sum; 
// }

// let sums = (10,15)

//  console.log(sums);


//ES-6

// let add = function(x,y){
//     let sum = x+y;

//     return sum;
// }

// console.log(add(11,15))

// let add = (a,b)=>{
//     return a + b;

// }

// console.log(add(11,22));

let add = (a,b,c)=>a+b+c;
console.log(add(10,20,30));

let sum= (obj)=> obj.age;

let obj = {
    name :'atik',
    age : 25,
}
console.log(sum(obj));


let getArray = (arr)=> arr[3];

let array = [10,5,7,9,23];

console.log(getArray(array));


let getPi =()=> Math.PI;

console.log(getPi());



// let getMultiLineFun= (x,y,z)=>{

//     let sum = x+y + z;
//     let mul = x*y*z;

//     let result = sum + mul;
//     return `sum is ${sum} multiple is ${mul} and result is ${result}`;
// }

// let func = getMultiLineFun(10,5,10);

// console.log(func);



// let arrowFunc= {

//     name:'atik',
//     age :36,
//     info: ()=>{
//        return this.name;
//     }
// }

// console.log(arrowFunc.info())

// // Arrow function
// const objArrow = {
//     name: 'Alice',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// // Regular function
// const objRegular = {
//     name: 'Bob',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// objArrow.greet(); // Output: Hello, undefined!
// objRegular.greet(); // Output: Hello, Bob!



//speat

let poorCounty = ['bangladesh','india'];

let richCounty = [...poorCounty,'usa','uk','australia','canada'];

console.log(richCounty);


let getMath = Math.max(10,15,30,9,45);
console.log(getMath);

let arr = [29,44,5,23];
let a = Math.max(...arr);
console.log(a);


// let fried= [15,25,33,40];
// let bondhu = fried;

// let dosto = [...fried];
// console.log(dosto)

// fried.push(12);
// console.log(dosto)

// console.log(fried);


let student ={
    name:'tanvir',
    age: 27,
    address : 'rajshahi',
    
}


console.log(student)
let keys = Object.keys(student);

let values = Object.keys(student);
// console.log(keys)
console.log(values);

let enties = Object.entries(student);
// console.log(enties);



Object.freeze(student);
student.add='dhaka';

console.log(student);