import UserAPI from "../api/userAPI";
import AdminUser from "../pages/AdminUser";
import { parseRequestUrl, $, reRender } from '../utils.js';
const ListUser = {

        async render() {

            const { data: user } = await UserAPI.getAll();

            return /*html*/ `
            <a href = "/#/adduser" class = "btn btn-info" >Thêm tài khoản</a>
            <h3>Danh sách thành viên</h3>
        
            <table id= "fomr" class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${ user.map((user,index = 1) =>{
                        return /*html*/ `
                        <tr>
                            <th scope="row">${index + 1}</th>
                            <td>${user.fullname}</td>
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                            <td>
                                <a href="/#/edituser/${user.id}" class="btn btn-primary">Update</a>
                                <button class="btn btn-primary btn-danger" data-id="${user.id}" >Remove</button>
                            </td>

                        </tr>
                        `
                    }).join("")}

                </tbody>
            </table>


        `
    },

    async  afterRender(){
        const btns  = $("#root .btn-danger");
        console.log(btns);

        btns.forEach(element => {
            const id = element.dataset.id;
            console.log(id);
            element.addEventListener('click', async function(){
            const question = confirm('bạn có đồng ý xóa tài khoản này không');
            if(question){
                await UserAPI.remove(id);
                await reRender(AdminUser,"#root");
            }

           });
        })
    }
    


}

export default ListUser;