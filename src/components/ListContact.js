import contactAPI from "../api/contactAPI";
import AdminContact from "../pages/AdminContact";
import { parseRequestUrl, $, reRender } from '../utils.js';
const ListContact = {

        async render() {
            const { data: contacts } = await contactAPI.getAll();
            return /*html*/ `
            <h3 style="margin-left:10px;" >Dánh sách thông tin liên hệ khách hàng</h3>
                <table id="table"  class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ và tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Nội dung</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                    ${ 

                        contacts.map((contact,index)=>{
                            return /*html*/ `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${contact.fullname}</td>
                                <td>${contact.email}</td>
                                <td>${contact.phone}</td>
                                <td>${contact.content}</td>
                                <td>
                                     <button class="btn btn-primary btn-danger" data-id="${contact.id}" >Remove</button>
                                </td>
                            </tr>
                        `
                        }).join("")}
                        </tbody>
                 </table>
                     `
    },
    async afterRender(){
        const btns  = $("#root .btn-danger");
        console.log(btns);
        btns.forEach(element => {
            const id = element.dataset.id;
            console.log(id);
            element.addEventListener('click', async function(){
            const question = confirm('bạn có đồng ý xóa');
            if(question){
                await contactAPI.remove(id);
                await reRender(AdminContact);
            }

           });
        })

    }

}
export default ListContact;