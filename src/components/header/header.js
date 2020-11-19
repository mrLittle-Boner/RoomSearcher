$(".burger-nav").on("click", () => {
  $(".mobile-nav").css("left", "0");
});

$(".mobile-nav__close").on("click", () => {
  $(".mobile-nav").css("left", "-100%");
});
