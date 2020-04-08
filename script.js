

let lang = localStorage.getItem('lang') || 'ru';
let isCapsLockOn = false;

const keyboardData = [

  { value: { en: '~', ru: 'ё' }, keySize: 'key-square', keyCode: 'Backquote' },
  { value: { en: '1', ru: '1' }, keySize: 'key-square', keyCode: 'Digit1' },
  { value: { en: '2', ru: '2' }, keySize: 'key-square', keyCode: 'Digit2' },
  { value: { en: '3', ru: '3' }, keySize: 'key-square', keyCode: 'Digit3' },
  { value: { en: '4', ru: '4' }, keySize: 'key-square', keyCode: 'Digit4' },
  { value: { en: '5', ru: '5' }, keySize: 'key-square', keyCode: 'Digit5' },
  { value: { en: '6', ru: '6' }, keySize: 'key-square', keyCode: 'Digit6' },
  { value: { en: '7', ru: '7' }, keySize: 'key-square', keyCode: 'Digit7' },
  { value: { en: '8', ru: '8' }, keySize: 'key-square', keyCode: 'Digit8' },
  { value: { en: '9', ru: '9' }, keySize: 'key-square', keyCode: 'Digit9' },
  { value: { en: '0', ru: '0' }, keySize: 'key-square', keyCode: 'Digit0' },
  { value: { en: '-', ru: '-' }, keySize: 'key-square', keyCode: 'Minus' },
  { value: { en: '=', ru: '=' }, keySize: 'key-square', keyCode: 'Equal' },
  { title: 'Backspace', keySize: 'key-rect', keyCode: 'Backspace' },
  { title: 'Tab', keySize: 'key-square', keyCode: 'Tab' },
  { value: { en: 'q', ru: 'й' }, keySize: 'key-square', keyCode: 'KeyQ' },
  { value: { en: 'w', ru: 'ц' }, keySize: 'key-square', keyCode: 'KeyW' },
  { value: { en: 'e', ru: 'у' }, keySize: 'key-square', keyCode: 'KeyE' },
  { value: { en: 'r', ru: 'к' }, keySize: 'key-square', keyCode: 'KeyR' },
  { value: { en: 't', ru: 'е' }, keySize: 'key-square', keyCode: 'KeyT' },
  { value: { en: 'y', ru: 'н' }, keySize: 'key-square', keyCode: 'KeyY' },
  { value: { en: 'u', ru: 'г' }, keySize: 'key-square', keyCode: 'KeyU' },
  { value: { en: 'i', ru: 'ш' }, keySize: 'key-square', keyCode: 'KeyI' },
  { value: { en: 'o', ru: 'щ' }, keySize: 'key-square', keyCode: 'KeyO' },
  { value: { en: 'p', ru: 'з' }, keySize: 'key-square', keyCode: 'KeyP' },
  { value: { en: '[', ru: 'х' }, keySize: 'key-square', keyCode: 'BracketLeft' },
  { value: { en: ']', ru: 'ъ' }, keySize: 'key-square', keyCode: 'BracketRight' },
  { title: '&#92', keySize: 'key-square', keyCode: 'Backslash' },
  { title: 'Del', keySize: 'key-square', keyCode: 'Delete' },
  { title: 'CapsLock', keySize: 'key-rect', keyCode: 'CapsLock' },
  { value: { en: 'a', ru: 'ф' }, keySize: 'key-square', keyCode: 'KeyA' },
  { value: { en: 's', ru: 'ы' }, keySize: 'key-square', keyCode: 'KeyS' },
  { value: { en: 'd', ru: 'в' }, keySize: 'key-square', keyCode: 'KeyD' },
  { value: { en: 'f', ru: 'а' }, keySize: 'key-square', keyCode: 'KeyF' },
  { value: { en: 'g', ru: 'п' }, keySize: 'key-square', keyCode: 'KeyG' },
  { value: { en: 'h', ru: 'р' }, keySize: 'key-square', keyCode: 'KeyH' },
  { value: { en: 'j', ru: 'о' }, keySize: 'key-square', keyCode: 'KeyJ' },
  { value: { en: 'k', ru: 'л' }, keySize: 'key-square', keyCode: 'KeyK' },
  { value: { en: 'l', ru: 'д' }, keySize: 'key-square', keyCode: 'KeyL' },
  { value: { en: ';', ru: 'ж' }, keySize: 'key-square', keyCode: 'Semicolon' },
  { value: { en: '&#39', ru: 'э' }, keySize: 'key-square', keyCode: 'Quote' },
  { title: 'Enter', keySize: 'key-rect', keyCode: 'Enter' },
  { title: 'Shift', keySize: 'key-rect', keyCode: 'ShiftLeft' },
  { title: '&#92', keySize: 'key-square', keyCode: 'Backslash' },
  { value: { en: 'z', ru: 'я' }, keySize: 'key-square', keyCode: 'KeyZ' },
  { value: { en: 'x', ru: 'ч' }, keySize: 'key-square', keyCode: 'KeyX' },
  { value: { en: 'c', ru: 'с' }, keySize: 'key-square', keyCode: 'KeyC' },
  { value: { en: 'v', ru: 'м' }, keySize: 'key-square', keyCode: 'KeyV' },
  { value: { en: 'b', ru: 'и' }, keySize: 'key-square', keyCode: 'KeyB' },
  { value: { en: 'n', ru: 'т' }, keySize: 'key-square', keyCode: 'KeyN' },
  { value: { en: 'm', ru: 'ь' }, keySize: 'key-square', keyCode: 'KeyM' },
  { value: { en: ',', ru: 'б' }, keySize: 'key-square', keyCode: 'Comma' },
  { value: { en: '.', ru: 'ю' }, keySize: 'key-square', keyCode: 'Period' },
  { value: { en: '/', ru: '.' }, keySize: 'key-square', keyCode: 'Slash' },
  { title: '&uarr;', keySize: 'key-square', keyCode: 'ArrowUp' },
  { title: 'Shift', keySize: 'key-square', keyCode: 'ShiftRight' },
  { title: 'Ctrl', keySize: 'key-square', keyCode: 'ControlLeft' },
  { title: 'Win', keySize: 'key-square', keyCode: 'MetaLeft' },
  { title: 'Alt', keySize: 'key-square', keyCode: 'AltLeft' },
  { title: 'Space', keySize: 'key-space', keyCode: 'Space' },
  { title: 'Alt', keySize: 'key-square', keyCode: 'AltRight' },
  { title: 'Ctrl', keySize: 'key-square', keyCode: 'ControlRight' },
  { title: '&larr;', keySize: 'key-square', keyCode: 'ArrowLeft' },
  { title: '&darr;', keySize: 'key-square', keyCode: 'ArrowDown' },
  { title: '&rarr;', keySize: 'key-square', keyCode: 'ArrowRight' },

]

