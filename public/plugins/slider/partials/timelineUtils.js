function logTimeline(timeline) {
    var tweens = timeline.getChildren(true, true, true);
    var timelineData = [];
    tweens.forEach(function(tween) {
        timelineData.push({
            duration: tween.duration(),
            startTime: tween._startTime,
            vars: tween.vars
        });
        length = timelineData.length;
        delete timelineData[length -1].vars.ease;
    });
    console.log(JSONStringify(timelineData, null, "  "));
}
