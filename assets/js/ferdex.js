
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


//  maps
ymaps.ready(function () {
  var map = new ymaps.Map('map', {
   center: [54.984245, 73.368820],
    zoom: 12,
      controls: ['zoomControl']

  }, {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
    maxZoom: 19,
    minZoom: 3,
    autoFitToViewport: 'always',
    avoidFractionalZoom: true,
   restrictMapArea: [
                  [54.975860, 73.268738],
                  [55.015374, 73.383422]
                ],
    //projection: new ymaps.projection.Cartesian([[-16384, 16384], [16384, -16384]], [false, false]),
    behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
    type: 'yandex#map',
    cursor: 'pointer',
    autoCursor: true,
    margin: [0, 0, 0, 0],
    autoSwitchBehavior: true,
    pixelRatio: 1,
    zoomMargin: 0,
    mapAutoPan: true,
    mapAutoFocus: true,
    suppressObsoleteBrowserNotifier: true,
    suppressMapOpenBlock: true,
    
  });

 


   map.geoObjects.add(new ymaps.Placemark([54.985343, 73.310846], {
    balloonContentHeader: "my office",
   
  }));

  // Создаем стилизованные объекты управления
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        top: 10,
        right: 10
      }
    }
  });

  // Добавляем объекты управления на карту
  map.controls.add(zoomControl);

 


  // Добавляем объекты на карту

});



function printPDF() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/assets/pdf/Resume.pdf', true);
  xhr.responseType = 'blob';

  xhr.onload = function(e) {
    if (this.status == 200) {
      var blob = new Blob([this.response], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(blob);
      window.open(fileURL);
    }
  };

  xhr.send();
}

// Привязываем функцию к кнопке
var printButton = document.getElementById('printResume');
printButton.addEventListener('click', printPDF);

//отправка на почту
const messageSentButton = document.getElementById('messageSentMessage');

// Add a click event listener to the button
messageSentButton.addEventListener('click', function(event) {
  // Create a new popup element
  const popupElement = document.createElement('div');
  
  // Set the content of the popup element
  popupElement.textContent = 'Сообщение отправлено!';
  
  // Add the popup element to the page's DOM tree
  document.body.appendChild(popupElement);
  
  // Style the popup element using CSS
  popupElement.style.position = 'absolute';
  popupElement.style.top = '50%';
  popupElement.style.left = '50%';
  popupElement.style.transform = 'translate(-50%, -50%)';
  popupElement.style.backgroundColor = '#fff';
  popupElement.style.padding = '1rem';
  popupElement.style.border = '1px solid #000';
  
  // Prevent the default action of the button (e.g., submitting a form)
  event.preventDefault();
});