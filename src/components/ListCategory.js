import CategoryAPI from "../api/categoryAPI";
import AdminCategories from "../pages/AdminCategories";
import { parseRequestUrl, $, reRender } from '../utils.js';

const ListCategory = {

        async render() {

            const { data: category } = await CategoryAPI.getAll();

            return /*html*/ `
            <a href = "/#/addcate" class = "btn btn-info" >Thêm danh mục</a>
            <h3>Danh sách danh mục</h3>
          
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên danh mục</th>
                    <th scope="col">Hành đông</th>
                    </tr>
                </thead>
                <tbody>
                ${category.map((category, index = 1) => {
            return /*html*/ `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${category.name}</td>
                    <td>
                        <a href="/#/editcate/${category.id}" class="btn btn-primary">Update</a>
                        <button class="btn btn-primary btn-danger" data-id="${category.id}" >Remove</button>
                    </td>
                    </tr>
                    
                `
        }).join("")}

            </tbody>
        </table>

        `
    },
    async afterRender() {
        const btns = $('#root .btn-danger');
        console.log(btns);
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm('Bạn có đồng ý xóa không');
                if (question) {
                    await CategoryAPI.remove(id);
                    await reRender(AdminCategories, '#root');
                }

            });

        })

    }

}
export default ListCategory;