function accordianLayer(){
	$(".slider-container").append('<div style="background-color:'+ randomColor +';z-index:'+ zindex +'" class="resizable draggable canvasItem sliderLayer-'+ layerKey +' slide-' + currentSlide + ' draggable-' + layerKey + '" data-id="' + layerKey + '" data-positioningTypeTop="px" data-positioningTypeLeft="px" data-positioningtypeheight="px" data-positioningtypewidth="px" data-slide="' + slideKey + '" data-type="sliderLayer" data-layer="' + layerKey + '">\
		<span data-slide="' + slideKey + '" data-type="sliderTextLayer" data-layer="' + layerKey + '" class="pre-line"></span>\
	</div>');

var accordionHTML = '<div class="col-md-12 group layerGroup slide-' + currentSlide + ' layer-' + layerKey + '" data-slide="' + currentSlide + '" data-layer="' + layerKey + '" id="sort_' + layerKey + '"> \
	<a data-toggle="collapse" href="#collapse-' + slideKey + '-' + layerKey + '"><i class="collapseToggle indicator glyphicon glyphicon-chevron-up  pull-right"></i></a>\
	<ul data-slide="' + slideKey + '"  data-layer="' + layerKey + '"  class="nav nav-tabs">\
		<li role="presentation" style="padding-top: 7px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="key">' + layerKey + '</span> <span>Layer</span>&nbsp;&nbsp;&nbsp;&nbsp; <span class="noAccordion deleteLayer" data-slide="' + slideKey + '" data-layer="' + layerKey + '" >Delete Layer</span></li>\
		<li role="presentation" class="pull-right"><a data-toggle="tab" data-slide="' + slideKey + '" data-layer="' + layerKey + '" href="#keyframes-' + slideKey + '-' + layerKey + '">Keyframes</a></li>\
		<li role="presentation" class="pull-right"><a data-toggle="tab" data-slide="' + slideKey + '" data-layer="' + layerKey + '" href="#contents-' + slideKey + '-' + layerKey + '">Contents</a></li>\
		<li role="presentation" class="pull-right"><a data-toggle="tab" data-slide="' + slideKey + '" data-layer="' + layerKey + '" href="#styling-' + slideKey + '-' + layerKey + '">Styling</a></li>\
		<li role="presentation" class="pull-right"><a data-toggle="tab" data-slide="' + slideKey + '" data-layer="' + layerKey + '" href="#general-' + slideKey + '-' + layerKey + '">General</a></li>\
	</ul>\
	<div id="collapse-' + slideKey + '-' + layerKey + '" class="tab-content bootstrapCollapse accordionPanelContent">\
	<div id="styling-' + slideKey + '-' + layerKey + '" class="tab-pane fade">\
		<div class="col-sm-3">\
		<ul class="nav nav-pills nav-stacked layerVerticalTabs">\
				<li role="presentation" class="active"><a  class="" data-toggle="tab"  href="#modifyBackgroundContainer-' + slideKey + '-' + layerKey + '">Background</a></li>\
				<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#bordersContainer-' + slideKey + '-' + layerKey + '">Borders</a></li>\
				<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyShadowContainer-' + slideKey + '-' + layerKey + '">Drop Shadow</a></li>\
		</ul>	    	\
		</div>\
		<div class="tab-content col-sm-9">\
			<div id="bordersContainer-' + slideKey + '-' + layerKey + '" class="tab-pane in col-sm-12">\
				<div class="form-group row">\
					<div class="row borderwidth"  >\
						<div class="col-md-3"><strong>Width</strong> Top: \
							<select class="layerInput select2layout js-select2 select2"  style="width: 100%" data-css="border-top" data-key="' + layerKey + '" name="border-top-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" multiple="multiple">\
								<optgroup label="Border Width">\
								<option value="1px">1px</option><option value="2px">2px</option><option value="3px">3px</option><option value="4px">4px</option><option value="5px">5px</option>\
								</optgroup>\
							</select>\
						</div><div class="col-md-3">Bottom: \
							<select class="layerInput select2layout js-select2 select2" style="width: 100%" data-css="border-bottom" data-key="' + layerKey + '" name="border-bottom-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" multiple="multiple">\
								<optgroup label="Border Width">\
								<option value="1px">1px</option><option value="2px">2px</option><option value="3px">3px</option><option value="4px">4px</option><option value="5px">5px</option>\
								</optgroup>\
							</select>\
						</div><div class="col-md-3">Left: \
							<select class="layerInput select2layout js-select2 select2" style="width: 100%" data-css="border-left" data-key="' + layerKey + '" name="border-left-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" multiple="multiple">\
								<optgroup label="Border Width">\
								<option value="1px">1px</option><option value="2px">2px</option><option value="3px">3px</option><option value="4px">4px</option><option value="5px">5px</option>\
								</optgroup>\
							</select>\
						</div><div class="col-md-3">Right: \
							<select class="layerInput select2layout js-select2 select2" style="width: 100%" data-css="border-right" data-key="' + layerKey + '" name="border-right-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" multiple="multiple">\
								<optgroup label="Border Width">\
								<option value="1px">1px</option><option value="2px">2px</option><option value="3px">3px</option><option value="4px">4px</option><option value="5px">5px</option>\
								</optgroup>\
							</select>\
						</div>\
					</div>\
					<div class="row borderstyle"  style="padding-top:12px">\
						<div class="col-md-3"><strong>Style</strong>\
							<select class="layerInput select2layout js-select2 select2"  style="width: 100%" data-css="border-style" data-key="' + layerKey + '" name="border-top-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" multiple="multiple">\
								<optgroup label="Border Style">\
								<option value="none">none</option><option value="dotted">dotted</option><option value="dashed">dashed</option><option value="solid">solid</option><option value="double">double</option><option value="groove">groove</option><option value="ridge">ridge</option><option value="inset">inset</option><option value="outset">outset</option>\
								</optgroup>\
							</select>\
						</div>\
						<div class="col-md-3" style="padding-top:4px">Border Color:<br>\
							<input type="text" data-id="' + layerKey + '" data-type="textinput" data-css="border-color" name="border-color-' + layerKey + '" value="'+randomColor+'" data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="layerInput picker style border-color-' + layerKey + '" size="7">\
						</div>\
						<div class="col-md-6" style="padding-top:7px">Rounded corners:<br style="margin:5px;"><input class="layerInput bootstrapSlider"  style="width:100%;" data-css="border-radius" id="layerRadius-' + layerKey + '" name="border-radius-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="layerRadius-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="0.05" data-slider-value="0"/></div>\
					</div>\
				</div>\
			</div>\
			<div id="modifyShadowContainer-' + slideKey + '-' + layerKey + '" class="tab-pane in col-sm-12">\
				<div class="form-group row">\
				***\
				</div>\
			</div>\
			<div id="modifyBackgroundContainer-' + slideKey + '-' + layerKey + '" class="tab-pane  active in col-sm-12">\
				<div class="form-group row">\
				      <div class="col-sm-12">\
						<div class="row"><div class="col-md-4">Background Color:<input type="text" data-id="' + layerKey + '" data-type="textinput" data-css="background-color" name="background-color-' + layerKey + '" value="'+randomColor+'" data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="layerInput picker style background-color-' + layerKey + '" size="7">\
								<a class="btn removeBackground" data-slide="' + slideKey + '" data-layer="' + layerKey + '">Remove Background</a></div>\
						<div class="col-md-6">Background CSS: <select value="" name="grid-1" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="grid" type="text" class="layerInput grid style">\
							<option value=""selected="">None</option> <option value="background-size:50px 50px; background-color:#0ae; background-image:-webkit-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent); background-image:-moz-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent); background-image:linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent); -pie-background:linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent) 0 0 / 50px #0ae;"class="layerInput">Thick Horizontal</option> <option value="background-size:50px 50px; background-color:#f90; background-image:-webkit-linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent); background-image:-moz-linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent); background-image:linear-gradient(90deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent); -pie-background:linear-gradient(90deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent) 0 0 / 50px 50px #f90;"class="layerInput">Thick Vertical</option>\
							<option value="background-size:50px 50px; background-color:white; background-image:-webkit-linear-gradient(transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)), -webkit-linear-gradient(0deg, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)); background-image:-moz-linear-gradient(transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)), -moz-linear-gradient(0deg, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)); background-image:linear-gradient(transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)), linear-gradient(90deg, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5));"class="layerInput">Plaid</option>\ <option value="background-size:50px 50px; background-color:#ac0; background-image:-webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent); background-image:-moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent); background-image:linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);"class="layerInput">Slant Right</option>\
							<option value="background-size:50px 50px; background-color:#c16; background-image:-webkit-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent); background-image:-moz-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent); background-image:linear-gradient(135deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);"class="layerInput">Slant Left</option>\
							<option value="background:-webkit-linear-gradient(63deg, #151515 5px, transparent 5px) 0 5px,-webkit-linear-gradient(243deg, #151515 5px, transparent 5px) 10px 0px,-webkit-linear-gradient(63deg, #222 5px, transparent 5px) 0px 10px,-webkit-linear-gradient(243deg, #222 5px, transparent 5px) 10px 5px,-webkit-linear-gradient(0deg, #1b1b1b 10px, transparent 10px),-webkit-linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); background:-moz-linear-gradient(63deg, #151515 5px, transparent 5px) 0 5px,-moz-linear-gradient(243deg, #151515 5px, transparent 5px) 10px 0px,-moz-linear-gradient(63deg, #222 5px, transparent 5px) 0px 10px,-moz-linear-gradient(243deg, #222 5px, transparent 5px) 10px 5px,-moz-linear-gradient(0deg, #1b1b1b 10px, transparent 10px),-moz-linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); background:linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,linear-gradient(90deg, #1b1b1b 10px, transparent 10px),linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); background-size:20px 20px; background-color:#131313;">Carbon Fiber</option>\
							<option value="background-size:58px 58px; background-color:silver; background-position:0px 2px, 4px 35px, 29px 31px, 34px 6px; background-image:-webkit-linear-gradient(115deg, #b00 23px, transparent 23px), -webkit-linear-gradient(295deg, #d00 23px, transparent 23px), -webkit-linear-gradient(115deg, #b00 23px, transparent 23px), -webkit-linear-gradient(295deg, #d00 23px, transparent 23px); background-image:-moz-linear-gradient(115deg, #b00 23px, transparent 23px), -moz-linear-gradient(295deg, #d00 23px, transparent 23px), -moz-linear-gradient(115deg, #b00 23px, transparent 23px), -moz-linear-gradient(295deg, #d00 23px, transparent 23px); background-image:linear-gradient(335deg, #b00 23px, transparent 23px) 0 2px, linear-gradient(155deg, #d00 23px, transparent 23px) 4px 35px, linear-gradient(335deg, #b00 23px, transparent 23px) 29px 31px, linear-gradient(155deg, #d00 23px, transparent 23px) 34px 6px;">Bricks</option>\
							<option value="background-size:80px 140px; background-color:#556; background-position:0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px; background-image:-webkit-linear-gradient(60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -webkit-linear-gradient(-60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -webkit-linear-gradient(60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -webkit-linear-gradient(-60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -webkit-linear-gradient(30deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), -webkit-linear-gradient(30deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a); background-image:-moz-linear-gradient(60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -moz-linear-gradient(-60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -moz-linear-gradient(60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -moz-linear-gradient(-60deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), -moz-linear-gradient(30deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), -moz-linear-gradient(30deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a); background-image:linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445) 0 0, linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445) 0 0, linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445) 40px 70px, linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445) 40px 70px, linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a) 0 0, linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a) 40px 70px / 80px 140px;">Qbert</option>\
							<option value="background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px; background-color:#269; background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px; background-image:-webkit-linear-gradient(white 2px, transparent 2px), -webkit-linear-gradient(0, white 2px, transparent 2px), -webkit-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), -webkit-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px); background-image:-moz-linear-gradient(white 2px, transparent 2px), -moz-linear-gradient(0, white 2px, transparent 2px), -moz-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), -moz-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px); background-image:linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);">Blueprint Grid</option>\
							<option value="background-size:13px 13px, 29px 29px, 37px 37px, 53px 53px; background-color:#026873; background-image:-webkit-linear-gradient(0, rgba(255,255,255,.07) 50%, transparent 50%), -webkit-linear-gradient(0, rgba(255,255,255,.13) 50%, transparent 50%), -webkit-linear-gradient(0, transparent 50%, rgba(255,255,255,.17) 50%), -webkit-linear-gradient(0, transparent 50%, rgba(255,255,255,.19) 50%); background-image:-moz-linear-gradient(0, rgba(255,255,255,.07) 50%, transparent 50%), -moz-linear-gradient(0, rgba(255,255,255,.13) 50%, transparent 50%), -moz-linear-gradient(0, transparent 50%, rgba(255,255,255,.17) 50%), -moz-linear-gradient(0, transparent 50%, rgba(255,255,255,.19) 50%); background-image:linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%), linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%);">Vertical Lines</option>\
						</select>\
						</div>\
							<div class="row"><br><br>\
								<div class="col-md-6">\
									Advanced Options<br>\
									<div class="row" ><div class="col-md-4">Scale Grid X & Y: </div><div class="col-md-8"><input style="width:250px" class="layerInput gridsize bootstrapSlider"  data-css="gridXY" id="gridXY-' + layerKey + '" name="gridXY-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="gridXY-' + layerKey + 'Slider" type="text" data-slider-min="-10" data-slider-max="50" data-slider-step="0.05" data-slider-value="1"/></div></div>\
									<div class="row" ><div class="col-md-4">Size X: </div><div class="col-md-8"><input style="width:250px" class="layerInput gridsize bootstrapSlider" id="gridX-' + layerKey + '" data-css="gridX" name="gridX-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="gridX-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="150" data-slider-step="1" data-slider-value="50"/></div></div>\
									<div class="row" ><div class="col-md-4">Size Y: </div><div class="col-md-8"><input style="width:250px" class="layerInput gridsize bootstrapSlider" id="gridY-' + layerKey + '" data-css="gridY" name="gridX-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="gridX-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="150" data-slider-step="1" data-slider-value="50"/></div></div>\
								</div>\
							</div>\
						</div>\
						<div class="row" ><div class="col-md-2">Opacity:</div><div class="col-md-4"><input class="layerInput opacity rangeSlider" step="0.01" type="range" id="opacity-' + layerKey + '" data-css="opacity" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="1" min="0" max="1" data-highlight="true"></div></div>\
				      </div>\
				</div>\
			</div>\
		</div>\
	</div>';

accordionHTML += '<div id="contents-' + slideKey + '-' + layerKey + '" class="tab-pane fade">\
		<div class="col-sm-3">\
		<ul class="nav nav-pills nav-stacked layerVerticalTabs">\
				<li role="presentation" class="active"><a  class="" data-toggle="tab"  href="#modifyContentsContainer-' + slideKey + '-' + layerKey + '">Text / HTML</a></li>\
				<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyImagesContainer-' + slideKey + '-' + layerKey + '">Image</a></li>\
		</ul>	    	\
		</div>\
		<div class="tab-content col-sm-9">\
			<div id="modifyContentsContainer-' + slideKey + '-' + layerKey + '" class="tab-pane in active col-sm-12">\
				<div class="row" >\
					<div class="col-md-5">\
						<div class="row">\
							<div class="col-md-12">\
							Enter HTML Text:<BR>\
							<textarea rows="2" cols="30" name="text-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="layerInput text"></textarea>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-md-12">\
								<div class="row" style="padding-top:8px">Font Family: <select class="layerInput style" type="text" data-css="font-family" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="font-family-' + layerKey + '" value="">\
									<option selected value="Arial">Arial</option><option class="layerInput" value="Gadget">Gadget</option><option value="cursive">cursive</option><option value="Monaco">Monaco</option><option value="sans-serif">sans-serif</option><option value="Palatino">Palatino</option><option value="Times">Times</option><option value="Helvetica">Helvetica</option><option value="Georgia">Georgia</option><option value="Impact">Impact</option><option value="Tahoma">Tahoma</option><option value="Verdana">Verdana</option><option value="Courier">Courier</option></select>\
									Color: <input type="text" data-id="' + layerKey + '" data-css="color" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="color-' + layerKey + '" value="" class="picker color-' + layerKey + ' layerInput" size="5"></div>\
								<div class="row" style="padding-top:8px">Text Shadow Offset:\
									<select class="layerShadow style" type="text" data-type="layerShadow" data-css="text-shadow" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="text-shadow-' + layerKey + '" value="">\
										<option selected value="">None</option> <option value="1px  1px">1px, 1px</option> <option value="2px  2px">2px, 2px</option> <option value="3px  3px">3px, 3px</option> <option value="4px 4px">4px, 4px</option> <option value="5px 5px">5px, 5px</option>\
									</select>\
								</div>\
								<div class="row">Color: <input type="text" data-type="layerShadow" class="layerShadowPicker text-shadow-' + layerKey + '" data-id="' + layerKey + '" data-css="text-shadow" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="text-shadow-color-' + layerKey + '" value="" size="7">\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="col-md-7" >\
						<div class="row" style="padding:5px">\
							<div class="col-md-12" >\
								Text Alignment: <span class="layerInput fa fa-align fa-align-left" data-val="left"></span>&nbsp;\<span class="layerInput fa fa-align fa-align-center" data-val="center"></span>&nbsp;<span class="layerInput fa fa-align fa-align-right" data-val="right"></span>\
								Overflow: <select class="layerInput style" data-css="overflow" data-slide="' + slideKey + '" data-layer="' + layerKey + '" name="overflow-' + layerKey + '">\
								<option value="visable">Visable</option>\
								<option value="hidden">Hidden</option>\
								</select>\
							</div>\
						</div>\
						<div class="row" ><div class="col-md-3">Font Size:</div><div class="col-md-9"><input class="layerInput bootstrapSlider" data-css="font-size" id="fontSize-' + layerKey + '" name="font-size-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="font-size-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="0.05" data-slider-value="12"/></div></div>\
						<div class="row"><div class="col-md-3">Line Height:</div><div class="col-md-9"><input class="layerInput bootstrapSlider" data-css="line-height" id="lineheight-' + layerKey + '" name="line-height-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="line-height-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="5" data-slider-step="0.01" data-slider-value="1"/></div></div>\
						<div class="row"><div class="col-md-3">Letter Spacing:</div><div class="col-md-9"><input class="layerInput bootstrapSlider" data-css="letter-spacing" id="letterspacing-' + layerKey + '" name="letter-spacing-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="letter-spacing-' + layerKey + 'Slider" type="text" data-slider-min="-75" data-slider-max="75" data-slider-step="0.05" data-slider-value="1"/></div></div>\
					</div>\
				</div>\
			</div>\
			<div id="modifyImagesContainer-' + slideKey + '-' + layerKey + '" class="tab-pane in col-sm-12">\
				Images on Server:<br>\
				Background CSS Image:<select class="imagesMultiBackground imagesMulti select2 layerInput" style="width: 60%" data-css="image" data-image="image" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" ></select><br><br>\
				Image:<select class="imagesMultiInsert imagesMulti select2 layerInput" style="width: 60%" data-css="image" data-image="image" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" ></select><br><br>\
				Custom URL for Image:<BR>\
				<input type="text" name="transition-length-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="transition" size="35"><BR><BR>\
				Border Radius:\
				<input class="layerInput" id="radius-' + layerKey + '" name="border-radius-' + layerKey + '" data-slider-id="radius-' + layerKey + 'Slider" type="text" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-min="0" data-slider-max="100" data-slider-step="0.05" data-slider-value="0"/>\
			</div>\
		</div>\
	</div>';

accordionHTML += '<div id="general-' + slideKey + '-' + layerKey + '" class="tab-pane fade"> \
		<div class="col-sm-3">\
		<ul class="nav nav-pills nav-stacked layerVerticalTabs">\
				<li role="presentation" class="active"><a  class="" data-toggle="tab"  href="#sizePositionContainer-' + slideKey + '-' + layerKey + '">Size / Position</a></li>\
				<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyLayer-' + slideKey + '-' + layerKey + '">Layer Name / Properties</a></li>\
				<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyRotation-' + slideKey + '-' + layerKey + '">Rotation</a></li>\
		</ul>	    	\
		</div>\
		<div class="tab-content col-sm-9">\
			<div id="sizePositionContainer-' + slideKey + '-' + layerKey + '" class="tab-pane active in col-sm-12">\
				<div class="form-group row"><strong>Size:</strong>\
				      <div class="col-sm-12">\
							<div class="col-md-1">Width: </div>\
							<div class="col-md-5"><input class="layerInput sizePosition toggleLayout"  type="text" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="width" data-type="textinput" value="" size="5">\
							<input checked class="layerInput sizePosition togglePx" data-associated="width" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="width" data-toggle="toggle"  data-size="mini" data-on="px" data-off="%" data-onstyle="success" data-offstyle="danger" type="checkbox">\
							 </div>\
							<div class="col-md-1">Height: </div>\
							<div class="col-md-5"><input class="layerInput sizePosition toggleLayout"  type="text"  value="" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-type="textinput" data-css="height"  size="5">\
							<input checked class="layerInput sizePosition togglePx" data-associated="height" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="height" data-toggle="toggle"  data-size="mini" data-on="px" data-off="%" data-onstyle="success" data-offstyle="danger" type="checkbox">\
							 </div>\
				      </div>\
				</div>\
				<div class="form-group row"><strong>Position:</strong>\
				      <div class="col-sm-12">\
							<div class="col-md-1">Top: </div>\
							<div class="col-md-5"><input class="layerInput sizePosition toggleLayout" id="flip-c" data-slide="' + slideKey + '" data-layer="' + layerKey + '" type="text" data-type="textinput" data-css="top" value="" size="5">\
							<input checked class="layerInput sizePosition togglePx" data-associated="top" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="top" data-toggle="toggle"  data-size="mini" data-on="px" data-off="%" data-onstyle="success" data-offstyle="danger" type="checkbox">\
							 </div>\
							<div class="col-md-1">Left: </div>\
							<div class="col-md-5"><input class="layerInput sizePosition toggleLayout" id="flip-d" data-slide="' + slideKey + '" data-layer="' + layerKey + '" type="text" data-type="textinput" data-css="left" value="" size="5">\
							<input checked class="layerInput sizePosition togglePx" data-associated="left" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-css="left" data-toggle="toggle"  data-size="mini" data-on="px" data-off="%" data-onstyle="success" data-offstyle="danger" type="checkbox">\
							</div>\
				      </div>\
				</div>\
				<div class="form-group row"><strong>Padding:</strong>\
				      <div class="col-sm-12">\
						<div class="col-md-1"> Top:</div>\
						<div class="col-md-2"><input class="layerInput sizePosition" type="text" data-css="padding-top" name="padding-top-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" size="5"></div>\
						<div class="col-md-1">Bottom:</div>\
						<div class="col-md-2"><input class="layerInput sizePosition" type="text" data-css="padding-bottom" name="padding-bottom-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" size="5"></div>\
						<div class="col-md-1">Left:</div>\
						<div class="col-md-2"><input class="layerInput sizePosition" type="text" data-css="padding-left" name="padding-left-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" size="5"></div>\
						<div class="col-md-1">Right:</div>\
						<div class="col-md-2"><input class="layerInput sizePosition" type="text" data-css="padding-right" name="padding-right-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" size="5"></div>\
					</div>\
				</div>\
			</div>\
			<div id="modifyLayer-' + slideKey + '-' + layerKey + '" class="tab-pane in col-sm-12">\
				      <div class="col-sm-12">\
						<div class="col-md-2"> Name:</div>\
						<div class="col-md-2"><input class="layerInput sizePosition" type="text" data-css="padding-top" name="padding-top-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" value="" size="5"></div>\
					</div>\
			</div>\
			<div id="modifyRotation-' + slideKey + '-' + layerKey + '" class="tab-pane in col-sm-12">\
				<div class="form-group row">\
				      <div class="col-sm-12"><br>\
							<div class="col-md-2" style="padding-bottom:8px;"><strong>Rotate Z:</strong></div>\
							<div class="col-md-10" style="padding-bottom:8px;"><input class="layerInput rotateSlider" data-css="rotateZ" id="rotateZ-' + layerKey + '" name="rotate-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="rotate-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="360" data-slider-step="1" data-slider-value="0"/></div>\
							<div class="col-md-2" style="padding-bottom:8px;"><strong>Rotate X:</strong></div>\
							<div class="col-md-10" style="padding-bottom:8px;"><input class="layerInput rotateSlider" data-css="rotateX" id="rotateX-' + layerKey + '" name="rotate-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="rotate-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="360" data-slider-step="1" data-slider-value="0"/></div>\
							<div class="col-md-2" style="padding-bottom:8px;"><strong>Rotate Y:</strong></div>\
							<div class="col-md-10" style="padding-bottom:8px;"><input class="layerInput rotateSlider" data-css="rotateY" id="rotateY-' + layerKey + '" name="rotate-' + layerKey + '" data-slide="' + slideKey + '" data-layer="' + layerKey + '" data-slider-id="rotate-' + layerKey + 'Slider" type="text" data-slider-min="0" data-slider-max="360" data-slider-step="1" data-slider-value="0"/></div>\
				      </div>\
				</div>\
			</div>\
		</div>\
	</div>';

accordionHTML += '<div id="child-' + slideKey + '-' + layerKey + '" class="tab-pane fade"> \
		<table  data-slide="' + slideKey + '" data-layer="' + layerKey + '" style="border-spacing:1em; border-collapse:separate; ">\
			<tbody>\
			<tr><td colspan="5">\
				<a class="btn-add-child" data-slide="' + slideKey + '" data-layer="' + layerKey + '" >Add child content</a>\
			</td></tr>\
			</tbody>\
		</table>\
		<div class="accordionChild sortableChild child-content-' + layerKey + ' " data-slide="' + slideKey + '" data-layer="' + layerKey + '" ></div>\
	</div>';
accordionHTML += '<div id="keyframes-' + slideKey + '-' + layerKey + '" class="tab-pane fade">\
		<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="KeyframesControl col-md-12  m-0 p-0">\
			<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="KeyframesControlLeft col-md-2  m-0 p-0">\
				<div class="col-md-12 timeline-control-buttons m-0 p-0">\
					<span data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="btn playPause btn-primary btn-sm playAnimation timeline-btn"><i class="fa fa-play">&nbsp;</i></span></span>\
					<span data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="btn restartBtn btn-primary btn-sm timeline-btn"><i class="fa fa-refresh">&nbsp;</i></span>\
					<span data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="btn AddAnimation btn-primary btn-sm timeline-btn"><i class="fa fa-plus">&nbsp;</i></span>\
				</div>\
				<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="col-sm-12 timelineLabelsScroll"><div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="timelineLabels"></div></div>\
			</div>\
			<div data-slide="' + slideKey + '" data-layer="' + layerKey + '"  id="timelineZoom" class="timelineZoom zoomSliderContainer col-xs-05 zoomSlider m-0 p-0">\
			</div>\
			<div id="slidingframe" class="col-md-9 m-0 p-0 timeline-right-panel">\
				<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="scrubberHandle m-0 p-0">\
					<i class="fa fa-sort-down scrubber-icon"></i><br>\
					<span class="scrubber-line">|</span><br>\
					<i class="fa fa-sort-up scrubber-icon"></i><br>\
			</div>\
				<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="col-md-12 m-0 p-0 timelineHeaderScroll">\
					<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="timeline-container timeline-container-header"></div>\
				</div>\
				<div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="timelineTimingPanelScroll"><div data-slide="' + slideKey + '" data-layer="' + layerKey + '" class="timelineTimingPanel"></div></div>\
			</div>\
		</div>\
	</div>\
	<div id="dialog-confirm" style="display:none;background-color:#fff;" title="Empty the recycle bin?">\
	<p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 12px 20px 0;font-size:15px;"></span>These items will be permanently deleted and cannot be recovered. <br><br>Are you sure?</p>\
	</div>';
	$(".layerAccordion").append(accordionHTML);


	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
	});



	  

	new Slider('#rotateX-'+layerKey, {});
	new Slider('#rotateY-'+layerKey, {});
	new Slider('#rotateZ-'+layerKey, {});	
	new Slider('#radius-'+layerKey, {});	
	new Slider('#fontSize-'+layerKey, {});
	new Slider('#layerRadius-'+layerKey, {});
	new Slider('#letterspacing-'+layerKey, {});
	new Slider('#lineheight-'+layerKey, {});
	new Slider('#gridX-'+layerKey, {});
	new Slider('#gridY-'+layerKey, {});
	new Slider('#gridXY-'+layerKey, {});
	$.ajax({
	  url: "/uploads/",
	  success: function(data){
		 $(data).find('a:contains(.png), a:contains(.jpg)').each(function(){
			// will loop through 
			var images = $(this).attr("href");
			var layerImageKey = layerKey -1;
			$('<option></option>').html(images).appendTo('.imagesMulti')

		 });
	  }
	});

	initStuff();
}; //function accordianLayer

