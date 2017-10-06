// Draw Grid for the game
function drawGrid_Render (playersChoice) {

	let titleSection = $("#section-title-id");
	let gridSection = $("#section-grid-id");
	let functionSection = $("#section-function-id");

	// Draw Score paragraph
	let paragraphScore = $("<p>").addClass("board-top")
							.html('Player: <em id="player-score-id">0</em>  Computer: <em id="computer-score-id">0</em>');

	titleSection.fadeOut("fast", function () {
		titleSection.empty().append(paragraphScore).fadeIn("slow");
	});

	// Draw the grid
	for (var i = 0; i < array.length; i++) {
		//array[i]
	}
}
