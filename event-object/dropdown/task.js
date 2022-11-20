const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');

dropdownValue.addEventListener('click', openList);
dropdownItems.forEach(elem => {
    elem.addEventListener('click', closeList);
})


function openList() {
    dropdownList.classList.add('dropdown__list_active');
}

function closeList(e) {
    e.preventDefault();
    dropdownList.classList.remove('dropdown__list_active');
    dropdownValue.innerHTML = this.querySelector('a').innerHTML;
}