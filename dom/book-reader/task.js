const textSize = Array.from(document.querySelectorAll('.font-size'));
const book  = document.querySelector('.book');

textSize.forEach(elem => {
    elem.addEventListener('click', changeSize);
});


function changeSize(e) {
    e.preventDefault();
    if(this.classList.contains('font-size_small')) {
        clearBook();
        changeSizeStyle(event);
        book.classList.add('book_fs-small');
    } else if(this.classList.contains('font-size_big')) {
        clearBook();
        changeSizeStyle(event);
        book.classList.add('book_fs-big');
    } else {
        clearBook();
        changeSizeStyle(event);
    }
}


function changeSizeStyle(e) {
    textSize.forEach((elem) => {
        if(elem !== e.target && elem.classList.contains('font-size_active')) {
            e.target.classList.add('font-size_active');
            elem.classList.remove('font-size_active');
        }
    })
}


function clearBook() {
    if(book.classList.length > 1) {
        for(let i = 1; i <= book.classList.length; i++) {
            book.classList.remove(book.classList[i]);
        }
    }
}