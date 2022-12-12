const progress = document.getElementById( 'progress' );
const input = document.querySelector('#file');
const form = document.querySelector('#form');
const formData = new FormData(document.querySelector('#form'));

let xhr = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});

input.addEventListener('change', (e) => {
    formData.append('file', e.srcElement.files[0])

});

xhr.upload.onprogress = function(event)  {
    progress.value = event.loaded / event.total;
};


