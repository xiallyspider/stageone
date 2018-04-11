'use strict';

function choose_even(collection) {
  //在这里写入代码
  let result = []
  for (let x = 0; x < collection.length; x++) {
    if (collection[x]%2 == 0) {
      result.push(collection[x])
    }
  }
  return result
}

module.exports = choose_even;
