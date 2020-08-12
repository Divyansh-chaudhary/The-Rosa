let menu = $(".menu")[0];
let menuBtn = $(".menu-btn i");

// back to top button
$("#back-to-top").on("click", function () {
  $("html, body").scrollTop(0);
});

$(document).ready(function () {
  $(".menu-btn").click(function () {
    if (menu.style.transform == "scaleX(0)") {
      menu.style.transform = "scaleX(1)";
      menuBtn.removeClass("fa-bars");
      menuBtn.addClass("fa-times");
    } else {
      menu.style.transform = "scaleX(0)";
      menuBtn.removeClass("fa-times");
      menuBtn.addClass("fa-bars");
    }
  });
  window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;

    if (offset > 400) {
      $(".about-us-content").addClass("leftToRight-anim");
    }
    if (offset > 800) {
      $(".about-img").addClass("rightToLeft-anim");
    }
    if (offset > 1090) {
      $(".recipes h3").addClass("topToBottom-anim");
      $(".recipes p").addClass("bottomToTop-anim");
    }
    if (offset > 1600) {
      $(".recipes-images").addClass("leftToRight-anim");
    }
    if (offset > 1800) {
      $(".recipes-content").addClass("rightToLeft-anim");
    }
    if (offset > 2250) {
      $(".blend h3").addClass("topToBottom-anim");
      $(".blend p").addClass("bottomToTop-anim");
    }
    if (offset > 2700) {
      $(".culinary-content").addClass("leftToRight-anim");
    }
    if (offset > 3200) {
      document.getElementsByClassName("culinary-images")[0].style.opacity = 1;
      $(".culinary-images .one").addClass("topToBottom-anim");
      $(".culinary-images .two").addClass("bottomToTop-anim");
    }
    if (offset > 3600) {
      $(".footer-content").addClass("topToBottom-anim");
    }
    if (offset > 3750) {
      $(".follow-us").addClass("leftToRight-anim");
    }
    if (offset > 3900) {
      $(".newsletter").addClass("rightToLeft-anim");
    }
  });
});