const container = document.createElement('div');
const memory = document.createElement('textarea');
const keyboard = document.createElement('div');
const help = document.createElement('p');

let keys = [];

container.classList.add('container');
memory.classList.add('memory');
keyboard.classList.add('keyboard');
help.classList.add('help');
help.innerHTML = 'Change language: Alt + Shift'

document.body.append(container);
container.append(memory, keyboard, help);

window.onload = keyboardInit();


keyboard.addEventListener('mousedown', event => {
  let key = event.target;
  if (key.className !== 'keyboard') {
    key.classList.toggle('is-pressed');
  }
})

keyboard.addEventListener('mouseup', event => {
  memory.focus();
  let key = event.target;
  if (key.className !== 'keyboard') {
    key.classList.toggle('is-pressed');
    let text = key.innerHTML;
    writeSymbol(text);
  }
})

document.addEventListener('keydown', ({ code, altKey, metaKey, key }) => {
  memory.focus();

  let index = keyboardData.findIndex(({ keyCode }) => keyCode === code);
  keys[index].classList.add('is-pressed');

  if ((altKey || metaKey) && key == 'Shift') {
    changeLang();
    changeCase();
    changeCase();
  }

  if (event.key === 'CapsLock') {
    changeCase();
  }

});

document.addEventListener('keyup', event => {
  let index = keyboardData.findIndex((item) => item.keyCode === event.code);
 keys[index].classList.remove('is-pressed');
});

function keyboardInit() {
  keyboardData.forEach(item => {
    const { keySize, title, value } = item;
    let key = document.createElement('button');
    key.className = 'key ' + keySize;
    key.innerHTML = title || value[lang];
    keyboard.append(key);
    keys.push(key);
  });
  memory.autofocus = true;
}

function keyboardRender() {
  keyboardData.forEach((item, index) => {
    keys[index].innerHTML = item.title || item.value[lang];
  });
}

function changeLang() {
  lang = (lang === 'en') ? 'ru' : 'en';
  localStorage.setItem('lang', lang);
}

function changeCase() {
  if (isCapsLockOn) {
    keys[29].classList.toggle('is-caps');
    keyboardData.forEach(item => {
      if (item.value) {
        item.value['ru'] = item.value['ru'].toLowerCase();
        item.value['en'] = item.value['en'].toLowerCase();
      }
    });
  }
  else {
    keys[29].classList.toggle('is-caps');
    keyboardData.forEach(item => {
      if (item.value) {
        item.value['ru'] = item.value['ru'].toUpperCase();
        item.value['en'] = item.value['en'].toUpperCase();
      }
    });
  }
  isCapsLockOn = !isCapsLockOn;
  keyboardRender();
}

function writeSymbol(text) {
  switch (text) {

    case 'Backspace': {
      let temp = memory.value;
      temp.slice(0, -1);
      memory.value = temp;
      break;
    }

    case 'Tab':
      memory.value += '\t';
      break;

    case 'Del':{
      let temp = memory.value;
      temp.slice(0, 1);
      memory.value = temp;
      break;
    }
    case 'CapsLock':
      changeCase();
      break;

    case 'Enter':
      memory.value += '\n';
      break;

    case 'Shift': case 'Ctrl': case 'Win': case 'Alt': break;

    case 'Space':
      memory.value += ' ';
      break;

    default:
      memory.value += text;
  }
}