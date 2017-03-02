<div class="addAnimationPanelOuter">
  <div class="panel panel-primary addAnimationPanel" id="addAnimationPanel">
  <div class="panel-heading">
    Add Animation Editor:
    <button type="button" class="close addAnimationPanelClose"> <span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <button type="button" class="close addAnimationPanelExpand"> <span aria-hidden="true"><i class="fa fa-expand">&nbsp;</i></span></button>
  </div>	
  <div class="addAnimationPanelContent">
  	<ul class="nav nav-tabs">
		<li role="presentation" class="pull-right"><a  data-toggle="tab"  href="#manualEntryContainer">Manual Entry</a></li>
		<li role="presentation" class="pull-right"><a class="easingEditorTab" data-toggle="tab"  href="#easingEditorContainer">Easing Editor</a></li>
		<li role="presentation" class="pull-right"><a  data-toggle="tab"  href="#addItemPanel-advanced">Advanced</a></li>
		<li role="presentation" class="pull-right active"><a  data-toggle="tab"  href="#addItemPanel-basic">Pre-Defined</a></li>

	</ul>
	<div class="tab-content">
	<!--Tab Start -->
		<div id="addItemPanel-basic" class="tab-pane active in">
		    <div class="form-group">
		      <label for="preDefined">Pre-Defined Animations</label>
		      <select class="form-control rightClickMenuEffectSelect rightClickMenuSelect newOptionsFormItem" id="preDefined">
		        <option selected="selected" value="none">--None--</option>
		      @foreach ($availablegreensockOptions as $option)
		      <option value="{{ $option->tween }}"> {{ $option->name }}</option>
		      @endforeach
		      </select>
		    </div>
			<button class="PrepackagedOptionsSubmit btn btn-primary">Submit</button>
		</div>
	<!--Tab End -->
	<!--Tab Start -->
		<div id="addItemPanel-advanced" class="tab-pane fade">
			<div class="form-group">
			  <label for="layerName">Layer Name</label>
			  <input type="text" class="form-control newOptionsFormItem" id="layerName" aria-describedby="layerNameHelp" placeholder="New Layer">
			  <small id="layerNameHelp" class="form-text text-muted">Optional - just helps to keep track</small>
			</div>
		    <div class="form-group">
		      <label for="duration">Duration</label>
		      <input class="form-control newOptionsFormItem" id="newOptionsDuration"  aria-describedby="durationHelp"></input>
		      <small id="durationHelp" class="form-text text-muted">Time in milliseconds</small>
		    </div>

			<div class="col-sm-12 addedTweenOptions form-group text"></div>
				<!--Vertical Menu Start -->
			<div class="col-sm-3">
				<ul class="nav nav-pills nav-stacked addItemVertical">
						<li role="presentation" class="active"><a  class="" data-toggle="tab"  href="#sizePositionContainer">Size / Position</a></li>
						<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyTextContainer">Text</a></li>
						<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyBackgroundContainer">Background</a></li>
						<li role="presentation" class=""><a  class="" data-toggle="tab"  href="#modifyBordersContainer">Borders</a></li>
						<li role="presentation" class=""><a class=""  data-toggle="tab"  href="#modifyMiscContainer">Misc</a></li>
				</ul>	    	
			</div>
			  	<!--Vertical Menu End -->

			<div class="tab-content col-sm-9">
			<!--Right Side Content Start -->
				<div id="sizePositionContainer" class="tab-pane active in col-sm-12">
					<div class="form-group row">
				      <div class="col-sm-12">
				          <label for="sizePosition">Modify Size / Position: <i class="ExpandingTipsLink fa fa-question-circle">&nbsp;</i></label>
				      </div>
				        <div class="col-sm-6 ExpandingTips">
				          Modifying size and position properties frequently should be entered with either an `=` or `+=`  and `px` like so:<br>
				          <code>[left]: +=55px</code><br>
				          Percentage modifications are not supported.
				        </div>
				      <div class="col-sm-5">
				          <select class="form-control newOptionsFormItem" id="sizePosition">
				          <option value="none">--None--</option><option>===Size===</option><option value="height">height</option><option value="width">width</option><option value="maxHeight">max-height</option><option value="maxWidth">max-width</option><option value="minHeight">min-height</option><option value="minWidth">min-width</option><option value=""></option><option value="Position:">===Position===</option><option value="top">top</option><option value="bottom">bottom</option><option value="left">left</option><option value="right">right</option><option value="padding">padding</option><option value="paddingBottom">padding-bottom</option><option value="paddingLeft">padding-left</option><option value="paddingRight">padding-right</option><option value="paddingTop">padding-top</option><option value="margin">margin</option><option value="marginBottom">margin-bottom</option><option value="marginLeft">margin-left</option><option value="marginRight">margin-right</option><option value="marginTop">margin-top</option><option value="zIndex">z-index</option>
				          </select>
				      </div>
				      <div class="col-sm-6">
				          <input class="form-control newOptionsFormItem" id="sizePositionValue"  aria-describedby="newOptionsHelp"></input>
				          <small id="newOptionsHelp" class="form-text text-muted"><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">Tween properties</a></small>
				      </div>
				      <div class="col-sm-1 pull-right">        
				          <i id="sizePositionAdd" class="sizePosition newOptionsAdd fa fa-plus-circle">&nbsp;</i>
				      </div>
				    </div>

				</div>
			<!--Right Side Content End -->
			<!--Right Side Content Start -->
				<div id="modifyTextContainer" class="tab-pane fade">
				    <div class="form-group row">
				      <div class="col-sm-12">
				          <label for="modifyText">Modify Text: <i class="ExpandingTipsLink fa fa-question-circle">&nbsp;</i></label>
				      </div>
				        <div class="col-sm-6 ExpandingTips">
				          Modifying text properties frequently should be entered with either an `=` or `+=`  and `px` like so:<br>
				          <code>[font-size]: +=55px</code><br>
				          Percentage modifications are not supported.<br>
				          Color modifications should be entered as:<br>
				          <code>[color]: #FF0000</code><br>
				        </div>
				      <div class="col-sm-5">
				          <select class="form-control newOptionsFormItem" id="modifyText">
				          <option value="none">--None--</option><option value="Text:">===Text===</option><option value="color">color</option><option value="font">font</option><option value="fontSize">font-size</option><option value="fontSizeAdjust">font-size-adjust</option><option value="fontStretch">font-stretch</option><option value="fontWeight">font-weight</option><option value="textDecoration">text-decoration</option><option value="textDecorationColor">text-decoration-color</option><option value="textEmphasis">text-emphasis</option><option value="textEmphasisColor">text-emphasis-color</option><option value="textIndent">text-indent</option><option value="textShadow">text-shadow</option><option value="letterSpacing">letter-spacing</option><option value="lineHeight">line-height</option><option value="verticalAlign">vertical-align</option><option value="wordSpacing">word-spacing</option>
				          </select>
				      </div>
				      <div class="col-sm-6">
				          <input class="form-control newOptionsFormItem" id="modifyTextValue"  aria-describedby="newOptionsHelp"></input>
				      </div>
				      <div class="col-sm-1 pull-right">        
				          <i id="modifyTextAdd" class=" modifyText newOptionsAdd fa fa-plus-circle">&nbsp;</i>
				      </div>
				    </div>
				</div>
			<!--Right Side Content End -->
			<!--Right Side Content Start -->
				<div id="modifyBackgroundContainer" class="tab-pane fade">
				    <div class="form-group row">
				      <div class="col-sm-12">
				          <label for="modifyBackground">Modify Background: <i class="ExpandingTipsLink fa fa-question-circle">&nbsp;</i></label>
				      </div>
				        <div class="col-sm-6 ExpandingTips">
				          Modifying size and position properties frequently should be entered with either an `=` or `+=`  and `px` like so:<br>
				          <code>[left]: +=55px</code><br>
				          Percentage modifications are not supported.
				        </div>
				      <div class="col-sm-5">
				          <select class="form-control newOptionsFormItem" id="modifyBackground">
				          <option value=""></option><option value="Background / Colors:">===Background / Colors===</option><option value="background">background</option><option value="backgroundColor">background-color</option><option value="backgroundPosition">background-position</option><option value="backgroundSize">background-size</option><option value=""></option>
				          </select>
				      </div>
				      <div class="col-sm-6">
				          <input class="form-control newOptionsFormItem" id="newOptionsValue"  aria-describedby="newOptionsHelp"></input>
				      </div>
				      <div class="col-sm-1 pull-right">        
				          <i id="effectOptionsAdd" class="modifyBackground newOptionsAdd fa fa-plus-circle">&nbsp;</i>
				      </div>
				    </div>
				</div>
			<!--Right Side Content End -->
			<!--Right Side Content Start -->
				<div id="modifyBordersContainer" class="tab-pane fade">
				    <div class="form-group row">
				      <div class="col-sm-12">
				          <label for="modifyBorders">Modify Borders: <i class="ExpandingTipsLink fa fa-question-circle">&nbsp;</i></label>
				      </div>
				        <div class="col-sm-6 ExpandingTips">
				          Modifying borders properties frequently should be entered with either an `=` or `+=`  and `px` like so:<br>
				          <code>[border-top-width]: 55</code><br>
				          Color modifications should be entered as:<br>
				          <code>[color]: #FF0000</code><br>
				        </div>
				      <div class="col-sm-5">
				          <select class="form-control newOptionsFormItem" id="modifyBorders"><option value="Borders:">===Borders===</option><option value="border">border</option><option value="borderBottom">border-bottom</option><option value="borderBottomColor">border-bottom-color</option><option value="borderBottomLeftRadius">border-bottom-left-radius</option><option value="borderBottomRightRadius">border-bottom-right-radius</option><option value="borderBottomWidth">border-bottom-width</option><option value="borderColor">border-color</option><option value="borderLeft">border-left</option><option value="borderLeftColor">border-left-color</option><option value="borderLeftWidth">border-left-width</option><option value="borderRadius">border-radius</option><option value="borderRight">border-right</option><option value="borderRightColor">border-right-color</option><option value="borderRightWidth">border-right-width</option><option value="borderTop">border-top</option><option value="borderTopColor">border-top-color</option><option value="borderTopLeftRadius">border-top-left-radius</option><option value="borderTopRightRadius">border-top-right-radius</option><option value="borderTopWidth">border-top-width</option><option value="borderWidth">border-width</option><option value="outline">outline</option><option value="outlineColor">outline-color</option><option value="outlineOffset">outline-offset</option><option value="outline-width">outline-width</option><option value="box-shadow">box-shadow</option>
				          </select>
				      </div>
				      <div class="col-sm-6">
				          <input class="form-control newOptionsFormItem" id="modifyBordersValue"  aria-describedby="newOptionsHelp"></input>

				      </div>
				      <div class="col-sm-1 pull-right">        
				          <i id="modifyBordersAdd" class="modifyBorders newOptionsAdd fa fa-plus-circle">&nbsp;</i>
				      </div>
				    </div>
				</div>

			<!--Right Side Content End -->
			<!--Right Side Content Start -->
				<div id="modifyMiscContainer" class="tab-pane fade">
				    <div class="form-group row">
				      <div class="col-sm-12">
				          <label for="">Modify Other: <i class="ExpandingTipsLink fa fa-question-circle">&nbsp;</i></label>
				      </div>
				        <div class="col-sm-6 ExpandingTips">
				          Modifying these other items are possible, but may require more details <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">from here.</a>
				        </div>
				      <div class="col-sm-5">
				          <select class="form-control newOptionsFormItem" id="effectOptions">
				          <option value="Table:">===Table===</option><option value="columnCount">column-count</option><option value="columnGap">column-gap</option><option value="columnRule">column-rule</option><option value="columnRuleColor">column-rule-color</option><option value="columnRuleWidth">column-rule-width</option><option value="columnWidth">column-width</option><option value="columns">columns</option><option value="gridColumnGap">grid-column-gap</option><option value="gridGap">grid-gap</option><option value="gridRowGap">grid-row-gap</option><option value=""></option><option value="Visibility:">===Visibility===</option><option value="visibility">visibility</option><option value="opacity">opacity</option><option value="mask">mask</option><option value="maskPosition">mask-position</option><option value="mask-size">mask-size</option><option value=""></option><option value="Motion Options:">===Motion Options===</option><option value="motionOffset">motion-offset</option><option value="motionRotation">motion-rotation</option><option value="object-position">object-position</option><option value="perspective">perspective</option><option value="perspectiveOrigin">perspective-origin</option><option value="transform">transform</option><option value="transformOrigin">transform-origin</option>
				          </select>
				      </div>
				      <div class="col-sm-6">
				          <input class="form-control newOptionsFormItem" id="newOptionsValue"  aria-describedby="newOptionsHelp"></input>
				          <small id="newOptionsHelp" class="form-text text-muted"><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">Tween properties</a></small>
				      </div>
				      <div class="col-sm-1 pull-right">        
				          <i id="OtherOptionsAdd" class="modifyOther newOptionsAdd fa fa-plus-circle">&nbsp;</i>
				      </div>
				    </div>

				</div>

			<!--Right Side Content End -->
			<!--Vertical Menu Content End -->
				</div>
				<div class="col-sm-12">
					<button class="manualEffectAddOptionsSubmit btn btn-primary pull-right">Submit</button>
				</div>	
			</div>
			<!--Tab Advanced End -->
			<!--Tab Manual Start -->
			<div id="manualEntryContainer" class="tab-pane fade">			
			    <div class="form-group row col-sm-12">
			      <div class="col-sm-12">
			          <label for="">Manual Entry: <i class="toolTipItem fa fa-question-circle" data-tooltip-content="#otherOptions_content">&nbsp;</i></label>
			      </div>


			      <div class="col-sm-11">
			          <textarea  class="form-control newOptionsFormItem" id="manualOptionsValue"  rows="3" ></textarea >
			      </div>
			      <div class="col-sm-1 pull-right">        
			          <i id="OtherOptionsAdd" class="modifyOther manualOptionsAdd fa fa-plus-circle">&nbsp;</i>
			      </div>
			    </div>
			    
		    </div>
			<!--Tab Manual End -->
			<!--Tab Easing Start -->
			<div id="easingEditorContainer" class="tab-pane fade">			
			    <div class="form-group row">
			      <div class="col-sm-12">
			          <label for="newOptionsEase">Easing Option:</label>
			      </div>
			      <div class="col-sm-5">
			          <select class="form-control newOptionsFormItem" id="newOptionsEase">
			              @foreach ($easing as $option)
			              <option value={{ $option->object }}> {{ $option->name }}</option>
			              @endforeach
			              </select>
			          </select>

			      <div class="col-sm-12">
			      	<div class="easingEditorButtons">
						<ul class="nav nav-pills nav-stacked easingEditorButtonsList">
								<li role="presentation" class="active"><a class="previewEasing" data-toggle="tab"  href="#">Preview Easing</a></li>
								<li role="presentation" class=""><a class="smoothEasingPath" data-toggle="tab"  href="#">Smooth Easing Path</a></li>

						</ul>	
						<BR>		
						Change Duration:
						<input type="text" name="easingEditor" class="easingEditorDuration" value="2">	      	
					</div>
			      			<!--canvas position set by css -->
					<canvas id="canvas"></canvas>
					<div class="path-data-container">
					  <pre id="path-data"></pre>
					</div>



	
			      </div>

			    </div>

			    </div>
		    </div>  
		</div>
<!--Tab End -->		
	</div>
</div>
</div>





<script type="text/javascript">




 $(".addAnimationPanelOuter").hide(); 


$("body").on("click", ".addAnimationPanelExpand", function(){
	$(".addAnimationPanel").toggleClass("expanded");
});
$("body").on('click', ".addAnimationPanelClose", function(){$(".addAnimationPanelOuter").hide()});
$("body").on('click', ".adjustPlaybackContainerClose", function(){$(".adjustPlayback").hide()});

</script>



