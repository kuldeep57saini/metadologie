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
        <script>
            :root {
                --header-light-bg: var(--white-color, white);
                --header-icon-color: var(--them-icon-color, #333);
                --header-link-active-bg: #f0f0f0;
                --header-hover-color: var(--main-color, #007BFF);
            }
            
            .header {
                background: var(--header-light-bg);
                display: flex;
                justify-content: space-between;
                height: 70px;
                padding: 0 6%;
                position: fixed;
                top: 0;
                width: 88%;
                z-index: 10;
            }
            
            main {
                margin-top: 70px;
            }
            
            .company-logo {
                height: 80%;
                padding: 1% 0;
            }
            
            .company-logo img {
                height: 100%;
                width: auto;
            }
            
            .navigation {
                width: 70%;
                display: flex;
                align-items: center;
            }
            
            .nav {
                width: 100%;
            }
            
            .navigation ul {
                display: flex;
                list-style: none;
                justify-content: end;
            }
            
            .navigation ul li {
                padding: 0 2%;
                display: grid;
            }
            
            .nav-links {
                text-decoration: none;
                white-space: nowrap;
            }
            
            .navigation ul li:hover .nav-links {
                color: var(--header-hover-color);
                cursor: pointer;
            }
            
            .hover-icon {
                width: 0;
                height: 0;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                border-top: 4px solid var(--header-hover-color);
                margin: 2% auto auto;
                visibility: hidden;
            }
            
            .navigation ul li:hover .hover-icon {
                visibility: visible;
            }
            
            .hamburger-menu {
                display: none;
            }
            
            @media (max-width: 950px) {
                .hover-icon {
                    display: none;
                }
            
                .nav {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 45%;
                    min-width: 180px;
                    background: white;
                    padding: 100px 0 0 0;
                    height: 100vh;
                    z-index: 2;
                    display: none;
                    overflow: auto;
                }
            
                .nav ul {
                    flex-direction: column;
                }
            
                .nav ul li {
                    padding: 0;
                }
            
                .navigation {
                    justify-content: end;
                }
            
                .nav-links {
                    font-size: 20px;
                    padding: 5% 0 5% 10%;
                }
            
                .nav-links:active {
                    background-color: var(--header-link-active-bg);
                    /* Background color for active links in the header */
                }
            
                .hamburger-menu {
                    width: 28px;
                    cursor: pointer;
                    display: block;
                    display: flex;
                    z-index: 5;
                    height: 28px;
                    align-items: center;
                }
            
                .bar,
                .bar::before,
                .bar::after {
                    content: "";
                    width: 30px;
                    height: 3px;
                    background-color: #787878;
                    position: absolute;
                    transition: transform 0.3s ease;
                }
            
                .bar::before {
                    top: -10px;
                }
            
                .bar::after {
                    top: 10px;
                }
            }
            
            .active {
                display: block;
            }
            
            @media (min-width: 1100px) {
                .nav-links {
                    font-size: 1.2vw;
                }
            
                .header {
                    height: 6vw;
                }
            
                main {
                    margin-top: 6vw;
                }
            }
        </script>
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
