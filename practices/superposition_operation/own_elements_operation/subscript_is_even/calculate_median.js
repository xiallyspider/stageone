'use strict';
var calculate_median = function(collection){
    
    let even = []
    let mid = 0
    
    for(let x = 0; x < collection.length; x++){
        if(x%2 == 1){
            even.push(collection[x])
        }
    }
    even = even.sort(function(a,b){
        return a-b
      })
      if(even.length%2 == 0){
        let index = parseInt(even.length/2)
        mid =parseInt((even[index-1]+even[index])/2)
      } else {
        let index = parseInt(even.length/2)
        mid =parseInt(even[index])
      }
    
    return mid
};
module.exports = calculate_median;
