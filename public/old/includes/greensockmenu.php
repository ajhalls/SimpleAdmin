<?PHP

$dbgreensock = new SQLite3('./database/rightClick.sqlite'); 
$sqlgreensock = "SELECT * FROM greensock WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$querygreensock = $dbgreensock->query($sqlgreensock);
while($datagreensock = $querygreensock->fetchArray(SQLITE3_ASSOC)) {$greensockOptions[] = $datagreensock;};
if (!empty($greensockOptions)){$greensockOptions = parseTree($greensockOptions, $whichlist="active");}
//
//greensock admin section
//


function printGreensock($tree,$level=0) {
	if(!is_null($tree) && count($tree) > 0) {
	if($level==0){
	echo '
				<ul>';
	}
		foreach($tree as $node) {
		echo "\n";
			// Top level
			if ( empty($node['children']) ) {
				echo '<li>'.$node['value']['name'].'</li>';
			}
			if ( !empty($node['children']) AND !empty($node['children']['0']['children'] )) {
				echo '<li class="dropdown-submenu">
				'.$node['value']['name'].'
				<ul class="dropdown-menu sub-menu">';
			}
			if ( !empty($node['children']) AND empty($node['children']['0']['children']) ) {
				echo '<li class="dropdown-submenu">
				<a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-code="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
				<ul class="dropdown-menu sub-menu"  style="max-height:400px;overflow:auto;">';
			}
			printGreensock($node['children'], $level+1);
			if (!empty($node['children']) ) {echo '</li></ul>';}
		} // end foreach
	} // end if
	if($level==0){
	echo '';
	}
} // end function
printGreensock($greensockOptions);

?>
