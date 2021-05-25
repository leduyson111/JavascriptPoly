import ProductAPI from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI';
import firebase from '../firebase/index';
import Header from '../components/admin/Header.js';
import Footer from '../components/admin/Footer.js';
import Sidebar from '../components/admin/Sidebar.js';
import { parseRequestUrl, $, reRender } from '../utils';
import AdminProductPage from "../pages/AdminProductPage";

const ProductEditPage = {

        async render() {

            const { data: category } = await CategoryAPI.getAll()
                // console.log(category);
            const { id } = parseRequestUrl();
            const { data: product } = await ProductAPI.get(id);
            // console.log(product);

            return /*html*/ `
        ${await Sidebar.render()}
        ${await Header.render()}

        <h1>Thêm sản phẩm</h1>
        <form id="form-update-product" enctype="multipart/form-data" >
        <div class="form-group">
            <label for="product-name">Tên sản phẩm</label>      
            <input type="text" class= "form-control" value="${product.name}" placeholder="Tên sản phẩm" id="product-name">
            <p id="error-name" style ="color:red; font-size:17px;"></p>
        </div> 

        <div class="form-group">
            <label for="product-image">Ảnh sản phẩm</label>
            <input type="file" class= "form-control"  id="product-image">
            <img height="200px" src="${product.image}">

        </div> 

        <div class="form-group">
        <label for="categoryID">Danh mục sản phẩm</label>
            <select class= "form-control"  id="categoryID">
            ${
                category.map(categories=>{
                    return /*html*/ `
                        <option value="${categories.id}">${categories.name}</option>
                    `
                }).join("")
            }
                </select>
        </div> 


        <div class="form-group">
             <label for="price">Gía sản phẩm</label>      
            <input type="text" class= "form-control" value="${product.price}" placeholder="giá sản phẩm" id="price">
            <p id="error-price" style ="color:red; font-size:17px;"></p>
           
        </div> 

        
        <div class="form-group">
            <label for="desciption">Mô tả: </label>      
            <input type="text" class= "form-control" value="${product.desciption}" placeholder="Mô tả" id="desciption">
            <p id="error-desciption" style ="color:red; font-size:17px;"></p>
      
        </div> 

        <div class="form-group">
            <label for="quantity">Số lượng: </label>   
            <input type="text" class= "form-control" value="${product.quantity}" placeholder="Số lượng sản phẩm" id="quantity">
            <p id="error-quantity" style ="color:red; font-size:17px;"></p>
      
        </div> 

        <div class="form-group">
            <input style="width:100px; margin-left:10px" class="btn btn-primary" value="Update" type="submit">   
         </div>    
         </form>

        ${await Footer.render()}
        `

    },
    async afterRender() {

        const { id } = parseRequestUrl();
        const { data: product } = await ProductAPI.get(id);
        $("#form-update-product"). addEventListener("submit", async  (e)  => {
            e.preventDefault();
            if ($("#product-name").value == "") {
                $("#error-name").innerHTML = "Không để trống phần này";
                return false;
            }
            if ($("#price").value == "") {
                $("#error-price").innerHTML = "Không để trống phần này";
                return false;
            }
            if ($("#desciption").value == "") {
                $("#error-desciption").innerHTML = "Không để trống phần này";
                return false;
            }
            if ($("#quantity").value == "" ) {
                $("#error-quantity").innerHTML = "Không để trống phần này";
                return false;
            }else{
            const productImage = $('#product-image').files[0];
            if(productImage){
                // console.log(productImage);
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                console.log(product);
                storageRef.put(productImage).then(function() {
                    console.log("thành công");
                    storageRef.getDownloadURL().then(async url => {
                        const newProduct = {
                            ...product,
                            name: $("#product-name").value,
                            categoryID: $('#categoryID').value,
                            image: url,
                            price: $("#price").value,
                            desciption: $("#desciption").value,
                            quantity: $("#quantity").value,
                        }
                        console.log('new', newProduct);
                        ProductAPI.update(id, newProduct);
                        window.location.hash = "/listproduct";
                    })

                })
            }else{
                const newProduct = {
                    ...product,
                    name: $("#product-name").value,
                    categoryID: $('#categoryID').value,
                    price: $("#price").value,
                    desciption: $("#desciption").value,
                    quantity: $("#quantity").value,
                }
                // console.log('new', newProduct);
                ProductAPI.update(id, newProduct);
                window.location.hash = "/listproduct";

               await  reRender(AdminProductPage, "#root");
                
            }

    } 
        });

    }


}
export default ProductEditPage;