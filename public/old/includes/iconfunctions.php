<?PHP

function printDropdown($tree,$level=0) {
	if(!is_null($tree) && count($tree) > 0) {
	if($level==0){
	echo '<div class="dropdown" style="position:relative">
			<a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Select: <span class="caret"></span></a>
				<ul class="dropdown-menu">';
	}
		foreach($tree as $node) {
			//print("<pre>".print_r($node['children'],true)."</pre>");
		echo "\n";
			// Top level
			if ( empty($node['children']) ) {
				echo '<li><a class="iconItemSelection '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'" type="button" data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">&nbsp;'.$node['value']['name'].'</a></li>';
			}
			if ( !empty($node['children']) AND !empty($node['children']['0']['children'] )) {
				echo '<li class="dropdown-submenu">
				<a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'"  data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu">';
			}
			if ( !empty($node['children']) AND empty($node['children']['0']['children']) ) {
				echo '<li class="dropdown-submenu">
				<a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu"  style="max-height:400px;overflow:auto;">';
			}
			printDropdown($node['children'], $level+1);
			if (!empty($node['children']) ) {echo '</li></ul>';}
		} // end foreach
	} // end if
	if($level==0){
	echo '</div><span class="iconSelection pull-right" style="color:#6699ff;position:absolute;top:2px;left:105px; font-size:1.5em;"></span>';
	}
} // end function


?>