import { parseRequestUrl, $, reRender } from '../utils.js';
import ProductAPI from "../api/productAPI";
const FilterPrice = {

    async render() {
        // return /*html*/ `
        //         <div class="single-widget range">
        //             <h3 class="title">Shop by Price</h3>
        //                 <div class="price-filter">
        //                     <div class="price-filter-inner">
        //                         <div id="slider-range"></div>
        //                         <div class="price_slider_amount">
        //                             <div class="label-input">
        //                                 <span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price">
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <ul class="check-box-list">
        //                     <li>
        //                         <label class="checkbox-inline" for="1"><input  value="100" name="news" id="1" type="checkbox">$20 - $100 </label>
        //                     </li>
        //                     <li>
        //                         <label class="checkbox-inline" for="2"><input  value="250"  name="news" id="2" type="checkbox">$100 - $250 </label>
        //                     </li>
        //                     <li>
        //                         <label class="checkbox-inline" for="3"><input  value="500" name="news" id="3" type="checkbox"> On - $500</label>
        //                     </li>
        //                 </ul>
        //         </div>
        // `
    },
    async afterRender() {
        // var checkboxs = document.getElementsByName('news');

        // const { data: products } = await ProductAPI.getAll();

        // checkboxs.forEach(check => {
        //     check.addEventListener('click', async function() {
        //         products.filter((item) => {
        //             if (check.value == 100) {

        //                 if (item.price < 100) {

        //                     const result = /*html*/ `
        //                         ${item.name}

        //                 <ul class="check-box-list">
        //                     <li>
        //                         <label class="checkbox-inline" for="1"><input  value="100" name="news" id="1" type="checkbox">$20 - $100 </label>
        //                     </li>
        //                     <li>
        //                         <label class="checkbox-inline" for="2"><input  value="250"  name="news" id="2" type="checkbox">$100 - $250 </label>
        //                     </li>
        //                     <li>
        //                         <label class="checkbox-inline" for="3"><input  value="500" name="news" id="3" type="checkbox"> On - $500</label>
        //                     </li>
        //                 </ul>
        //                     `
        //                     return `
        //                         ${result}
        //                     `;

        //                 }

        //             }

        //         })



        //     })
        // })
    }

}

export default FilterPrice;