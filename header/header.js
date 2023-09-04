window.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the window
        nav.classList.toggle('active'); // Toggle the "active" class on the nav
    });

    // Add a click event listener to the window to close the nav when clicking anywhere outside
    window.addEventListener('click', function () {
        nav.classList.remove('active'); // Hide the nav
    });

    // Prevent clicks within the nav from closing it
    nav.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the window
    });
});

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="header">
            <div class="company-logo">
                <a href="/">
                    <img src="https://www.metadologie.com/media/Home%20page/Metadologie%20Icon.png" alt="logo">
                </a>
            </div>
            <div class="navigation">

                <nav class="nav">
                    <ul>
                        <li>
                            <a class="nav-links">Home</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a class="nav-links">Dive In</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a class="nav-links">About Us</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a class="nav-links">Services</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a class="nav-links">Industries</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a class="nav-links">Career</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a class="nav-links">Contact Us</a>
                            <span class="hover-icon"></span>
                        </li>
                    </ul>
                </nav>
                <div class="hamburger-menu">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('common-header', Header);