// HOVERNAV
const navbar = document.querySelector('.navbar');
const navbarSub = document.querySelector('.navbar__sub');

document.querySelectorAll('.navbar__sub').forEach((el) => {
  el.style.left = -navbar.getBoundingClientRect().left + 'px';
  el.style.paddingLeft = navbar.getBoundingClientRect().left + 'px';
  el.style.width = window.innerWidth + 'px';
})

//BURGER
const IconNav = document.querySelector('.burger');
const backdrop = document.querySelector('.backdrop');


IconNav.addEventListener("click", function (e) {
  IconNav.classList.toggle('burger__active');
  navbar.classList.toggle('navbar__active');
  document.body.classList.toggle('_lock');
})

document.querySelectorAll('.navbar__item').forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('navbar__sub--active');
  }
  )
}
)

// SWIPER 1 HERO
let swiperTest = new Swiper("#swiper1", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.hero__btn-right',
    prevEl: '.hero__btn-left'
  },

  breakpoints: {
    1000: { slidesPerView: 1.2 }
  }
});
// SWIPER 2 NEWS
if (window.innerWidth < 768) {
  let swpWrap = document.querySelector('.news__wrapper')
  swpWrap.classList.add('swiper-wrapper')
  document.querySelectorAll('.news__card').forEach((el) => {
    el.classList.add('swiper-slide');
  })
}

swiperTest = new Swiper("#swiper2", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,
});


// ACCARDEON
document.querySelectorAll('.accardeon').forEach((el) => {
  el.addEventListener('click', () => {

    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.accardeon__content').forEach((el) => {
        el.style.paddingBottom = null; el.style.maxHeight = null
      })
    } else {
      document.querySelectorAll('.accardeon__content').forEach((el) => {
        el.style.paddingBottom = null; el.style.maxHeight = null
      })
      content.style.paddingBottom = 20 + 'px'
      content.style.maxHeight = content.scrollHeight + 20 + 'px'

    }
  })
})

// TELMASK
let element = document.getElementById('phone');
let maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
}
let mask = new IMask(element, maskOptions);

