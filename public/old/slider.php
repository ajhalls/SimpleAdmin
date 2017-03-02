<?PHP
include './includes/functions.php';
include 'header.php';
include 'topbar.php';
include 'rightclick.php';
include('nav.php');
?>

<link rel="stylesheet" href="./includes/slider/colpick.css">
<link rel="stylesheet" href="./includes/animate.css">
<link rel="stylesheet" href="./includes/magnific-popup/magnific-popup.css">
<script src="./includes/slider/colpick.js"></script>
<link href="./includes/slider/jquery.mobile.custom.structure.min.css" rel="stylesheet" />
<link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.1/css/select2.min.css" rel="stylesheet" />
<script src="./includes/javascripts/select2.js"></script>
<link href="http://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet"> 
<script src="http://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
<link rel="stylesheet" href="./includes/slider/custom.css">

<div><button class="add-slide-tabs">Add Slide</button>
	Height: <input class="canvasSize" type="text" name="canvas-width" value="" size="5">
	Width:  <input class="canvasSize" type="text" name="canvas-height" value="" size="5">
	Color:  <input type="text" data-id="main" data-css="color" name="color-main" value="#eee" class="picker style color-main" size="7">
	<button class="btn-load">Load Saved</button>

</div><br>

<div><ul class="slide-tabs-container tabs slide-tabs-item" style="background:repeat-x scroll 50% 50% ; border: 0px solid #aaa; list-style-type: none;">
		<li class="pull-left slide-tabs-item slideTab-0"><a class="slide-switch " data-slide="0" href="#slideKey-0">Slide 1</a></li>
	</ul>
</div>
<br><br>

<div class="slider-container"></div>
<div id="jsonresults" class="jsonresults" style="z-index:5000"></div>

<br><br>
<button class="btn-add-layer">Add Div</button>
<button class="playAnimations">Play</button>

<form method="POST" id="sliderform" action="./includes/slider/functions.php">

<div id="canvas" class="row">
	<div class="col-md-8 layerAccordion accordion"></div>
</div>

</form>

<div class="row ">
	<div class="col-md-2 ">
	<button class="btn-show-json">Show JSON</button>
	</div>
</div>
<div class="jsonData"></div>


<script src="./includes/slider/custom.js"></script>
<script src="./includes/slider/functions.js"></script>
<script src="./includes/slider/functions-slide.js"></script>
<script src="./includes/slider/functions-layers.js"></script>
<script src="./includes/slider/functions-child.js"></script>
<script src="./includes/slider/functions-keyframe.js"></script>
<script src="./includes/slider/loadslide.js"></script>

<script src="./includes/slider/colpick.js"></script>
<link rel="stylesheet" href="./includes/slider/colpick.css">
<link rel="stylesheet" href="./includes/slider/custom.css">
<link rel="stylesheet" href="./includes/javascripts/jsoneditor/jsoneditor.min.css">

<link rel="stylesheet" href="./includes/bootstrap-slider.css">
<script src="./includes/bootstrap-slider.js"></script>
<script src="./includes/javascripts/jsoneditor/jsoneditor.min.js"></script>

<script src="./includes/magnific-popup/jquery.magnific-popup.min.js"></script>


<?PHP
include 'footer.php';
?>
<?PHP
include './includes/timelinecontrols.php';
?>
<div class="rightClick">
	
<?PHP printrightMenu($menu); ?>

</div>
<div id="jsoneditor" style="width: 400px; height: 400px;"></div>
<script>
$(function(){$('select').slider();});
$( ".slide-tabs-item" ).tabs();
$(".btn-show-json").click(function(e) {var results=JSON.stringify(Slides[currentSlide]);$(".jsonData").text(results);})


$(function(){$( ".btn-add-layer" ).trigger( "click" );
$( ".layerAccordion" ).accordion( "option", "active", 0 );});


       var container = document.getElementById("jsonresults");
        var editor = new JSONEditor(container);
    var options = {
      editable: function (node) {
        // node is an object like:
        //   {
        //     field: 'FIELD',
        //     value: 'VALUE',
        //     path: ['PATH', 'TO', 'NODE']
        //   }
        switch (node.field) {
          default:
            return true;
        }
      }
    };
editor.set(Slides);
editor.get(Slides);

</script>


<style type="text/css">
	#canvas{
	padding-left:15px;
	}
	.draggable-0 {
	  transition: transform 1s easeInOutCubic;
	  transform-origin: top left;
	  transform-style: preserve-3D;
	}
	.box-rotate {
	  transform: rotate(360deg);
	}
	.jsonresults{
	white-space:pre;
	position:absolute;
	left:1150px;
	width:500px;
	top:250px;
	}
	pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
	.string { color: green; }
	.number { color: darkorange; }
	.boolean { color: blue; }
	.null { color: magenta; }
	.key { color: red; }
	.ui-widget-header {
		font-weight: normal;
	}
	.white-popup {
	  position: relative;
	  background: #FFF;
	  padding: 20px;
	  width: auto;
	  max-width: 500px;
	  margin: 20px auto;
	}

</style>
