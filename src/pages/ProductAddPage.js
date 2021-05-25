import ProductAPI from '../api/productAPI.js';
import { parseRequestUrl, $, reRender } from '../utils.js';
import firebase from '../firebase/index';
import Header from '../components/admin/Header.js';
import Footer from '../components/admin/Footer.js';
import Sidebar from '../components/admin/Sidebar.js';
import CategoryAPI from '../api/categoryAPI.js';
import AdminProductPage from './AdminProductPage.js';


const ProductAddPage = {
        async render() {

            const { id } = parseRequestUrl();
            const { data: category } = await CategoryAPI.getAll()

            console.log(category);

            return /*html*/ `
        ${await Sidebar.render()}
        ${await Header.render()}

        <h1>Thêm sản phẩm</h1>
        <form id="form-add" enctype="multipart/form-data" >
        
        <div class="form-group">
            <label for="product-name">Tên sản phẩm</label>      
            <input type="text" class= "form-control" placeholder="Tên sản phẩm" id="product-name"> 
            <p id="error-name" style ="color:red; font-size:17px;"></p>
        </div> 

        <div class="form-group">
            <label for="product-image">Ảnh sản phẩm</label>
            <input type="file" name="img_upload" class= "form-control"  id="product-image">
            <p id="error-image" style ="color:red; font-size:17px;"></p>
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
            <input type="text" class= "form-control" placeholder="giá sản phẩm" id="price">
            <p id="error-price" style ="color:red; font-size:17px;"></p>
        </div> 

      
        
        <div class="form-group">
            <label for="desciption">Mô tả: </label>      
            <input type="text" class= "form-control" placeholder="Mô tả" id="desciption">
            <p id="error-desciption" style ="color:red; font-size:17px;"></p>
    
            </div> 

        <div class="form-group">
            <label for="quantity">Số lượng: </label>   
            <input type="text" class= "form-control" placeholder="Số lượng sản phẩm" id="quantity">
            <p id="error-quantity" style ="color:red; font-size:17px;"></p>
        </div> 

        <div class="form-group">
            <input style="width:150px; margin-left:10px" class="btn btn-primary" value="Add product" type="submit">   
         </div>    
         </form>

        ${await Footer.render()}
        `
    },


    async afterRender() {

        $("#form-add").addEventListener('submit', async e => {
            e.preventDefault();
            if ($("#product-name").value == "") {
                $("#error-name").innerHTML = "Không để trống phần này";
            }
            var img = document.forms['form-add']['img_upload'];
            if(img.value == ""){
                $("#error-image").innerHTML = "Không để trống phần này";
                
            }

            if ($("#price").value == "") {
                $("#error-price").innerHTML = "Không để trống phần này";
                
            }
            if ($("#desciption").value == "") {
                $("#error-desciption").innerHTML = "Không để trống phần này";
                
            }
            if ($("#quantity").value == "" ) {
                $("#error-quantity").innerHTML = "Không để trống phần này";
                
            }else{

                const productImage = $('#product-image').files[0];
                console.log(productImage);
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(  function() {
                    console.log("thành công");
                    storageRef.getDownloadURL().then(  async url => {
                        const product = {
                            id: Math.random().toString(36).substr(2, 9),
                            name: $('#product-name').value,
                            categoryID: $('#categoryID').value,
                            price: $('#price').value,
                            image: url,
                            quantity: $("#quantity").value,
                            desciption: $("#desciption").value
    
                        };
                        console.log(product);
                        ProductAPI.add(product);
                        window.location.hash = "/listproduct";
                        await  reRender(AdminProductPage,"#root" );
                    })
    
                })
                    
            }

            


            

        });

    }

}
export default ProductAddPage;