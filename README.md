<!--
Todo:
Create unmified versions, add folder and change readme with below
Copy and paste the code at [UnMinify.com](https://unminify.com/) to expand it so it is easier for humans to read, or visit [/UnMinify](/UnMinify) folder.   

; https://github.com/xypha/Bookmarklets/edit/main/README.md
; Last updated 2024.03.28
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
  > The code is *minified* i.e., it contains only the information a computer needs to execute the commands quickly.  
  > Copy and paste the code at [UnMinify.com](https://unminify.com/) to expand it so it is easier for humans to read.  
  >  
  > Visit [Wikipedia](https://en.wikipedia.org/wiki/Bookmarklet) to learn more about bookmarklets.  
  </details>
  
  **How to Install and use bookmarklets?**
  <details>
  <summary><sup>Show/Hide</sup></summary>  
  
  > "Installation" of a bookmarklet is performed by creating a new bookmark, and pasting the code into the `URL` destination field.  
  > 
  > ![Add bookmark window in Firefox - paste bookmarklet code in ~URL~ field](https://github.com/xypha/Bookmarklets/assets/12472214/97fb5be9-361d-4eb3-9d56-16d972692a6d)  
  > [Image caption: 'Add bookmark' window in Firefox - paste bookmarklet code in **URL** field]
  >  
  > The contents of `Name`, `Tags` or `Keyword` fields are optional.  
  > Choose something that will make it easy for you to remember a bookmarklet's function and use it from the Bookmarks Toolbar or find it in the bookmark manager.  
  > You can leave these other fields blank too. The content of these fields won't change the function of the bookmarklet.  
  </details>

-----------------
## Contents

  | Name                                         | Link                                                                                                  | Last Updated |
  | :---                                         |    :---:                                                                                              |     ---:     |
  | Open IMDb trailer in new tab                 | [Link](https://github.com/xypha/Bookmarklets/blob/main/Open_IMDb_trailer_in_new_tab.js)               | 2024.03.28   |
  | Set Invidious preferences in two clicks      | [Link](https://github.com/xypha/Bookmarklets/blob/main/Set_Invidious_preferences_in_two_clicks.js)    | 2024.03.28   |

-----------------  

### **Open IMDb trailer in new tab**
  
  **Step 1** - Open an IMDb page. Example: [Terminator 2](https://www.imdb.com/title/tt0103064/)  
  **Step 2** - Click on this bookmarklet.  
  
+ If a featured trailer is present next to the movie or show's poster (Image 1a), it will open in a new tab/window as per your browser setting. (Image 1b)

    **Image 1a**: Featured trailer (red arrow :arrow_down:) is present next to the movie or show's poster -  
  
    ![Featured trailer is present next to the movie or show's poster](https://github.com/xypha/Bookmarklets/assets/12472214/917818a0-ef01-4270-bc99-94b49cbe119a)

    **Image 1b**: Trailer will open in a new tab or window -  
  
    ![Trailer will open in a new tab or window](https://github.com/xypha/Bookmarklets/assets/12472214/555f17d9-7455-4f32-8508-025441f3bbd2)

+ If a featured trailer is **not** present, but `Videos` are present on the page (Image 1c), you can choose one of two options -  
  
  - Click on this bookmarklet. A random video will open in a new tab. *(or)*  
  - Click on a desired video, wait for the page and video to load, then click on this bookmarklet. The desired video will open in a new tab/window.  
  
    **Image 1c**: Movie or show's videos on the main page -  
  
    ![Movie or show's videos on the main page](https://github.com/xypha/Bookmarklets/assets/12472214/73c050c7-eb81-44ab-a2b6-214393632258)
  
+ If a featured trailer is not present **and** there are no videos, then *nothing happens* when the bookmarklet is clicked.  
  
-----------------

### **Set Invidious preferences in two clicks**  

  If you frequently switch [Invidious](https://en.wikipedia.org/wiki/Invidious) instances (seen [here](https://docs.invidious.io/instances/) or [here](https://redirect.invidious.io/)) and usually stick to the same preferences across instances,  
  then this bookmarklet is for you.  
  
  **Step 1** - Open the `Preferences` page of an Invidious instance. Example: [yewtu.be](https://yewtu.be/preferences) (Image 2a)  
  **Step 2** - Click on this bookmarklet.  
  **Step 3** - Check if the preferences set by the bookmarklet are as desired. (Image 2b)  
  **Step 4** - Click on the `Save preferences` button at the bottom of the webpage.  

  **Image 2a**: Preferences - Website defaults -  
  
  ![Preferences - Website defaults](https://github.com/xypha/Bookmarklets/assets/12472214/dc46e73e-e3da-4f5e-acf6-8f2b779c29fc)

  **Image 2b**: Preferences set by bookmarklet -  

  ![Preferences set by bookmarklet](https://github.com/xypha/Bookmarklets/assets/12472214/537cc6ad-1e4d-4ff0-92f4-710f1b97812c)