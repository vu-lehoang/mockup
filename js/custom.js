$(document).ready(function () {
  // Make mockups dragable
  var __dx;
  var __dy;
  var __scale = 1.75;
  var __recoupLeft, __recoupTop;
  $(".iphone-wrapper, .ipad-wrapper, .desktop-wrapper, .mac-wrapper").draggable(
    {
      //revert: true,
      zIndex: 100,
      drag: function (event, ui) {
        //resize bug fix ui drag `enter code here`
        __dx = ui.position.left - ui.originalPosition.left;
        __dy = ui.position.top - ui.originalPosition.top;
        //ui.position.left = ui.originalPosition.left + ( __dx/__scale);
        //ui.position.top = ui.originalPosition.top + ( __dy/__scale );
        ui.position.left = ui.originalPosition.left + __dx;
        ui.position.top = ui.originalPosition.top + __dy;
        //
        ui.position.left += __recoupLeft;
        ui.position.top += __recoupTop;
      },
      start: function (event, ui) {
        $(this).css("cursor", "pointer");
        //resize bug fix ui drag
        var left = parseInt($(this).css("left"), 10);
        left = isNaN(left) ? 0 : left;
        var top = parseInt($(this).css("top"), 10);
        top = isNaN(top) ? 0 : top;
        __recoupLeft = left - ui.position.left;
        __recoupTop = top - ui.position.top;
      },

      create: function (event, ui) {
        $(this).attr("oriLeft", $(this).css("left"));
        $(this).attr("oriTop", $(this).css("top"));
      },
    }
  );

  // Switchery
  var elems = Array.prototype.slice.call(
    document.querySelectorAll(".js-switch")
  );
  elems.forEach(function (html) {
    var switchery = new Switchery(html, {
      size: "small",
    });
  });

  //Remove mockups
  $("[name='imac']").change(function () {
    if ($(this).is(":checked")) {
      $(".desktop-wrapper").fadeIn("slow");
    } else {
      $(".desktop-wrapper").fadeOut("slow");
    }
  });

  $("[name='mac']").change(function () {
    if ($(this).is(":checked")) {
      $(".mac-wrapper").fadeIn("slow");
    } else {
      $(".mac-wrapper").fadeOut("slow");
    }
  });

  $("[name='ipad']").change(function () {
    if ($(this).is(":checked")) {
      $(".ipad-wrapper").fadeIn("slow");
    } else {
      $(".ipad-wrapper").fadeOut("slow");
    }
  });

  $("[name='iphone']").change(function () {
    if ($(this).is(":checked")) {
      $(".iphone-wrapper").fadeIn("slow");
    } else {
      $(".iphone-wrapper").fadeOut("slow");
    }
  });

  //iPhone fullscreen
  $("[name='iphonefullscreen']").change(function () {
    if ($(this).is(":checked")) {
      $(".iphone-inner").animate({ height: "226px" }, "slow");
      $(".iphone-inner").animate({ "margin-top": "6px" }, "slow");
      $(".iphone-inner").animate({ "border-radius": "13px" }, "slow");
    } else {
      $(".iphone-inner").animate({ height: "214px" }, "slow");
      $(".iphone-inner").animate({ "margin-top": "18px" }, "slow");
      $(".iphone-inner").css({ "border-radius": "0px 0px 13px 13px" });
    }
  });

  //Larger mockups
  $("[name='largermockups']").change(function () {
    if ($(this).is(":checked")) {
      $(".iphone-wrapper").animate({ scale: "1.2" }, "slow");
      $(".ipad-wrapper").animate({ scale: "1.2" }, "slow");
      $(".mac-wrapper").animate({ scale: "1.2" }, "slow");
      $(".desktop-wrapper").animate({ scale: "1.2" }, "slow");
    } else {
      $(".iphone-wrapper").animate({ scale: "1" }, "slow");
      $(".ipad-wrapper").animate({ scale: "1" }, "slow");
      $(".mac-wrapper").animate({ scale: "1" }, "slow");
      $(".desktop-wrapper").animate({ scale: "1" }, "slow");
      $(".desktop-wrapper").fadeOut("fast");
      $(".desktop-wrapper").fadeIn("fast");
    }
  });

  //Custom color picker
  $("#customcolorpicker").spectrum({
    color: "#F3F3F3",
    move: function (color) {
      $("body").css("background-color", color.toHexString());
    },
  });

  var innerWrapper = $(".inner-wrapper");
  $(".mockup-left-perspective").click(function () {
    /*$('.inner-wrapper').animate({  borderSpacing: -90 }, {
        step: function(now,fx) {
        $(".inner-wrapper").css('transform','rotateY(11deg) scale(0.7)');
    },
    duration:'slow'
},'linear');*/

    innerWrapper.transition({
      rotateY: 15,
      scale: 0.7,
      complete: function () {
        innerWrapper.animate({ padding: "20px" }, "slow");
      },
    });
  });

  $(".mockup-right-perspective").click(function () {
    innerWrapper.transition({
      rotateY: -18,
      scale: 0.7,
      complete: function () {
        innerWrapper.animate({ padding: "10px 0px" }, "slow");
      },
    });
  });

  $(".mockup-front-perspective").click(function () {
    innerWrapper.transition({
      rotateY: 0,
      scale: 1,
      complete: function () {
        //innerWrapper.animate({ 'padding' : '10px 0px' }, "slow");
      },
    });
  });

  $(".take-screenshot-btn").click(function () {});
});
