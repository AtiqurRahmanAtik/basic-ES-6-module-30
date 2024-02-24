// class car {

//     drive(a){
        
        
//     }
//     constructor(model,price){
//         this.model= model;
//         this.price = price;
//     }

// }

// const BMW = new car('BMW', '3500$');
// const Audi = new car('Audi', '4500$');
// BMW.drive();
// console.log(BMW)

// console.log(Audi);



class car{
    constructor(model,price ){
        this.model = model;
        this.price = price;
    }

    drive(){
        console.log('you can drive today');
    }
}


class Bus extends car{
    constructor(model,price,ticket){
        super(model,price);
        this.ticket;

    }
}

const GreenLine = new Bus('Greenline','4100$','850');
console.log(GreenLine)

// const Audi = new car('Audi','5100$');
// Audi.drive();
// console.log(Audi);



class Person{
    constructor(name,age){
        this.name=name;
        this.age = age;
    }

    run(){
        console.log(`my name is ${this.name} and i am ${this.age} old`);
    }

    eat(){
        this.run();
    }
}

const atik = new Person('atik',36);
// atik.run();
atik.eat();
console.log(atik)


let getNames = {

    'name' : 'atik',
    'age' : 36,
    address : 'rajshahi',
}

// const a = 'age';

console.log(getNames['age']);