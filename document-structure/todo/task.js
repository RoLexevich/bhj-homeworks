const input = document.querySelector('.tasks__input');
const tasks = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');


input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        if(!isEmpty()){
            addContent();
        }
    }
});

button.addEventListener('click', e => {
    e.preventDefault();
});

button.addEventListener('mouseup', (e) => {
    if(!isEmpty()) {
        addContent();
    }
});




function addContent() {
    tasks.insertAdjacentHTML('beforeend', `
		<div class="task">
			<div class="task__title">
	        	${input.value}
	    	</div>
	    	<a href="#" class="task__remove">&times;</a>
	    </div>`);
    input.value = '';

    let task = tasks.lastChild;
    task.querySelector('a').addEventListener('click', (e) => {
        e.target.closest('.task').remove();
    })
}

function isEmpty() {
    return input.value.trim() === '';
}

