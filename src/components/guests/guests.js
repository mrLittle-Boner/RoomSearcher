$("#guests-input").on("click", function () {
  $(".guests__dropdown").toggleClass("guests__dropdown--show");
});

$(".guests__item-controler").on("click", function (event) {
  var target = $(event.target);
  var targetClass = target[0].attributes.class.value;
  var count = $(this).children()[1];

  if (targetClass === "guests__dropdown-minus") {
    +count.innerHTML > 0 ? count.innerHTML = +count.innerHTML - 1 : false;
  }
  if (targetClass === "guests__dropdown-plus") {
    count.innerHTML = +count.innerHTML + 1;
  }
});



$(".guests__btn-done").on("click", function () {
  countGuests();
  $(".guests__dropdown").removeClass("guests__dropdown--show");
});

$(".guests__btn-clear").on("click", function () {
  $(".guests__dropdown-count").each(function () {
    $(this).text("0");
  });
  $(".guests__dropdown-babies").text("0");
});

function countGuests() {
  var guestsCount = 0;
  var babiesCount = +$(".guests__dropdown-babies")[0].innerHTML;
  $(".guests__dropdown-count").each(function () {
    guestsCount += +$(this)[0].innerHTML;
  })

  // Lasciate ogni speranza, voi ch’entrate
  if (guestsCount || babiesCount) {
    $(".guests__text").text((+guestsCount ? guestsCount > 1 ? guestsCount + " guests " : guestsCount + " guest " : "") + (+babiesCount ? babiesCount > 1 ? babiesCount + " babies" : babiesCount + " baby" : ""));
  } else {
    $(".guests__text").text("How many guests?");
  }
}
