const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hi!');
  }, 2000);
});

console.log('Waiting for promise...');

promise.then(data => {
  console.log(data);
});
