$(document).ready(function() {

	// Global Variables
	let playersChoice;
	let playerMoveFirst = Math.random() >= 0.5;
	let isPlayerTurn = playerMoveFirst;
	let timeOut;

	startGame_Render();

	// Choose a mark
	$(document).on("click", ".choose-link", function () {
		playersChoice = $("#" + this.id).text();

		drawGrid_Render(isPlayerTurn);

		timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 500);
	});

	// Reset the game
	$(document).on("click", "#link-reset-id", function () {
		startGame_Render();

		playerMoveFirst = Math.random() >= 0.5;
		isPlayerTurn = playerMoveFirst;
	});

	// The players chooses a sector
	$(document).on("click", ".grid-sector", function () {
		if (isPlayerTurn) {
			playerMove("#" + this.id, playersChoice);
			isPlayerTurn = !isPlayerTurn;
			matchTurn(isPlayerTurn);

			clearTimeout(timeOut);

			let winner = matchWinner();
			console.log(winner);
			if (!winner)
				timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 500);
			else {
				if (winner === 'draw')
					timeOut = setTimeout(() => { endMatchDraw(); }, 150);
				else
					endMatch(winner, playersChoice);
			}
		}
	});

	// Make computers movement
	function computerMove (isPlayerTurnLocal, playersChoiceLocal) {
		if (!isPlayerTurnLocal) {
			computerChoice(playersChoiceLocal);

			// End of computer's turn
			isPlayerTurn = !isPlayerTurn;
			let winner = matchWinner();
			if (!winner)
				matchTurn(isPlayerTurn);
			else {
				if (winner === 'draw')
					timeOut = setTimeout(() => { endMatchDraw(); }, 150);
				else
					endMatch(winner, playersChoice);
			}

		}
	}

	// Check who winned the game
	function endMatch (winner, playersChoice) {
		let timeOut;

		if (winner === playersChoice) {
			changeScore("player");
			timeOut = setTimeout(() => { endGame("Player"); }, 250);
		}
		else {
			changeScore("computer");
			timeOut = setTimeout(() => { endGame("Computer"); }, 250);
		}
	}

	// End the game with a victory
	function endGame (winner) {
		alert(winner + " Win!");

		prepareNextGame();
	}

	// Prepare the grid for a new match
	function prepareNextGame () {
		playerMoveFirst = !playerMoveFirst;
		isPlayerTurn = playerMoveFirst;
		matchTurn(isPlayerTurn);

		var gridSection = $("#section-grid-id");
		drawGrid(gridSection);

		timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 750);
	}

	// End game with a draw
	function endMatchDraw () {
		alert("Draw Game!");

		prepareNextGame();
	}

});
