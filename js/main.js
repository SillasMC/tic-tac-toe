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
			if (!isMatchOver(playersChoice))
				timeOut = setTimeout(() => { computerMove(isPlayerTurn, playersChoice); }, 1000);
			else
				endMatch();
		}
	});

	function computerMove (isPlayerTurnLocal, playersChoiceLocal) {
		if (!isPlayerTurnLocal) {
			computerChoice(playersChoiceLocal);

			// End of computer's turn
			isPlayerTurn = !isPlayerTurn;
			if (!isMatchOver(playersChoice))
				matchTurn(isPlayerTurn);
			else
				endMatch();

		}
	}

});
