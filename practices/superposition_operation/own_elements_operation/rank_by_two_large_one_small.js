'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let result = []
  collection = collection.sort(function(a,b){
  return a - b
  })
  let index = 0
  let doubDrecArr=[];
  for(let i=0;i<collection.length/3;i++){
    doubDrecArr[i]=[];
  }
  for(let item of collection){
    doubDrecArr[parseInt(collection.indexOf(item)/3)].push(item);
  }
  for(let item of doubDrecArr){
    if(item.length == 3){
      let dele_value = item.shift();  
      item.push(dele_value);    
    }
  }
  result=doubDrecArr.reduce(function(a,b){
  return a.concat(b);
  },[]);
  return result; 
}
module.exports = rank_by_two_large_one_small;
