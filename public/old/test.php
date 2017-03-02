<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="./includes/slider/jquery.mobile.custom.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="./includes/javascripts/TweenMax.js"></script>
<script src="./includes/javascripts/SplitText.js"></script>
<script src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/jquery.ui.touch-punch.js"></script>
<script src="./includes/javascripts/TimelineMax.js"></script>
<script src="./includes/javascripts/nestedSortable.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<link rel="stylesheet" href="./includes/stylesheets/basic.css">
<link rel="stylesheet" href="./includes/javascripts/jsoneditor/jsoneditor.min.css">

<script src="./includes/javascripts/jsoneditor/jsoneditor.min.js"></script>

<link href='http://fonts.googleapis.com/css?family=Signika+Negative:300,400,700' rel='stylesheet' type='text/css' />

<style type="text/css">
	body {
  background-color:#1d1d1d;
  color:#989898;
  margin:0 10px;
  font-size:16px;
  margin-top:5px;
  font-family: 'Signika Negative', sans-serif;
  
}
#controls {
  margin-top:5px;
  text-align: center;
}

.slider {
  width:420px;
  margin:auto;
}
.sliderValues {
  margin:10px;
}

.sliderValues span {
  font-size:24px;
}

#timeScaleSlider {
  width:260px;

}

button {
  padding:.4em;
  margin:10px 0 10px 0;
  font-size:12px;
  cursor:pointer;
}

li {
 display:inline-block;
 margin-right:25px;
  color:#aaa;
}
.reset {
  margin-top:5px;
  text-align: center;
}
.ui-widget-content {
  background-color:rgba(255, 255, 255, 0.2);
}

.prettyprint{
  position:absolute;
  top:0px;
  left:5px;
  width:250px;
}
#targetBox{
  background-color:green;
  position:absolute;
  top:50px;
  right:200px;
  height:100px;
  width:100px;
}
.extraButtons{
  position:absolute;
  top:250px;
  margin-left:20%;
  text-align: center;
}
.setOrigin{
    background-color:blue;
    border-color:blue;
    color:white;
}
#div0
{
	width: 100px;
	height: 100px;
	background: #8DDF00;
	position: relative;
	border-radius: 10px;
}#div1
{
	width: 100px;
	height: 100px;
	background: #0033ff;
	position: relative;
	border-radius: 10px;
}
#output
{
	width: 400px;
	background: #99ccff;
	position: absolute;
	border-radius: 10px;
  left:300px;
  top:10px;
  text-align:center;
}



input[type=range] {
    /*removes default webkit styles*/
    -webkit-appearance: none;
    
    /*fix for FF unable to apply focus style bug */
    border: 0px solid white;
    
    /*required for proper track sizing in FF*/
    width: 100%;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
    margin-top: -4px;
}
input[type=range]:focus {
    outline: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ccc;
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}
input[type=range]::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
}

/*hide the outline behind the border*/
input[type=range]:-moz-focusring{
    outline: 1px solid white;
    outline-offset: -1px;
}

input[type=range]::-ms-track {
    width: 100%;
    height: 5px;
    
    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;
    
    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
}
input[type=range]::-ms-fill-lower {
    background: #777;
    border-radius: 10px;
}
input[type=range]::-ms-fill-upper {
    background: #ddd;
    border-radius: 10px;
}
input[type=range]::-ms-thumb {
    border: none;
    height: 16px;
    width: 100%;
    border-radius: 50%;
    background: goldenrod;
}
input[type=range]:focus::-ms-fill-lower {
    background: #888;
}
input[type=range]:focus::-ms-fill-upper {
    background: #ccc;
}
.timeline{
width:600px;
}
.timelinecontainer{
width:100%;
}
.timelineLine{
position:absolute;
width:2px;
height:80px;
margin-left:15px;
margin-top:15px;
background: goldenrod;
}
#jsonresults{
	width: 400px;
	background: #99ccff;
	position: absolute;
	border-radius: 10px;
	left:800px;
	top:10px;
	text-align:center;
}
#TLITEMS{
	width: 100%;
	height:20%;
	background: #99ccff;
}
.timelineLineName{
	position:absolute;
	width: 20%;
	height:18px;
	background: #33cc33;

}
.timelineLineItems{
	position:absolute;
	left:20%;
	width: 78%;
	height:18px;
	background: #990066;

}
</style>
<div id="output"></div>
<div id="div0"></div>
<div id="div1"></div>
	