$(".btn-add-layer").click(AddNewLayer); 

function updateStuff(){

	CSL = Slides[currentSlide].layers[currentLayer];
	for (i = 0; i < CSL.length; i++) {
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

	$('.collapseToggle').unbind('click').on('click', toggleChevron);


	$(function() { $('.togglePx').bootstrapToggle(); })




	  $(function() { 
		$('.togglePx').change(function() { 
			var css = $(this).attr("data-css");
			associatedInput= $(this).attr("data-associated");
			console.log(associatedInput);
			if ($(this).prop('checked')==true){
			associatedValue= CSL.positioning[associatedInput +"Px"];
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').attr("data-positioningType"+css+"", "px")
			CSL.css[css] =associatedValue; 

			}else{
			associatedValue= Slides[currentSlide]["layers"][currentLayer]["positioning"][associatedInput +"Percent"];
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').attr("data-positioningType"+css+"", "%")
				CSL.css[css] =associatedValue; 

			}
			$('[data-type="textinput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="'+associatedInput+'"]').val(associatedValue);
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(css, associatedValue);
		}) 
	  })

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
						Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["translateY"] =locationTopPx; 
					}else{
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateY"]').val(locationTopPercent);
						Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["translateY"] =locationTopPercent; 
					}
					if(positionTypeLeft=="px"){
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateX"]').val(locationLeftPx);
						Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["translateX"] =locationLeftPx; 
					}else{
						$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="translateX"]').val(locationLeftPercent);
						Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["translateX"] =locationLeftPercent; 
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
					Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["scaleY"] =sizeHeightPx; 
				}else{
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleY"]').val(sizeHeightPercent);
					Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["scaleY"] =sizeHeightPercent; 
				}
				if(sizeTypeWidth=="px"){
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleX"]').val(sizeWidthPx);
					Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["scaleX"] =sizeWidthPx; 
				}else{
					$('[data-type="keyframeInput"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-keyframe="'+currentKeyframe+'"][data-css="scaleX"]').val(sizeWidthPercent);
					Slides[currentSlide]["layers"][currentLayer]["animationgroup"][currentKeyframe]["animations"]["scaleX"] =sizeWidthPercent; 
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
	$('.fa-align').unbind('click').click(function(e) {   
		cssStyle = $(this).attr("data-val");   
		$('.draggable-' + currentLayer).css('text-align', cssStyle);
		Slides[currentSlide]["layers"][currentLayer]["css"]['text-align'] = cssStyle;		     
	});

	$('.removeBackground').unbind('click').click(function(e) {   
		currentSlide = $(this).attr("data-slide");  
		currentLayer= $(this).attr("data-layer");
		$('[data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css({ "background-color": "", "background-size": "", "background-image": "", "background": "" })
		$('[data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"][data-css="background-color"]').val("")
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background-color"];
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background-size"];
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background-image"];
		delete Slides[currentSlide]["layers"][currentLayer]["css"]["background"];
	});


	$( '.deleteLayer').unbind('click').click(function() {
		currentSlide = $(this).attr("data-slide");  
		currentLayer= $(this).attr("data-layer");
		console.log(currentSlide+currentLayer);
		$( "#dialog-confirm" ).dialog({
			resizable: false,
			height:240,
			modal: true,
			buttons: {
				"Delete this Layer?": function() {
					$('[data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').remove();
					$( '.draggable-' + layerKey ).remove();
					delete Slides[currentSlide]["layers"][currentLayer];
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		});

	});


	$('.picker').unbind('click').click(function(){
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
	$('.play').unbind('click').on("click", function (e) { 
		var sequenceArray=[];
		for (i = 0; i < Slides[currentSlide]["layers"][currentLayer]["animationgroup"].length; i++) {
			var animations = Slides[currentSlide]["layers"][currentLayer]["animationgroup"][i]["animations"];
			var options = Slides[currentSlide]["layers"][currentLayer]["animationgroup"][i]["options"]
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

	$('.imagesMultiInsert').unbind("select2:close").on("select2:close", function (e) { 

		values = $(this).val();
		values = values +"";
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').append('<img data-slide="' + currentSlide + '"\
				data-layer="' + currentLayer + '" style="" class="resizableImage layer-' + currentLayer + '-image" src="./uploads/' + values + '">');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-size', '100% 100%');
			Slides[currentSlide]["layers"][currentLayer]["image"]["file"] = values;
			$(".resizableImage").resizable();
		//initStuff();
		editor.set(Slides);
	});
	$('.imagesMultiBackground').on("select2:close", function (e) { 
		console.log($(this).val());
		currentLayer = $(this).attr("data-layer");
		values = $(this).val();
		values = values +"";
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"] > div').addClass('layerImage');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-image', 'url(./uploads/' + values + ')');
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css('background-size', '100% 100%');
			Slides[currentSlide]["layers"][currentLayer]["css"]["background-image"] = "url('./uploads/"+ values + "')";

		//initStuff();
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
		Slides[0]["canvasHeight"] =canvasHeight;
		Slides[0]["canvasWidth"] =canvasWidth;
	}));
	//$( ".layerAccordion" ).accordion( "refresh" );
	//$( ".layerAccordion" ).accordion( "option", "active", layerKey+1-1 );

	$('.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
		}).sortable({
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
				//$( this ).accordion( "refresh" );
				
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
	$(".add-keyframe").unbind('click').click(function () {
		currentSlide = $(this).attr("data-slide");  
		currentLayer= $(this).attr("data-layer");
		addKeyframe(currentSlide,currentLayer);
	});//add-keyframe


		$('.layerShadowPicker').click(function(){
		pickercss= $(this).attr("data-css");
		var offset = $('[data-type="layerShadow"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').val();
		
		$('.layerShadowPicker').colpick({
			layout:'hex',
			submit:0,
			color:randomColor,
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor ) {
				//$('.draggable-' + selectedItem ).css(pickercss,'#'+hex);
					$(el).val('#'+hex);
					// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
					if(!bySetColor){
						$(el).val('#'+hex);
						Slides[currentSlide]["layers"][currentLayer]["css"][pickercss] = offset +' #'+hex;
						$('[data-type="sliderTextLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(pickercss, offset +' #'+hex);
						$('.' + pickercss + '-' + layerKey ).css(pickercss,'#'+hex);
					}
			editor.set(Slides);
			}
		});
	});

	$('.bootstrapSlider').on("slide", function(slideEvt) {
		sliderValue = slideEvt.value;
		currentLayer = $(this).attr("data-layer");
		currentSlide = $(this).attr("data-slide");
		slideCss = $(this).attr("data-css");
		if($(this).hasClass('gridsize')){
			if(gridSizeArray.length>2){
				var gridIncrement=1;
				$.each(gridSizeArray, function( k, v ){
					if (gridIncrement==1)
					{
						gridXY = "calc(" + v +" + " + sliderValue + "px) ";
					}else{
						if(isOdd(gridIncrement)){
						gridXY = gridXY + " calc(" + v +" + " + sliderValue + "px) ";
						}else{
						gridXY = gridXY + "calc(" + v +" + " + sliderValue + "px),";
						}
					}
					gridIncrement++
						
				})//.each()
					console.log("X=");
					if (isOdd(gridIncrement)){gridXY = gridXY.substring(0, gridXY.length - 1);}
				$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css("background-size", gridXY);
				Slides[currentSlide]["layers"][currentLayer]["css"]["background-size"] =  gridXY;
			}else{
				gridX = gridSizeArray[0];
				gridY = gridSizeArray[1];
				if(gridXval ==""){gridXval = gridSizeArray[0];}
				if(gridYval ==""){gridYval = gridSizeArray[1];}
				if($(this).attr('data-css')=="gridX"){
					gridXval = "calc(" + gridX +" + " + sliderValue + "px)";
					$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css("background-size", gridXval + " " + gridYval);
					//Slides[currentSlide]["layers"][currentLayer]["css"]["background-size"] =   gridXval + " " + gridYval;
					//console.log("X=" +gridXval + "Y=" +gridYval);

				}else{
					gridYval = "calc(" + gridY +" + " + sliderValue + "px)";
					$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css("background-size", gridXval + " " + gridYval);
					//Slides[currentSlide]["layers"][currentLayer]["css"]["background-size"] =   gridXval + " " + gridYval;
					//console.log("X=" +gridXval + "Y=" +gridYval);
				}

			}
		}//hasClass('gridsize')
		
		
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css(slideCss, sliderValue);
		Slides[currentSlide]["layers"][currentLayer]["css"][slideCss] = sliderValue;
		editor.set(Slides);
	});

	$('.rotateSlider').on("slide", function(slideEvt) {
		sliderValue = slideEvt.value;
		currentLayer = $(this).attr("data-layer");
		currentSlide = $(this).attr("data-slide");
		slideCss = $(this).attr("data-css");
		height= $('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').height();
		width= $('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').width();

		if (slideCss == "rotateZ"){
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity({"rotateZ": sliderValue +'deg'},{ duration: 1 });
		}else if (slideCss == "rotateX"){
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity({"rotateX": sliderValue +'deg'},{ duration: 1 });
		}else if (slideCss == "rotateY"){
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity({"rotateY": sliderValue +'deg'},{ duration: 1 });
		}
		//Slides[currentSlide]["layers"][currentLayer]["animations"][slideCss] = sliderValue;
		
	});
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
	$('.sliderBall').draggable({
	        axis: "x",
	        containment: "parent",
	        drag: function(event, ui) {
			percentValue=(($(this).position().left-1)/($(this).parent().width()-13))*100;
			console.log(percentValue);
	        }
	    });
}; // function initStuff
function getSliderValue() {
}
function makeActiveGlow() {
	for (i = 0; i < Slides[currentSlide]["layers"].length; i++) {
		$('[data-type="sliderLayer"][data-layer="'+i+'"][data-slide="'+currentSlide+'"]').css({"box-shadow": "" })
	}
	$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').css({"box-shadow": "0px 0px 8px #773da1" });
}

function AddNewLayer(){
	getRandomColor();
	key = Slides[currentSlide]["layers"].length;
	Slides[currentSlide]["layers"].push({
		"child": [],
		"css": {"font-family":"arial","position":"absolute","background-color":randomColor,"z-index":zindex, "top":"0px", "left":"0px", "height":"20px", "width":"50px"},
		"image": {},
		"animationgroup": [],
		"options": [],
		"positioning": {},
		"text": {}
		});
		//Slides[currentSlide]["layers"][currentLayer]["css"]["background-color"] = randomColor;
	accordianLayer(); //insert the div for layout / style settings
	initStuff();
	refreshChild();
	$(".timelineTimingPanelScroll").mCustomScrollbar({
	    axis:"xy",
	    theme:"inset-2-dark",
	    timeout:100,
	    scrollInertia:0,
	    setWidth:"100%",
	    scrollbarPosition: "outside",
	    callbacks: {
	        whileScrolling:function() {
	        	valueLeft = this.mcs.left;
	        	valueTop = this.mcs.top;
	        	thisSliderSlide = $(this).attr("data-slide");
	        	thisSliderLayer = $(this).attr("data-layer");
					$('.timelineLabelsScroll').mCustomScrollbar("scrollTo",[(this.mcs.top)*-1,0],{scrollInertia:0});
					//console.log(thisSlider);
					$('.timeline-container').css("left",(this.mcs.left));
				    $(".timelineTimingPanelScroll[data-slide='" + thisSliderSlide + "']").each(function(index) {
				    	if(index != thisSliderLayer){
				        	$(".timelineTimingPanel[data-layer='"+index+"']").css("left",valueLeft);
				        }
				    });					
				
	        }
	    }
	});
	$('.nav-tabs a[href="#keyframes-'+ currentSlide +'-'+ (Slides[currentSlide]["layers"].length - 1) +'"]').tab('show');
	reInitTimelineButtons();
    $(".timelineLabelsScroll").mCustomScrollbar({
        axis:"y",
	    scrollEasing:"linear",
	    timeout:1,
        theme:"inset-2-dark",
        scrollbarPosition: "hidden",
        setHeight:"150"
    });


	$('.bootstrapCollapse').collapse();
	drawRulers();  
	zindex--;
	layerKey++;
}

function reInitTimelineButtons(){
 $(".AddAnimation").unbind('click').click(function(e) {
    var currentSlide = $(this).attr('data-slide');
    var currentLayer = $(this).attr('data-layer');
    layerAnimationId = Slides[currentSlide]["layers"][currentLayer]["animationgroup"].length;
    $(".manualEffectAdd, #newOptionsAdd, .manualEffectAddOptionsSubmit, .PrepackagedOptionsSubmit").attr("data-layer", currentLayer);
    $(".manualEffectAdd, #newOptionsAdd, .manualEffectAddOptionsSubmit, .PrepackagedOptionsSubmit").attr("data-slide", currentSlide);
    $(".manualEffectAdd, #newOptionsAdd, .manualEffectAddOptionsSubmit, .PrepackagedOptionsSubmit").attr("data-animationId", layerAnimationId);
    $(".ExpandingTips").hide();
    $(".addAnimationPanelOuter").show(); 
    clickOutsideOf($(".addAnimationPanelOuter"));
});



$(".playPause").unbind('click').click(function() {
    console.log(this);
    if (this.innerHTML === "Play") {
        this.innerHTML = "Pause"
            //TweenLite.to(mainTL, 2, {timeScale:1})
        mainTL.play();
    } else {
        this.innerHTML = "Play"
            //TweenLite.to(mainTL, 2, {timeScale:0})
        mainTL.pause();
    }
})

$(".restartBtn").unbind('click').click(function() {
    mainTL.restart();
});

$('.timeScaleSlider').unbind('slide').on("slide", function(slideEvt) {
    mainTL.timeScale(slideEvt.value);
    timeScale.html(slideEvt.value)
});

$(".timelineZoom").slider({
    orientation: "vertical",
    range: "max",
    min: 0.1,
    max: 0.8,
    step: 0.05,
    value: 0.4,
    slide: function(event, ui) {
        ZoomValue = ui.value;
        drawRulers();
        scrubber.css("left", scrubberValue * ZoomValue + "px");
        $(".timelineElement").each(function(index) {
            thisAnimation = $(this).attr("data-animationid");
            $(this).css("width", Slides[currentSlide]["layers"][currentLayer]["animationgroup"][thisAnimation]["sequence"][0]['duration'] * 1000 * ZoomValue + "px");
            $(this).css("left", Slides[currentSlide]["layers"][currentLayer]["animationgroup"][thisAnimation]["startTime"]* 1000 * ZoomValue + "px");
        });
        var offsetLeft = 0;
        $(".MultiTimelineElement").each(function(index) {
            segment = Number($(this).attr("data-segment"));
            thisAnimation = $(this).attr("data-animationid");
            duration = Slides[currentSlide]["layers"][currentLayer]["animationgroup"][thisAnimation]["sequence"][segment]['duration'];
            if (segment != "0") {
                previousSegment = Number(segment - 1);
                previousDuration = Slides[currentSlide]["layers"][currentLayer]["animationgroup"][thisAnimation]["sequence"][previousSegment]['duration']
                offsetLeft = Number(offsetLeft) + Number(previousDuration);
            } else {

                previousDuration = 0;
            }
            $(this).css("width", duration * 1000 * ZoomValue + "px");
            $(this).css("left", offsetLeft * 1000 * ZoomValue + "px");
            thisSegment = $(this).data("segment");
            leftPosition = (Number(offsetLeft) + Number(duration)) * 1000 * ZoomValue;
            $(".resize-bar[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + thisAnimation + "'][data-segment='" + thisSegment + "']").css("left", leftPosition);
            $(this).parent().parent().css("left", Slides[currentSlide]["layers"][currentLayer]["animationgroup"][thisAnimation]["startTime"] * 1000 * ZoomValue + "px");
        });
        scrubberValue = ($(".scrubberHandle").position().left) / ZoomValue;
        insertTime = scrubberValue * ZoomValue;
    }
});
$(".PrepackagedOptionsSubmit").unbind('click').click(PrepackagedOptionsSubmit);
}