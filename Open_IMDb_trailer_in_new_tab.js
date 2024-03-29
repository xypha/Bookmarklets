/*
https://github.com/xypha/Bookmarklets/edit/main/Open_IMDb_trailer_in_new_tab.js
Last updated: 2024.03.29

Minifiy using https://www.minifier.org/
javascript:(function(){var elem=document.querySelector("video.jw-video.jw-reset");var src=elem.getAttribute("src");window.open(src)})()
*/

javascript: (function () {
    var elem = document.querySelector("video.jw-video.jw-reset"); // identify element containing the video link
    var src = elem.getAttribute("src");                           // extract video link
    window.open(src);                                             // open link in new window/tab
})();
