'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
	var collectionB1=collectionB.join(",");
	var collectionC=new Array();
	
	for(let i=0;i<collectionA.length;i++)
		{
			for(let j=0;j<collectionB1.length;j++)
				{
					if(collectionA[i]===collectionB1[j])
						{
							collectionC.push(collectionA[i]);
						}
				}
		}
  return collectionC;
}
