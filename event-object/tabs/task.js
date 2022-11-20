const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(elem => {
    elem.addEventListener('click', getContent);
});

function getContent(e) {
    let newActiveTabIndex = tabs.indexOf(e.target),
        currentActiveTab,
        currentActiveContent;

    tabs.forEach((tab, index) => {
        if (tab.classList.contains('tab_active')) {
            currentActiveTab = tab;
            currentActiveContent = tabContent[index];
        }
    });

    if (e.target !== tabs[currentActiveTab]) {

        tabs[currentActiveTab].classList.remove('tab_active');
        tabContent[currentActiveContent].classList.remove('tab__content_active');
        e.target.classList.add('tab_active');
        tabContent[newActiveTabIndex].classList.add('tab__content_active');

    }
}