let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: 'POCO M3',
		specs: '8GB RAM/128GB Storage',
		price: 7990
		
	},
	{
		name: 'Xiaomi Mi 10T',
		specs: '8GB RAM/128GB Storage',
		price: 20990
		
	},
	{
		name: 'POCO X3 NFC',
		specs: '8GB RAM/128GB Storage',
		price: 12990
		
	},
	{
		name: 'POCO F2 Pro',
		specs: '8GB RAM/128GB Storage',
		price: 29990
		
	},
	{
		name: 'Xiaomi Mi 10',
		specs: '8GB RAM/128GB Storage',
		price: 36990,
		incart: 0
	},
	{
		name: 'Xiaomi Mi 10 Prp',
		specs: '8GB RAM/128GB Storage',
		price: 45990,
		incart: 0
	},
	{
		name: 'Xiaomi Black Shark 3',
		specs: '8GB RAM/128GB Storage',
		price: 34995,
		incart: 0
	},
	{
		name: 'Xiaomi Black Shark 3 Pro',
		specs: '8GB RAM/128GB Storage',
		price: 44990,
		incart: 0
	}
]




for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumber(products[i]);
		console.log(products[i]);
	})
}


// function cartNumber(products) {

// 	let productNumber = localStorage.getItem('cartNumber');
// 	productNumber = parseInt(productNumber);

// 	if (productNumber){
// 		localStorage.setItem('cartNumber', productNumber + 1); 

// 	}else{
// 		localStorage.setItem('cartNumber', 1); 
// 	}
// }

function setItem(products) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	

	if(cartItems != null) {
		cartItems

	}else{

	}

	localStorage.setItem("productIsInCart", JSON.stringify(cartItems))
}

function displaycart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	let productContainer = document.querySelector(".product-container");

	if(cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML +=
			
		});
	}

}


//https://www.youtube.com/watch?v=PoTGs38DR9E