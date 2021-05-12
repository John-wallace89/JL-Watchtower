// Scroll animation for site - Credit https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  })
});
// Back to top button functionality - Credit https://mdbootstrap.com/docs/standard/extended/back-to-top/
let mybutton = document.getElementById("btn-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}