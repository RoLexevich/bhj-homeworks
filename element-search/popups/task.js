const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseTimes = Array.from(document.querySelectorAll('.modal__close_times'));
const btnDanger = document.querySelector('.btnDanger');
const btnSuccess = document.querySelector('.btn_success');




modalMain.classList.add('modal_active');

modalCloseTimes.forEach(elem => {
    elem.addEventListener('click', () => {
        let parent = elem.closest('.modal');
        parent.classList.remove('modal_active');
    })
});




btnDanger.addEventListener('click', () => {
    modalSuccess.classList.add('modal_active');
    modalMain.classList.remove('modal_active');
});

btnSuccess.addEventListener('click', () => {
    modalSuccess.classList.remove('modal_active');
});

