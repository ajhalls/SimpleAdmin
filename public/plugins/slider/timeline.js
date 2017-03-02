var spacing, timelineLength = 10000;
var startTime = timelineItems = scrubberValue = insertTime = 0;
var ZoomValue = 0.4;
var mainTL = new TimelineLite({ onUpdate: updateSlider });
var playBtn = $(".playBtn"),
    pauseBtn = $(".pauseBtn"),
    resumeBtn = $(".resumeBtn"),
    time = $(".time"),
    progress = $(".progress"),
    timeScale = $(".timeScale"),
    scrubber = $(".scrubberHandle"),
    buttons = [playBtn, pauseBtn, resumeBtn],
    progressSlider;
var childTL = [];
childTL[timelineItems] = new TimelineLite({ onUpdate: updateSlider });

var animationEase, animationSequence, animationDuration, thisAnimationName, thisAnimationDuration;
var manualTween = dataItem = newTween = {};
var targetthing = ".canvasItem[data-type=\"sliderLayer\"][data-layer=\"" + currentLayer + "\"][data-slide=\"" + currentSlide + "\"]";

function updateSlider() {
    $(".scrubberHandle").css("left", (mainTL.time().toFixed(2) * 1000) * ZoomValue + "px");
    progress.html(mainTL.time().toFixed(2));
}

function drawRulers() {
    $(".timeline-container-header").html("");
    $(".timeline-container-header").html("");
    for (i = 0; i < timelineLength; i += (10 * 1)) {
        spacing = (i * Number(ZoomValue) + 18);
        var tickMarks = "<span class=\"minorTick\" style=\"left:" + spacing + "px;\">|</span>";
        $(".timeline-container-header").append(tickMarks);
    }
    // Numbers and red lines
    for (i = 0; i < timelineLength; i += (100 * 1)) {
        spacing = (i * Number(ZoomValue) + 16);
        var numbers = "<span class=\"timelineNumbers\" style=\"left:" + spacing + "px;\">" + i + "</span>";
        $(".timeline-container-header").append(numbers);
        var majorLines = "<span class=\"majorTick\" style=\"left:" + spacing + "px;\"><b>|</B></span>";
        $(".timeline-container-header").append(majorLines);
        $(".timeline-container-header").css("width", spacing + 100);
    }
    $(".timelineElementRow").css("width", spacing + 100);
    $(".timeline-container").on("click", scrubToTime);
    $(".scrubberHandle").draggable({
        axis: 'x',
        containment: "parent",
        drag: function(event, ui) {
            scrubberValue = ($(this).position().left) / ZoomValue;
            $(".scrubberHandle").css("left", $(this).position().left);
            progress.html(scrubberValue / 1000);
            mainTL.time(scrubberValue / 1000).pause();
            insertTime = scrubberValue * ZoomValue;
        }
    });
}

function rebuildTimeline() {
    var getPreviousTime = mainTL.time();
    mainTL.time(0).pause();
    var L, G, S;
    mainTL.clear();
    mainTL = new TimelineLite({
        onUpdate: updateSlider
    });
    var assembledTimeline = "";
    childTL = [];
    sequenceTL = [];
    for (L = 0; L < Slides[0].layers.length; L++) {
        target = '.canvasItem[data-type="sliderLayer"][data-layer="' + L + '"][data-slide="0"]';
        childTL[L] = new TimelineLite({
            onUpdate: updateSlider,
            id: "Layer-" + L
        });
        for (G = 0; G < Slides[0].layers[L].animationgroup.length; G++) {
            sequenceTL[G] = new TimelineLite({
                onUpdate: updateSlider,
                id: "Layer-" + L + "-AnimationGroup-" + G
            });
            for (S = 0; S < Slides[0].layers[L].animationgroup[G].sequence.length; S++) {
                duration = Slides[0].layers[L].animationgroup[G].sequence[S].duration;
                delay = Slides[0].layers[L].animationgroup[G].sequence[S].delay;
                sequence = Slides[0].layers[L].animationgroup[G].sequence[S].vars;
                if (Slides[0].layers[L].animationgroup[G].sequence[S].customEase) {
                    ease = Slides[0].layers[L].animationgroup[G].sequence[S].customEase;
                    sequence.ease = CustomEase.create("custom", ease);
                }
                if (Slides[0].layers[L].animationgroup[G].fromVars) {
                    fromVars = Slides[0].layers[L].animationgroup[G].fromVars;
                    sequenceTL[G].fromTo(target, duration, fromVars, sequence, delay);
                } else {
                    sequenceTL[G].to(target, duration, sequence, delay);
                }
            }
            console.log(JSONStringify(sequenceTL[i]));

            sequenceTL[G].groupStartTime = Slides[0].layers[L].animationgroup[G].startTime;
            sequenceTL[G].timeScale = Slides[0].layers[L].animationgroup[G].timeScale;
        }
        for (i = 0; i < sequenceTL.length; i++) {
            childTL[L].add(sequenceTL[i], sequenceTL[i].groupStartTime);
            childTL[L].groupStartTime = 0;
        }
    }
    for (i = 0; i < childTL.length; i++) {
        mainTL.add(childTL[i], childTL[i].groupStartTime);
    }
    mainTL.time(getPreviousTime).pause();
}

function editLabelAnimation(e) {
    //$(".newOptionsFormItem").val(""); //clear any previous values
    var currentSlide = $(this).attr('data-slide');
    var currentLayer = $(this).attr('data-layer');
    var animationId = $(this).attr('data-animationId');
    dataItem = {
        "slide": currentSlide,
        "layer": currentLayer,
        "animationId": animationId,
        "animationData": Slides[currentSlide].layers[currentLayer].animationgroup[animationId]
    };
    $('.editTimelineLabel').css({
        "top": e.originalEvent.pageY,
        "left": e.originalEvent.pageX
    });
    $("#layerName").val(dataItem.animationData.name);
    $("#preDefined").val(JSON.stringify(dataItem.animationData.sequence));
    $("#newOptionsDuration").val(dataItem.animationData.duration);
    $(".editTimelineLabel, #newOptionsAdd, .layerOptionsSubmit").attr("data-animationId", actionItem);
    $(".editTimelineLabel, #newOptionsAdd, .layerOptionsSubmit").attr("data-layerId", currentLayer);
    $(".editTimelineLabel, #newOptionsAdd, .layerOptionsSubmit").attr("data-slideId", currentSlide);
    $(".editTimelineLabel").show();
}

$(".newOptionsAdd").unbind('click').click(newOptionsAdd);
$(".manualEffectAddOptionsSubmit ").unbind('click').click(manualEffectAddOptionsSubmit);
