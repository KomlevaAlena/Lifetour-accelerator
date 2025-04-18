// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {sliderHero} from './modules/slider';
import {sliderTours} from './modules/slider';
import {sliderTraining} from './modules/slider';
import {sliderReviews} from './modules/slider';
import {sliderAdvantages} from './modules/slider';
import {sliderGallery} from './modules/slider';
import {mobileMenu} from './modules/main-menu';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    mobileMenu();
    sliderHero.init();
    sliderTours.init();
    sliderTraining.init();
    sliderReviews.init();
    sliderAdvantages();
    window.addEventListener('resize', sliderAdvantages);
    sliderGallery();
    window.addEventListener('resize', sliderGallery);
  });
});
