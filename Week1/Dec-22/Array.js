var inputArray = [];
var size = 3;

for(var i=0; i<size; i++) {	
	var array  = prompt('Enter Element '+(i+1));

	 val = parseInt(array);
	 inputArray.push(val);
}

console.log(inputArray);
alert(Math.max.apply(null,inputArray));
