import ProductAPI from "../api/productAPI";

const Home = {

    async render() {

        try {
            const { data: products } = await ProductAPI.getAll();

            const list_product_take12 = [];
            for (var i = 0; i < 12; i++) {
                list_product_take12[i] = products[i];
            }
            // console.log(list_product_take12);
            const result = list_product_take12.map(function(product) {
                return /*html*/ `
                    <div class="col-xl-3 col-lg-4 col-md-4 col-12">
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


            return /*html*/ `
            <!-- Start Product Area -->
            <div class="product-area section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title">
                                    <h2>Trending Item</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="product-info">
                               
                                    <div class="tab-content" id="myTabContent">
                                        <!-- Start Single Tab -->
                                        <div class="tab-pane fade show active" id="man" role="tabpanel">
                                            <div class="tab-single">
                                                <div class="row">
                                                   
                                                        ${result}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <!--/ End Single Tab -->
                                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- End Product Area -->
            
            
            <!-- Start Shop Services Area -->
            <section class="shop-services section home">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12">
                            <!-- Start Single Service -->
                            <div class="single-service">
                                <i class="ti-rocket"></i>
                                <h4>Free shiping</h4>
                                <p>Orders over $100</p>
                            </div>
                            <!-- End Single Service -->
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <!-- Start Single Service -->
                            <div class="single-service">
                                <i class="ti-reload"></i>
                                <h4>Free Return</h4>
                                <p>Within 30 days returns</p>
                            </div>
                            <!-- End Single Service -->
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <!-- Start Single Service -->
                            <div class="single-service">
                                <i class="ti-lock"></i>
                                <h4>Sucure Payment</h4>
                                <p>100% secure payment</p>
                            </div>
                            <!-- End Single Service -->
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <!-- Start Single Service -->
                            <div class="single-service">
                                <i class="ti-tag"></i>
                                <h4>Best Peice</h4>
                                <p>Guaranteed price</p>
                            </div>
                            <!-- End Single Service -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Shop Services Area -->
            
            <!-- Start Shop Newsletter  -->
           
            <!-- End Shop Newsletter -->
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close" aria-hidden="true"></span></button>
                            </div>
                            <div class="modal-body">
                                <div class="row no-gutters">
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <!-- Product Slider -->
                                            <div class="product-gallery">
                                                <div class="quickview-slider-active">
                                                    <div class="single-slider">
                                                        <img src="./assets/images/modal1.png" alt="#">
                                                    </div>
                                                    <div class="single-slider">
                                                        <img src="./assets/images/modal2.png" alt="#">
                                                    </div>
                                                    <div class="single-slider">
                                                        <img src="./assets/images/modal3.png" alt="#">
                                                    </div>
                                                    <div class="single-slider">
                                                        <img src="./assets/images/modal4.png" alt="#">
                                                    </div>
                                                </div>
                                            </div>
                                        <!-- End Product slider -->
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <div class="quickview-content">
                                            <h2>Flared Shift Dress</h2>
                                            <div class="quickview-ratting-review">
                                                <div class="quickview-ratting-wrap">
                                                    <div class="quickview-ratting">
                                                        <i class="yellow fa fa-star"></i>
                                                        <i class="yellow fa fa-star"></i>
                                                        <i class="yellow fa fa-star"></i>
                                                        <i class="yellow fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <a href="#"> (1 customer review)</a>
                                                </div>
                                                <div class="quickview-stock">
                                                    <span><i class="fa fa-check-circle-o"></i> in stock</span>
                                                </div>
                                            </div>
                                            <h3>$29.00</h3>
                                            <div class="quickview-peragraph">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                            </div>
                                            <div class="size">
                                                <div class="row">
                                                    <div class="col-lg-6 col-12">
                                                        <h5 class="title">Size</h5>
                                                        <select>
                                                            <option selected="selected">s</option>
                                                            <option>m</option>
                                                            <option>l</option>
                                                            <option>xl</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6 col-12">
                                                        <h5 class="title">Color</h5>
                                                        <select>
                                                            <option selected="selected">orange</option>
                                                            <option>purple</option>
                                                            <option>black</option>
                                                            <option>pink</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quantity">
                                                <!-- Input Order -->
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[1]" class="input-number" data-min="1" data-max="1000" value="1">
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!--/ End Input Order -->
                                            </div>
                                            <div class="add-to-cart">
                                                <a href="#" class="btn">Add to cart</a>
                                                <a href="#" class="btn min"><i class="ti-heart"></i></a>
                                                <a href="#" class="btn min"><i class="fa fa-compress"></i></a>
                                            </div>
                                            <div class="default-social">
                                                <h4 class="share-now">Share:</h4>
                                                <ul>
                                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a class="youtube" href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                                    <li><a class="dribbble" href="#"><i class="fa fa-google-plus"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- Modal end -->
            `

        } catch (error) {

            console.log(error);


        }



    }

}
export default Home;