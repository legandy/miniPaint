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

	var init = function() {
		var script = document.createElement('script');
		script.src = 'https://www.googleapis.com/webfonts/v1/webfonts?subset=latin-ext&sort=date&key=AIzaSyBt368HCVSaNr0SHivuoWSwxpSuR4OX2OU&callback=FONTS.setFonts';
		document.body.appendChild(script);
	}();

	this.fonts = [];
	this.categories = ['serif', 'sans-serif', 'display', 'handwriting'];

	this.setFonts = function(fonts) {
		for (var i = 0; i < fonts.items.length; i++) {
			if (_self.categories.indexOf(fonts.items[i].category) != -1) {
				_self.fonts.push(fonts.items[i].family);
			}

			if (_self.fonts.length  >= 150) {
				break;
			}
		}
		_self.loadFonts();
	};

	this.loadFonts = function() {
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
	};
}