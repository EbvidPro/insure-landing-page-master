function menu() {
    let hamburger = document.querySelector('.hamburg');
    let closeBtn = hamburger.getAttribute('src');
    let menu = document.querySelector('.menu');

    if (closeBtn == '/images/icon-hamburger.svg') {
        hamburger.setAttribute('src', '/images/icon-close.svg');
        menu.style.display = 'block';
    } else if (closeBtn == '/images/icon-close.svg') {
        hamburger.setAttribute('src', '/images/icon-hamburger.svg');
        menu.style.display = 'none';
    }
    // else if (window.onclick() == true) {
    //     hamburger.setAttribute('src', '/images/icon-hamburger.svg');
    //     menu.style.display = 'none';
    // }
}