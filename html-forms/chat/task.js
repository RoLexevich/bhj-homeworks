const chat = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
});
chatInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter' && chatInput.value && chatInput.value.trim()) {
        writeMessage(chatInput.value);
        botAnswer();
    }
})



function writeMessage(message) {
    const date = new Date();
    const formatedDate = date.getHours() + ':' + date.getMinutes();

    messages.innerHTML += `
	<div class="message message_client">
    	<div class="message__time">${formatedDate}</div>
    	<div class="message__text">
     	 	${message}
    	</div>
 	</div>
  	` ;
    chatInput.value = '';
}

function botAnswer() {
    const date = new Date();
    const formatedDate = date.getHours() + ':' + date.getMinutes();

    const words = [
            'До свидания!',
            'Зачем Вы мне пишете? Я занят!',
            'Никаких разговорчиков!',
            'Где Ваша совесть?!',
            'Я - высшая форма жизни!',
            'Отстаньте....',
            'Напишите через 10 лет, и, возможно, я Вам отвечу',
            'Иди работай, кожаный',
        ],
        index = Math.floor(Math.random() * words.length);

    messages.innerHTML += `
	<div class="message">
    	<div class="message__time">${formatedDate}</div>
    	<div class="message__text">
     	 	${words[index]}
    	</div>
 	</div>
 	`
}
