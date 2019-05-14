window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(255, 51, 51);",
        "rgb(255, 72, 0)",
        "yellow",
        "rgb(21, 250, 21)",
        "rgb(0, 191, 255)",
        "rgb(0, 60, 255)",
        "rgb(255, 4, 255)"
    ];

  //sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      
    createBubbles(index);
    });
  });

  //visuals
  const createBubbles = (index) => {
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.background = colors[index];
      bubble.style.animation = 'jump 1s ease';
      bubble.addEventListener('animationend', function(){
          visual.removeChild(this);
    });
  }
});

