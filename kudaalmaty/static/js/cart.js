var cart; //места добавленные в избранные

$.getJSON('js/places.json', function(data){
	var places =data; //все товары в массиве
	checkCart();
	showCart();//вывожу на страницу

	function showCart(){
		var out = '';
		for(var key in data){
            out+='<div class="places">';
            out+='<img class="pl_images" src="'+data[key].image+'">';
            out+='<h2 class="names">'+data[key]['name'];
            out+='<a id="detail" href="src/detail.html"></a>'; 
            out+='<input type="image" data-art="'+key+'" class="remove" src="'+data[key].delete+'">';
            out+='</h2>';
            out+='<p class="address">';
            out+='<img class="location" src="images/location.png">'; 
            out+= data[key]['address']+'</p>';
            out+='</div>';

        }
        $('#myplaces').html(out);
        $('input.remove').on('click', deletePlace);
	}

	function deletePlace(){
		cart.articul = $(this).attr('data-art');
		delete cart.articul;
        $('#myplaces').remove();
		saveCartToLS();
        checkCart();
        
		
	}
});

 function checkCart(){
 	//проверяю наличие новых мест в localStorage
    if(localStorage.getItem('cart') !=null){
        cart = JSON.parse(localStorage.getItem('cart'));

    }
 }
 function saveCartToLS(){
 	localStorage.setItem('cart', JSON.stringify(cart));
 }

