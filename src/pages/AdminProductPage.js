import Footer from "../components/admin/Footer.js";
import Header from "../components/admin/Header.js";
import Sidebar from "../components/admin/Sidebar.js";
import ListProduct from "../components/ListProduct.js";
import ProductAddPage from "./ProductAddPage.js";
import ProductEditPage from "./ProductEditPage.js";

const AdminProductPage = {

    async render() {
        return /*html*/ `
        ${ await Sidebar.render()}
        ${ await Header.render()}
        ${ await ListProduct.render()}
        ${ await Footer.render()}
    `
    },
    async afterRender() {
        return `${await ListProduct.afterRender() }
        `;
    }


}
export default AdminProductPage;