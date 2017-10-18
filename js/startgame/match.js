// Make red the name of the player who's gonna make the next move
function matchTurn (isPlayerTurn) {
	if (isPlayerTurn) {
		$("#player-name-id").addClass("match-turn");
		$("#computer-name-id").removeClass("match-turn");
	}
	else {
		$("#computer-name-id").addClass("match-turn");
		$("#player-name-id").removeClass("match-turn");
	}
}

// Draw the mark where the player marked
function playerMove (sectorID, playersChoice) {
	$(sectorID).text(playersChoice);
}

// Make the computer's movement
function computerChoice (playersChoice) {
	let computerMark = defineComputerMark(playersChoice);
	let grid = getGrid();

	// FIXME Make the computer unbeatable
	var move = randomComputerMove(grid);

	$("#grid-" + move.x + move.y + "-id").text(computerMark);
}

// Return the grid of the game filled with the movements
function getGrid () {
	let grid = new Array(3);
	for (var i = 0; i < 3; i++)
		grid[i]=new Array(3);

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			let divSector = $("#grid-" + i + j + "-id");
			grid[i][j] = divSector.text();
		}
	}

	return grid;
}

// Return the computer's mark
function defineComputerMark (playersChoice) {
	if (playersChoice === 'x') {
		return 'o';
	} else {
		return 'x';
	}
}

// Check if there is a draw or if someone winned
function matchWinner () {
	var grid		= getGrid();
	var winnerSeq	= {
		i_begin:	0,
		j_begin:	0,
		i_end:		0,
		j_end:		0
	};

	// Transpose grid array
	var gridTranpose = grid[0].map(function(col, i) {
		return grid.map(function(row) {
			return row[i];
		});
	});

	var mainDiag	= '';
	var secDiag		= '';

	var aux = 2;
	for (let i = 0; i < 3; i++) {
		// Check for line win patterns
		let line = grid[i].join('');
		if (line === 'xxx' || line === 'ooo') {
			winnerSeq.i_begin	= i;
			winnerSeq.j_begin	= 0;
			winnerSeq.i_end		= i;
			winnerSeq.j_end		= 2;

			turnRedWinnerComb(winnerSeq);

			return grid[i][0];
		}

		// Check for column win patterns
		let column = gridTranpose[i].join('');
		if (column === 'xxx' || column === 'ooo') {
			winnerSeq.i_begin	= 0;
			winnerSeq.j_begin	= i;
			winnerSeq.i_end		= 2;
			winnerSeq.j_end		= i;

			turnRedWinnerComb(winnerSeq);

			return grid[0][i];
		}

		mainDiag	+= grid[i][i];
		secDiag		+= grid[i][aux];

		aux			-= 1;
	}

	// Check for main diagonal win pattern
	if (mainDiag === 'xxx' || mainDiag === 'ooo') {
		winnerSeq.i_begin	= 0;
		winnerSeq.j_begin	= 0;
		winnerSeq.i_end		= 2;
		winnerSeq.j_end		= 2;

		turnRedWinnerComb(winnerSeq);

		return grid[0][0];
	}

	// Check for secondary diagonal win pattern
	if (secDiag === 'xxx' || secDiag === 'ooo') {
		winnerSeq.i_begin	= 0;
		winnerSeq.j_begin	= 2;
		winnerSeq.i_end		= 2;
		winnerSeq.j_end		= 0;

		turnRedWinnerComb(winnerSeq);

		return grid[0][2];
	}

	var emptySector = getEmptySector(grid);
	if (emptySector < 0)
		return 'draw';

	return;
}

// Check if grid is completely filled
function getEmptySector (grid) {
	for (let i = 0; i < grid.length; i++) {
		let element = grid[i];

		let empty = element.indexOf("");
		if (empty >= 0)
			return empty;

	}
	return -1;
}

// Change Score of the game
function changeScore (winnerID) {
	var scoreTag = $("#" + winnerID + "-score-id");
	var score = scoreTag.text();
	scoreTag.text(Number(score) + 1);
}

// Turn red the combination of marks that have won
function turnRedWinnerComb (winnerSeq) {
	// First mark
	$("#grid-" + winnerSeq.i_begin + winnerSeq.j_begin + "-id").addClass("mark-win");

	// Middle mark
	var i = (winnerSeq.i_begin + winnerSeq.i_end)/2;
	var j = (winnerSeq.j_begin + winnerSeq.j_end)/2;
	$("#grid-" + i + j + "-id").addClass("mark-win");

	// Last mark
	$("#grid-" + winnerSeq.i_end + winnerSeq.j_end + "-id").addClass("mark-win");
}
