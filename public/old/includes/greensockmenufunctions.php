<?PHP
$greensockOptions ="";
$availablegreensockOptions ="";

$dbgreensock = new SQLite3('./database/rightClick.sqlite'); 
$sqlgreensock = "SELECT * FROM greensock WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$querygreensock = $dbgreensock->query($sqlgreensock);
while($datagreensock = $querygreensock->fetchArray(SQLITE3_ASSOC)) {$greensockOptions[] = $datagreensock;};
if (!empty($greensockOptions)){$greensockOptions = parseTree($greensockOptions, $whichlist="active");}

$availablesqlgreensock = "SELECT * FROM greensock WHERE status = 'AVAILABLE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$availablequerygreensock = $dbgreensock->query($availablesqlgreensock);
while($availabledatagreensock = $availablequerygreensock->fetchArray(SQLITE3_ASSOC)) {$availablegreensockOptions[] = $availabledatagreensock;};
if (!empty($availablegreensockOptions)){$availablegreensockOptions = parseTree($availablegreensockOptions, $whichlist="available");}

//
//greensock admin section
//


// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.


function startgreensockListTree($treelist,$menutype="standardlist") {
	
		
	echo '<div '. (($menutype == "active") ? "class='col-md-5' style='left:35px'" :"class='col-md-6'") .' >
			<div id="usersidediv">
				<div class="panel panel-info panel-dark">
					<div class="panel-heading">
							<span class="panel-title">'. (($menutype == "active") ? "Currently applied to target" :"Select Options from Below") .'</span>
					</div>
					<div class="panel-body">';
}

function printgreensockEditableTree($editabletree,$level=0) {
	if(!is_null($editabletree) && count($editabletree) > 0) {
		foreach($editabletree as $node) {
		echo "\n";
		//print_r($editabletree);
			// Top level
			if ( empty($node['children']) ) { // no children
				echo '<li class="dd-item dd3-item clone" data-id="'. $node["value"]["id"] .'" 
				data-tween=\''. $node["value"]["tween"] .'\'
				data-name="'. $node["value"]["name"] .'" >
						<div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
						<div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'">
						<span data-id="'. $node["value"]["id"] .'" class="btn"></span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span>
						<span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-modifier="'. $node["value"]["modifier"] .'" data-custom="'. $node["value"]["custom"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" ></span></div>';

				
			}
			if ( !empty($node['children']) ) { // has children
				echo '<li class="dd-item dd3-item clone" data-id="'. $node["value"]["id"] .'"
				data-tween=\''. $node["value"]["tween"] .'\'
				data-name="'. $node["value"]["name"] .'" >
				<div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
				<div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn"></span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash  fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'"   ></span></div><ol class="dd-list" data-id="'. $node["value"]["id"] .'">';
								}

			printgreensockEditableTree($node['children'], $level+1);
			if (empty($node['children']) ) {echo '</li>';}
			if (!empty($node['children']) ) {echo '</ol>';}
			} // end foreach
			
	} // end if
} // end editTree Printout

function admingreensockMenu($incominglist, $list){
	if ($list == "active"){
		startgreensockListTree($incominglist,$menutype="active");
		echo '<div class="dd" id="nestable" data-id="0" data-list="ACTIVE"><ol class="dd-list" data-id="ACTIVE"><li class="dd-item dd3-item dd-collapsed" data-id="ACTIVE">Active Items';
		if (!empty($incominglist)){printgreensockEditableTree($incominglist);}
		echo '</li></ol></div>';
		echo '</div></div></div></div>';
	}
	if ($list == "available"){
		startgreensockListTree($incominglist);
		echo '<div class="dd" id="nestable" data-id="0" data-list="INACTIVE"><ol class="dd-list" data-id="INACTIVE"><li class="dd-item dd3-item dd-collapsed" data-id="INACTIVE">Inactive Items';
		if (!empty($incominglist)){printgreensockEditableTree($incominglist);}
		echo '</li></ol></div>';
		echo '</div></div></div></div>';
	}
}
?>
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowReordering.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowGrouping.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.nestable.js"></script>   
<script type="text/javascript">
var tl={};
var TLS = "";
var targetItem = ""
var aniMation = "";
var fullTween= "";
var sequence="";
var TIMELINE = "";
function parseAnimation(targetItem, S, L, sequence){
aniMation = "";
  function parseAni(targetItem, S, L, sequence){
	duration = sequence["duration"];
	aniSequence = sequence["tween"];
	aniMation += '.to('+targetItem+', ' + duration + ', ' + JSON.stringify(aniSequence) + ')';
	mainTimeline.push({
		"target":targetItem,
		"duration":duration,
		"tween":JSON.stringify(aniSequence)
	});
	return(aniMation);
  }

  $.each(sequence, function(index, aniArray) {
	var targetItem = "$(\"[data-type='sliderLayer'][data-layer='"+L+"'][data-slide='"+S+"']\")";
	TIMELINE = parseAni(targetItem, S, L, aniArray);
	TLS = "";
	TLS = "tl["+S+"-"+L+"] = new TimelineMax();tl["+S+"-"+L+"]" + TIMELINE;
	main.add(eval(TLS),0);
  });
  

}
function ddAni(item,destination){
	var serializedData = $('[data-list="ACTIVE"]').nestable('serialize');
	var tween = $(item).attr('data-tween');
	var name = $(item).attr('data-name');
	var itemParent = $(item).parent().parent().attr('data-id');
	var status = $(destination).attr('data-list');
	var neighbors = $(item).parent().children("li");
	var neighborOrder = [];
	var flat = serializedData;
	Slides[currentSlide]["layers"][currentLayer]["keyframes"] = [];
	var KEYFRAME = Slides[currentSlide]["layers"][currentLayer]["keyframes"];
	for (var setting in serializedData){
		if (serializedData[setting]["id"] == "ACTIVE"){
		}else{
			var indexVal= KEYFRAME.length-1;
			var tweenseparate = serializedData[setting]["tween"].replace(/},{/gi, "}SPLIT{");
			var tween =tweenseparate.split('SPLIT');
			var TempArray =[];
			for (var property in tween) {
			TempArray.push(JSON.parse(tween[property]));	
				for (var property in TempArray) {
					duration = TempArray[property]["duration"];
					delete TempArray[property]["duration"];
					aniSequence = TempArray[property];
				}
				KEYFRAME.push({});
				var indexVal= KEYFRAME.length-1;
				KEYFRAME[indexVal]["duration"] = duration;
				KEYFRAME[indexVal]["tween"] = aniSequence;
				console.log(name);
			}
		}
	};
};

$(function(){

	$('.dd').nestable({maxDepth : 1});
	$("#basictreelist").hide();
	$('[data-list="ACTIVE"]').on('dragEnd', function(event, item, source, destination, position) {
		var currentItem = $(item).attr('data-id');
		ddAni(item,destination);
		editor.set(Slides);
	});
	$('.panel-heading-controls').on('click', function(e)
    {
	 var target = $(e.target),
		 action = target.data('action');
	 if (action === 'expand-all') {
		 $('.dd').nestable('expandAll');
	 }
	 if (action === 'collapse-all') {
		 $('.dd').nestable('collapseAll');
	 }
    });
});
</script>