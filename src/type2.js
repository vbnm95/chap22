
// 1. number
console.log(typeof 100);
console.log(typeof 100.5);

// 2. string
console.log(`"A" type = ${typeof "A"}`);
console.log(`'A' type = ${typeof 'A'}`);

// 3. boolean
console.log(`true is ${typeof true}`);
console.log(`false is ${typeof false}`);

// 4. undefined
let a;
console.log(`undefined is ${typeof a}`);

// 5. function
console.log(`function(){} is ${typeof function(){}}`);

// 6. object
console.log(`[1, 2, 3] is ${typeof [1, 2, 3]}`);
console.log(`null is ${typeof null}`);
console.log(`new String() is ${typeof String()}`);
 
// 7. bigint
console.log(`10n is ${typeof 10n}`);