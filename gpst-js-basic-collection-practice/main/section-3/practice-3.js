'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	var collectionC=[];
	var temp=[];
	for(let i=0;i<collectionA.length;i++){
		if(i==collectionA.indexOf(collectionA[i])){
			collectionC.push({key: collectionA[i], count: 1})
			temp.push(collectionA[i]); 
		}
		else{  
			collectionC[temp.indexOf(collectionA[i])].count++;
       	}
	}
	objectB.value.forEach((b)=>{
		collectionC.forEach((c)=>{
			if(b==c.key){
				c.count-=parseInt(c.count/3);
			}
		});
	});
  return collectionC;
}
