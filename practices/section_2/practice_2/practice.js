function count_same_elements(collection) {
  //在这里写入代码
  let result = []
  let tempArr = []
  for (let i = 0; i < collection.length; i++) {
  　if (tempArr.indexOf(collection[i]) == -1) {
      tempArr.push(collection[i])
  　}
  }
  for(let x = 0; x < tempArr.length; x++){ 
    if(tempArr[x].includes('-')){
      let stringArr = tempArr[x].split("")
      let index = 0
      for (let z = 0; z < stringArr.length; z++){
        if(stringArr[z] == '-'){
          index = z
        }
      }
      result.push({'key':stringArr[index-1],'count':parseInt(stringArr[index+1])}) 
    } else {
      let subArr = collection.filter(function(item){ 
        return item == tempArr[x] 
      }) 
      result.push({'key':tempArr[x],'count':subArr.length}) 
    }
  }
  return result
}

module.exports = count_same_elements;
