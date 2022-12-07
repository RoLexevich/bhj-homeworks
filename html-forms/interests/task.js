const mainInterests = document.querySelectorAll('.interest input');



mainInterests.forEach(elem => {
    elem.addEventListener('change', (e) => {
        let children = elem.closest('.interest').querySelectorAll('input');
        children.forEach(elem => {
            elem.checked = e.target.checked;
        });
    });
});