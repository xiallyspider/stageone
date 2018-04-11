'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let resultArray = []
  let result = {}
  collection = collection.sort(function(a,b){
    return a-b
  })
  for (let i = 0; i < collection.length; i++) {
    　if (resultArray.indexOf(collection[i]) == -1) {
      resultArray.push(collection[i])
    　}
  }
  let count = 0
  for (let x = 0; x < resultArray.length; x++){
    count = 0
    for(let y = 0; y < collection.length; y++){
      if(resultArray[x] == collection[y]){
      count++
      }
    }
    result[resultArray[x]] = count
  }
  // result = JSON.stringify(result)
  return result
}

module.exports = grouping_count;
