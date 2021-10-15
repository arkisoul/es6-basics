// es6 class
// string, number, bool,
// array - collection of primitive data types
// object

// function Person(name, age, numbers) {
//     this.name = name
//     this.age = age
//     this.numbers = numbers
// }

// Person.prototype.getAge = function() {
//     const numarr = this.numbers.map((num) => {
//         return num * this.age
//     })
//     return numarr
// }

// function Employee(title, department) {
//     this.title = title
//     this.department = department
// }

class Person {
    constructor(name, age, numbers) {
        this.name = name
        this.age = age
        this.numbers = numbers
    }

    getAge() {
        return this.age
    }

    getName() {
        return this.name
    }

    greet() {
        return console.log(`Hello ${this.name}`)
    }

    static helloWorld() {
        console.log('Hello World')
    }
}

class Employee extends Person {
    constructor(name, age, numbers, title, deparment) {
        const num = numbers
        super(name, age, numbers)
        this.title = title
        this.deparment = deparment
    }

    greet() {
        return super.greet() +  'Hello, World'
    }

    getTitle() {
        return `${super.getName()} is a ${this.title}` 
    }

    getDepartment() {
        return this.deparment
    }
}

const p1 = new Person('John', 23, [1]) // constructor function
console.log(p1)
// const p2 = new Person('Jane', 20, [2])
const e1 = new Employee('Jane', 24, [1,2,3], 'Software Engineer', 'Front End Development')
console.log(e1.getAge())
Employee.helloWorld()

const Animal = class Me {
    constructor(type, legs) {
        this.type = type
        this.legs = legs
    }

    walk() {
        console.log(`${this.type} walks on ${this.legs} legs`)
    }
}

const Bird = class extends Animal {
    constructor(type = 'Duck', legs, fly) {
        super(type, legs)
        this.fly = fly
    }

    flying() {
        console.log(`${this.type} is flying`)
    }
}
// console.log(Me) // generates reference error because Me is not available after the class expression
const dog = new Animal('Dog', 4)
dog.walk()
const d = new Bird('Duck', 2, true)
d.walk()
d.flying()