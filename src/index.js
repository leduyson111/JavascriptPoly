// import Header from './components/Header.js';
import Error404Page from './pages/Error404Page.js';
import HomePage from './pages/HomePage.js';
import ProductDetail from './pages/ProductDetail.js';
import ProductPage from './pages/ProductPage.js';
import CategoryPage from './pages/CategoryPage.js';
import { parseRequestUrl, $ } from './utils.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage from './pages/AdminProductPage.js';
import AdminCategories from './pages/AdminCategories.js';
import CategoryAddPage from './pages/CategoryAddPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import CategoryEditPage from './pages/CategoryEditPage.js';
import ContactPage from './pages/ContactPage.js';
import BlogPage from './pages/BlogPage.js';
import CheckoutPage from './pages/CheckoutPage.js';
import CartPage from './pages/CartPage.js';
import LoginPage from './pages/LoginPage.js';
import AdminUser from './pages/AdminUser.js';
import UserAddPage from './pages/UserAddPage.js';
import UserEditPage from './pages/UserEditPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
import AdminContact from './pages/AdminContact.js';
const routes = {
    '/': HomePage,
    '/products': ProductPage,
    '/products/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/categories': AdminCategories,
    '/addcate': CategoryAddPage,
    '/editproduct/:id': ProductEditPage,
    '/editcate/:id': CategoryEditPage,
    '/contact': ContactPage,
    '/blog': BlogPage,
    '/checkout': CheckoutPage,
    '/cart': CartPage,
    '/login': LoginPage,
    '/listuser': AdminUser,
    '/adduser': UserAddPage,
    '/edituser/:id': UserEditPage,
    '/registration': RegistrationPage,
    '/listcontact': AdminContact,


}

const router = async() => {
    const { resource, id } = parseRequestUrl();

    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? `/:id` : '');

    // console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;

    console.log(page);

    $('#root').innerHTML = await page.render();
    if (page.afterRender) {
        await page.afterRender()
    }
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);