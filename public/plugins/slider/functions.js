/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);


var Slides = [];
var slideKey = "0";
var layerKey = "0";
var childKey = "0";
var currentSlide = 0;
var currentLayer = 0;
var currentChild = "0";
var currentKeyframe = "";
Slides.push({
	"background-color": "#aaaaaa",
	"canvasHeight": "200",
	"canvasWidth": "1000",
	"layers": []
});

var activeItem = 0;
var activeSlide = 0;
var activeKeyframe = "0";
var arraykeyframe = "0";
var child=0;
var childLayer = [];
var css = "";
var currentVal = "";
var image = "";
var imageHeight="";
var imageWidth="";
var key = "0";
var keyframe = "0";
var keyframeData = [];
var lastClicked = "";
var layers = [];
var menuKey="0";
var pickercss = "";
var randomColor= "";
var selectedItem = "0";
var slide=[];
var slideLength = 0;
var slideMain = [];
var style = "";
var styles = [];
var toggleValue = "";
var zindex="100";
var gridSizeArray =[];
var gridX = "";
var gridY = "";
var gridXY ="";
var sliderValue = "";
var gridXval = "";
var gridYval = "";
var positionType = "";
var associatedInput="";
var associatedValue="";
var clickedElement;
var CSL;
var menuId;
var container = document.getElementById("jsonresults");
var editor = new JSONEditor(container);


function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	randomColor= color;
	return color;
}

function isOdd(n) {
  return n == parseFloat(n) && !!(n % 2);     
}

function isEven(n) {
  return n == parseFloat(n) && !(n % 2);
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

	function toggleChevron(e) {
		$(this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
	}

