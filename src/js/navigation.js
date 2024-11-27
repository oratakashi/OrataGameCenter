import { waitForElement } from './waitForElement.js';

export async function moveNavigationButton() {
    var topbar = await waitForElement('._39oUCO1OuizVPwcnnv88no');
    var parent = await waitForElement('._2D64jIEK7wpUR_NlObDW76');

    const navigationContainer = document.createElement('div');
    navigationContainer.className = 'navigation-button';

    const buttons = parent.querySelectorAll('svg');

    buttons.forEach(button => {
        navigationContainer.appendChild(button);
    });

    topbar.appendChild(navigationContainer);

    navigationContainer.parentElement.prepend(navigationContainer);
}

export async function moveMainTopNavigation() {
    var topbar = await waitForElement('._39oUCO1OuizVPwcnnv88no');
    var navBar = await waitForElement('._2D64jIEK7wpUR_NlObDW76');
    var anchor = await waitForElement('._30vB9DdsPK7VrZAbb5Q1Av');

    // topbar.prepend(navBar);
    topbar.insertBefore(navBar, anchor);

    /**
     * Add Hover State on menu for dynamic
     */
    var menuContainer = await waitForElement('._1Ky59qmywxOUtNcI1cgmkX ');
    menuContainer.addEventListener('mouseover', () => {

        Array.from(menuContainer.children).slice(1).forEach(child => {
            child.style.display = "flex";
        });

        navBar.style.display = "none";
    });

    menuContainer.addEventListener('mouseout', () => {

        Array.from(menuContainer.children).slice(1).forEach(child => {
            child.style.display = "none";
        });

        navBar.style.display = "flex"
    });
}