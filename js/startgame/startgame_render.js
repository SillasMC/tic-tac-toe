// Render the screen with the beginning of the game
function startGame_Render() {
	let board = $("#section-board-id");

	let paragraphQuestion = $("<p>").addClass("board-text")
	.text("Choose your mark:");

	let paragraphChoice = $("<p>").addClass("board-text")
	.html('<a class="choose-link">x</a> or <a class="choose-link">o</a>');

	board.fadeOut("fast", function () {
		board.empty().append(paragraphQuestion).append(paragraphChoice).fadeIn("slow");
	});

}
