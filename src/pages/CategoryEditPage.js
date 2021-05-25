import CategoryAPI from "../api/categoryAPI.js";
import Footer from "../components/admin/Footer.js";
import Header from "../components/admin/Header.js";
import Sidebar from "../components/admin/Sidebar.js";
import { parseRequestUrl, $, reRender } from "../utils.js";
import AdminCategories from "./AdminCategories.js";

const CategoryEditPage = {

    async render() {
        const { id } = parseRequestUrl();
        const { data: category } = await CategoryAPI.get(id);
        console.log(category);

        return /*html*/ `
        ${await Sidebar.render()}
        ${await Header.render()}
        <h1>Sửa danh mục</h1>
        <form id="form-editcate"  >
        <div class="form-group">
            <input type="text" class= "form-control" value = "${category.name}" placeholder="Tên sản phẩm" id="cate-name">
            <p id = "error-name"  style= "color:red; font-size:17px;"></p>
            </div> 
 
        <div class="form-group">
            <input class="btn btn-primary" value="Sửa danh mục" type="submit">   
         </div>    
         </form>

        ${await Footer.render()}
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: category } = await CategoryAPI.get(id);
        $("#form-editcate").addEventListener('submit', async e => {
            e.preventDefault();
            if ($("#cate-name").value == "") {
                $("#error-name").innerHTML = "Không được bỏ trống";

            } else {
                const newcate = {
                    id: Math.random().toString(36).substr(2, 9),
                    name: $('#cate-name').value,
                }
                console.log(newcate);
                CategoryAPI.update(id, newcate);
                window.location.hash = "/categories";

                await reRender(AdminCategories, "#root");


            }




        })

    }


}
export default CategoryEditPage;