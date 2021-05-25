import ProductAPI from "../api/productAPI";
import Footer from "../components/website/Footer";
import Silde from "../components/website/Silde";
import Header from "../components/website/Header";
import { parseRequestUrl, $ } from "../utils";
import Header2 from "../components/website/Header2";
import CategoryAPI from "../api/categoryAPI";
const CategoryPage = {

    async render() {
        const { id } = parseRequestUrl();
        const { data: category } = await CategoryAPI.getAll();
        const { data: products } = await ProductAPI.getAll();
        console.log(id);
        return /*html*/ `
              ${await Header2.render()}
                <section class="product-area shop-sidebar shop section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="shop-sidebar">
                                <!-- Single Widget -->
                                <div class="single-widget category">
                                    <h3 class="title">Categories</h3>
                                    <ul class="categor-list">
        
                                    ${category.map(categories => {
            return /*html*/ `
                                             <li><a href="/#/category/${categories.id}">${categories.name}</a></li>
                                            `
        }).join("")

            }
                                    </ul>
                                </div>
                                <!--/ End Single Widget -->
                                <!-- Shop By Price -->
                                <div class="single-widget range">
                                    <h3 class="title">Shop by Price</h3>
                                    <div class="price-filter">
                                        <div class="price-filter-inner">
                                            <div id="slider-range"></div>
                                            <div class="price_slider_amount">
                                                <div class="label-input">
                                                    <span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="check-box-list">
                                        <li>
                                            <label class="checkbox-inline" for="1"><input  value="100" name="news" id="1" type="radio">$20 - $100 </label>
                                        </li>
                                        <li>
                                            <label class="checkbox-inline" for="2"><input  value="250"  name="news" id="2" type="radio">$100 - $500 </label>
                                        </li>
                                        <li>
                                            <label class="checkbox-inline" for="3"><input  value="500" name="news" id="3" type="radio"> On - $500</label>
                                        </li>
                                    </ul>
                                </div>
                                <!--/ End Shop By Price -->
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <!-- Shop Top -->
                                    <div class="shop-top">
                                        <div class="shop-shorter">
                                            <div class="single-shorter">
                                                <label>Show :</label>
                                                <select id="select-quantity">
                                                        <option selected="selected">09</option>
                                                        <option>15</option>
                                                        <option>25</option>
                                                        <option>30</option>
                                                    </select>
                                            </div>
                                            <div class="single-shorter">
                                                <label>Sort By :</label>
                                                <select>
                                                        <option selected="selected">Name</option>
                                                        <option>Price</option>
                                                        <option>Size</option>
                                                    </select>
                                            </div>
                                        </div>
                                        <ul class="view-mode">
                                            <li class="active"><a href="/#/products"><i class="fa fa-th-large"></i></a></li>
                                        </ul>
                                    </div>
                                    <!--/ End Shop Top -->
                                </div>
                            </div>
                            <div id="filter" class="row">
                            ${products.filter(product => product.categoryID == id)
                                         .map(product => {
                    return /*html*/ `
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="/#/products/${product.id}">
                                                    <img class="default-img" src="${product.image}" alt="#">
                                                    <img class="hover-img" src="${product.image}" alt="#">
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="/#/products/${product.id}">${product.name}</a></h3>
                                                <div class="product-price">
                                                    <span>$${product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `
                }).join("")
            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ${await Footer.render()}
                `
    },
    async afterRender() {
        var checkboxs = document.getElementsByName('news');
        const { data: products } = await ProductAPI.getAll();
        checkboxs.forEach(check => {
            check.addEventListener('click', async function () {
                $("#filter").innerHTML = products.map((product) => {
                    if (check.value == 100) {
                        if (product.price <= 100) {
                            const result = /*html*/ `
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="/#/products/${product.id}">
                                            <img class="default-img" src="${product.image}" alt="#">
                                            <img class="hover-img" src="${product.image}" alt="#">
                                        </a>
                                        <div class="button-head">
                                            <div class="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                            </div>
                                            <div class="product-action-2">
                                                <a title="Add to cart" href="#">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3><a href="/#/products/${product.id}">${product.name}</a></h3>
                                        <div class="product-price">
                                            <span>$${product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                            return result;
                        }
                    } else if (check.value == 250) {

                        if (product.price <= 500) {
                            const result = /*html*/ `
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-product">
                                <div class="product-img">
                                    <a href="/#/products/${product.id}">
                                        <img class="default-img" src="${product.image}" alt="#">
                                        <img class="hover-img" src="${product.image}" alt="#">
                                    </a>
                                    <div class="button-head">
                                        <div class="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                        </div>
                                        <div class="product-action-2">
                                            <a title="Add to cart" href="#">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h3><a href="/#/products/${product.id}">${product.name}</a></h3>
                                    <div class="product-price">
                                        <span>$${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                            return result;
                        }

                    } else if (check.value == 500) {
                        if (product.price >= 500) {

                            const result = /*html*/ `
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-product">
                                <div class="product-img">
                                    <a href="/#/products/${product.id}">
                                        <img class="default-img" src="${product.image}" alt="#">
                                        <img class="hover-img" src="${product.image}" alt="#">
                                    </a>
                                    <div class="button-head">
                                        <div class="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                        </div>
                                        <div class="product-action-2">
                                            <a title="Add to cart" href="#">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h3><a href="/#/products/${product.id}">${product.name}</a></h3>
                                    <div class="product-price">
                                        <span>$${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                            return result;
                        }
                    }

                }).join("");

            })
        });
        const quantity = $("#select-quantity");
        quantity.addEventListener('blur', function () {

            // console.log(quantity.options[quantity.selectedIndex].value);
            const list_product = [];
            var qty = quantity.options[quantity.selectedIndex].value;

            for (var i = 0; i < qty; i++) {
                list_product[i] = products[i];
            }
            console.log(list_product);

            $("#filter").innerHTML = list_product.map(function (product) {
                return /*html*/ `
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-product">
                        <div class="product-img">
                            <a href="/#/products/${product.id}">
                                <img class="default-img" src="${product.image}" alt="#">
                                <img class="hover-img" src="${product.image}" alt="#">
                            </a>
                            <div class="button-head">
                                <div class="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div class="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-content">
                            <h3><a href="/#/products/${product.id}">${product.name}</a></h3>
                            <div class="product-price">
                                <span>$${product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }).join("");

        })
    }
}

export default CategoryPage;