class Footer extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML=`
        <script>
        :root {
            --footer-padding: 20px 10%;
            --footer-column-width: 20%;
            --footer-content-font-size: var(--small-font-size);
            --footer-logo-max-width: 100px;
        }
        
        .footer {
            color: var(--footer-link-color);
            display: flex;
            flex-wrap: wrap; 
            background-color: var(--footer-background-color);
            padding: var(--footer-padding);
            align-items: flex-start;
        }
        
        .footer-column {
            width: var(--footer-column-width);
        }
        
        .footer-logo {
            max-width: var(--footer-logo-max-width);
            display: block;
            margin: 0 auto 20px auto;
        }
        
        .footer-font-size{
            font-size: var(--footer-content-font-size);
            color: var(--footer-link-color);
        }
        
        .footer-column-heading{
            margin: 15% 0 8%;
            font-size: var(--footer-heading-font-size);
            text-transform: uppercase;
        }
        
        .footer-column-sub-heading{
            font-size: var(--footer-sub-heading-font-size);
            text-transform: uppercase;
        }
        
        .footer-content{
            line-height: .8rem;
        }
        
        .footer ul {
            list-style-type: none;
            padding: 0;
        }
        
        .footer li {
            margin-bottom: 10px;
        }
        
        .footer a {
            text-decoration: none;
            color: var(--footer-link-color);
            transition: color 0.3s ease;
        }
        
        .footer a:hover {
            color: var(--footer-link-hover-color);
        }
        
        .social-icons {
            margin: 20px 4px 0 0;
            display: flex;
            justify-content: space-between;
            width: 90%;
        }
        
        .empty {
            flex: 0 0 8%;  
            max-width: 8%; 
        }
        
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
        
        .fa-map-marker {
            margin-right: 5px; /* Adjust spacing between the icon and text */
        }
        
        .fa {
            font-size: var(--icon-size);
            text-align: center;
            text-decoration: none;
            color: white;
        }
        
        .address-table tr td{
            padding-top: 5%;
            border: solid transparent;
            border-width: 0 2px;
        }
        
        .fa:hover {
            opacity: 0.7;
        }
        
        @media (min-width: 1024px) {
            .footer-content{
                line-height: 1.2rem;
            }
        }
        
        @media (max-width: 768px) {
            .footer-column {
                width: 33.333%;
            }
        }
        
        @media (max-width: 480px) {
            .footer-column {
                width: 100%;
            }
        
            .small-screen-hide{
                display: none;
            }
        
            .footer-column-heading{
                margin: 0 0 10px 0;
            }
        }
        
        @media (max-width:479px) and (min-width:200px) {
            .small-size-flex{
                display: flex;
                justify-content: space-between;
            }
        }
        
        
        .email-section {
            display: flex;
            align-items: center;
            gap: 10px;
        }        
        </script>
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
                <div class="p-5 small-size-flex">
                    <div>
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
                            <li><a href="#">Expertise</a></li>
                            <li><a href="#">Insights</a></li>
                            <li><a href="#">Industries</a></li>  
                        </ul>
                    </div>
                    <div>

                        <h2 class="footer-column-heading">About metadologie</h2>
                        <ul class="footer-font-size">
                            <li><a href="#">About Metadologie</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Life @ Metadologie</a></li>
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
                            <td> <a href="#">94/5, Madhyam Marg, Ward 27, Mansarover Sector 8 ,
                                    Mansarover,
                                    Jaipur, Rajasthan, 302020, India</a></td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-phone"></i></td>
                            <td><a href="tel:9999999999">999 999 9999</a></td>
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
                            <td><a href="tel:9999999999">999 999 9999</a></td>
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
        `;
    }
}

customElements.define('common-footer', Footer);