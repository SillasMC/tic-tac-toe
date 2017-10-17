$(document).ready(function() {

	// Global Variables
	let playersChoice;
	let playerMoveFirst = Math.random() >= 0.5;
	let isPlayerTurn = playerMoveFirst;
	let timeOut;

	startGame_Render();

	$(document).on("click", ".choose-link", function () {
		playersChoice = $("#" + this.id).text();

		drawGrid_Render(isPlayerTurn);

		timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 1000);
	});

	$(document).on("click", "#link-reset-id", function () {
		startGame_Render();

		playerMoveFirst = Math.random() >= 0.5;
		isPlayerTurn = playerMoveFirst;
	});

	$(document).on("click", ".grid-sector", function () {
		if (isPlayerTurn) {
			playerMove("#" + this.id, playersChoice);
			isPlayerTurn = !isPlayerTurn;
			matchTurn(isPlayerTurn);

			clearTimeout(timeOut);

			let winner = matchWinner();
			console.log(winner);
			if (!winner)
				timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 1000);
			else {
				if (winner === 'draw')
					timeOut = setTimeout(() => { endMatchDraw(); }, 300);
				else
					endMatch(winner, playersChoice);
			}
		}
	});

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
					timeOut = setTimeout(() => { endMatchDraw(); }, 300);
				else
					endMatch(winner, playersChoice);
			}

		}
	}

	function endMatch (winner, playersChoice) {
		let timeOut;

		if (winner === playersChoice) {
			changeScore("player");
			timeOut = setTimeout(() => { endGame("Player"); }, 500);
		}
		else {
			changeScore("computer");
			timeOut = setTimeout(() => { endGame("Computer"); }, 500);
		}
	}

	function endGame (winner) {
		alert(winner + " Win!");

		prepareNextGame();
	}

	function prepareNextGame () {
		playerMoveFirst = !playerMoveFirst;
		isPlayerTurn = playerMoveFirst;

		var gridSection = $("#section-grid-id");
		drawGrid(gridSection);
		// FIXME Bug of who's the turn
		timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 2000);
	}

	function endMatchDraw () {
		alert("Draw Game!");

		prepareNextGame();
	}

});
