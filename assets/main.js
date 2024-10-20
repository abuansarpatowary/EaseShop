(function ($) {
  'use strict';

  // meanmenu
  // $('#mobile-menu').meanmenu({
  // 	meanMenuContainer: '.mobile-menu',
  // 	meanScreenWidth: "992"
  // });

  // data-background
  $('[data-background]').each(function () {
    $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
  });

  const menu = document.querySelector('.menu');
  const menuMain = menu.querySelector('.menu-main');
  const goBack = menu.querySelector('.go-back');
  const menuTrigger = document.querySelector('.mobile-menu-trigger');
  const closeMenu = menu.querySelector('.mobile-menu-close');
  let subMenu;
  menuMain.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) {
      return;
    }
    if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener('click', () => {
    hideSubMenu();
  });
  menuTrigger.addEventListener('click', () => {
    toggleMenu();
  });
  closeMenu.addEventListener('click', () => {
    toggleMenu();
  });
  document.querySelector('.menu-overlay').addEventListener('click', () => {
    toggleMenu();
  });
  function toggleMenu() {
    menu.classList.toggle('active');
    document.querySelector('.menu-overlay').classList.toggle('active');
  }
  function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.sub-menu');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.current-menu-title').innerHTML = menuTitle;
    menu.querySelector('.mobile-menu-head').classList.add('active');
  }

  function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
      subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.current-menu-title').innerHTML = '';
    menu.querySelector('.mobile-menu-head').classList.remove('active');
  }

  window.onresize = function () {
    if (this.innerWidth > 991) {
      if (menu.classList.contains('active')) {
        toggleMenu();
      }
    }
  };

  // One Page Nav
  // var top_offset = $(".header-area").height() - 10;
  // $(".main-menu nav ul").onePageNav({
  //   currentClass: "active",
  //   scrollOffset: top_offset,
  // });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $('.header-sticky').removeClass('sticky');
    } else {
      $('.header-sticky').addClass('sticky');
    }
  });

  // owlCarousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>`,
      '<i class="fa fa-long-arrow-right"></i>',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      767: {
        items: 3,
        nav: false,
      },
      992: {
        items: 4,
      },
    },
  });

  /* magnificPopup img view */
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });

  // isotop
  $('.grid').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      },
    });
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();
})(jQuery);
