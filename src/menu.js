const numberOfItems=12;

function menuContent() {
    const mainContainerElement = document.createElement('div');
    mainContainerElement.setAttribute('class','main-container');

    const menuTitleElement = document.createElement('div');
    menuTitleElement.setAttribute('class','title');
    menuTitleElement.textContent='MENU'
    const menuElement = document.createElement('div');
    menuElement.setAttribute('class','menu');

    mainContainerElement.append(menuTitleElement,menuElement);

    createMenu(menuElement);
    const content = document.querySelector('#content');
    content.appendChild(mainContainerElement);
}


function createMenu(element){
    for (let i=0;i<numberOfItems;i++){
        let pMenuItem = document.createElement('p');
        pMenuItem.textContent = `menu item ${i+1} .......................... 7€`;
        element.appendChild(pMenuItem);
    }
}


export {menuContent};