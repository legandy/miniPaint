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
		'Lemon',
		'Cherry Swash',
		'Megrim',
		'VT323',
		'Bungee Shade',
		'ABeeZee',
		'Almendra',
		'Cookie',
		'Kaushan Script',
		'Sacramento',
		'Warnes',
		'Advent Pro',
		'Caveat Brush',
		'Rancho',
		'Lekton',
		'Geo',
		'Sail',
		'Marko One',
		'Almendra SC',
		'Nova Mono',
		'Faster One',
		'Sancreek',
		'Niconne',
		'Wire One',
		'Redressed',
		'Itim',
		'Ruge Boogie',
		'Delius',
		'Petit Formal Script',
		'Baloo Da',
		'Inconsolata',
		'Mukta Vaani',
		'Berkshire Swash',
		'Astloch',
		'Pacifico',
		'Kumar One',
		'Montserrat',
		'Fjalla One',
		'Josefin Sans',
		'Codystar',
		'Vampiro One',
		'Sofia',
		'Suranna',
		'Cambo',
		'Amatic SC',
		'Raleway',
		'Antic Didone',
		'Satisfy',
		'Courgette',
		'Montez',
		'Racing Sans One',
		'Princess Sofia',
		'Romanesco',
		'Devonshire',
		'Sriracha',
		'Ubuntu',
		'Caesar Dressing',
		'BioRhyme Expanded',
		'Kadwa',
		'Clicker Script',
		'Gravitas One',
		'Atomic Age',
		'Lobster',
		'Abril Fatface',
		'Knewave',
		'Rye',
		'Stoke',
		'Spirax',
		'Aclonica',
		'Cambay',
		'Oregano',
		'Bigelow Rules',
		'Comfortaa',
		'Macondo Swash Caps',
		'Shrikhand',
		'Audiowide',
		'Concert One',
		'Bangers',
		'Diplomata SC',
		'Press Start 2P',
		'Monoton',
		'Fugaz One',
		'Limelight',
		'Overlock',
		'Federo',
		'Ruslan Display',
		'Cinzel Decorative',
		'Zilla Slab Highlight',
		'UnifrakturMaguntia',
		'Croissant One',
		'Monofett',
		'Plaster',
		'Fascinate',
		'Geostar Fill',
		'Poiret One',
		'Supermercado One',
		'Barrio',
		'Stardos Stencil',
		'Uncial Antiqua',
		'Bahiana'
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