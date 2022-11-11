function contact(){
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

    const contact = document.createElement('div');
    contact.setAttribute('id','contact');
    const contactUs = document.createElement('h3');
    contactUs.innerText = 'Contact Us'
    contact.appendChild(contactUs);
    const phone = document.createElement('p');
    phone.innerText = '+23470457856';
    contact.appendChild(phone);
    const email = document.createElement('p');
    email.innerText= 'leemsysdelight@gmail.com';
    contact.appendChild(email);
}

export default contact