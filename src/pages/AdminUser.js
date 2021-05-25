import Footer from "../components/admin/Footer";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import ListUser from "../components/ListUser";

const AdminUser = {

    async render() {
        return /*html*/ `
        ${ await Sidebar.render()}
        ${ await Header.render()}
        ${await ListUser.render()}
        ${ await Footer.render()}
        `
    },
    async afterRender() {
        return `${await ListUser.afterRender()}`

    }


}
export default AdminUser;