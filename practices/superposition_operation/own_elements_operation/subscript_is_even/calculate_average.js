'use strict';
var calculate_average = function(collection){
    let ave = 0
    let od = []
    for(let x = 0; x < collection.length; x++){
        if(x%2 == 1){
            od.push(collection[x])
        }
    }
    let sum = od.reduce(function(a,b){
        return a + b
    })
    ave = sum / od.length
    return ave
};
module.exports = calculate_average;
