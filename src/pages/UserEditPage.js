import Header from '../components/admin/Header.js';
import Footer from '../components/admin/Footer.js';
import Sidebar from '../components/admin/Sidebar.js';
import { parseRequestUrl, $, reRender } from '../utils.js';
import UserAPI from '../api/userAPI.js';
import AdminUser from './AdminUser.js';

const UserEditPage = {

    async render() {

        const { id } = parseRequestUrl();
        const { data: users } = await UserAPI.get(id);
        return /*html*/ `
        ${await Sidebar.render()}
        ${await Header.render()}

        <form id="form-edit" enctype="multipart/form-data" >
            <div class="form-group">
                <label for="fullname">Họ và tên:  </label>      
                    <input type="text" class= "form-control" value="${users.fullname}" placeholder="Họ và tên" id="fullname">
                    <p style="color:red; font-size:17px;" id= "error-fullname"></p>
                </div>  
                <div class="form-group">
                    <label for="username">Tên đăng nhập:  </label>      
                    <input type="text" class= "form-control" value="${users.username}" placeholder="Tên đăng nhập" id="username">
                    <p style="color:red; font-size:17px;"  id= "error-username"></p>
                </div> 
                
                <div class="form-group">
                    <label for="password">Mật khẩu:  </label>      
                    <input type="password" class= "form-control" value="${users.password}" placeholder="Mật khẩu" id="password">
                    <p style="color:red; font-size:17px;"  id= "error-password"></p>
                </div> 

                <div class="form-group">
                    <label for="password">Email:  </label>      
                    <input type="text" class= "form-control" value="${users.email}" placeholder="Mật khẩu" id="email">
                    <p style="color:red; font-size:17px;"  id= "error-email"></p>
                </div> 

                <div class="form-group">
                    <input style="width:150px; margin-left:10px" class="btn btn-primary" value="Add User" type="submit">   
                </div> 
        </form>
            ${await Footer.render()}
            `
    },
    async afterRender() {

        const { id } = parseRequestUrl();
        const { data: users } = await UserAPI.get(id);
        $("#form-edit").addEventListener("submit", async(e) => {
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
                    ...users,
                    id: Math.random().toString(36).substr(2, 9),
                    fullname: $("#fullname").value,
                    password: $("#password").value,
                    username: $("#username").value,
                    email: $("#email").value
                }

                console.log(user);
                UserAPI.update(id, user);
                window.location.hash = "/listuser";
                await reRender(AdminUser, "#root");

            }

        });




    }


}

export default UserEditPage;