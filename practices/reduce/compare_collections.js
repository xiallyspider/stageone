'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  // let same = true
  // if(collection_a.length == collection_b.length){
  //   for (let x = 0; x < collection_a.length; x++){
  //     if(collection_a[x] != collection_b[x]){
  //       same = false
  //     }
  //   }
  // } else {
  //   same = false
  // }
  // return same
  return collection_a.sort().toString() === collection_b.sort().toString()
}

module.exports = compare_collections;


