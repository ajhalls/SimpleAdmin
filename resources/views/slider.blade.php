@extends('layouts.app')

@section('sliderhead')
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.1/css/select2.min.css"/>
<link rel="stylesheet" href="http://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css"> 
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/plugins/slider/animations.css">

<link rel="stylesheet" href="/plugins/noUiSlider/nouislider.css">

<style type="text/css">
.sub-menu{
margin-left:4px;
}
.trigger{
padding-right:35px !important;
}
.jsonData{
white-space:pre;
width:500px;
}
.currentAniOptions::before
{
position:absolute;
left:-43px;
content:"";
}

.noUi-Thin-connector { background: red; height: 5px; top: 40%; opacity: 0.7;}
.connector-duration { background: blue; }

</style>

@endsection



@section('content')
<div class="row">
    <div class="col-md-3 text-left">
        Title:<input id="saveSliderTitle" name="title" value="test">
        <input type="hidden" id="jsonDataSave" name="jsonData" value="test">
        <button class="btn btn-primary jsonDataSave">Save Slider</button>
    <br>
    </div>
    <div class="col-md-3">

        Open Saved: 
        <select id="jsonDataLoad">
            @foreach ($saved as $item)
            <option value="{{ $item->id }}">{{ $item->title }}</option>
            
            @endforeach
        </select>
        <button class="btn btn-primary jsonDataLoad">Load Saved</button>
    <br>
    </div>
    
</div>
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
<button class="btn-add-layer btn btn-primary btn-sm">Add Div</button>
<button class="btn adjustPlayback btn-primary btn-sm">Adjust Playback</button>

<div  class="row">
    <div class="col-md-12 layerAccordion "></div>

</div>


<div class="row ">
    <div class="col-md-2 ">
    <button class="btn-show-json draggable">Show JSON</button>
    </div><div class="slider" data-easing="true"><div class="bar"></div><div class="sliderBall"></div></div>

</div>
<div class="jsonData"></div>
<div class="datGUI"></div>

<script type="text/javascript">

$.ajax({
  url: "/plugins/slider/partials",
  success: function(data){
     $(data).find('a:contains(.css)').each(function(){
        // will loop through 
        var css = $(this).attr("href");
        $("<link/>", {rel: "stylesheet",type: "text/css",href: "/plugins/slider/partials/" + css}).appendTo("body");

     });
  }
});
</script>


@endsection


@section('footinclude')

</div>
@include('partials.tooltips')

@include('partials.addItemPanel')
<link rel="stylesheet" href="/plugins/slider/colpick.css">
<link rel="stylesheet" href="/plugins/jsoneditor/jsoneditor.min.css">
<link rel="stylesheet" href="/css/bootstrap-slider.css">
<link rel="stylesheet" type="text/css" href="/plugins/tooltipster/dist/css/tooltipster.bundle.min.css" />
<link rel="stylesheet" type="text/css" href="/plugins/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css" />
<link rel="stylesheet" type="text/css" href="/css/weejsonedit.css">
<link href="/plugins/horizontalscroll/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="/plugins/slider/timeline.css">
<link href="/plugins/slider/custom.css" rel="stylesheet" type="text/css">
@endsection



