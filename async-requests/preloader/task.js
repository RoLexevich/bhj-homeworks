const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

let arrOfValutes = [];


let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active')
        arrOfValutes = Object.values(JSON.parse(xhr.responseText).response.Valute);
        arrOfValutes.forEach((elem) => {
            items.insertAdjacentHTML('beforeend', `
				<div class="item">
				<div class="item__code">
    				${elem.CharCode}
				</div>
				<div class="item__value">
    				${elem.Value}
				</div>
				<div class="item__currency">
    				руб.
				</div>
				</div>`)
        })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();