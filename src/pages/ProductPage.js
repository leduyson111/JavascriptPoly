import ProductAPI from '../api/productAPI';

import Footer from '../components/website/Footer';
import Header2 from '../components/website/Header2';
import Sidebar2 from '../components/website/Sidebar2';
const ProductPage = {
    async render() {

        return /*html*/ `    
                ${await Header2.render()}
                ${await Sidebar2.render()}
                ${await Footer.render()}
                `

    },

    async afterRender() {
        return ` 
            ${await Sidebar2.afterRender()}
        `

    }
}


export default ProductPage;