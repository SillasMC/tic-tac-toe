// Draw Grid for the game
function drawGrid_Render (playersChoice) {

	let titleSection = $("#section-title-id");
	let gridSection = $("#section-grid-id");
	let functionSection = $("#section-function-id");

	// Draw Score paragraph
	let paragraphScore = $("<p>").addClass("board-top").html('Player: <em id="player-score-id">0</em>  Computer: <em id="computer-score-id">0</em>');

	titleSection.fadeOut("fast", function () {
		titleSection.empty().append(paragraphScore).fadeIn("slow");
	});

	gridSection.fadeOut("fast", function () {
		gridSection.empty();

		// Draw the grid
		for (var i = 0; i < 3; i++) {
			let divRow = $("<div>").addClass("row");
			for (var j = 0; j < 3; j++) {
				let divSector = $("<div>").attr("id", "grid-" + i + j + "-id").addClass("col-xs-4 col-md-4 col-lg-4 grid-sector grid-" + i + j);
				let linkSector = $("<a>").addClass("fill-div");
				divSector.append(linkSector);
				divRow.append(divSector);
			}
			gridSection.append(divRow).fadeIn("slow");
		}
	});

	let linkReset = $("<a>").addClass("reset-link").attr("id", "link-reset-id").text('Reset');

	let paragraphReset = $("<p>").addClass("function-text").append(linkReset);

	functionSection.fadeOut("fast", function () {
		functionSection.empty().append(paragraphReset).fadeIn("slow");
	});
}
