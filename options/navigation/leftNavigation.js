import { waitForElement } from '../../src/js/waitForElement.js';

(async () => {
    var content = await waitForElement('._1rDh5rXSFZJOqCa4UpnI4z');
    var container = await waitForElement('._3mz8wQ6Q44B8P7pzPP4Iyw');
    var navBar = await waitForElement('._2D64jIEK7wpUR_NlObDW76');

    var containerContent = document.createElement('div');
    containerContent.className = 'container-content';

    var containerNavigation = document.createElement('div');
    containerNavigation.className = 'container-navigation'

    container.insertBefore(containerContent, content);
    containerContent.appendChild(containerNavigation);
    containerContent.appendChild(content);

    containerNavigation.appendChild(navBar);

    // Map antara teks dan SVG
    const iconMap = {
        "Store": `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.75V6H2.75a.75.75 0 0 0-.75.75v11.5A2.75 2.75 0 0 0 4.75 21h14.5A2.75 2.75 0 0 0 22 18.25V6.75a.75.75 0 0 0-.75-.75H16V3.75A1.75 1.75 0 0 0 14.25 2h-4.5A1.75 1.75 0 0 0 8 3.75Zm1.75-.25h4.5a.25.25 0 0 1 .25.25V6h-5V3.75a.25.25 0 0 1 .25-.25ZM8 13V9.5h3.5V13H8Zm0 4.5V14h3.5v3.5H8Zm8-4.5h-3.5V9.5H16V13Zm-3.5 4.5V14H16v3.5h-3.5Z" fill="#ffffff"/></svg>`,
        "Library": `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694Z" fill="#ffffff"/></svg>`,
        "Community": `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.5 14 10 .001a1.5 1.5 0 0 1 1.493 1.356L15 15.5V17.5C14.999 21 11.284 22 8.5 22c-2.722 0-6.335-.956-6.495-4.27L2 17.5v-2a1.5 1.5 0 0 1 1.356-1.493L3.5 14Zm11.988 0H20.5a1.5 1.5 0 0 1 1.493 1.355L22 15.5V17c-.001 3.062-2.858 4-5 4a7.16 7.16 0 0 1-2.14-.322c.653-.75 1.076-1.703 1.133-2.898L16 17.5v-2c0-.494-.15-.951-.399-1.338L15.488 14H20.5h-5.012ZM8.5 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm9 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" fill="#ffffff"/></svg>`,
        "Profile": `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#ffffff"/></svg>`
    };
    
    var menuItem = document.querySelectorAll("._19axKcqYRuaJ8vdYKYmtTQ");

    // Cari elemen teks dan ganti dengan SVG
    menuItem.forEach((element) => {
        const textContent = element.textContent.trim(); // Ambil teks
        if (iconMap[textContent]) {
            element.innerHTML = iconMap[textContent]; // Ganti teks dengan ikon
        } else {
            element.innerHTML = iconMap['Profile']; // Ganti teks dengan ikon
        }
    });

    menuItem[0].classList.add("active");

    menuItem.forEach((element) => {
        element.addEventListener("click", () => {
            // Hapus class 'active' dari semua elemen
            document.querySelectorAll("._19axKcqYRuaJ8vdYKYmtTQ").forEach((el) => el.classList.remove("active"));
    
            // Tambahkan class 'active' pada elemen yang diklik
            element.classList.add("active");
        });
    });
    

    // const elements = document.querySelectorAll('._7AlhCx3XGzBeIrQaCneUD');
    // elements.forEach(element => {
    //     element.classList.add('override-height');
    // });

})();