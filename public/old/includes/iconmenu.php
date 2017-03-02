<style type="text/css">
.rightClick-sub{ width:250px; height:50px; position:absolute; top:-15; left:205; z-index:10000; padding-top:4px; }
.rightClick2nd{ border:0px 0px 0px 0px; margin:0px 0px 0px 0px;}
.horizontal-menu-group{ border:0px 0px 0px 0px; margin:0px 0px 0px 0px; position:relative; display:inline-block; }
.btn {display: inline-block;padding: 3px 8px;background-color:#000099; }
.dropdown-menu>li {	position:relative; 	-webkit-user-select: none; /* Chrome/Safari */        	-moz-user-select: none; /* Firefox */ 	-ms-user-select: none; /* IE10+ */ 	/* Rules below not implemented in browsers yet */ 	-o-user-select: none; 	user-select: none; 	cursor:pointer; }
.dropdown-menu .sub-menu {     left: 100%;     position: absolute;     top: 0;     display:none;     margin-top: -1px; 	border-top-left-radius:0; 	border-bottom-left-radius:0; 	border-left-color:#fff; 	box-shadow:none; }
.right-caret:after {	content:"";     border-bottom: 4px solid transparent;     border-top: 4px solid transparent;     border-left: 4px solid orange;     display: inline-block;     height: 0;     opacity: 0.8;     vertical-align: middle;     width: 0; 	margin-left:5px; }
.left-caret:after {	content:"";     border-bottom: 4px solid transparent;     border-top: 4px solid transparent;     border-right: 4px solid orange;     display: inline-block;     height: 0;     opacity: 0.8;     vertical-align: middle;     width: 0; 	margin-left:5px; }
</style>

<?
// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.
function parseTree($tree, $root = 0) {
	$return = [];
	# Traverse the tree and search for direct children of the root
	foreach($tree as $key => $value) {
		# A direct child is found
		if($value["parent_id"] == $root) {
			# Remove item from tree (we don't need to traverse this again)
			unset($tree[$key]);
			# Append the child into result array and parse its children
			$return[] = array(
				'value' => $value,
				'children' => parseTree($tree, $value["id"])
			);
		}
	}
	return empty($return) ? null : $return;
}
function printIconTree($tree,$level=0) {
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
			printIconTree($node['children'], $level+1);
			if (!empty($node['children']) ) {echo '</li></ul>';}
		} // end foreach
	} // end if
	if($level==0){
	echo '</div><span class="iconSelection pull-right" style="color:#6699ff;position:absolute;top:2px;left:105px; font-size:1.5em;"></span>';
	}
} // end function

$dbicons = new SQLite3('./database/icons.sqlite'); 
$sql = "SELECT * FROM icons ORDER BY parent_id ASC, sortorder ASC, name ASC";
$queryicons = $dbicons->query($sql);
while($data = $queryicons->fetchArray(SQLITE3_ASSOC)) {$icons[] = $data;};
$icons = parseTree($icons);
?>

<script type="text/javascript">
$(function(){
	$(".dropdown-menu > li > a.trigger").on("click",function(e){
		var current=$(this).next();
		var grandparent=$(this).parent().parent();
		if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
			$(this).toggleClass('right-caret left-caret');
		grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
		grandparent.find(".sub-menu:visible").not(current).hide();
		current.toggle();
		e.stopPropagation();
	});
	$(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
		var root=$(this).closest('.dropdown');
		root.find('.left-caret').toggleClass('right-caret left-caret');
		root.find('.sub-menu:visible').hide();
	});
	$(".iconItemSelection").on("click",function(){
	var cssPrefix = $(this).attr('data-prefix');
	var cssCode = $(this).attr('data-csscode');
	var cssModifier = $(this).attr('data-modifier');
	$(".iconSelection").html('You Selected: <i class="'+ cssPrefix +' '+ cssCode +' ' + cssModifier + '"></i>');
	$(".editmodal-fontawesome[data-itemId='"+$(this).attr('data-itemId')+"']" ).val(cssPrefix +' '+ cssCode +' ' + cssModifier);
	});
});
</script>