<div id="" class="timelinecontainer">
<div class="timelineLine"></div>
	
	<div id="TLITEMS" style="width:100%;">
		<div class="timelineLineName">Item Name

		</div>			
		<div class="timelineLineItems">
			<input class="timelineSlider" type="range" step="0.005" min="0" max="2"></input>
		</div>
	</div>
	
</div>
<div id="jsonresults">
	
</div>

<script type="text/javascript">
var container = document.getElementById("jsonresults");
var editor = new JSONEditor(container);
var animations = {"bounceInLeft": [
    {
      "duration": ".2",
      "opacity": "0",
      "transform": "translate3d(-3000px, 0, 0)"
    },
    {
      "duration": ".2",
      "opacity": "1",
      "transform": "translate3d(25px, 0, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(-10px, 0, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(5px, 0, 0)"
    },
    {
      "duration": ".2",
      "transform": "none"
    }
  ],
  "bounceInRight": [
    {
      "duration": ".2",
      "opacity": "0",
      "transform": "translate3d(3000px, 0, 0)"
    },
    {
      "duration": ".2",
      "opacity": "1",
      "transform": "translate3d(-25px, 0, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(10px, 0, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(-5px, 0, 0)"
    },
    {
      "duration": ".2",
      "transform": "none"
    }
  ],
  "bounceInUp": [
    {
      "duration": ".2",
      "opacity": "0",
      "transform": "translate3d(0, 3000px, 0)"
    },
    {
      "duration": ".2",
      "opacity": "1",
      "transform": "translate3d(0, -20px, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(0, 10px, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(0, -5px, 0)"
    },
    {
      "duration": ".2",
      "transform": "translate3d(0, 0, 0)"
    }
  ]  
}


function updateSlider() {
	var linePosition = main.totalDuration()/main.time();
	$(".timelineLine").css("left", (($(".timeline").width()-15)/linePosition));
	progressSlider = $(".timelineSlider");
	progressSlider.val(main.time());
	$(".timelineSlider").attr("max", main.totalDuration().toFixed(4));

} 
$('.timelineSlider').mousemove( function(e){
	main.time($(".timelineSlider").val()).pause();
});
var main = new TimelineMax({onUpdate:updateSlider, delay:0.2});

	main.to($('#div0'), 2, {x:"+=33"})
	.to($('#div0'), 2, {y:"+=33"})
	.to($('#div0'), 2, {x:"+=33"})
	.to($('#div0'), 2, {y:"+=33"});

	main.to($('#div1'), 2, {x:"+=43"})
	.to($('#div1'), 2, {y:"+=43"})
	.to($('#div1'), 2, {x:"+=43"})
	.to($('#div1'), 2, {y:"+=43"});


var tlObject = {};
var child={};
var children = main.getChildren(),
    child, i;
	for (i = 0; i < children.length; i++) {
		child = children[i];
		if (child.target)
		{  
			var target = child.target.selector;
			var duration = child._duration;
			var startTime = child._startTime;
			var vars = child.vars;
			//build array with an array for each transformation under the same object name
			if(tlObject[target]){}else {tlObject[target]= [];}
				for (var C in child.vars) {
					var pushVal = {};
					pushVal[C]=child.vars[C];
					pushVal['duration']=duration;
					pushVal['startTime']=startTime;
					tlObject[target].push(pushVal)
				}

			$("#output").append("Target: "+ child.target.selector + ", Duration: " + child._duration + ", Vars: "+ JSON.stringify(child.vars) +"<br>"); //crack open full object in console
		}
	}
console.log(tlObject);
editor.set(tlObject);
editor.get(tlObject);


</script>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>