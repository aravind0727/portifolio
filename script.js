document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', scrollToSection);
  }
});

function scrollToSection(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (target) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const topOffset = target.getBoundingClientRect().top;
    const totalOffset = topOffset - headerHeight;
    window.scrollBy({
      top: totalOffset,
      behavior: 'smooth',
    });
  }
}

const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-to-top';
scrollBtn.textContent = 'Top';
scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(scrollBtn);
});


window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  if (scrollY >= 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

