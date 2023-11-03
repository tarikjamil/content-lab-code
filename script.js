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
    let stepTime = 10; // How often to update the count, in milliseconds
    let steps = duration / stepTime; // Total number of updates
    let increment = target / steps; // Increment value for each update

    console.log("Starting animation for", counter);

    let interval = setInterval(() => {
      start += increment;
      counter.textContent = Math.floor(start); // Update the display with the integer part

      if (start >= target) {
        clearInterval(interval);
        counter.textContent = target; // Ensure it ends on the exact target number
      }
    }, stepTime);
  };

  // Simplified viewport check
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const runCounterOnScroll = () => {
    counters.forEach((counter) => {
      if (isInViewport(counter) && !counter.classList.contains("animated")) {
        counter.classList.add("animated"); // Mark as animated
        animateCounter(counter, animationDuration);
      }
    });
  };

  // Initial check in case the counter is already in view on load
  runCounterOnScroll();

  // Listen for scroll events
  window.addEventListener("scroll", runCounterOnScroll);
});
