// function asyncFunc() {
//     const blank = [];
//     setTimeout(() => blank.push('DONE'), 1000);
//     return blank;
// }
// const blank = asyncFunc();
// console.log('blank array before settimeout', blank)
// // Wait until the value has been filled in
// setTimeout(() => {
//     const x = blank[0]; // (A)
//     console.log('Result: '+x);
// }, 1100);

function asyncFunc(cb) {
    const blank = [];
    setTimeout(() => {
        blank.push('DONE')
        cb(blank)
    }, 100);
    return blank;
}
asyncFunc((result) => {
    const x = result[0]; // (A)
    console.log('Result: '+x);
});
// Wait until the value has been filled in