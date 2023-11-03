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

// count up numbers
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counterup");
  const animationDuration = 1000; // Animation time in milliseconds

  const animateCounter = (counter, duration) => {
    let target = +counter.getAttribute("data-target");
    let start = 0;
    let stepTime = duration / target;

    let interval = setInterval(() => {
      start += 1;
      counter.textContent = start;

      if (start >= target) {
        clearInterval(interval);
        counter.textContent = target;
      }
    }, stepTime);
  };

  // Function to check if the element is in view
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to run the counter animation on scroll
  const runCounterOnScroll = () => {
    counters.forEach((counter) => {
      if (isInViewport(counter) && !counter.classList.contains("animated")) {
        animateCounter(counter, animationDuration);
        counter.classList.add("animated");
      }
    });
  };

  // Listen for scroll events
  window.addEventListener("scroll", runCounterOnScroll);
});
