'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  objectB.value.forEach((b)=>{
		collectionA.forEach((a)=>{
			if(b==a.key){
				a.count-=parseInt(a.count/3);
			}
		});
	});
  return collectionA;
}
