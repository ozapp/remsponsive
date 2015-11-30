(function() {
    'use strict';

    function setRootFontSize(args) {
        // default design is for 1024px width
        var fontSize = window.innerWidth / 1024;
        document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
    }
    window.addEventListener("orientationchange", function(events) {
        setRootFontSize();
    },true);
    window.onload = setRootFontSize;
    window.onresize = setRootFontSize;
})();