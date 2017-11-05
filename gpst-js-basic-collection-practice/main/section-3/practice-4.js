'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collectionC=[];
  let temp=[];
  for(let i=0;i<collectionA.length;i++){
		if(collectionA[i].length==1)
			{
				if(i==collectionA.indexOf(collectionA[i])){
					collectionC.push({key: collectionA[i], count: 1})
					temp.push(collectionA[i]); 
				}
				else{  
					collectionC[temp.indexOf(collectionA[i])].count++;
        		}
			}
		if(collectionA[i].length==3)
			{
				if(collectionA[i].match('-')){
					let s;
					s=collectionA[i].split('-');
					collectionC.push({key: s[0], count: Number(s[1])})
				}
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
