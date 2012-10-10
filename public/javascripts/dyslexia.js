/**
 *
 *      OpenDyslexic CloudFlare app
 *
 */

CloudFlare.define("openDyslexic",  function () {
    var openDyslexic = {};
    
    openDyslexic.applyStyle = function () {
        var styleSheet = document.createElement('link');
        styleSheet.setAttribute('href', 'http://dyslexicfonts.com/plugin/cloudflare.css');
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('type', 'text/css');
        document.getElementsByTagName('head')[0].appendChild(styleSheet);

        return styleSheet.href;
    };
    theResult = openDyslexic.applyStyle();
    return theResult;
});
