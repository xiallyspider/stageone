'use strict';
function xNotInCollection(x, collection){
  for(let i=0;i<collection.length;i++){
    if(x == collection[i]){
      return false
    }
  }
  return true
}

function double_to_one(collection) {

  //在这里写入代码
  let result=[]
  for(let x=0; x<collection.length; x++){
    if(typeof(collection[x])=="object"){
      for(let y=0;y<collection[x].length; y++){
        if(xNotInCollection(collection[x][y],result)){
          result.push(collection[x][y])
        }
      }
    }else{
      if(xNotInCollection(collection[x],result)){
      result.push(collection[x])
      }
    }
  }
  return result
}

module.exports = double_to_one;
