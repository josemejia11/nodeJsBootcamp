// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1,4,5]);
//         reject('Things went wrong');
//     }, 2000);
// });

// doWorkPromise.then(( result ) => {
//     console.log('success', result);
// }).catch((error) => {
//     console.log('error', error);
// });

const add = ( a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
}

// add(1,2).then((sum) => {
//     console.log(sum);

//     add( sum, 5).then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// }).catch((err) => {
//     console.log(err);
// });

// Promise chaining 
add(1,1).then((sum) => {
    console.log(sum);
    return add(sum, 5);
}).then((sum2) => {
    console.log(sum2);
}).catch((err) => {
    console.log(err);
});