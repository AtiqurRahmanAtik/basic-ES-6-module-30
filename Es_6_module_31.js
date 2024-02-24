let arr = [{name:'atik', age: 36, address: 'rajshahi'}];

let [a] =arr;
console.log(a.name);
console.log(arr[0].age);

//nasted object

// let student ={
//     name : 'atik',
//     age : 36,
//     info: [
//         {name: 'tanvir', age:27, address : 'rajshahi'},
//         {brand: 'samsung',price : 25000, madeIn: 'bangladesh'},
//     ],
//     isEngineer : true,

// }

// console.log(student.info[1].madeIn='usa');



const user = {
    id : 5001,
    name : 'dhaka',
    address : {

        street :{
            first : '54/1 uttor side ',
            second : 'poribag er gobal ',
            third : 'no dorai'
        } ,
        city : 'dhaka'
    }
}



const user2 = {
    id : 5001,
    name : 'dhaka',
    address : {

        info :{
            first : '54/1 uttor side ',
            second : 'poribag er gobal ',
            third: 'no dorai'
        } ,
        city : 'dhaka'
    }
}



console.log(user.address.street.third);
console.log(user2.address.street?.third);


// let numbers = [10,5,20,30,9];

// let sum = 0;
// let array = [];
// for(let x of numbers){
//     let mul = x * 2;

//     sum = sum + mul;
//     array.push(sum);
// }
// console.log(sum);
// console.log('array is :', array);


//forEach() function

// let arrMap = [10,25,65,9,4];

// let array =[];
// arrMap.forEach(function(x){
//    let sqrt = x*2;
//    array.push(sqrt);
// })
// console.log(array)


// let arrMap = [10,25,65,9,4];

// arrMap.forEach(function(x,index,arr){
    
//     arr[index]= x + 5;
   
// })

// console.log(arrMap);



let arrMap = [10,25,65,9,4];



// let x = arrMap.map((n)=>n*2);
// console.log(x)

let plus = arrMap.map((x) => x+5)

// console.log(plus);

let div = arrMap.map((x)=> x / 2);
console.log(div)




let array = arrMap.map(function(x){

   return x * 12;
})

console.log(array)

let mapFun = (n) => n* 2;
let x = arrMap.map(mapFun);
console.log(x)



let names = ['atik','rony','tuhimhumal','jim'];


let namesFilter = names.filter((x)=> x.length > 3)
console.log(namesFilter)
// let nameLen = names.map((size) => size[0]);
// console.log(nameLen)



// let forEach= [10,15,35,9,7];

// let x = forEach.forEach(function(x) {
//     let sum = x *2;
    
//     console.log(sum);
// })




//filter function
// let nums = [7,15,320,15,42,21,8];

let nums=[7]


// let numsFilter = nums.filter((x) => x % 2==0);
// console.log(numsFilter)

let numsFind = nums.find((x) => x>20);
console.log(numsFind);




//reduce function
let numsreduce =  nums.reduce((p,c)=>{
    return p+c;
},7);

console.log('reduce is : ',numsreduce);



let products= [
    {id:1, name: 'hp',price:45000},
    {id:2, name: 'dell',price:55000},
    {id:3, name: 'lenovo',price:25000},
    {id:4, name: 'apple',price:35000},
];

// let productsName = products.map((x) => x.name);
// console.log(productsName)

// let productsName = products.forEach((x)=>{
//     let names = x.id;
//     console.log(names)
// })

// let productsFiter = products.filter((x) =>x.price>35000);
// console.log(productsFiter)

let productsReduce = products.reduce((p,c)=> p+c.price,0)

console.log(productsReduce)





class Teacher {

    speak(){
        console.log('talk to me sir');
    }

    constructor(name,subject){
        this.name = name;
        this.subject= subject;
    }
}

const atik = new Teacher('tanvir','javascript');

console.log(atik)
atik.speak();