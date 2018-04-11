function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let arr = object_b.value
  for (let x = 0; x < collection_a.length; x++){
    for (let y = 0; y < arr.length; y++){
      if(collection_a[x].key == arr[y]){
        collection_a[x].count -= 1
      }
    }
  }
  return collection_a
}

module.exports = create_updated_collection;
