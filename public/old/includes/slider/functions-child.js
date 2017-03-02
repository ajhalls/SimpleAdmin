function refreshChild() { //execute this after adding a layer to keep the js informed of all the elements on the page
	$(".btn-add-child").click(function () {
		randomColor = getRandomColor();
		child = Slides[currentSlide]["layers"][currentLayer]["child"].length;
		$('.draggable-' + currentLayer).append('<div style="background-color:'+ randomColor +';z-index:'+ zindex +'" \
		class="resizable draggableChild childElement draggable-child-' + child + '" data-child="' + childKey + '" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" data-type="layerChild"><span class="pre-line text layer-text-child-' + child + '"></span></div>');
		zindex--;
		$('.child-content-' + currentLayer).append('\
		<div class="child-group sortableChild tabs-child child-' + currentLayer + '" data-child="' + childKey + '" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" id="sort_' + currentLayer + '"> \
			<ul>\
			<li style="padding-top: 7px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="key">' + childKey + '</span> <span  class="title">Child</span>&nbsp;&nbsp;&nbsp;&nbsp;</li>\
			<li class="pull-right tabs"><a data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"  href="#child-style-' + slideKey + '-' + layerKey + '-' + childKey + '">Style</a></li>\
			<li class="pull-right tabs"><a data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"  href="#child-image-' + slideKey + '-' + layerKey + '-' + childKey + '">Image</a></li>\
			<li class="pull-right tabs"><a data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"  href="#child-text-' + slideKey + '-' + layerKey + '-' + childKey + '">Text</a></li>\
			</ul>\
			<div>\
			<div id="child-style-' + slideKey + '-' + layerKey + '-' + childKey + '"> \
				<table  data-slide="' + slideKey + '" data-layer="' + layerKey + '" style="border-spacing:1em; border-collapse:separate; ">\
					<tbody>\
						<tr>\
							<td width="155">Layout & Positions</td>\
							<td class="right">Width: </td>\
							<td><input class="childinput sizePosition toggleLayout"  type="text" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="width" data-type="textinput" value="" size="5">\
							</td>\
							<td class="right">Height: </td>\
							<td><input class="childinput sizePosition toggleLayout"  type="text"  value="" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-type="textinput" data-css="height" size="5">\
							</td>\
							<td class="right">Top: </td>\
							<td><input class="childinput sizePosition toggleLayout" data-slide="' + slideKey + '" data-layer="' + layerKey + '" type="text" data-type="textinput" data-css="top" value="" size="5">\
							</td>\
							<td class="right">Left: </td>\
							<td><input class="childinput sizePosition toggleLayout" data-slide="' + slideKey + '" data-layer="' + layerKey + '" type="text" data-type="textinput" data-css="left" value="" size="5">\
							</td>\
						</tr>\
						<tr>\
							<td>Misc</td>\
							<td class="right">Background Color: </td>\
							<td>\
							<input type="text" data-id="' + layerKey + '" data-css="background-color" name="background-color-' + layerKey + '" value="'+randomColor+'" data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="layerInput picker style background-color-' + layerKey + '" size="7"></td>\
							<td class="right"colspan="3">Rounded corners: <input class="childinput" id="layerRadius-' + layerKey + '" name="border-radius-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="layerRadius-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="0.05" data-slider-value="0"/></td>\
						</tr>\
						<tr>\
							<td></td>\
							<td class="right">Custom styles</td>\
							<td colspan="4"><textarea class="childinput customStyle" rows="2" cols="50" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="style-' + layerKey + '"></textarea></td>\
							<td colspan="3"><label for="slider-fill">Opacity:</label>\
							<input class="childinput opacity rangeSlider" step="0.01" type="range" id="opacity-' + layerKey + '" data-css="opacity" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="1" min="0" max="1" data-highlight="true">\
							</td>\
						</tr>\
					</tbody>\
				</table>\
				</div>\
				<div id="child-text-' + slideKey + '-' + layerKey + '-' + childKey + '">\
					<table  data-slide="' + slideKey + '" data-layer="' + layerKey + '" style="border-spacing:1em; border-collapse:separate; ">\
						<tbody>\
							<tr>\
								<td>Enter HTML Text:</td>\
								<td class="right" colspan="2"><textarea size="30" name="text-child-' + child + '"  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" data-child="' + childKey + '" class=" childinput childText"></textarea></td>\
								<td class="style" colspan="4">Text Alignment: <span class="childinput fa fa-align fa-align-left" data-val="left"></span>&nbsp;<span class="childinput fa fa-align fa-align-center" data-val="center"></span>&nbsp;<span class="childinput fa fa-align fa-align-right" data-val="right"></span>\
									Overflow: <select class="childinput style overflow"  data-child="' + childKey + '" data-css="overflow" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="overflow-' + layerKey + '">\
									<option value="visable">Visable</option>\
									<option value="hidden">Hidden</option>\
									</select><br><br>\
									Font Size: <input class="childinput" id="childFontSize-' + slideKey + '-' + layerKey + '"  data-child="' + childKey + '" name="font-size-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="font-size-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="0.05" data-slider-value="12"/>\
								</td>\
							</tr>\
							<tr>\
								<td>Font</td>\
								<td class="right">Family: </td>\
								<td><select class="childinput style" type="text" data-css="font-family" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="font-family-' + layerKey + '" value="">\
								<option class="childinput" value="Gadget">Gadget</option><option value="cursive">cursive</option><option value="Monaco">Monaco</option><option value="sans-serif">sans-serif</option><option value="Palatino">Palatino</option><option value="Times">Times</option><option value="Helvetica">Helvetica</option><option value="Arial">Arial</option><option value="Georgia">Georgia</option><option value="Impact">Impact</option><option value="Tahoma">Tahoma</option><option value="Verdana">Verdana</option><option value="Courier">Courier</option></select>\
								</td>\
								<td class="right">Line Height: </td>\
								<td><input class="childinput style" data-css="line-height" type="text" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="line-height-' + layerKey + '" value="" size="5"></td>\
								<td class="right">Font Color: </td>\
								<td><input type="text" data-id="' + layerKey + '" data-css="color" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="color-' + layerKey + '" value="" class="childPicker color-' + layerKey + ' childinput" size="7"></td>\</td>\
							</tr>\
						</tbody>\
					</table>\
				</div>\
				<div id="child-image-' + slideKey + '-' + layerKey + '-' + childKey + '">\
					<select  style="width: 75%" class="select2 childinput childImage imagesMulti imageSelect-child-' + child + '" data-css="image" data-child="' + childKey + '" data-image="image" name="image-child-' + child + '" value=""  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" multiple="multiple">\
					</select>\
					<br>Image Width:<input type="text" data-child="' + childKey + '" data-image="image" name="image-child-width-' + child + '" value=""  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" class=" childinput image-size childImage" size="7"><br>\
					<br>Image Height:<input type="text" data-child="' + childKey + '" data-image="image" name="image-child-height-' + child + '" value="" class=" childinput image-size childImage" size="7"><br>\
					<br>Rounded Corners:<input type="text" data-child="' + childKey + '" data-css="border-radius" data-image="image" name="image-child-radius-' + child + '"  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" value="" class="childinput child-radius childImage" size="7"><br>\
				</div>\
			<br>Hide Child:<input type="checkbox" data-child="' + childKey + '" name="hide-child-' + child + '"  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" value="" class="childinput childhide"><br>\
			</div>\
		');
		new Slider('#childFontSize-' + slideKey + '-' + layerKey, {});
		$('#childFontSize-' + slideKey + '-' + layerKey).on("slide", function(slideEvt) {
			var fontSize = slideEvt.value;
			Slides[currentSlide]["layers"][currentLayer]["child"][currentChild]["css"]["font-size"] = fontSize;
			$('.draggable-child-' + child).css("font-size", fontSize + "px");
			$(".jsonresults").html(prettyPrint(Slides));
		});
		$.ajax({
		  url: "http://alan.coursesaver.com/uploads/",
		  success: function(data){
			 $(data).find('a:contains(.png), a:contains(.jpg)').each(function(){
				// will loop through 
				var images = $(this).attr("href");

				$('<option></option>').html(images).appendTo('.imageSelect-child-' + child);

			 });
		  }
		});

		$( ".tabs-child" ).tabs({
			collapsible: false,
			active: 0,
			activate: function( event, ui ) {
			}	
		});
		initStuff();
		initChild();
		updateChild();
		Slides[currentSlide]["layers"][currentLayer]["child"].push({"css":{"position":"absolute","background-color":randomColor}});
		childKey++;
		$('.childinput').on('keyup mousedown mouseup',(function(e) {
			updateChild();
			initChild();
			$(".jsonresults").html(prettyPrint(Slides));
		}));
	}); // $(".btn-add-child")
}


