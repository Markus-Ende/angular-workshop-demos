const createFunction = () => {
  const localVar = 123;
  const data = [1, 2, 3, 4, 5];

  return () => localVar + 10;
};

const addTen = createFunction();
const result = addTen();
console.log(result);
