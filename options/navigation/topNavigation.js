import { waitForElement } from '../../src/js/waitForElement.js';

(async () => {
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
    console.log("topNavigation.js Loaded!")
})();