'use strict';

function choose_even(collection) {
  //在这里写入代码
  // let result = []
  // for (let x = 0; x < collection.length; x++) {
  //   if (collection[x]%2 == 0) {
  //     result.push(collection[x])
  //   }
  // }
  let result = collection.filter(v => v % 2 === 0)
  return result
}

module.exports = choose_even;
