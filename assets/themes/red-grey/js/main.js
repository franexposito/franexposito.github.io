/*jslint browser: true*/
/*global $, jQuery, alert*/

function animateRotate(elem, direction) {
  "use strict";
  var d1, d2;
  if (direction === "left") {
    d1 = 180;
    d2 = 0;
  } else if (direction === "right") {
    d1 = 0;
    d2 = 180;
  }

  $({deg: d1}).animate({deg: d2}, {
    duration: 800,
    step: function (now) {
      elem.css({
        transform: "rotate(" + now + "deg)"
      });
    }
  });
}

function scrollToThis(tar) {
  'use strict';
  var $target = $(tar);
  $('html, body').stop().animate({'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
    window.location.hash = tar;
  });
}

$(document).ready(function () {
  "use strict";
  $('.hover-me').on('mouseover', function () {
    $('.hover-me').hide();
    $('.text-info-appear').slideDown();
  });

  $('#info').on('mouseleave', function () {
    $('.text-info-appear').slideUp();
    setTimeout(function () {$('.hover-me').fadeIn(); }, 500);
  });

  $('#totop').on('click', function (evt) {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $('#navicon').on('click', function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      animateRotate($("#navicon .fa"), 'left');
      $('#menu').slideUp();
    } else {
      $(this).addClass('active');
      animateRotate($("#navicon .fa"), 'right');
      $('#menu').slideDown();
    }
  });

  $('html').click(function (evt) {
    if ($('#navicon').hasClass('active')) {
      $('#navicon').removeClass('active');
      animateRotate($("#navicon .fa"), 'left');
      $('#menu').slideUp();
    }
  });

  $('#menu').click(function (evt) {
    evt.stopPropagation();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.navbar-btn').css('display', 'block');
    } else {
      $('.navbar-btn').css('display', 'none');
    }

    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      var newval = $(window).height() - 55;
      $('.logo').stop(true, true).animate({ top: newval }, 600);
    } else {
      if ($('.logo').css('top') !== '50px') {
        $('.logo').animate({ top: "50px" }, 600);
      }
    }
  });

  $('.menu-a2').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  $('.btn-info').on('click', function (e) {
    e.preventDefault();
    scrollToThis("#works");
  });

  $('.fa-angle-down').on('click', function (e) {
    e.preventDefault();
    scrollToThis("#blog");
  });
});
