const arrows = Array.from(document.querySelectorAll('.slider__arrow'));
const photos = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
console.log(dots);
dots[0].classList.add('slider__dot_active');

//установка обработчиков событий
arrows.forEach(elem => {
    elem.addEventListener('click', changePhotoArrows);
});
dots.forEach(elem => {
    elem.addEventListener('click', changePhotoDots);
});


function changePhotoArrows(e) {
    let ar = e.target;
    if(ar.classList.contains('slider__arrow_next')) {
        for(let i = 0; i < photos.length; i++) {
            let photo = photos[i];
            if(photo.classList.contains('slider__item_active')){
                photo.classList.remove('slider__item_active');
                if(i === photos.length - 1) {
                    addClassPhoto(photos[0]);
                    addClassDot(dots[0]);
                } else {
                    addClassPhoto(photos[i + 1]);
                    addClassDot(dots[i + 1])
                }
                break;
            }
        }
    } else if(ar.classList.contains('slider__arrow_prev')) {
        for(let i = photos.length - 1; i > -1; i--) {
            let photo = photos[i];
            if(photo.classList.contains('slider__item_active')){
                photo.classList.remove('slider__item_active');
                if(i === 0) {
                    addClassPhoto(photos[photos.length - 1]);
                    addClassDot(dots[photos.length - 1])
                } else {
                    addClassPhoto(photos[i - 1]);
                    addClassDot(dots[i - 1]);
                }
                break;
            }
        }
    }
}


function changePhotoDots(e) {
    let dot = e.target;
    for(let i = 0; i < dots.length; i++){
        if(dots[i].classList.contains('slider__dot_active')){
            dots[i].classList.remove('slider__dot_active');
        }
    }
    dot.classList.add('slider__dot_active');
    addClassPhoto(photos[dots.indexOf(dot)]);
}



function addClassPhoto(elem) {
    photos.forEach(elem => {
        if(elem.classList.contains('slider__item_active')){
            elem.classList.remove('slider__item_active');
        }
    })
    elem.classList.add('slider__item_active');
}

function addClassDot(elem) {
    dots.forEach(elem => {
        if(elem.classList.contains('slider__dot_active')){
            elem.classList.remove('slider__dot_active');
        }
    });
    elem.classList.add('slider__dot_active');
}
