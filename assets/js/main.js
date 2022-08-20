"use strict"


$(function () {

  //SДIDER
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

//GOOGLE MAPS
var map;
function initMap() {
  const icons = {
    pin: {
      icon: "assets/img/pin.png",
      size: 16
    },
  };

  map = new google.maps.Map(
      document.getElementById('map'),
      {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
      center: {lat: 40.67963895507005, lng:-73.90631436166709},
      zoom: 13.5,
        disableDefaultUI: true,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
  });

  const menu = $("#menu")
  let Brooklyn = {lat: 40.67963895507005, lng:-73.90631436166709};
  let showPnt = {
    zoom: 20,
    center: Brooklyn
  };

  let BrooklynMarker = new google.maps.Marker({
      position: Brooklyn,
      map,
      title: "Hong Kong",
      icon: icons.pin.icon
    });
  BrooklynMarker.setMap(map)
  BrooklynMarker.addListener('onclick', showPnt)
}


    initMap()