console.log('var...');

var exampleVar = 1;

if (true) {
  var exampleVar = 2;
  console.log('Inside:  ' + exampleVar); // => Inside:  2
}

console.log('Outside: ' + exampleVar); // => Outside: 2

console.log('let...');

let exampleLet = 1;

if (true) {
  let example = 2;
  console.log('Inside:  ' + example); // => Inside:  2
}

console.log('Outside: ' + exampleLet); // => Outside: 1
