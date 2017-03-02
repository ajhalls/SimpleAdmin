/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

var Slides = [];
	var slideKey = "0";
	var layerKey = "0";
	var childKey = "0";
	var currentSlide = "0";
	var currentLayer = "0";
	var currentChild = "0";
	var currentKeyframe = "";
		Slides.push({
		"background-color": "#aaaaaa",
		"layers": []
		});
	var activeItem = 0;
	var activeSlide = 0;
	var activeKeyframe = "0";
	var arraykeyframe = "0";
	var child=0;
	var childLayer = [];
	var css = "";
	var currentVal = "";
	var image = "";
	var imageHeight="";
	var imageWidth="";
	var key = "0";
	var keyframe = "0";
	var keyframeData = [];
	var lastClicked = "";
	var layers = [];
	var menuKey="0";
	var pickercss = "";
	var randomColor= "";
	var selectedItem = "0";
	var slide=[];
	var slideLength = 0;
	var slideMain = [];
	var style = "";
	var styles = [];
	var toggleValue = "";
	var zindex="100";
	var gridSizeArray =[];
	var gridX = "";
	var gridY = "";
	var gridXY ="";
	var sliderValue = "";
	var gridXval = "";
	var gridYval = "";
	var positionType = "";
	var associatedInput="";
	var associatedValue="";
	var clickedElement;
	var menuId;
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
    }
	randomColor= color;
    return color;
}
function isOdd(n) {
  return n == parseFloat(n) && !!(n % 2);     
}
function isEven(n) {
  return n == parseFloat(n) && !(n % 2);
}
function insertCss( code ) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = code;
    } else {
        // Other browsers
        style.innerHTML = code;
    }

    document.getElementsByTagName("body")[0].appendChild( style );
}
function updateStuff(){
	for (i = 0; i < Slides[currentSlide]["layers"].length; i++) {
		$('[data-type="sliderLayer"][data-layer="'+i+'"][data-slide="'+currentSlide+'"]').css({"box-shadow": "" })
	}
	$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css({"box-shadow": "0px 0px 8px #773da1" })

	if(!$(document.activeElement).val()) {}else{ //check to see if there is something selected with a value to prevent errors
		if($(document.activeElement).hasClass('text')){
			var text = $('[name="text-' + currentLayer + '"]').val();
			$('[data-type="sliderTextLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').html(text);
			Slides[currentSlide]["layers"][currentLayer]["text"] = text;
			return;
		}
		if($(document.activeElement).hasClass('customStyle')){
			var custom = $('[name="style-' + key + '"]').val();
			var customAttribute = custom.split(':');
			
			$('.draggable-' + key).css(customAttribute[0], customAttribute[1]);
			
			Slides[currentSlide]["layers"][currentLayer]["customStyle"] = customAttribute;
		}
		if($(document.activeElement).hasClass('opacity')){
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css($(document.activeElement).attr("data-css"), $(document.activeElement).val());
			Slides[currentSlide]["layers"][currentLayer]["css"][$(document.activeElement).attr("data-css")] = $(document.activeElement).val();
		}
		if($(document.activeElement).hasClass('style')){
			var cssStyle = $(document.activeElement).attr("data-css");
				var cssValue = $(document.activeElement).val();
				$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(cssStyle, cssValue);
				if($(document.activeElement).hasClass('radius')){
					$('.layer-contents-' + currentLayer).children(".ui-wrapper").css("border-radius", $(document.activeElement).val());
				}
				if($(document.activeElement).hasClass('grid')){
					gridItems = $(document.activeElement).val().split("; ");
					//insertCss('.draggable-' + currentLayer + '{' +$(document.activeElement).val() +'}');
					for (i = 0; i < gridItems.length -1; i++) {
						gridSettings = gridItems[i].split(":");
						
						if (gridSettings[0]=="background-size"){
							gridSizeString = gridSettings[1].replace(/,/gi, '');
							gridSizeArray = gridSizeString.split(" ");
							}
						gridX = gridSizeArray[0];
						gridY = gridSizeArray[1];
						$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(gridSettings[0], gridSettings[1]);
						Slides[currentSlide]["layers"][currentLayer]["css"][gridSettings[0]] =  gridSettings[1];
					}
				}

				Slides[currentSlide]["layers"][currentLayer]["css"][cssStyle] = $(document.activeElement).val();
		}
		if($(document.activeElement).hasClass('sizePosition')){
			var style = $(document.activeElement).val();
			console.log(style);
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css($(document.activeElement).attr("data-css"), style);
			Slides[currentSlide]["layers"][currentLayer]["css"][$(document.activeElement).attr("data-css")] = style;

		}
	}
		

}


