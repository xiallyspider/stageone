'use strict';

function average_uneven(collection) {

  //在这里写入代码
  // let sum = 0
  // let odArr = collection.filter(function(item){
  //   return item%2==1
  // })
  // sum = odArr.reduce(function(a,b){
  //   return a+b
  // })
  // return parseInt(sum/odArr.length)
  let arr = collection.filter(v => v % 2 == 1)
  return arr.reduce((a, b) => a + b)/(arr.length)
}

module.exports = average_uneven;
