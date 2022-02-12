let myAge = 42; /* I declare a variable called myAge and set it to 42*/
let earlyYears = 2; /*I declare a variable called earlyYears for the 2 first years of the dog and set it to 2 */
earlyYears = earlyYears * 10.5; /* because for the two first human years, the dog ones equal to * 10.5 each*/
let laterYears = myAge - 2; /* I declare a variable called laterYears which represents the number of human years my dog and I spent together after the first two early years*/
laterYears = laterYears * 4; /* because for the later years, the dog ones equal to * 4 each */
//console.log(earlyYears * laterYears);
let myAgeInDogYears = earlyYears + laterYears; /* I declare a variable called MyAgeInDogYears and assign to it the sum of the new value of earlyYears and the new value of laterYears*/
const myName = 'Morgan'.toLowerCase(); /* I declare a variable called myName and assign to it my first name in small letters*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years in dog years.`);