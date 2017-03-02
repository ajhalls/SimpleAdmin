function addKeyframe() {

	console.log(currentSlide+currentLayer);
	keyframe = Slides[currentSlide]["layers"][currentLayer]["keyframes"].length -1;
	$('.keyframesTarget[data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').append('\
	<table  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" style="border-spacing:1em; border-collapse:separate; ">\
		<tr>\
			<td>\
			<input type="radio" checked="true" id="activeKeyframe-' + currentSlide + '-' + currentLayer + '-' + keyframe + '" class="activeKeyframe"  name="keyFrame-' + currentSlide + '" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" data-keyframe="' + keyframe + '" value="' + keyframe + '">\
			<input id="slider-keyframe-' + currentLayer + '-' + keyframe +'" class="keyFrameOpts" type="text" data-slide="' + slideKey + '" data-layer="' + currentLayer + '"/></input>\
			</td>\
			<td>\
			<select class="keyFramePreset"   data-keyFrame="'+keyframe+'" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" >\
			<option disabled="" selected="" value="">Effect</option> <option value="callout.bounce">callout.bounce</option> <option value="callout.shake">callout.shake</option> <option value="callout.flash">callout.flash</option> <option value="callout.pulse">callout.pulse</option> <option value="callout.swing">callout.swing</option> <option value="callout.tada">callout.tada</option> <option value="transition.fadeIn">transition.fadeIn</option> <option value="transition.fadeOut">transition.fadeOut</option> <option value="transition.flipXIn">transition.flipXIn</option> <option value="transition.flipXOut">transition.flipXOut</option> <option value="transition.flipYIn">transition.flipYIn</option> <option value="transition.flipYOut">transition.flipYOut</option> <option value="transition.flipBounceXIn">transition.flipBounceXIn</option> <option value="transition.flipBounceXOut">transition.flipBounceXOut</option> <option value="transition.flipBounceYIn">transition.flipBounceYIn</option> <option value="transition.flipBounceYOut">transition.flipBounceYOut</option> <option value="transition.swoopIn">transition.swoopIn</option> <option value="transition.swoopOut">transition.swoopOut</option> <option value="transition.whirlIn">transition.whirlIn</option> <option value="transition.whirlOut">transition.whirlOut</option> <option value="transition.shrinkIn">transition.shrinkIn</option> <option value="transition.shrinkOut">transition.shrinkOut</option> <option value="transition.expandIn">transition.expandIn</option> <option value="transition.expandOut">transition.expandOut</option> <option value="transition.bounceIn">transition.bounceIn</option> <option value="transition.bounceOut">transition.bounceOut</option> <option value="transition.bounceUpIn">transition.bounceUpIn</option> <option value="transition.bounceUpOut">transition.bounceUpOut</option> <option value="transition.bounceDownIn">transition.bounceDownIn</option> <option value="transition.bounceDownOut">transition.bounceDownOut</option> <option value="transition.bounceLeftIn">transition.bounceLeftIn</option> <option value="transition.bounceLeftOut">transition.bounceLeftOut</option> <option value="transition.bounceRightIn">transition.bounceRightIn</option> <option value="transition.bounceRightOut">transition.bounceRightOut</option> <option value="transition.slideUpIn">transition.slideUpIn</option> <option value="transition.slideUpOut">transition.slideUpOut</option> <option value="transition.slideDownIn">transition.slideDownIn</option> <option value="transition.slideDownOut">transition.slideDownOut</option> <option value="transition.slideLeftIn">transition.slideLeftIn</option> <option value="transition.slideLeftOut">transition.slideLeftOut</option> <option value="transition.slideRightIn">transition.slideRightIn</option> <option value="transition.slideRightOut">transition.slideRightOut</option> <option value="transition.slideUpBigIn">transition.slideUpBigIn</option> <option value="transition.slideUpBigOut">transition.slideUpBigOut</option> <option value="transition.slideDownBigIn">transition.slideDownBigIn</option> <option value="transition.slideDownBigOut">transition.slideDownBigOut</option> <option value="transition.slideLeftBigIn">transition.slideLeftBigIn</option> <option value="transition.slideLeftBigOut">transition.slideLeftBigOut</option> <option value="transition.slideRightBigIn">transition.slideRightBigIn</option> <option value="transition.slideRightBigOut">transition.slideRightBigOut</option> <option value="transition.perspectiveUpIn">transition.perspectiveUpIn</option> <option value="transition.perspectiveUpOut">transition.perspectiveUpOut</option> <option value="transition.perspectiveDownIn">transition.perspectiveDownIn</option> <option value="transition.perspectiveDownOut">transition.perspectiveDownOut</option> <option value="transition.perspectiveLeftIn">transition.perspectiveLeftIn</option> <option value="transition.perspectiveLeftOut">transition.perspectiveLeftOut</option> <option value="transition.perspectiveRightIn">transition.perspectiveRightIn</option> <option value="transition.perspectiveRightOut">transition.perspectiveRightOut</option>\
			</select>\
			&nbsp;&nbsp;Position Top:<input data-keyFrame-option="translateY" data-css="translateY" size="4" class="keyFrameOpts"  data-keyFrame="'+keyframe+'" data-slide="' + currentSlide + '"data-type="keyframeInput"  data-layer="' + currentLayer + '" type="text"/></input> Left:<input data-type="keyframeInput" data-css="translateX" data-keyFrame-option="translateX" size="4"  data-keyFrame="'+keyframe+'" class="keyFrameOpts"  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" type="text"/></input>\
			Height:<input data-keyFrame-option="scaleY" data-css="scaleY" size="4" class="keyFrameOpts"   data-keyFrame="'+keyframe+'" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" data-type="keyframeInput" type="text"/></input> Width:<input data-type="keyframeInput" data-css="scaleX" data-keyFrame-option="scaleX" name="keyframe-width-' + currentLayer + '-' + keyframe +'"   data-keyFrame="'+keyframe+'" size="4" class="keyFrameOpts"   data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" type="text"/></input>\
			Opacity:<input data-keyFrame-option="colorAlpha" data-css="colorAlpha" size="4" class="keyFrameOpts"   data-keyFrame="'+keyframe+'" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" data-type="keyframeInput" type="text"/></input>\
			</td>\
		</tr>\
	</table>');
	new Slider("#slider-keyframe-" + currentLayer + "-" + keyframe + "", { id: "slider-keyframe-" + currentLayer + "-" + keyframe + "", min: 0, max: 5000, range: true, value: [2000, 3000] });
	
	$("#slider-keyframe-" + currentLayer + "-" + keyframe + "").on("slide", function(slideEvt) {
	var sliderKeyframe = slideEvt.value;
	var activeSlider = $(this).attr('id').split('-');
	activeKeyframe = activeSlider[3];
	var duration = sliderKeyframe[1] - sliderKeyframe[0];
	
		Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["options"]["delay"] = sliderKeyframe[0];
		Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["options"]["duration"] = duration;
	});

	$('.activeKeyframe').on('click',(function(e) {
		currentLayer = $(document.activeElement).attr("data-layer");
		currentSlide = $(document.activeElement).attr("data-slide");
		currentKeyframe = $(document.activeElement).val();
		makeActiveGlow();
		$(".jsonresults").html(prettyPrint(Slides));
	}));
	$('.keyFrameOpts').on('keyup mousedown mouseup',(function(e) {
		if($(document.activeElement).attr("data-layer")) {currentLayer = $(document.activeElement).attr("data-layer")}
		if($(document.activeElement).attr("data-slide")) {currentSlide = $(document.activeElement).attr("data-slide")}

		updateKeyframes();
		$(".jsonresults").html(prettyPrint(Slides));
	}));
	$('.keyFramePreset').on('click',(function(e) {
		if(!$(document.activeElement).val()) {}else{ //check to see if there is something selected with a value to prevent errors
		keyFrameValue = $(document.activeElement).val();
		if($(document.activeElement).attr("data-layer")) {currentLayer = $(document.activeElement).attr("data-layer")}
		if($(document.activeElement).attr("data-slide")) {currentSlide = $(document.activeElement).attr("data-slide")}
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity(keyFrameValue)
		Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["ui"] = keyFrameValue;
		$(".jsonresults").html(prettyPrint(Slides));
		}
	}));
}

function updateKeyframes(){
	if(!$(document.activeElement).val()) {}else{ //check to see if there is something selected with a value to prevent errors
		selectedKeyframe = 
		keyFrameoption= $(document.activeElement).attr("data-keyFrame-option");
		keyFrameValue = $(document.activeElement).val();
		if($(document.activeElement).hasClass('keyFrameOpts')){
			Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["options"][keyFrameoption] = keyFrameValue;
		}
		if($(document.activeElement).hasClass('keyframeSlider')){
		}
		if($(document.activeElement).hasClass('keyFramePreset')){
		
		}
	}
}