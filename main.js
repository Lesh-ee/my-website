var pictures = document.querySelectorAll(".slides picture");
var dots = document.querySelectorAll(".dot");
var currentImg = 0; //index of the first image
const interval = 5000; //duration(speed) of the slide

function changeSlide(n) {
  for (var i = 0; i < pictures.length; i++) {
    pictures[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % pictures.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  pictures[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}

var timer = setInterval(changeSlide, interval);

function copyValue(element) {
  navigator.clipboard.writeText(element.value).then(() => {
    let popup = element.querySelector(".popup-text");
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1000); // hides after 2 seconds
  });
}
