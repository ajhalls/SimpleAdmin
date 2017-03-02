<div id="timelineControls">
	<div class="sliderValues">time: <span id="time"></span>s / progress: <span id="progress"></span></div>
	<center><input class="timelineSlider" id="progressSlider" type="text" /></center>
	<button id="playBtn">play()</button><button id="pauseBtn">pause()</button><button id="resumeBtn">resume()</button><button id="reverseBtn">reverse()</button><button id="restartBtn">restart()</button>
	<div style="text-align:left; width:420px; margin:auto"><br>
		<center><input class="timeScaleSlider" id="timeScaleSlider" type="text" />
	  <div class="sliderValues">timeScale: <span id="timeScale" >1</span></center></div>
	</div>  
</div>

<style type="text/css">
	#timelineControls {
	  position:absolute;
	  top:55px;
	  text-align: center;
	  right:50px;

	}
	.timelineSlider {
	  width:420px;
	  height:15px;
	  margin:auto;
	}
	.sliderValues {
	  margin:10px;
	}
	.ui-slider-horizontal {
		height: 0.8em;
	}
	.sliderValues span {
	  font-size:24px;
	}

	#timeScaleSlider {
	  width:260px;
	}
	.ui-widget-content {
		background-color: rgba(255, 255, 255, 0.2);
	}
</style>

<script type="text/javascript">
	<!--
	CSSPlugin.defaultTransformPerspective = 400;
	var playBtn = $("#playBtn"),
		pauseBtn = $("#pauseBtn"),
		resumeBtn = $("#resumeBtn"),
		time = $("#time"),
		progress = $("#progress"),
		timeScale = $("#timeScale"),
		buttons = [playBtn, pauseBtn, resumeBtn],
		progressSlider;


	// controls

	$('#progressSlider').on("slide", function(slideEvt) {
		$('#time').html(slideEvt.value);
		main.time(slideEvt.value).pause();
	});


	function updateSlider() {
	progressSlider.setValue(parseFloat(main.time().toFixed(3)));
		time.html(main.time().toFixed(4));
		progress.html(main.progress().toFixed(2))
	} 
	$("#playBtn").on("click", function(){
	  //Play the timeline forward from the current position.
	  //If tween is complete, play() will have no effect

		progressSlider.options.max = main.totalDuration();
	  main.play();
	});
$("#pauseBtn").on("click", function(){
	  main.pause();
	});

	$("#resumeBtn").on("click", function(){
	  //Resume playback in current direction.
	  main.resume();
	});

	$("#reverseBtn").on("click", function(){
	  main.reverse();
	});

	$("#restartBtn").on("click", function(){
	  main.restart();
	});

	$('#timeScaleSlider').on("slide", function(slideEvt) {
		main.timeScale(slideEvt.value );
		timeScale.html(slideEvt.value)
	  });

	$(function(){
		
	progressSlider = new Slider('#progressSlider',
		{
			step: .005,
			min: 0,
			max: main.totalDuration().toFixed(4)
		});
	timeScaleSlider = new Slider('#timeScaleSlider',
		{
			step: .1,
			value:1,
			min: 0.1,
			max: 3
		});
	});
	var main = new TimelineMax({onUpdate:updateSlider, delay:0.4});

	//-->
</script>