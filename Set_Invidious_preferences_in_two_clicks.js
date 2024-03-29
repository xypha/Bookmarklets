/* 
https://github.com/xypha/Bookmarklets/edit/main/Set_Invidious_preferences_in_two_clicks.js
Last Updated: 2024.03.29

Minified @ https://www.minifier.org/
javascript:(function(){document.getElementById("video_loop").checked=!1;document.getElementById("autoplay").checked=!1;document.getElementById("continue").checked=!1;document.getElementById("continue_autoplay").checked=!1;document.getElementById("local").checked=!1;document.getElementById("listen").checked=!1;document.getElementById("speed").options[4].selected=!0;document.getElementById("quality").options[1].selected=!0;document.getElementById("quality_dash").options[6].selected=!0;document.getElementById("volume").value="50";document.getElementById("comments[0]").options[0].selected=!0;document.getElementById("comments[1]").options[0].selected=!0;document.getElementById("captions[0]").options[4].selected=!0;document.getElementById("captions[1]").options[2].selected=!0;document.getElementById("captions[2]").options[1].selected=!0;document.getElementById("related_videos").checked=!0;document.getElementById("annotations").checked=!1;document.getElementById("extend_desc").checked=!0;document.getElementById("vr_mode").checked=!1;document.getElementById("save_player_pos").checked=!0;document.getElementById("automatic_instance_redirect").checked=!0})()
*/

javascript: (function () {
    document.getElementById("video_loop").checked = false;                 // Always loop
    document.getElementById("autoplay").checked = false;                   // Autoplay
    document.getElementById("continue").checked = false;                   // Play next by default
    document.getElementById("continue_autoplay").checked = false;          // Autoplay next video
    document.getElementById("local").checked = false;                      // Proxy videos
    document.getElementById("listen").checked = false;                     // Listen by default
    document.getElementById("speed").options[4].selected = true;           // Default speed
    document.getElementById("quality").options[1].selected = true;         // Preferred video quality
    document.getElementById("quality_dash").options[6].selected = true;    // Preferred DASH video quality
    document.getElementById("volume").value = "50";                        // Player volume
    document.getElementById("comments[0]").options[0].selected = true;     // Default comments 0
    document.getElementById("comments[1]").options[0].selected = true;     // Default comments 1
    document.getElementById("captions[0]").options[4].selected = true;     // Default captions 0
    document.getElementById("captions[1]").options[2].selected = true;     // Default captions 1
    document.getElementById("captions[2]").options[1].selected = true;     // Default captions 2
    document.getElementById("related_videos").checked = true;              // Show related videos
    document.getElementById("annotations").checked = false;                // Show annotations by default
    document.getElementById("extend_desc").checked = true;                 // Automatically extend video description
    document.getElementById("vr_mode").checked = false;                    // Interactive 360 degree videos
    document.getElementById("save_player_pos").checked = true;             // Save playback position
    document.getElementById("automatic_instance_redirect").checked = true; // Automatic instance redirection (fallback to redirect.invidious.io)
})();
