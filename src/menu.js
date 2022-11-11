function menu(){
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

    const menu = document.createElement('div');
    menu.setAttribute('id','menu');
    const mainDish = document.createElement('div');
    mainDish.classList.add('menu-item');
    mainDish.innerHTML = 
        `<h3>BBQ and Grill</h3>
        <table>
        <tr>
            <td>Grilled beef</td>
            <td>&#8358;1000</td>
        </tr>
        <tr>
            <td>Fish steak</td>
            <td>&#8358;1200</td>
        </tr>
        </table>`
    menu.appendChild(mainDish);

    const pizzas = document.createElement('div');
    pizzas.classList.add('menu-item');
    pizzas.innerHTML = 
    `<h3>Pizzas</h3>
    <table>
        <tr>
            <td>Pizza Magarita</td>
            <td>&#8358;1000</td>
        </tr>
        <tr>
            <td>Pizza Peperoni</td>
            <td>&#8358;1200</td>
        </tr>
    </table>`
    menu.appendChild(pizzas);

    const shawarma = document.createElement('div');
    shawarma.classList.add('menu-item');
    shawarma.innerHTML = 
    `<h3>Shawarma</h3>
        <table>
        <tr>
            <td>Beef Shawarma</td>
            <td>&#8358;1000</td>
        </tr>
        <tr>
            <td>Chicken Shawarma</td>
            <td>&#8358;1200</td>
        </tr>
        </table>`
    menu.appendChild(shawarma);
    
    element.appendChild(menu)

    return element;
}

export default menu