/* 
https://github.com/xypha/Bookmarklets/edit/main/Set_Invidious_preferences_in_two_clicks.js
Last Updated: 2024.03.29
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
