// 2-10 Numbers & Math Object

const num1 = 10;
const num2 = 2;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;  // 몫
val = num1 / num2;  //나머지

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // 반올림
val = Math.ceil(2,4); // 내림
val = Math.floor(2.8); //올림
val = Math.sqrt(64); // 루트
val = Math.abs(-3); // 절댓값
val = Math.pow(8,2); // 8^2 = 64
val = Math.min(2,33,4,1,55,6,3,-2); // -2
val = Math.max(2,33,4,1,55,6,3,-2); // 55
val = Math.random();


val = Math.floor(Math.random()*20 + 1);

console.log(val);