<?PHP


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
		//print_r($editabletree);
		foreach($editabletree as $node) {

		echo "\n";
		
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
