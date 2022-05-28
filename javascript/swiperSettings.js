var swiper = new Swiper('.swiper', { // modify the swiper container

    effect: 'coverflow',
    grabCursor: true, 
    loop: true, 
    centeredSlides: true, 
    slidesPerView: 'auto',

    coverflowEffect: {
        rotate: 50, 
        stretch: 0, 
        depth: 100, 
        modifier: 1, 
        slideShadows: false,
    },
});