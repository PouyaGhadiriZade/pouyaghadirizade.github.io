if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

document.querySelector('.view-all-projects a').addEventListener('click', function (e) {
  e.preventDefault();
  toggleView('grid');
});

document.getElementById('view-less-btn').addEventListener('click', function (e) {
  e.preventDefault();
  toggleView('slider');
});

function toggleView(view) {
  const allProjectsSection = document.getElementById('all-projects');
  const swiperSection = document.querySelector('.custom-projects-section');
  const viewMoreBtn = document.querySelector('.view-all-projects a');

  if (view === 'grid') {
    allProjectsSection.style.display = 'block';
    swiperSection.style.display = 'none';
    viewMoreBtn.style.display = 'none';
  } else {
    allProjectsSection.style.display = 'none';
    swiperSection.style.display = 'block';
    viewMoreBtn.style.display = 'inline-block';
  }


}

document.addEventListener('DOMContentLoaded', function () {
  // Check if device supports touch
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  if (isTouchDevice) {
    document.body.classList.add('touch-device');

    // Improve touch handling for project slides
    const projectSlides = document.querySelectorAll('.project-slide');
    projectSlides.forEach(slide => {
      slide.addEventListener('touchstart', function () {
        this.style.transform = 'scale(0.98)';
      });

      slide.addEventListener('touchend', function () {
        this.style.transform = '';
      });
    });
  }

  // Handle orientation change
  window.addEventListener('orientationchange', function () {
    if (typeof swiper !== 'undefined') {
      setTimeout(() => {
        swiper.update();
      }, 300);
    }
  });
});
