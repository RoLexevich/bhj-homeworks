const quantity_controls = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');


productAdd.forEach(elem => {
    elem.addEventListener('click', addToCart);
})
quantity_controls.forEach(elem => {
    elem.addEventListener('click', changeQuantity);
})


//изменение кол-ва в карточке товара
function changeQuantity() {
    const value = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    const valueInt = parseInt(value.textContent);

    if (this.classList.contains('product__quantity-control_dec')) {
        if (valueInt > 1) {
            value.textContent = valueInt - 1;
        }
    } else {
        value.textContent = valueInt + 1;
    }
}

//добавление в корзину
function addToCart() {
    const product = this.closest('.product');
    const img = product.querySelector('img').cloneNode();
    const quantity = product.querySelector('.product__quantity-value');

    img.classList.remove('product__image');
    img.classList.add('cart__product-image');
    if (!isInCart(product.dataset.id)) {
        cart.innerHTML += `
		<div class="cart__product" data-id="${product.dataset.id}">
	    	
	    </div>`
        cart.lastChild.appendChild(img, false);
        cart.lastChild.innerHTML += `
		<div class="cart__product-count">${quantity.textContent}</div>`
    } else {
        let cards = Array.from(cart.children);
        cards.forEach(elem => {
            if (elem.dataset.id === product.dataset.id) {
                console.log(elem);
                let newQuantity = parseInt(quantity.textContent) + parseInt(elem.querySelector('.cart__product-count').textContent)
                elem.querySelector('.cart__product-count').innerHTML = `
					${newQuantity}`
            }
        })
    }
}


//проверка, есть ли в корзине элемент
function isInCart(id) {
    let cards = Array.from(cart.children);
    return cards.some((elem) => {
        return elem.dataset.id === id
    });
}


