/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scollY >= 50) header.classList.add('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scollY = window.pageYOffset ;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')
      if(scollY > sectionTop && scollY < sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      }else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }

  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER POPULAR ===============*/


/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);
        if(openItem && openItem !== item){
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content');
 if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
 }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
 }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
