const data = {
    Sophia: {
        id : 33,
        study :[
            {
                primary:[
                    {
                        school_name:'abc primary'

                    },
                    {
                        location : 'Peters burg'
                    },
                ]
            },

            {

                secondary:
                [
                    {school_name : 'secndory abc'},
                    {location : 'Rajshahi'},
                ]
            }
           
        ] 
    },
}


// const SophiaLocation = data.Sophia.study[1].secondary[1].location;

console.log(data.Sophia.study[1].secondary[1].location);



//problem 2 

const student ={
    2222: {
        name: 'jack',
        section : 'c',
        class : 'BSC',
        address : {
            "building no": 12,
            "street": "St.jonson",
            "city": "petersburg",
            "county": "ok"
        }
    },

   3333: {
        name: 'Hery',
        section : 'D',
        class : 'Engineer',
        address : {
            "building no": 85,
            "street": "DC road ",
            "city": "kochukhet",
            "county": "Bangladesh"
        }
    }
}

console.log(student[2222].address.city)
console.log(student[3333].address.county)


//problem 4

const arr = [1,3,5,7,9];

let arrMap= arr.map((x) => x+1);
console.log(arrMap);


//problem 5

const filterMap = [33,50,79,78,90,101,30];

// for(let i=0; i<filterMap.length; i++){
//     if(filterMap[i] % 10 === 0){
//         console.log(filterMap[i])
//     }
// }

let filter = filterMap.filter((x) => {
   if( x% 10 ===0){

       return x;
   }
})

// console.log(filter)

let find = filterMap.find((x)=> {
    if(x % 10 === 0){
        return x;
    }
})

// console.log(find);


//problem 5

const instructor = [
    {name: 'nodi',age :28, position:'Senior'},,
    
    {name:'Akil',age:26, position : 'Junior'},
    {name: 'Shobuj',age:30,position:'Senior'},
]


let getPosition = instructor.filter((x) =>{
    if(x.position ==='Senior'){
        return x;
    }
})

// console.log(getPosition);


//problem 6

const people =[
    {name:'Meena', age: 20},
    {name:'Rina', age: 27},
    {name:'Suchorita', age: 22},
];


let reduce = people.reduce((p,c)=>{

    return p + c.age;
},0)

// console.log(reduce)