function updateChild(){
	if(!$(document.activeElement).val()) {}else{ //check to see if there is something selected with a value to prevent errors
		if($(document.activeElement).hasClass('childText')){
			 text = $('[name="text-child-' + child + '"]').val();
			$('[data-type="layerChild"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-child="'+currentChild+'"]').html(text);
			Slides[currentSlide]["layers"][currentLayer]["child"][child]["text"] = text;
		}

		if($(document.activeElement).hasClass('childinput')){
			if($(document.activeElement).hasClass('overflow')){
				var cssStyle = $(document.activeElement).attr("data-css");
				var cssValue = $(document.activeElement).val();
				$('.draggable-child-' + child).css(cssStyle, cssValue);
				Slides[currentSlide]["layers"][currentLayer]["child"][child]["css"][cssStyle] = $(document.activeElement).val();
			}
			if($(document.activeElement).hasClass('style')){
				var cssStyle = $(document.activeElement).attr("data-css");
					var cssValue = $(document.activeElement).val();
					$('.draggable-' + currentLayer).css(cssStyle, cssValue);
					if($(document.activeElement).hasClass('radius')){
						$('.layer-contents-' + currentLayer).children(".ui-wrapper").css("border-radius", $(document.activeElement).val());
					}
					Slides[currentSlide]["layers"][currentLayer]["child"][child]["css"][cssStyle] = $(document.activeElement).val();
			}
		}		
		if($(document.activeElement).hasClass('childImage')){
			imageWidth = $('[name="image-child-width-' + child + '"]').val();
			imageHeight = $('[name="image-child-height-' + child + '"]').val();
			imageRadius = $('[name="image-child-radius-' + child + '"]').val();
			$('.childId-' +child).width(imageWidth);
			$('.draggable-child-' + child).css("width", imageWidth + "px");
			$('.draggable-child-' + child).css("height", imageHeight + "px");
			$('.draggable-child-' + child).children(".ui-wrapper").css("border-radius", imageRadius + "px");
			if(imageRadius){layers[key]["childElement"][child]["border-radius"] = imageRadius + "px";}
			if(imageWidth){layers[key]["childElement"][child]["width"] = imageWidth + "px";}
			if(imageHeight){layers[key]["childElement"][child]["height"] = imageHeight + "px";}
		}
		if($(document.activeElement).hasClass('childhide')){
			$('.draggable-child-' + child).hide();
		}
	}
	
}


