// array destructaring 


let arr = [10,21,30,9,6,15];
let [a,b,...z]= arr;


console.log(a);

console.log(b);

console.log(z);
// console.log(d);
// console.log(e);

let y=15;
let x = 10;

[y,x]= [x,y];
console.log(y);

console.log(x);

//object destoring






// let getStudent = ({name,address:info})=>{
//     return `name is ${name} and address is ${info}`;
// }


// let student = {
//     name: 'atik',
//     age : 37,
//     address : 'rajshahi',
// }


// let Output = getStudent(student);
// console.log(Output);


// let getArray =([a,...b])=>{

//     console.log(`${a} and ${b}`);

// }

// let array = [10,85,22,78];

// getArray(array);


// let numbers = [10,545,61,7,36];

// let[g,h,i,j,k]= numbers;
// console.log(h);

// const [w,p,q]=[7,9,10];
// console.log(w)
// console.log(p)
// console.log(q)

// function doubleValu(p,q){
    
//     return [p*2, q*3];
// }

// let [p,q] = doubleValu(6,9);
// console.log(p)
// console.log(q)