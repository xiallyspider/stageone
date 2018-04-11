'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let result = []
  let evenArr = collection.filter(function(item){
    return item%2 == 0
  })
  console.log(evenArr)
  for(let x = 0; x < evenArr.length; x++){
    result.push(String.fromCharCode(96+evenArr[x]))
  }
  return result
}

module.exports = even_to_letter;
