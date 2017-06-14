function task3(arr){
	if (arr !== undefined && arr[0] !== undefined && arr[1] !== undefined) {
	var trianglesAreas = arr.map(function(triangle) {
		var triangleSides = [];
		for (var prop in triangle) {
			triangleSides.push(triangle[prop]);
		}
		var p = (triangleSides[1] + triangleSides[2] + triangleSides[3])/2;
		var s = Math.sqrt(p*(p - triangleSides[1])*(p - triangleSides[2])*(p - triangleSides[3]));
		return s;
	});

	var trianglesNames = arr.map(function(triangle){	
		return triangle.vertices;
	});

	var arrangingAreas = trianglesAreas.slice().sort(function(a,b){return b-a});
	var arrangingNames = [];
	for (var i = 0; i < arrangingAreas.length; i++){
		arrangingNames.push(trianglesNames[trianglesAreas.indexOf(arrangingAreas[i])]);
	}
	return arrangingNames;
	} else {
		return  {status: 'failed', reason: 'Enter array with two or more triangles'};
	}
}