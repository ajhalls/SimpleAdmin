<?PHP
include 'header.php';
include 'topbar.php';
include 'includes/functions.php';
include 'nav.php';

include './includes/menufunctions.php';
include './includes/icondropdownfunctions.php';

if ($_REQUEST){

	if ($_REQUEST['do'] == 'updatemenu'){
		
		$dbicons = new SQLite3('./database/admin.sqlite'); 
		$dbicons->busyTimeout(200);
			$update = "UPDATE menu_items SET name= :name, url= :url, code= :code, 'group' = :group, prefix =:prefix, sortorder = :sortorder, modifier= :modifier, custom= :custom, restricted= :restricted, status = :status WHERE id = :id";
			$stmt = $dbicons->prepare($update);
			$stmt->bindParam(':name', $_REQUEST["name"]);
			$stmt->bindParam(':code', $_REQUEST["code"]);
			$stmt->bindParam(':url', $_REQUEST["url"]);
			$stmt->bindParam(':group', $_REQUEST["group"]);
			$stmt->bindParam(':prefix', $_REQUEST["prefix"]);
			$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
			$stmt->bindParam(':modifier', $_REQUEST["modifier"]);
			$stmt->bindParam(':custom', $_REQUEST["custom"]);
			$stmt->bindParam(':restricted', $_REQUEST["restricted"]);
			$stmt->bindParam(':status', $_REQUEST["status"]);
			$stmt->bindParam(':id', $_REQUEST["id"]);
			$stmt->execute();
			if (!empty($_REQUEST['deletetask'])){
				$id = $_REQUEST['deletetask'];
				
					$delete = "DELETE FROM menu_items where id = :id";
					$stmt = $db->prepare($delete);
					$stmt->bindParam(':id', $id);
					$stmt->execute();
			}	
			$dbicons->close();
			unset($dbicons);

	};
	if ($_REQUEST['do'] == 'moveitem'){
		print_r($_REQUEST);
		$dbicons = new SQLite3('./database/admin.sqlite'); 
		$dbicons->busyTimeout(200);
			$update = "UPDATE menu_items SET parent_id = :parent_id, status = :status WHERE id = :id";
			$stmt = $dbicons->prepare($update);
			$stmt->bindParam(':parent_id', $_REQUEST["parent_id"]);
			$stmt->bindParam(':status', $_REQUEST["status"]);
			$stmt->bindParam(':id', $_REQUEST["id"]);
			$stmt->execute();
			unset($dbicons);
			$dbicons = new SQLite3('./database/admin.sqlite'); 
			$dbicons->busyTimeout(200);

			foreach($_POST['sortorder'] as $updateorder){
				print_r($updateorder);
				$updateordersql = "UPDATE menu_items SET sortorder = :sortorder, status = :status WHERE id = :id";
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
		$dbicons = new SQLite3('./database/admin.sqlite'); 
		$dbicons->busyTimeout(200);
			$insert = "INSERT INTO menu_items 
			(parent_id,name,'group',url,code,prefix,modifier,custom,sortorder,status) 
					  VALUES 
			(:parent_id,:name,:group,:url,:code,:prefix,:modifier,:custom,:sortorder,:status)";
			$stmt = $dbicons->prepare($insert);
			$stmt->bindParam(':parent_id', $_REQUEST["parent_id"]);
			$stmt->bindParam(':name', $_REQUEST["name"]);
			$stmt->bindParam(':code', $_REQUEST["code"]);
			$stmt->bindParam(':url', $_REQUEST["url"]);
			$stmt->bindParam(':group', $_REQUEST["group"]);
			$stmt->bindParam(':prefix', $_REQUEST["prefix"]);
			$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
			$stmt->bindParam(':modifier', $_REQUEST["modifier"]);
			$stmt->bindParam(':custom', $_REQUEST["custom"]);
			$stmt->bindParam(':restricted', $_REQUEST["restricted"]);
			$stmt->bindParam(':status', $_REQUEST["status"]);

			$stmt->execute();
			$dbicons->close();
			unset($dbicons);
	};
}else{};
?>
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowReordering.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.dataTables.rowGrouping.js"></script>     
<script src="http://alan.coursesaver.com/includes/javascripts/jquery.nestable.js"></script>    
<style type="text/css">
</style>

<div class="row mainContent">
<?PHP echo adminMenu($availablemenulist, $list="available");?>
<?PHP echo adminMenu($activemenulist, $list="active");?>
</div>

<div id="modal-sizes-2" class="modal fade" style="display: none;z-index:99999;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title">Add Item</h4>
			</div>
			<div class="modal-body">
			<form action="./adminmenu.php?do=additem" method="POST" id="modalPopup" class="panel  form-horizontal">
			<input class="form-control editmodal-id hidden" type="textbox" name="id" size="20" value="">
				<div class="panel-body">
					<div class="row form-group">
						<label class="col-sm-4 control-label">Name</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-name" type="textbox" name="name" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Icon Selection</label>
						<div class="col-sm-8">
						<?PHP echo printDropdown($iconDropdown); ?>
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Icon Prefix</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-prefix"  name="prefix" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Icon Code</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-code"  name="code" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Icon Modifier</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-modifier"  name="modifier" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">Group</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-group" name="group" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
						<label class="col-sm-4 control-label">URL</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-url" name="url" size="20" value="">
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
						<label class="col-sm-4 control-label">Admin Only</label>
						<div class="col-sm-8">
						<select class="form-control editmodal-restricted" name="restricted">
						<option value="ADMIN">ADMIN</option>
						<option value="PUBLIC">PUBLIC</option>
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
					</form>
				</div>
			</div>
		</div>
	</div>
</div>



<script type="text/javascript">
$(function(){

	$('.dd').nestable();

	$("#basictreelist").hide();

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
			url: "adminmenu.php",
			data: { id: currentItem, do: "moveitem", parent_id: itemParent, status: status, sortorder: neighborOrder }
		})
		.done(function( msg ) {
		});
	});

	$(".addItem").on('click', function(e) {
		$('#modalPopup').attr('action', './adminmenu.php?do=additem');
		var currentList = $(e).attr('data-list');
		var itemParent = $(item).parent().parent().attr('data-id');
		var status = $(destination).attr('data-list');
		$.ajax({
		method: "POST",
		url: "adminmenu.php",
		data: { id: currentItem, parent_id: itemParent, status: status, do: "updatemenu" }
		})
		.done(function( msg ) {
		});
	});
	

	$(".deleteItem").on('click', function(e) {
		var deleteItem = $(this).attr("data-id");
		$(this).parent().parent().hide();
		$.ajax({
		method: "POST",
		url: "adminmenu.php",
		data: { id: deleteItem, deletetask:"YES", do: "updatemenu" }
		})
		.done(function( msg ) {
		});		
	});
		$(".editItem").on('click', function(e) {
			$('#modalPopup').attr('action', './adminmenu.php?do=updatemenu');
	
			$(".editmodal-id").val( $(this).attr("data-id") );
			$(".editmodal-parent_id").val( $(this).attr("data-parent_id") );
			$(".editmodal-name").val( $(this).attr("data-name") );
			$(".editmodal-group").val( $(this).attr("data-group") );
			$(".editmodal-code").val( $(this).attr("data-code") );
			$(".editmodal-sortorder").val( $(this).attr("data-sortorder") );
			$(".editmodal-status").val( $(this).attr("data-status") );
			$(".editmodal-prefix").val( $(this).attr("data-prefix") );
			$(".editmodal-custom").val( $(this).attr("data-custom") );
			$(".editmodal-url").val( $(this).attr("data-url") );
			$(".editmodal-restricted").val( $(this).attr("data-restricted") );
			$(".editmodal-modifier").val( $(this).attr("data-modifier") );
			$(".form-control").attr("data-id", $(this).attr("data-id") );

			$(".iconSelection").html('Current Selection: <span class="'+ $(this).attr("data-prefix") +' ' + $(this).attr("data-code") + '"></span>');
			console.log($(this).attr("data-name"));
		
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
	var cssCode = $(this).attr('data-csscode');
	var cssModifier = $(this).attr('data-modifier');
	$(".editmodal-prefix").val( cssPrefix );
	$(".editmodal-code").val( cssCode );
	$(".editmodal-modifier").val( cssModifier );
	$(".iconSelection").html('You Selected: <i class="'+ cssPrefix +' '+ cssCode +' ' + cssModifier + '"></i>');
	$(".editmodal-parent_id" ).val(cssPrefix +' '+ cssCode +' ' + cssModifier);
	});

});
</script>

<?PHP
include 'footer.php';

?>