'use strict';
var even_group_calculate_average = function(collection){

    let dArr = []
    let result = []
    let even = []
    for(let x = 0; x < collection.length; x++){
        if(x%2 == 1){
            even.push(collection[x])
        }
    }
    let evenArr = even.filter(function(item){
        return item%2 == 0
    })
    
    evenArr=evenArr.sort(function(a,b){
        return a-b
    })
    if(evenArr.length != 0){
        let maxMunber = evenArr[evenArr.length-1]
        let forRuntim = maxMunber.toString().split("").length
        for(let y = 1;y <= forRuntim ; y++){
            let resultArr = evenArr.filter(function(item){
                return item.toString().split("").length == y
            })
            dArr.push(resultArr)
        }
        if(dArr[0].length == 0 && dArr[1].length == 0 && dArr[2].length != 0){
            let sum= dArr[2].reduce(function(a,b){
                return a + b
            })
            result.push(sum/dArr[2].length)
        } else {
            for (let i =0;i< dArr.length;i++){
                let eachArrSum = dArr[i].reduce(function(a,b){
                    return a+b
                })
                result.push(eachArrSum/dArr[i].length)
            }
        }
    } else {
        result.push(0)
    }
    return result
}

module.exports = even_group_calculate_average;
