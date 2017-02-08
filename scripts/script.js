$(document).ready(function() {
	makeGrid(16);

	$("#reset").on("click", function() {
		$(".square").css("background-color", "white");
	});

	$("#newGrid").on("click", function() {
		var size = prompt("How many squares do you want in the grid?");
		if (size > 0) {
			$("#container").empty();  // delete previous squares
			var w = parseInt(500 / size)- 2;  // minus 2 because of the borders
			makeGrid(size);
			$(".square").css({
				width: function(i) {
					return w;
				},
				height: function(i) {
					return w;
				}
			});
		};
	});

	$("#container").on("mouseenter", ".square", function() {
		var x = getRandom();
		var y = getRandom();
		var z = getRandom();
		$(this).css("background-color", function(i) {
			return "rgb(" + x + ", " + y + "," + z + ")";
		});
	});
});

function makeGrid(x) {
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < x; j++) {
			$("#container").append("<div class='square'></div>");
		}
	};
};

function getRandom() {
  	return Math.floor(Math.random() * 256);
};