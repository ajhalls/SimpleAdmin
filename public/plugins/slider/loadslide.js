function loadSlide(slideData) {

		Slides.pop();
		Slides.push(slideData);
		editor.set(Slides);
	$(".slider-container").css("background-color", Slides["background-color"]);
	$(".canvasItem").remove();
	$(".layerAccordion").html("");
	$('.slider-container').css("height", Slides[0]["canvasHeight"]);
	$('.slider-container').css("width", Slides[0]["canvasWidth"]);
	$('.slider-container').css("background-color", Slides[0]["background-color"]);
	$(".bootstrapSlider").slider( "destroy" );


	for (S = 0; S < Slides.length; S++) {
		slideKey = S;
		for (i = 0; i < Slides[slideKey]["layers"].length; i++) {
			layerKey = i;
			var arrayLength = 0;
				accordianLayer(); //insert the div for layout / style settings

			for (var css in Slides[slideKey]["layers"][i]["css"]) {
				$('[data-type="sliderLayer"][data-layer="'+i+'"][data-slide="'+slideKey+'"]').css(css, Slides[slideKey]["layers"][i]["css"][css]);
				$('.layerInput[data-layer="'+i+'"][data-slide="'+slideKey+'"][data-css="'+css+'"]').val(Slides[slideKey]["layers"][i]["css"][css]);
				arrayLength++
			}
			for (var text in Slides[slideKey]["layers"][i]["text"]) {
				$('[data-type="sliderTextLayer"][data-layer="'+layerKey+'"][data-slide="'+slideKey+'"]').html(Slides[slideKey]["layers"][i]["text"]);
				arrayLength++
			}

			for (var KeyframeLoad in Slides[slideKey]["layers"][i]["keyframes"]) {
				console.log(KeyframeLoad);
				addKeyframe(slideKey,i,KeyframeLoad);
				//$('[data-type="sliderKeyframesLayer"][data-layer="'+layerKey+'"][data-slide="'+slideKey+'"]').html(Slides[slideKey]["layers"][i]["text"]);
				arrayLength++
			}
				console.log("i=" + i);
			for (Child = 0; Child < Slides[slideKey]["layers"][i]["child"].length; Child++) {
			$("<div class='child-"+ i +"'></div>").appendTo($(".layer-"+ i));
			
				for (var childCSS in Slides[slideKey]["layers"][i]["child"][Child]["css"]) {
					$(".child-"+ c).css(childCSS, Slides[slideKey]["layers"][i]["child"][Child]["css"][childCSS]);
					console.log("i=" + i);
					console.log("c=" + Child);
					console.log("child=" + childCSS);
					
				}
				for (var child in Slides[slideKey]["layers"][i]["child"][Child]["text"]) {
					$(".child-"+ i).html(Slides[slideKey]["layers"][i]["child"][Child]["text"]);
					arrayLength++
				}
			}
			for (var key in Slides[slideKey]["layers"][i]["image"]) {
				console.log(Slides[slideKey]["layers"][i]["image"][key]);
				$(".layer-"+ i).html("<img class='layer-" + i + "-image' src='./uploads/" + Slides[slideKey]['layers'][i]['image']["file"] + "'>");
				$(".layer-" + i + "-image").css(layerKey, Slides[slideKey]["layers"][i]["image"][key]);
				arrayLength++
			}

			$(".draggable").draggable();
			$(".resizable").resizable();
			$('.accordion').accordion();
			$('.tabs').tabs();
			//initStuff();
		layerKey++
		$( ".tabs" ).tabs({
		collapsible: false,
		active: 5,
		activate: function( event, ui ) {
		}	
	});
		}
	}

	$('.layerInput').on('keyup mousedown mouseup',(function(e) {
		if($('.toggleKeyframesControl').prop('checked')==false){
		updateKeyframes();
		}else{
		if($(document.activeElement).attr("data-layer")) {currentLayer = $(document.activeElement).attr("data-layer")}
		if($(document.activeElement).attr("data-slide")) {currentSlide = $(document.activeElement).attr("data-slide")}
		updateStuff();
		}

		editor.set(Slides);
	}));
};