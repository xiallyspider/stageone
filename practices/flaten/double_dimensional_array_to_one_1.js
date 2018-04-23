'use strict';

function double_to_one(collection) {

  //在这里写入代码
  // let result=[]
  // for(let x=0; x<collection.length; x++){
  //   if(typeof(collection[x])=="object"){
  //     for(let y=0;y<collection[x].length; y++){
  //     result.push(collection[x][y])
  //     }
  //   }else{
  //     result.push(collection[x])
  //   }
  // }
  var result = []
  for (let x of collection) {
    result = result.concat(x)
  }
  return result
}

module.exports = double_to_one;
