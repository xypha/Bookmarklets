/*
https://github.com/xypha/Bookmarklets/edit/main/PDF_Dark_Mode.js
Last updated: 2024.12.03

Source: https://stackoverflow.com/a/71777470/5282788

javascript:(function(v) {v.style = v.classList.contains('dm')?'':'filter: grayscale(1) invert(1) sepia(1) contrast(75%)';v.classList.toggle('dm');})(viewer)
*/

javascript: (
    function() {
        if (viewer.classList.contains("dm")) viewer.style = "";
        else viewer.style = "filter: grayscale(1) invert(1) sepia(1) contrast(75%)'";
        viewer.classList.toggle("dm");
    }
)()