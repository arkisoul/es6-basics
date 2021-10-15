// const a = 1
// const b = 2
// const c = 3
// const nArr = [a, b, c]
// console.log(nArr)
// const [d, e, f] = nArr
// console.log(d, e, f)

// const obj = {
//     name: 'Arpit',
//     age: 10,
//     address: [{
//         street: 'MG Road',
//         city: 'Mumbai',
//         pincode: 400078
//     }],
//     fun: () => 1 + 20
// }
// const {name: name, age: age, address: [{ street: addStreet}]} = obj

// function demo() {
//     return {name: 'John', age: 10}
// }

// const {name: name, age: age} = demo()
// // console.log(name, age)
// const a = [{name: 'John', age: 10}, {name: 'Jane', age: 20}];
// a.map(({name: name, age: age}) => {
//     console.log(name, age)
// })

// const b = [[1,2], [3,4]];
// b.map(([a, b]) => {
//     console.log(a, b)
// })

// const [a, b, c,  d, ...restOfFruits] = ['Apples', 'Mango', 'Banana', 'Grapes']
// // console.log(a, b, c, d, restOfFruits)

// function testFun(o, n = 0, m = 0, ...rest) {
//     console.log(o, n, m, rest)
// }

// const abc = [10,20,30,40,50,60]
// testFun(...abc)
// console.log(Math.max(...[10,20,30,40,50,60]))
// const xyz = [...abc, ...[70, 80, 90, 100]]
// console.log(xyz)


// const objA = {k1: true, k2: false, k4: {'a': 'hello'}}
// console.log(objA)
// const objC = objA
// const objD = Object.assign({}, objA)
// console.log(objA, objC)
// const objB = {...objA, k4: {...objA.k4}}
// console.log(objA, objB)
// objC.k1 = 'Hello world'
// objA.k4.a = 'Some other random value'
// console.log(objA, objC, objB, objD)

function demoNameParams({name: name = 'Guest', age: age = 10, gender: gender = 'Male', ...rest}, callback) {
    console.log(name, age, gender, rest)
    const str = `My name is ${name}. My age is ${age}. I am a ${gender}. I work in ${rest.deparment}`
    callback(str)
}

const person = {age: 25, gender: 'Female', title: 'Mr', deparment: 'Software Development'}
demoNameParams(person, (arbitaryName) => {
    console.log('A callback function', arbitaryName)
})