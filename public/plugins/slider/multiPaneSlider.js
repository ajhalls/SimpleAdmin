var incomingData = [{
  "duration": "1",
  "vars": {
    "opacity": "0"
  }
}, {
  "duration": "1",
  "vars": {
    "opacity": "1"
  }
}, {
  "duration": "1",
  "vars": {
    "opacity": "0"
  }
}, {
  "duration": "1",
  "vars": {
    "opacity": "1"
  }
}, {
  "duration": "1.25",
  "vars": {
    "x": "+=150"
  }
}]

var draggableHandles = [];
var scale = 100;
var requestId = null;
TweenLite.set("main", {
  autoAlpha: 1
});
var startPanelWidth = [];
var resizingPanels, currentHandle, thisTime, nextTime;
var resizables = createResizable(1, $(".resizable-container"));
var that = this;
function createResizable(index, element) {
  var resizeBarValue = 0;
  var resizeBarLocation = 0;
  $.each(incomingData, function(index, value) {
    resizeBarValue = resizeBarValue + Number(value.duration);

    resizeBarLocation = resizeBarValue * scale;
    $(".layout-handles").append('<div class="resize-bar resize-bar-column" \
      id="bar-' + index + '" data-panel="panel-' + index + '" style="left:' + resizeBarLocation + 'px;" data></div>');
    $(".layout-panels").append('<div id="panel-' + index + '" class="panel resizable" \
      style="float:left;width:' + value.duration * scale + 'px;" title=\'' + JSON.stringify(value.vars) +'\'></div>');
    targetBar = $("#bar-" + index);
    barBefore = parseInt($("#bar-" + (index - 1)).css("left"), 10);
    barAfter = parseInt($("#bar-" + (index + 1)).css("left"), 10);

    draggableHandles[index] = new Draggable(targetBar, {
      cursor: cursor,
      type: "left",
      onDragStart: getInfo,
      onDrag: resizePanels,
      onDragEnd: doneResizing
    });
  });
   
 
  var cursor = "col-resize";
  
  function checkHit() {
    var bounceBack = 6;
    PanelWidths = [resizingPanels[0].css("width"), resizingPanels[1].css("width")];

    if (parseInt(PanelWidths[0], 10) <=1) {
      draggableHandles[currentHandle].endDrag();
      TweenLite.set($("#panel-"+(currentHandle+1)), {width:"-=1"});
      TweenLite.set($("#panel-"+currentHandle), {width:"+=1"});
      TweenLite.set($("#bar-"+(currentHandle)), {x:"+=1"});
    }
      if (parseInt(PanelWidths[1], 10) <=1) {
        draggableHandles[currentHandle].endDrag();
        TweenLite.set($("#panel-"+(currentHandle+1)), {width:"+=1"});
        TweenLite.set($("#panel-"+currentHandle), {width:"-=1"});
        TweenLite.set($("#bar-"+currentHandle), {x:"-=1"});
      }
  }
  
  function getInfo(e) {
    that = this;
    currentHandle = Number(this.target.id.split("-")[1]);
    resizingPanels = [$("#panel-" + currentHandle), $("#panel-" + (currentHandle + 1))];
    startPanelWidth = [resizingPanels[0].css("width"), resizingPanels[1].css("width")];
  }


  function resizePanels() {
    mainTL.time(0).pause();
    resizeBars = [$("#bar-" +currentHandle), $("#bar-" + (currentHandle-1)), $("#bar-" + (currentHandle+1))];
      displacement = this.x - this.startX;
      resizingPanels[0].css("width", (parseInt(startPanelWidth[0], 10) + displacement));
      resizingPanels[1].css("width", (parseInt(startPanelWidth[1], 10) - displacement));    
       checkHit();
  }

  function doneResizing(e) {
    thisTime = parseInt(resizingPanels[0].css("width"), 10);
    nextTime = parseInt(resizingPanels[1].css("width"), 10);
    incomingData[currentHandle]["duration"] = thisTime / scale;
    incomingData[currentHandle]["duration"] = parseInt(resizingPanels[0].css("width"), 10) / scale;
    if (!isNaN(nextTime)) {
      incomingData[currentHandle +1]["duration"] = parseInt(resizingPanels[1].css("width"), 10) / scale;
    }

    $("#JSON").html(JSONStringify(incomingData));
    mainTL.time(0);
    rebuildTimeline();
    mainTL.play();
  }
}

function updateSlider() {
  $("#time").html(mainTL.time().toFixed(2));
}

function rebuildTimeline() {
  var L, G, S;
  mainTL = new TimelineLite({
    onUpdate: updateSlider
  });
  mainTL.clear();

  for (S = 0; S < incomingData.length; S++) {
    duration = incomingData[S]["duration"];
    delay = incomingData[S]["delay"];
    sequence = incomingData[S]["vars"];
    if (incomingData[S]["customEase"]) {
      ease = incomingData[S]["customEase"]
      sequence.ease = CustomEase.create("custom", ease);
    }
    mainTL.to("#target", duration, sequence, delay);
  }
};

function JSONStringify(object) {
  var cache = [];
  var str = JSON.stringify(object,
    // custom replacer fxn - gets around "TypeError: Converting circular structure to JSON" 
    function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    }, 4);
  cache = null; // enable garbage collection
  return str;
};
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
rebuildTimeline();