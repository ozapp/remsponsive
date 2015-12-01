(function() {
    'use strict';

    // global namespace
    var Remsponsive = Remsponsive || {};
    Remsponsive.breakPoints = [];


    Remsponsive.init = function(breakPoints) {
        if (!Array.isArray(breakPoints)) {
            console.log('Remsponsive init error: breakPoints should be an Array.');
        } else {
            this.breakPoints = breakPoints;
        }
    };

    // default design is for 1024px width
    Remsponsive.init([640, 1024]);

    Remsponsive.setRootFontSize = function() {
        var fontSize;
        if (window.innerWidth < Remsponsive.breakPoints[0]) {
            fontSize = window.innerWidth / Remsponsive.breakPoints[0];
        } else {
            fontSize = window.innerWidth / Remsponsive.breakPoints[1];
        }
        document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
    };

    window.addEventListener("orientationchange", function() {
        Remsponsive.setRootFontSize();
    }, true);
    window.onload = Remsponsive.setRootFontSize;
    window.onresize = Remsponsive.setRootFontSize;


    //console.log(Remsponsive);
})();