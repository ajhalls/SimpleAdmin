<style type="text/css">
.sub-menu{
margin-left:4px;
}
.trigger{
padding-right:35px !important;
}
.jsonData{
white-space:pre;
position:absolute;
left:1150px;
width:500px;
top:50px;
}
.currentAniOptions::before
{
position:absolute;
left:-43px;
content:"";
}
</style>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>

<?
// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.
function printrightMenu($tree,$level=0) {
	if(!is_null($tree) && count($tree) > 0) {
	if($level==0){
	echo '<ul class="dropdown-menu rightClickMenu">';
	}
		foreach($tree as $node) {
		echo "\n";
			// Top level
			if ( empty($node['children']) ) {
				if ( !empty($node['value']['menu_type']) AND ($node['value']['menu_type']== "inlineForm") ) {
					echo '<li><a class="trigger right-caret '.$node['value']['action_type'].' '.$node['value']['icon'].' '.$node['value']['menu_type'].' '.$node['value']['action_type'].'" data-menu_type="'.$node['value']['menu_type'].'" data-action_type="'.$node['value']['action_type'].'"  data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu"><li>'. $node['value']['custom'] . '</li></ul></li>';
				}else{
				echo '<li><a class="iconItemSelection '.$node['value']['action_type'].' '.$node['value']['icon'].' MenuActionItem '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'" type="button" data-animationui="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>'. (!empty($node["value"]["code"]) ? '<span  data-animationui="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" style="position:absolute; right:15px; top:9px; text-size=16px;" class="addKeyframeMenu fa fa-plus-square-o fa-lg pull-right"></span>' : '').  '</li>';
				}
			}
			if ( !empty($node['children']) AND !empty($node['children']['0']['children'] )) {
				echo '<li class="dropdown-submenu">
				<a class="trigger right-caret '.$node['value']['icon'].' '.$node['value']['action_type'].' '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'"  data-animationui="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'"  data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu">';
			}
			if ( !empty($node['children']) AND empty($node['children']['0']['children']) ) {
				echo '<li class="dropdown-submenu">
				<a class="trigger right-caret '.$node['value']['action_type'].' '.$node['value']['icon'].' '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'"  data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu"  style="max-height:400px;overflow:auto;">';
			}
			printrightMenu($node['children'], $level+1);
			if (!empty($node['children']) ) {echo '</li></ul>';}
		} // end foreach
	} // end if
	if($level==0){
	echo '<div class="currentAnimations"></div>';
	}
} // end function

$dbrightMenu = new SQLite3('./database/rightClick.sqlite'); 
$sql = "SELECT * FROM rightClickMain WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";

$query = $dbrightMenu->query($sql);

while($data = $query->fetchArray(SQLITE3_ASSOC)) {
	$menu[] = $data; 
};
$menu = parseTree($menu,$whichlist="rightclick");
?>


	

<script type="text/javascript">
<!--
  function Anim(x) {
    $('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').removeClass(x + ' animated').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').removeClass(x + ' animated');
    });
  };
var tl = new TimelineLite();

var counter="1";
var clickSettings={};
var loopSettings={};
var clickItem="";
var actionItem ="";
$(function(){
$(".rightClickMenu").hide();

$('.rightClickMenu').mousedown(function(event){event.stopPropagation();}); 

$('.slider-container').mousedown(function(e) {
	actionItem = $(e.target).attr("data-animationId");
	currentLayer = $(e.target).attr("data-layer");
	currentSlide = $(e.target).attr("data-slide");
   switch (e.which) {
	   case 1: //left button
			$( ".rightClickMenu" ).hide();
	   break;
        case 3: //right button

		clickItem=e.target;
		// get current mouse position to know where to place the menu
		var currentMousePos={"x":"","y":""};
		currentMousePos.x = e.pageX -250;
		currentMousePos.y = e.pageY -15;

		//add the actual menu to the body, assign it to the data-menu from before
		$('.rightClickMenu').css({
			"position":"absolute",
			"z-index":"10000",
			"border": "6px solid transparent",
			"padding-top":"4px",
			"top":currentMousePos.y,
			"left":currentMousePos.x
			});
		$( ".rightClickMenu" ).show();
		 window.oncontextmenu = function() { return false };
		break;
	}
}); // close menu if you click on something other than menu
	
	$(".dropdown-menu > li > a.trigger").on("click",function(e){
		var current=$(this).next();
		var grandparent=$(this).parent().parent();
		if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
			$(this).toggleClass('right-caret left-caret');
		grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
		grandparent.find(".sub-menu:visible").not(current).hide();
		current.toggle();
	});
	$(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
		var root=$(this).closest('.dropdown');
		root.find('.left-caret').toggleClass('right-caret left-caret');
		root.find('.sub-menu:visible').hide();
	});
	$(".clickFormInput").on('keyup mousedown mouseup',(function(e) {
		var setting = $(this).attr("name"); //need to find right setting to update
		clickSettings[setting] = "+=" + $(this).val();
		$(".jsonData").html(prettyPrint(clickSettings));
	}));
	$('.MenuActionItem').click(function(x) {
		// capture values prior to destroying menu
		var animation = $(this).attr('data-animationui');
		// close menu if you click on a menu item, then apply action to original object.
		$( ".rightClickMenu" ).hide();
		if ($(this).attr('data-menu_type') == "animatecss")
		{
			Anim(animation);
		}else{
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity(animation, clickSettings);
			$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity("transition.fadeIn", {delay:700});
		}

	}); 
	$('.clickFormGo').click(function() {
		// capture values prior to destroying menu
		var animation = $(this).attr('data-animationui');
		// close menu if you click on a menu item, then apply action to original object.
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity(clickSettings);
	}); 


	$('.playAnimations').click(function(e) {
		var animationSequence = "";
	for (i = 0; i < Slides[currentSlide]["layers"][currentLayer]["keyframes"].length; i++) {
		animationSequence = Slides[currentSlide]["layers"][currentLayer]["keyframes"][i]["greensock"];
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').animateCSS(animation);
	}		
	}); 
	$('.addKeyframeMenu').click(function(e) {
		var targetDiv = e.target;
		var targetCode = $(this).attr('data-animationui');
		var aType = $(this).attr('data-menu_type');
		var aLength = Slides[currentSlide]["layers"][currentLayer]["keyframes"].length;
		Slides[currentSlide]["layers"][currentLayer]["keyframes"].push({});
		Slides[currentSlide]["layers"][currentLayer]["keyframes"][aLength][aType] = targetCode;

		$(".currentAnimations").html("");
		for (i = 0; i < Slides[currentSlide]["layers"][currentLayer]["keyframes"].length; i++) {

		$(".currentAnimations")
			.append("<div class='currentAniOptions' style='position:absolute;margin-left:-15px;margin-top:5px;background-color:white;color:red;font-size:8px;'><span>200<br>2000</span></div><div style='line-height:2;color:blue;font-size:14px;font-weight:250;'>&nbsp;&nbsp;" + Slides[currentSlide]["layers"][currentLayer]["keyframes"][i][aType] + "</span><span class='pull-right' style='width:15px'>&nbsp;&nbsp;</span><span class='fa fa-trash-o fa-lg pull-right'></span><span class='fa fa-pencil fa-lg pull-right'></div>");
		}
		$(".jsonresults").html(prettyPrint(Slides));
		
	}); 

});
//-->
</script>
<link href="./includes/stylesheets/animate.css" rel="stylesheet">
<script src="./includes/javascripts/animatecss.js"></script>
<script src="./includes/javascripts/prettyprint.js"></script>