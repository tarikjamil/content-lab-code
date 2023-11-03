// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 80) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});
