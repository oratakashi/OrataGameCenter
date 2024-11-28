console.log("Hello from libraryroot.custom.js")

import {
  moveNavigationButton,
  moveNavigationToSidebar
} from './src/js/navigation.js'

import { observeLibraryDOMChanges } from './src/js/observer.js'

import {
  createSearchContainer,
  moveLibrarySearch
} from './src/js/searchbar.js'

(async () => {
  moveNavigationButton();
  moveNavigationToSidebar();

  observeLibraryDOMChanges();

  // createSearchContainer();
  // moveLibrarySearch();
})();