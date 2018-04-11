'use strict';
function one_add_next_multiply_three(collection){
  let result = []
  for (let x = 0; x < collection.length-1; x++){
    result.push((collection[x]+collection[x+1])*3)
  }
  return result
}
module.exports = one_add_next_multiply_three;
