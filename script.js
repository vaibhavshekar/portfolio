// JavaScript to trigger animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const experienceContainers = document.querySelectorAll('.exprience-container');
  let lastScrollTop = 0;

  function checkVisibility() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    experienceContainers.forEach(container => {
      const isVisible = isElementInViewport(container);
      const isScrollingDown = currentScrollTop > lastScrollTop;

      if (isVisible && !container.classList.contains('animate')) {
        container.classList.add('animate');
      } else if (!isVisible && container.classList.contains('animate')) {
        container.classList.remove('animate');
      }

      lastScrollTop = currentScrollTop;
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Initial check on page load
  checkVisibility();

  // Listen for scroll events
  window.addEventListener('scroll', checkVisibility);
});
