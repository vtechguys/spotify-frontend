export const looselyMatch=(array,string)=>{
	var indexOfMatch = -1;
	array.forEach((elem,index)=>{
			
		if(string.includes(elem)){
				indexOfMatch = index;
		}
	})


	return indexOfMatch
	
	
}