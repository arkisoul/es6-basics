import {Person} from './es6-class-module.mjs'

export class Employee extends Person {
    constructor({name, age, height, weight, department}) {
        super({name, age, height, weight})
        this.department = department
    }
}

const e1 = new Employee({'age': 24, name: 'Jane', height: 170, weight: 55, department: 'Software Development'})
e1.greet()
e1.about()