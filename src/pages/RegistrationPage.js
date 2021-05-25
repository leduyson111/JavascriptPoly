import UserAPI from "../api/userAPI";
import Footer from "../components/website/Footer";
import Header2 from "../components/website/Header2";
import { parseRequestUrl, $ } from "../utils.js";

const RegistrationPage = {

    async render() {

        return /*html*/ `
        
        ${await Header2.render()}
        <section class="shop checkout section">
            <div class="container">
                <div class="row"> 
                    <div class="col-lg-8 col-12">
                        <div class="checkout-form">
                            <!-- Form -->
                            <form class="form"  id ="form-add" >
                                        <div class="form-group">
                                            <label>Họ và tên<span>*</span></label>
                                            <input type="text" id="fullname" placeholder="Họ và tên" >
                                            <p id="error-fullname" style ="color:red; font-size:17px;"></p>
                                        </div>

                                        <div class="form-group">
                                            <label>Tên đăng nhập <span>*</span></label>
                                            <input type="text" id="username" placeholder="Tên đăng nhập" >
                                            <p id="error-username" style ="color:red; font-size:17px;"></p>
                                        </div>

                                        <div class="form-group">
                                            <label>Email<span>*</span></label>
                                            <input type="text" id="email" placeholder="Email" >
                                            <p id="error-email" style ="color:red; font-size:17px;"></p>
                                        </div>
                                
                                        <div class="form-group">
                                            <label>Mật khẩu<span>*</span></label>
                                            <input type="password" id="password" placeholder="Mật khẩu" >
                                            <p id="error-password" style ="color:red; font-size:17px;"></p>
                                        </div>
                                <button  class= "btn btn-info"> Login</button>
                            
                            </form>
                            <!--/ End Form -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ${await Footer.render()}
        `
    },
    async afterRender() {

        $("#form-add").addEventListener("submit", e => {
            e.preventDefault();

            if ($("#fullname").value == "") {
                $("#error-fullname").innerHTML = "Không để trống phần này";
            }
            if ($("#username").value == "") {
                $("#error-username").innerHTML = "Không để trống phần này";
            }
            if ($("#email").value == "") {
                $("#error-email").innerHTML = "Không để trống phần này";
            }
            if ($("#password").value == "") {
                $("#error-password").innerHTML = "Không để trống phần này";
            } else {


                const user = {
                    id: Math.random().toString(36).substr(2, 9),
                    fullname: $("#fullname").value,
                    password: $("#password").value,
                    username: $("#username").value,
                    email: $("#email").value
                };

                console.log(user);
                UserAPI.add(user);
                alert("thành công");
                window.location.hash = "/login";
            }

        })
    }
}

export default RegistrationPage;