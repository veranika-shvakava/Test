function getArgv1() {
    return process.argv.slice(2);
}

// console.log(getArgv1());

function getArgv2() {
    return process.argv.filter((el, ind) => ind >= 2 ? true : false);
}

// console.log(getArgv2());

function getArgv3() {
    let three = [];
    process.argv.forEach((elem, index) => {
        if (index >= 2) {
            three.push(elem);
        }
    });
    return three;
}

// console.log(getArgv3());

function getArgv4() {
    let [a, b, ...rest] = process.argv;
    return rest;
}

// console.log(getArgv4());

function getArgv5() {
    let five = [];
    for (let [key, value] of Object.entries(process.argv)) {
        if (key >= 2) {
            five.push(value);
        }
    }
    return five;
}

// console.log(getArgv5());

function getArgv6() {
    let six = [];
    for (let i = 2; i < process.argv.length; i++) {
        six.push(process.argv[i]);
    }
    return six;
}
// console.log(getArgv6());

function getArgv7() {
    let newArr = [...process.argv];
    newArr.shift();
    newArr.shift();
    return newArr;
}
// console.log(getArgv7());



function test(method, count) {
    let start = Date.now();

    for (let i = 0; i < count; i++) {
        method.call();
    }

    return (Date.now() - start) / count;
}

/* console.log('1', test(getArgv1, 1000000000));
console.log('2', test(getArgv2, 1000000000));
console.log('3', test(getArgv3, 1000000000));
console.log('4', test(getArgv4, 1000000000));
console.log('5', test(getArgv5, 1000000000));
console.log('6', test(getArgv6, 1000000000));
console.log('7', test(getArgv7, 1000000000)); */

let str = getArgv7().join(' ');

console.log('hi -', str);
