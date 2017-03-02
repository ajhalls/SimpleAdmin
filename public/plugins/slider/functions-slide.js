$(function() {
	/// Functions ///
	$(".add-slide-tabs").click(function () {
		//if(slideKey==0) {slideKey=1}
		slideKey++;
		slideLabel =slideKey+1; 
		Slides.push({
		"background-color":[],
		"layers": [{}]
		});
	$(".slide-tabs-container").append('\
		<li  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" class="pull-left slide-tabs-item slideTab-' + slideKey + ' ">\
			<a class="slide-switch"  data-slide="' + slideKey + '" data-layer="' + currentLayer + '"  href="#slideKey-' + slideKey + '">\
				Slide ' + slideLabel +' \
			</a>\
		</li>\
		');

	$( ".slide-tabs-item" ).tabs();
	$( ".slide-tabs-container" ).sortable();
	$( ".slide-switch" ).on('mouseup',(function(e) {
		currentSlide = $(this).attr("data-slide");
		$.each($(".slide-switch"),function(n){
			$(".slideTab-" + n).children().css("background-color", "#fff;");
				$(".slide-" + n ).hide();
		});
		$(".slide-" + currentSlide).show();
		$(".slideTab-" + currentSlide ).children().css("background-color", "#0099ff;");
		layerKey = Slides[currentSlide]["layers"].length -1;
	}));	
	});
initStuff();
}); // init


