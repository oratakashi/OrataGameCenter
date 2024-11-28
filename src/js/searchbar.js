import { waitForElement } from './waitForElement.js';

export async function createSearchContainer() {
    var topbar = await waitForElement('._2Nq6ov7A1hGcHXVOXNt_OE');
    const navigationContainer = document.createElement('div');
    navigationContainer.className = 'search-container';

    topbar.prepend(navigationContainer);
}

export async function moveLibrarySearch() {
    var searchContainer = await waitForElement('.search-container');
    var searchComponent = await waitForElement('._20QAC4WMXm8qFE8waUT5oo');
    const title = document.createElement('div');
    title.className = 'library-title'
    title.innerHTML = "Library"

    searchContainer.appendChild(title);
    searchContainer.appendChild(searchComponent);
}