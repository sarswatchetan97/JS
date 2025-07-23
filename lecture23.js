//Memoization

// function slowAdd(a, b) {
//     for(i=0; i<1e8; i++){     //1e8 -> 1*10^8
//         //suppose some logic is being implemented
//     }
//     return a+b;
// }

// console.time("No Memo");
// console.log(slowAdd(5,15));
// console.timeEnd("No Memo");

// console.time("No Memo again");
// console.log(slowAdd(5,15));
// console.timeEnd("No Memo again");

//How to solve above issue? See below.

function memoizedAdd() {
  const cache = {};
  return function (a, b) {
    const key = `${a}_${b}`;
    if (cache[key]) {
      return cache[key];
    }
    for (i = 0; i < 1e8; i++) {}
    const result = a + b;
    cache[key] = result;
    return result;
  };
}

const add = memoizedAdd();

console.time("with Memo");
console.log(add(5,10));
console.timeEnd("with Memo");

console.time("with Memo again");
console.log(add(5,10));
console.timeEnd("with Memo again");
