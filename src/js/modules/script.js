import { isMobile } from "./functions.js";
import { removeClasses } from "./functions.js";


window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;

        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains("svg-arrow-down-dims")) {
                targetElement.closest(".menu__item").classList.toggle("_hover");
            }
            if (!targetElement.closest(".menu__item") && document.querySelectorAll(".menu__item._hover").length > 0) {
                removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
            }
        }

        if (targetElement.classList.contains("svg-search-dims")) {
            targetElement.closest(".search-form").classList.toggle("_active");
        }
        else if (!targetElement.closest(".search-form") && document.querySelector(".search-form._active")) {
            document.querySelector(".search-form").classList.remove("_active");
        }

        if (targetElement.classList.contains("products__more")) {
            getProducts(targetElement);
            e.preventDefault();
        }
        if (targetElement.classList.contains("products__hiden")) {
            hidenProducts(targetElement);
            e.preventDefault();
        }
        if (targetElement.classList.contains("actions-product__button")) {
            const productId = targetElement.closest(".item-product").dataset.pid;
            addToCart(targetElement, productId);
            e.preventDefault();
        }
        if (targetElement.classList.contains("cart-header__icon") || targetElement.closest(".cart-header__icon")) {
            if (document.querySelector(".cart-list").children.length > 0) {
                document.querySelector(".cart-header").classList.toggle("_active");
            }
            e.preventDefault();
        } else if (!targetElement.closest(".cart-header") && !targetElement.classList.contains("actions-product__button")) {
            document.querySelector(".cart-header").classList.remove("_active");
        }
        if (targetElement.classList.contains("cart-list__delete")) {
            const productId = targetElement.closest(".cart-list__item").dataset.cartPid;
            updateCart(targetElement, productId, false);
            e.preventDefault();
        }
    }

    // Header

    const headerElement = document.querySelector(".header")

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove("_scroll")
        } else {
            headerElement.classList.add("_scroll");
        }
    };

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);


    // Load more products
    async function getProducts(button) {
        if (!button.classList.contains("_hold")) {
            button.classList.add("_hold");
            const url = "json/products.json";

            let response = await fetch(url, {
                method: "GET",
            });
            if (response.ok) {
                let result = await response.json();
                loadProducts(result);
                button.classList.remove("_hold");
                button.style.display = "none";
                document.querySelector(".products__hiden").style.display = "inline-flex";
            } else {
                alert("Помилка");
            }
        }
    }

    function loadProducts(data) {
        const productsItems = document.querySelector(".products__items");
        const template = document.querySelector("#productsCardTemplate").innerHTML;
        data.products.forEach(item => {
            let renderedHtml = Mustache.render(template, item);
            productsItems.insertAdjacentHTML("beforeend", renderedHtml);
        });
    }

    function hidenProducts(hideButton) {
        let articles = document.querySelectorAll(".products__items > article");
        for (const article of articles) {
            if (article.classList.contains("_hiden")) {
                article.style.display = "none";
            }
        }
        document.querySelector(".products__hiden").style.display = "none";
        document.querySelector(".products__more").style.display = "inline-flex";

    }

    // AddToCart
    function addToCart(productButton, productId) {
        if (!productButton.classList.contains("_hold")) {
            productButton.classList.add("_hold");
            productButton.classList.add("_fly");

            const cart = document.querySelector(".cart-header__icon");
            const product = document.querySelector(`[data-pid ="${productId}"]`);
            const productImage = product.querySelector(".item-product__image");

            const productImageFly = productImage.cloneNode(true);

            const productImageFlyWidth = productImage.offsetWidth;
            const productImageFlyHeight = productImage.offsetHeight;
            const productImageFlyTop = productImage.getBoundingClientRect().top;
            const productImageFlyLeft = productImage.getBoundingClientRect().left;

            productImageFly.setAttribute("class", "_flyImage _ibg");

            productImageFly.style.cssText =
                `
            left: ${productImageFlyLeft}px;
            top: ${productImageFlyTop}px;
            width: ${productImageFlyWidth}px;
            height: ${productImageFlyHeight}px;
            `;

            document.body.append(productImageFly);

            const cartFlyLeft = cart.getBoundingClientRect().left;
            const cartFlyTop = cart.getBoundingClientRect().top;

            productImageFly.style.cssText =
                `
            left: ${cartFlyLeft}px;
            top: ${cartFlyTop}px;
            width: 0px;
            height: 0px;
        	opacity: 0;
            `;

            productImageFly.addEventListener("transitionend", function () {
                if (productButton.classList.contains("_fly")) {
                    productImageFly.remove();
                    updateCart(productButton, productId);
                    productButton.classList.remove("_fly");
                }
            });
        }

    }

    function updateCart(productButton, productId, productAdd = true) {
        const cart = document.querySelector(".cart-header");
        const cartIcon = cart.querySelector(".cart-header__icon");
        const cartQuantity = cartIcon.querySelector("span");
        const cartProduct = document.querySelector(`[data-cart-pid = "${productId}"]`);
        const cartList = document.querySelector(".cart-list");

        // Добавляємо товари
        if (productAdd) {
            if (cartQuantity) {
                cartQuantity.innerHTML = ++cartQuantity.innerHTML;
            } else {
                cartIcon.insertAdjacentHTML("beforeend", `<span>1</span>`);
            }

            if (!cartProduct) {
                const product = document.querySelector(`[data-pid = "${productId}"]`);
                const cartProductImage = product.querySelector(".item-product__image").innerHTML;
                const cartProductTitle = product.querySelector(".item-product__title").innerHTML;
                const cartProductContend =
                    `
                <a href="" class="cart-list__image _ibg">${cartProductImage}</a>
                <div class="cart-list__body">
                    <a href="" class="cart-list__title">${cartProductTitle}</a>
                    <div class="cart-list__quantity">Quantity: <span>1</span></div>
                    <a href="" class="cart-list__delete">Delete</a>
                </div>
                `;
                cartList.insertAdjacentHTML("beforeend", `<li data-cart-pid = "${productId}" class="cart-list__item">${cartProductContend}</li>`);
            } else {
                const cartProductQuantity = cartProduct.querySelector(".cart-list__quantity span");
                cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
            }

            //Після всіх дійств
            productButton.classList.remove('_hold');
        } else {
            const cartProductQuantity = cartProduct.querySelector(".cart-list__quantity span");
            cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
            if (!parseInt(cartProductQuantity.innerHTML)) {
                cartProduct.remove();
            }

            const cartQuantityValue = --cartQuantity.innerHTML;

            if (cartQuantityValue) {
                cartQuantity.innerHTML = cartQuantityValue;
            } else {
                cartQuantity.remove();
                cart.classList.remove("_active");
            }
        }
    }

    // Furniture Gallery
    const furniture = document.querySelector(".furniture__body");
    if (furniture && !isMobile.any()) {
        const furnitureItems = document.querySelector(".furniture__items");
        const furnitureColumn = document.querySelectorAll(".furniture__column");

        //Швидкість
        const speed = furniture.dataset.speed;

        //Оголощення змінних

        let positionX = 0;
        let cordXprocent = 0;


        function setMouseGulleryStyle() {
            let furnitureItemsWidth = 0;
            furnitureColumn.forEach(element => {
                furnitureItemsWidth += element.offsetWidth;
            });

            const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
            const distX = Math.floor(cordXprocent - positionX);

            positionX = positionX + (distX * speed);
            let position = furnitureDifferent / 200 * positionX;

            furnitureItems.style.cssText = `transform: translate3d(${-position}px, 0, 0);`;

            if (Math.abs(distX) > 0) {
                requestAnimationFrame(setMouseGulleryStyle);
            } else {
                furniture.classList.remove("_init");
            }
        }
        furniture.addEventListener("mousemove", function (e) {
            //Отримуємо ширину
            const furnitureWidth = furniture.offsetWidth;

            // Нуль по-середині
            const cordX = e.pageX - furnitureWidth / 2;

            // Отримуємо відсоток 
            cordXprocent = cordX / furnitureWidth * 200;

            if (!furniture.classList.contains("_init")) {
                requestAnimationFrame(setMouseGulleryStyle);
                furniture.classList.add("_init");
            }
        });
    }

}
/*
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
    gallery_init();
}
function gallery_init() {
    for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];
        lightGallery(el, {
            counter: false,
            selector: 'a',
            download: false
        });
    }
}
*/
