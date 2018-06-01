ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [43.243416, 76.925715],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'У Адины',
            balloonContent: 'sdu'
        }, {
            
            iconLayout: 'default#image',
            
            iconImageHref: 'images/pin.png',
            
            iconImageSize: [30, 42],
            
        });

       

    myMap.geoObjects
        .add(myPlacemark);
        
});
 $(document).ready(function(){
            $('.loadmore').on('click', '#load', function(){
                $.ajax('loadmore.html',{
                    success:function(response){
                        $('.loaded').html(response).slideDown();
                    },
                     error: function() {
                        $('.loaded').html('<p>Error.</p>')}
                });
            });
        });