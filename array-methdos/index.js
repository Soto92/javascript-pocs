/**
Array.prototype[@@iterator]()
 */
const iteratorDemo = () => {
  const arr = ["Mauricio", "Marta", "Elliot"];
  for (const name of arr) {
    console.log(`Do some thing with this name: ${name}`);
  }

  // or manually:
  const arrIter = arr[Symbol.iterator]();
  console.log(arrIter.next().value);
  console.log(arrIter.next().value);
  console.log(arrIter.next().value);
};

/**
Array.prototype.at()
 */
const atDemo = () => {
  const arr = ["Mauricio", "Marta", "Elliot"];
  console.log(arr.at(0));
  console.log(arr.at(-1)); // return the last one
};

/**
Array.prototype.concat()
 */
const concatDemo = () => {
  const arr = ["Mauricio", "Marta"];
  const arr2 = ["Rafael"];
  console.log(arr.concat(arr2));
};

/**
Array.prototype.copyWithin()
 */
const copyWithinDemo = () => {
  const arr = ["Mauricio", "Marta", "Rafael", "Elliot"];
  // Copy to index 0 the element at index 1 until index 2
  console.log(arr.copyWithin(0, 1, 2));
};

/**
Array.prototype.entries()
 */
const entriesDemo = () => {
  const arr = ["Mauricio", "Marta", "Rafael", "Elliot"];
  const arrayEntries = arr.entries();

  for (const element of arrayEntries) {
    console.log(element); // [0, "Mauricio"] ...
  }
};

/**
Array.prototype.every()
 */
const everyDemo = () => {
  console.log([2, 2, 3].every((x) => x === 2)); // false
};

/**
Array.prototype.some()
 */
const someDemo = () => {
  console.log([2, 2, 3].some((x) => x === 2)); // true
};

/**
Array.prototype.sort()
 */
const sortDemo = () => {
  const numberArray = [40, 1, 5, 200];
  numberArray.sort((a, b) => a - b);
  console.log(numberArray);
};
