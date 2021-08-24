let val;

//Number to string
val = String(555);
val = String(4+4);

// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

//Stirng to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // NaN : 문자를 넘버로 할려고 할때. 안됨...
val = Number([1,2,3]); // NaN

val = parseInt('100.10'); // 정수만. 소수점 출력 안됨.
val = perseFloat('100.10'); 

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);
//console.log(val.length);
console.log(val.toFixed()); // 원하는 소수점 자리까지 출력.