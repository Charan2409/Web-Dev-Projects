//initialization of slider
let sliderNumber = 1;
let maxSlides = 4;
let output = document.getElementById("output");
function previousSlide() {
  if (sliderNumber > 1) {
    sliderNumber -= 1;
    output.src = "images/" + sliderNumber + ".png";
    output.classList.add("animate");
    setTimeout(() => {
      output.classList.remove("animate");
    }, 2000);
    document.getElementById("right-arrow").removeAttribute("disabled");
  }
  if (sliderNumber === 1) {
    document.getElementById("left-arrow").setAttribute("disabled", true);
  }
}

function nextSlide() {
  if (sliderNumber < 4) {
    sliderNumber += 1;
    output.src = "images/" + sliderNumber + ".png";
    output.classList.add("animate");
    setTimeout(() => {
      output.classList.remove("animate");
    }, 2000);
    document.getElementById("left-arrow").removeAttribute("disabled");
  }

  if (sliderNumber === 4) {
    document.getElementById("right-arrow").setAttribute("disabled", true);
  }
}