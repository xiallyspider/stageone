function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = []
  let tempArr = []
  for (let i = 0; i < collection_a.length; i++) {
  　if (tempArr.indexOf(collection_a[i]) == -1) {
    tempArr.push(collection_a[i])
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
      let subArr = collection_a.filter(function(item){ 
      return item == tempArr[x] 
      }) 
      result.push({'key':tempArr[x],'count':subArr.length}) 
    }
  }
  let arrB = object_b.value
  for (let x = 0; x < result.length; x++){
    for (let y = 0; y < arrB.length; y++){
      if(result[x].key == arrB[y]){
      result[x].count -= parseInt(result[x].count/3)
      }
    }
  }
  return result
}

module.exports = create_updated_collection;
