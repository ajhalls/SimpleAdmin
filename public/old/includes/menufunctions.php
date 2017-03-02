<?PHP
$activemenulist="";
$availablemenulist="";
$sqlmenuAvailable = "SELECT * FROM menu_items WHERE status = 'INACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$querymenuAvailable = $db->query($sqlmenuAvailable);
while($querymenuAvailableWhile = $querymenuAvailable->fetchArray(SQLITE3_ASSOC)) {$queryMenuAvailableArray[] = $querymenuAvailableWhile;};
if (!empty($queryMenuAvailableArray)){$availablemenulist = parseTree($queryMenuAvailableArray, $whichlist="available");}


$sqlmenuActive = "SELECT * FROM menu_items WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$querymenuActive = $db->query($sqlmenuActive);
while($querymenuWhile = $querymenuActive->fetchArray(SQLITE3_ASSOC)) {$queryMenuArray[] = $querymenuWhile;};
$activelist = NULL;
if (!empty($queryMenuArray)){$activemenulist = parseTree($queryMenuArray, $whichlist="active");}



// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.


function startListTree($treelist,$menutype="standardlist") {
	
		
	echo '<div '. (($menutype == "active") ? "class='col-md-5 affix' style='right:0'" :"class='col-md-6'") .' >
			<div id="usersidediv">
				<div class="panel panel-info panel-dark">
					<div class="panel-heading">
						<div class="panel-heading-controls">
							<button class="btn btn-xs topPanel" title=""  data-target="#modal-sizes-2" data-toggle="modal" rel="tooltip" data-original-title="Add Menu Item"><span class="fa fa-plus-circle"></span></button></a>

							<input type="hidden" id="reorderValue" name="ids" value=""/>
							
							<button class=" toggleView btn btn-xs topPanel" title="Expand All" rel="tooltip" type="button" data-action="expand-all"><span class="fa fa-chevron-down"></span></button>
							
							<button  class=" toggleView btn btn-xs topPanel" title="Collapse All" rel="tooltip" data-action="collapse-all" type="button" data-original-title="Collapse All"><span class="fa fa-chevron-up"></span></button>
							
							<button  class="pull-right toggleView btn btn-xs topPanel" onclick="$(\'.affixToggle\').toggleClass(\'affix\')" title="Fix to Top" rel="tooltip"  type="button" data-original-title="Fix to Top"><span class="glyphicon glyphicon-pushpin"></span></button>
						</div>
							<span class="panel-title">Menu Items</span>
					</div>
					<div class="panel-body">';
}

function printEditableTree($editabletree,$level=0) {
	if(!is_null($editabletree) && count($editabletree) > 0) {
		foreach($editabletree as $node) {
		echo "\n";
		//print_r($editabletree);
			// Top level
			if ( empty($node['children']) ) { // no children
				echo '<li class="dd-item dd3-item" data-id="'. $node["value"]["id"] .'">
						<div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
						<div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn '.$node['value']['prefix'].' '.$node['value']['code'].'"></span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-group="'. $node["value"]["group"] .'" data-code="'. $node["value"]["code"] .'" data-prefix="'. $node["value"]["prefix"] .'" data-modifier="'. $node["value"]["modifier"] .'" data-custom="'. $node["value"]["custom"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" data-restricted="'. (!empty($node["value"]["restricted"]) ? $node["value"]["restricted"] : "").  '" data-url="'. (!empty($node["value"]["url"]) ? $node["value"]["url"] : "").  '"></span></div>';

				
			}
			if ( !empty($node['children']) ) { // has children
				echo '<li class="dd-item dd3-item" data-id="'. $node["value"]["id"] .'">
				<div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
				<div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn '.$node['value']['prefix'].' '.$node['value']['code'].'"></span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash  fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-group="'. $node["value"]["group"] .'" data-code="'. $node["value"]["code"] .'" data-prefix="'. $node["value"]["prefix"] .'" data-modifier="'. $node["value"]["modifier"] .'" data-custom="'. $node["value"]["custom"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" data-restricted="'. (!empty($node["value"]["restricted"]) ? $node["value"]["restricted"] : "").  '"  data-url="'. (!empty($node["value"]["url"]) ? $node["value"]["url"] : "").  '"></span></div><ol class="dd-list" data-id="'. $node["value"]["id"] .'">';
								}

			printEditableTree($node['children'], $level+1);
			if (empty($node['children']) ) {echo '</li>';}
			if (!empty($node['children']) ) {echo '</ol>';}
			} // end foreach
			
	} // end if
} // end editTree Printout

function adminMenu($incominglist, $list){
	if ($list == "active"){
		startListTree($incominglist,$menutype="active");
		echo '<div class="dd" id="nestable" data-id="0" data-list="ACTIVE"><ol class="dd-list" data-id="ACTIVE"><li class="dd-item dd3-item dd-collapsed" data-id="ACTIVE">Active Items';
		if (!empty($incominglist)){printEditableTree($incominglist);}
		echo '</li></ol></div>';
		echo '</div></div></div></div>';
	}
	if ($list == "available"){
		startListTree($incominglist);
		echo '<div class="dd" id="nestable" data-id="0" data-list="INACTIVE"><ol class="dd-list" data-id="INACTIVE"><li class="dd-item dd3-item dd-collapsed" data-id="INACTIVE">Inactive Items';
		if (!empty($incominglist)){printEditableTree($incominglist);}
		echo '</li></ol></div>';
		echo '</div></div></div></div>';
	}
}
?>

<script type="text/javascript">
<!--
$(function(){

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
//-->
</script>