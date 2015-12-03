(function() {
    'use strict';

    // global namespace
    var Remsponsive = Remsponsive || {};
    Remsponsive.breakPoints = [];
    Remsponsive.init = init;
    Remsponsive.setRootFontSize = setRootFontSize;

    // default has 640px and 1024px breakPoints
    Remsponsive.init([640, 1024]);

    function init(breakPoints) {
        if (!Array.isArray(breakPoints)) {
            console.log('Remsponsive init error: breakPoints should be an Array.');
        } else {
            this.breakPoints = breakPoints;
        }
    };



    function setRootFontSize() {
        var fontSize;
        for (var i = 0; i < Remsponsive.breakPoints.length; i++) {
            if(window.innerWidth < Remsponsive.breakPoints[i]){
                fontSize = window.innerWidth / Remsponsive.breakPoints[i];
                document.documentElement.style.fontSize = fontSize + "px";
                return;
            }else{
                fontSize = window.innerWidth / Remsponsive.breakPoints[i];
                document.documentElement.style.fontSize = fontSize + "px";
            }
        };
        
    };

    window.addEventListener("orientationchange", function() {
        Remsponsive.setRootFontSize();
    }, true);
    window.onload = Remsponsive.setRootFontSize;
    window.onresize = Remsponsive.setRootFontSize;


    //console.log(Remsponsive);
})();