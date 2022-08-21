"use strict"

//HEADER


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 1.5;

      let animItemPoint = window.innerHeight + animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove('_active')
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  setTimeout(() => {
    animOnScroll()
  }, 300)

}

$(function () {

  // $('.main').slick({
  //   dots: true,
  //   vertical: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   infinite: false,

  // })

  //SLIDER
  $('.body__slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          arrows: false,
          // centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]

  })

  $('.left__arrow').click(function () {
    $('.body__slider').slick('slickPrev');
  })

  $('.right__arrow').click(function () {
    $('.body__slider').slick('slickNext');
  })



  $('.grid__img').on('click', function (event) {
    let target = event.target;
    let targetSrc = $(target).parent().next().attr('src');


    if (targetSrc !== undefined) {
      let modal = `<div class="modal__body"><img src='${targetSrc}' class="modal__img"></div>`
      $('.galery').append(modal)

      let closeBtn = `<svg class="modalClose" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" fill="white"/></svg>`;
      $('.modal__body').append(closeBtn);

    } else {
      let modal = `<div class="modal__body" ><img src='${$(event.target).next().attr('src')}' class="modal__img"></div>`
      $('.galery').append(modal)

      let closeBtn = `<svg class="modalClose" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" fill="white"/></svg>`;
      $('.modal__body').append(closeBtn);


    }
    $('.modalClose').on('click', () => {
      $(".modal__body").remove()
    })
  });

  $(document).mouseup(function (e) {
    var container = $(".modal__body");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
  });

  $('.trade__right-psn').on('click', () => {
    console.log('click')
    map.setOptions({
      center: { lat: 40.71275611373065, lng: -74.01338425969676 },
      zoom: 15,
    });
  })

  
  $('.commerce__left-psn').on('click', () => {
    console.log('click')
    map.setOptions({
      center: { lat: 22.28453280051697, lng: 114.17380099077697 },
      zoom: 15,
    });
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
  submitHandler: function () {
    btnForm.slideToggle()
    modalForm.slideToggle()

  }

  
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
    document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      center: {
        lat: 40.71275611373065,
        lng: -74.01338425969676
      },
      zoom: 13.5,
      disableDefaultUI: true,
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dadada"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#c9c9c9"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }
      ],
    }
  );


 
    
  function addPoint(titleName,lat,long,infoImg,infoText){
    let infowindow = new google.maps.InfoWindow({
      content: `<div class="info__window">
      <img class="info__img" src="${infoImg}">
      <p class="info__text">${infoText}</p>
      </div>`,
    });

    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: long
      },
      map,
      title: `${titleName}`,
      icon: icons.pin.icon
    });
    marker.addListener('click', () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    })

    marker.on('click', () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    })

    
  };

   
  addPoint("World Trade Center",40.71275611373065,-74.01338425969676,"https://lh5.googleusercontent.com/p/AF1QipO6RCMKBDZdcZ8VZtW4qqtc2Og615KSrg2ckJwE=w408-h501-k-no","World Trade Center" );

  addPoint("Hong Kong",22.28453280051697,114.17380099077697,"https://lh5.googleusercontent.com/p/AF1QipPOAdQyvfwTu0f1lTz-9tw14HXOirS7llFxZPn-=w408-h306-k-no","Hong Kong" );

}


initMap()



