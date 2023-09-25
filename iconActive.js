
/*Change the icons to active when the pointer is over the element and normal when the pointer are not in icons elemnt.-->(GitHub, Linkedin, down-arrow icon) */
function setupMouseEvents(imageId, activeSrc, normalSrc) {
    var githubIcon = document.getElementById(imageId);
  
    githubIcon.addEventListener('mouseover', function () {
      githubIcon.src = activeSrc;
    });
  
    githubIcon.addEventListener('mouseout', function () {
      githubIcon.src = normalSrc;
    });
  }
  
  setupMouseEvents("GitHub", "./Assets/GitHub-active.png", "./Assets/GitHub.png");
  setupMouseEvents("Linkedin","./Assets/Linkedin-active.png","./Assets/Linkedin.png");
  setupMouseEvents("down-arrow", "./Assets/down-arrow-active.png", "./Assets/down-arrow.png");
  
// setupMouseEvents("technical-icon","./Assets/technical-icon-active.png","./Assets/technical-icon.png");


/*change the icon of the technical icons when the mouse is over and vice-vera */
setupMouseEvents("html-icon","./Assets/html-icon-active.png","./Assets/html-icon.png");

setupMouseEvents("css-icon","./Assets/css-icon-active.png","./Assets/css-icon.png");
setupMouseEvents("JavaScript-icon","./Assets/JavaScript-icon-active.png","./Assets/JavaScript-icon.png");
setupMouseEvents("java-icon","./Assets/java-icon-active.png","./Assets/java-icon.png");
setupMouseEvents("python-icon","./Assets/python-icon-active.png","./Assets/python-icon.png");
setupMouseEvents("mysql-icon","./Assets/mysql-icon-active.png","./Assets/mysql-icon.png");
setupMouseEvents("github-icon","./Assets/github-icon-active.png","./Assets/github-icon.png");
setupMouseEvents("iot-icon","./Assets/iot-icon-active.png","./Assets/iot-icon.png");
setupMouseEvents("responsive-icon","./Assets/responsive-icon-active.png","./Assets/responsive-icon.png");

