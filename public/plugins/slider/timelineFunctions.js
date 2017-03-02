var gui;

function addLayersToTimeline() {

    $(".timelineTimingPanel[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "']").append("\
    <div   data-slide='" + currentSlide + "' data-layer='" + currentLayer + "'  data-animationId='" + layerAnimationId + "' class='timelineElementRow'>\
        <div id ='draggbleElement-" + timelineItems + "' data-animationId='" + layerAnimationId + "'  data-slide='" + currentSlide + "' \
        data-layer='" + currentLayer + "' class='timelineElement resizableX draggableX' style='width: " + thisAnimationDuration * 1000 * ZoomValue + "px;'>\
            &nbsp;&nbsp;&nbsp;&nbsp;" + thisAnimationName + "\
            <div class='ui-resizable-handle ui-resizable-right keyframeHandle keyframeTo toolTipItem' data-animationId='" + layerAnimationId + "'  data-slide='" + currentSlide + "' \
        data-layer='" + currentLayer + "' data-tooltip-content='#keyframes_content'></div>\
            <div class='ui-resizable-handle ui-resizable-left keyframeHandle keyframeFrom toolTipItem' data-animationId='" + layerAnimationId + "'  data-slide='" + currentSlide + "' \
        data-layer='" + currentLayer + "' data-tooltip-content='#keyframes_content'></div>\
        </div>\
    </div>");
    $(".timelineLabels[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "']").append("\
    <div data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' class='col-md-12 m-0 timelineLayerItem'  data-animationId='" + layerAnimationId + "'>\
      <span class='animationLabelName'  data-animationId='" + layerAnimationId + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' >" + thisAnimationName + "</span>\
      <i data-animationId='" + layerAnimationId + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' class=' pull-right fa fa-trash deleteAnimation'>&nbsp;</i>\
      <i data-animationId='" + layerAnimationId + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' class=' pull-right fa fa-pencil-square-o editAnimation'>&nbsp;</i>\
    </div>");

    $("#draggbleElement-" + timelineItems).css({
        "position": "relative",
        "left": insertTime
    });
    $(".timelineElementRow").css("width", spacing + 100);
}

function calculatePosition(element) {
    var root = document.documentElement;
    var body = document.body;
    var rect = element.getBoundingClientRect();

    var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

    var clientTop = root.clientTop || body.clientTop || 0;
    var clientLeft = root.clientLeft || body.clientLeft || 0;

    return {
        top: Math.round(rect.top + scrollTop - clientTop),
        left: Math.round(rect.left + scrollLeft - clientLeft),
        height: rect.height,
        width: rect.width,
    };
}

function deleteAnimation() {
    var thisSlide = $(this).attr('data-slide');
    var thisLayer = $(this).attr('data-layer');
    var animationId = $(this).attr('data-animationId');
    Slides[thisSlide].layers[thisLayer].animationgroup[animationId] = "";
    $(".timelineElementRow[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + animationId + "']").remove();
    $(".timelineLayerItem[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + animationId + "']").remove();
    rebuildTimeline();
    timelineItems--;
}

function findDuration(tween) {
    thisAnimationDuration = 0;
    for (L = 0; L < tween.length; L++) {
        for (setting in tween[L]) {
            if (setting == "duration") {
                thisAnimationDuration = thisAnimationDuration + Number(tween[L].duration);
            } else if (setting == "delay") {
                delayArray = tween[L].delay.split("=");
                offset = Number(delayArray[0] + delayArray[1]);
                thisAnimationDuration = thisAnimationDuration + offset;
            }

        }
    }
    return thisAnimationDuration;
}


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
}

function keyframeFrom() {
    var thisSlide = $(this).attr('data-slide');
    var thisLayer = $(this).attr('data-layer');
    var animationId = $(this).attr('data-animationId');
    if (confirm('Are you sure you want to save this thing into the database?')) {
        Slides[thisSlide].layers[thisLayer].animationgroup[animationId].fromVars = {
            "left": Slides[thisSlide].layers[thisLayer].css.left,
            "top": Slides[thisSlide].layers[thisLayer].css.top,
            "height": Slides[thisSlide].layers[thisLayer].css.height,
            "width": Slides[thisSlide].layers[thisLayer].css.width
        };
        console.log(Slides[thisSlide].layers[thisLayer].animationgroup[animationId].fromVars);
    } else {
        console.log("Cancelled");
    }
}

function keyframeTo() {
    var thisSlide = $(this).attr('data-slide');
    var thisLayer = $(this).attr('data-layer');
    var animationId = $(this).attr('data-animationId');
    Slides[thisSlide].layers[thisLayer].animationgroup[animationId].fromVars = {
        "left": Slides[thisSlide].layers[thisLayer].css.left,
        "top": Slides[thisSlide].layers[thisLayer].css.top,
        "height": Slides[thisSlide].layers[thisLayer].css.height,
        "width": Slides[thisSlide].layers[thisLayer].css.width
    };
}

function newOptionsTooltip(e) {
    TweenLite.to(".ExpandingTips", 0, { scale: 0.5, autoAlpha: 0 });
    var tooltip = $(this).parent().parent().parent().find(".ExpandingTips");
    if (tooltip.attr("data-visibility") === "1") {
        tooltip.attr("data-visibility", 0);
        TweenLite.to(tooltip, 0.3, { y: 20, scale: 0.5, autoAlpha: 0 });
    } else {
        tooltip.attr("data-visibility", 1);
        TweenLite.to(tooltip, 0.3, { y: -20, scale: 1, autoAlpha: 1 });
    }
}

function manualOptionsAdd(e) {
    var thisSlide = $(this).attr('data-slideId');
    var thisLayer = $(this).attr('data-layerId');
    var animationId = $(this).attr('data-animationId');

    //data = $("#manualOptionsValue").val().replace(/(['"])?([a-zA-Z#0-9_]+)(['"])?\s*:\s*(['"])?([a-zA-Z#0-9_+=]+)(['"])?/g, '"$2":"$5"');
    data = eval($("#manualOptionsValue").val());

    console.log(data);

    $.extend(true, manualTween, JSON.parse(data));
    $(".addedTweenOptions").append("<label>" + data + "</label>\
        <i data-animationId='" + animationId + "' data-slide='" + thisSlide + "' data-layer='" + thisLayer + "' class=' pull-right fa fa-trash deleteManualTweenItem'>&nbsp;</i><br>");
    manualTween = $.extend(true, manualTween, JSON.parse(data));
    console.log(manualTween);
    $(".deleteManualTweenItem").unbind('click').click(deleteManualTweenItem);

    function deleteManualTweenItem(e) {}
    rebuildTimeline();
}

function manualEffectAddOptionsSubmit(e) {
    thisAnimationName = $("#layerName").val();
    thisSlide = $(this).attr('data-slide');
    thisLayer = $(this).attr('data-layer');
    animationId = $(this).attr('data-animationId');
    startTime = $(".scrubberHandle").position().left / 1000 / ZoomValue;
    ease = $("#newOptionsEase").val();
    duration = $("#newOptionsDuration").val();
    newTween = { "duration": duration, "timeScale": 0.1, "sequence": [] };
    newTween.sequence.push({ "vars": manualTween });
    if (ease != "none") {
        $.extend(true, newTween.sequence[0].vars, { "ease": "CustomEase.create('custom', " + ease + ")" });
    }
    Slides[thisSlide].layers[thisLayer].animationgroup.push({ "name": thisAnimationName, "startTime": startTime / 1000 / ZoomValue, "sequence": newTween.sequence, "timeScale": 1 });
    Slides[thisSlide].layers[thisLayer].animationgroup[animationId].sequence[0].duration = duration;
    thisAnimationDuration = duration;
    //$(".manualEffectAdd").hide();
    editor.set(Slides[0]);
    rebuildTimeline();
    addLayersToTimeline();
    reInit();
    $('.animationLabelName[data-layer="' + thisLayer + '"][data-slide="' + thisSlide + '"][data-animationid="' + layerAnimationId + '"]').html(thisAnimationName);
    $(".addedTweenOptions").html("");
    manualTween = {};
    $(".addAnimationPanelOuter").hide();
}

function newOptionsAdd(e) {
    var thisSlide = $(this).attr('data-slide');
    var thisLayer = $(this).attr('data-layer');
    var animationId = $(this).attr('data-animationId');

    option = $(this).parent().parent().find("select").val();
    value = $(this).parent().parent().find("input").val();
    $.extend(true, manualTween, {
        [option]: value });
    $(".addedTweenOptions").append("<label>" + option + "  : " + value + "</label>\
        <i data-animationId='" + animationId + "' data-slide='" + thisSlide + "' data-layer='" + thisLayer + "' class=' pull-right fa fa-trash deleteManualTweenItem'>&nbsp;</i><br>");
    manualTween = $.extend(true, manualTween, {
        [option]: value });
    $(".deleteManualTweenItem").unbind('click').click(deleteManualTweenItem);

    function deleteManualTweenItem(e) {}
    rebuildTimeline();
}
function PrepackagedOptionsSubmit(e) {
    thisSlide = $(this).attr('data-slide');
    thisLayer = $(this).attr('data-layer');
    layerAnimationId = Slides[thisSlide].layers[thisLayer].animationgroup.length;
    thisAnimationName = $("#preDefined option:selected").text();
    timelineItems++;
    newTween = eval($("#preDefined").val());
    thisAnimationDuration = findDuration(newTween);
    Slides[thisSlide].layers[thisLayer].animationgroup.push({
        "name": thisAnimationName,
        "startTime": $(".scrubberHandle").position().left / 1000 / ZoomValue,
        "timeScale": 0.1,
        "sequence": newTween
    });
    createMultiTimelineElement(newTween);
    rebuildTimeline();
    reInit();
    $(".MultiTimelineElement").mousedown(function(e) { complexClick(e, "ctrl", "datGuiEditor(e.originalEvent)"); });
    $('.MultiTimelineElementRow[data-layer="' + thisLayer + '"][data-slide="' + thisSlide + '"][data-animationid="' + layerAnimationId + '"]').attr("title", thisAnimationName);

    $(".addAnimationPanelOuter").hide();
}

function reInit() {
    $(".draggableX").draggable({
        axis: "x",
        containment: "parent",
        stop: function(event, ui) {
            var thisSlide = $(this).attr('data-slide');
            var thisLayer = $(this).attr('data-layer');
            var animationId = $(this).attr('data-animationId');
            var thisStartTime = $(this).position().left / ZoomValue / 1000;
            Slides[thisSlide].layers[thisLayer].animationgroup[animationId].startTime = thisStartTime;
            rebuildTimeline();
        }
    });
    $(".resizableX").resizable({
        handles: "e,w",
        containment: "parent",
        stop: function(event, ui) {
            var thisSlide = $(this).attr('data-slide');
            var thisLayer = $(this).attr('data-layer');
            var animationId = $(this).attr('data-animationId');
            var thisStartTime = $(this).position().left / ZoomValue / 1000;
            var thisDuration = $(this).width() / ZoomValue / 1000;
            Slides[thisSlide].layers[thisLayer].animationgroup[animationId].startTime = thisStartTime;
            Slides[thisSlide].layers[thisLayer].animationgroup[animationId].duration = thisDuration;
            rebuildTimeline();
        }
    });
    $(".draggableX").draggable("option", "cancel", ".resize-bar, .delayArrow");
}

function scrubToTime(e) {
    scrubber = $(".scrubberHandle");
    var clickedTime = (e.pageX - $(this).offset().left) / ZoomValue - 10;
    scrubber.css({
        "left": e.pageX - $(this).offset().left - 10
    });
    scrubberValue = ($(".scrubberHandle").position().left) / ZoomValue - 20;
    insertTime = scrubberValue * ZoomValue;
    progress.html(scrubberValue / 1000);
    mainTL.time(scrubberValue / 1000).pause();
    scrubber.css({
        "left": e.pageX - $(this).offset().left - 20
    });
    e.originalEvent.returnValue = false;
}


function stopEvent(event) {
    if (event.preventDefault !== undefined)
        event.preventDefault();
    if (event.stopPropagation !== undefined)
        event.stopPropagation();
}



$(".adjustPlayback").unbind('click').click(function(e) {
    // Using init options
    var dialogInstance1 = new BootstrapDialog({
        title: 'Adjust Playback Speed',
        message: 'Adjust Speed:<input class="adjustPlaybackSlider" type="text" data-slider-min="0" data-slider-max="3" data-slider-step="0.01" data-slider-value="1"/>',
        buttons: [{
            label: 'Close',
            cssClass: 'btn-primary',
            action: function(dialog){
                dialog.close();
            }
        }]
    });
    dialogInstance1.open();
    setTimeout(function() {
     new Slider('.adjustPlaybackSlider', {});
        $('.adjustPlaybackSlider').on("slide", function(slideEvt) {
        sliderValue = slideEvt.value;
        mainTL.timeScale(sliderValue);

    });
    }, 300);
});


$(".manualOptionsAdd").unbind('click').click(manualOptionsAdd);