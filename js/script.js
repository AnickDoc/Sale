$(document).ready(function () {

  //маска;
  $.mask.definitions["9"] = false;
  $.mask.definitions["5"] = "[0-9]";
  $("input[type=tel]")
    .mask("8955 555 55 55")
    .on("click", function () {
      $(this).trigger("focus");
    });

  //форма;
  $("#form1").on("submit", function (e) {
    var formThis = this;
    $.ajax({
      url: "send.php",
      type: "POST",
      data: $(this).serialize(),
      beforeSend: function () {
        $(formThis)
          .children(".step5")
          .fadeOut(function () {
            $(formThis).children(".step6").show();
          });
      },
    }).done(function () { });
    e.preventDefault();
  });

  $("#form2").on("submit", function (e) {
    var formThis = this;
    $.ajax({
      url: "send.php",
      type: "POST",
      data: $(this).serialize(),
      beforeSend: function () {
        $(formThis)
          .children(".popup__step1")
          .fadeOut(function () {
            $(formThis).children(".popup__step2").show();
          });
      },
    }).done(function () { });
    e.preventDefault();
  });

  //popup;
  // $("").on("click", function () {
  //   $(".popup").fadeIn();
  //   $("body").css("overflow", "hidden");
  // });

  $(".popup__close").on("click", function () {
    $(".popup").fadeOut();
    $("body").css("overflow", "auto");
  });

  $('.popup__ov').click(function (e) {
    if ($(e.target).closest('.popup__body').length == 0) {
      $(".popup").fadeOut();
      $("body").css("overflow", "auto");
    }
  });

  //step
  $(".debt__btn").on("click", function () {
    $(".debt__step").hide();
    $(".step1").show();
  });

  $(".step__btn[type='button']").on("click", function () {
    var th = $(this).parent();
    th.hide();
    th.next().show();
  });
});

