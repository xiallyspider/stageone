function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = []
  let arrA = []
  for (let i = 0; i < collection_a.length; i++){
    arrA.push(collection_a[i].key)
  }
  let arrB = object_b.value
  for (let x = 0; x < arrA.length; x++){
    for(let y = 0; y < arrB.length; y++) {
      if(arrA[x] == arrB[y]){
        result.push(arrA[x])
      }
    }
  }
  return result
}

module.exports = collect_same_elements;
