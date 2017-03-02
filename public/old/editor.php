<?PHP include 'header.php'; include 'topbar.php'; include('nav.php'); ?>
<link rel="stylesheet" href="./includes/slider/jquery-ui.min.css">
<link rel="stylesheet" href="./includes/slider/custom.css">
<link rel="stylesheet" href="./includes/slider/colpick.css">
<link rel="stylesheet" href="./includes/animate.css">
<script src="./includes/slider/jquery-2.1.3.min.js"></script>
<script src="./includes/slider/jquery-ui.min.js"></script>
<script src="./includes/slider/colpick.js"></script>
<link href="./includes/slider/jquery.mobile.custom.structure.min.css" rel="stylesheet" />
<script src="./includes/slider/jquery.mobile.custom.min.js"></script>
<link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.1/css/select2.min.css" rel="stylesheet" />
<script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.1/js/select2.min.js"></script>
<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet"> 
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
<script src="./includes/slider/functions.js"></script>
<script src="./includes/slider/functions-slide.js"></script>
<script src="./includes/slider/functions-layers.js"></script>
<script src="./includes/slider/functions-child.js"></script>
<script src="./includes/slider/custom.js"></script>

<style type="text/css">
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
top:50px;
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
</style>
<title>Player</title>
</head>
<body>
 <div><button class="add-slide-tabs">Add Slide</button>
	Height: <input class="canvasSize" type="text" name="canvas-width" value="" size="5">
	Width:  <input class="canvasSize" type="text" name="canvas-height" value="" size="5">
	Color:  <input type="text" data-id="main" data-css="color" name="color-main" value="#eee" class="picker style color-main" size="7">
</div><br>
<div><ul class="slide-tabs-container tabs slide-tabs-item" style="background:repeat-x scroll 50% 50% ; border: 0px solid #aaa; list-style-type: none;">
		<li class="pull-left slide-tabs-item slideTab-0"><a class="slide-switch " data-slide="0" href="#slideKey-0">Slide 1</a></li>
	</ul>
</div>
<br><br>

<div class="slider-container"></div>
<div  class="jsonresults"></div>

<br><br>
<button class="btn-add-layer">Add Div</button>

<form method="POST" id="sliderform" action="./includes/slider/functions.php">

<div style="width:1100px;" class="layerAccordion accordion">
</div>

<br><br>

</form>

<br><br>
</body>
<script type="text/javascript">
<!--

//-->
</script>
<link rel="stylesheet" href="./includes/bootstrap-slider.css">
<script src="./includes/bootstrap-slider.js"></script>
<script src="./includes/javascripts/prettyprint.js"></script>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> 

<?PHP
include 'footer.php';
?>