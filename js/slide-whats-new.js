/**
 * @file
 * Global utilities.
 *
 */
 (function ($, Drupal) {

  'use strict';

  Drupal.behaviors.whats_new_slide = {
    attach: function (context, settings) {

      whatsNewSlide();

    }
  };

  function whatsNewSlide() {
    $('.paragraph-child-whats-new .field--name-field-contenido').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    });
  }

})(jQuery, Drupal);