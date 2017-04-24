jssor_1_slider_init = function () {
	var jssor_1_options = {
	  $AutoPlay: 1,
	  $SlideDuration: 1500,
	  $SlideEasing: $Jease$.$OutQuint,
	  $ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$
	  }
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*responsive code begin*/
	/*you can remove responsive code if you don't want the slider scales while window resizing*/
	function ScaleSlider() {
		var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 1920);
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	/*responsive code end*/
};

jssor_2_slider_init = function (containerId) {
	//Reference http://www.jssor.com/development/slider-with-slideshow-no-jquery.html
	//Reference http://www.jssor.com/development/tool-slideshow-transition-viewer.html

	var _SlideshowTransitions = [
	//Fade in R
	{$Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
	//Fade out L
	, { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
	];

	var options = {
		$AutoPlay: 1,                                       //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
		$AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
		$Idle: 4000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
		$PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

		$ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
		$SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
		$MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
		//$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
		//$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
		$SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
		$Cols: 1,                                           //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
		$ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
		$UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
		$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
		$DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

		$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
			$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
			$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
			$TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
			$ShowLink: true                                 //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
		},

		$BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
			$Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
			$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$Rows: 1,                                       //[Optional] Specify lanes to arrange items, default value is 1
			$SpacingX: 10,                                  //[Optional] Horizontal space between each item in pixel, default value is 0
			$SpacingY: 10                                   //[Optional] Vertical space between each item in pixel, default value is 0
		},

		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
			$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$AutoCenter: 2                                  //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
		},

		$ThumbnailNavigatorOptions: {
			$Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
			$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$ActionMode: 0,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
			$NoDrag: true                                   //[Optional] Disable drag or not, default value is false
		}
	};

	var jssor_sliderb = new $JssorSlider$(containerId, options);
	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizing
	function ScaleSlider() {
		var parentWidth = jssor_sliderb.$Elmt.parentNode.clientWidth;
		if (parentWidth)
			jssor_sliderb.$ScaleWidth(Math.min(parentWidth, 600));
		else
			$Jssor$.$Delay(ScaleSlider, 30);
	}

	ScaleSlider();
	$Jssor$.$AddEvent(window, "load", ScaleSlider);

	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	//responsive code end
};