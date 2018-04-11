function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let arrC = []
  let tempArr = []
  for (let i = 0; i < collection_a.length; i++) {
  　if (tempArr.indexOf(collection_a[i]) == -1) {
      tempArr.push(collection_a[i])
  　}
  }
  for(let x = 0; x < tempArr.length; x++){ 
    let subArr = collection_a.filter(function(item){ 
      return item == tempArr[x] 
    }) 
    arrC.push({'key':tempArr[x],'count':subArr.length}) 
  }
  let arrB = object_b.value
  for (let x = 0; x < arrC.length; x++){
    for (let y = 0; y < arrB.length; y++){
      if(arrC[x].key == arrB[y]){
        arrC[x].count -= parseInt(arrC[x].count/3)
      }
    }
  }
  return arrC
}

module.exports = create_updated_collection;
