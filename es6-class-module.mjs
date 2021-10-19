export const Person = class {
    constructor({name, age, height, weight}) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }

    greet() {
        console.log(`Hello, ${this.name}`)
    }

    about() {
        console.log(`
***********************
I'm ${this.age} years old.
I am ${this.height} cm tall.
I weigh ${this.weight} kg
***********************`)
    }
}