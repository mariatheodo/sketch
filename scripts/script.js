$(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			$("#container").append("<div class='square'></div>");
		}
	}
});

$(document).ready(function() {
	$("#reset").click(function() {
		$(".square").css("background-color", "white");
	});

	$("#newGrid").click(function() {
		var size = prompt("How many squares do you want in the grid?");
		$("#container").empty();
		var w = parseInt(960 / size)- 2;

		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				$("#container").append("<div class='square'></div>");
			}
		};
		$(".square").css({
			width: function(i) {
				return w;
			},
			height: function(i) {
				return w;
			}
		});
	});

	$(".square").mouseenter(function() {
		$(this).css("background-color", "grey");
	});
});