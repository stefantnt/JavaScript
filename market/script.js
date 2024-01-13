let allTotal = 0;

function addToCart(dodaj) {
	let mainElement = dodaj.closest('.single-item');
	let price = mainElement.querySelector('.price').innerText;
	let name = mainElement.querySelector('h3').innerText;
	let kolicina = mainElement.querySelector('input').value;
	let cartItems = document.querySelector('.cart-items');
	price = price.substring(1);
	price = parseInt(price);
	let total = price * parseInt(kolicina);
	allTotal += total;


	if(parseInt(kolicina) > 0) {

		cartItems.innerHTML += `<div class="cart-single-item">
		                        <h3>${name}</h3> 
		                        <p>${price} x ${kolicina} = <span>${total}</span><p> 
		                        <button onclick="removeFromCart(this)" class"remove-item">ukloni</button>
		                        </div>`;


		document.querySelector('.total').innerText = `Total: ${allTotal}`;
		
		dodaj.innerText = 'Dodato';
		dodaj.setAttribute('disabled', 'true');

	} else {
		alert('Odaberi kolicinu!')
	}
}

function removeFromCart(dugmeRemove) {
   let ukloni = dugmeRemove.closest('.cart-single-item');
   let cena = ukloni.querySelector('p span').innerText;
   cena = parseInt(cena);

   allTotal -= cena;

   document.querySelector('.total').innerText = `Total: ${allTotal}`;

   ukloni.remove();
   

}