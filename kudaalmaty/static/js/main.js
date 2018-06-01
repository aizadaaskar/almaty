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
            balloonContent: 'у Адины'
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
                        $('#load').remove();
                    },
                     error: function() {
                        $('.loaded').html('<p>Error.</p>')}
                });
            });
            $('#profile').hide();
            $('.send').click(function(){
                 $('#log').remove();
                 $('#registration').remove();
                 $('#profile').show();
            });
});

/*var cart; //my bucket

 $(document).ready(function(){
    loadPlaces(); //вывожу места с json файла на страницу
    checkCart();
   
 });
 function loadPlaces(){
    $.getJSON('js/places.json', function(data){
        var out ='';
        for(var key in data){
            out+='<div class="places">';
            out+='<img class="pl_images" src="'+data[key].image+'">';
            out+='<h2 class="names">'+data[key]['name'];
            out+='<a id="detail" href="src/detail.html"></a>'; 
            out+='<input type="image" data-art="'+key+'" class="like" src="'+data[key].input+'">';
            out+='</h2>';
            out+='<p class="address">';
            out+='<img class="location" src="images/location.png">'; 
            out+= data[key]['address']+'</p>';
            out+='</div>';

        }
        $('#place').html(out);
        $('input.like').on('click', addToCard);
    })
 }
 function addToCard(){
    cart.articul =$(this).attr('data-art');
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    console.log(cart);
 }

 function checkCart(){
    if(localStorage.getItem('cart') !=null){
        cart = JSON.parse(localStorage.getItem('cart'));

    }
 }
*/
function validate(){
    var name=document.getElementById('name').value;
    var surname=document.getElementById('surname').value;
    var email=document.getElementById('example-email-input').value;
    var login=document.getElementById('text').value;
    var password=document.getElementById('password').value;
    var repeatpasswd=document.getElementById('repeatPass').value;
    var regEmail = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    if(name!="" && surname!="" && regEmail.test(email) && login!="" && password.match(/[A-Z][a-z]([0-9]){1,3}/i) && password==repeatpasswd){
        alert("success");
    }
    if(name=="") {
        alert('enter name')
    }
    if(surname=="") {
        alert('surname')
    }
    
    if(regEmail.test(email)==false){
        alert("enter valid email")
    }
    if(login=="") {
        alert('login')
    }
    if(!password.match(/[A-Z][a-z]([0-9]){1,3}/i)){
        alert("enter valid password")
    }
    if(password !=repeatpasswd){
        alert("repeat password")
    }

}