$(document).ready(function() {
	for (var j = 0; j < 50; j++) {
		$(".container").append($("<div class=\"row"+j+"\"></div>"));
		var $addedRow = $(".row" + j);
		for (var i = 0; i < 50; i++) {
			$addedRow.append($("<div class=\"cell\"></div>"));
		};


	};
})