@section('javascriptIncludes')
<script src="http://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
<script src="/js/select2.js"></script>
<script src="/js/SplitText.js"></script>
<script src="/js/TimelineMax.js"></script>
<script src="/js/TweenMax.js"></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/Draggable-latest-beta.js?v=1" type="text/javascript"></script>
<script src="/js/CustomEase.js"></script>
<script src="/js/dat.gui.min.js"></script>
<script src="/js/greensockAnimationLibrary.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.10.2/paper-full.min.js"></script>
<script src="https://cdn.jsdelivr.net/quicksettings/1.3/quicksettings.min.js"></script>
<script src="/plugins/noUiSlider/nouislider.js"></script>
<script type="text/javascript" src="/plugins/tooltipster/dist/js/tooltipster.bundle.min.js"></script>
<script src="/js/jquery.dataTables.rowReordering.js"></script>     
<script src="/js/jquery.dataTables.rowGrouping.js"></script>     
<script src="/js/jquery.nestable.js"></script>  
<script src="/js/jquery.hoverIntent.js"></script>  
<script src="/plugins/bootstrap-slider/dist/bootstrap-slider.min.js"></script>
<script src="/plugins/slider/colpick.js"></script>
<script src="/plugins/jsoneditor/jsoneditor.min.js"></script>
<script src="/plugins/slider/custom.js"></script>
<script src="/plugins/slider/functions.js"></script>
<script src="/plugins/slider/functions-slide.js"></script>
<script src="/plugins/slider/functions-layers.js"></script>
<script src="/plugins/slider/functions-child.js"></script>
<script src="/plugins/slider/functions-keyframe.js"></script>
<script src="/js/animatecss.js"></script>
<script src="/js/prettyprint.js"></script>
<script src="/plugins/slider/timelineFunctions.js"></script>
<script src="/plugins/slider/timeline.js"></script>
<script src="/plugins/horizontalscroll/jquery.mCustomScrollbar.concat.min.js"></script>


<script>

@if (Auth::guest())
var UserID = 0;
@else
var UserID = Auth::user()->id;

@endif
//$(function(){$('select').slider();});
$( ".slide-tabs-item" ).tabs();
$(".btn-show-json").click(function(e) {var results=JSON.stringify(Slides[currentSlide]);$(".jsonData").text(results);$("#jsonDataSave").val(results);})

$("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
});


$( document ).ready(function() {
    $(".jsonDataLoad").click(function(e) {
        var id=$("#jsonDataLoad  option:selected").val();
        $.get("/loadSlider", { "id": id } )
        .done(function(data){
            Slides = [];
            loadSlide($.parseJSON(data));
        })
    });
    $(".jsonDataSave").click(function(e) {
        saveSliderData = {
            "data": JSON.stringify(Slides[currentSlide]),
            "user_id": UserID,
            "title": $("#saveSliderTitle").val()
        }
        $.post("/storeSlider", saveSliderData)
            .done(function( data ) {
        });
    });


    $(".testPlayback").click(function(e) {
        console.log("DID IT", mainTL);

        var delay =  Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["options"]["delay"];
        var tweenIn = Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["options"]["tweenIn"];
        var tweenOut = Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["options"]["tweenOut"];
        var duration = Slides[currentSlide]["layers"][currentLayer]["keyframes"][activeKeyframe]["options"]["duration"];
        mainTL.to($(".sliderLayer-0"), duration, {left:"+=30px", ease:Bounce.easeOut});
    });
AddNewLayer();

});


$("body").on('click', ".ExpandingTipsLink", newOptionsTooltip);
$("body").on('click', ".deleteAnimation", deleteAnimation);
$("body").on('click', ".editAnimation", editLabelAnimation);
$("body").on('dblclick', ".keyframeFrom", keyframeFrom);
$("body").on('dblclick', ".keyframeTo", keyframeTo);
//$("body").on('mousedown', ".timelineElement, .timelineLayerItem, body, .MultiTimelineElement", rightClickTimeline);
$("body").on('click', ".manualEffectPanelClose", function(){$(".manualEffectAdd").hide()});
$('body').on('mouseenter', '.toolTipItem:not(.tooltipstered)', function(){
    $(this)
        .tooltipster({
        contentCloning: true,
        theme: 'tooltipster-borderless'
    })
        .tooltipster('open');
});
$(document).on("contextmenu", ".timelineElement, .timelineLayerItem", function (e) {
  //  stopEvent(e);
  //  rightClickTimeline(e);
});

</script>


<script src="/plugins/slider/loadslide.js"></script>
@include('partials.javascriptIncludes')

@endsection
