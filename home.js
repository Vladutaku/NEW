var button = document.getElementById('change');

function saveElementWidth() {
  const fillElement = document.querySelector('.fill');
  const elementWidth = fillElement.offsetWidth;

  if (elementWidth > 339.5) {
    button.classList.add('active');
    var buttonCon = document.querySelector(".button-con");
    buttonCon.style.display = "none";
    var nav = document.querySelector("nav");
    nav.style.display = "none";

    var startup = new Audio('startup.mp3');
    startup.play()

    var desktop = document.querySelector(".desktop");
    desktop.style.position = "absolute";
    var desktopDiv = document.querySelector(".desktop div");
    desktopDiv.style.display = "flex";
    var desktopIcon = document.querySelector(".desktop-icon");
    desktopIcon.style.display = "grid";
    var desktopIcon = document.querySelector(".Logo");
    desktopIcon.style.display = "block";
  }
}
var intervalId = setInterval(saveElementWidth, 100);
/*################################################*/ 

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('windows');
    var dropdown = document.querySelector('.dropdown');
  
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      button.classList.toggle('active');
      if (button.classList.contains('active')) {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });
  
    document.addEventListener('click', function(event) {
      var target = event.target;
      if (!target.matches('#windows') && !target.matches('.dropdown')) {
        dropdown.style.display = 'none';
        button.classList.remove('active');
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const desktop = document.querySelector(".desktop");
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let currentIndex = 0;
    let isAnimating = false;
    let intervalId;
    var house = new Audio('house.mp3');
    
    function changeBackgroundColor() {
      if (!isAnimating) {
        house.play();
        isAnimating = true;
        intervalId = setInterval(() => {
          desktop.style.backgroundColor = colors[currentIndex];
          currentIndex = (currentIndex + 1) % colors.length;
        }, 200);
      } else {
        clearInterval(intervalId);
        isAnimating = false;
        house.pause();
        desktop.style.backgroundColor = 'rgb(21, 128, 129)'; // Set background color to rgb(21, 128, 129)
      }
    }
  
    document.getElementById("house-party").addEventListener("dblclick", changeBackgroundColor);
});