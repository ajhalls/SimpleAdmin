$(".btn-load").click(function () {

	// var slideData =JSON.parse($('.slideData').val());;

		var slideData ={"background-color":"#aaaaaa","layers":[{"child":[],"css":{"font-family":"arial","position":"absolute","background-color":"#621310","z-index":"100","height":"144px","width":"399px","top":"3px","left":"594px"},"image":{},"keyframes":[{"duration":".2","tween":{"opacity":"0","transform":"translate3d(-3000px, 0, 0)"}},{"duration":".2","tween":{"opacity":"1","transform":"translate3d(25px, 0, 0)"}},{"duration":".2","tween":{"transform":"translate3d(-10px, 0, 0)"}},{"duration":".2","tween":{"transform":"translate3d(5px, 0, 0)"}},{"duration":".2","tween":{"transform":"none"}}],"options":[],"positioning":{"heightPx":"144px","heightPercent":"96.00%","widthPx":"399px","widthPercent":"39.90%","topPx":"3px","topPercent":"2.00%","leftPx":"594px","leftPercent":"59.40%"},"text":{}},{"child":[],"css":{"font-family":"arial","position":"absolute","background-color":"#B9110D","z-index":99,"height":"153px","width":"419px"},"image":{},"keyframes":[{"duration":".2","tween":{"opacity":"0","transform":"translate3d(3000px, 0, 0)"}},{"duration":".2","tween":{"opacity":"1","transform":"translate3d(-25px, 0, 0)"}},{"duration":".2","tween":{"transform":"translate3d(10px, 0, 0)"}},{"duration":".2","tween":{"transform":"translate3d(-5px, 0, 0)"}},{"duration":".2","tween":{"transform":"none"}},{"duration":".2","tween":{"transform":"translate3d(0,0,0)"}},{"duration":".2","tween":{"transform":"translate3d(0, -30px, 0)"}},{"duration":".2","tween":{"transform":"translate3d(0, -15px, 0)"}},{"duration":".2","tween":{"transform":"translate3d(0,-4px,0)"}}],"options":[],"positioning":{"heightPx":"153px","heightPercent":"102.00%","widthPx":"419px","widthPercent":"41.90%"},"text":{}}]}; 	
		Slides.pop();
		Slides.push(slideData);
		console.log(slideData);
		editor.get(Slides);
	$(".slider-container").css("background-color", Slides["background-color"]);

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

		$(".jsonresults").html(prettyPrint(Slides));
	}));
});