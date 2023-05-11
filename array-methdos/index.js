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

const myCustomEvery = () => {
  const arr = [2, 2, 2];

  Array.prototype.every = (func) => {
    const arrBool = [];
    arr.forEach((element) => {
      arrBool.push(func(element));
    });
    let result = func(arr[0]);

    arrBool.forEach((item) => {
      if (arrBool[0] !== item) {
        result = false;
      }
      console.log(item);
    });
    console.log({ result });
    return result;
  };

  arr.every((x) => x === 2);
};

/**
Array.prototype.some()
 */
const someDemo = () => {
  console.log([2, 2, 3].some((x) => x === 2)); // true
};

/**
Array.prototype.fill()
 */
const fillDemo = () => {
  const arr = [1, 2, 3];
  console.log(arr.fill(4)); // return [4,4,4]
  console.log(arr.fill(1, 0, 2)); // return [1,1,4]
};

/**
Array.prototype.filter()
 */
const filterDemo = () => {
  const arr = [1, 2, 3];
  console.log(arr.filter((item) => item < 3)); // return [1,2]
};

/**
Array.prototype.find()
 */
const findDemo = () => {
  const arr = [1, 2, 3];
  console.log(arr.find((item) => item === 2)); // return 2
};

/**
Array.prototype.findIndex()
 */
const findIndexDemo = () => {
  const arr = [1, 2, 3];
  console.log(arr.findIndex((item) => item > 1)); // return index 1
};

/**
Array.prototype.findLast()
 */
const findLastDemo = () => {
  const arr = [1, 2, 3];
  console.log(arr.findLast((item) => item > 0)); // return 3
};

/**
Array.prototype.findLastIndex()
 */
const findLastIndexDemo = () => {
  const arr = [1, 2, 3];
  console.log(arr.findLastIndex((item) => item > 0)); // return index 2
};

/**
Array.prototype.flat()
 */
const flatDemo = () => {
  const arr = [1, 2, 3, [5, 6]];
  console.log(arr.flat()); // return [1,2,3,4,5,6]
};

/**
Array.prototype.flatMap()
 */
const flatMapDemo = () => {
  const arr = [1, 2];
  console.log(arr.flatMap((num) => (num === 1 ? [1, 2] : [3, 4]))); // return [1,2,3,4]
};

/**
Array.prototype.forEach()
 */
const forEachDemo = () => {
  const arr = [1, 2, 3, 4];
  arr.forEach((num) => console.log(num));
};

/**
Array.prototype.from()
 */
const fromDemo = () => {
  console.log(Array.from([1, 2, 3], (x) => x + x));
  console.log(Array.from("Mauricio"));
};

/**
Array.prototype.includes()
 */
const includesDemo = () => {
  const arr = [1, 2, 3, 4];
  console.log(arr.includes(3)); //true
};

/**
Array.prototype.indexOf()
 */
const indexOfDemo = () => {
  const arr = [1, 2, 3, 4];
  console.log(arr.indexOf(3)); // return index 2
};

/**
Array.prototype.isArray()
 */
const isArrayDemo = () => {
  const arr = [1, 2, 3, 4];
  console.log(Array.isArray(arr)); // true
};

/**
Array.prototype.join()
 */
const joinDemo = () => {
  const arr = [1, 2, 3, 4];
  console.log(arr.join()); // 1,2,3,4
};

/**
Array.prototype.keys()
 */
const keysDemo = () => {
  const arr = [1, 2, 3, 4];
  const iterator = arr.keys();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
};

/**
Array.prototype.lastIndexOf()
 */
const lastIndexOfDemo = () => {
  const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
  console.log(animals.lastIndexOf("Dodo"));
};

/**
Array.prototype.map()
 */
const mapDemo = () => {
  const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
  console.log(animals.map((animal) => `Animal: ${animal}`));
};

/**
Array.prototype.sort()
 */
const sortDemo = () => {
  const numberArray = [40, 1, 5, 200];
  numberArray.sort((a, b) => a - b);
  console.log(numberArray);
};
