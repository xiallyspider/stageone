'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let median = 0
  let tempArr = collection.split("->")
  let index = 0
  let arr = []
  for (let item of tempArr){
    arr.push(parseInt(item))
  }
  arr = arr.sort(function(a,b){
    return a-b
  })
  if(arr.length%2 != 0){
    index = parseInt(arr.length/2)
    median = arr[index]
  } else {
    index = arr.length/2
    median =(arr[index - 1] + arr[index])/2
  }
  return median
}

module.exports = compute_chain_median;
