// (function(){
// 	const cartInfo = document.getElementById('cart-info');
// 	const cart = document.getElementById('add-cart');

// 	cartInfo.addEventListener('click', function()) {
// 		cart.classlist.toggle("")
// 	}
// )



(function() {

	const cartBtn = document.querySelectorAll('.btn');

	cartBtn.forEach(function(btn) {
		btn.addEventListener('click',function(event) {

			console.log(event.target);
		})
	})
})();