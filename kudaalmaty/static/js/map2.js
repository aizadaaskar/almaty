ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
            center: [43.202926, 76.658712],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'office',
            balloonContent: 'sdu'
        }, {
            
            iconLayout: 'default#image',
            
            iconImageHref: 'images/pin.png',
            
            iconImageSize: [30, 42],
            
        });

       

    myMap.geoObjects
        .add(myPlacemark);
        });