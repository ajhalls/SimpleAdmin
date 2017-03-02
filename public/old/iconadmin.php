<?PHP
error_reporting(E_ALL);
include 'header.php';
include './includes/functions.php';
include './includes/menufunctions.php';
include './includes/iconfunctions.php';

include 'topbar.php';
include('nav.php');


?>
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowReordering.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowGrouping.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.nestable.js"></script>    
<style type="text/css">
.rightClick-sub{ width:250px; height:50px; position:absolute; top:-15; left:205; z-index:10000; padding-top:4px; }
.rightClick2nd{ border:0px 0px 0px 0px; margin:0px 0px 0px 0px;}
.horizontal-menu-group{ border:0px 0px 0px 0px; margin:0px 0px 0px 0px; position:relative; display:inline-block; }
.btn {display: inline-block;     padding: 3px 8px; }
.dropdown-menu>li {	position:relative; 	-webkit-user-select: none; /* Chrome/Safari */        	-moz-user-select: none; /* Firefox */ 	-ms-user-select: none; /* IE10+ */ 	/* Rules below not implemented in browsers yet */ 	-o-user-select: none; 	user-select: none; 	cursor:pointer; }
.dropdown-menu .sub-menu {     left: 100%;     position: absolute;     top: 0;     display:none;     margin-top: -1px; 	border-top-left-radius:0; 	border-bottom-left-radius:0; 	border-left-color:#fff; 	box-shadow:none; }
.right-caret:after {	content:"";     border-bottom: 4px solid transparent;     border-top: 4px solid transparent;     border-left: 4px solid orange;     display: inline-block;     height: 0;     opacity: 0.8;     vertical-align: middle;     width: 0; 	margin-left:5px; }
.left-caret:after {	content:"";     border-bottom: 4px solid transparent;     border-top: 4px solid transparent;     border-right: 4px solid orange;     display: inline-block;     height: 0;     opacity: 0.8;     vertical-align: middle;     width: 0; 	margin-left:5px; }


#nestable {position: relative;margin-left:15px; }
.deleteItem{color:#5bc0de; opacity:0.7;vertical-align:5px;line-height:2;}
.editItem{color:#5bc0de; opacity:0.7;vertical-align:5px;line-height:2;margin-right:10px;}
.saveConfirmation{width:30%;position:absolute;top:50%;left:35%;z-index:99999}
.saveConfirmationbackground{width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:9999;background-color:#000;opacity:0.6;}
</style>

<?PHP
if ($_REQUEST){
	if ($_REQUEST['do'] == 'reset'){
	copy('./database/icons.backup', './database/icons.sqlite' );
	};
	if ($_REQUEST['do'] == 'updateitem'){
	print_r($_REQUEST);
	$dbicons = new SQLite3('./database/icons.sqlite'); 
	$dbicons->busyTimeout(200);
		$updateitem = "UPDATE icons SET 
		parent_id = :parent_id, name = :name, 'group' = :group, code = :code, prefix = :prefix, modifier = :modifier, custom = :custom, sortorder = :sortorder, status = :status WHERE id = :id";
		$stmt = $dbicons->prepare($updateitem);
		$stmt->bindParam(':id', $_REQUEST["id"]);
		$stmt->bindParam(':parent_id', $_REQUEST["parent_id"]);
		$stmt->bindParam(':name', $_REQUEST["name"]);
		$stmt->bindParam(':code', $_REQUEST["code"]);
		$stmt->bindParam(':group', $_REQUEST["group"]);
		$stmt->bindParam(':prefix', $_REQUEST["prefix"]);
		$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
		$stmt->bindParam(':modifier', $_REQUEST["modifier"]);
		$stmt->bindParam(':custom', $_REQUEST["custom"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->execute();
		$dbicons->close();
		unset($dbicons);
	};
	if ($_POST['do'] == 'moveitem'){
		$dbicons = new SQLite3('./database/icons.sqlite'); 
		$dbicons->busyTimeout(200);
			$update = "UPDATE icons SET parent_id = :parent_id, status = :status WHERE id = :id";
			$stmt = $dbicons->prepare($update);
			$stmt->bindParam(':parent_id', $_POST["parent_id"]);
			$stmt->bindParam(':sortorder', $_POST["sortorder"]);
			$stmt->bindParam(':status', $_POST["status"]);
			$stmt->bindParam(':id', $_POST["id"]);
			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
			$dbicons = new SQLite3('./database/icons.sqlite'); 
			$dbicons->busyTimeout(200);

			foreach($_POST['sortorder'] as $updateorder){
				print_r($updateorder);
				$updateordersql = "UPDATE icons SET sortorder = :sortorder, status = :status WHERE id = :id";
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
		$dbicons = new SQLite3('./database/icons.sqlite'); 
		$dbicons->busyTimeout(200);
			$insert = "INSERT INTO icons 
			(parent_id,name,'group',code,prefix,modifier,custom,sortorder,status) 
					  VALUES 
			(:parent_id,:name,:group,:code,:prefix,:modifier,:custom,:sortorder,:status)";
			$stmt = $dbicons->prepare($insert);
			$stmt->bindParam(':parent_id', $_REQUEST["parent_id"]);
			$stmt->bindParam(':name', $_REQUEST["name"]);
			$stmt->bindParam(':code', $_REQUEST["code"]);
			$stmt->bindParam(':group', $_REQUEST["group"]);
			$stmt->bindParam(':prefix', $_REQUEST["prefix"]);
			$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
			$stmt->bindParam(':modifier', $_REQUEST["modifier"]);
			$stmt->bindParam(':custom', $_REQUEST["custom"]);
			$stmt->bindParam(':status', $_REQUEST["status"]);
			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
	};
	if ($_REQUEST['deletetask']){
		$dbicons = new SQLite3('./database/icons.sqlite'); 
		$dbicons->busyTimeout(200);
		$id = $_REQUEST['id'];
			$delete = "DELETE FROM icons where id = :id";
			$stmt = $dbicons->prepare($delete);
			$stmt->bindParam(':id', $id);
			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
	}	
}else{};




?>

<?PHP //Functions Block
$dbicons = new SQLite3('./database/icons.sqlite'); 
$sql = "SELECT * FROM icons WHERE status = 'INACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
$queryavailableicons = $dbicons->query($sql);
while($availabledata = $queryavailableicons->fetchArray(SQLITE3_ASSOC)) {$availableicons[] = $availabledata;};
$availablelist =NULL;
if (!empty($availableicons)){$availablelist = parseTree($availableicons, $whichlist="available");}

$activeiconssql = "SELECT * FROM icons WHERE status = 'ACTIVE' ORDER BY parent_id ASC, sortorder ASC, name ASC";
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
			url: "iconadmin.php",
			data: { id: currentItem, do: "moveitem", parent_id: itemParent, status: status, sortorder: neighborOrder }
		})
		.done(function( msg ) {
		});
	});

	$(".addItem").on('click', function(e) {
		$('#modalPopup').attr('action', './iconadmin.php?do=additem');
		var currentList = $(e).attr('data-list');
		var itemParent = $(item).parent().parent().attr('data-id');
		var status = $(destination).attr('data-list');
		$.ajax({
		method: "POST",
		url: "iconadmin.php",
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
		url: "iconadmin.php",
		data: { id: deleteItem, deletetask:"YES", do: "deleteitem" }
		})
		.done(function( msg ) {
		});		
	});
	$(".resetDatabase").on('click', function(e) {
		$.ajax({
			method: "POST",
			url: "iconadmin.php",
			data: { do: "reset" }
		})
		.done(function( msg ) {
		});		
	});
	$(".editItem").on('click', function(e) {
			$('#modalPopup').attr('action', './iconadmin.php?do=updateitem');
			$(".editmodal-id").val( $(this).attr("data-id") );
			$(".editmodal-parent_id").val( $(this).attr("data-parent_id") );
			$(".editmodal-name").val( $(this).attr("data-name") );
			$(".editmodal-group").val( $(this).attr("data-group") );
			$(".editmodal-code").val( $(this).attr("data-code") );
			$(".editmodal-sortorder").val( $(this).attr("data-sortorder") );
			$(".editmodal-status").val( $(this).attr("data-status") );
			$(".editmodal-prefix").val( $(this).attr("data-prefix") );
			$(".editmodal-custom").val( $(this).attr("data-custom") );
			$(".editmodal-modifier").val( $(this).attr("data-modifier") );
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

	$('form').on('submit', function(e){
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
	$(".editmodal-parent").val( $(this).attr("data-id") );
	$(".iconSelection").html('You Selected: <i class="'+ cssPrefix +' '+ cssCode +' ' + cssModifier + '"></i>');
	$(".editmodal-parent_id" ).val(cssPrefix +' '+ cssCode +' ' + cssModifier);
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


<?PHP
include 'footer.php';

?>