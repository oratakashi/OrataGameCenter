import { waitForElement } from './waitForElement.js';

import {
    createSearchContainer,
    moveLibrarySearch
} from './searchbar.js'

import {
    moveAchievments
} from './detailGame.js'

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

export async function observeDetailGameDOMChanges() {
    // const targetNode = document.querySelector('.RGNMWtyj73_-WdhflrmuY'); // Elemen induk yang akan diamati
    const targetNode = await waitForElement('._2Nq6ov7A1hGcHXVOXNt_OE');

    // Konfigurasi observer
    const config = { childList: true }; // Mengamati perubahan pada anak dan turunannya

    // Callback yang dijalankan saat DOM berubah
    const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const detailGamePage = document.querySelector('._2L3s2nzh7yCnNESfI5_dN1');
                if (detailGamePage) {
                    console.log('Detail Game page detected');
                    moveAchievments();
                    break;
                } else {
                    console.log('Detail Game not detected')
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