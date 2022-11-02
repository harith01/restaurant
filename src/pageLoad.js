function pageLoad(){
    const element = document.querySelector('#content');
    const navButtons = document.createElement('div');
    navButtons.classList.add('nav-buttons');
    const homeButton = document.createElement('button');
    homeButton.classList.add('btn');
    homeButton.setAttribute('id', 'home-btn');
    homeButton.innerText = 'Home';
    navButtons.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.classList.add('btn');
    menuButton.setAttribute('id','menu-btn')
    menuButton.innerText = 'Menu';
    navButtons.appendChild(menuButton);
    const contactButton = document.createElement('button');
    contactButton.classList.add('btn');
    contactButton.setAttribute('id','contact-btn')
    contactButton.innerText = 'Contact';
    navButtons.appendChild(contactButton);

    element.appendChild(navButtons);

    const welcomeText = document.createElement('div');
    welcomeText.classList.add('welcome-text');
    const h5 =  document.createElement('h5');
    h5.classList.add('welcome');
    h5.innerText = 'Welcome to';
    welcomeText.appendChild(h5);
    const h4 = document.createElement('h4');
    h4.classList.add('kitchen');
    h4.innerText = "Leemsy's Kitchen";
    welcomeText.appendChild(h4);

    element.appendChild(welcomeText);

    return element
}

export default pageLoad