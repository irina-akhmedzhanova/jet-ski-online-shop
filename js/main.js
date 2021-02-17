//SLIDER
$('.banner-section_slider').slick({
  dots: true,
  prevArrow: '<button class="banner-section_slider_btnprev"><img src="images/left.svg"></button>',
  nextArrow: '<button class="banner-section_slider_btnnext"><img src="images/right.svg"></button>',
  responsive: [
    {
      breakpoint: 910,
      settings: {
        arrows: false,
      }
    }
  ]
});
 
//ПЕРЕКЛЮЧЕНИЕ НА ПАНЕЛИ ПОИСКА
$('.tab').on('click', function(e){
  e.preventDefault();

  $($(this).siblings()).removeClass('tab--active');
  $($(this).closest('.search-tabs').siblings().find('.tabs-content')).removeClass('tabs-content--active');

  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');
});

//ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$('.tab').on('click', function(e){
  e.preventDefault();

  $($(this).siblings()).removeClass('tab--active');
  $($(this).parent().siblings().find('.tabs-content')).removeClass('tabs-content--active');

  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');
});

//ИЗМЕНЕНИЕ СЕРДЦА НА МИНИ-КАРТОЧКЕ ТОВАРА
$('.product-item_favorite').on('click', function(){
  $(this).toggleClass('product-item_favorite--active')
});

//СЛАЙДЕР
$('.product-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  prevArrow: `<button class="product-slider_btn product-slider_btnprev">
  <img src="images/arrow-black_left.svg"></button>`,
  nextArrow: `<button class="product-slider_btn product-slider_btnnext">
  <img src="images/arrow-black_right.svg"></button>`,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        dots: true,
      }}, 
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true,
      }},
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          dots: true,
      }},
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
      }}
  ]
});

//Подключение FormStyler
$('.filter-style').styler();

//Раскрытие фильтров
$('.item-drop, .filter-extra').on('click', function() {
  $(this).toggleClass('item-drop--active');
  $(this).next().slideToggle();
});

//СЛАЙДЕР "ЦЕНА"
$(".js-range-slider").ionRangeSlider({
  grid: false,
  type: "double",
  min: 100000,
  max: 500000,
  hide_from_to: true,
  skin: "round",
});

//Переключение вида каталога
$('.catalog-filter_btn_grid').on('click', function() {
  $(this).addClass('catalog-button--active');
  $('.catalog-filter_btn_line').removeClass('catalog-button--active');
  $('.catalog-item').removeClass('catalog-item--line');
});
$('.catalog-filter_btn_line').on('click', function() {
  $(this).addClass('catalog-button--active');
  $('.catalog-filter_btn_grid').removeClass('catalog-button--active');
  $('.catalog-item').addClass('catalog-item--line');
});

//Star rating
$('.rate-yo').rateYo({
  rating: 3.6,
  normalFill: "#C4C4C4",
  ratedFill: "#1C62CD",
  starWidth: "23px",
  spacing: "7px",
});

//Mobile menu
$('.menu-btn').on('click', function() {
  $('.mobile_menu').toggleClass('mobile_menu--active')
});

//Mobile footer
$('.footer-top_item-title').on('click', function() {
  $(this).toggleClass('footer-top-item--active');
  $($(this)).next().slideToggle();
});

//Mobile filter
$('.aside-btn').on('click', function() {
  $($(this)).next().slideToggle();
});

//Mobile shoplist
$('.more-shops_link').on('click', function() {
  $(this).toggleClass('more-shops_link--active');
  $($(this)).next().slideToggle();
});
