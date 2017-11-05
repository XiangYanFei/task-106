'use strict';

module.exports = function countSameElements(collection) {
  let result=[];
  let temp=[];
for(let i=0;i<collection.length;i++){
		if(collection[i].length==1)
			{
				if(i==collection.indexOf(collection[i])){
					result.push({key: collection[i], count: 1})
					temp.push(collection[i]); 
				}
				else{  
					result[temp.indexOf(collection[i])].count++;
        		}
			}
		if(collection[i].length==3)
			{
				if(collection[i].match('-')){
					let s;
					s=collection[i].split('-');
					result.push({key: s[0], count: Number(s[1])})
				}
			}
	}
  return result;
}
