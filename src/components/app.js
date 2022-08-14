// Swiper
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";

const options = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  slidesPerView: "auto",
  speed: 700,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  wrapperClass: "js-carousel-wrapper",
  slideClass: "js-carousel-slide",
  slideActiveClass: "carousel-slide-active",
  slideNextClass: "carousel-slide-next",
  slidePrevClass: "carousel-slide-prev",
  pagination: {
    el: ".carousel__pagination",
    clickable: true,
    bulletActiveClass: "carousel__pagination-bullet--state--active",
    bulletClass: "carousel__pagination-bullet",
    bulletElement: "li",
  },
}; 

// AOS
import AOS from 'aos';

AOS.init();

// Alpine
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus'
import dropdown from './dropdown/_';

Alpine.plugin(focus)
Alpine.data('dropdown', dropdown)
Alpine.data('scrollLock', scrollLock)

window.Alpine = Alpine;
Alpine.start();

// Utils
import initInView from './utils/initInView/_';
import scrollLock from './utils/scrollLock/_';

document.querySelectorAll( '.js-carousel' ).forEach( $el => {
  if (document.querySelectorAll( '.js-carousel' )) {
    initInView( $el, () => {
      import(
        './carousel/_.js' /* webpackChunkName: "/js/carousel" */
      ).then( module => {
        const initCarousel = module.default;
        initCarousel( $el, {
          ...options, 
          // slidesPerView: 2,
          // spaceBetween: 30,
          // modules: [Autoplay, EffectCreative],
          // effect: 'creative',
          // creativeEffect: {
          //   prev: {
          //     translate: ["calc(100% + 60px)", 130, 0],
          //     opacity: 0,
          //   },
          //   next: {
          //     translate: ["calc(100% + 60px)", 130, 0],
          //     opacity: 1, 
          //   },
          // },
        } )
      });
    });
  }
});