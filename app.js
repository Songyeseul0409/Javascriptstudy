//var, let, const

var name = 'John Doe';
console.log(name);
name = "Song Yesuel";
console.log(name);
let namerevise;
namerevise = 'Hansuel';
console.log(namerevise);


//Init var
var greeting;
console.log(greeting); // Undefined
greeting = 'Hey';
console.log(greeting);

//letters, numbers, _, $
// Can not start with num

//Multi word vars 
var firstName = 'John'; // Camel case _ general
var first_name = 'Song'; //underscore - 1,3번을 더 추천.
var FirstName = 'Ye'; // Pascal case = similar to Camel
// ㄴ get in to object oriented programming, when create constructor func.
// ㄴ class with 6 classes.

//CONST : constant. cna't change or can't be reassigned. 
// if change, error message.  

//But 변수 안에 요소들은 수정 가능.
const person = {
    name : 'John',
    age : 30
}
person.name = 'Yesuel';
console.log(person);

// array도 마찬가지.

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);

// '.' can change arrays &objets that are assigned to variables using const
// const numbers = [1,2,3,4,5,6]; 이건 error. ('.'배열 전체 변경)
