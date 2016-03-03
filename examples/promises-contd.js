// chaining
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

p1.then(function(value) {
    console.log('value1: ' + value);         //  '42'
    return value + 1;
}).then(function(value) {
    console.log('value2: ' + value);         //  '43'
});

// Can return promises too

let p2 = new Promise(function(resolve, reject) {
    resolve('Hello');
});

p2.then(function(value) {
    console.log(value);                    //  'Hello'
    let p3 = new Promise(function(resolve, reject) {
        resolve('How are you');
    });
    return p3;
}).then(function(value) {
    console.log(value);         //  'How are you'
});

// Creating Settled Promises
// If something is expecting a promise and if you want a promise to represent just a single known value, it is better to create settled prmise

let promise = Promise.resolve('Hello');

promise.then(function(value) {
    console.log(value);         //  Hello
});

let ap = Promise.reject(100);

ap.catch(function(value) {
    console.log(value);         //  100
});


// Promise can also resolve thenable

let thenable = {
    then: function(resolve, reject) {
        resolve(50);
    }
};

let pt = Promise.resolve(thenable);
pt.then(function(value) {
    console.log(value);     //  50
});


// Promise.all()

let p10 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p20 = new Promise(function(resolve, reject) {
    window.setTimeout(function() {
        resolve(43);
    }, 1000);
});

let p30 = new Promise(function(resolve, reject) {
    window.setTimeout(function() {
        resolve(44);
    }, 1000);
});

let p40 = Promise.all([p10, p20, p30]);

p40.then(function(value) {
    console.log('Promise.all() Response: ' + value);     //  [42, 43, 44]
});


// Promise.all will be rejected as soon as any one of promise rejects

let p11 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p21 = new Promise(function(resolve, reject) {
    reject(43);
});

let p31 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p41 = Promise.all([p11, p21, p31]);

p41.catch(function(value) {
    console.log(value);     //  43
});

// Promise.race(), will Resolve as soon as any one resolve

let p12 = Promise.resolve(42);

let p22 = new Promise(function(resolve, reject) {
    resolve(43);
});

let p32 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p42 = Promise.race([p12, p22, p32]);

p42.then(function(value) {
    console.log(value);     //  42
});

// Promise.race(), will reject as soon as any one reject
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = Promise.reject(43);

let p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.race([p1, p2, p3]);

p4.catch(function(value) {
    console.log(value);     //  43
});
