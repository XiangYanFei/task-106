'use strict';

module.exports = function countSameElements(collection) {
 var result = [];
  collection.forEach(function (a) {
    var col=['','']  ////将collection中的每一个元素都以[‘元素’，数量]表示
    if(a.length!=1){
		col = a.split(/\[|\]|[:|-]/);
    }
    else {
      col[0]=a;
      col[1]=1;
    }
    col[1] = Number(col[1]);

    var position;   //记录位置
    position = result.findIndex(function (b) {
      return b.name == a[0];
    });
    if (position == -1) { //在result中还找不到a的信息
      result.push({name: col[0], summary: col[1]});
    }
    else {  //在result中已找到a的信息，统计summary
       result[position].summary += col[1];
    }
  });
  return result;
}