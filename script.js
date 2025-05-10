document.addEventListener("DOMContentLoaded", function () {
    // Handle scroll speed on main content
    const content = document.querySelector('.main-content');
    if (content) {
        content.addEventListener('wheel', function (e) {
            e.preventDefault(); // prevent normal scroll
            const scrollSpeed = 0.75; // smaller = slower
            content.scrollTop += e.deltaY * scrollSpeed;
        }, { passive: false });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const container = document.querySelector('.main-content');
        if (target && container) {
            const scrollOffset = 70; 
            container.scrollTo({
              top: target.offsetTop - container.offsetTop - scrollOffset,
              behavior: 'smooth'
            });
        }
      });
    });
  });
