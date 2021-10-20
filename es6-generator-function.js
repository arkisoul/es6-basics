const funExp = function() {} // function expression
function funDec() {} // function declaration
const objFun = {
    funObj: function() {}
}
function Person() {} // function constructor
class Employee {
    greet() {} // class method
}
async function asynFun() {
    await someAsyncTask()
} // async function

function* generatorFunction() {
    console.log('Before 10')
    yield 10;
    console.log('After 10')
    yield 20;
    console.log('After 20')
}

const genObj = generatorFunction()
const first = genObj.next()
console.log(first)
console.log('After calling first next')
const second = genObj.next('')
console.log(second)
const end = genObj.next()
console.log(end)

async function someAsyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done')
        }, 2000);
    })
}

function* generatorFunction2() {
    const result = yield someAsyncTask()
    console.log(result)
}
const genObj2 = generatorFunction2()
const res = genObj2.next('some values')
console.log(res)

// Uses of generator functions
// Create iterables
// Data providers
// Data consumers

// Observables vs Promises
// Rxjs library
// Redux vs Mobx

// Observable => Subscribers