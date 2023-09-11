class Footer extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML=`
        <div class="footer">
            <div class="footer-column">
                <div class="p-5">
                    <h2 class="footer-column-heading">Metadologie</h2>
                    <p class="footer-content footer-font-size">
                        Every business has a story to tell.
                        Even if you are running a start-up, you might not have a long history of changes and growth, but
                        it
                        is a
                        nice touch to talk about how you got to where you are on the About page. So, isolate the
                        milestones
                        before your company's founding, and use them to give reciders some backstory on your current
                        venture.
                    </p>

                    <div class="social-icons">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/company/metadologie/" class="fa fa-linkedin"></a>
                        <a href="https://instagram.com/metadologie" class="fa fa-instagram"></a>
                    </div>
                </div>
            </div>


            <div class="footer-column">
                <div class="p-5 small-size-flex">
                    <div>
                        <h2 class="footer-column-heading">Explore</h2>
                        <ul class="footer-font-size">
                            <li><a href="https://kuldeep57saini.github.io/metadologie">Home</a></li>
                            <li><a href="https://kuldeep57saini.github.io/metadologie">Dive In</a></li>
                            <li><a href="https://metadologie.com/Pages/aboutus.html">About Us</a></li>
                            <li><a href="https://metadologie.com/Pages/ourServices.html">Services</a></li>
                            <li><a href="https://metadologie.com/Pages/Industries.html">Industries</a></li>
                            <li><a href="https://metadologie.com/Pages/careers.html">Careers</a></li>
                            <li><a href="https://metadologie.com/Pages/contact-us.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="footer-column-heading">Connect With Us</h2>
                        <ul class="footer-font-size">
                            <li>
                                <a >Engage with Metadologie Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-column">
                <div class="p-5 small-size-flex">
                    <div>
                        <h2 class="footer-column-heading">Discover</h2>
                        <ul class="footer-font-size">
                            <li><a href="https://metadologie.com/Pages/Industries.html">Expertise</a></li>
                            <li><a href="https://metadologie.com/Pages/aboutus.html">Insights</a></li>
                            <li><a href="https://metadologie.com/Pages/Industries.html">Industries</a></li>  
                        </ul>
                    </div>
                    <div>

                        <h2 class="footer-column-heading">About metadologie</h2>
                        <ul class="footer-font-size">
                            <li><a href="https://metadologie.com/Pages/aboutus.html">About Metadologie</a></li>
                            <li><a href="https://metadologie.com/Pages/careers.html">Careers</a></li>
                            <li><a href="https://metadologie.com/Pages/aboutus.html">Life @ Metadologie</a></li>
                            <li><a href="#">Privacy Policy</a></li>    
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-column">
                <div class="p-5">

                    <h2 class="footer-column-heading">Conatct</h2>
                    <table class="address-table footer-font-size">
                        <tr>
                            <td><i class="fa fa-map-marker"></i></td>
                            <td>
                                <h3 class="footer-column-sub-heading">INDIA</h3>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> <a href="https://goo.gl/maps/P9W7sJ3uaXRdhDSU6">94/5, Madhyam Marg, Ward 27, Mansarover Sector 8 ,
                                    Mansarover,
                                    Jaipur, Rajasthan, 302020, India</a></td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-phone"></i></td>
                            <td><a href="tel:+919529329921">+91 9529329921</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Support</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-envelope"></i></td>
                            <td><a href="mailto:Support@metadologie.com">Support@metadologie.com</a></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="footer-column">
                <div class="p-5">

                    <h2 class="footer-column-heading small-screen-hide" style="color: midnightblue;">.</h2>

                    <table class="address-table footer-font-size">
                        <tr>
                            <td><i class="fa fa-map-marker"></i></td>
                            <td>
                                <h3 class="footer-column-sub-heading">USA</h3>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a href="#">18103 NE 68 ST,C200 Redmond, WA 98052, USA</a></td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-phone"></i></td>
                            <td><a href="tel:+12067078600">+1 206-707-8600</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Support</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-envelope"></i></td>
                            <td><a href="mailto:Support@metadologie.com">Support@metadologie.com</a></td>
                        </tr>
                    </table>

                </div>
            </div>
            </div>
                <div class='lower-footer'>
                <p>© Copyrights Metadologie
                2023. Salesforce,
                AppExchange, Sales Cloud, Service Cloud, and others are trademarks of <a rel="noopener" target="_blank" href="https://salesforce.com">salesforce.com</a>, inc.. All other
                trademarks
                are property of their respective owners.</p>
                </div>
        `;
    }
}

customElements.define('common-footer', Footer);
