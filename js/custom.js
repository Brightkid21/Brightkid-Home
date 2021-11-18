function AddReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  let carLmt = 280;
  // Text to show when text is collapsed
  let readMoreTxt = " ... Read More";
  // Text to show when text is expanded
  let readLessTxt = " Read Less";

  //Traverse all selectors with this class and manupulate HTML part to show Read More
  $(".addReadMore").each(function () {
    if ($(this).find(".firstSec").length) return;

    let allstr = $(this).text();
    if (
      (allstr.length > carLmt && window.innerWidth <= 720) ||
      ($(this).hasClass("desktopReadMore") && allstr.length > carLmt)
    ) {
      let firstSet = allstr.substring(0, carLmt);
      let secdHalf = allstr.substring(carLmt, allstr.length);
      let strtoadd =
        firstSet +
        "<span class='SecSec'>" +
        secdHalf +
        "</span><span class='readMore'  title='Click to Show More'>" +
        readMoreTxt +
        "</span><span class='readLess' title='Click to Show Less'>" +
        readLessTxt +
        "</span>";
      $(this).html(strtoadd);
    }
  });
  //Read More and Read Less Click Event binding
  $(document).on("click", ".readMore,.readLess", function () {
    $(this)
      .closest(".addReadMore")
      .toggleClass("showlesscontent showmorecontent");
  });
}
$(function () {
  //Calling function after Page Load
  AddReadMore();
});

