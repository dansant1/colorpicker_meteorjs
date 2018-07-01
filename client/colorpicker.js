Template.ColorPicker.onCreated( () => {
	Session.set('color', "cl1")
})

Template.ColorPicker.onRendered( () => {

		let template = Template.instance();

		var EXACT__MATCH_MODE_BTN = document.getElementsByName('exact__match__mode__btn')
	 	var RANGE_MODE_BTN = document.getElementsByName('range__match__mode__btn')

	 	var EXACT_MODE = document.querySelectorAll('.__first__slider')
	 	var RANGE_MODE = document.querySelectorAll('.__second__slider')


	 	// MODO DE VISTA DE SLIDERS
	 	var RGBA_RANGE_MODE_BTN = document.getElementsByName('rgba__range__mode__btn')
	 	var HSLA_RANGE_MODE_BTN = document.getElementsByName('hsla__range__mode__btn')
	 	var RGBA_MODE_BTN = document.getElementsByName('rgba__mode__btn')
	 	var HSLA_MODE_BTN = document.getElementsByName('hsla__mode__btn')


	 	// INPUTS DE LOS COSTADOS DEL PICKER
		var RGBA_MODE = document.getElementsByName('red_mode') // RED INPUT
		var RGBA_MODE2 = document.getElementsByName('green_mode')// GREEN INPUT
		var RGBA_MODE3 = document.getElementsByName('blue_mode') // BLUE INPUT
		var RGBA_MODE4 = document.getElementsByName('opacity_mode') // OPACITY

		var HSLA_MODE = document.getElementsByName('hue_mode')	// HUE INPUT
		var HSLA_MODE2 = document.getElementsByName('sat_mode') // SAT INPUT
		var HSLA_MODE3 = document.getElementsByName('ligth_mode') // LIGHT INPUT


		// LOCK BUTTONS OF SLIDERS
		var red_lock = document.getElementsByName('red__lock')
		var green_lock = document.getElementsByName('green__lock')
		var blue_lock = document.getElementsByName('blue__lock')
		var alpha_lock = document.getElementsByName('alpha__lock')
		var hue_lock = document.getElementsByName('hue__lock')
		var sat_lock = document.getElementsByName('sat__lock')
		var ligth_lock = document.getElementsByName('ligth__lock')
		var alpha_hsla_lock = document.getElementsByName('alpha_hsla__lock')

		// COLOR OBJECT
		var colorsObject = {}

		// Variables variables
		var Hex_input = document.getElementsByName("hex_code");
		var Hex_input2 = document.getElementsByName("hex_code2");

		var Pickersito = document.getElementsByName('pickersito');
		var Estripsito = document.getElementsByName('estripsito');

		var R_mode = document.getElementsByName('red_mode'),
			G_mode = document.getElementsByName('green_mode'),
			B_mode = document.getElementsByName('blue_mode'),
			R_mode2 = document.getElementsByName('red_mode'),
			G_mode2 = document.getElementsByName('green_mode'),
			B_mode2 = document.getElementsByName('blue_mode'),
			H_mode = document.getElementsByName('hue_mode'),
			H_mode2 = document.getElementsByName('hue_mode')

		var R = document.getElementsByName("r"),
			G = document.getElementsByName("g"),
			B = document.getElementsByName("b"),
			H = document.getElementsByName("h"),
			S = document.getElementsByName("s"),
			L = document.getElementsByName("l"),
			A = document.getElementsByName("a"),
			AHSLA = document.getElementsByName("a_hsl");


		// Inputs de RANGE SLIDERS
		var H_RANGE_INPUT_1 = document.getElementsByName("h_range_input_1"),
			S_RANGE_INPUT_1 = document.getElementsByName("s_range_input_1"),
			L_RANGE_INPUT_1 = document.getElementsByName("l_range_input_1"),
			AHSLA_RANGE_INPUT_1 = document.getElementsByName("ahsla_range_input_1"),

			H_RANGE_INPUT_2 = document.getElementsByName("h_range_input_2"),
			S_RANGE_INPUT_2 = document.getElementsByName("s_range_input_2"),
			L_RANGE_INPUT_2 = document.getElementsByName("l_range_input_2"),
			AHSLA_RANGE_INPUT_2 = document.getElementsByName("ahsla_range_input_2"),

			R_RANGE_INPUT_1 = document.getElementsByName("r_range_input_1"),
			G_RANGE_INPUT_1 = document.getElementsByName("g_range_input_1"),
			B_RANGE_INPUT_1 = document.getElementsByName("b_range_input_1"),
			A_RANGE_INPUT_1 = document.getElementsByName("a_range_input_1");

			R_RANGE_INPUT_2 = document.getElementsByName("r_range_input_2"),
			G_RANGE_INPUT_2 = document.getElementsByName("g_range_input_2"),
			B_RANGE_INPUT_2 = document.getElementsByName("b_range_input_2"),
			A_RANGE_INPUT_2 = document.getElementsByName("a_range_input_2");

		var	R_slider = document.getElementsByName("r_input"),
			G_slider = document.getElementsByName("g_input"),
			B_slider = document.getElementsByName("b_input"),
			A_slider = document.getElementsByName("a_input"),
			H_slider = document.getElementsByName("h_input"),
			S_slider = document.getElementsByName("s_input"),
			L_slider = document.getElementsByName("l_input"),
			AHSLA_slider = document.getElementsByName("a_hsl_input"),

			HA__SLIDER = document.getElementsByName("HA__SLIDER"),

			// SLIDERS de RANGE SLIDERS
			H_RANGE_Slider_1 = document.getElementsByName("h_range_1"),
			H_RANGE_Slider_2 = document.getElementsByName("h_range_2"),
			S_RANGE_Slider_1 = document.getElementsByName("s_range_1"),
			S_RANGE_Slider_2 = document.getElementsByName("s_range_2"),
			L_RANGE_Slider_1 = document.getElementsByName("l_range_1"),
			L_RANGE_Slider_2 = document.getElementsByName("l_range_2"),
			AHSLA_RANGE_Slider_1 = document.getElementsByName("ahsla_range_1"),
			AHSLA_RANGE_Slider_2 = document.getElementsByName("ahsla_range_2"),

			R_RANGE_Slider_1 = document.getElementsByName("r_range_1"),
			R_RANGE_Slider_2 = document.getElementsByName("r_range_2"),
			G_RANGE_Slider_1 = document.getElementsByName("g_range_1"),
			G_RANGE_Slider_2 = document.getElementsByName("g_range_2"),
			B_RANGE_Slider_1 = document.getElementsByName("b_range_1"),
			B_RANGE_Slider_2 = document.getElementsByName("b_range_2"),
			A_RANGE_Slider_1 = document.getElementsByName("a_range_1"),
			A_RANGE_Slider_2 = document.getElementsByName("a_range_2"),

			// Fin de variables variables

			valor_r = 0,
			valor_g = 0,
			valor_b = 0,
			valor_a = 1,
			valor_ahsla = 1,
			valor_h = 0,
			valor_s = 0,
			valor_l = 0,
			rgba_string,
			rgb_string,
			hsla_string,
			hsl_string,
			hex_code = "#000000";

			function hexToComplimentary(hex) {

		    // Convert hex to rgb
		    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
		    var rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16); }).join(',') + ')';

		    // Get array of RGB values
		    rgb = rgb.replace(/[^\d,]/g, '').split(',');

		    var r = rgb[0], g = rgb[1], b = rgb[2];

		    // Convert RGB to HSL
		    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
		    r /= 255.0;
		    g /= 255.0;
		    b /= 255.0;
		    var max = Math.max(r, g, b);
		    var min = Math.min(r, g, b);
		    var h, s, l = (max + min) / 2.0;

		    if(max == min) {
		        h = s = 0;  //achromatic
		    } else {
		        var d = max - min;
		        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

		        if(max == r && g >= b) {
		            h = 1.0472 * (g - b) / d ;
		        } else if(max == r && g < b) {
		            h = 1.0472 * (g - b) / d + 6.2832;
		        } else if(max == g) {
		            h = 1.0472 * (b - r) / d + 2.0944;
		        } else if(max == b) {
		            h = 1.0472 * (r - g) / d + 4.1888;
		        }
		    }

		    h = h / 6.2832 * 360.0 + 0;

		    // Shift hue to opposite side of wheel and convert to [0-1] value
		    h+= 180;
		    if (h > 360) { h -= 360; }
		    h /= 360;

		    // Convert h s and l values into r g and b values
		    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
		    if(s === 0){
		        r = g = b = l; // achromatic
		    } else {
		        var hue2rgb = function hue2rgb(p, q, t){
		            if(t < 0) t += 1;
		            if(t > 1) t -= 1;
		            if(t < 1/6) return p + (q - p) * 6 * t;
		            if(t < 1/2) return q;
		            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		            return p;
		        };

		        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		        var p = 2 * l - q;

		        r = hue2rgb(p, q, h + 1/3);
		        g = hue2rgb(p, q, h);
		        b = hue2rgb(p, q, h - 1/3);
		    }

		    r = Math.round(r * 255);
		    g = Math.round(g * 255); 
		    b = Math.round(b * 255);

		    // Convert r b and g values to hex
		    rgb = b | (g << 8) | (r << 16); 
		    return "#" + (0x1000000 | rgb).toString(16).substring(1);
		}  

		function ConvertHarmonies (hex) {
			let complement = hexToComplimentary(hex)
			document.querySelector(".complement").style.backgroundColor = complement
		}

		var colorLabel, colorStrip,
		ctx1, ctx2, rgbaColor, width1, height1, width2, height2, colorBlock;
		var drag = false;

		function DrawPicker (id, strip, label, cl) {
			colorBlock = document.getElementsByName("color-block")[cl] //document.getElementById(id);
			ctx1 = colorBlock.getContext('2d');
			width1 = colorBlock.width;
			height1 = colorBlock.height;

			colorStrip =  document.getElementsByName("color-strip")[cl] //document.getElementById(strip);
			ctx2 = colorStrip.getContext('2d');
			width2 = colorStrip.width;
			height2 = colorStrip.height;

			colorLabel = document.getElementById(label);

			var x = 0;
			var y = 0;

			rgbaColor = 'rgba(255,0,0,1)';

			ctx1.rect(0, 0, width1, height1);
			fillGradient(cl);

			ctx2.rect(0, 0, width2, height2);
			var grd1 = ctx2.createLinearGradient(0, 0, 0, height1);
			grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
			grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
			grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
			grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
			grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
			grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
			grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
			ctx2.fillStyle = grd1;
			ctx2.fill();

			function click(e) {
			  x = e.offsetX;
			  y = e.offsetY;
			  var imageData = ctx2.getImageData(x, y, 1, 1).data;
			  rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ', 1)';

			  Estripsito[cl].style.top = (y - 130) + "px"

			  hex_code = rgb2hex(rgbaColor)

			  Hex_input[cl].value =  hex_code;

			  var hsl = rgbToHsl(imageData[0],imageData[1], imageData[2])

			  R[cl].value = imageData[0]
			  G[cl].value = imageData[1]
			  B[cl].value = imageData[2]


			  R_slider[cl].value = imageData[0]
			  G_slider[cl].value = imageData[1]
			  B_slider[cl].value = imageData[2]

			  H[cl].value = 360 - hsl[0]
			  S[cl].value = hsl[1]
			  L[cl].value = hsl[2]

			  H_slider[cl].value = hsl[0]
			  S_slider[cl].value = hsl[1]
			  L_slider[cl].value = hsl[2]

			  HA__SLIDER[cl].value = hsl[0] 

			  HSLA_MODE[cl].value = hsl[0]
			  HSLA_MODE2[cl].value = hsl[1]
			  HSLA_MODE3[cl].value = hsl[2]

			  RGBA_MODE[cl].value = imageData[0];
			  RGBA_MODE2[cl].value = imageData[1];
			  RGBA_MODE3[cl].value = imageData[2];

			  changeBackgroundSlidersHSL(hsl[0])

			  Hex_input[cl].value =  hex_code;

			  fillGradient(cl);
			}

			function changeBackgroundSlidersHSL(h) {
				var backgroundS = "-webkit-linear-gradient(left, hsla("+ h +", 0%, 50%, 0.78),hsla(" + h + ", 20%, 50%, 0.78),hsla(" + h +", 40%, 50%, 0.78),hsla(" + h + ", 60%, 50%, 0.78),hsla(" +  h + ", 80%, 50%, 0.78),hsla(" + h + ", 100%, 50%, 0.78))"

				S_slider[cl].style.backgroundImage = backgroundS;

				var backgroundL = "-webkit-linear-gradient(left, hsla("+ h +", 45%, 50%, 0),hsla("+ h +", 45%, 50%, 0.2),hsla(" + h + ", 45%, 50%, 0.4),hsla(" + h + ", 45%, 50%, 0.6000000000000001),hsla(" + h + ", 45%, 50%, 0.8),hsla(" + h + ", 45%, 50%, 1))"
				L_slider[cl].style.backgroundImage = backgroundL;
			}

			colorStrip.addEventListener("click", click, false);
			colorStrip.addEventListener("mousedown", click, false);

			colorBlock.addEventListener("mousedown", function (e) {
				mousedown(e, cl)
			}, false);
			colorBlock.addEventListener("mouseup", function (e) {
				mouseup(e)
			}, false);
			colorBlock.addEventListener("mousemove", function (e) {
				mousemove(e, cl)
			}, false);

		}

			function mousedown(e, cl) {
			  drag = true;
			  changeColor(e, cl);
			}

			function mousemove(e, cl) {
			  if (drag) {
			    //changeColor(e, cl);
			  }
			}

			function mouseup(e) {
			  drag = false;
			}

			function changeColor(e, cl) {
			 	x = e.offsetX;
			  	y = e.offsetY;
			  	var imageData = ctx1.getImageData(x, y, 1, 1).data;
			  	rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',' + '1)';

			  	Pickersito[cl].style.left = x -115  + "px";
			  	Pickersito[cl].style.top = y - 120 + "px";

			  	hex_code = rgb2hex(rgbaColor)

			  	Hex_input[cl].value =  hex_code;

			  	var hsl = rgbToHsl(imageData[0],imageData[1], imageData[2])

			  	R[cl].value = imageData[0]
			  	G[cl].value = imageData[1]
			  	B.value = imageData[2]


			  	R_slider[cl].value = imageData[0]
			  	G_slider[cl].value = imageData[1]
			  	B_slider[cl].value = imageData[2]

			  	H[cl].value = hsl[0]
			  	S[cl].value = hsl[1]
			  	L[cl].value = hsl[2]

			  	H_slider[cl].value = hsl[0]
			  	S_slider[cl].value = hsl[1]
			  	L_slider[cl].value = hsl[2]

			  	HSLA_MODE[cl].value = hsl[0]
			  	HSLA_MODE2[cl].value = hsl[1]
			  	HSLA_MODE3[cl].value = hsl[2]

			  	RGBA_MODE[cl].value = imageData[0];
			  	RGBA_MODE2[cl].value = imageData[1];
			 	RGBA_MODE3[cl].value = imageData[2];

			 	document.getElementsByName("color-label")[cl].style.backgroundColor = rgbaColor;
			}

		function fillGradient(cl) {

			colorBlock = document.getElementsByName("color-block")[cl];

			ctx1 = colorBlock.getContext('2d');
			  ctx1.fillStyle = rgbaColor;
			  ctx1.fillRect(0, 0, width1, height1);
			  var grdWhite = ctx2.createLinearGradient(0, 0, width1, 0);
			  grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
			  grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
			  ctx1.fillStyle = grdWhite;
			  ctx1.fillRect(0, 0, width1, height1);

			  var grdBlack = ctx2.createLinearGradient(0, 0, 0, height1);
			  grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
			  grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
			  ctx1.fillStyle = grdBlack;
			  ctx1.fillRect(0, 0, width1, height1);

			  hex_code = rgb2hex(rgbaColor)

			  Hex_input[cl].value =  hex_code;
			}

			function changeColorFromInput (rgba, cl) {
					rgbaColor = rgba;

					document.getElementsByName("color-label")[cl].style.backgroundColor = rgbaColor;

					var hex_code2 = rgb2hex(rgbaColor)

				    Hex_input[cl].value =  hex_code2;
					fillGradient(cl);
		    }


		var mathRound = Math.round,
		    mathMin = Math.min,
		    mathMax = Math.max,
		    mathRandom = Math.random;

		function hslToRgb(h, s, l){

			h = h / 360

		    s = s / 100

		    l = l / 100

		    var r, g, b;

		    if(s == 0){
		        r = g = b = l; // achromatic
		    }else{
		        var hue2rgb = function hue2rgb(p, q, t){
		            if(t < 0) t += 1;
		            if(t > 1) t -= 1;
		            if(t < 1/6) return p + (q - p) * 6 * t;
		            if(t < 1/2) return q;
		            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		            return p;
		        }

		        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		        var p = 2 * l - q;
		        r = hue2rgb(p, q, h + 1/3);
		        g = hue2rgb(p, q, h);
		        b = hue2rgb(p, q, h - 1/3);
		    }

		    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
		}

		function rgb2hex(rgb){
			 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
			 return (rgb && rgb.length === 4) ? "#" +
			  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
		}

		function isPercentage(n) {
    		return typeof n === "string" && n.indexOf('%') != -1;
		}

		function isOnePointZero(n) {
    		return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
		}

		function bound01(n, max) {
		    if (isOnePointZero(n)) { n = "100%"; }

		    var processPercent = isPercentage(n);
		    n = mathMin(max, mathMax(0, parseFloat(n)));


		    if (processPercent) {
		        n = parseInt(n * max, 10) / 100;
		    }


		    if ((Math.abs(n - max) < 0.000001)) {
		        return 1;
		    }


		    return (n % max) / parseFloat(max);
		}

		function rgbToHsl(r, g, b) {

		    r = bound01(r, 255);
		    g = bound01(g, 255);
		    b = bound01(b, 255);

		    var max = mathMax(r, g, b), min = mathMin(r, g, b);
		    var h, s, l = (max + min) / 2;

		    if(max == min) {
		        h = s = 0; // achromatic
		    }
		    else {
		        var d = max - min;
		        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		        switch(max) {
		            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
		            case g: h = (b - r) / d + 2; break;
		            case b: h = (r - g) / d + 4; break;
		        }

		        h /= 6;
		    }

		    h = parseInt(h * 360)

		    s = parseInt(s * 100)

		    l = parseInt(l * 100)

		    return [h, s, l]
		}

       function hslToHex(h, s, l) {
		  h /= 360;
		  s /= 100;
		  l /= 100;
		  let r, g, b;
		  if (s === 0) {
		    r = g = b = l; // achromatic
		  } else {
		    const hue2rgb = (p, q, t) => {
		      if (t < 0) t += 1;
		      if (t > 1) t -= 1;
		      if (t < 1 / 6) return p + (q - p) * 6 * t;
		      if (t < 1 / 2) return q;
		      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		      return p;
		    };
		    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		    const p = 2 * l - q;
		    r = hue2rgb(p, q, h + 1 / 3);
		    g = hue2rgb(p, q, h);
		    b = hue2rgb(p, q, h - 1 / 3);
		  }
		  const toHex = x => {
		    const hex = Math.round(x * 255).toString(16);
		    return hex.length === 1 ? '0' + hex : hex;
		  };
		  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
		}

			function isEmpty(obj) {
			    for(var prop in obj) {
			        if(obj.hasOwnProperty(prop))
			            return false;
			    }

			    return JSON.stringify(obj) === JSON.stringify({});
			}

			function addColorRGBToObject (key, ColorLocked, cl) {
				valor_r = parseInt(R[cl].value)
				valor_g = parseInt(G[cl].value)
				valor_b = parseInt(B[cl].value)
				valor_a = parseFloat(valor_a)

				var hsl = rgbToHsl(valor_r, valor_g, valor_b)

				varlor_h = hsl[0]
				valor_s = hsl[1]
				valor_l = hsl[2]

				if ( isEmpty(colorsObject[ key ]) || colorsObject[key] === undefined ) {

					switch (ColorLocked) {
						case "red":
							colorsObject[ key ] = {
								"locks": {
									"red": valor_r
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "green":
							colorsObject[ key ] = {
								"locks": {
									"green": valor_g
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "blue":

							colorsObject[ key ] = {
								"locks": {
									"blue": valor_b
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						default:
							colorsObject[ key ] = {
								"locks": {
									"alpha": valor_a
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

					}


				} else {


					switch (ColorLocked) {
						case "red":
							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"red": valor_r
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "green":
							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"green": valor_g
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "blue":

							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"blue": valor_b
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						default:
							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"alpha": valor_a
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": hsl[0],
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

					}


				}

				window.PendingTastes.addToPendingTaste({
					tasteKey: "Colors",
					objectToAdd: ColorLocked
				});

				return colorsObject

			}

			function addColorHSLToObject (key, ColorLocked, cl) {
				valor_h = parseInt(H[cl].value)
				valor_s = parseInt(S[cl].value)
				valor_l = parseInt(L[cl].value)
				valor_a = parseFloat(valor_a)

				var rgb = hslToRgb(valor_h, valor_s, valor_l)

				varlor_r = rgb[0]
				valor_g = rgb[1]
				valor_b = rgb[2]

				if ( isEmpty(colorsObject[ key ]) || colorsObject[key] === undefined ) {

					switch (ColorLocked) {
						case "hue":
							colorsObject[ key ] = {
								"locks": {
									"hue": valor_h
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "sat":
							colorsObject[ key ] = {
								"locks": {
									"saturation": valor_s
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "light":

							colorsObject[ key ] = {
								"locks": {
									"lightness": valor_l
								},
								"harmony": "all",
								"red": rgb[0],
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						default:
							colorsObject[ key ] = {
								"locks": {
									"alpha": valor_a
								},
								"harmony": "all",
								"red": rgb[0],
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

					}


				} else {


					switch (ColorLocked) {
						case "hue":
							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"hue": valor_h
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "sat":
							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"saturation": valor_s
								},
								"harmony": "all",
								"red": valor_r,
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						case "light":

							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"lightness": valor_l
								},
								"harmony": "all",
								"red": rgb[0],
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

						 break;
						default:
							colorsObject[ key ] = {
								"locks": {
									...colorsObject[ key ]["locks"],
									"alpha": valor_a
								},
								"harmony": "all",
								"red": rgb[0],
								"green": valor_g,
								"blue": valor_b,
								"hue": valor_h,
								"saturation": valor_s,
								"lightness": valor_l,
								"alpha": valor_a
							}

					}


				}

				window.PendingTastes.addToPendingTaste({
					tasteKey: "Colors",
					objectToAdd: ColorLocked
				});

				return colorsObject


			}




			function EventsToCall(cl) {

				let __color = Session.get('color');

				// Eventos para bloquear colores
			red_lock[cl].addEventListener('click', function (e) {

				let __result = addColorRGBToObject( __color, "red", cl)

			})

			green_lock[cl].addEventListener('click', function (e) {
				addColorRGBToObject( __color, "green", cl)
			})

			blue_lock[cl].addEventListener('click', function (e) {
				addColorRGBToObject( __color, "blue", cl)
			})

			alpha_lock[cl].addEventListener('click', function (e) {
				addColorRGBToObject( __color, "alpha",  cl)
			})

			hue_lock[cl].addEventListener('click', function (e) {
				addColorHSLToObject( __color, "hue", cl)
			})

			sat_lock[cl].addEventListener('click', function (e) {
				addColorHSLToObject( __color, "sat", cl)
			})

			alpha_hsla_lock[cl].addEventListener('click', function (e) {
				addColorHSLToObject( __color, "alpha_hsla", cl)
			})

			ligth_lock[cl].addEventListener('click', function (e) {
				addColorHSLToObject( __color, "light", cl)
			})

				// Eventos para cambiar de modo de vista de sliders por medio de los inputs
			RGBA_RANGE_MODE_BTN[cl].addEventListener('click', function (e) {
				document.getElementsByClassName('__tree')[cl].classList.add("__active");
				document.getElementsByClassName('__four')[cl].classList.remove("__active");

			})

			HSLA_RANGE_MODE_BTN[cl].addEventListener('click', function (e) {
				document.getElementsByClassName('__tree')[cl].classList.remove("__active");
				document.getElementsByClassName('__four')[cl].classList.add("__active");

			})




				// RANGE

			EXACT__MATCH_MODE_BTN[cl].addEventListener('click', function (e) {
				
				RANGE_MODE[cl].classList.remove('__active')
				EXACT_MODE[cl].classList.add('__active')

			})

			RANGE_MODE_BTN[cl].addEventListener('click', function (e) {
				EXACT_MODE[cl].classList.remove('__active')
				RANGE_MODE[cl].classList.add('__active')

			})

				// EXACT
			RGBA_MODE_BTN[cl].addEventListener('click', function (e) {
				document.getElementsByClassName('__two')[cl].classList.remove("__active");
				document.getElementsByClassName('__one')[cl].classList.add("__active");
			})

			HSLA_MODE_BTN[cl].addEventListener('click', function (e) {
				document.getElementsByClassName('__one')[cl].classList.remove("__active");
				document.getElementsByClassName('__two')[cl].classList.add("__active");
			})

			// EVENTOS DE LOS INPUTS DEL COSTADO

			RGBA_MODE[cl].addEventListener('focus', function (e) {

				document.getElementsByClassName('__two')[cl].classList.remove("__active");
				document.getElementsByClassName('__one')[cl].classList.add("__active");

				valor_r = e.target.value

				R[cl].value = valor_r;
				R_slider[cl].value = valor_r;

				G[cl].value = RGBA_MODE2[cl].value;
				G_slider[cl].value = RGBA_MODE2[cl].value;

				B[cl].value = RGBA_MODE3[cl].value;
				B_slider[cl].value = RGBA_MODE3[cl].value;
			})

			HSLA_MODE[cl].addEventListener('focus', function (e) {
				document.getElementsByClassName('__one')[cl].classList.remove("__active");
				document.getElementsByClassName('__two')[cl].classList.add("__active");

				valor_h = e.target.value;

				H[cl].value = valor_h;
				H_slider[cl].value = valor_h;

				S[cl].value = HSLA_MODE2[cl].value;
				S_slider[cl].value = HSLA_MODE2[cl].value;

				L[cl].value = HSLA_MODE3[cl].value
				L_slider[cl].value = HSLA_MODE3[cl].value;
			})

			RGBA_MODE2[cl].addEventListener('focus', function (e) {
				document.getElementsByClassName('__two')[cl].classList.remove("__active");
				document.getElementsByClassName('__one')[cl].classList.add("__active");

				valor_g = e.target.value

				R[cl].value = RGBA_MODE[cl].value;
				R_slider[cl].value = RGBA_MODE[cl].value;

				G[cl].value = valor_g;
				G_slider[cl].value = valor_g;

				B[cl].value = RGBA_MODE3[cl].value;
				B_slider[cl].value = RGBA_MODE3[cl].value;
			})

			HSLA_MODE2[cl].addEventListener('focus', function (e) {

				document.getElementsByClassName('__one')[cl].classList.remove("__active");
				document.getElementsByClassName('__two')[cl].classList.add("__active");

				valor_s = e.target.value;

				H[cl].value = HSLA_MODE[cl].value;
				H_slider[cl].value = HSLA_MODE[cl].value;

				S[cl].value = valor_s;
				S_slider[cl].value = valor_s;

				L[cl].value = HSLA_MODE3[cl].value
				L_slider[cl].value = HSLA_MODE3[cl].value;
			})

			RGBA_MODE3[cl].addEventListener('focus', function (e) {

				document.getElementsByClassName('__two')[cl].classList.remove("__active");
				document.getElementsByClassName('__one')[cl].classList.add("__active");

				valor_b = e.target.value

				R[cl].value = RGBA_MODE[cl].value;
				R_slider[cl].value = RGBA_MODE[cl].value;

				G[cl].value = RGBA_MODE2[cl].value;
				G_slider[cl].value = RGBA_MODE2[cl].value;

				B[cl].value = valor_b;
				B_slider[cl].value = valor_b;
			})

			HSLA_MODE3[cl].addEventListener('focus', function (e) {

				document.getElementsByClassName('__one')[cl].classList.remove("__active");
				document.getElementsByClassName('__two')[cl].classList.add("__active");

				valor_l = e.target.value;

				H[cl].value = HSLA_MODE[cl].value;
				H_slider[cl].value = HSLA_MODE[cl].value;

				S[cl].value = HSLA_MODE2[cl].value;
				S_slider[cl].value = HSLA_MODE2[cl].value;

				L[cl].value = valor_l;
				L_slider[cl].value = valor_l;
			})


				// Eventos para manipular los inputs

				RGBA_MODE[cl].addEventListener('change', function (e){
				var valor_r = e.target.value

				if (valor_r > 255 ) {
					return
				}

				R[cl].value = valor_r;

				rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

				rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

				changeColorFromInput(rgba_string, cl)

				hex_code = rgb2hex(rgba_string)

				Hex_input[cl].value =  hex_code;

				ConvertHarmonies(hex_code)

				RGBA_MODE[cl].value = valor_r;

				var hsl = rgbToHsl(valor_r, valor_g, valor_b)
				HSLA_MODE[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_slider[cl].value = valor_r;
			})

			RGBA_MODE2[cl].addEventListener('change', function (e){

				var valor_g = e.target.value

				if (valor_g > 255 ) {
					return
				}

				G[cl].value = valor_g

				rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

				rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

				changeColorFromInput(rgba_string, cl)

				hex_code = rgb2hex(rgba_string)

				Hex_input[cl].value =  hex_code;

				ConvertHarmonies(hex_code)

				RGBA_MODE2[cl].value = valor_g;

				var hsl = rgbToHsl(valor_r, valor_g, valor_b)
				HSLA_MODE[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				G_slider[cl].value = valor_g;
			})

			RGBA_MODE3[cl].addEventListener('change', function (e){
				var valor_b = e.target.value

				if (valor_b > 255 ) {
					return
				}
				B.value = valor_b

				rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

				rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

				changeColorFromInput(rgba_string, cl)

				hex_code = rgb2hex(rgba_string)

				Hex_input[cl].value =  hex_code;

				ConvertHarmonies(hex_code)

				RGBA_MODE3[cl].value = valor_b;

				var hsl = rgbToHsl(valor_r, valor_g, valor_b)
				HSLA_MODE[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]
				B_slider[cl].value = valor_b;
			})


			// Eventos para sincronizar el input con el slider


			HSLA_MODE[cl].addEventListener('change', function (e) {
				valor_h = e.target.value;

				if (valor_h > 360 ) {
					return
				}

				hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

				var rgb = hslToRgb(valor_h, valor_s, valor_l)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_a + ")"

				changeColorFromInput(rgba_string, cl)

				RGBA_MODE[cl].value = rgb[0];
				RGBA_MODE2[cl].value = rgb[1];
				RGBA_MODE3[cl].value = rgb[2];

				H[cl].value = valor_h;
				S[cl].value = valor_s;
				L[cl].value = valor_l;

				hex_code = hslToHex(valor_h, valor_s, valor_l)

				ConvertHarmonies(hex_code)

				Hex_input[cl].value =  hex_code;

				var backgroundS = "-webkit-linear-gradient(left, hsla("+ valor_h +", 0%, 50%, 0.78),hsla(" + valor_h + ", 20%, 50%, 0.78),hsla(" + valor_h +", 40%, 50%, 0.78),hsla(" + valor_h + ", 60%, 50%, 0.78),hsla(" +  valor_h + ", 80%, 50%, 0.78),hsla(" + valor_h + ", 100%, 50%, 0.78))"

				S_slider[cl].style.backgroundImage = backgroundS;

				var backgroundL = "-webkit-linear-gradient(left, hsla("+ valor_h +", 45%, 50%, 0),hsla("+ valor_h +", 45%, 50%, 0.2),hsla(" + valor_h + ", 45%, 50%, 0.4),hsla(" + valor_h + ", 45%, 50%, 0.6000000000000001),hsla(" + valor_h + ", 45%, 50%, 0.8),hsla(" + valor_h +", 45%, 50%, 1))"
				L_slider[cl].style.backgroundImage = backgroundL;

    			H_slider[cl].value = valor_h;
			})

			HSLA_MODE2[cl].addEventListener('change', function (e) {
				valor_s = e.target.value;

				if (valor_s > 100 ) {
					return
				}

				hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

				var rgb = hslToRgb(valor_h, valor_s, valor_l)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_a + ")"

				changeColorFromInput(rgba_string, cl)

				RGBA_MODE[cl].value = rgb[0];
				RGBA_MODE2[cl].value = rgb[1];
				RGBA_MODE3[cl].value = rgb[2];

				H[cl].value = valor_h;
				S[cl].value = valor_s;
				L[cl].value = valor_l;

				hex_code = hslToHex(valor_h, valor_s, valor_l)

				Hex_input[cl].value =  hex_code;

				ConvertHarmonies(hex_code)

    			S_slider[cl].value = valor_s;
			})

			HSLA_MODE3[cl].addEventListener('change', function (e) {
				valor_l = e.target.value;

				if (valor_l > 100 ) {
					return
				}

				hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)";

				var rgb = hslToRgb(valor_h, valor_s, valor_l)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_a + ")"

				changeColorFromInput(rgba_string, cl)

				RGBA_MODE[cl].value = rgb[0];
				RGBA_MODE2[cl].value = rgb[1];
				RGBA_MODE3[cl].value = rgb[2];

				H[cl].value = valor_h;
				S[cl].value = valor_s;
				L[cl].value = valor_l;

				hex_code = hslToHex(valor_h, valor_s, valor_l)

				Hex_input[cl].value =  hex_code;

				ConvertHarmonies(hex_code)

    			L_slider[cl].value = valor_l;
			})

				R[cl].addEventListener("change", function (e) {
					valor_r = e.target.value;

					if (valor_r > 255 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					Hex_input[cl].value =  hex_code;

					ConvertHarmonies(hex_code)

					RGBA_MODE[cl].value = valor_r;

					var hsl = rgbToHsl(valor_r, valor_g, valor_b)

					HSLA_MODE[cl].value = hsl[0]
					HSLA_MODE2[cl].value = hsl[1]
					HSLA_MODE3[cl].value = hsl[2]

	    			R_slider[cl].value = valor_r;
				});

				G[cl].addEventListener("change", function (e){
					valor_g = e.target.value;

					if (valor_g > 255 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					ConvertHarmonies(hex_code)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE2[cl].value = valor_g;

					var hsl = rgbToHsl(valor_r, valor_g, valor_b)
					HSLA_MODE[cl].value = hsl[0]
					HSLA_MODE2[cl].value = hsl[1]
					HSLA_MODE3[cl].value = hsl[2]

	    			G_slider[cl].value = valor_g;
				});

				B[cl].addEventListener("change", function (e){
					valor_b = e.target.value;

					if (valor_b > 255 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					Hex_input[cl].value =  hex_code;

					ConvertHarmonies(hex_code)

					RGBA_MODE3[cl].value = valor_b;

					var hsl = rgbToHsl(valor_r, valor_g, valor_b)

					HSLA_MODE[cl].value = hsl[0]
					HSLA_MODE2[cl].value = hsl[1]
					HSLA_MODE3[cl].value = hsl[2]

	    			B_slider[cl].value = valor_b;
				});

				A[cl].addEventListener("change", function (e){
					valor_a = e.target.value;

					if (valor_a > 1 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					ConvertHarmonies(hex_code)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE4[cl].value = valor_a;

	    			A_slider[cl].value = valor_a;
				});

				H[cl].addEventListener("change", function (e){
					valor_h = e.target.value;

					if (valor_h > 360 ) {
						return
					}

					valor_s = parseInt(HSLA_MODE2[cl].value)
					valor_l = parseInt(HSLA_MODE2[cl].value)


					hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

					var rgb = hslToRgb(valor_h, valor_s, valor_l)

					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_ahsla + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE[cl].value = rgb[0];
					RGBA_MODE2[cl].value = rgb[1];
					RGBA_MODE3[cl].value = rgb[2];

					HSLA_MODE[cl].value = valor_h;
					HSLA_MODE2[cl].value = valor_s;
					HSLA_MODE3[cl].value = valor_l;

					S[cl].value = S_slider[cl].value = valor_s
					L[cl].value = L_slider[cl].value = valor_l

	    			H_slider[cl].value = valor_h;

				});

				S[cl].addEventListener("change", function (e){
					valor_s = e.target.value;

					if (valor_s > 100 ) {
						return
					}

					hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

					var rgb = hslToRgb(valor_h, valor_s, valor_l)

					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_ahsla + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE[cl].value = rgb[0];
					RGBA_MODE2[cl].value = rgb[1];
					RGBA_MODE3[cl].value = rgb[2];


					HSLA_MODE[cl].value = valor_h;
					HSLA_MODE2[cl].value = valor_s;
					HSLA_MODE3[cl].value = valor_l;

	    			S_slider[cl].value = valor_s;
				});

				L[cl].addEventListener("change", function (e){
					valor_l = e.target.value;

					if (valor_l > 100 ) {
						return
					}

					hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

					var rgb = hslToRgb(valor_h, valor_s, valor_l)

					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_ahsla + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE[cl].value = rgb[0];
					RGBA_MODE2[cl].value = rgb[1];
					RGBA_MODE3[cl].value = rgb[2];

					HSLA_MODE[cl].value = valor_h;
					HSLA_MODE2[cl].value = valor_s;
					HSLA_MODE3[cl].value = valor_l;

	    			L_slider[cl].value = valor_l;
				});

				AHSLA[cl].addEventListener("input", function (e){
					valor_ahsla = e.target.value;

					if (valor_ahsla > 1 ) {
						return
					}

					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_ahsla + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE4[cl].value = valor_ahsla;

	    			AHSLA_slider[cl].value = valor_ahsla;
				});

				// Eventos para sincronizar el slider con los inputs

				R_slider[cl].addEventListener("input", function (e){
					valor_r = e.target.value;

					if (valor_r > 255 ) {
						return
					}

					rgba_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"
					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE[cl].value = valor_r;

					var hsl = rgbToHsl(valor_r, valor_g, valor_b)

					HSLA_MODE[cl].value = hsl[0]
					HSLA_MODE2[cl].value = hsl[1]
					HSLA_MODE3[cl].value = hsl[2]

	    			R[cl].value = valor_r;

	    			ConvertHarmonies(hex_code)
				});



				G_slider[cl].addEventListener("input", function (e){
					valor_g = e.target.value;

					if (valor_g > 255 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE2[cl].value = valor_g;

					var hsl = rgbToHsl(valor_r, valor_g, valor_b)

					HSLA_MODE[cl].value = hsl[0]
					HSLA_MODE2[cl].value = hsl[1]
					HSLA_MODE3[cl].value = hsl[2]

	    			G[cl].value = valor_g;

	    			ConvertHarmonies(hex_code)
				});

				B_slider[cl].addEventListener("input", function (e){
					valor_b = e.target.value;

					if (valor_b > 255 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"

					rgb_string = "rgb(" + valor_r + ", " + valor_g + ", " + valor_b +  ")"

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE3[cl].value = valor_b;

					var hsl = rgbToHsl(valor_r, valor_g, valor_b)

					HSLA_MODE[cl].value = hsl[0]
					HSLA_MODE2[cl].value = hsl[1]
					HSLA_MODE3[cl].value = hsl[2]

	    			B[cl].value = valor_b;

	    			ConvertHarmonies(hex_code)
				});

				A_slider[cl].addEventListener("input", function (e){
					valor_a = e.target.value;

					if (valor_a > 1 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")"
					hex_code = rgb2hex(rgba_string)
					changeColorFromInput(rgba_string, cl)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE4[cl].value = valor_a;

	    			A[cl].value = valor_a;

	    			ConvertHarmonies(hex_code)
				});

				// HSLA
				H_slider[cl].addEventListener("input", function (e){
					valor_h = e.target.value;

					HA__SLIDER[cl].value = valor_h

					if (valor_h > 360 ) {
						return
					}

					valor_s = parseInt(HSLA_MODE2[cl].value)
					valor_l = parseInt(HSLA_MODE2[cl].value)

					var backgroundS = "-webkit-linear-gradient(left, hsla("+ valor_h +", 0%, 50%, 0.78),hsla(" + valor_h + ", 20%, 50%, 0.78),hsla(" + valor_h +", 40%, 50%, 0.78),hsla(" + valor_h + ", 60%, 50%, 0.78),hsla(" +  valor_h + ", 80%, 50%, 0.78),hsla(" + valor_h + ", 100%, 50%, 0.78))"

					S_slider[cl].style.backgroundImage = backgroundS;

					var backgroundL = "-webkit-linear-gradient(left, hsla("+ valor_h +", 45%, 50%, 0),hsla("+ valor_h +", 45%, 50%, 0.2),hsla(" + valor_h + ", 45%, 50%, 0.4),hsla(" + valor_h + ", 45%, 50%, 0.6000000000000001),hsla(" + valor_h + ", 45%, 50%, 0.8),hsla(" + valor_h + ", 45%, 50%, 1))"
					L_slider[cl].style.backgroundImage = backgroundL;

	                Hex_input[cl].value = hex_code = hslToHex(valor_h, valor_s, valor_l)

	                hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

					var rgb = hslToRgb(valor_h, valor_s, valor_l)

					
					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_a + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE[cl].value = rgb[0];
					RGBA_MODE2[cl].value = rgb[1];
					RGBA_MODE3[cl].value = rgb[2];

					HSLA_MODE[cl].value = valor_h;
					HSLA_MODE2[cl].value = valor_s;
					HSLA_MODE3[cl].value = valor_l;

					S[cl].value = S_slider[cl].value = valor_s
					L[cl].value = L_slider[cl].value = valor_l

	    			H[cl].value = valor_h;

	    			ConvertHarmonies(hex_code)
				});

				S_slider[cl].addEventListener("input", function (e){
					valor_s = e.target.value;

					if (valor_s > 100 ) {
						return
					}

					hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

					Hex_input[cl].value = hex_code = hslToHex(valor_h, valor_s, valor_l)

					var rgb = hslToRgb(valor_h, valor_s, valor_l)

					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_a + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE[cl].value = rgb[0];
					RGBA_MODE2[cl].value = rgb[1];
					RGBA_MODE3[cl].value = rgb[2];

					HSLA_MODE[cl].value = valor_h;
					HSLA_MODE2[cl].value = valor_s;
					HSLA_MODE3[cl].value = valor_l;

	    			S[cl].value = valor_s;

	    			ConvertHarmonies(hex_code)
				});

				L_slider[cl].addEventListener("input", function (e){
					valor_l = e.target.value;

					if (valor_l > 100 ) {
						return
					}

					hsl_string = "hsl(" + valor_h + ", " + valor_s + "%, " + valor_l +  "%)"

					Hex_input[cl].value = hex_code = hslToHex(valor_h, valor_s, valor_l)

					var rgb = hslToRgb(valor_h, valor_s, valor_l)

					rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + valor_a + ")"

					changeColorFromInput(rgba_string, cl)

					RGBA_MODE[cl].value = rgb[0];
					RGBA_MODE2[cl].value = rgb[1];
					RGBA_MODE3[cl].value = rgb[2];

					HSLA_MODE[cl].value = valor_h;
					HSLA_MODE2[cl].value = valor_s;
					HSLA_MODE3[cl].value = valor_l;

	    			L[cl].value = valor_l;

	    			ConvertHarmonies(hex_code)
				});

				AHSLA_slider[cl].addEventListener("input", function (e){
					valor_a = e.target.value;

					if (valor_a > 1 ) {
						return
					}

					rgba_string = "rgba(" + valor_r + ", " + valor_g + ", " + valor_b + ", " + valor_a + ")";

					changeColorFromInput(rgba_string, cl)

					hex_code = rgb2hex(rgba_string)

					Hex_input[cl].value =  hex_code;

					RGBA_MODE4[cl].value = valor_a;

	    			AHSLA[cl].value = valor_a;

	    			ConvertHarmonies(hex_code)
				});

			H_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				H_RANGE_INPUT_1[cl].value = e.target.value;

				var h = parseInt(e.target.value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var backgroundS1 = "-webkit-linear-gradient(left, hsla("+ h +", 0%, 50%, 0.78),hsla(" + h + ", 20%, 50%, 0.78),hsla(" + h +", 40%, 50%, 0.78),hsla(" + h + ", 60%, 50%, 0.78),hsla(" +  h + ", 80%, 50%, 0.78),hsla(" + h + ", 100%, 50%, 0.78))"

				S_RANGE_Slider_1[cl].style.backgroundImage = backgroundS1
				S_RANGE_Slider_2[cl].style.backgroundImage = backgroundS1


				ConvertHarmonies(hex_code)

				var backgroundL1 = "-webkit-linear-gradient(left, hsla("+ h +", 45%, 50%, 0),hsla("+ h +", 45%, 50%, 0.2),hsla(" + valor_h + ", 45%, 50%, 0.4),hsla(" + h + ", 45%, 50%, 0.6000000000000001),hsla(" + h + ", 45%, 50%, 0.8),hsla(" + h + ", 45%, 50%, 1))"
				L_RANGE_Slider_1[cl].style.backgroundImage = backgroundL1;
				L_RANGE_Slider_2[cl].style.backgroundImage = backgroundL1;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)

			})

			H_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 360) return
				H_RANGE_Slider_1[cl].value = e.target.value;

				var h = parseInt(e.target.value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)

				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var backgroundS1 = "-webkit-linear-gradient(left, hsla("+ h +", 0%, 50%, 0.78),hsla(" + h + ", 20%, 50%, 0.78),hsla(" + h +", 40%, 50%, 0.78),hsla(" + h + ", 60%, 50%, 0.78),hsla(" +  h + ", 80%, 50%, 0.78),hsla(" + h + ", 100%, 50%, 0.78))"

				S_RANGE_Slider_1[cl].style.backgroundImage = backgroundS1
				S_RANGE_Slider_2[cl].style.backgroundImage = backgroundS1

				var backgroundL1 = "-webkit-linear-gradient(left, hsla("+ h +", 45%, 50%, 0),hsla("+ h +", 45%, 50%, 0.2),hsla(" + valor_h + ", 45%, 50%, 0.4),hsla(" + h + ", 45%, 50%, 0.6000000000000001),hsla(" + h + ", 45%, 50%, 0.8),hsla(354, 45%, 50%, 1))"
				L_RANGE_Slider_1[cl].style.backgroundImage = backgroundL1;
				L_RANGE_Slider_2[cl].style.backgroundImage = backgroundL1;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			}) 

			H_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				H_RANGE_INPUT_2[cl].value = e.target.value

				var h = parseInt(e.target.value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)

				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			H_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 360) return
				H_RANGE_Slider_2[cl].value = e.target.value

				var h = parseInt(e.target.value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)

				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode.value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l
				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			S_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				S_RANGE_INPUT_1.value = e.target.value;

				var h = parseInt(H_RANGE_INPUT_1[cl].value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l
				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			S_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 100) return
				S_RANGE_Slider_1[cl].value = e.target.value;

				var h = parseInt(H_RANGE_INPUT_1[cl].value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l
				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			S_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				S_RANGE_INPUT_2[cl].value = e.target.value

				var h = parseInt(H_RANGE_INPUT_2[cl].value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			S_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 100) return
				S_RANGE_Slider_2[cl].value = e.target.value
				var h = parseInt(H_RANGE_INPUT_2[cl].value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			L_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				L_RANGE_INPUT_1[cl].value = e.target.value
				var h = parseInt(H_RANGE_INPUT_1[cl].value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			L_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 100) return
				L_RANGE_Slider_1[cl].value = e.target.value

				var h = parseInt(H_RANGE_INPUT_1[cl].value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			L_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				L_RANGE_INPUT_2[cl].value = e.target.value;

				var h = parseInt(H_RANGE_INPUT_2[cl].value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]


				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat(RGBA_MODE4[cl].value)

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			L_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 100) return
				L_RANGE_Slider_2[cl].value = e.target.value;

				var h = parseInt(H_RANGE_INPUT_2[cl].value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)
				var hex_code = hslToHex( h, s, l)
				ConvertHarmonies(hex_code)

				R_mode[cl].value = rgb[0]
				G_mode[cl].value = rgb[1]
				B_mode[cl].value= rgb[2]

				H_mode[cl].value = h
				HSLA_MODE2[cl].value = s
				HSLA_MODE3[cl].value = l

				Hex_input[cl].value = hex_code;

				var a = parseFloat( RGBA_MODE4[cl].value )

				rgba_string = "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)

			})


			AHSLA_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				A_RANGE_INPUT_1[cl].value = e.target.value;
				AHSLA_RANGE_INPUT_1[cl].value = e.target.value;
				RGBA_MODE4[cl].value = A_RANGE_INPUT_1[cl].value;

				var h = parseInt(H_RANGE_INPUT_1[cl].value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var a = parseFloat( A_RANGE_INPUT_1[cl].value )
				var rgb = hslToRgb(h, s, l)

				rgba_string = "rgba(" + h + ", " + s + ", " + l + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})


			AHSLA_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 1) return
				AHSLA_RANGE_Slider_1[cl].value = e.target.value
				RGBA_MODE4[cl].value = AHSLA_RANGE_Slider_1[cl].value;

				var h = parseInt(H_RANGE_INPUT_1[cl].value)
				var s = parseInt(S_RANGE_INPUT_1[cl].value)
				var l = parseInt(L_RANGE_INPUT_1[cl].value)
				var a = parseFloat(A_RANGE_INPUT_1[cl].value)
				var rgb = hslToRgb(h, s, l)

				rgba_string = "rgba(" + h + ", " + s + ", " + l + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			AHSLA_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				A_RANGE_INPUT_2[cl].value = e.target.value
				AHSLA_RANGE_INPUT_2[cl].value = e.target.value
				RGBA_MODE4[cl].value = A_RANGE_INPUT_2[cl].value

				var h = parseInt(H_RANGE_INPUT_2[cl].value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var a = parseFloat(A_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)

				rgba_string = "rgba(" + h + ", " + s + ", " + l + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			AHSLA_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 1) return
				AHSLA_RANGE_Slider_2[cl].value = e.target.value
				RGBA_MODE4[cl].value = AHSLA_RANGE_Slider_2[cl].value

				var h = parseInt(H_RANGE_INPUT_2[cl].value)
				var s = parseInt(S_RANGE_INPUT_2[cl].value)
				var l = parseInt(L_RANGE_INPUT_2[cl].value)
				var a = parseFloat(A_RANGE_INPUT_2[cl].value)
				var rgb = hslToRgb(h, s, l)

				rgba_string = "rgba(" + h + ", " + s + ", " + l + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			// rgba 1

			R_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				R_RANGE_INPUT_1[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)

				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])

				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			R_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 255) return
				R_RANGE_Slider_1[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])


				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			G_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				G_RANGE_INPUT_1[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])

				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			G_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 255) return
				G_RANGE_Slider_1[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				ConvertHarmonies(hex_code)

				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			B_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				B_RANGE_INPUT_1[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])

				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			B_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 255) return
				B_RANGE_Slider_1[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			A_RANGE_Slider_1[cl].addEventListener('input', function (e) {
				A_RANGE_INPUT_1[cl].value = e.target.value

				RGBA_MODE4[cl].value =  e.target.value

				 var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			A_RANGE_INPUT_1[cl].addEventListener('change', function (e) {
				if (e.target.value > 1) return
				A_RANGE_Slider_1[cl].value = e.target.value
				RGBA_MODE4[cl].value =  e.target.value

				 var r = parseInt(R_RANGE_INPUT_1[cl].value)
				var g = parseInt(G_RANGE_INPUT_1[cl].value)
				var b = parseInt(B_RANGE_INPUT_1[cl].value)
				var a = parseFloat(A_RANGE_INPUT_1[cl].value)

				rgba_string = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			// 2
			R_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				R_RANGE_INPUT_2[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			R_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 255) return
				R_RANGE_Slider_2[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			G_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				G_RANGE_INPUT_2[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			G_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 255) return
				G_RANGE_Slider_2[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			B_RANGE_Slider_2[cl].addEventListener('input', function (e) {

				B_RANGE_INPUT_2[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			B_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 255) return
				B_RANGE_Slider_2[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var hsl = rgbToHsl(r, g, b)
				var hex_code = hslToHex(hsl[0], hsl[1], hsl[2])
				ConvertHarmonies(hex_code)

				H_mode[cl].value = hsl[0]
				HSLA_MODE2[cl].value = hsl[1]
				HSLA_MODE3[cl].value = hsl[2]

				R_mode[cl].value = r
				G_mode[cl].value = g
				B_mode[cl].value = b

				Hex_input[cl].value = hex_code;

				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + b + ", " + g + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)
			})

			A_RANGE_Slider_2[cl].addEventListener('input', function (e) {
				A_RANGE_INPUT_2[cl].value = e.target.value
				RGBA_MODE4[cl].value = e.target.value

				var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			A_RANGE_INPUT_2[cl].addEventListener('change', function (e) {
				if (e.target.value > 1) return
				A_RANGE_Slider_2[cl].value = e.target.value;
			    RGBA_MODE4[cl].value =  e.target.value;

			    var r = parseInt(R_RANGE_INPUT_2[cl].value)
				var g = parseInt(G_RANGE_INPUT_2[cl].value)
				var b = parseInt(B_RANGE_INPUT_2[cl].value)
				var a = parseFloat(A_RANGE_INPUT_2[cl].value)

				rgba_string = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

				changeColorFromInput(rgba_string, cl)
			})

			HA__SLIDER[cl].addEventListener('input', function (e) {
				var hue = parseInt(e.target.value)

				var sat = parseInt(S[cl].value),
					ligth = parseInt(L[cl].value),
					red,
					green,
					blue,
					rgb,
					rgba_string,
					hex_code
					a =  parseFloat(RGBA_MODE4[cl].value);

				rgb = hslToRgb(hue, sat, ligth)

				red = rgb[0]
				green = rgb[1]
				blue = rgb[2]

				hex_code = hslToHex(hue, sat, ligth)

				ConvertHarmonies(hex_code)

				R_mode[cl].value = R[cl].value = R_slider[cl].value = red;
				G_mode[cl].value = G[cl].value = G_slider[cl].value = green;
				B_mode[cl].value = B[cl].value = B_slider[cl].value = blue;


				HSLA_MODE[cl].value = H[cl].value = H_slider[cl].value = hue;
				HSLA_MODE2[cl].value = S[cl].value = S_slider[cl].value = sat;
				HSLA_MODE3[cl].value = L[cl].value = L_slider[cl].value = ligth;

				var backgroundS = "-webkit-linear-gradient(left, hsla("+ hue  +", 0%, 50%, 0.78),hsla(" + hue  + ", 20%, 50%, 0.78),hsla(" + hue  +", 40%, 50%, 0.78),hsla(" + hue + ", 60%, 50%, 0.78),hsla(" +  hue + ", 80%, 50%, 0.78),hsla(" + hue + ", 100%, 50%, 0.78))"

				S_slider[cl].style.backgroundImage = backgroundS;

				var backgroundL = "-webkit-linear-gradient(left, hsla("+ hue  +", 45%, 50%, 0),hsla("+ hue  +", 45%, 50%, 0.2),hsla(" + hue + ", 45%, 50%, 0.4),hsla(" + hue + ", 45%, 50%, 0.6000000000000001),hsla(" + hue + ", 45%, 50%, 0.8),hsla(" + hue + ", 45%, 50%, 1))"
				L_slider[cl].style.backgroundImage = backgroundL;


				Hex_input[cl].value = hex_code;

				rgba_string = "rgb(" + red + ", " + green + ", " + blue + ", " + a + ")"

				changeColorFromInput(rgba_string, cl)

				// Codigo para LocalWobble

			})

		} // FIN DE LA FUNCION MANAGE EVENTS

		template.autorun( () => {

	    	DrawPicker('color-block', 'color-strip', 'color-label', 0);
	    	EventsToCall(0)
			DrawPicker('color-block_2', 'color-strip_2', 'color-label_2', 1);
			EventsToCall(1)
			DrawPicker('color-block_3', 'color-strip_3', 'color-label_3', 2);
			EventsToCall(2)
			DrawPicker('color-block_4', 'color-strip_4', 'color-label_4', 3);
			EventsToCall(3)
			DrawPicker('color-block_5', 'color-strip_5', 'color-label_5', 4);
			EventsToCall(4)


	  	});

	  	var CL1 = document.getElementById('COLOR1')
	  	var CL2 = document.getElementById('COLOR2')
	  	var CL3 = document.getElementById('COLOR3')
	  	var CL4 = document.getElementById('COLOR4')
	  	var CL5 = document.getElementById('COLOR5')

	  	CL1.addEventListener('click', function (e) {
	  		Session.set('color', "cl1")

			$(".CP__container").each(function( index ) {

	  			if ( $( this ).hasClass( "__active" ) ) {
	  				$( this ).removeClass('__active')
	  			}

			});

			$("#cl1").addClass('__active')
	  	})

	  	CL2.addEventListener('click', function (e) {
	  		Session.set('color', "cl2")

			$(".CP__container").each(function( index ) {

	  			if ( $( this ).hasClass( "__active" ) ) {
	  				$( this ).removeClass('__active')
	  			}

			});

			$("#cl2").addClass('__active')
	  	})

	  	CL3.addEventListener('click', function (e) {
	  		Session.set('color', "cl3")

			$(".CP__container").each(function( index ) {

	  			if ( $( this ).hasClass( "__active" ) ) {
	  				$( this ).removeClass('__active')
	  			}

			});

			$("#cl3").addClass('__active')
	  	})

	  	CL4.addEventListener('click', function (e) {
	  		Session.set('color', "cl4")

			$(".CP__container").each(function( index ) {
          
	  			if ( $( this ).hasClass( "__active" ) ) {
	  				$( this ).removeClass('__active')
	  			}

			});

			$("#cl4").addClass('__active')
	  	})

	  	CL5.addEventListener('click', function (e) {
	  		Session.set('color', "cl5")

			$(".CP__container").each(function( index ) {

	  			if ( $( this ).hasClass( "__active" ) ) {
	  				$( this ).removeClass('__active')
	  			}

			});

			$("#cl5").addClass('__active')
	  	})

});
