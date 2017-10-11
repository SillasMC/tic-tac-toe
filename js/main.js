$(document).ready(function() {

	// Global Variables
	let playersChoice;
	let playerMoveFirst = Math.random() >= 0.5;
	let isPlayerTurn = playerMoveFirst;

	startGame_Render();

	$(document).on("click", ".choose-link", function () {
		playersChoice = $("#" + this.id).text();

		drawGrid_Render(isPlayerTurn);

		let timeOut = setTimeOut(computerMove, 1000, isPlayerTurn);
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
			let timeOut = setTimeOut(computerMove, 1000, isPlayerTurn);
		}
	});
});
