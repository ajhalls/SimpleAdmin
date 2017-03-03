<div id="editCategory" class="modal">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title editmodal-username"></h4>
			</div>
			<div class="modal-body editmodal-body">
			<form action="/updateUser" method="POST" id="saveSettings" class="panel  form-horizontal">
			<input type="hidden" class="editmodal-id" name="id"  value="">
			<input type="hidden" name="do" value="updateUser">
				<div class="panel-body">
					<div class="row form-group">
					<label class="col-sm-4 control-label">Real Name</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-name" type="textbox" name="name" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
					<label class="col-sm-4 control-label">Username</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-username" type="textbox" name="username" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
					<label class="col-sm-4 control-label">Email</label>
						<div class="col-sm-8">
						<input class="form-control editmodal-email" type="textbox" name="email" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
					<label class="col-sm-4 control-label">Password</label>
						<div class="col-sm-8">
						<input class="form-control" type="password" name="password" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
					<label class="col-sm-4 control-label">Status</label>
						<div class="col-sm-8">
						<select class="form-control" name="status" size="2">
							<option value="ACTIVE" selected>Active</option>
							<option value="INACTIVE">Inactive</option>
						</select>
						</div>
					</div>
				</div>
				<div class="panel-footer text-right">
				<BUTTON TYPE="submit">Save Changes</BUTTON>  
				</div>
			</div>
			</form>
		</div>
	</div>
</div>
</div>
<div id="formresults"></div>
