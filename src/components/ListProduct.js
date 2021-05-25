import ProductAPI from "../api/productAPI";
import { parseRequestUrl, $, reRender } from '../utils.js';
import AdminProductPage from "../pages/AdminProductPage";


const ListProduct = {
        async render() {
            const { data: products } = await ProductAPI.getAll();
            return /*html*/ `
            <h3 style="margin-left:10px;" >Danh sách sản phẩm</h3>
                 <a style="margin-left:20px; margin-bottom:10px" class = "btn btn-info"  href="/#/addproduct/" >Product Page</a>
                <table id="table"  class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên sản phẩm</th>
                                <th>Ảnh sản phẩm</th>
                                <th>Gía</th>
                                <th>Số lượng</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>

                        ${products.map((product, index) => {
            return /*html*/ `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${product.name}</td>
                                    <td><img src="${product.image}"  height="200px" alt="${product.image}" ></td>
                                    <td>${product.price}</td>
                                    <td>${product.quantity}</td>
                                    <td>
                                        <a href="/#/editproduct/${product.id}" class="btn  btn-primary">Update</a>
                                        <button class="btn btn-danger" data-id = "${product.id}" >Remove</button>
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
                const question = confirm('Bạn có đồng ý xóa không => ');
                if (question) {
                    await ProductAPI.remove(id);
                    await reRender(AdminProductPage, '#root');
                }

            });

        })

    }
}

export default ListProduct;