export const mobileMenu = function sliderGallery() {
  const menuButton = document.querySelector('.main-nav__toggle');
  const mobiMenu = document.querySelector('.main-menu');
  // const noJs = Array.from(document.querySelectorAll('.main-list__nojs'));

  // for (let i = 0; i < 2; i++) {
  //   noJs[i].classList.remove('main-list__nojs');
  // }

  menuButton.addEventListener('click', () =>{
    mobiMenu.classList.toggle('main-menu--open');
    menuButton.classList.toggle('main-nav__toggle--active');
  });
};
