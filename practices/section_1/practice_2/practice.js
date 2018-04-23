function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  
    // let arrb = collection_b.reduce(function(a,b){
    // return a.concat(b)
    // })
    // for(let x = 0; x < collection_a.length; x++){
    //   for(let y = 0; y < arrb.length;y++){
    //     if(collection_a[x]==arrb[y]){
    //     result.push(collection_a[x])
    //     }
    //   }
    // }
  collection_b = collection_b.reduce((a,b) => a.concat(b))
  let result = collection_a.filter(v => collection_b.includes(v))
  return result
}

module.exports = collect_same_elements;
