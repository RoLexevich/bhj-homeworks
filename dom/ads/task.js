const ads = Array.from(document.querySelectorAll('.rotator__case'));

infiniteLoop(ads);

function infiniteLoop(arr) {
    setInterval(() => {
        const index = arr.findIndex((elem) => {
            return elem.classList.contains('rotator__case_active');
        });
        arr[index].classList.remove('rotator__case_active');
        if(index === arr.length - 1) {
            arr[0].classList.add('rotator__case_active');
        } else {
            arr[index + 1].classList.add('rotator__case_active');
        }
    }, 100)
}

