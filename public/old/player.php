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
<script type="text/javascript">
<!--
	

//-->
</script>
<title>Player</title>
</head>
<body>
  <div class="slider-container"></div>


<br><BR><BR><textarea cols="70" rows="4" class="slideData"></textarea>
</body>
<script type="text/javascript">
<!--
$('.slideData').on('keyup mouseup',(function(e) {

	 var slideData =JSON.parse($('.slideData').val());;

		//var slideData =[{"background-color":"#aaaaaa","layers":[{"css":{"font-family":"arial","position":"absolute","background-color":"#383830","z-index":99,"height":"151px","width":"998px","background":"linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,linear-gradient(90deg, #1b1b1b 10px, transparent 10px),linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)","background-size":"21px 21px", "grid":"background:-webkit-linear-gradient(63deg, #151515 5px, transparent 5px) 0 5px,-webkit-linear-gradient(243deg, #151515 5px, transparent 5px) 10px 0px,-webkit-linear-gradient(63deg, #222 5px, transparent 5px) 0px 10px,-webkit-linear-gradient(243deg, #222 5px, transparent 5px) 10px 5px,-webkit-linear-gradient(0deg, #1b1b1b 10px, transparent 10px),-webkit-linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); background:-moz-linear-gradient(63deg, #151515 5px, transparent 5px) 0 5px,-moz-linear-gradient(243deg, #151515 5px, transparent 5px) 10px 0px,-moz-linear-gradient(63deg, #222 5px, transparent 5px) 0px 10px,-moz-linear-gradient(243deg, #222 5px, transparent 5px) 10px 5px,-moz-linear-gradient(0deg, #1b1b1b 10px, transparent 10px),-moz-linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); background:linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,linear-gradient(90deg, #1b1b1b 10px, transparent 10px),linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); background-size:20px 20px; background-color:#131313;","opacity":"1"},"text":{},"image":{},"child":[],"keyframes":[]},{"css":{"font-family":"Arial","position":"absolute","background-color":"#557bfa","z-index":"100","height":"83px","width":"225px","top":"30px","left":"342px","border-radius":25,"text-align":"center","font-size":19.25,"overflow":"hidden","color":"#ffffff","text-shadow":"3px 3px #6a2f91"},"text":"2 Layers grids\nFont Size / Drop Shadow\n","image":{},"child":[],"keyframes":[]}]}];
	console.log(slideData);
	$(".slider-container").css("background-color", slideData[0]["background-color"]);

	for (i = 0; i < slideData[0]["layers"].length; i++) {
		var arrayLength = 0;
		$("<div class='pre-line draggable resizable layer-"+ i +"'></div>").appendTo($(".slider-container"));
		for (var key in slideData[0]["layers"][i]["css"]) {
			$(".layer-"+ i).css(layerKey, slideData[0]["layers"][i]["css"][key]);
			console.log(key +" Set to->" +slideData[0]["layers"][i]["css"][key]);
			arrayLength++
		}
		for (var key in slideData[0]["layers"][i]["text"]) {
			$(".layer-"+ i).html(slideData[0]["layers"][i]["text"]);
			arrayLength++
		}
			
		for (c = 0; c < slideData[0]["layers"][i]["child"].length; c++) {
		$("<div class='child-"+ i +"'></div>").appendTo($(".layer-"+ i));
		
			for (var child in slideData[0]["layers"][i]["child"][c]["css"]) {
				$(".child-"+ c).css(child, slideData[0]["layers"][i]["child"][c]["css"][child]);
				console.log("i=" + i);
				console.log("c=" + c);
				console.log("child=" + child);
				
			}
			for (var child in slideData[0]["layers"][i]["child"][c]["text"]) {
				$(".child-"+ i).html(slideData[0]["layers"][i]["child"][c]["text"]);
				arrayLength++
			}
		}
		for (var key in slideData[0]["layers"][i]["image"]) {
			console.log(slideData[0]["layers"][i]["image"][key]);
			$(".layer-"+ i).html("<img class='layer-" + i + "-image' src='./uploads/" + slideData[0]['layers'][i]['image']["file"] + "'>");
			$(".layer-" + i + "-image").css(layerKey, slideData[0]["layers"][i]["image"][key]);
			arrayLength++
		}

		$(".draggable").draggable()
		$(".resizable").resizable()		
	}
}));
//-->
</script>
<link rel="stylesheet" href="./includes/bootstrap-slider.css">
<script src="./includes/bootstrap-slider.js"></script>
<script src="./includes/javascripts/prettyprint.js"></script>
<script src="./includes/slider/functions.js"></script>
<script src="./includes/slider/functions-slide.js"></script>
<script src="./includes/slider/functions-layers.js"></script>
<script src="./includes/slider/functions-child.js"></script>
<script src="./includes/slider/custom.js"></script>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> 

<?PHP
include 'footer.php';
?>