'use strict';

const chatWidget = document.querySelector('.chat-widget');
chatWidget.onclick = () => chatWidget.classList.add('chat-widget_active');

const messages = document.querySelector( '.chat-widget__messages' );

const messagesFromRobot = ['Иди проспись', 'Я занят', 'У нас учет!', 'Еще один...'];

let int;

const currentTime = () => {
    return new Date().getHours() + ':' + new Date().getMinutes();
}

let textOfMessage = document.getElementById('chat-widget__input');

document.addEventListener('keydown', e => {
    if (e.key == 'Enter' && textOfMessage.value !=='') {
        clearTimeout(int); 
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">
                 ${textOfMessage.value}
            </div>
        </div>`;
        messages.scrollIntoView(false);

        setTimeout(() => {
            messages.innerHTML += `
            <div class="message">
                <div class="message__time">${currentTime()}</div>
                <div class="message__text">
                      ${messagesFromRobot[Math.floor(Math.random()*messagesFromRobot.length)]}
                </div>
            </div>`;
        messages.scrollIntoView(false);
        }, 1000);
        textOfMessage.value = '';

        int = setTimeout(() => {
            messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${currentTime()}</div>
                    <div class="message__text">
                          Ты уснул там или че?
                    </div>
                </div>`;
            messages.scrollIntoView(false);
        }, 30000)
    }
});