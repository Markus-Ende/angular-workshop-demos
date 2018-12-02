const createFunction = () => {
  const localObject = {
    n: 123
  };

  console.log('in createFunction: ', localObject.n);
  setTimeout(() => console.log('in createFunction: ', localObject.n), 100);

  return () => {
    localObject.n += 10;
    return localObject.n;
  };
};

const addTen = createFunction();

console.log(addTen());

console.log(addTen());

console.log(addTen());

console.log(addTen());

console.log(addTen());

console.log(addTen());
