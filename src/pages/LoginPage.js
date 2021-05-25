import UserAPI from "../api/userAPI";
import Footer from "../components/website/Footer";
import Header2 from "../components/website/Header2";
import { parseRequestUrl, $ } from "../utils.js";

const LoginPage = {

    async render() {
        return /*html*/ `
        ${await Header2.render()}
            <section class="shop checkout section">
                <div class="container">
                    <div class="row"> 
                        <div class="col-lg-8 col-12">
                            <div class="checkout-form">
                                <!-- Form -->
                                <form class="form" id ="form-login">
                                        <div class="form-group">
                                            <label for ="">Tên đăng nhập<span>*</span></label>
                                            <input type="text" id="username" placeholder="Tên đăng nhập">
                                            <p style= "font-size:17px; color:red;" id="error-username"></p>
                                        </div>
                                
                                        <div class="form-group">
                                            <label>Mật khẩu<span>*</span></label>
                                            <input type="text" id="password" placeholder="Mật khẩu">
                                            <p style= "font-size:17px; color:red;" id="error-password"></p>
                                        </div>
                                        
                                        <div class="form-group">
                                            <input style="width:150px;" class="btn btn-info" value="Login" type="submit">   
                                        </div> 
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
        const { data: users } = await UserAPI.getAll();
        $("#form-login").addEventListener("submit", (e) => {
            e.preventDefault();
            users.forEach(user => {
                if ($("#username").value == "") {
                    $("#error-username").innerHTML = "Không để trống phần này";
                    return false;
                }
                if ($("#password").value == "") {
                    $("#error-password").innerHTML = "Không để trống phần này";
                    return false;
                } else {
                    if ($("#username").value != user.username) {
                        $("#error-username").innerHTML = "Không tồn tại tài khoản này";
                        return false;

                    } else if ($("#password").value != user.password) {
                        $("#error-password").innerHTML = "Mật khẩu này bị sai";
                        return false;
                    } else {
                        window.location.hash = "/listproduct";
                    }
                }

            });

        })






    }



}

export default LoginPage;