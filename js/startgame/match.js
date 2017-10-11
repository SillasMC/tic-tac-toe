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

function playerMove (sectorID, playersChoice) {
	$(sectorID).text(playersChoice);//TODO Animate player choice
}

function computerMove (isPlayerTurn) {
	if (!isPlayerTurn) {
		// TODO AI chooses best move
	}
}
