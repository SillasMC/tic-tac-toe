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
	$(sectorID).text(playersChoice);//TODO Animate player choice
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
			// TODO Turn red the winner position

			return grid[i][0];
		}

		// Check for column win patterns
		let column = gridTranpose[i].join('');
		if (column === 'xxx' || column === 'ooo') {
			winnerSeq.i_begin	= 0;
			winnerSeq.j_begin	= i;
			winnerSeq.i_end		= 2;
			winnerSeq.j_end		= i;
			// TODO Turn red the winner position

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
		// TODO Turn red the winner position

		return grid[0][0];
	}

	// Check for secondary diagonal win pattern
	if (secDiag === 'xxx' || secDiag === 'ooo') {
		winnerSeq.i_begin	= 0;
		winnerSeq.j_begin	= 2;
		winnerSeq.i_end		= 2;
		winnerSeq.j_end		= 0;
		// TODO Turn red the winner position

		return grid[0][2];
	}

		//TODO Check for draw game

	return;
}

function changeScore (winnerID) {
	var scoreTag = $("#" + winnerID + "-score-id");
	var score = scoreTag.text();
	scoreTag.text(Number(score) + 1);
}
