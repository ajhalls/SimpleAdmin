    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <div class="output"></div>
<script type="text/javascript">
var array = [
  {
    "bounceInRight": {
      "name": "bounceInRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(3000px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(-25px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(10px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-5px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "bounceOut": {
      "name": "bounceOut",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(.9, .9, .9)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(1.1, 1.1, 1.1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.3, .3, .3)"
          }
        }
      ]
    }
  },
  {
    "bounceOutDown": {
      "name": "bounceOutDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 10px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(0, -20px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, 2000px, 0)"
          }
        }
      ]
    }
  },
  {
    "bounceOutLeft": {
      "name": "bounceOutLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(20px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-2000px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "bounceOutRight": {
      "name": "bounceOutRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(-20px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(2000px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "bounceOutUp": {
      "name": "bounceOutUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, -10px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(0, 20px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, -2000px, 0)"
          }
        }
      ]
    }
  },
  {
    "bulge": {
      "name": "bulge",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "x": "-=310",
            "width": "-=45px",
            "height": "+=45px",
            "borderRadius": "30% 30% 30% 30%"
          }
        },
        {
          "duration": "0.2",
          "vars": {
            "x": "+=155",
            "width": "+=10px",
            "height": "-=20px",
            "borderRadius": "0% 0% 0% 0%"
          }
        }
      ]
    }
  },
  {
    "fadeInDown": {
      "name": "fadeInDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "vars": {
              "opacity": 0,
              "transform": "translate3d(0, -100%, 0)"
            }
          }
        },
        {
          "duration": "1",
          "vars": {
            "vars": {
              "opacity": 1,
              "transform": "none"
            }
          }
        }
      ]
    }
  },
  {
    "fadeInDownBig": {
      "name": "fadeInDownBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, -2000px, 0)"
          }
        },
        {
          "duration": "1",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeInLeft": {
      "name": "fadeInLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-100%, 0, 0)"
          }
        },
        {
          "duration": "1",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeInLeftBig": {
      "name": "fadeInLeftBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-2000px, 0, 0)"
          }
        },
        {
          "duration": "1",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeInRight": {
      "name": "fadeInRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(100%, 0, 0)"
          }
        },
        {
          "duration": "1",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeInRightBig": {
      "name": "fadeInRightBig",
      "sequence": [
        {
          "duration": "1",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(2000px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeInUp": {
      "name": "fadeInUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, 100%, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeInUpBig": {
      "name": "fadeInUpBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, 2000px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "fadeOut": {
      "name": "fadeOut",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "fadeOutDown": {
      "name": "fadeOutDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, 100%, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutDownBig": {
      "name": "fadeOutDownBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, 2000px, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutLeft": {
      "name": "fadeOutLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-100%, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutLeftBig": {
      "name": "fadeOutLeftBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-2000px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutRight": {
      "name": "fadeOutRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(100%, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutRightBig": {
      "name": "fadeOutRightBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(2000px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutUp": {
      "name": "fadeOutUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, -100%, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeOutUpBig": {
      "name": "fadeOutUpBig",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, -2000px, 0)"
          }
        }
      ]
    }
  },
  {
    "flipOutY": {
      "name": "flipOutY",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, -15deg)",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "hinge": {
      "name": "hinge",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "top left"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, 80deg)",
            "transform-origin": "top left"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, 60deg)",
            "transform-origin": "top left",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 700px, 0)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "jello": {
      "name": "jello",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(-12.5deg) skewY(-12.5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(6.25deg) skewY(6.25deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(-3.125deg) skewY(-3.125deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(1.5625deg) skewY(1.5625deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(-0.78125deg) skewY(-0.78125deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(0.390625deg) skewY(0.390625deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(-0.1953125deg) skewY(-0.1953125deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "lightSpeedIn": {
      "name": "lightSpeedIn",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(100%, 0, 0) skewX(-30deg)",
            "opacity": "0"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(20deg)",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "skewX(-5deg)",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "none",
            "opacity": "1"
          }
        }
      ]
    }
  },
  {
    "lightSpeedOut": {
      "name": "lightSpeedOut",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".5",
          "vars": {
            "transform": "translate3d(100%, 0, 0) skewX(30deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "pulse": {
      "name": "pulse",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1, 1, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.25, 0.75, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(0.75, 1.25, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.15, 0.85, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(.95, 1.05, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.05, .95, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1, 1, 1)"
          }
        }
      ]
    }
  },
  {
    "rollIn": {
      "name": "rollIn",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "rollOut": {
      "name": "rollOut",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"
          }
        }
      ]
    }
  },
  {
    "rotateInDownRight": {
      "name": "rotateInDownRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "transform": "rotate3d(0, 0, 1, 45deg)",
            "opacity": "0"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "transform": "none",
            "opacity": "1"
          }
        }
      ]
    }
  },
  {
    "rotateInUpLeft": {
      "name": "rotateInUpLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "left bottom",
            "transform": "rotate3d(0, 0, 1, 45deg)",
            "opacity": "0"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "left bottom",
            "transform": "none",
            "opacity": "1"
          }
        }
      ]
    }
  },
  {
    "rotateInUpRight": {
      "name": "rotateInUpRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "transform": "rotate3d(0, 0, 1, -90deg)",
            "opacity": "0"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "transform": "none",
            "opacity": "1"
          }
        }
      ]
    }
  },
  {
    "rotateOut": {
      "name": "rotateOut",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "center",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "center",
            "transform": "rotate3d(0, 0, 1, 200deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "rotateOutDownLeft": {
      "name": "rotateOutDownLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "left bottom",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "left bottom",
            "transform": "rotate3d(0, 0, 1, 45deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "rotateOutDownRight": {
      "name": "rotateOutDownRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "transform": "rotate3d(0, 0, 1, -45deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "rotateOutUpLeft": {
      "name": "rotateOutUpLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "left bottom",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "left bottom",
            "transform": "rotate3d(0, 0, 1, -45deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "rotateOutUpRight": {
      "name": "rotateOutUpRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform-origin": "right bottom",
            "transform": "rotate3d(0, 0, 1, 90deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "rubberBand": {
      "name": "rubberBand",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1, 1, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.25, 0.75, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(0.75, 1.25, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.15, 0.85, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(.95, 1.05, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.05, .95, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1, 1, 1)"
          }
        }
      ]
    }
  },
  {
    "shake": {
      "name": "shake",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-10px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(10px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideInDown": {
      "name": "slideInDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, -100%, 0)",
            "visibility": "visible"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideInLeft": {
      "name": "slideInLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-100%, 0, 0)",
            "visibility": "visible"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideInRight": {
      "name": "slideInRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(100%, 0, 0)",
            "visibility": "visible"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideInUp": {
      "name": "slideInUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 100%, 0)",
            "visibility": "visible"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideOutDown": {
      "name": "slideOutDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "visibility": "hidden",
            "transform": "translate3d(0, 100%, 0)"
          }
        }
      ]
    }
  },
  {
    "slideOutLeft": {
      "name": "slideOutLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "visibility": "hidden",
            "transform": "translate3d(-100%, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideOutRight": {
      "name": "slideOutRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "visibility": "hidden",
            "transform": "translate3d(100%, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "slideOutUp": {
      "name": "slideOutUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "visibility": "hidden",
            "transform": "translate3d(0, -100%, 0)"
          }
        }
      ]
    }
  },
  {
    "spherize": {
      "name": "spherize",
      "sequence": [
        {
          "duration": "2",
          "vars": {
            "borderRadius": "50%"
          }
        }
      ]
    }
  },
  {
    "spin": {
      "name": "spin",
      "sequence": [
        {
          "duration": "2",
          "vars": {
            "rotation": "+=360",
            "ease": "Elastic.easeOut"
          }
        }
      ]
    }
  },
  {
    "swing": {
      "name": "swing",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, 15deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, -10deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, 5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, -5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "rotate3d(0, 0, 1, 0deg)"
          }
        }
      ]
    }
  },
  {
    "tada": {
      "name": "tada",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1, 1, 1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1, 1, 1)"
          }
        }
      ]
    }
  },
  {
    "teardropBL": {
      "name": "teardropBL",
      "sequence": [
        {
          "duration": "2",
          "vars": {
            "borderRadius": "50px 50px 50px 0px"
          }
        }
      ]
    }
  },
  {
    "teardropBR": {
      "name": "teardropBR",
      "sequence": [
        {
          "duration": "2",
          "vars": {
            "borderRadius": "50px 50px 0px 50px"
          }
        }
      ]
    }
  },
  {
    "teardropTL": {
      "name": "teardropTL",
      "sequence": [
        {
          "duration": "2",
          "vars": {
            "borderRadius": "0px 50px 50px 50px"
          }
        }
      ]
    }
  },
  {
    "teardropTR": {
      "name": "teardropTR",
      "sequence": [
        {
          "duration": "2",
          "vars": {
            "borderRadius": "50px 0px 50px 50px"
          }
        }
      ]
    }
  },
  {
    "wobble": {
      "name": "wobble",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "none"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "zoomIn": {
      "name": "zoomIn",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.3, .3, .3)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        }
      ]
    }
  },
  {
    "zoomInDown": {
      "name": "zoomInDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)"
          }
        }
      ]
    }
  },
  {
    "zoomInLeft": {
      "name": "zoomInLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "zoomInRight": {
      "name": "zoomInRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "zoomInUp": {
      "name": "zoomInUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)"
          }
        }
      ]
    }
  },
  {
    "zoomOut": {
      "name": "zoomOut",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.3, .3, .3)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "zoomOutDown": {
      "name": "zoomOutDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.1, .1, .1) translate3d(0, 2000px, 0)",
            "transform-origin": "center bottom"
          }
        }
      ]
    }
  },
  {
    "zoomOutLeft": {
      "name": "zoomOutLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(42px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale(.1) translate3d(-2000px, 0, 0)",
            "transform-origin": "left center"
          }
        }
      ]
    }
  },
  {
    "zoomOutRight": {
      "name": "zoomOutRight",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(-42px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale(.1) translate3d(2000px, 0, 0)",
            "transform-origin": "right center"
          }
        }
      ]
    }
  },
  {
    "zoomOutUp": {
      "name": "zoomOutUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.1, .1, .1) translate3d(0, -2000px, 0)",
            "transform-origin": "center bottom"
          }
        }
      ]
    }
  },
  {
    "bounceIn": {
      "name": "bounceIn",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "scale3d(.3, .3, .3)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(1.1, 1.1, 1.1)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(.9, .9, .9)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(1.03, 1.03, 1.03)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "scale3d(.97, .97, .97)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "scale3d(1, 1, 1)"
          }
        }
      ]
    }
  },
  {
    "bounceInDown": {
      "name": "bounceInDown",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, -3000px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(0, 25px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, -10px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 5px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "bounceInLeft": {
      "name": "bounceInLeft",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(-3000px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(25px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(-10px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(5px, 0, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "none"
          }
        }
      ]
    }
  },
  {
    "bounceInUp": {
      "name": "bounceInUp",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0",
            "transform": "translate3d(0, 3000px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "opacity": "1",
            "transform": "translate3d(0, -20px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 10px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, -5px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, 0, 0)"
          }
        }
      ]
    }
  },
  {
    "fadeIn": {
      "name": "fadeIn",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "opacity": "0"
          }
        },
        {
          "duration": ".8",
          "vars": {
            "opacity": "1"
          }
        }
      ]
    }
  },
  {
    "flipInY": {
      "name": "flipInY",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
            "opacity": "0"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px)"
          }
        }
      ]
    }
  },
  {
    "flipOutX": {
      "name": "flipOutX",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
            "opacity": "0"
          }
        }
      ]
    }
  },
  {
    "bounce": {
      "name": "bounce",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0,0,0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, -30px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0, -15px, 0)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "translate3d(0,-4px,0)"
          }
        }
      ]
    }
  },
  {
    "flip": {
      "name": "flip",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(0, 1, 0, -360deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) scale3d(.95, .95, .95)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px)"
          }
        }
      ]
    }
  },
  {
    "flipInX": {
      "name": "flipInX",
      "sequence": [
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
            "opacity": "0"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(1, 0, 0, 10deg)",
            "opacity": "1"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px) rotate3d(1, 0, 0, -5deg)"
          }
        },
        {
          "duration": ".2",
          "vars": {
            "transform": "perspective(400px)"
          }
        }
      ]
    }
  }
];

var output = [];
for (i = 0; i < array.length; i++){
	for (setting in array[i]){

	$(".output").append(JSON.stringify(array[i][setting].name) + "zzz" + JSON.stringify(array[i][setting].sequence) + "<br>");	
	//$(".output").html(JSON.stringify(output));	
		
	}
}
</script>