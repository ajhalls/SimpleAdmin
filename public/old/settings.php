<?PHP
include 'header.php';
include 'topbar.php';
include('nav.php');
if(isset($_SESSION["myusername"])){
}else{
header("location:index.php");
}
?><body>
<h3>General Settings</h3><br>
Settings created here can be used throughout the site with the following syntax:<br>
&lt;?=$setting['sitename']?&gt;<br><br>





<div class="col-sm-5">
	<div class="table-primary">
	<table class="table table-bordered">
	<thead>
	<tr><th><center>Actions</center></th><th class="left">Setting</th><th>Value</th><th class="right"><center>Active</center></th></tr>
	</thead>
	<tbody>
<?PHP
$i=0;
$sql = "SELECT * FROM settings";
$result = $db->query($sql);
$row = array();
while($row = $result->fetchArray(SQLITE3_ASSOC)){
echo ($i % 2)?'<tr class="odd">':'<tr class="even">';
print_r("<td>  <form action=\"./includes/sqlite-functions.php?do=settings\" method=\"POST\">
<input type=\"hidden\" name=\"deletetask\" value=\""  . $row['id'] .  "\">
<button class=\"btn btn-danger btn-xs\" type=\"submit\">
<i class=\"icon-trash\"></i>
Delete
</button>
<a class=\"btn modaledit\" data-target=\"#editmodal\" data-toggle=\"modal\" 
data-id='" . $row['id'] . "'
data-name='" . $row['name'] . "'
data-value='" . $row['value'] . "'
data-default='" . $row['default'] . "'
data-description='" . $row['description'] . "'
data-switches='" . $row['switches'] . "'
data-status='" . $row['status'] . "'
>Edit</a>
</form></td>

<td width=200>"  . $row['name'] .  "</td><td width=200>"  . $row['value'] .  "</td>");
		// setup status whether active or not
		print_r("<td><input type=\"hidden\" value=\"INACTIVE\" name=\"" . $row['name'] . "[status]\"> "); //set value so it never passes NULL
			if ($row['status'] == "ACTIVE"){
			print_r("ACTIVE</td></tr>");
			}
			else{
			print_r("INACTIVE</td></tr>");
			
			}
			
print_r('');
	$i++;
    }
?>
<tr><th class="bottom" colspan="8">
<a class="btn" data-target="#modal-sizes-2" data-toggle="modal">Add Setting</a>
</th></tr></tbody>
</table>


<div id="modal-sizes-2" class="modal fade" style="display: none;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title">Add Setting</h4>
			</div>
				<div class="modal-body">
				<form action="./includes/sqlite-functions.php?do=addsetting" method="POST" id="saveSettings" class="panel  form-horizontal">

					<div class="panel-body">
						<div class="row form-group">
						<label class="col-sm-4 control-label">Setting Name</label>
							<div class="col-sm-8">
							<input class="form-control" type="textbox" name="name" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">Value</label>
							<div class="col-sm-8">
							<input class="form-control" name="value" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">Default</label>
							<div class="col-sm-8">
							<input class="form-control" name="default" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">Description</label>
							<div class="col-sm-8">
							<input class="form-control" name="description" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">Switches</label>
							<div class="col-sm-8">
							<input class="form-control" name="switches" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">Active</label>
							<div class="col-sm-8">
							<input class="form-control" type="checkbox" name="status" size="20" value="ACTIVE">
							</div>
						</div>
						<div class="panel-footer text-right">
						<a class="btn" onclick="$(this).closest('form').submit()">Save Changes</a> 
						</div>

						</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="editmodal" class="modal fade" style="display: none;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title editmodal-title">Generic Title</h4>
			</div>
				<div class="modal-body editmodal-body">
				<form action="./includes/sqlite-functions.php?do=settings" method="POST" id="saveSettings" class="panel  form-horizontal">	
				<input type="hidden" name="id" class="editmodal-id" value="">
							<div class="panel-body editmodal-panel-body">
								<div class="row form-group">
								<label class="col-sm-4 control-label">Setting Name</label>
									<div class="col-sm-8 editmodal-name">
									
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">Value</label>
									<div class="col-sm-8">
									<input class="form-control editmodal-value"  name="value" size="20" value="">
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">Default</label>
									<div class="col-sm-8">
									<input class="form-control editmodal-default"  name="default" size="20" value="">
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">Description</label>
									<div class="col-sm-8">
									<input class="form-control editmodal-description"  name="description" size="20" value="">
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">Switches</label>
									<div class="col-sm-8">
									<input class="form-control editmodal-switches"  name="switches" size="20" value="">
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">Active Menu Item</label>
									<div class="col-sm-8">
									<select class="form-control editmodal-status" name="status">
									<option value="ACTIVE">ACTIVE</option>
									<option value="INACTIVE">INACTIVE</option>
									</select>
									</div>
								</div>

						<div class="panel-footer text-right">
							<BUTTON TYPE="submit">Save Changes</BUTTON> 
						</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
<!--
$(function() {
		$('form').on('submit', function(e){
			e.preventDefault();
			var $this = $(this);
			$.ajax({
				type: $this.prop('method'),
				url: $this.prop('action'),
				data: $this.serialize(),
				success: function(data){
				  //do something with the return of the php script
				  alert("Form Saved");
				}
			});
			return false; //prevent the form from causing the page to refresh
		});
		
		$( ".modaledit" ).click(function() {
			$(".editmodal-id").val( $(this).attr("data-id") );
			$(".editmodal-name").html( $(this).attr("data-name") );
			$(".editmodal-value").val( $(this).attr("data-value") );
			$(".editmodal-default").val( $(this).attr("data-default") );
			$(".editmodal-description").val( $(this).attr("data-description") );
			$(".editmodal-switches").val( $(this).attr("data-switches") );
			$(".editmodal-status").val( $(this).attr("data-status") );
		});
});
//-->
</script>



<?PHP
include('footer.php');
?>