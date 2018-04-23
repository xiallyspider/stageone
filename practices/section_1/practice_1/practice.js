function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  // let result = []
  // for(let x = 0; x < collection_a.length; x++){
  //   for(let y = 0; y < collection_b.length;y++){
  //     if(collection_a[x]==collection_b[y]){
  //       result.push(collection_a[x])
  //     }
  //   }
  // }
  
  return collection_a.filter(v => collection_b.includes(v))
}

module.exports = collect_same_elements;
