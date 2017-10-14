function randomComputerMove (grid) {
	var movement = {};
	do {
		var x_pos =  Math.floor((Math.random() * 3));
		var y_pos =  Math.floor((Math.random() * 3));
		if (grid[x_pos][y_pos] === '') {
			movement = {
				x: x_pos,
				y: y_pos
			};
		}
	} while (isEmptyObject(movement));

	return movement;
}


function isEmptyObject (obj) {
	return Object.keys(obj).length === 0 && obj.constructor === Object;
}
