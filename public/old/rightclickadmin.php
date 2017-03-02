<?PHP
include './includes/functions.php';
include 'header.php';
include 'topbar.php';
include('nav.php');
include './includes/dropdown.php';

?>
<?PHP
/*======================================================================*\
|| #################################################################### ||
|| # Icon Administration / Dropdown 
|| # ---------------------------------------------------------------- # ||
|| # Copyright ©2015 Written by OCDTeam.com. All Rights Reserved.       ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ------------------- This IS NOT FREE SOFTWARE ------------------ # ||
|| # http://www.ocdteam.com                                           # ||
|| #################################################################### ||
\*======================================================================*/
?>

<HTML><HEAD><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<link media="all" type="text/css" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowReordering.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowGrouping.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.nestable.js"></script>    
   
<link href="./includes/stylesheets/basic.css" rel="stylesheet" type="text/css">
</HEAD>
<BODY>

<?PHP
if ($_REQUEST){
	if ($_REQUEST['do'] == 'reset'){
	copy('./database/icons.backup', './database/icons.sqlite' );
	};
	if ($_REQUEST['do'] == 'updateitem'){
	print_r($_REQUEST);
	$dbicons = new SQLite3('./database/rightClick.sqlite'); 
	$dbicons->busyTimeout(200);
		$updateitem = "UPDATE rightClickMain SET 
		parent_id = :parent_id, name = :name, menu_type = :menu_type, code = :code, icon = :icon, custom = :custom, sortorder = :sortorder, status = :status WHERE id = :id";
		$stmt = $dbicons->prepare($updateitem);
		$stmt->bindParam(':id', $_REQUEST["id"]);
		$stmt->bindParam(':parent_id', $_REQUEST["parent_id"]);
		$stmt->bindParam(':name', $_REQUEST["name"]);
		$stmt->bindParam(':code', $_REQUEST["code"]);
		$stmt->bindParam(':menu_type', $_REQUEST["menu_type"]);
		$stmt->bindParam(':icon', $_REQUEST["icon"]);
		$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
		$stmt->bindParam(':custom', $_REQUEST["custom"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->execute();
		$dbicons->close();
		unset($dbicons);
	};
	if ($_POST['do'] == 'moveitem'){
		$dbicons = new SQLite3('./database/rightClick.sqlite'); 
		$dbicons->busyTimeout(200);
			$update = "UPDATE rightClickMain SET parent_id = :parent_id, status = :status WHERE id = :id";
			$stmt = $dbicons->prepare($update);
			$stmt->bindParam(':parent_id', $_POST["parent_id"]);
			$stmt->bindParam(':sortorder', $_POST["sortorder"]);
			$stmt->bindParam(':status', $_POST["status"]);
			$stmt->bindParam(':id', $_POST["id"]);
			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
			$dbicons = new SQLite3('./database/rightClick.sqlite'); 
			$dbicons->busyTimeout(200);

			foreach($_POST['sortorder'] as $updateorder){
				print_r($updateorder);
				$updateordersql = "UPDATE rightClickMain SET sortorder = :sortorder, status = :status WHERE id = :id";
				$stmtorder = $dbicons->prepare($updateordersql);
				$stmtorder->bindParam(':sortorder', $updateorder["sortorder"]);
				$stmtorder->bindParam(':id', $updateorder["id"]);
				$stmtorder->bindParam(':status', $_POST["status"]);
				$stmtorder->execute();
			}
			$dbicons->close();
			unset($dbicons);
	};
	if ($_REQUEST['do'] == 'additem'){
		print_r($_REQUEST);
		$dbicons = new SQLite3('./database/rightClick.sqlite'); 
		$dbicons->busyTimeout(200);
			$insert = "INSERT INTO rightClickMain 
			(parent_id,name,'group',code,icon,custom,sortorder,status) 
					  VALUES 
			(:parent_id,:name,:group,:code,:icon,:custom,:sortorder,:status)";
			$stmt = $dbicons->prepare($insert);
			$stmt->bindParam(':parent_id', $_REQUEST["parent_id"]);
			$stmt->bindParam(':name', $_REQUEST["name"]);
			$stmt->bindParam(':code', $_REQUEST["code"]);
			$stmt->bindParam(':menu_type', $_REQUEST["menu_type"]);
			$stmt->bindParam(':icon', $_REQUEST["icon"]);
			$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
			$stmt->bindParam(':custom', $_REQUEST["custom"]);
			$stmt->bindParam(':status', $_REQUEST["status"]);
			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
	};
	if ($_REQUEST['deletetask']){
		$dbicons = new SQLite3('./database/rightClick.sqlite'); 
		$dbicons->busyTimeout(200);
		$id = $_REQUEST['id'];
			$delete = "DELETE FROM rightClickMain where id = :id";
			$stmt = $dbicons->prepare($delete);
			$stmt->bindParam(':id', $id);
			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
	}	
}else{};


// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.
function startListTree($treelist,$menutype="standardlist") {
	echo '<div '. (($menutype == "active") ? "class='col-md-5 affixToggle' style='right:0'" :"class='col-md-6'") .' >
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
						<div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn '.$node['value']['icon'].'">'. (!empty($node["value"]["image"]) ? '<img height="15" src="'.$node['value']['image'].'">' : '').  '</span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-group="'. $node["value"]["menu_type"] .'" data-code="'. $node["value"]["code"] .'" data-prefix="'. $node["value"]["icon"] .'"  data-act_on="'. $node["value"]["act_on"] .'" data-action_type="'. $node["value"]["action_type"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" data-restricted="'. (!empty($node["value"]["restricted"]) ? $node["value"]["restricted"] : "").  '" data-url="'. (!empty($node["value"]["url"]) ? $node["value"]["url"] : "").  '"></span></div>';

				
			}
			if ( !empty($node['children']) ) { // has children
				echo '<li class="dd-item dd3-item" data-id="'. $node["value"]["id"] .'">
				<div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
				<div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn '.$node['value']['icon'].'">'. (!empty($node["value"]["image"]) ? '<img height="15" src="'.$node['value']['image'].'">' : '').  '</span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash  fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-menu_type="'. $node["value"]["menu_type"] .'" data-code="'. $node["value"]["code"] .'" data-icon="'. $node["value"]["icon"] .'" data-image="'. $node["value"]["image"] .'" data-act_on="'. $node["value"]["act_on"] .'" data-action_type="'. $node["value"]["action_type"] .'"  data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" data-restricted="'. (!empty($node["value"]["restricted"]) ? $node["value"]["restricted"] : "").  '"  data-url="'. (!empty($node["value"]["url"]) ? $node["value"]["url"] : "").  '"></span></div><ol class="dd-list" data-id="'. $node["value"]["id"] .'">';
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

<?PHP //Functions Block
$dbicons = new SQLite3('./database/rightClick.sqlite'); 
$sql = "SELECT * FROM rightClickMain WHERE status = 'INACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$queryavailableicons = $dbicons->query($sql);
while($availabledata = $queryavailableicons->fetchArray(SQLITE3_ASSOC)) {$availableicons[] = $availabledata;};
$availablelist =NULL;
if (!empty($availableicons)){$availablelist = parseTree($availableicons, $whichlist="available");}

$activeiconssql = "SELECT * FROM rightClickMain WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$queryactiveicons = $dbicons->query($activeiconssql);
while($activedata = $queryactiveicons->fetchArray(SQLITE3_ASSOC)) {$activeicons[] = $activedata;};
$activelist = NULL;
if (!empty($activeicons)){$activelist = parseTree($activeicons, $whichlist="active");}



?>



	
<div class="row text-center">	
<button class=" toggleView btn btn-xs topPanel resetDatabase" style="color:#fff;" title="Reset State" rel="tooltip" type="button"><span class="fa fa-refresh"></span> Reset Database</button>
<br><br>
</div>
<div class="row mainContent">
<?PHP echo adminMenu($availablelist, $list="available");?>
<?PHP echo adminMenu($activelist, $list="active");?>
</div>


<div id="modal-sizes-2" class="modal fade" style="display: none;z-index:99999;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title">Add Item</h4>
			</div>
			<div class="modal-body">
			<form action="./rightclickadmin.php?do=additem" method="POST" id="modalPopup" class="panel  form-horizontal">
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
						<label class="col-sm-4 control-label">Menu Type</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-menu_type" type="textbox" name="menu_type" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Icon</label>
						<div class="col-sm-8">
						<?PHP printDropdown($iconDropdown) ?>
						<input class="form-control editmodal-icon hidden" name="icon" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Image (instead of Icon)</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-image" name="image" size="20" placeholder="http://" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Code</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-code" name="code" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Act On Specific Elements</label>
						<div class="col-sm-8">
						
						<input class="form-control editmodal-act_on"  name="act_on" size="20" placeholder="CSS Value" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Action Type</label>
						<div class="col-sm-8">
						
						<input class="form-control editmodal-action_type" placeholder="javascriptFunction()"  name="action_type" size="20" value="">
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
						<label class="col-sm-4 control-label">Restricted to Admin</label>
						<div class="col-sm-8">
						<select class="form-control editmodal-restricted" name="restricted">
						<option value="PUBLIC">PUBLIC</option>
						<option value="ADMIN">ADMIN</option>
						</select>
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



<script type="text/javascript">
$(function(){

	$('.dd').nestable();

	$(".dd").on('dragEnd', function(event, item, source, destination, position) {
		var currentItem = $(item).attr('data-id');
		var itemParent = $(item).parent().parent().attr('data-id');
		var status = $(destination).attr('data-list');
		var neighbors = $(item).parent().children("li");
		var neighborOrder = [];
		neighbors.each(function(index) {
			neighborOrder.push({
			"parent": itemParent,
			"id": $(this).attr("data-id"),
			"sortorder": index
			});
		});
		$.ajax({
			method: "POST",
			url: "rightclickadmin.php",
			data: { id: currentItem, do: "moveitem", parent_id: itemParent, status: status, sortorder: neighborOrder }
		})
		.done(function( msg ) {
		});
	});

	$(".addItem").on('click', function(e) {
		$('#modalPopup').attr('action', './rightclickadmin.php?do=additem');
		var currentList = $(e).attr('data-list');
		var itemParent = $(item).parent().parent().attr('data-id');
		var status = $(destination).attr('data-list');
		$.ajax({
		method: "POST",
		url: "rightclickadmin.php",
		data: { do: "additem", id: currentItem, parent_id: itemParent, status: status  }
		})
		.done(function( msg ) {
		});
	});
	

	$(".deleteItem").on('click', function(e) {
		var deleteItem = $(this).attr("data-id");
		$(this).parent().parent().hide();
		$.ajax({
		method: "POST",
		url: "rightclickadmin.php",
		data: { id: deleteItem, deletetask:"YES", do: "deleteitem" }
		})
		.done(function( msg ) {
		});		
	});
	$(".resetDatabase").on('click', function(e) {
		$.ajax({
			method: "POST",
			url: "rightclickadmin.php",
			data: { do: "reset" }
		})
		.done(function( msg ) {
		});		
	});
	$(".editItem").on('click', function(e) {
			$('#modalPopup').attr('action', './rightclickadmin.php?do=updateitem');
			$(".editmodal-id").val( $(this).attr("data-id") );
			$(".editmodal-parent_id").val( $(this).attr("data-parent_id") );
			$(".editmodal-name").val( $(this).attr("data-name") );
			$(".editmodal-menu_type").val( $(this).attr("menu_type") );
			$(".editmodal-code").val( $(this).attr("data-code") );
			$(".editmodal-sortorder").val( $(this).attr("data-sortorder") );
			$(".editmodal-status").val( $(this).attr("data-status") );
			$(".editmodal-icon").val( $(this).attr("data-icon") );
			$(".editmodal-image").val( $(this).attr("data-image") );
			$(".editmodal-custom").val( $(this).attr("data-custom") );
			$(".form-control").attr("data-id", $(this).attr("data-id") );
			$(".iconSelection").html('Current Selection: <span class="'+ $(this).attr("data-prefix") +' ' + $(this).attr("data-code") + '"></span>');
		
	});
	$('.listFilterInput').click(function(e){
		var toggleCategory = $(this).val();
		var toggleParentCategory = $(this).attr('data-parentId');
		console.log(e);
		$('[data-id="0"]').show(); 
		if ( $(this).prop( "checked" ) ){
		$('[data-id="'+ toggleCategory +'"]').show();
		}
		if ( !$(this).prop( "checked" ) ){
		$('[data-id="'+ toggleCategory +'"]').hide();
		}
		
	});
	$('.toggleAllFilter').click(function(e){
		var checkBoxes = $(".listFilterInput");
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
		$('.dd-list').toggle(); 
	});



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
	$(".toggleView").on("click",function(){
		$("#basictreelist").toggle();
		$("#sortabletreelist").toggle();
	});

	$('#modalPopup').on('submit', function(e){
		e.preventDefault();
		var $this = $(this);
		$.ajax({
			type: $this.prop('method'),
			url: $this.prop('action'),
			data: $this.serialize(),
			success: function(data){
			  //do something with the return of the php script
			  $( "body" ).append( '<div class="alert alert-info saveConfirmation"> <button class="close" data-dismiss="alert" type="button">x</button> <strong>Heads up!</strong> Data has been saved. </div><div class="saveConfirmationbackground"></div>' );
			 
			  $( ".saveConfirmation" ).delay( 1700 ).hide(0);
			  $( ".saveConfirmationbackground" ).delay( 1700 ).hide(0);
			}
		});
		return false; //prevent the form from causing the page to refresh
	});
	$(".iconItemSelection").on("click",function(){
	var cssPrefix = $(this).attr('data-prefix');
	var cssCode = $(this).attr('data-code');
	var cssModifier = $(this).attr('data-modifier');
	$(".editmodal-icon").val( cssPrefix +' '+ cssCode +' ' + cssModifier );
	$(".iconSelection").html('You Selected: <i class="'+ cssPrefix +' '+ cssCode +' ' + cssModifier + '"></i>');
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

</BODY>
</HTML>

<?PHP
include 'footer.php';

?>