(function ($) {
  "use strict";

  //sticky menu
  $(window).on("scroll", function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $(".header").addClass("menu_fixed animated fadeInDown");
    } else {
      $(".header").removeClass("menu_fixed animated fadeInDown");
    }
  });

  //video popup
  var video_popup = $(".video_popup, .popup_youtube");
  if (video_popup.length > 0) {
    video_popup.magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  var video_popup = $(".gallery_popup_img");
  if (video_popup.length > 0) {
    video_popup.magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    });
  }

  //parallax ja
  $(function () {
    var $el = $(".parallax_bg");
    $(window).on("scroll", function () {
      var scroll = $(document).scrollTop();
      $el.css({
        "background-position": "50% " + +0.4 * scroll + "px",
      });
    });
  });

  //niceselect select jquery
  var niceSelect = $(".niceSelect");
  if (niceSelect.length > 0) {
    niceSelect.niceSelect();
  }

  //banner slider js
  var bannerSlider = $(".bannerslider");
  if (bannerSlider.length) {
    bannerSlider.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 800,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          nav: false,
        },
        768: {
          nav: true,
        },
      },
    });
  }

  //popular courses js
  var popular_courses = $(".gallery_slider");
  if (popular_courses.length) {
    popular_courses.owlCarousel({
      items: 4,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      margin: 15,
      smartSpeed: 300,
      dotsSpeed: 300,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        767: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
  //popular courses js
  var testimonial = $(".testimonial_slider");
  if (testimonial.length) {
    testimonial.owlCarousel({
      items: 2,
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 500,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
      },
    });
  }

  //time countdow
  $(document).ready(function () {
    function coursesTimer() {
      var endTime = new Date("23 May 2021 9:56:00 GMT+01:00");
      endTime = Date.parse(endTime) / 1000;
      var now = new Date();
      now = Date.parse(now) / 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      $("#days").html(days + "<span>Days</span>");
      $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>");
      $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
      coursesTimer();
    }, 1000);
  });

  // Preloader js
  $(window).on("load", function () {
    $(".preloder").hide();
    $(".loader").delay(3000).hide("slow");
  });

  // map js
  if ($("#contactMap").length) {
    var $lat = $("#contactMap").data("lat");
    var $lon = $("#contactMap").data("lon");
    var $zoom = $("#contactMap").data("zoom");
    var $marker = $("#contactMap").data("marker");
    var $info = $("#contactMap").data("info");
    var $markerLat = $("#contactMap").data("mlat");
    var $markerLon = $("#contactMap").data("mlon");
    var map = new GMaps({
      el: "#contactMap",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
    });
    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,
      infoWindow: {
        content: $info,
      },
    });
  }
  //wow js
  var wow = new WOW({
    animateClass: "animated",
    offset: 100,
    mobile: false,
    duration: 1000,
  });
  wow.init();

  //audio player
  var audio = $("audio");
  if (audio.length) {
    $("audio").audioPlayer({
      classPrefix: "audioplayer",
      strPlay: "",
      strPause: "",
      strVolume: "",
    });
  }

  var gallery = $(".gallery_iner");
  if (gallery.length) {
    gallery.imagesLoaded(function () {
      gallery.isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer",
        },
      });
    });
  }

  var program = document.getElementById("program_list");
  //
  // if (program) {
  //   $(document).ready(function () {
  //     var $grid = $(".program_list_filter").isotope({
  //       itemSelector: ".grid-item",
  //       layoutMode: "fitRows",
  //     });
  //     var $buttonGroup = $(".filters");
  //     $buttonGroup.on("click", "li", function (event) {
  //       $buttonGroup.find(".is-checked").removeClass("is-checked");
  //       var $button = $(event.currentTarget);
  //       $button.addClass("is-checked");
  //       var filterValue = $button.attr("data-filter");
  //       $grid.isotope({
  //         filter: filterValue,
  //       });
  //     });
  //   });
  // }

  //scorll animation js
  var $title_overlay_effect = $(".title_overlay_effect");
  var $window = $(window);

  function scroll_addclass() {
    var window_height = $(window).height() - 200;
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($title_overlay_effect, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("is_show");
      }
    });
  }

  $window.on("scroll resize", scroll_addclass);
  $window.trigger("scroll");

  $window.on("scroll resize", scroll_addclass);
  $window.trigger("scroll");

  function kidjo_rect_wrap(svg) {
    var width = svg.outerWidth(),
      height = svg.outerHeight(),
      svgRect = svg.find("rect"),
      x_pos_rect = svgRect.attr("x"),
      y_pos_rect = svgRect.attr("y");
    if (x_pos_rect) width = width - parseInt(x_pos_rect) * 2;
    if (y_pos_rect) height = height - parseInt(y_pos_rect) * 2;
    if (width * height > 0) {
      svgRect.attr("width", width);
      svgRect.attr("height", height);
    }
  }

  function kidjoHover() {
    jQuery("svg.pc-dashes").each(function () {
      var svg = jQuery(this);
      kidjo_rect_wrap(svg);
    });
  }
  $(document).ready(function () {
    kidjoHover();
  });

  $(function () {
    $(".bg1").lazy();
  });
  $(function () {
    $(".bg2").lazy();
  });
  $(function () {
    $(".bg3").lazy();
  });
  $(function () {
    $(".bg4").lazy();
  });
  $(function () {
    $(".bg5").lazy();
  });
  $(function () {
    $(".bg6").lazy();
  });
})(jQuery);

var form = document.getElementById("form_contact");
var formParent = document.getElementById("contact_page");
form.addEventListener("mouseover", function (e) {
  if (!formParent.classList.contains("hovered")) {
    formParent.classList.add("hovered");
  }
});

form.addEventListener("mouseout", function () {
  if (formParent.classList.contains("hovered")) {
    formParent.classList.remove("hovered");
  }
});

// // tabs in parent benefits of early education
// const tabs= document.querySelectorAll('[data-tab-target')
// const tabContents = document.querySelectorAll('[data-tab-content]')

// tabs.forEach(tab => {
//   tab.addEventListener('click', () =>{
//     const target = document.querySelector(tab.dataset.tabTarget)
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('active')
//     })

//     tabs.forEach(tab => {
//       tab.classList.remove('active')
//     })
//     tab.classList.add('active')
//     target.classList.add('active')
//   })
// })
// Count up
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
