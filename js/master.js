//*Header*//

//scroll event listener which gives the body a scroll class upon activation
window.addEventListener("scroll", function () {
  document.body.classList[window.scrollY > 20 ? "add" : "remove"]("scrolled");
  hideDropdown();
});

//Header HTML
var header_html =
  '<a id="center_h" href="index.html>' +
    '<h1 id="h_title" class="h">Ian Staples</h2>' +
    '<hr>' +
    '<h3 id="h_tag" class="h">Mechanical Product Design & Engineering</h4>' +
  "</a>";

function showDropdown() {
  var content = document.getElementById("dropdown_content");
  var button = document.getElementById("dropbtn");
  if (window.getComputedStyle(content).display === "none") {
    content.style.display = "flex";
    button.style.color = "white";
  } else {
    content.style.display = "none";
    button.style.color = "#333333";
  }
}

function hideDropdown() {
  var content = document.getElementById("dropdown_content");
  var button = document.getElementById("dropbtn");
  if (window.getComputedStyle(content).display != "none") {
    content.style.display = "none";
    button.style.color = "#333333";
  }
}

//Footer HTML
var footer_html =
  '<div id="info-container" class="sub_body">' +
  '<div id="map" class="info">' +
  '<i class="fa-solid fa-location-pin fa"></i>' +
  '<label for="map_icon" class="footer-text">Chester, VT</label>' +
  "</div>" +
  '<div id="email" class="info">' +
  '<i class="fa-solid fa-envelope fa"></i>' +
  '<label for="email-icon" class="footer-text">istaples9@gmail.com</label>' +
  "</div>" +
  '<div id="phone" class="info">' +
  '<i class="fa-solid fa-phone fa"></i>' +
  '<label for="phone-icon" class="footer-text">(207) 716-6829</label>' +
  "</div>" +
  '<!--<div id="social" class="info">' +
  '<a href="https://twitter.com/CubeWerks"><i style="font-size:24px" class="fa" name="twitter">&#xf099;</i></a>' +
  '<a href="https://www.facebook.com/The3Dwerkshop/?view_public_for=2664090020284775"><i style="font-size:24px" class="fa" name="facebook">&#xf09a;</i></a>' +
  '<a href="https://www.youtube.com/channel/UCDgBspNP9-4EC10cl_LmwYg?view_as=subscriber"><i style="font-size:24px" class="fa" name="youtube">&#xf16a;</i></a>' +
  "</div>-->" +
  "</div>";
