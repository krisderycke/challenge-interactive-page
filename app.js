// let tabs = document.getElementsByClassName("tablinks");
// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", showTab);
//   console.log(tabs[i]);

//   function showTab(e) {
//     let contents = document.getElementsByClassName("tabcontent");
//     for (let x = 0; x < contents.length; x++) {
//       console.log(e.contents);
//       // e.contents[x].style.backgroundColor = "green";
//       // e.contents[i].style.display = "none";
//     }
//   }
// }

function click1() {
  let content1 = document.getElementById("tabcontent1");
  console.log(content1);
  if (content1.style.display === "none") {
    content1.style.display = "block";
  } else {
    content1.style.display = "none";
  }
}

function click2() {
  let content2 = document.getElementById("tabcontent2");
  console.log(content2);
  if (content2.style.display === "none") {
    content2.style.display = "block";
  } else {
    content2.style.display = "none";
  }
}

function click3() {
  let content3 = document.getElementById("tabcontent3");
  console.log(content3);
  if (content3.style.display === "none") {
    content3.style.display = "block";
  } else {
    content3.style.display = "none";
  }
}
////////////////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-show");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
