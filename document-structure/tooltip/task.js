const links = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltips = [];

links.forEach(elem => {
    elem.addEventListener('click', showTooltip);
});


function showTooltip(e) {
    e.preventDefault();

    let tooltip = document.createElement('div'),
        coords = this.getBoundingClientRect();

    tooltip.classList.add('tooltip');
    tooltip.classList.add('tooltip_active');
    tooltip.innerHTML = this.title;

    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.bottom + 'px';

    if (isAlreadyCklicked(tooltip) !== -1 && isAlreadyCklicked(tooltip) !== undefined) {
        clearTooltip();
    } else {
        clearTooltip();
        tooltips.push(tooltip);
        document.body.append(tooltip);
    }
}


function clearTooltip() {
    if (tooltips.length > 0) {
        tooltips[0].classList.remove('tooltip_active');
        tooltips.shift();
    }
}

function isAlreadyCklicked(elem) {
    if (tooltips.length > 0) {
        return tooltips.findIndex((el) => {
            return el.textContent === elem.textContent;
        });
    }

}