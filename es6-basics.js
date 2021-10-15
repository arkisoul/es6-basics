// Functionsf
const fun = function() {

}

function aFun() {
    console.log('A function declaration', this)
}

function Person(name, age, numbers) {
    this.name = name
    this.age = age
    this.numbers = numbers
    // console.log('Person function', this)
}

/* class Person {
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

    getNumbers() {
        return this.numbers.map((num) => num * this.age)
    }
} */

Person.prototype.getAge = function() {
    const numarr = this.numbers.map((num) => {
        console.log('inside map fun', this)
        return num * this.age
    })
    return numarr
}

const p1 = new Person('John', 23, [1]) // constructor function
const p2 = new Person('Jane', 20, [2])

// console.log(p1.getNumbers())
console.log(p2.getAge())

// Destructuring
const numArray = [1,2,3]
const [i1, i2, ...rest] = numArray
const a = 1
const b = 2
const c = 3
const nArr = [a, b, c]
const [d, e, f] = nArr
console.log(nArr)
// console.log(i1, i2, rest)
const obj = {
    name: 'Arpit',
    age: 10,
    address: {
        street: 'MG Road',
        city: 'Mumbai',
        pincode: 400078
    },
    fun: () => 1 + 20
}
const {...restObj} = obj
const {name: fname, age, address: {street, city, pincode}, fun: funtoosh} = obj
console.log(fname, age, street, city, pincode)