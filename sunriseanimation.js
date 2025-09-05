const sun = document.getElementById("sun");
const sky = document.getElementById("sky");
const ocean = document.getElementById("ocean");
const sunriseBtn = document.getElementById("sunrise_button");
const sunsetBtn = document.getElementById("sunset_button");



sunriseBtn.addEventListener("click", () => {
      
    sky.style.background = "linear-gradient( #7BD3EA, #A1EEBD)";
  
    ocean.style.background = "linear-gradient( #00CCDD, #6439FF)";

    sun.style.bottom ="70%";
    sun.style.transform = "translateX(-50%) scale(1.5)";

});


  sunsetBtn.addEventListener("click", () => {

    sky.style.background = "linear-gradient( #00337C , #13005A)";
    ocean.style.background = "linear-gradient( #5B99C2, #1F316F)";

    sun.style.bottom ="-100px";
    sun.style.transform = "translateX(-50%) scale(0.5)";
});







