import Footer from "../components/admin/Footer"
import Header from "../components/admin/Header"
import Sidebar from "../components/admin/Sidebar"
import ListCategory from "../components/ListCategory"
import CategoryAddPage from "./CategoryAddPage"

const AdminCategories = {
    async render() {

        return /*html*/ `
            ${ await Sidebar.render()}
            ${await Header.render()}
            ${await ListCategory.render()}
            ${ await Footer.render()}
        `
    },
    async afterRender() {
        return `${await ListCategory.afterRender() }
                ${await CategoryAddPage.afterRender}
        
        `;

    }


}

export default AdminCategories;