import contactAPI from "../api/contactAPI";
import Footer from "../components/website/Footer";
import Header2 from "../components/website/Header2";
import { $, reRender } from "../utils";

const ContactPage = {

    async render() {

        return /*html*/ `
            ${await Header2.render()}

                <div class="breadcrumbs">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="bread-inner">
                                    <ul class="bread-list">
                                        <li><a href="#">Home<i class="ti-arrow-right"></i></a></li>
                                        <li class="active"><a href="/#/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <section id="contact-us" class="contact-us section">
                <div class="container">
                        <div class="contact-head">
                            <div class="row">
                                <div class="col-lg-8 col-12">
                                    <div class="form-main">
                                        <div class="title">
                                            <h4>Get in touch</h4>
                                            <h3>Write us a message</h3>
                                        </div>
                                        <form class="form" id="add-contact">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <label for="fullname">Fullname<span>*</span></label>
                                                        <input id="fullname" type="text" placeholder="Fullname">
                                                        <p style="color:red; font-size:15px;" id="error-fullname"></p>
                                                    </div>
                                                </div>
                                               
                                                <div class="col-lg-6 col-12">
                                                    <div class="form-group">
                                                        <label for="email">Your Email<span>*</span></label>
                                                        <input id="email" type="email" placeholder="Your Email">
                                                        <p style="color:red; font-size:15px;" id="error-email"></p>
                                                    </div>	
                                                </div>
                                                <div class="col-lg-6 col-12">
                                                    <div class="form-group">
                                                        <label for="phone">Your Phone<span>*</span></label>
                                                        <input id="phone" type="text" placeholder="Your Phone">
                                                        <p style="color:red; font-size:15px;" id="error-phone"></p>
                                                    </div>	
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group message">
                                                        <label for="content">your message<span>*</span></label>
                                                        <textarea id="content" placeholder="your message"></textarea>
                                                        <p style="color:red; font-size:15px;" id="error-content"></p>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group button">
                                                        <button type="submit" class="btn ">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-12">
                                    <div class="single-head">
                                        <div class="single-info">
                                            <i class="fa fa-phone"></i>
                                            <h4 class="title">Call us Now:</h4>
                                            <ul>
                                                <li>+123 456-789-1120</li>
                                                <li>+522 672-452-1120</li>
                                            </ul>
                                        </div>
                                        <div class="single-info">
                                            <i class="fa fa-envelope-open"></i>
                                            <h4 class="title">Email:</h4>
                                            <ul>
                                                <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
                                                <li><a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a></li>
                                            </ul>
                                        </div>
                                        <div class="single-info">
                                            <i class="fa fa-location-arrow"></i>
                                            <h4 class="title">Our Address:</h4>
                                            <ul>
                                                <li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        <!-- Start Shop Newsletter  -->
        <section class="shop-newsletter section">
            <div class="container">
                <div class="inner-top">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 col-12">
                            <!-- Start Newsletter Inner -->
                            <div class="inner">
                                <h4>Newsletter</h4>
                                <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                    <input name="EMAIL" placeholder="Your email address" required="" type="email">
                                    <button class="btn">Subscribe</button>
                                </form>
                            </div>
                            <!-- End Newsletter Inner -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        	<!-- Google Map JS -->
            ${await Footer.render()}
        `
    },
    async afterRender() {

        $("#add-contact").addEventListener("submit", async e => {
            e.preventDefault();

            if ($("#fullname").value == "") {
                $("#error-fullname").innerHTML = "Bạn không để trống";

            }
            if ($("#email").value == "") {
                $("#error-email").innerHTML = "Bạn không để trống";

            }
            if ($("#phone").value == "") {
                $("#error-phone").innerHTML = "Bạn không để trống";

            }
            if ($("#content").value == "") {
                $("#error-content").innerHTML = "Bạn không để trống";

            } else {

                const contact = {

                    id: Math.random().toString(36).substr(2, 9),
                    fullname: $("#fullname").value,
                    email: $("#email").value,
                    phone: $("#phone").value,
                    content: $("#content").value
                };

                contactAPI.add(contact);
                reRender(ContactPage, "#root");

            }




        })




    }

}
export default ContactPage;