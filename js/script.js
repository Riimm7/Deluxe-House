new Swiper('.image-slider',{
   navigation: {
      
      nextEL: '.swiper-button-next',
      prevEL: '.swiper-button-prev'
   }, 

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   spaceBetween: 200,
});

const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
   item.addEventListener("click", headerClick);
});

function headerClick() {
   this.nextElementSibling.classList.toggle("spoiler-body");
};

