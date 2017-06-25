/**
 * main config file
 * 
 * @author legandy
 */

//canvas layers
var canvas_back = document.getElementById("canvas_back").getContext("2d");		//layer for grid/transparency
var canvas_front = document.getElementById("canvas_front").getContext("2d");		//tmp layer
var canvas_grid = document.getElementById("canvas_grid").getContext("2d");		//grid layer
var canvas_preview = document.getElementById("canvas_preview").getContext("2d");	//mini preview

//global settings
var VERSION = '3.3.0.3';
var WIDTH;						//canvas midth
var HEIGHT;						//canvas height
var COLOR = '#1984bb';				//active color
var ALPHA = 255;					//active color alpha
var LANG = 'en';					//active language

var DRAW_TOOLS_CONFIG = [
	{name: 'select_tool', 	title: 'Select object tool',	icon: ['sprites.png', 0, 0],			attributes: {}		},
	{name: 'select_square', title: 'Select area tool', 		icon: ['sprites.png', -50, 0],		attributes: {}		},
	{name: 'magic_wand', 	title: 'Magic Wand Tool', 		icon: ['sprites.png', -150, -50],	attributes: {power: 40, anti_aliasing: true}		},
    {name: 'brush',			title: 'Brush',					icon: ['sprites.png', -500, 0],		attributes: {type: 'Brush', type_values: ['Brush', 'BezierCurve', 'Chrome', 'Fur', 'Grouped', 'Shaded', 'Sketchy'], size: 10, anti_aliasing: false }, on_update: 'update_brush', },   
    {name: 'fill', 			title: 'Fill',					icon: ['sprites.png', -150, 0],		attributes: {power: 0, anti_aliasing: false}	},
    {name: 'gradient_tool', title: 'Gradient',				icon: ['sprites.png', -400, -50],	attributes: {radial: false, power: 50}	},
	{name: 'erase',			title: 'Erase',					icon: ['sprites.png', -100, 0],		attributes: {size: 30, circle: true, strict: true}	},
	{name: 'pick_color', 	title: 'Pick Color',			icon: ['sprites.png', -200, 0],		attributes: {}		},
	{name: 'line', 			title: 'Draw line',				icon: ['sprites.png', -300, 0],		attributes: {size: 1, type_values: ['Simple', 'Multi-line', 'Arrow', 'Curve'] }	},
	{name: 'draw_square', 	title: 'Draw rectangle',		icon: ['sprites.png', -400, 0],		attributes: {fill: false, square: false}	},
	{name: 'draw_circle', 	title: 'Draw circle',			icon: ['sprites.png', -450, 0],		attributes: {fill: false, circle: false}	},
	{name: 'blur_tool', 	title: 'Blur tool',				icon: ['sprites.png', -250, -50],	attributes: {size: 40, power: 2}	},
	{name: 'bulge_pinch_tool',title: 'Bulge/Pinch tool',	icon: ['sprites.png', -450, -100],	attributes: {size: 50, radius: 80, bulge:true}	},
    {name: 'letters', 		title: 'Draw letters',			icon: ['sprites.png', -350, 4],		attributes: {}	},
	{name: 'clone_tool', 	title: 'Clone tool',			icon: ['sprites.png', -350, -50],	attributes: {size: 30, anti_aliasing: true}	},
	{name: 'crop_tool',		title: 'Crop',					icon: ['sprites.png', -450, -50],	attributes: {	} },
];
