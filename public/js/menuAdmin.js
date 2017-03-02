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
			url: "/updateMenu",
			data: { id: currentItem, do: "moveItem", parent_id: itemParent, status: status, sortorder: neighborOrder }
		})
		.done(function( msg ) {
		});
	});

	$(".addItem").on('click', function(e) {
		$('#modalPopup').attr('action', '/updateMenu?do=additem');
		var currentList = $(e).attr('data-list');
		var itemParent = $(item).parent().parent().attr('data-id');
		var status = $(destination).attr('data-list');
		$.ajax({
		method: "POST",
		url: "/updateMenu",
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
		url: "/updateMenu",
		data: { id: deleteItem, deletetask:"YES", do: "updatemenu" }
		})
		.done(function( msg ) {
		});		
	});
	$(".editItem").on('click', function(e) {
		$('#modalPopup').attr('action', '/updateMenu?do=updatemenuitem');

		$(".editmodal-id").val( $(this).attr("data-id") );
		$(".editmodal-do").val("updatemenuitem");
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