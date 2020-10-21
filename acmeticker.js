//  Breaking News Ticker
(function($){
	'use strict';
	$.fn.AcmeTicker = function(options) {
		let opts = $.extend({}, $.fn.AcmeTicker.defaults, options);
		let thisTicker = $(this), intervalID, timeoutID, isPause = false;
		thisTicker.wrap("<div class='acmeticker-wrap'></div>");
		thisTicker.parent().css({
			position: 'relative'
		})
		thisTicker.children("li").not(":first").hide();
		init();
		function init(){
			switch (opts.type) {
				case 'vertical':
				case 'horizontal':
					vertiZontal()
					break;
				default:
					break;
			}
		}
		function vertiZontal(prevNext = false){
		    let speed = opts.speed,
				autoplay = opts.autoplay,
				direction = opts.direction;
			if( prevNext){
				speed = 0;
				autoplay = 0;
				clearInterval(intervalID);
				intervalID = false;
			}
			function play(){
				if( isPause){
					clearInterval(intervalID);
					intervalID = false;
					return false;
				}
				let dChild,
					eqType,
					mType,
					mVal;
				dChild = thisTicker.find('li:first');
				if(direction === 'up' || direction === 'right'){
					eqType = '-=';
				}
				else{
					eqType = '+=';
				}
				if(opts.type === 'horizontal' ){
					mType = 'left';
					mVal = dChild.outerWidth(true);
				}
				else{
					mType = 'margin-top';
					mVal = dChild.outerHeight(true);
				}
				if( prevNext === 'prev'){
					thisTicker.find('li:last').detach().prependTo(thisTicker);
				}
				else{
					dChild.detach().appendTo(thisTicker);
				}
				thisTicker.find('li').css({
					opacity: '0',
					display: 'none'
				});
				thisTicker.find('li:first').css({
					opacity: '1',
					position: 'absolute',
					display: 'block',
					[mType]: eqType + mVal + 'px',
				});
				thisTicker.find('li:first').animate(
					{[mType]: '0px'},
					speed,
					function () {
						clearInterval(intervalID);
						intervalID = false;
						vertiZontal();
					});
			}
            if( intervalID){
                return false
            }
			intervalID = setInterval(play, autoplay);
		}	
	};
	$.fn.AcmeTicker.defaults = {
		type:'horizontal',
		autoplay: 3000,
		speed: 50,
		direction: 'up',
		pauseOnFocus: true,
		pauseOnHover: true,
	};
})(jQuery);