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
function computerChoice (isPlayerTurn, playersChoice) {
	let computerMark = defineComputerMark(playersChoice);
	let grid = getGrid();

	// TODO AI chooses best move
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
