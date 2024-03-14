import './style.css';
import {homeContent} from './home';
import {contactContent} from './contact';
import {menuContent} from './menu';

const content = document.querySelector('#content');
function tabSwitch(e){
    if (e.target.id==='home'){
        content.innerHTML='';
        homeContent();
    }
    else if (e.target.id==='menu'){
        content.innerHTML='';
        menuContent();
    }
    else {
        content.innerHTML='';
        contactContent();
    }
}

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click',tabSwitch);
}

homeContent();
