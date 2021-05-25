import CategoryAPI from "../api/categoryAPI.js";
import Footer from "../components/admin/Footer.js";
import Header from "../components/admin/Header.js";
import Sidebar from "../components/admin/Sidebar.js";
import { $, reRender } from "../utils.js";
import AdminCategories from "./AdminCategories.js";

const CategoryAddPage = {

    async render() {

        return /*html*/ `
        ${await Sidebar.render()}
        ${await Header.render()}
        <h1>Thêm danh mục</h1>
        <form id="form-addcate"  >
        <div class="form-group">
            <input type="text" class= "form-control" placeholder="Tên sản phẩm" id="cate-name">
            <p id = "error-name"  style= "color:red; font-size:17px;"></p>
        </div> 
 
        <div class="form-group">
            <input class="btn btn-primary" value="Thêm danh mục" type="submit">   
         </div>    
         </form>

        ${await Footer.render()}
        `

    },
    async afterRender() {
        $("#form-addcate").addEventListener('submit', async e => {
            e.preventDefault();

            if ($("#cate-name").value == "") {
                $("#error-name").innerHTML = "Không được bỏ trống";

            } else {
                const category = {
                    id: Math.random().toString(36).substr(2, 9),
                    name: $('#cate-name').value,
                }
                console.log(category);
                CategoryAPI.add(category);
                window.location.hash = "/categories";

                await reRender(AdminCategories, "#root");



            }



        })

    }


}
export default CategoryAddPage;