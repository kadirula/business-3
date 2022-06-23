
/////////////////////////////// SCROLL HEADER /////////////////////////////////////

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 90) header.classList.add('header__scroll'); else header.classList.remove('header__scroll')
}
window.addEventListener('scroll', scrollHeader)


/////////////////////////////// PROJECT FILTER - ISOTOPE /////////////////////////////////////

// init Isotope elements
var box = $(".project__card").isotope({
    itemSelector: ".project__card-item"
});

// filter functions
// bind filter button click
$(".project__filter").on("click", "button", function () {
    $(".project__filter").find(".active").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-type");

    if (filterValue !== "*") {
        filterValue = '[data-type="' + filterValue + '"]';
    }

    box.isotope({ filter: filterValue });
});


/////////////////////////////// MOBILE MENU TOGGLE /////////////////////////////////////
$('.header__hamburger-btn').click(function(){
    const mobileMenu = $('.header__mobile-menu');
    mobileMenu.toggleClass('active');
});

/////////////////////////////// MOBILE (SUB) MENU TOGGLE ///////////////////////////////
$('.header__mobile-menu-dropdown > a').click(function(){
    const mobileDropdownMenu = $(this).siblings('.header__mobile-menu-dropdown-list');
    mobileDropdownMenu.toggleClass('active');
    
});


/////////////////////////////// SCROLL REVEAL ANIMATION ////////////////////////////////
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true, // scroll aşağı yukarı hareket ettikçe animasyon çalışır
  });

  sr.reveal(`.slider__line, .slider__title, .slider__subtitle, .slider__button`, {delay: 500});
  sr.reveal(`.about__image`, {origin:'left'});
  sr.reveal(`.about__info`, {origin:'right'});

  sr.reveal(`.services__card`, {delay:500, interval:200});

  sr.reveal(`.project__filter-item`, {delay:500, interval:100});
  sr.reveal(`.project__card-item`, {delay:500, interval:200});

  sr.reveal(`.team__content`, {origin:'bottom', distance:'150px'});
  
  sr.reveal(`.blog`, {origin:'bottom'});