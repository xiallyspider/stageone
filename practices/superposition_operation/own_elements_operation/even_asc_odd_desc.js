'use strict';
var even_asc_odd_desc = function(collection){

  let result = []
  let odArr = collection.filter(function(item){
    return item%2 == 1
  })
  odArr = odArr.sort(function(a,b){
    return b-a
  })
  let evenArr = collection.filter(function(item){
    return item%2 == 0
  })
  evenArr = evenArr.sort(function(a,b){
    return a-b
  })
  
  result = evenArr.concat(odArr)
  return result
};
module.exports = even_asc_odd_desc;
