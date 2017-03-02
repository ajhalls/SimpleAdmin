<div id="modal-sizes-2" class="modal fade" style="display: none;z-index:99999;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
			<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
			<h4 class="modal-title">Add Item</h4>
			</div>
			<div class="modal-body">
			<form action="/updateMenu?do=additem" method="POST" id="modalPopup" class="panel  form-horizontal">
			<input class="form-control editmodal-id hidden" type="textbox" name="id" size="20" value="">
			<input class="form-control editmodal-do hidden" type="textbox" name="do" size="20" value="addItem">
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
						<?PHP echo printDropdown(parseTree($dataicons, $whichlist="active")); ?>
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