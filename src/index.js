
import pageLoad from './pageLoad';
import './style.css';
import menu from './menu';
import contact from './contact';

pageLoad()

// const homeButton = document.querySelector('#home-btn');
// homeButton.addEventListener('click', ()=>{
//     const content = document.getElementById("content");
//     while (content.hasChildNodes()) {
//     content.removeChild(content.firstChild);
//     }
//   pageLoad()
// });

// const menuButton = document.querySelector('#menu-btn');
// menuButton.addEventListener('click', ()=>{
//     const content = document.getElementById("content");
//     while (content.hasChildNodes()) {
//         content.removeChild(content.firstChild);
//     }
//     menu()
// });

function clearScreen(){
    const content = document.getElementById("content");
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.innerText == 'Home'){
        clearScreen();
        pageLoad();
    }

    if (e.target.innerText == 'Menu'){
        clearScreen();
        menu();
    }

    if (e.target.innerText == 'Contact'){
        clearScreen();
        contact();
    }
})