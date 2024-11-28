console.log("Hello from libraryroot.custom.js")

import {
  moveNavigationButton,
  moveNavigationToSidebar
} from './src/js/navigation.js'

import {
  observeLibraryDOMChanges,
  observeDetailGameDOMChanges
} from './src/js/observer.js'

import {
  createSearchContainer,
  moveLibrarySearch
} from './src/js/searchbar.js'

(async () => {
  moveNavigationButton();
  moveNavigationToSidebar();

  observeLibraryDOMChanges();
  observeDetailGameDOMChanges();

  // createSearchContainer();
  // moveLibrarySearch();
})();