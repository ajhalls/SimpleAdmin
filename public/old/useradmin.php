<?PHP 
include 'header.php';
include 'topbar.php';
include('nav.php');
if(isset($_SESSION["myusername"])){
}else{
header("location:index.php");
}
?>


		<ul class="breadcrumb breadcrumb-page">
			<div class="breadcrumb-label text-light-gray">You are here: </div>
			<li><a href="#">Home</a></li>
			<li class="active"><a href="#">User Administration</a></li>
		</ul>
		
This list of users should be limited pretty much to just administrators.<br><br>
			<div class="col-sm-3">
				<div class="table-primary">

				<table class="table table-bordered">
				<thead>
			<tr><th>Actions</th><th>Username</th></tr>
			</thead>
			<tbody>



<?PHP
$i=0;
$sql = "SELECT * from adminusers";
$result = $db->query($sql);
$setting = array();
while($row = $result->fetchArray(SQLITE3_ASSOC)){
			
	echo ($i % 2)?'<tr class="odd">':'<tr class="even">';
		print_r("<td>  <form action=\"./includes/sqlite-functions.php?do=adminusers\" method=\"POST\">
<input type=\"hidden\" name=\"deletetask\" value=\""  . $row['id'] .  "\">
<button class=\"btn btn-danger btn-xs\" type=\"submit\">
<i class=\"icon-trash\"></i>
Delete
</button>

<a class=\"btn modaledit\" data-target=\"#edituser\" data-toggle=\"modal\"
data-id='" . $row['id'] . "'					
data-username='" . $row['username'] . "'
data-admingroup_id='" . $row['admingroup_id'] . "'	>Edit</a>
</form></td>

<td>"  . $row['username'] .  "</td>");
	$i++; //increment by one
	}

?>
</tr></tbody></table>
<div class="table-footer">
<a class="btn" data-target="#modal-sizes-2" data-toggle="modal">Add User</a>
</div>
</div>
</div>
</div>

<?PHP
try {
	$db = new PDO('sqlite:./database/admin.sqlite');
} catch (PDOException $e) {
	echo 'Connection failed: ' . $e->getMessage();
}
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$select = "SELECT * from admingroups";
	$result2 = $db->query($select);//->fetchArray(SQLITE3_ASSOC);
	$optionlist = "";
while ($option2 = $result2->fetch(SQLITE3_ASSOC)) {
		$optionlist .="<option name=\"optionparent\" value=\"" . $option2['id'] . "\">" . $option2['groupname'] ."</option>";
};
?>
<div id="modal-sizes-2" class="modal fade" style="display: none;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title">Add New User</h4>
			</div>
				<div class="modal-body">
				<form action="./includes/sqlite-functions.php?do=adduser" method="POST" id="saveSettings" class="panel  form-horizontal">
					<div class="panel-body">
						<div class="row form-group">
						<label class="col-sm-4 control-label">Username</label>
							<div class="col-sm-8">
							<input class="form-control" type="textbox" name="username" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">Password</label>
							<div class="col-sm-8">
							<input class="form-control" type="password" name="password" size="20" value="">
							</div>
						</div>
						<div class="row form-group">
						<label class="col-sm-4 control-label">UserGroup</label>
							<div class="col-sm-8">
							<select class="form-control" name="admingroup_id">
						<?PHP echo $optionlist; ?>
								</select>
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

<div id="edituser" class="modal fade" style="display: none;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title editmodal-username"></h4>
			</div>
				<div class="modal-body editmodal-body">
<form action="./includes/sqlite-functions.php?do=adminusers" method="POST" id="saveSettings" class="panel  form-horizontal">
			<input type="hidden" class="editmodal-id" name="id"  value="">


						
							<div class="panel-body">
								<div class="row form-group">
								<label class="col-sm-4 control-label">Username</label>
									<div class="col-sm-8 editmodal-username">
									
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">Password</label>
									<div class="col-sm-8">
									<input class="form-control" type="password" name="password" size="20" value="">
									</div>
								</div>
								<div class="row form-group">
								<label class="col-sm-4 control-label">UserGroup</label>
									<div class="col-sm-8">
									<select class="form-control editmodal-admingroup_id" name="admingroup_id">

									<?PHP
									$db = new PDO('sqlite:./database/admin.sqlite');
									$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
									$select = "SELECT * from admingroups";
									$result2 = $db->query($select);//->fetchArray(SQLITE3_ASSOC);
									$optionlist = "";
									while ($option2 = $result2->fetch(SQLITE3_ASSOC)) {
									print_r("<option name=\"optionparent\" value=\"" . $option2['id'] . "\">" . $option2['groupname'] ."</option>");
									};
									?>
									</select>
								</div>
							</div>
							<div class="panel-footer text-right">
							<BUTTON TYPE="submit">Save Changes</BUTTON>  
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>







<div id="formresults"></div>



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
			$(".editmodal-username").html( $(this).attr("data-username") );
			$(".editmodal-admingroup_id").val( $(this).attr("data-admingroup_id") );
		});
});
//-->
</script>

<?PHP
include('footer.php');
?>