'use strict';

function amount_even(collection) {

  //在这里写入代码
  let sum = 0
  let evenArr = collection.filter(function(item){
    return item%2==0
  })
  sum = evenArr.reduce(function(a,b){
    return a+b
  })
  return sum
}

module.exports = amount_even;
