export default (addVariant, addComponents) => {
  addVariant('carousel-inited', '&.carousel--inited');
  addVariant('slide-active', '&.carousel-slide-active');
  addVariant('slide-next', '&.carousel-slide-next');
  addVariant('slide-prev', '&.carousel-slide-prev');  

  addComponents({
    '.container' : {
      '--carouselOwerflowX':'auto',
      '--carouselSlidesCount':'auto',
      '--carouselSlidesGap':'0px',
      '--carouselScrollPaddingSize':'0.5rem',
      '--carouselScrollPadding':'var(--carouselScrollPaddingSize)',

      position: 'relative',
      overflow: 'var(--carouselOwerflowX)',
      scrollSnapType: 'x mandatory',
      margin: '0 auto',
      
      // .carousel--inited

      '&--inited': {
        '--carouselSlidesGap': '0',
        '--carouselOwerflowX': 'hidden',
        '--carouselScrollPadding': 'calc(var(--carouselScrollPaddingSize) + var(--scrollbarSize))',
      },

      // .carousel__wrapper

      '&__wrapper': {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        boxSizing: 'content-box',
        paddingBottom: 'var(--carouselScrollPadding)',
      },

      // .carousel__slide

      '&__slide': {
        position: 'relative',
        width: 'calc((100% - (var( --carouselSlidesCount ) - 1)*var(--carouselSlidesGap))/var( --carouselSlidesCount ))',
        flexShrink: '0',

        '&+&': {
          marginLeft: 'var(--carouselSlidesGap)',

          '.carousel--inited &': {
            '--carouselSlidesGap': '0',
          }
        }
      }
    }
  });

  addComponents({
    '.carousel-pagination': {
      display: 'flex',
      justify-content: 'end',
      margin-top: rem(54')',
      list-style: 'none',
    }
  });
};