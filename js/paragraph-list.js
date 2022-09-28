/**
 * @file
 * Global utilities.
 *
 */
 (function ($, Drupal) {

  'use strict';

  Drupal.behaviors.paragraph_list = {
    attach: function (context, settings) {

      const links = buildList();
      $('#paragraph-list').html(links);

    }
  };

  function buildList() {
    var links = '';
    $('.field--name-field-contenido.field__items > .field__item').each(function(index, el) {
      $(el).attr('id', 'paragraph-item-' + index);
      links += "<a href='#paragraph-item-" + index + "' class='btn btn-primary'>" + $(el).find('.field--name-field-title').text() + "</a>";
    });
    return links;
  }
})(jQuery, Drupal);