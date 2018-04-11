'use strict';
var rank_desc = function(collection){
  let result = []
  result = collection.sort(function(x,y){
    return x-y
  })
  return result
};

module.exports = rank_desc;
