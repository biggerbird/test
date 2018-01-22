(function(doc, win) {
    var uAgent = win.navigator.userAgent;
    var isIOS = uAgent.match(/iphone/i);
    var docEle = doc.documentElement;
    var dpr = 1;
    function resizeRoot() {
        var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width: window.innerWidth: window.innerWidth,
        wDpr,wFsize;
        var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height: window.innerHeight: window.innerHeight;
        if (window.devicePixelRatio) {
            wDpr = window.devicePixelRatio
        } else {
            wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1
        }
        if (isIOS) {
            wWidth = screen.width;
            wHeight = screen.height;
            document.getElementsByTagName('body')[0].style.paddingTop = 1+"rem";
        }
        if (wWidth > wHeight) {
            wWidth = wHeight
        }
        wFsize = wWidth > 768 ? 40 : 40 * (wWidth / 640);
        window.screenWidth_ = wWidth;
        docEle.dataset.dpr = wDpr;
        docEle.style.fontSize = wFsize + "px"
    }
    var _hmt = _hmt || [];
    //orient();
    //resizeRoot();
})(document, window);

var Rxports = {


	
}
	
module.exports = Rxports



































