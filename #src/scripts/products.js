
let buttonShow = document.querySelector('.b-catalog__buttonShow');
buttonShow.addEventListener("click", (event) => {
    getProducts(buttonShow);
    event.preventDefault();
})



// Load More Products
async function getProducts(button) {
    if (!button.classList.contains('_hold')) {
        button.classList.add('_hold');
        const file = "json/products.json";
        let response = await fetch(file, {
            method: "GET"
        });
        if (response.ok) {
            let result = await response.json();
            loadProducts(result);
            button.classList.remove('_hold');
            button.remove();
        } else {
            alert("Ошибка");
        }
    }
}

function loadProducts(data) {
    const productsItems = document.querySelector('.b-catalog__grid');
    data.products.forEach(item => {
        const productId = item.id;
        const productUrl = item.url;
        const productImage = item.image;
        const productText = item.text;

        let productTemplate = ` 
        <a href="${productUrl}" data-pid="${productId}" class="b-catalog__item">
            <img
            class="b-catalog__logoImg"
            src="img/catalog/logo/${productImage}"
            alt="car logo"
            />
            <p class="b-catalog__logoText">${productText}</p>
        </a>
        `;

        productsItems.insertAdjacentHTML('beforeend', productTemplate);
    });
}