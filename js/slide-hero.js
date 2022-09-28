/**
 * @file
 * Global utilities.
 *
 */
 (function ($, Drupal) {

  'use strict';

  Drupal.behaviors.slide_hero = {
    attach: function (context, settings) {

      heroSlick();

    }
  };

  function heroSlick() {
    $('.paragraph-child-front-slide .field--name-field-contenido').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    });
  }
})(jQuery, Drupal);