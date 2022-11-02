
import pageLoad from './pageLoad';
import './style.css';


pageLoad()

const homeButton = document.querySelector('#home-btn');
homeButton.addEventListener('click', ()=>{
    const content = document.getElementById("content");
    while (content.hasChildNodes()) {
    content.removeChild(list.firstChild);
  }
  pageLoad()
});