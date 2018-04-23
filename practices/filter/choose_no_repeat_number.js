'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  // let result = []
  // for (var i = 0; i < collection.length; i++) {
  // 　　 if (result.indexOf(collection[i]) == -1) {
  //       result.push(collection[i])
  // 　　}
  // }
  collection = collection.sort((a,b) => a - b)
  let result = collection.filter((v,index,arr) => {
    if(index > 0){
      var pre = arr[index - 1]
    }
    return v != pre
  })
  return result
}

module.exports = choose_no_repeat_number;
