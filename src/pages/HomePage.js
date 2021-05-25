import Home from '../components/Home';
import Footer from '../components/website/Footer';
import Header from '../components/website/Header.js';
import Trangchu from "../components/Home.js";
import Silde from '../components/website/Silde';


const HomePage = {

    async render() {
        return /*html*/ `
        ${await Header.render()}
        ${await Silde.render()}
        ${await Trangchu.render()}
        ${await Footer.render()}
        `
    }
}

export default HomePage;