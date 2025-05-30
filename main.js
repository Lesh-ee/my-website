var imgs = document.querySelectorAll(".slides img");
var dots = document.querySelectorAll(".dot");
var currentImg = 0; //index of the first image
const interval = 5000; //duration(speed) of the slide

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
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
