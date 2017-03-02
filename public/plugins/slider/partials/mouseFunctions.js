var shiftIsPressed = false;
var ctrlIsPressed = false;
var altIsPressed = false;

$(document).keydown(function(event){
    if(event.which=="16") {shiftIsPressed = true;}
    if(event.which=="17" || event.which=="224") {ctrlIsPressed = true;}
    if(event.which=="18") {altIsPressed = true;}
    console.log(event.which);
});

$(document).keyup(function(){
    shiftIsPressed = false;
    ctrlIsPressed = false;
    altIsPressed = false;
});

// $(".MultiTimelineElement").mousedown(function(e) { complexClick(e, "ctrl", "datGuiEditor(e.originalEvent)")});  
function complexClick(e, keyPressed, returnFunction)
{
 if (keyPressed == "ctrl" && ctrlIsPressed ==true){
 	eval(returnFunction);
 }
 if (keyPressed == "shift" && shiftIsPressed ==true){
 	eval(returnFunction);
 }
 if (keyPressed == "alt" && altIsPressed ==true){
 	eval(returnFunction);
 }
}


// clickOutsideOf($(".datGUI"));
function clickOutsideOf(container){
	$(document).mouseup(function(e) {
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {container.hide();}
	});
}