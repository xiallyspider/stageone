'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let result = [];
  for (let x = 0; x < collection.length; x++) {
    if (collection[x] % 2 == 0){
      result.push(collection[x]);
    }
  }
  return result;
}
module.exports = collect_all_even;
