// Draw Grid for the game
function drawGrid_Render (isPlayerTurn) {

	let titleSection = $("#section-title-id");
	let gridSection = $("#section-grid-id");
	let functionSection = $("#section-function-id");

	drawTitle(titleSection, isPlayerTurn);

	drawGrid(gridSection);

	drawFunction(functionSection);

}

// Draw score in title section
function drawTitle (titleSection, isPlayerTurn) {
	// Draw Score paragraph
	let paragraphScore = $("<p>").addClass("board-top").html('<strong id="player-name-id">Player:</strong> <em id="player-score-id">0</em>  <strong id="computer-name-id">Computer:</strong> <em id="computer-score-id">0</em>');

	titleSection.fadeOut("fast", function () {
		titleSection.empty().append(paragraphScore).fadeIn("slow");
		matchTurn(isPlayerTurn);
	});
}

// Draw grid in grid section
function drawGrid (gridSection) {
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
}

// Draw reset button in function section
function drawFunction (functionSection) {
	let linkReset = $("<a>").addClass("reset-link").attr("id", "link-reset-id").text('Reset');

	let paragraphReset = $("<p>").addClass("function-text").append(linkReset);

	functionSection.fadeOut("fast", function () {
		functionSection.empty().append(paragraphReset).fadeIn("slow");
	});
}
