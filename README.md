<!--
Todo:
* solve random selection in IMDb  

; https://github.com/xypha/Bookmarklets/edit/main/README.md
; Last updated 2024.12.03
-->

# Bookmarklets  

  A small collection of JavaScript bookmarklets I wrote for [Firefox](https://www.mozilla.org/en-US/firefox/new/) (but should work in other browsers too).  

  Suggestions for improving their code are welcome.  
  
## Introduction to bookmarklets  
  <sup>Click on ⏵ to show/hide the explanation.</sup>  
  
  **What is a bookmarklet?**  
  
  <details>
  <summary><sup>Show/Hide</sup></summary>  
  
  > Bookmarklets are saved and used as normal bookmarks in any web browser.  
  >  
  > Each bookmarklet (or simply marklet) contains [JavaScript](https://en.wikipedia.org/wiki/JavaScript) commands and as such, they are simple "one-click" tools which add functionality to the browser. Hence, each file ends with a `.js` extension.  
  >  
  > Bookmarklets always begin with `javascript:`.  Some browsers automatically delete this label when pasting, so make sure it's there.  
  > Bookmarklet code shown below is *minified* i.e., it contains only the information a computer needs to execute the commands quickly.  
  > Copy and paste the code at [UnMinify.com](https://unminify.com/) to expand it so it is easier for humans to read, or visit un-minified link in contents to view the original code with comments.   
  > If you choose to alter the un-minified code to your own needs, use [Minify JS](https://www.minifier.org/) to compact it before bookmarklet creation.  
  > 
  > Visit [Wikipedia](https://en.wikipedia.org/wiki/Bookmarklet) to learn more about bookmarklets.  
  
  </details>
  
  **How to install and use bookmarklets?**  
  
  <details>
  <summary><sup>Show/Hide</sup></summary>  
  
  > "Installation" of a bookmarklet is performed by creating a new bookmark, and pasting the code into the `URL` destination field.  
  > 
  > <sub>Image: 'Add bookmark' window in Firefox - paste bookmarklet code in **URL** field</sub>
  > 
  > ![Add bookmark window in Firefox - paste bookmarklet code in ~URL~ field](https://github.com/xypha/Bookmarklets/assets/12472214/97fb5be9-361d-4eb3-9d56-16d972692a6d)  
  >  
  > The contents of `Name`, `Tags` or `Keyword` fields are optional.  
  > Choose something that will make it easy for you to remember a bookmarklet's function and use it from the Bookmarks Toolbar, and locate or search for it in your browser's Bookmark Manager.  
  > You can leave these other fields blank too. The content of these fields won't change the function of the bookmarklet.  
  
  </details>

## Contents

  | Sl No.  | Name                                          | Keyword†     | Link (Un-minified)                                                                                    | Last Updated |
  | :---    | :---                                          | :---         |    :---:                                                                                              |     ---:     |
  | 1       | Open IMDb trailer in new tab                  | imdblink     | [Link](https://github.com/xypha/Bookmarklets/blob/main/Open_IMDb_trailer_in_new_tab.js)               | 2024.03.29   |
  | 2       | Set Invidious preferences in two clicks       | invpref      | [Link](https://github.com/xypha/Bookmarklets/blob/main/Set_Invidious_preferences_in_two_clicks.js)    | 2024.03.29   |
  | 3       | Toggle Dark Mode for PDFs in Firefox          | pdfdark      | [Link](https://github.com/xypha/Bookmarklets/blob/main/PDF_Dark_Mode.js)                              | 2024.12.03   |

  † Keyword used in Firefox bookmarks.
  
### **Open IMDb trailer in new tab**  
  
  This bookmarklet enables you to open the featured trailer/video in a new tab on any IMDb movie/TV show title page.  
  
  Save below code as a bookmarklet -  
  ```js
  javascript:(function(){var elem=document.querySelector("video.jw-video.jw-reset");var src=elem.getAttribute("src");window.open(src)})()
  ```  
    
  How to use the bookmarklet -  

  <details>
  <summary><sup>Show/Hide</sup></summary>  
    
  > **Step 1** - Open an IMDb page. Example: [Terminator 2](https://www.imdb.com/title/tt0103064/)  
  > **Step 2** - Click on this bookmarklet.  
  > 
  > + If a featured trailer is present next to the movie or show's poster (Image 1a), it will open in a new tab/window as per your browser setting. (Image 1b)  
  > 
  > <sub>**Image 1a**: Featured trailer (red arrow :arrow_down:) is present next to the movie or show's poster -</sub>  
  > 
  > ![Featured trailer is present next to the movie or show's poster](https://github.com/xypha/Bookmarklets/assets/12472214/917818a0-ef01-4270-bc99-94b49cbe119a)
  > 
  > <sub>**Image 1b**: Trailer will open in a new tab or window -</sub>  
  > 
  > ![Trailer will open in a new tab or window](https://github.com/xypha/Bookmarklets/assets/12472214/555f17d9-7455-4f32-8508-025441f3bbd2)
  > 
  > + If a featured trailer is **not** present, but `Videos` are present on the page (Image 1c), you can choose one of two options -  
  > 
  > - Click on this bookmarklet. A video (usually the 1st one but its random sometimes) will open in a new tab. *(or)*  
  > - Click on a desired video, wait for the page and video to load, then click on this bookmarklet. The desired video will open in a new tab/window.  
  > 
  > <sub>**Image 1c**: Movie or show's videos on the main page -</sub>  
  > 
  > ![Movie or show's videos on the main page](https://github.com/xypha/Bookmarklets/assets/12472214/73c050c7-eb81-44ab-a2b6-214393632258)
  > 
  > + If a featured trailer is not present **and** there are no videos, then *nothing happens* when the bookmarklet is clicked.  

  </details>
  
-----------------

### **Set Invidious preferences in two clicks**  

  If you frequently switch [Invidious](https://en.wikipedia.org/wiki/Invidious) instances (seen [here](https://docs.invidious.io/instances/) & [here](https://redirect.invidious.io/))  
  and usually stick to the same preferences across instances,  
  then this bookmarklet is for you.  
  
  Save below code as a bookmarklet -  
  ```js
  javascript:(function(){document.getElementById("video_loop").checked=!1;document.getElementById("autoplay").checked=!1;document.getElementById("continue").checked=!1;document.getElementById("continue_autoplay").checked=!1;document.getElementById("local").checked=!1;document.getElementById("listen").checked=!1;document.getElementById("speed").options[4].selected=!0;document.getElementById("quality").options[1].selected=!0;document.getElementById("quality_dash").options[6].selected=!0;document.getElementById("volume").value="50";document.getElementById("comments[0]").options[0].selected=!0;document.getElementById("comments[1]").options[0].selected=!0;document.getElementById("captions[0]").options[4].selected=!0;document.getElementById("captions[1]").options[2].selected=!0;document.getElementById("captions[2]").options[1].selected=!0;document.getElementById("related_videos").checked=!0;document.getElementById("annotations").checked=!1;document.getElementById("extend_desc").checked=!0;document.getElementById("vr_mode").checked=!1;document.getElementById("save_player_pos").checked=!0;document.getElementById("automatic_instance_redirect").checked=!0})()
  ```  
    
  How to use the bookmarklet -  

  <details>
  <summary><sup>Show/Hide</sup></summary>  
    
  > **Step 1** - Open the `Preferences` page of an Invidious instance. Example: [yewtu.be](https://yewtu.be/preferences) (Image 2a)  
  > **Step 2** - Click on this bookmarklet from Bookmarks Toolbar.  
  > **Step 3** - Check if the preferences set by the bookmarklet are as desired. (Image 2b)  
  > **Step 4** - Click on the `Save preferences` button at the bottom of the webpage.  
  > 
  > <sub>**Image 2a**: Preferences - Website defaults -</sub>  
  > 
  > ![Preferences - Website defaults](https://github.com/xypha/Bookmarklets/assets/12472214/dc46e73e-e3da-4f5e-acf6-8f2b779c29fc)
  > 
  > <sub>**Image 2b**: Preferences set by bookmarklet -</sub>  
  > 
  > ![Preferences set by bookmarklet](https://github.com/xypha/Bookmarklets/assets/12472214/4db5bc9b-0a31-4d08-9af3-bb0c896c0286)

  </details>

-----------------

### **Toggle Dark Mode for PDFs in Firefox**  

[Source](https://stackoverflow.com/a/71777470/5282788)
  
  Save below code as a bookmarklet -  
  ```js
  javascript:(function(v) {v.style = v.classList.contains('dm')?'':'filter: grayscale(1) invert(1) sepia(1) contrast(75%)';v.classList.toggle('dm');})(viewer)
  ```  
    
  How to use the bookmarklet -  

  <details>
  <summary><sup>Show/Hide</sup></summary>  
    
  > **Step 1** - Open any PDF file in a Firefox tab
  > **Step 2** - Click on this bookmarklet from Bookmarks Toolbar.    
  > 
  > <sub>**Image 3a**: PDF file in light mode (Default) -</sub>  
  > 
  > ![PDF-light-mode](https://github.com/user-attachments/assets/13640e93-2824-41df-90e8-7053cf6768e3)
  > 
  > <sub>**Image 3b**: PDF file in dark mode -</sub>  
  > 
  > ![PDF-dark-mode](https://github.com/user-attachments/assets/43c9c89e-788b-4860-90b6-a340a0c01380)

  </details>
