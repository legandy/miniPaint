/* global POP, MAIN, SIFT, LAYER, IMAGE, EVENTS, HELPER, EDIT, GUI, EL */
/* global WIDTH, HEIGHT, COLOR, canvas_active */

var FONTS = new FONTS_CLASS();

/** 
 * manages fonts google
 * 
 * @author Sergey Zelensky
 */

function FONTS_CLASS() {
	var _self = this;

	this.fonts = [
		'ABeeZee',
		'Advent Pro',
		'Baloo Da',
		'Mukta Vaani'
	];

	var init = function() {
		WebFontConfig = {
			google: { families: _self.fonts }
		};
		(function() {
			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();
	}();
}