
$(".search-main__mobile-filter").on("click", function () {
  $(".filter").toggleClass("filter--open");
  $(this).toggleClass("search-main__mobile-filter--open");
  $(this).hasClass("search-main__mobile-filter--open")
    ? $(this).children().text("expand_less") :
    $(this).children().text("expand_more");
});

$(".js-range-slider").ionRangeSlider();

$(".filter__more-title").on("click", function () {
  $(".filter__more-dropdown").toggleClass("filter__more-dropdown--show");
  if ($(".filter__more-dropdown").hasClass("filter__more-dropdown--show")) {
    $(".filter__more-title i").text("expand_less");
  } else {
    $(".filter__more-title i").text("expand_more");
  }
})