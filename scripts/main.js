$(document).ready(function() {
	var matrix = 100;
	for (var j = 0; j < matrix; j++) {
		$(".container").append($("<div class =\"row\" id=\"row"+j+"\"></div>"));
		var $addedRow = $("#row" + j);
		for (var i = 0; i < matrix; i++) {
			$addedRow.append($("<div class=\"cell\"></div>"));
		};
	};
	var $c = $('.cell');
	$c.hover(function() {
		$(this).css("background-color","yellow");
	});
})