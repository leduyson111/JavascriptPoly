import Footer from "../components/admin/Footer";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import ListContact from "../components/ListContact";

const AdminContact = {


    async render() {

        return /*html*/ `
        ${ await Sidebar.render()}
        ${ await Header.render()}
        ${await ListContact.render()}
        ${ await Footer.render()}
        `

    },
    async afterRender() {

        return `${await ListContact.afterRender()}`;


    }



}
export default AdminContact;