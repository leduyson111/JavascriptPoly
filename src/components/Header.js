import CategoryAPI from "../api/categoryAPI";

const Header = {

        async render() {
            const { data: categories } = await CategoryAPI.getAll();
            // console.log(categories);

            return /*html*/ `
            <p class="h5 my-0 me-md-auto fw-normal">Company name</p>
            <nav class="my-2 my-md-0 me-md-3">
                <a class="p-2 text-dark" href="/">Home</a>
                <a class="p-2 text-dark" href="/#/products/">Products</a>
                ${categories.map(category => {
            return `<a class="p-2 text-dark" href="/#/category/${category.id}">${category.name}</a>`

        })
            }
                <a class="p-2 text-dark" href="#">Support</a>
                <a class="p-2 text-dark" href="#">Pricing</a>
            </nav>
            <a class="btn btn-outline-primary" href="#">Sign up</a>
        `

    }
}


export default Header;