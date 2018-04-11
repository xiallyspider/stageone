function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arr = object_b.value
  let result = []
  for (let x = 0; x < collection_a.length; x++){
    for(let y = 0; y < arr.length; y++) {
      if(collection_a[x] == arr[y]){
        result.push(collection_a[x])
      }
    }
  }
  return result
}

module.exports = collect_same_elements;
