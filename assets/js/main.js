"use strict"


$(function () {

  //SKIDER
  $('.body-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,

  })

  $('.left__arrow').click(function () {
    $('.body-slider').slick('slickPrev');
  })

  $('.right__arrow').click(function () {
    $('.body-slider').slick('slickNext');
  })
})





/////footer

const btnForm = $('#btnForm')
const modalForm = $('.form')
const closeBtn = $('.btn-primary')

modalForm.slideUp()

$(btnForm).on('click', function () {
  console.log("click")
  modalForm.slideToggle()
  btnForm.slideToggle()
});

$(closeBtn).on('click', function () {
  console.log("click")
  btnForm.slideToggle()
  modalForm.slideToggle()

});




///validation 
$("#myForm").validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minlength: 5
    }

  },
  messages: {
    email: {
      required: "Поле email обязательно для заполнения",
    },
    name: {
      required: "Поле имя обязательно для заполнения",
      minlength: jQuery.validator.format("Длина имени должна быть больше 5-ти символов")
    }
  },

});