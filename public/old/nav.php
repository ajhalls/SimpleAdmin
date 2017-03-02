<?PHP
///
/// LEFT HAND NAVIGATION SECTION
///
$menudb = new SQLite3('./database/admin.sqlite'); 
if(isset($_SESSION["myusername"])){
$sqlmenu = "SELECT * FROM menu_items WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
}else{
$sqlmenu = "SELECT * FROM menu_items WHERE status = 'ACTIVE' AND restricted != 'ADMIN' ORDER BY parent_id ASC, sortorder ASC, name ASC";
}
$sqlmenu = $menudb->query($sqlmenu);
while($menudata = $sqlmenu->fetchArray(SQLITE3_ASSOC)) {$menulist[] = $menudata;};
if (!empty($menulist)){$navArray = parseNav($menulist);}
$menudb->close();
unset($menudb);

$menu_items = array();

// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.
function parseNav($tree, $root = 0) {
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
				'children' => parseNav($tree, $value["id"])
			);
		}
	}
	return empty($return) ? null : $return;
}

function printNav($tree,$level=0) {
	global $currentpage;
	if(!is_null($tree) && count($tree) > 0) {
		foreach($tree as $node) {
		echo "\n";
			// Top level
			if ( empty($node['children']) ) { // no children
				if ( $currentpage == $node["value"]['url'] ) {
				echo '<li class="active activeNavItem">';    
				} else {
				echo '<li>';    
				}
				echo '<a id="'.$node['value']['id'].'" href="'. $node['value']['url'] .'">&nbsp;<i class="menu-icon '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'">&nbsp;</i><span class="mm-text mmc-dropdown-delay animated fadeIn">&nbsp;'.$node['value']['name'].'</span></a>';
			}
			if ( !empty($node['children']) ) { // has children
				if ( $currentpage == $node["value"]['url'] ) {
				echo '<li class="active activeNavItem">';    
				} else {
				echo '<li>';    
				}
				echo '<a id="'.$node['value']['id'].'" href="'. $node['value']['url'] .'">&nbsp;<i class="'.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'">&nbsp;</i><span class="nav-label">&nbsp;'.$node['value']['name'].'</span><span class="fa arrow"></span></a><ul class="nav nav-second-level">';
								}

			printNav($node['children'], $level+1);
			if (empty($node['children']) ) {echo '</li>';}
			if (!empty($node['children']) ) {echo '</ul>';}
			} // end foreach
	} // end if
} // end printNav Printout
?>
<!-- 4. $MAIN_SIDE_MENU ================================================================================= -->

    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu">

			<?PHP
				echo printNav($navArray);
			?>
		 <!-- / .navigation -->

<?php
if(isset($_SESSION["myusername"])){
print_r('
<li class="info_link">
<a style="color:#ffcccc" href="./includes/logout.php"><i class="fa fa-user"></i><span class="nav-label">' . $_SESSION["myusername"] . '&nbsp;&nbsp;&nbsp;(Logout)&nbsp;</span></a>
		</li>');
}else{
print_r('<li class="info_link">
			<a class="btn" data-target="#login" data-toggle="modal"><i class="fa fa-user"></i>
			<span class="nav-label">User Login</span></a></li>');
}
//Check to see if they failed the login
if(isset($_SESSION["invalid"])){
	print_r('<div style="background-color: #ff0033 !important;color:#fff;">
	invalid username / password
				</div>
	');
	session_destroy();
}
//Check to see if they tried to access a restricted page without logging in
if(isset($_SESSION["restricted"])){
	print_r('<div style="background-color: #ff0033 !important;color:#fff;">
	The page you tried to access requires you to login as an administrator
				</div>
	');
	session_destroy();
}
?>
            </ul>

</div>
<div id="login" class="modal fade" style="display: none;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
				<h4 class="modal-title">Login</h4>
			</div>
			<div class="modal-body">
				<form name="form1" class="panel  form-horizontal" method="post" action="./includes/auth.php">
				<div class="panel-body">
					<div class="row form-group">
					<label class="col-sm-4 control-label">Username</label>
						<div class="col-sm-8">
						<input class="form-control" type="textbox" name="myusername" id="myusername" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
					<label class="col-sm-4 control-label">Password</label>
						<div class="col-sm-8">
						<input class="form-control" name="mypassword" type="textbox" id="mypassword" size="20" value="" onKeyPress="return submitenter(this,event)">
						</div>
					</div>
					<div class="panel-footer text-right">
					<a class="btn" onclick="$(this).closest('form').submit()">Login</a> 
					</div>
				</div>
				</form>
			</div>					
		</div>
	</div>
</div>
</nav>			
<div id="page-wrapper" class="gray-bg">
	<div class="row border-bottom">
		<nav class="navbar navbar-static-top  " role="navigation" style="margin-bottom: 0"></nav>
		<div class="navbar-header">
			<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>

		</div>
	</div>


<SCRIPT TYPE="text/javascript">
<!--
    function submitenter(myfield,e)
    {
        var keycode;
        if (window.event) keycode = window.event.keyCode;
        else if (e) keycode = e.which;
        else return true;

        if (keycode == 13)
        {
            myfield.form.submit();
            return false;
        }
        else
            return true;
    }
//-->
</SCRIPT>