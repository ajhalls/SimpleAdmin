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


</style>


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
					echo '<li><a class="trigger right-caret '.$node['value']['action_type'].' '.$node['value']['icon'].' '.$node['value']['menu_type'].' '.$node['value']['action_type'].'" data-menu_type="'.$node['value']['menu_type'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu"><li>'. $node['value']['custom'] . '</li></ul></li>';
				}else{
					//this group has no child and will likely have an Add Animation icon on it
				echo '<li><a class="iconItemSelection '.$node['value']['action_type'].' '.$node['value']['icon'].' MenuActionItem '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'" '. (!empty($node["value"]["act_on"]) ? 'data-target="'.$node['value']['act_on'].'" data-toggle="modal" ' : '').  '  type="button" data-animationui="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>'. (!empty($node["value"]["code"]) ? '<span  data-code="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" style="position:absolute; right:15px; top:9px; text-size=16px;" class="addKeyframeMenu fa fa-plus-square-o fa-lg pull-right" ></span>' : '').  '</li>';
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
var targetDiv = "";
var counter="1";
var manualSettings={options:{}};
var loopSettings={};
var clickItem="";
var actionItem ="";
var mainTimeline=[];

$(function(){
$(".rightClickMenu").hide();

$('.rightClickMenu').mousedown(function(event){event.stopPropagation();}); 

$('html').mousedown(function(e) {
	targetDiv = e.target;
	actionItem = $(e.target).attr("data-animationId");
	if ($(e.target).attr("data-layer"))
	{
	currentLayer = $(e.target).attr("data-layer");
	currentSlide = $(e.target).attr("data-slide");
	}
	
   switch (e.which) {
	   case 1: //left button
			$( ".rightClickMenu" ).hide();
	   break;
        case 3: //right button

		clickItem=e.target;
		// get current mouse position to know where to place the menu
		var currentMousePos={"x":"","y":""};
		currentMousePos.x = e.pageX;
		currentMousePos.y = e.pageY;

		//add the actual menu to the body, assign it to the data-menu from before
		$('.rightClickMenu').css({
			"position":"absolute",
			"z-index":"10000",
			"border": "6px solid transparent",
			"padding-top":"4px",
			"top":currentMousePos.y,
			"left":currentMousePos.x
			});
		$(".animationTitle").text("Slide: " + currentSlide + " Layer: "+ currentLayer + "");
		$(".editmodal-currentSlide").val(currentSlide);
		$(".editmodal-currentLayer").val(currentLayer);
		


			 if ($(e.target).hasClass("canvasItem") || $(e.target).hasClass("slider-container"))
			 {
				 $( ".rightClickMenu" ).show();
				 window.oncontextmenu = function() { return false };
			 }else{
				$( ".rightClickMenu" ).hide();
				window.oncontextmenu = function() { return true };
			 };
		break;
	}
}); // close menu if you click on something other than menu
	$(".deleteItem ").on("click",function(){
		var id = $(this).attr('data-id');
		$("li[data-id='" + id + "']").remove();
	});
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
		if (setting == "duration")
		{
			manualSettings["duration"] = $(this).val();

		}else{
			manualSettings["options"][setting] = $(this).val();
		}
		editor.set(Slides);
	}));

	$('.clickFormGo').click(function() {
		// capture values prior to destroying menu
		var animation = $(this).attr('data-animationui');
		// close menu if you click on a menu item, then apply action to original object.
		$('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]').velocity(clickSettings);
	}); 


	$('.playAnimations').click(function(e) {
		main.clear();
		for (S = 0; S < Slides.length; S++) {		
			for (L = 0; L < Slides[currentSlide]["layers"].length; L++) {
				
				parseAnimation(targetItem, S, L, Slides[S]["layers"][L]["keyframes"])
				
			}
		}
		console.log(mainTimeline);
	}); 

	$('.addTimelineEvent').click(function(e) {
		var aLength = Slides[currentSlide]["layers"][currentLayer]["keyframes"].length;
		Slides[currentSlide]["layers"][currentLayer]["keyframes"].push({});
		Slides[currentSlide]["layers"][currentLayer]["keyframes"][aLength] = manualSettings;
		tl.to($('[data-type="sliderLayer"][data-layer="'+currentLayer+'"][data-slide="'+currentSlide+'"]'), manualSettings['duration'], manualSettings['options']);
		manualSettings = {options:{}};
		editor.set(Slides);
		for (i = 0; i < Slides[currentSlide]["layers"][currentLayer]["keyframes"].length; i++) {
		$(".currentAnimations")
			.append("<div class='currentAniOptions' style='position:absolute;margin-left:-15px;margin-top:5px;background-color:white;color:red;font-size:8px;'><span>200<br>2000</span></div><div style='line-height:2;color:blue;font-size:14px;font-weight:250;'>&nbsp;&nbsp;Manual Animation</span><span class='pull-right' style='width:15px'>&nbsp;&nbsp;</span><span class='fa fa-trash-o fa-lg pull-right'></span><span data-target='#keyframeModal'  data-toggle='modal' class='fa editKeyframe fa-pencil fa-lg pull-right' data-keyframe='" + i + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' ></span></div>");
		}
		$('.editKeyframe').click(function(e) {
			currentLayer = $(this).attr("data-layer");
			currentSlide = $(this).attr("data-slide");
			currentKeyframe = $(this).attr("data-keyframe");
			var keyframeData = Slides[currentSlide]["layers"][currentLayer]["keyframes"][currentKeyframe];
			console.log(keyframeData);
		}); 

	});

	$('.addKeyframeMenu').click(function(e) {
		var targetCode = $(this).attr('data-code');
		var aType = $(this).attr('data-menu_type');
		targetCode = eval("("+targetCode+")");
		var aLength = Slides[currentSlide]["layers"][currentLayer]["keyframes"].length;
		Slides[currentSlide]["layers"][currentLayer]["keyframes"].push({options:{}});
		for (var key in targetCode) {

		 if (key =="duration")
			{
			Slides[currentSlide]["layers"][currentLayer]["keyframes"][aLength]["duration"] = targetCode[key];
		
			}else{
			Slides[currentSlide]["layers"][currentLayer]["keyframes"][aLength]["options"][key] = targetCode[key];
			}
		}
		$(".currentAnimations").html("");
		for (i = 0; i < Slides[currentSlide]["layers"][currentLayer]["keyframes"].length; i++) {

		$(".currentAnimations")
			.append("<div class='currentAniOptions' style='position:absolute;margin-left:-15px;margin-top:5px;background-color:white;color:red;font-size:8px;'><span>200<br>2000</span></div><div style='line-height:2;color:blue;font-size:14px;font-weight:250;'>&nbsp;&nbsp;" + $(this).parent().text() + "</span><span class='pull-right' style='width:15px'>&nbsp;&nbsp;</span><span class='fa fa-trash-o fa-lg pull-right'></span><span class='fa fa-pencil fa-lg pull-right'></div>");
		}
		editor.set(Slides);
		
	}); 


$('#animationModal').on('hidden.bs.modal', function (e) {
   $('[data-list="ACTIVE"]').triggerHandler('dragEnd');
});
});

