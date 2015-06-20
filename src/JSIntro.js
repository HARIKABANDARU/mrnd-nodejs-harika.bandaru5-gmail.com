
exports.Sum = function(num1, num2){
	return num1+num2
}

exports.SumOfArray = function(arrayOfNums){
	var total=0,i=0;
	for(i=0;i<arrayOfNums.length;i++)
		total = total+arrayOfNums[i];
	return total
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	arrayOfNums.sort();
	
	var i=0,sum=arrayOfNums[0];
	
	for(i=0;i<(arrayOfNums.length-1);i++){
		if (arrayOfNums[i]!=arrayOfNums[i+1])
			sum=sum+arrayOfNums[i+1];
	}

	return sum
}

exports.ReverseString = function(str){
	var i=0,l=0,temp='';
	return str.split('').reverse().join('')
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	console.log(arrayOfStrings);
	arrayOfStrings.reverse();
	for(i=0;i<arrayOfStrings.length;i++)
		console.log(arrayOfStrings[i]);
}
