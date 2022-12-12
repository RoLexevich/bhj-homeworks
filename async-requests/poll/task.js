const title = document.querySelector('#poll__title');
const answers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=> {
    if(xhr.readyState === xhr.DONE) {
        let question = JSON.parse(xhr.responseText);
        title.textContent = question.data.title;
        question.data.answers.forEach(elem => {
            let element = document.createElement('button');
            element.classList.add('poll__answer');
            element.innerHTML = `${elem}`;
            answers.appendChild(element);

            element.addEventListener('click', () => {
                alert('Спасибо за Ваш ответ!');
                document.location.reload();
            })
        });
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
