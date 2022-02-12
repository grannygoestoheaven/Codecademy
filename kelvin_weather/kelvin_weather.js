/* We declare a constant variable named 'kelvin' and assign the value 293 */
const kelvin = 293;
/* We declare a constant variable named 'celsius' and assign to it the difference between kelvin's value (293) and 273.*/
const celsius = kelvin - 273;
/* We declare a variable named fahrenheit and assign to it the value of celsius multiplied by (9/5) + 32 */
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
let newton = celsius * (33/100);
newton = Math.floor(newton);
/* Now we round the result of fahrenheit */
console.log(`The temperature in Kelvin is ${kelvin}`);
console.log(`The temperature in F is ${fahrenheit}`);
console.log(`The temperature in °C is ${celsius}`);
console.log(`The temperature in Newton is ${newton}`);

