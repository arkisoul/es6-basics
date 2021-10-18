// function getProducts(callback) {
//     const xml = new XMLHttpRequest()
//     xml.open('GET', 'https://fakestoreapi.com/products')

//     xml.onload = function(result) {
//         if(result.status === 200) {
//             console.log('in onload', result.response)
//             callback(result.response)
//         }
//     }

//     xml.onerror = function(error) {
//         console.log(error)
//     }
//  xml.send();
// }

// getProducts(function (products) {
//     console.log('In callback fun', products)
// })
// document.getElementById('id').addEventListener('click', cb)

// $("element").on('click', function() {})


// function asyncFun1() {
//     setTimeout(() => {
//         console.log('async Fun 1')
//     }, 1000);
// }

// function asyncFun2() {
//     setTimeout(() => {
//         console.log('async Fun 2')
//     }, 1000);
//     console.log('outsite timeout in fun 2')
// }

// function asyncFun3() {
//     setTimeout(() => {
//         setTimeout(() => {
//             console.log('async Fun 3')
//         }, 0)
//     }, 1000);
// }
// asyncFun1()
// asyncFun3()
// asyncFun2()

// JS Event Loop
// Call Stack

/**
 * Promises in javascript have three states
 * Pending
 * Fullfill/Resolved
 * Canceled/Rejected
 * Completed
 */
// const fs = require('fs')

// fs.readFile('config.json',
//     function (error, text) {
//         if (error) {
//             console.error(error)
//             console.error('Error while reading config file');
//         } else {
//             try {
//                 const obj = JSON.parse(text);
//                 console.log(JSON.stringify(obj, null, 4));
//             } catch (e) {
//                 console.error('Invalid JSON in file');
//             }
//         }
//     });

// function readFilePromisified() {
//     return new Promise(function(resolve, reject) {
//         fs.readFile('config.json',
//             function (error, text) {
//                 if (error) {
//                     reject('Error while reading config file');
//                 } else {
//                     resolve(text)
//                 }
//             });
//     })
// }

// readFilePromisified()
//     .then(function (res) {
//         console.log('Res', JSON.parse(res))
//         return promise
//     })
//     .then()
//     .then()
//     .catch(function (error) {
//         console.log('error', error)
//     })

// console.log('A');
// identity('B', function step2(result2) {
//     console.log(result2);
//     identity('C', function step3(result3) {
//        console.log(result3);
//     });
//     console.log('D');
// });
// console.log('E');

// function identity(input, callback) {
//     setTimeout(function () {
//         callback(input);
//     }, 1000);
// }
// function normalFunction() {
//     return true
// }
// console.log('A');
// identity('B')
//     .then((result2) => {
//         console.log(result2);
//         return identity('C')
//     }).then(result3 => {
//         console.log('D');
//         console.log(result3)
//         // return Promise.resolve('abc')
//         return Promise.reject('An error occurred while handling the promise')
//     }).then(result4 => {
//         console.log(result4)
//     }).catch(error => console.error(error))
// console.log('E');

// Promise.all([identity('B'), identity('C', true), identity('D')]).then(([res1, res2, res3]) => {
//     console.log('Promise all res', res1, res2, res3);
// }).catch(error => console.error('error promise all', error))

// function identity(input, shouldReject = false) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             if(shouldReject) reject('Rejected')
//             resolve(input)
//         }, 1000);
//         // An api call or database transction operation would happen here.
//     })
//     return promise
// }

function funA(input, ms = 2000, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject) reject(`Error! [funA] Promise rejected for input ${input}`)
            resolve(input)
        }, ms);
    })
}

function funB(input, ms = 1000, shouldReject = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject) reject(`Error! [funB] Promise rejected for input ${input}`)
            resolve(input)
        }, ms);
    })
}

function funC(input, ms = 500, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject) reject(`Error! [funC] Promise rejected for input ${input}`)
            resolve(input)
        }, ms);
    })
}

// funA('John')
//     .then((resA) => {
//         console.log(resA)
//         return funB(`${resA} funB variation`, 3000, false)
//     }).then((resB) => {
//         console.log(resB)
//         return funC(`${resB} funC variation`, 2500)
//     }).then((resC) => {
//         console.log(resC)
//     }).catch(error => console.error(error))

// const promises = ['some', 'values'].map((v) => {
//     return new Promise((resolve, reject) => {

//     })
// })

// Promise.all(promises)

// Promise.all([funA('John'), funB('Jane', 3000, false), funC('Jonas', 2500)])
//     .then((arr) => {
//         console.log(arr)
//     }).catch(error => console.error(error))

// Promise.allSettled([funA('John'), funB('Jane', 3000), funC('Jonas', 2500)])
//     .then((arr) => {
//         console.log('res', arr)
//     }).catch(error => console.error('err', error))


funA('John')
    .then((resA) => {
        console.log(resA)
        funB(`${resA} funB variation`, 3000, false).then((resB) => {
            console.log(resB)
            funC(`${resB} funC variation`, 2500).then((resC) => {
                console.log(resC)
            })
        })
    }).catch(error => console.error(error))

async function main() {
    try {
        const resA = funA('John')
        console.log(resA)
        const resB = funB(`FunB variation`, 1000, false)
        console.log(resB)
        const resC = funC(`FunC variation`)
        console.log(resC)
        const [res1, res2, res3] = await Promise.all([resA, resB, resC])
        console.log(res1, res2, res3)
    } catch (error) {
        console.error(error)
    }
}

main()

async function funD() {
    const a = await funA();
}

const fun = async function() {}
const fun1 = async () => {}
// const fun2 = [].map(async function () {
//     await 
// })

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(result => console.log(result))
//     .catch(error => console.error(error))