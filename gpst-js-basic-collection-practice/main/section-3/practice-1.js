'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	objectB.value.forEach((b)=>{
		collectionA.forEach((a)=>{
			if(b==a.key){
				a.count--;
			}
		});
	});
  return collectionA;
}
