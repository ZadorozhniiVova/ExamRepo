"use strict"


$(function () {

  //SLIDER
  $('.body__slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,

  })

  $('.left__arrow').click(function () {
    $('.body__slider').slick('slickPrev');
  })

  $('.right__arrow').click(function () {
    $('.body__slider').slick('slickNext');
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
  map = new google.maps.Map(document.getElementById('map'), {
      center: {
          lat: 23.331400884730492,
          lng: 114.1726722866911,
      },
      zoom: 5,
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

  let HongKongPsn = {lat: 22.331400884730492, lng:114.1726722866911};

  let showPnt = {
    zoom: 20,
    center: HongKongPsn
  };

  let HongKongMarker = new google.maps.Marker({
      position: HongKongPsn,
      map,
      title: "Hong Kong",
    });
    HongKongMarker.setMap(map)

   HongKongMarker.addListener('onclick', showPnt) 
}


    initMap()

