function count_same_elements(collection) {
  //在这里写入代码
  //补全数组
  // let tempArr = []
  // let singleArr = []
  // for(let x = 0; x < collection.length; x++){ 
  
  // if(collection[x].includes('-') || collection[x].includes(':')){
  //   let num = parseInt(collection[x].slice(2,3))
  //   let letter = collection[x].slice(0,1)
  //   for( let y = 0; y < num; y++){
  //     tempArr.push(letter)
  //   }
  // } else if( collection[x].includes('[')){
  //   let num = parseInt(collection[x].slice(2,-1))
  //   let letter = collection[x].slice(0,1)
  //   for( let y = 0; y < num; y++){
  //     tempArr.push(letter)
  //   }
  // } else {
  //   tempArr.push(collection[x])
  // }
  // }
  // // 统计数组
  // let countNumObj = tempArr.reduce(function(counts,item){
  // if (item in counts){
  //   counts[item]++
  // } else {
  //   counts[item] = 1
  // }
  // return counts
  // },{})
  // let countNum = []
  // for( let key in countNumObj){
  //   countNum.push({'name':key, 'summary':countNumObj[key]})
  // }
  // return countNum
  var result = []
  var obj = {}
  collection.forEach(element => {
    var ele = element.split(/[:\-\[\]]/)
    console.log(ele)
    if(obj[ele[0]] == null){
      obj[ele[0]] = (ele.length === 1) ? 1 : parseInt(ele[1])
    } else {
      obj[ele[0]] += (ele.length === 1) ? 1 : parseInt(ele[1])
    }
  })
  for(let x in obj){
    result.push({"name":x, 'summary':obj[x]});
  } 
  return result
}

module.exports = count_same_elements;
