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
                <a href="https://kuldeep57saini.github.io/metadologie">
                    <img src="https://www.metadologie.com/media/Home%20page/Metadologie%20Icon.png" alt="logo">
                </a>
            </div>
            <div class="navigation">

                <nav class="nav">
                    <ul>
                        <li>
                            <a href="https://kuldeep57saini.github.io/metadologie" class="nav-links">Home</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a  href="https://kuldeep57saini.github.io/metadologie" class="nav-links">Dive In</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a href="https://metadologie.com/Pages/aboutus.html" class="nav-links">About Us</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a href="https://metadologie.com/Pages/ourServices.html" class="nav-links">Services</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a href="https://metadologie.com/Pages/Industries.html" class="nav-links">Industries</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a href="https://metadologie.com/Pages/careers.html" class="nav-links">Career</a>
                            <span class="hover-icon"></span>
                        </li>
                        <li>
                            <a href="https://metadologie.com/Pages/contact-us.html" class="nav-links">Contact Us</a>
                            <span class="hover-icon"></span>
                        </li>
                    </ul>
                </nav>
                <div class="hamburger-menu">
                    <div >
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('common-header', Header);
