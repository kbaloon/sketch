$(document).ready(function() {
	$('#drawB').click(function() {
		var matrix = prompt('Set the size of the Matrix', 50);
		var $cont = $(".container");
		for (var j = 0; j < matrix; j++) {
			$cont.append($("<div class =\"row\" id=\"row"+j+"\"></div>"));
			var $addedRow = $("#row" + j);
			for (var i = 0; i < matrix; i++) {
				$addedRow.append($("<div class=\"cell\"></div>"));
			};
		};
		var $c = $('.cell');
		$c.hover(function() {
		//	$(this).css("background-color","yellow");
			$(this).css("opacity","+=0.05");
		});
	});
	//clear Button - removes the container dive that we've used and adds a clean one 
	$('#clearB').click(function() {
		$(".container").remove();
		$("body").append("<div class=\"container\" style=\"display: table;\"><div>");
	});
})