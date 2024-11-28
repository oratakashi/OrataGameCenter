import { waitForElement } from './waitForElement.js';

import {
    createSearchContainer,
    moveLibrarySearch
  } from './searchbar.js'

export async function observeLibraryDOMChanges() {
    // const targetNode = document.querySelector('.RGNMWtyj73_-WdhflrmuY'); // Elemen induk yang akan diamati
    const targetNode = await waitForElement('.RGNMWtyj73_-WdhflrmuY');

    // Konfigurasi observer
    const config = { childList: true }; // Mengamati perubahan pada anak dan turunannya

    // Callback yang dijalankan saat DOM berubah
    const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const libraryPage = document.querySelector('._3xRRJfD2xy95i9NhJxLTp0');
                if (libraryPage) {
                    console.log('Library page detected');
                    createSearchContainer();
                    moveLibrarySearch();
                    break;
                } else {
                    console.log('Library not detected')
                }
            }
        }
    };

    // Membuat observer
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    // Opsional: Berhenti mengamati setelah kondisi terpenuhi
    return observer;
}