
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.testimonial-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  });


  console.log(document.querySelector('.fix-arrow'));

  const toggleBtn = document.querySelector('.toggle-btn');
  const navList = document.querySelector('.nav-list');

  toggleBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
  });