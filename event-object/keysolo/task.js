class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  int = null;

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Shift' || e.key === 'Control' || e.key === 'CapsLock') return;
      (this.currentSymbol.textContent.toUpperCase() === String.fromCharCode(e.keyCode) || this.currentSymbol.textContent.toUpperCase().charCodeAt(0) === e.key.toUpperCase().charCodeAt(0)) ? this.success() : this.fail();
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    clearInterval(this.int);
    this.setTimer(word);
  }

  setTimer(word) {
    let time = new Date();
    time.setSeconds(word.length);
    document.getElementById('timer').textContent = (new Date(time)).getSeconds();
    this.int = setInterval(() => {
      time -= 1000;
      let seconds = (new Date(time)).getSeconds();
      if (seconds === 0) {
        this.fail();
      }
      document.getElementById('timer').textContent = (new Date(time)).getSeconds();
    }, 1000);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'я люблю kitkat'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

