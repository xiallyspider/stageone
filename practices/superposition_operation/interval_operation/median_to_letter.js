'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let result = ''
  let mid = 0
  collection = collection.sort(function(a,b){
    return a-b
  })
  if(collection.length%2 == 0){
    let index = parseInt(collection.length/2)
    mid =parseInt((collection[index-1]+collection[index])/2)+1
  } else {
    let index = parseInt(collection.length/2)
    mid =parseInt(collection[index])
  }
  if(mid < 27){
    result = String.fromCharCode(96+mid)
  } else {
    result = 'a'+String.fromCharCode(96 + mid - 26)
  }
  return result
}

module.exports = median_to_letter;
