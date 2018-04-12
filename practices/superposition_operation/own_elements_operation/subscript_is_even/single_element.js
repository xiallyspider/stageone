'use strict';
var single_element = function(collection){
  
  let evenPos = collection.filter(function(item,index){
    return index%2 == 1
  })
  let singleEleArr = []
  let len = 0
  for( let x = 0; x < evenPos.length; x++){
  let tempArr=evenPos.filter(function(item){
      return item == evenPos[x]
      })
  len = tempArr.length
    if (len == 1) {
      singleEleArr.push(evenPos[x])
    }
  }
  return singleEleArr
};
module.exports = single_element;
