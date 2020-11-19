
$(".search-main__mobile-filter").on("click", function () {
  $(".filter").toggleClass("filter--open");
  $(this).toggleClass("search-main__mobile-filter--open");
  $(this).hasClass("search-main__mobile-filter--open")
    ? $(this).children().text("expand_less") :
    $(this).children().text("expand_more");
});