function initChild(){
	$('.accordionChild li.tabs').click(function(e) {      
		e.stopImmediatePropagation();
		return false;      
	}); 
	$('.accordionChild span.noAccordion').click(function(e) {      
		e.stopImmediatePropagation();
		return false;      
	});
	
	$( ".accordionChild" )
	.accordion({
		heightStyle: "content",
		header: "> div > ul",
		collapsible: true,
		activate: function( event, ui ) {
		currentLayer = $( ".accordion" ).accordion( "option", "active" );
		}
	})
	.sortable({
		axis: "y",
		handle: "ul",
		stop: function( event, ui ) {
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
					//console.log(currentSlide);
					Slides[currentSlide]["layers"][currentLayer]["child"][childItem]["css"]["z-index"] = zindex;
					zindex--;
					$(".jsonresults").html(prettyPrint(Slides));
				}
		}
	});
	$( ".layerAccordion" ).accordion( "refresh" );
	$( ".layerAccordion" ).accordion( "option", "active", currentLayer+1-1 );

	$( ".accordionChild" ).accordion( "refresh" );
	$( ".accordionChild" ).accordion( "option", "active", child+1-1 );


	$( ".draggableChild" ).draggable({
		stop: function(event, ui){
			currentLayer = $(this).attr("data-layer");
			childItem = $(this).attr("data-child");
			console.log(childItem);
			Slides[currentSlide]["layers"][currentLayer]["child"][childItem]["css"]["top"] = ui.position.top+"px";
			Slides[currentSlide]["layers"][currentLayer]["child"][childItem]["css"]["left"] = ui.position.left+"px";
			$(".jsonresults").html(prettyPrint(Slides));
		}
	});

	$( ".resizable" ).resizable({
		stop: function(event, ui){
			currentLayer = $(this).attr("data-layer");
			if($(this).hasClass("childElement")) {
				childItem = $(this).attr("data-child");
				Slides[currentSlide]["layers"][currentLayer]["child"][childItem]["css"]["height"] = ui.size.height+"px";
				Slides[currentSlide]["layers"][currentLayer]["child"][childItem]["css"]["width"] = ui.size.width+"px";
			}else{
				Slides[currentSlide]["layers"][currentLayer]["css"]["height"] = ui.size.height+"px";
				Slides[currentSlide]["layers"][currentLayer]["css"]["width"] = ui.size.width+"px";
				$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="width"]').val(ui.size.width+"px");
				$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="height"]').val(ui.size.height+"px");
			}
			$(".jsonresults").html(prettyPrint(Slides));
		}
	});



	$('.childPicker').click(function(){
		pickercss= $(this).attr("data-css");
		
		$('.childPicker').colpick({
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
						Slides[currentSlide]["layers"][currentLayer]["child"][child]["css"][pickercss] = '#'+hex;
						$('[data-type="layerChild"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-child="'+currentChild+'"]').css(pickercss,'#'+hex);
						$('[data-type="layerChild"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-child="'+currentChild+'"] >span').css(pickercss,'#'+hex);
						$('.' + pickercss + '-' + layerKey ).css(pickercss,'#'+hex);
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
			$(".jsonresults").html(prettyPrint(Slides));
			}
		});
	});
	//// Select2 ////
	$(".select2").select2({
		maximumSelectionLength: 2,
		placeholder: "Select option",
		allowClear: true
		});
		
	$('.select2').on("change", function (e) { 
		css = $(this).attr("data-css"); //need to find right selector, used to be 'this'
		if($.isArray($(this).val())) {
		values = $(this).val().join(" ");
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(css, values);
		$(".jsonresults").html(prettyPrint(Slides));
		}
	});

	$('.imagesMulti').on("change", function (e) { 
		values = $(this).val();
		values = values +"";
		if($(this).hasClass('childinput')){
			childItem = $(this).attr("data-child");
			//$('[data-type="layerChild"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"] > div').addClass('childImage');
			$('[data-type="layerChild"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-image', 'url(./uploads/' + values + ')');
			$('[data-type="layerChild"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css({'background-color' : ''});
			Slides[currentSlide]["layers"][currentLayer]["child"][childItem]["image"] = values;
			$(".jsonresults").html(prettyPrint(Slides));
		}else{
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"] > div').addClass('layerImage');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-image', 'url(./uploads/' + values + ')');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-size', '100% 100%');
			Slides[currentSlide]["layers"][currentLayer]["image"]["file"] = values;
		}
		initStuff();
		$(".jsonresults").html(prettyPrint(Slides));
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

}; // function initStuff

