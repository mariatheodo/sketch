$(document).ready(makeGrid(16));

$(document).ready(function() {
	$(".square").mouseenter(function() {
		$(this).css("background-color", "grey");
	});
});

function reset() {
	$(".square").css("background-color", "white");
};

function newGrid() {
	var size = prompt("How many squares do you want for the grid?");
	$("#container").empty();
	makeGrid(size);
}

function makeGrid(x) {
	var w = parseInt(960 / x)- 2;
	$(".square").css("width", function(i) {
		return w;
	});
	$(".square").css("height", function(i) {
		return w;
	});
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < x; j++) {
			$("#container").append("<div class='square'></div>");
		}
	}
};