'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionC=[];
	for(let i=0;i<collectionA.length;i++)
		{
			if(objectB.value.indexOf(collectionA[i])>-1)
				collectionC.push(collectionA[i]);
		}

  
  return collectionC;
}
