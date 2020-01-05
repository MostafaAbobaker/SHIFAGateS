/*global $,document*/
$(document).ready(function () {
  'use strict';

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('focus');
    } else {
      $(this).parent().removeClass('focus');
    }
  });
  $('.del').click(function () {
    $(this).parent().parent().parent().addClass('myRemove');
  });
  $('.RemoveThis').click(function () {
    $('.myRemove').remove();
    $("#exampleModal").modal('hide');
    

  });
});