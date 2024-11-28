 console.log("Hello from libraryroot.custom.js")

 import { 
   moveNavigationButton,
   moveNavigationToSidebar
 } from './src/js/navigation.js'

 (async () => {
    moveNavigationButton();
    moveNavigationToSidebar();
 })();