// JavaScript to trigger animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const experienceContainers = document.querySelectorAll('.exprience-container');

  function checkVisibility() {
    experienceContainers.forEach(container => {
      const rect = container.getBoundingClientRect();
      const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);

      if (isVisible && !container.classList.contains('animate')) {
        container.classList.add('animate');
      } else if (!isVisible && container.classList.contains('animate')) {
        container.classList.remove('animate');
      }
    });
  }

  // Initial check on page load
  checkVisibility();

  // Listen for scroll events
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
});
