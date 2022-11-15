const menuItems = Array.from(document.querySelectorAll('.menu__item'));
const menusSub = Array.from(document.querySelectorAll('.menu_sub'));

menuItems.forEach(elem => {
    let link = elem.querySelector('.menu__link');
    if(elem.querySelector('.menu_sub')) {
        link.addEventListener('click', openMenu);
    }
});

function openMenu(e) {
    let subMenu = this.closest('.menu__item').querySelector('.menu_sub');
    e.preventDefault();
    menusSub.forEach(elem => {
        if(elem.classList.contains('menu_active') && subMenu !== elem) {
            elem.classList.remove('menu_active');
        }
    });
    subMenu.classList.toggle("menu_active");
}

