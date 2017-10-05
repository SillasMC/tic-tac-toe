// Render the screen with the beginning of the game
function startGame_Render(board) {

	let paragraphQuestion = $("<p>").addClass("board-top")
							.text("Choose your mark:");

	let linkX = $("<a>").addClass("choose-link")
					.attr("id", "choose-link-x-id")
					.text('x');

	let linkO = $("<a>").addClass("choose-link")
					.attr("id", "choose-link-o-id")
					.text('o');

	let paragraphChoice = $("<p>").addClass("board-text")
							.append(linkX)
							.append(' or ')
							.append(linkO);

	board.fadeOut("fast", function () {
		board.empty().append(paragraphQuestion).append(paragraphChoice).fadeIn("slow");
	});

}
