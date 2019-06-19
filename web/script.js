/* Index for JavaScript*/
/*
1. Common styling
- Fonts
- Body and sectionwrapper styling
- Text
- Footer

2.Layout / Grid
- Index
- Designs
- Photography
- Projects
- CV/About

3. Individual page styling
- Index
- Designs
- Photography
- Projects
- CV/About

4. Form styling

5. Eksempler styling
- burgermenu - CSS and JavaScript

*/


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#eksempel_knap_cssjs").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#eksempel_menu_cssjs").classList.toggle("hidden");

    let erSkjult = document.querySelector("#eksempel_menu_cssjs").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#eksempel_knap_cssjs").textContent = "☰";
    } else {
        document.querySelector("#eksempel_knap_cssjs").textContent = "X";
    }
}
