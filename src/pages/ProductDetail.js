import ProductAPI from '../api/productAPI';
import Footer from '../components/website/Footer';
import Header from '../components/website/Header';
import Header2 from '../components/website/Header2';

import { parseRequestUrl } from '../utils.js';

const ProductDetail = {

        async render() {

            const { id } = parseRequestUrl();
            const { data: product } = await ProductAPI.get(id);
            const { data: products } = await ProductAPI.getAll();
            // console.log(products);

            const cate = product.categoryID;
            console.log(cate);


            return /*html*/ `
        ${await Header2.render()}
        <section>
            <div  class= "row">
                <div class="col-6">
                    <div id="boxImage">
                        <img style="width:330px;" src= "${product.image}" />
                    </div>
               
                </div>

                <div class="col-6">
                    <div id="boxInfo">
                          <h1>${product.name}</h1>
                          <div id="mota" style= "padding-top:30px;">
                            Mô tả sản phẩm : ${product.desciption}
                          </div>
                          <div id="infoproduct">
                                <p>Gía sản phẩm: <span> ${product.price}</span></p>
                                <p> Sô lượng: <span>${product.quantity} </span></p>
                                <p><button type="button" class="btn btn-secondary">Add to cart</button></p>

                          </div>
                         
                    </div>
                    
                </div>

            </div>
        </section>

        <section class="shop-home-list section">
		<div class="container">
		
        <div class="row">
            <div class="col-12">
                <div class="shop-section-title">
                    <h1>related products</h1>
                </div>
            </div>
        </div>
			<div class="row">

			${products.filter(productcate => productcate.categoryID == cate)
                .map(productcate => {
                    return /*html*/ `
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single List  -->
						<div class="single-list">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-12">
									<div class="list-image overlay">
										<img src="${productcate.image}" alt="${productcate.name}">
										<a href="/#/products/${productcate.id}" class="buy"><i class="fa fa-shopping-bag"></i></a>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12 no-padding">
									<div class="content">
										<h4 class="title"><a href="/#/products/${productcate.id}">${productcate.name}</a></h4>
										<p class="price with-discount">$${productcate.price}</p>
									</div>
								</div>
							</div>
						</div>
						<!-- End Single List  -->
					</div>
					`
                }).join("")

            }

			</div>
		</div>
	</section>
        ${await Footer.render()}
            `
    }

}
export default ProductDetail;