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