//-->
</script>


<div id="keyframeModal" class="modal fade" style="display: none;z-index:99999;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title">Add Item</h4>
			</div>
			<div class="modal-body">
			<form action="./iconadmin.php?do=additem" method="POST" id="modalPopup" class="panel  form-horizontal">
			<input class="form-control editmodal-id hidden" type="textbox" name="id" size="20" value="">
			<input class="form-control editmodal-parent_id hidden" type="textbox" name="parent_id" size="20" value="">
			<div class="panel-body">
					<div class="row form-group">
						<label class="col-sm-4 control-label">Name</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-name" type="textbox" name="name" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Group</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-group" type="textbox" name="group" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Prefix</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-prefix" name="prefix" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Code</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-code" name="code" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Modifier Options</label>
						<div class="col-sm-8">
						
						<input class="form-control editmodal-modifier"  name="modifier" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Custom Field</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-custom"  name="custom" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Status</label>
						<div class="col-sm-8">
						<select class="form-control editmodal-status" name="status">
						<option value="ACTIVE">ACTIVE</option>
						<option value="INACTIVE">INACTIVE</option>
						</select>
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Sort Order</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-sortorder"  name="sortorder" size="20" value="">
						</div>
					</div>
					<div class="panel-footer text-right">
						<a class="btn"  data-target="#modal-sizes-2" data-toggle="modal" onclick="$(this).closest('form').submit()">Save Changes</a> 
					</div>
				</div>
				</form>
			</div>
		</div>
	</div>
</div>


<div id="animationModal" class="modal large fade" style="display: none;z-index:99999;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg"  style="width:80%">
		<div class="modal-content">
			<div class="modal-header">
				<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
				<h4 class="modal-title">Animation Panel</h4><span class="animationTitle"></span>
				<input class="editmodal-currentSlide hidden" type="textbox" name="currentSlide" size="20" value="">
				<input class="editmodal-currentLayer hidden" type="textbox" name="currentLayer" size="20" value="">
			</div>
			<div class="modal-body">
			<form action="" method="POST" class="panel  form-horizontal">
			<!-- Start Body -->

			<div class="panel-body">
				<div class="col-md-12 group tabs">      
					<ul>        
						<li class="tabs"><a href="#BasicAnimations">Basic Animations</a></li>     
						<li class="tabs"><a href="#image">Child</a></li>     
					</ul>     
					<div>     
						<div id="BasicAnimations">     
							List of Animations:<br>     
						<?PHP include './includes/greensockmenufunctions.php';
						echo admingreensockMenu($availablegreensockOptions, $list="available");
						echo admingreensockMenu($greensockOptions, $list="active");
						?>
						</div>

						
					</div>
				</div>

	
					<div class="panel-footer text-right">
						<a class="btn"  data-target="#modal-sizes-2" data-toggle="modal" onclick="$(this).closest('form').submit()">Save Changes</a> 
					</div>
				</div>
				
				<!-- End Body -->
				</form>
			</div>
		</div>
	</div>
</div>

<link href="./includes/stylesheets/animate.css" rel="stylesheet">
<script src="./includes/javascripts/animatecss.js"></script>
<script src="./includes/javascripts/prettyprint.js"></script>