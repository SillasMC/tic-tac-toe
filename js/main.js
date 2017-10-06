$(document).ready(function() {

	// Global Variables
	let playersChoice;

	startGame_Render();

	$(document).on("click", ".choose-link", function () {
		playersChoice = $("#" + this.id).text();

		drawGrid_Render(playersChoice);
	});
});
