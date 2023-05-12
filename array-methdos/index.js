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
Array.prototype.keys()
 */
const keysDemo = () => {
  const arr = [1, 2, 3, 4];
  const iterator = arr.keys();
  console.log(iterator.next().value); // key 0
  // or
  for (const key of iterator) {
    console.log(key);
  }
};

/**
Array.prototype.values()
 */
const valuesDemo = () => {
  const arr = [1, 2, 3, 4];
  const iterator = arr.values();
  console.log(iterator.next().value); // value 1
  // or
  for (const value of iterator) {
    console.log(value);
  }
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
Array.of()
 */
const ofDemo = () => {
  console.log(Array.of("foo", 2, "bar", true));
};

/**
Array.prototype.pop()
 */
const popDemo = () => {
  const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
  console.log(plants.pop());
};

/**
Array.prototype.push()
 */
const pushDemo = () => {
  const animals = ["pigs", "goats", "sheep"];
  const count = animals.push("cows");
  console.log(count); //4
};

/**
Array.prototype.unshift() //
 */
const unshiftDemo = () => {
  const plants = ["cauliflower", "cabbage", "kale", "tomato"];
  console.log(plants.unshift("broccoli"));
  console.log(plants);
};

/**
Array.prototype.reduce()
 */
const reduceDemo = () => {
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // also accept a initial value
  );
  console.log(sum); //10
};

/**
Array.prototype.reduceRight()
 */
const reduceRightDemo = () => {
  const arr = [
    [1, 2],
    [3, 4],
  ];
  const reversed = arr.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue)
  );
  console.log(reversed); //3,4,1,2
};

/**
Array.prototype.reverse()
 */
const reverseDemo = () => {
  const arr = [0, 1, 2];
  arr.reverse();
  console.log(arr); //2,1,0
};

/**
Array.prototype.shift()
 */
const shiftDemo = () => {
  const arr = [0, 1, 2];

  const firstElement = arr.shift();
  console.log(arr); //1,2
  console.log(firstElement);
};

/**
Array.prototype.slice()
 */
const sliceDemo = () => {
  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  console.log(animals.slice(2));
  // Expected output: Array ["camel", "duck", "elephant"]

  console.log(animals.slice(2, 4));
  // Expected output: Array ["camel", "duck"]
};

/**
Array.prototype.sort()
 */
const sortDemo = () => {
  const numberArray = [40, 1, 5, 200];
  numberArray.sort((a, b) => a - b);
  console.log(numberArray);
};

/**
Array.prototype.splice()
 */
const spliceDemo = () => {
  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb");
  console.log(months); //[ 'Jan', 'Feb', 'March', 'April', 'June' ]

  months.splice(4, 1, "May"); //[ 'Jan', 'Feb', 'March', 'April', 'May' ]
  console.log(months);
};

/**
Array.prototype.toString()
 */
const toStringDemo = () => {
  const months = ["Jan", "March", "April", "June"];
  console.log(months.toString());
};

/**
Array.prototype.toLocalString()
 */
const toLocalStringDemo = () => {
  const arr = ["Jan", "March", "April", new Date("03 Jul 1992 02:19:00 UTC")];
  const date = arr.toLocaleString();
  console.log(date);
};

/**
Array.prototype.toReversed() // node 20
 */
const toReversedDemo = () => {
  const arr = ["Jan", "March", "April"];
  const reversed = arr.toReversed(); // Don´t change the original array
  console.log(reversed);
};

/**
Array.prototype.toSorted() // node 20
 */
const toSortedDemo = () => {
  const values = [1, 10, 21, 2];
  const sortedValues = values.toSorted((a, b) => a - b);
  console.log(sortedValues); // [1, 2, 10, 21]
  console.log(values); // [1, 10, 21, 2]
};

/**
Array.prototype.with() // node 20
 */
const withDemo = () => {
  const months = ["Jan", "Dec", "April", "June"];
  console.log(months.with(1, "Feb"));
};

/**
Array.prototype.toSpliced() // node 20
 */
const toSplicedDemo = () => {
  const months = ["Jan", "March", "April", "June"];
  const newMonths = months.splice(1, 0, "Feb");
  console.log(newMonths); //[ 'Jan', 'Feb', 'March', 'April', 'June' ]
};
