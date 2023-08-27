let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let thumbs = document.getElementsByClassName("thumbs");
let slide_imgs = document.getElementsByClassName("slide_img");

//sets number of visible thumbnails
let vis_thumbs = 5;

function injectThumbs() {
  let all_thumb_html = "";

  //need to find image name
  for (i = 1; i < slides.length + 1; i++) {
    var img_path = document
      .getElementById("img_" + i.toString())
      .getAttribute("src");

    let thumb_html =
      '<div class="thumbs">' +
      '<img class="thumb_img cursor"' +
      'src="' +
      img_path +
      '"' +
      'onclick="currentSlide(' +
      i +
      ')"' +
      '"/>' +
      "</div>";

    all_thumb_html += thumb_html;
  }
  return all_thumb_html;
}

//shows number of thumbnails specified by vis_thumbs
function showVisThumbs() {
  //callback checks if thumbnails have been injected to html
  if (thumbs.length == 0) {
    showVisThumbs();
  } else {
    for (i = 0; i < vis_thumbs; i++) {
      thumbs[i].style.display = "flex";
    }
  }
  showSlides();
}

// Next/previous controls
function plusSlides(n) {
  slideIndex = slideIndex += n;

  //prevents slideshow from scrolling right beyond total number of slides
  if (slideIndex < slides.length) {
    showSlides();
    switchThumbs(n);
  }
  //prevents slideshow from scrolling left beyond the first slide
  else {
    slideIndex = slides.length - 1;
  }
}

//switches visible thumbnails as you scroll
function switchThumbs(n) {
  if (n > 0 && slideIndex >= vis_thumbs) {
    thumbs[slideIndex].style.display = "flex";
    thumbs[slideIndex - vis_thumbs].style.display = "none";
  }
  if (n < 0 && slideIndex < slides.length - vis_thumbs) {
    thumbs[slideIndex].style.display = "flex";
    thumbs[slideIndex + vis_thumbs].style.display = "none";
  }
}

//makes clicked thumbnail the active slide
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  let i;

  //thumb_imgs comes from injected HTML
  let thumb_imgs = document.getElementsByClassName("thumb_img");
  let captionText = document.getElementById("caption");

  if (slideIndex < 0) {
    slideIndex = 0;
  }

  //hides slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumb_imgs.length; i++) {
    thumb_imgs[i].className = thumb_imgs[i].className.replace(" active", "");
  }

  //shows slide at slide index
  slides[slideIndex].style.display = "block";

  //makes thumbnail active
  thumb_imgs[slideIndex].className += " active";

  captionText.innerHTML = slide_imgs[slideIndex].alt;
}
