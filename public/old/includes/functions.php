<?php
session_start();

// Find out what page is currently being browsed and check permissions.
function checkPageRights($currentpage) {
	$pageMatchdb = new SQLite3('./database/admin.sqlite');
	$selectpages = "SELECT * from menu_items";
	$queryallpages = $pageMatchdb->query($selectpages);
	while($allpages = $queryallpages->fetchArray(SQLITE3_ASSOC)) {$pages[] = $allpages;};
		foreach($pages as $key => $value) {
		if ($currentpage == $value['url'] ){ //first see which page we are on to check right row
			if ($value['restricted'] == 'ADMIN'){ // then check to see if it is admin only
				if(isset($_SESSION["myusername"])){ // see if they are logged in at all, if not - redirect to homepage
					//check to see what rights the user has
					$myusername = $_SESSION["myusername"];
					$checkAdminRightsdb = new SQLite3('./database/admin.sqlite'); 
					$checkAdminRightssql = "SELECT * FROM users WHERE username='$myusername'";
					$checkAdminRightsresult = $checkAdminRightsdb->query($checkAdminRightssql)->fetchArray(SQLITE3_ASSOC); 
					$checkAdminRightsdb->close();
					unset($checkAdminRightsdb);
					if ($checkAdminRightsresult['group_id'] == '1'){ // check to see logged in user is in admin group
						//if so, do nothing
					}else{
					$_SESSION["restricted"]="restricted";
					header("location:index.php");

					}
				}else{
					$_SESSION["restricted"]="restricted";
					header("location:index.php");
				}
			}else{
			//page is public, no action needed
			}
		}
	}	
}
$currentpage= substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
checkPageRights($currentpage);

function parseTree($tree, $whichlist, $root = 0) {
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
				'children' => parseTree($tree, $whichlist, $value["id"])
			);
		}
	}
	return empty($return) ? null : $return;
}





?>