function initStuff(){

	$('.accordion li.tabs').click(function(e) {      
		e.stopImmediatePropagation();
		return false;      
	}); 
	$('.accordion span.noAccordion').click(function(e) {      
		e.stopImmediatePropagation();
		return false;      
	});
	$('.fa-align').click(function(e) {   
		cssStyle = $(this).attr("data-val");   
		$('.draggable-' + currentLayer).css('text-align', cssStyle);
		Slides[currentSlide]["layers"][currentLayer]["css"]['text-align'] = cssStyle;		     
	});

	$('.removeBackground').click(function(e) {   
		currentSlide = $(this).attr("data-slide");  
		currentLayer= $(this).attr("data-layer");
		$('[data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css({ "background-color": "", "background-size": "", "background-image": "", "background": "" })
		$('[data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="background-color"]').val("")
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background-color"];
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background-size"];
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background-image"];
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background"];
	});




	$( ".accordion" )
	.accordion({
		heightStyle: "content",
		header: "> div > ul",
		collapsible: true,
		beforeActivate:function( event, ui ) {
		},
		activate: function( event, ui ) {
		currentLayer = $( ".accordion" ).accordion( "option", "active" );
			makeActiveGlow();
		}
	})
	.sortable({
		axis: "y",
		handle: "ul",
		stop: function( event, ui ) {
	
			if ($(this).hasClass("jsonresults")) //allow random draggable elements
			{
			}else{
				currentSlide = $(this).attr("data-slide");  
				currentLayer= $(this).attr("data-layer");
						console.log($(this));
				// IE doesn't register the blur when sorting
				// so trigger focusout handlers to remove .ui-state-focus
				ui.item.children( "ul" ).triggerHandler( "focusout" );

				// Refresh accordion to handle new order
				$( this ).accordion( "refresh" );
				
				var order = $(this).sortable("serialize", { key: "sort" });
				var orderArray = order.split("&");

				//not sure why I have to do this now
				function removeA(arr) {
					var what, a = arguments, L = a.length, ax;
					while (L > 1 && arr.length) {
						what = a[--L];
						while ((ax= arr.indexOf(what)) !== -1) {
							arr.splice(ax, 1);
						}
					}
					return arr;
				}
				removeA(orderArray, 'sort=confirm');
				//it happened with consolidation - done now
				
				zindex="100";
					for (i = 0; i < orderArray.length; i++) {
						var orderIndex = orderArray[i].split("=");
						$(".sliderLayer-" +orderIndex[1]).css("z-index", zindex);
						
						Slides[currentSlide]["layers"][orderIndex[1]]["css"]["z-index"] = zindex;
						zindex--;
						editor.set(Slides);
					}
			}
		}
	});


	$( ".draggable" ).draggable({
		stop: function(event, ui){
			makeActiveGlow();
			if (!$(this).attr("data-layer")) //allow random draggable elements
			{
			}else{
				currentSlide = $(this).attr("data-slide");  
				currentLayer= $(this).attr("data-layer");
				var positionTypeTop = $(this).attr("data-positioningTypeTop");
				var positionTypeLeft = $(this).attr("data-positioningTypeLeft");
				var locationTopPx = Slides[currentSlide]["layers"][currentLayer]["positioning"]["topPx"]=ui.position.top +"px";
				var locationTopPercent = Slides[currentSlide]["layers"][currentLayer]["positioning"]["topPercent"]= (ui.position.top / ($(this).parent().height()) *100).toFixed(2) +"%";
				var locationLeftPx = Slides[currentSlide]["layers"][currentLayer]["positioning"]["leftPx"]=ui.position.left +"px"
				var locationLeftPercent = Slides[currentSlide]["layers"][currentLayer]["positioning"]["leftPercent"]=(ui.position.left / ($(this).parent().width()) *100).toFixed(2) +"%";
				if($('.toggleKeyframesControl').prop('checked')==false){
					if(positionTypeTop=="px"){
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateY"]').val(locationTopPx);
						Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["translateY"] =locationTopPx; 
					}else{
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateY"]').val(locationTopPercent);
						Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["translateY"] =locationTopPercent; 
					}
					if(positionTypeLeft=="px"){
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateX"]').val(locationLeftPx);
						Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["translateX"] =locationLeftPx; 
					}else{
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateX"]').val(locationLeftPercent);
						Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["translateX"] =locationLeftPercent; 
					}
					}else{
					if(positionTypeTop=="px"){
						$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="top"]').val(locationTopPx);
						Slides[currentSlide]["layers"][currentLayer]["css"]["top"] =locationTopPx; 
					}else{
						$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="top"]').val(locationTopPercent);
						Slides[currentSlide]["layers"][currentLayer]["css"]["top"] =locationTopPercent; 
					}
					if(positionTypeLeft=="px"){
						$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="left"]').val(locationLeftPx);
						Slides[currentSlide]["layers"][currentLayer]["css"]["left"] =locationLeftPx; 
					}else{
						$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="left"]').val(locationLeftPercent);
						Slides[currentSlide]["layers"][currentLayer]["css"]["left"] =locationLeftPercent; 
					}
					editor.set(Slides);
				}
			}
		}
	});

	$( ".resizable" ).resizable({
		stop: function(event, ui){
			if (!$(this).attr("data-layer")) //allow random draggable elements
			{
			}else{
			currentSlide = $(this).attr("data-slide");  
			currentLayer= $(this).attr("data-layer");
			makeActiveGlow();
			var sizeTypeHeight = $(this).attr("data-positioningtypeheight");
			var sizeTypeWidth = $(this).attr("data-positioningtypewidth");
			var sizeHeightPx = Slides[currentSlide]["layers"][currentLayer]["positioning"]["heightPx"]=ui.size.height +"px";
			var sizeHeightPercent = Slides[currentSlide]["layers"][currentLayer]["positioning"]["heightPercent"]= (ui.size.height / ($(this).parent().height()) *100).toFixed(2) +"%";
			var sizeWidthPx = Slides[currentSlide]["layers"][currentLayer]["positioning"]["widthPx"]=ui.size.width +"px"
			var sizeWidthPercent = Slides[currentSlide]["layers"][currentLayer]["positioning"]["widthPercent"]=(ui.size.width / ($(this).parent().width()) *100).toFixed(2) +"%";
			if($('.toggleKeyframesControl').prop('checked')==false){
				if(sizeTypeHeight=="px"){
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleY"]').val(sizeHeightPx);
					Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["scaleY"] =sizeHeightPx; 
				}else{
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleY"]').val(sizeHeightPercent);
					Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["scaleY"] =sizeHeightPercent; 
				}
				if(sizeTypeWidth=="px"){
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleX"]').val(sizeWidthPx);
					Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["scaleX"] =sizeWidthPx; 
				}else{
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleX"]').val(sizeWidthPercent);
					Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe]["animations"]["scaleX"] =sizeWidthPercent; 
				}

			}else{
				if(sizeTypeHeight=="px"){
					$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="height"]').val(sizeHeightPx);
					Slides[currentSlide]["layers"][currentLayer]["css"]["height"] =sizeHeightPx; 
				}else{
					$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="height"]').val(sizeHeightPercent);
					Slides[currentSlide]["layers"][currentLayer]["css"]["height"] =sizeHeightPercent; 
				}
				if(sizeTypeWidth=="px"){
					$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="width"]').val(sizeWidthPx);
					Slides[currentSlide]["layers"][currentLayer]["css"]["width"] =sizeWidthPx; 
				}else{
					$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="width"]').val(sizeWidthPercent);
					Slides[currentSlide]["layers"][currentLayer]["css"]["width"] =sizeWidthPercent; 
				}
			}
			editor.set(Slides);
			}
		}
	});



	$('.picker').click(function(){
		pickercss= $(this).attr("data-css");
		
		$('.picker').colpick({
			layout:'hex',
			submit:0,
			color:randomColor,
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor ) {
				selectedItem = $(this).attr("data-id");
				//$('.draggable-' + selectedItem ).css(pickercss,'#'+hex);
				
				if(!$(document.activeElement).hasClass("color-main")){
					$(el).val('#'+hex);
					// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
					if(!bySetColor){
						$(el).val('#'+hex);
						Slides[currentSlide]["layers"][currentLayer]["css"][pickercss] = '#'+hex;
						$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(pickercss,'#'+hex);
						//$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"] >span').css(pickercss,'#'+hex);
						$('.' + pickercss + '-' + key ).css(pickercss,'#'+hex);
					}
				}else{
					$(el).val('#'+hex);
					// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
					if(!bySetColor){
						$(el).val('#'+hex);
						Slides["0"]["background-color"] = '#'+hex;
						$('.slider-container' ).css("background-color",'#'+hex);
					}
				}
			editor.set(Slides);
			}
		});
	});
	//// Select2 ////
	$(".select2").select2({
		maximumSelectionLength: 2,
		placeholder: "Select option",
		allowClear: true
		});
	$('.play').on("click", function (e) { 
		var sequenceArray=[];
		for (i = 0; i < Slides[currentSlide]["layers"][currentLayer]["keyframes"].length; i++) {
			var animations = Slides[currentSlide]["layers"][currentLayer]["keyframes"][i]["animations"];
			var options = Slides[currentSlide]["layers"][currentLayer]["keyframes"][i]["options"]
			sequenceArray.push({
			elements:  $('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]'), properties: animations, options: options
			});
			
		}
		console.log(sequenceArray);
		$.Velocity.RunSequence(sequenceArray)
	});
	$('.select2layout').on("change", function (e) { 
		css = $(this).attr("data-css"); //need to find right selector, used to be 'this'
		currentLayer = $(this).attr("data-layer");
		if($.isArray($(this).val())) {
		values = $(this).val().join(" ");
		Slides[currentSlide]["layers"][currentLayer]["css"][css] = values;
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(css, values);
		editor.set(Slides);
		}
	});

	$('.imagesMultiInsert').on("change", function (e) { 
		values = $(this).val();
		values = values +"";
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').html('<img data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" style="position:absolute;z-index:5000;" class="resizable layer-' + currentLayer + '-image" src="./uploads/' + values + '">');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-size', '100% 100%');
			Slides[currentSlide]["layers"][currentLayer]["image"]["file"] = values;

		initStuff();
		editor.set(Slides);
	});
	$('.imagesMultiBackground').on("change", function (e) { 
		currentLayer = $(this).attr("data-layer");
		values = $(this).val();
		values = values +"";
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"] > div').addClass('layerImage');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-image', 'url(./uploads/' + values + ')');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-size', '100% 100%');
			Slides[currentSlide]["layers"][currentLayer]["css"]["background-image"] = "url('./uploads/"+ values + "')";

		initStuff();
		editor.set(Slides);
	});

	//// Toggles the measurements from px to % ////
	$( ".toggleElement" ).slider({
		start: function( event, ui ) {
			css = $(this).attr("data-css");
			layerTag = $(this).attr("data-position");
			toggleValue = $(this).val() ;
			$('.draggable-' + key).css(css, currentVal + toggleValue);
			Slides[currentSlide]["layers"][currentLayer]["css"][layerTag] = currentVal + toggleValue;
		}
	});


	$(".canvasSize").on('keyup mousedown mouseup',(function(e) {
		canvasWidth = $('[name="canvas-width"]').val();
		canvasHeight = $('[name="canvas-height"]').val();
		$('.slider-container').css("width", canvasHeight);
		$('.slider-container').css("height", canvasWidth);
		slideMain["canvasHeight"] =canvasHeight;
		slideMain["canvasWidth"] =canvasWidth;
	}));
	$( ".layerAccordion" ).accordion( "refresh" );
	$( ".layerAccordion" ).accordion( "option", "active", layerKey+1-1 );


}; // function initStuff

function makeActiveGlow() {
	for (i = 0; i < Slides[currentSlide]["layers"].length; i++) {
		$('[data-type="sliderLayer"][data-layer="'+i+'"][data-slide="'+currentSlide+'"]').css({"box-shadow": "" })
	}
	$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css({"box-shadow": "0px 0px 8px #773da1" });
}