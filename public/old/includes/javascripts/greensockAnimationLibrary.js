var greenSockUI = {
  "spin": {
    "duration": "2",
    "rotation": "+=360",
    "ease": "Elastic.easeOut"
  },
  "teardropBL":  {"duration": "2","borderRadius":"50px 50px 50px 0px"},
  "teardropBR":  {"duration": "2","borderRadius":"50px 50px 0px 50px"},
  "teardropTR":  {"duration": "2","borderRadius":"50px 0px 50px 50px"},
  "teardropTL":  {"duration": "2","borderRadius":"0px 50px 50px 50px"},
  "spherize":  {"duration": "2","borderRadius":"50%"},
  "spherize2":  [
	{
		"duration": ".6",
		"scaleX":"1.5",
		"scaleY":"0.8",
		"borderRadius":"20% 20% 20% 20%"
	},
	{
		"duration": ".6",
		"scaleX":"0.7",
		"borderRadius":"30% 30% 30% 30%"
	},
	{
		"duration": "2.6",
		"scaleX":"1",
		"borderRadius":"0px 0px 0px 0px"
	}
  ],

  "test":{
      "duration": ".3",
	  "scaleX":".95",
	  "scaleY":"1.05",
	  "yoyo":"true",
	  "transformOrigin":"50% 95%",
	  "repeat":"5",
	  "ease":"Sine.easeInOut"
  },
  "rotationX": {
    "duration": "2",
    "rotationX": "+=360",
    "ease": "Power2.easeOut"
  },
  "rotationY": {
    "duration": "2",
    "rotationY": "+=360",
    "ease": "Power1.easeInOut"
  },
  "flipInY": [
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationY": "90",
      "opacity": "0",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "0",
        "rotationY": "0"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationY": "-20",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "0",
        "rotationY": "90"
      }
    },
    {
     "duration":"0.2",
     "transformPerspective": "400",
      "rotationY": "10",
      "opacity": "1",
      "startAt": {
        "transformPerspective": "400",
        "rotationY": "-20"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationY": "-5",
      "opacity": "1",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "1",
        "rotationY": "10"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "opacity": "1",
      "rotationY": "0",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "1",
        "rotationY": "-5"
      }
    }
  ],
  "flipInX": [
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationX": "90",
      "opacity": "0",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "0",
        "rotationX": "0"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationX": "-20",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "0",
        "rotationX": "90"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationX": "10",
      "opacity": "1",
      "startAt": {
        "transformPerspective": "400",
        "rotationX": "-20"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "rotationX": "-5",
      "opacity": "1",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "1",
        "rotationX": "10"
      }
    },
    {
	  "duration":"0.2",
      "transformPerspective": "400",
      "opacity": "1",
      "rotationX": "0",
      "startAt": {
        "transformPerspective": "400",
        "opacity": "1",
        "rotationX": "-5"
      }
    }
  ]
};

var tl = {};
var assembledTimeline = "";
var animationDuration = "";
var targetItem = "";
var greenAniArray = {options:{}};

function greenAni(targetItem, sequence) {
tl[targetItem.replace(/[^a-z0-9\s]/gi, '')] = new TimelineLite();
  if ($.isArray(sequence))
  {			
	  for (S = 0; S < sequence.length; S++) {
			greenAniArray = {options:{}};
		 for (var setting in sequence[S]) {
			if (setting == "duration")
			{
				greenAniArray["duration"] = sequence[S][setting];
			}else{
				greenAniArray["options"][setting] = sequence[S][setting];
			}
		  }
			animationSequence = greenAniArray["options"];
			animationDuration = greenAniArray["duration"];
			assembledTimeline += '.to("' + targetItem + '", ' + animationDuration + ', ' + JSON.stringify(animationSequence) + ')';
	  }
  }
  else
  {
	for (var setting in sequence) {
		if (setting == "duration") {greenAniArray["duration"] = sequence[setting];}
		else {greenAniArray["options"][setting] = sequence[setting];}
	}
	animationSequence = greenAniArray["options"];
	animationDuration = greenAniArray["duration"];
	assembledTimeline += '.to($("' + targetItem + '"), ' + animationDuration + ', ' + JSON.stringify(animationSequence) + ')';
  }
var TL = tl[targetItem.replace(/[^a-z0-9\s]/gi, '')];
eval("TL" + assembledTimeline);
};

