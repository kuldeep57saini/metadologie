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
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-instagram"></a>
                    </div>
                </div>
            </div>


            <div class="footer-column">
                <div class="p-5">
                    <h2 class="footer-column-heading">Explore</h2>
                    <ul class="footer-font-size">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Dive In</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <h2 class="footer-column-heading">Connect With Us</h2>
                    <a class="footer-font-size">Engage with Metadologie Support</a>
                </div>
            </div>

            <div class="footer-column">
                <div class="p-5">

                    <h2 class="footer-column-heading">Discover</h2>
                    <ul class="footer-font-size">
                        <li><a href="#">Expertise</a></li>
                        <li><a href="#">Insights</a></li>
                        <li><a href="#">Industries</a></li>

                    </ul>
                    <h2 class="footer-column-heading">About metadologie</h2>
                    <ul class="footer-font-size">
                        <li><a href="#">About Metadologie</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Life @ Metadologie</a></li>
                        <li><a href="#">Privacy Policy</a></li>

                    </ul>
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
                            <td> <a href="#">94/5, Madhyam Marg, Ward 27, Mansarover Sector 8 ,
                                    Mansarover,
                                    Jaipur, Rajasthan, 302020, India</a></td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-phone"></i></td>
                            <td><a href="#">1234567890</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Support</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-envelope"></i></td>
                            <td><a href="#">Suppor@metadologie.com</a></td>
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
                            <td><a href="#">1234567890</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Support</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-envelope"></i></td>
                            <td><a href="#">Suppor@metadologie.com</a></td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('common-footer', Footer);