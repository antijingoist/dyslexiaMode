/**
 *
 *      CloudFlareJS Hello World
 *
 */

CloudFlare.require(
    ['cloudflare/console'],

    function(console) {
        console.log("Hello, CloudFlare!");

    }
);
//load jQuery CDN
var jqLocation = document.createElement("script");
jqLocation.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
document.body.appendChild( jqLocation );

//load dyslexia css
var s=document.createElement('link');
s.setAttribute('href','http://dyslexicfonts.com/plugin/dyslexia.css');
s.setAttribute('rel','stylesheet');
s.setAttribute('type','text/css');
document.getElementsByTagName('head')[0].appendChild(s);

//Set according to cookie
setting = parseFloat(readCookie("dyslexiaMode"));
if (setting) {
    dyslexiaMode(setting);
}

//create settings box
var dyslexiaSwitch = 'Enable Dyslexia Mode?<form><input type="radio" name="dyslexia" value="1" onclick="dyslexiaMode(1)" /> Enabled<br /><input type="radio" name="dyslexia" value="0" onclick="dyslexiaMode(0)"/> Disabled</form>';
var settingsBox = document.createElement('div');
settingsBox.setAttribute("id", "dyslexiaSettingsBox");
settingsBox.setAttribute("class", "floatingBox");
document.body.appendChild(settingsBox);

$('#dyslexiaSettingsBox').html(dyslexiaSwitch);

//functions
function dyslexiaMode(state) {
    if(state === 1) {
        $(document.body).addClass("dyslexia");
        createCookie('dyslexiaMode','1',7);
    }
    else{
        $(document.body).removeClass("dyslexia");
        createCookie('dyslexiaMode','0',7);
    }
}
// via Quirksmode.org
function createCookie(name,value,days) {
    if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}