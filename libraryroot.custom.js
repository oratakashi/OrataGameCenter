 console.log("Hello from libraryroot.custom.js")

 import { moveNavigationButton, moveMainTopNavigation } from './src/js/navigation.js'

 (async () => {
    moveNavigationButton();
    moveMainTopNavigation();
 })();