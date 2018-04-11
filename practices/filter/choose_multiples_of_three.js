'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  let result = []
  for (let x = 0; x < collection.length; x++) {
    if (collection[x]%3 == 0) {
      result.push(collection[x])
    }
  }
  return result

}

module.exports = choose_multiples_of_three;
