(() => {

    "use strict";


    /* ======================================================
       SHORT SELECTORS
    ====================================================== */

    const $ = (selector, context = document) =>
        context.querySelector(selector);


    const $$ = (selector, context = document) =>
        [...context.querySelectorAll(selector)];



    /* ======================================================
       PRODUCT DATA
    ====================================================== */

    const products = [

        {
            name: "Top Seller Bundle 2",
            price: 7500,
            oldPrice: 8500,
            image: "images/bundle-2.jpg",
            description: "Imagine × Pacific — 50ml each",
            categories: "top bundle men fresh",
            status: "Sold Out",
            official: "https://www.buyfolle.com/products/top-seller-bundle-2"
        },

        {
            name: "Bundle #3",
            price: 7500,
            oldPrice: 8000,
            image: "images/bundle-3.jpg",
            description: "Premium Folle fragrance bundle",
            categories: "top bundle men fresh",
            status: "Sold Out",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Top Seller Bundle",
            price: 9999,
            oldPrice: 14000,
            image: "images/bundle-top.jpg",
            description: "One of Folle's largest top-seller bundle offers",
            categories: "top bundle men",
            status: "Available",
            official: "https://www.buyfolle.com/products/top-seller-bundle"
        },

        {
            name: "Love of Art",
            price: 3330,
            oldPrice: 3500,
            image: "images/love-of-art.jpg",
            description: "Inspired by Nishàne Hacivat EDP",
            categories: "top unisex woody fresh men",
            status: "Available",
            official: "https://www.buyfolle.com/products/love-of-art"
        },

        {
            name: "Madawi",
            price: 900,
            oldPrice: 0,
            image: "images/madawi.jpg",
            description: "Distinctive unisex fragrance",
            categories: "top unisex oriental women",
            status: "Available",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Italy Prettily",
            price: 2699,
            oldPrice: 2800,
            image: "images/italy-prettily.jpg",
            description: "Inspired by Flora",
            categories: "top women floral fresh",
            status: "Available",
            official: "https://www.buyfolle.com/products/italy-prettily"
        },

        {
            name: "Boss 999",
            price: 3250,
            oldPrice: 3500,
            image: "images/boss-999.jpg",
            description: "Inspired by Alexandria II",
            categories: "top men woody oriental",
            status: "Available",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Irresistible Ice Edition",
            price: 1800,
            oldPrice: 2200,
            image: "images/irresistible-ice.jpg",
            description: "Inspired by Hawas Ice",
            categories: "top men fresh",
            status: "Available",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "IMAGINE",
            price: 4500,
            oldPrice: 0,
            image: "images/imagine.jpg",
            description: "Premium men's fragrance",
            categories: "top men fresh",
            status: "Sold Out",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Pacific",
            price: 4000,
            oldPrice: 0,
            image: "images/pacific.jpg",
            description: "Premium Folle fragrance",
            categories: "top men fresh",
            status: "Sold Out",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "METEORIS",
            price: 4000,
            oldPrice: 0,
            image: "images/meteoris.jpg",
            description: "Fresh premium fragrance",
            categories: "top men fresh",
            status: "Sold Out",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "SYMPHONIE",
            price: 4000,
            oldPrice: 0,
            image: "images/symphonie.jpg",
            description: "Premium Folle fragrance",
            categories: "top men fresh",
            status: "Available",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Everyday Life 2.0",
            price: 1200,
            oldPrice: 0,
            image: "images/everyday-life.jpg",
            description: "Inspired by Office for Men",
            categories: "top men fresh woody",
            status: "Available",
            official: "https://www.buyfolle.com/products/everyday-life-2-0"
        },

        {
            name: "Adore It",
            price: 2880,
            oldPrice: 3000,
            image: "images/adore-it.jpg",
            description: "Inspired by J'Adore",
            categories: "top women floral",
            status: "Sold Out",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Purple Sky",
            price: 2800,
            oldPrice: 0,
            image: "images/purple-sky.jpg",
            description: "Inspired by Libre EDP",
            categories: "women floral oriental",
            status: "Sold Out",
            official: "https://www.buyfolle.com/collections/our-favorites"
        },

        {
            name: "Unlimited Blue 2.0",
            price: 1100,
            oldPrice: 0,
            image: "images/unlimited-blue.jpg",
            description: "Inspired by Sauvage EDT Premium",
            categories: "men fresh",
            status: "Available",
            official: "https://www.buyfolle.com/collections/men"
        },

        {
            name: "O. Nomad Premium",
            price: 4000,
            oldPrice: 0,
            image: "images/o-nomad.jpg",
            description: "Premium woody oriental profile",
            categories: "men oriental woody",
            status: "Available",
            official: "https://www.buyfolle.com/collections/men"
        },

        {
            name: "Aromatic Shine",
            price: 1400,
            oldPrice: 2800,
            image: "images/aromatic-shine.jpg",
            description: "Inspired by Eros EDT",
            categories: "men fresh",
            status: "Available",
            official: "https://www.buyfolle.com/collections/budget-series"
        }

    ];



    /* ======================================================
       SHARED HEADER
    ====================================================== */

    function buildHeader() {

        const headerTarget =
            $("#sharedHeader");


        if (!headerTarget) {
            return;
        }


        headerTarget.innerHTML = `

            <div class="announcement">

                <div class="announcement-track">

                    <span>FOLLE PERFUMES</span>

                    <i class="fa-solid fa-circle"></i>

                    <span>PREMIUM INSPIRED FRAGRANCES</span>

                    <i class="fa-solid fa-circle"></i>

                    <span>NATIONWIDE DELIVERY</span>

                    <i class="fa-solid fa-circle"></i>

                    <span>FREE DELIVERY CURRENTLY PAUSED</span>

                    <i class="fa-solid fa-circle"></i>

                    <span>FOLLE PERFUMES</span>

                    <i class="fa-solid fa-circle"></i>

                    <span>PREMIUM INSPIRED FRAGRANCES</span>

                    <i class="fa-solid fa-circle"></i>

                </div>

            </div>


            <header class="site-header" id="siteHeader">

                <div class="container header-inner">


                    <a href="index.html" class="brand">

                        <span class="brand-mark">
                            ✦
                        </span>

                        <span class="brand-name">
                            FOLLE
                        </span>

                    </a>


                    <nav class="main-nav" id="primaryNav">

                        <a href="index.html" data-nav="home">
                            Home
                        </a>


                        <a href="top-sellers.html" data-nav="top-sellers">
                            Top Sellers
                        </a>


                        <div class="nav-dropdown" id="collectionDropdown">

                            <button class="dropdown-trigger" id="collectionTrigger">

                                Collections

                                <i class="fa-solid fa-chevron-down"></i>

                            </button>


                            <div class="dropdown-menu">

                                <a href="shop.html">

                                    <strong>
                                        All Perfumes
                                    </strong>

                                    <span>
                                        Browse the full collection
                                    </span>

                                </a>


                                <a href="men.html">

                                    <strong>
                                        Men's Collection
                                    </strong>

                                    <span>
                                        Fresh, woody and bold
                                    </span>

                                </a>


                                <a href="women.html">

                                    <strong>
                                        Women's Collection
                                    </strong>

                                    <span>
                                        Floral, elegant and expressive
                                    </span>

                                </a>


                                <a href="top-sellers.html">

                                    <strong>
                                        Bundles
                                    </strong>

                                    <span>
                                        Best-selling combinations
                                    </span>

                                </a>

                            </div>

                        </div>


                        <a href="about.html" data-nav="about">
                            Our Story
                        </a>


                        <a href="faq.html" data-nav="faq">
                            FAQ
                        </a>


                        <a href="wholesale.html" data-nav="wholesale">
                            Wholesale
                        </a>


                        <a href="contact.html" data-nav="contact">
                            Contact
                        </a>

                    </nav>


                    <div class="header-actions">

                        <button
                            class="icon-button"
                            id="searchLaunch"
                            aria-label="Search">

                            <i class="fa-solid fa-magnifying-glass"></i>

                        </button>


                        <a
                            href="shop.html"
                            class="shop-button magnetic">

                            Shop Perfumes

                        </a>


                        <button
                            class="nav-toggle"
                            id="navToggle"
                            aria-label="Navigation"
                            aria-expanded="false">

                            <span></span>
                            <span></span>
                            <span></span>

                        </button>

                    </div>

                </div>

            </header>

        `;

    }



    /* ======================================================
       SHARED FOOTER
    ====================================================== */

    function buildFooter() {

        const footerTarget =
            $("#sharedFooter");


        if (!footerTarget) {
            return;
        }


        footerTarget.innerHTML = `

            <footer class="site-footer">

                <div class="container footer-grid">


                    <div class="footer-brand">

                        <a href="index.html" class="brand">

                            <span class="brand-mark">
                                ✦
                            </span>

                            <span class="brand-name">
                                FOLLE
                            </span>

                        </a>


                        <p>

                            Long-lasting premium-inspired fragrances
                            created for fragrance lovers across Pakistan.

                        </p>


                        <div class="footer-socials">

                            <a
                                href="https://instagram.com/buy.folle"
                                target="_blank"
                                aria-label="Instagram">

                                <i class="fa-brands fa-instagram"></i>

                            </a>


                            <a
                                href="https://fb.com/buyfolle"
                                target="_blank"
                                aria-label="Facebook">

                                <i class="fa-brands fa-facebook-f"></i>

                            </a>


                            <a
                                href="https://wa.me/923363684408"
                                target="_blank"
                                aria-label="WhatsApp">

                                <i class="fa-brands fa-whatsapp"></i>

                            </a>

                        </div>

                    </div>



                    <div class="footer-column">

                        <h3>
                            Explore
                        </h3>

                        <a href="index.html">Home</a>

                        <a href="top-sellers.html">Top Sellers</a>

                        <a href="shop.html">All Perfumes</a>

                        <a href="men.html">Men</a>

                        <a href="women.html">Women</a>

                    </div>



                    <div class="footer-column">

                        <h3>
                            Help
                        </h3>

                        <a href="about.html">Our Story</a>

                        <a href="faq.html">FAQ</a>

                        <a href="wholesale.html">Wholesale</a>

                        <a href="contact.html">Contact</a>

                        <a
                            href="https://www.buyfolle.com/"
                            target="_blank">

                            Official Folle Store

                        </a>

                    </div>



                    <div class="footer-column">

                        <h3>
                            Visit / Contact
                        </h3>


                        <a
                            href="tel:+923363684408"
                            class="footer-contact-link">

                            <i class="fa-solid fa-phone"></i>

                            <span>
                                +92 336 3684408
                            </span>

                        </a>


                        <a
                            href="mailto:buyfolle.care@gmail.com"
                            class="footer-contact-link">

                            <i class="fa-regular fa-envelope"></i>

                            <span>
                                buyfolle.care@gmail.com
                            </span>

                        </a>


                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Plot+385+Block+II+Street+21+Bahadurabad+Karachi"
                            target="_blank"
                            class="footer-contact-link">

                            <i class="fa-solid fa-location-dot"></i>

                            <span>

                                Plot #385, Block II,
                                Street #21, Flat G1,
                                near Alamgir Diagnostics,
                                Bahadurabad,
                                Karachi, Pakistan

                            </span>

                        </a>

                    </div>

                </div>


                <div class="container footer-bottom">

                    <p>

                        ©
                        <span data-year></span>
                        Folle Perfumes.
                        Academic Web Development Project.

                    </p>

                    <p>

                        HTML • CSS • JavaScript

                    </p>

                </div>

            </footer>


            <a
                href="https://wa.me/923363684408?text=Hello%20Folle%20Perfumes%2C%20I%20would%20like%20help%20choosing%20a%20fragrance."
                target="_blank"
                class="floating-whatsapp">

                <i class="fa-brands fa-whatsapp"></i>

                <span>
                    Chat with Folle
                </span>

            </a>

        `;

    }



    /* ======================================================
       SHARED MODALS
    ====================================================== */

    function buildOverlays() {

        const target =
            $("#sharedOverlays");


        if (!target) {
            return;
        }


        target.innerHTML = `

            <div
                class="modal"
                id="finderModal"
                aria-hidden="true">

                <div class="modal-dialog">

                    <button
                        class="modal-close"
                        data-close-finder>

                        <i class="fa-solid fa-xmark"></i>

                    </button>


                    <span class="eyebrow">
                        FRAGRANCE FINDER
                    </span>


                    <h2>

                        What feels
                        <em>like you?</em>

                    </h2>


                    <p>

                        Select a fragrance family and explore
                        matching Folle scents.

                    </p>


                    <div class="finder-options">

                        <a
                            href="shop.html?filter=fresh"
                            class="finder-option">

                            <strong>
                                Fresh & Clean
                            </strong>

                            <small>
                                Citrus • Aquatic • Aromatic
                            </small>

                        </a>


                        <a
                            href="shop.html?filter=woody"
                            class="finder-option">

                            <strong>
                                Woody & Powerful
                            </strong>

                            <small>
                                Woods • Oud • Leather
                            </small>

                        </a>


                        <a
                            href="shop.html?filter=floral"
                            class="finder-option">

                            <strong>
                                Floral & Elegant
                            </strong>

                            <small>
                                Jasmine • Rose • Flowers
                            </small>

                        </a>


                        <a
                            href="shop.html?filter=oriental"
                            class="finder-option">

                            <strong>
                                Warm & Intense
                            </strong>

                            <small>
                                Amber • Musk • Spice
                            </small>

                        </a>

                    </div>

                </div>

            </div>



            <div
                class="search-overlay"
                id="searchOverlay">

                <button
                    class="search-close"
                    id="searchClose">

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <div class="search-box">

                    <span>
                        DISCOVER FOLLE
                    </span>


                    <h2>
                        Find your fragrance.
                    </h2>


                    <form
                        class="global-search"
                        id="globalSearchForm">

                        <input
                            id="globalSearchInput"
                            type="search"
                            placeholder="Search Love of Art, Madawi, floral...">

                        <button>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>

                    </form>

                </div>

            </div>


            <div
                id="toast"
                class="toast"
                role="status">
            </div>

        `;

    }



    /* ======================================================
       MONEY FORMAT
    ====================================================== */

    function money(value) {

        return (
            "Rs. " +
            Number(value).toLocaleString(
                "en-PK"
            )
        );

    }



    /* ======================================================
       RENDER PRODUCTS
    ====================================================== */

    function productCard(product) {

        const soldOut =
            product.status ===
            "Sold Out";


        const sale =
            product.oldPrice &&
            product.oldPrice >
            product.price;


        return `

            <article
                class="product-card reveal"
                data-name="${product.name.toLowerCase()}"
                data-categories="${product.categories.toLowerCase()}">


                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy">


                    <div class="product-badges">

                        ${
                            product.categories.includes("top")
                            ?
                            `<span class="product-badge">TOP SELLER</span>`
                            :
                            ""
                        }


                        ${
                            sale
                            ?
                            `<span class="product-badge sale">SALE</span>`
                            :
                            ""
                        }


                        ${
                            soldOut
                            ?
                            `<span class="product-badge">SOLD OUT</span>`
                            :
                            ""
                        }

                    </div>

                </div>


                <div class="product-info">

                    <span class="product-tags">

                        ${product.categories
                            .split(" ")
                            .slice(0,3)
                            .join(" • ")}

                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <p class="product-description">
                        ${product.description}
                    </p>


                    <div class="price-row">

                        <strong>
                            ${
                                product.name === "Madawi" ||
                                product.name === "Everyday Life 2.0" ||
                                product.name === "Unlimited Blue 2.0"
                                ?
                                "From "
                                :
                                ""
                            }

                            ${money(product.price)}
                        </strong>


                        ${
                            sale
                            ?
                            `<del>${money(product.oldPrice)}</del>`
                            :
                            ""
                        }

                    </div>


                    <div class="product-actions">

                        <a
                            class="inquiry-button"
                            target="_blank"
                            href="https://wa.me/923363684408?text=${encodeURIComponent(
                                "Hello Folle Perfumes, I would like to inquire about " +
                                product.name +
                                "."
                            )}">

                            <i class="fa-brands fa-whatsapp"></i>

                            ${
                                soldOut
                                ?
                                "Ask Availability"
                                :
                                "Inquire"
                            }

                        </a>


                        <a
                            class="official-button"
                            href="${product.official}"
                            target="_blank"
                            aria-label="View ${product.name} on official Folle website">

                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                </div>

            </article>

        `;

    }



    function renderProducts() {

        const grids =
            $$("[data-product-collection]");


        grids.forEach(grid => {

            const collection =
                grid.dataset.productCollection;


            let selected =
                products;


            if (
                collection !== "all"
            ) {

                selected =
                    products.filter(
                        product =>
                            product.categories.includes(
                                collection
                            )
                    );

            }


            const limit =
                Number(
                    grid.dataset.productLimit ||
                    0
                );


            if (limit) {

                selected =
                    selected.slice(
                        0,
                        limit
                    );

            }


            grid.innerHTML =
                selected
                    .map(productCard)
                    .join("");

        });

    }



    /* ======================================================
       ACTIVE NAV
    ====================================================== */

    function activeNavigation() {

        const page =
            document.body.dataset.page;


        $$("[data-nav]").forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.dataset.nav ===
                    page
                );

            }
        );

    }



    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    function setupNavigation() {

        const toggle =
            $("#navToggle");

        const nav =
            $("#primaryNav");

        const trigger =
            $("#collectionTrigger");

        const dropdown =
            $("#collectionDropdown");


        toggle?.addEventListener(
            "click",
            () => {

                const open =
                    nav.classList.toggle(
                        "open"
                    );


                toggle.setAttribute(
                    "aria-expanded",
                    open
                );


                document.body
                    .classList
                    .toggle(
                        "lock",
                        open
                    );

            }
        );


        trigger?.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <=
                    850
                ) {

                    dropdown.classList.toggle(
                        "open"
                    );

                }

            }
        );


        $$("#primaryNav a").forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        nav?.classList.remove(
                            "open"
                        );

                        document.body.classList.remove(
                            "lock"
                        );

                    }
                );

            }
        );

    }



    /* ======================================================
       HEADER SCROLL
    ====================================================== */

    function setupHeaderScroll() {

        const header =
            $("#siteHeader");


        window.addEventListener(
            "scroll",
            () => {

                header?.classList.toggle(
                    "scrolled",
                    window.scrollY > 15
                );

            },
            {
                passive: true
            }
        );

    }



    /* ======================================================
       SCROLL REVEAL
    ====================================================== */

    function setupReveal() {

        const elements =
            $$(".reveal");


        if (
            !(
                "IntersectionObserver"
                in window
            )
        ) {

            elements.forEach(
                element =>
                    element.classList.add(
                        "in"
                    )
            );

            return;

        }


        const observer =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "in"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: .12
                }

            );


        elements.forEach(
            element =>
                observer.observe(
                    element
                )
        );

    }



    /* ======================================================
       POINTER / MOUSE EFFECTS
    ====================================================== */

    function setupMouseEffects() {

        if (
            !matchMedia(
                "(pointer:fine)"
            ).matches
        ) {
            return;
        }


        const hero =
            $("#hero");

        const glow =
            $("#pointerGlow");


        hero?.addEventListener(
            "pointermove",
            event => {

                if (!glow) {
                    return;
                }


                const rect =
                    hero.getBoundingClientRect();


                glow.style.left =
                    (
                        event.clientX -
                        rect.left
                    ) +
                    "px";


                glow.style.top =
                    (
                        event.clientY -
                        rect.top
                    ) +
                    "px";

            }
        );


        $$(".image-tilt").forEach(
            element => {

                element.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            element.getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) /
                                rect.width -
                            .5;


                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) /
                                rect.height -
                            .5;


                        element.style.transform =
                            `perspective(1000px)
                             rotateY(${x * 4}deg)
                             rotateX(${-y * 4}deg)`;

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        element.style.transform =
                            "";

                    }
                );

            }
        );


        $$(".magnetic").forEach(
            button => {

                button.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            button.getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left -
                                rect.width / 2
                            ) *
                            .08;


                        const y =
                            (
                                event.clientY -
                                rect.top -
                                rect.height / 2
                            ) *
                            .08;


                        button.style.transform =
                            `translate(${x}px, ${y}px)`;

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    () => {

                        button.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* ======================================================
       TOAST
    ====================================================== */

    let toastTimer;


    function toast(message) {

        const element =
            $("#toast");


        if (!element) {
            return;
        }


        element.textContent =
            message;


        element.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                () => {

                    element.classList.remove(
                        "show"
                    );

                },
                2600
            );

    }



    /* ======================================================
       FINDER
    ====================================================== */

    function setupFinder() {

        const modal =
            $("#finderModal");


        const open =
            () => {

                modal?.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "lock"
                );

            };


        const close =
            () => {

                modal?.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "lock"
                );

            };


        $$("[data-open-finder]").forEach(
            button => {

                button.addEventListener(
                    "click",
                    open
                );

            }
        );


        $$("[data-close-finder]").forEach(
            button => {

                button.addEventListener(
                    "click",
                    close
                );

            }
        );


        modal?.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    modal
                ) {

                    close();

                }

            }
        );


        return close;

    }



    /* ======================================================
       SEARCH OVERLAY
    ====================================================== */

    function setupSearch() {

        const overlay =
            $("#searchOverlay");

        const input =
            $("#globalSearchInput");


        const open =
            () => {

                overlay?.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "lock"
                );


                setTimeout(
                    () =>
                        input?.focus(),
                    250
                );

            };


        const close =
            () => {

                overlay?.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "lock"
                );

            };


        $("#searchLaunch")
            ?.addEventListener(
                "click",
                open
            );


        $("#searchClose")
            ?.addEventListener(
                "click",
                close
            );


        $("#globalSearchForm")
            ?.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const query =
                        input.value.trim();


                    if (!query) {
                        return;
                    }


                    window.location.href =
                        "shop.html?search=" +
                        encodeURIComponent(
                            query
                        );

                }
            );


        return close;

    }



    /* ======================================================
       PRODUCT FILTERS
    ====================================================== */

    function setupProductFiltering() {

        const search =
            $("#productSearch");

        const chips =
            $$(".filter-chip");

        const count =
            $("#visibleCount");

        const empty =
            $("#emptyState");


        if (
            !$("#productGrid")
        ) {
            return;
        }


        let active =
            "all";


        const url =
            new URLSearchParams(
                window.location.search
            );


        const urlFilter =
            url.get("filter");


        const urlSearch =
            url.get("search");


        if (
            urlFilter
        ) {

            const matching =
                chips.find(
                    chip =>
                        chip.dataset.filter ===
                        urlFilter
                );


            if (matching) {

                chips.forEach(
                    chip =>
                        chip.classList.remove(
                            "active"
                        )
                );


                matching.classList.add(
                    "active"
                );


                active =
                    urlFilter;

            }

        }


        if (
            urlSearch &&
            search
        ) {

            search.value =
                urlSearch;

        }


        function apply() {

            const cards =
                $$("#productGrid .product-card");


            const query =
                (
                    search?.value ||
                    ""
                )
                    .trim()
                    .toLowerCase();


            let visible =
                0;


            cards.forEach(
                card => {

                    const categories =
                        card.dataset.categories;


                    const name =
                        card.dataset.name;


                    const categoryMatch =
                        active === "all" ||
                        categories.includes(
                            active
                        );


                    const textMatch =
                        !query ||
                        name.includes(
                            query
                        ) ||
                        categories.includes(
                            query
                        );


                    const show =
                        categoryMatch &&
                        textMatch;


                    card.classList.toggle(
                        "hidden",
                        !show
                    );


                    if (show) {
                        visible++;
                    }

                }
            );


            if (count) {

                count.textContent =
                    visible;

            }


            empty?.classList.toggle(
                "show",
                visible === 0
            );

        }


        chips.forEach(
            chip => {

                chip.addEventListener(
                    "click",
                    () => {

                        chips.forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                        chip.classList.add(
                            "active"
                        );


                        active =
                            chip.dataset.filter;


                        apply();

                    }
                );

            }
        );


        search?.addEventListener(
            "input",
            apply
        );


        function reset() {

            active =
                "all";


            chips.forEach(
                chip =>
                    chip.classList.toggle(
                        "active",
                        chip.dataset.filter ===
                        "all"
                    )
            );


            if (search) {
                search.value = "";
            }


            apply();

        }


        $("#resetFilters")
            ?.addEventListener(
                "click",
                reset
            );


        $("#emptyReset")
            ?.addEventListener(
                "click",
                reset
            );


        apply();

    }



    /* ======================================================
       FAQ
    ====================================================== */

    function setupFAQ() {

        $$(".accordion-question")
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const item =
                                button.closest(
                                    ".accordion-item"
                                );


                            const open =
                                item.classList.toggle(
                                    "open"
                                );


                            button.setAttribute(
                                "aria-expanded",
                                open
                            );


                            $$(".accordion-item")
                                .filter(
                                    other =>
                                        other !==
                                        item
                                )
                                .forEach(
                                    other => {

                                        other.classList.remove(
                                            "open"
                                        );


                                        $(
                                            ".accordion-question",
                                            other
                                        )?.setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );

                                    }
                                );

                        }
                    );

                }
            );

    }



    /* ======================================================
       COUNTERS
    ====================================================== */

    function setupCounters() {

        const counters =
            $$(".counter");


        if (
            !counters.length
        ) {
            return;
        }


        const observer =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            const element =
                                entry.target;


                            const target =
                                Number(
                                    element.dataset.target
                                );


                            const suffix =
                                element.dataset.suffix ||
                                "";


                            let current =
                                0;


                            const step =
                                Math.max(
                                    1,
                                    Math.ceil(
                                        target / 45
                                    )
                                );


                            const timer =
                                setInterval(
                                    () => {

                                        current =
                                            Math.min(
                                                target,
                                                current + step
                                            );


                                        element.textContent =
                                            current +
                                            suffix;


                                        if (
                                            current >=
                                            target
                                        ) {

                                            clearInterval(
                                                timer
                                            );

                                        }

                                    },
                                    30
                                );


                            observer.unobserve(
                                element
                            );

                        }
                    );

                },

                {
                    threshold: .5
                }

            );


        counters.forEach(
            counter =>
                observer.observe(
                    counter
                )
        );

    }



    /* ======================================================
       REVIEWS
    ====================================================== */

    function setupReviews() {

        const slides =
            $$(".review-slide");


        if (
            !slides.length
        ) {
            return;
        }


        let current =
            0;


        function show(index) {

            current =
                (
                    index +
                    slides.length
                ) %
                slides.length;


            slides.forEach(
                (slide, i) => {

                    slide.classList.toggle(
                        "active",
                        i === current
                    );

                }
            );

        }


        $("#reviewNext")
            ?.addEventListener(
                "click",
                () =>
                    show(
                        current + 1
                    )
            );


        $("#reviewPrev")
            ?.addEventListener(
                "click",
                () =>
                    show(
                        current - 1
                    )
            );


        const slider =
            $("#reviewSlider");


        let startX =
            null;


        slider?.addEventListener(
            "pointerdown",
            event => {

                startX =
                    event.clientX;

            }
        );


        slider?.addEventListener(
            "pointerup",
            event => {

                if (
                    startX === null
                ) {
                    return;
                }


                const distance =
                    event.clientX -
                    startX;


                if (
                    Math.abs(
                        distance
                    ) >
                    45
                ) {

                    show(
                        current +
                        (
                            distance <
                            0
                            ?
                            1
                            :
                            -1
                        )
                    );

                }


                startX =
                    null;

            }
        );

    }



    /* ======================================================
       NEWSLETTER
    ====================================================== */

    function setupNewsletter() {

        $("#newsletterForm")
            ?.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const input =
                        $("#newsletterEmail");


                    const email =
                        input.value.trim();


                    if (
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            .test(
                                email
                            )
                    ) {

                        toast(
                            "Please enter a valid email address."
                        );

                        return;

                    }


                    toast(
                        "Thanks for joining the Folle list."
                    );


                    event.target.reset();

                }
            );

    }



    /* ======================================================
       CONTACT FORM
    ====================================================== */

    function setupContactForm() {

        const form =
            $("#contactForm");


        if (!form) {
            return;
        }


        const message =
            $("#message");


        message?.addEventListener(
            "input",
            () => {

                $("#messageCount").textContent =
                    message.value.length;

            }
        );


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    $("#name").value.trim();


                const phone =
                    $("#phone").value.trim();


                const email =
                    $("#email").value.trim();


                const interest =
                    $("#interest").value;


                const msg =
                    $("#message").value.trim();


                const consent =
                    $("#consent").checked;


                let valid =
                    true;


                function error(
                    selector,
                    message
                ) {

                    const element =
                        $(selector);


                    if (element) {

                        element.textContent =
                            message;

                    }


                    if (message) {

                        valid =
                            false;

                    }

                }


                error(
                    "#nameError",
                    name.length >= 3
                    ?
                    ""
                    :
                    "Enter at least 3 characters."
                );


                error(
                    "#phoneError",
                    /^(?:\+92|0)?3\d{9}$/
                        .test(
                            phone.replace(
                                /[\s-]/g,
                                ""
                            )
                        )
                    ?
                    ""
                    :
                    "Enter a valid Pakistani mobile number."
                );


                error(
                    "#emailError",
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        .test(
                            email
                        )
                    ?
                    ""
                    :
                    "Enter a valid email address."
                );


                error(
                    "#messageError",
                    msg.length >= 10
                    ?
                    ""
                    :
                    "Write at least 10 characters."
                );


                error(
                    "#consentError",
                    consent
                    ?
                    ""
                    :
                    "Please confirm the information."
                );


                if (!valid) {

                    toast(
                        "Please correct the form."
                    );

                    return;

                }


                const text =
`Hello Folle Perfumes,

Name: ${name}
Phone: ${phone}
Email: ${email}
Inquiry: ${interest}

Message:
${msg}`;


                window.open(
                    "https://wa.me/923363684408?text=" +
                    encodeURIComponent(
                        text
                    ),
                    "_blank"
                );

            }
        );

    }



    /* ======================================================
       WHOLESALE FORM
    ====================================================== */

    function setupWholesaleForm() {

        const form =
            $("#wholesaleForm");


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const business =
                    $("#businessName").value.trim();


                const name =
                    $("#wholesaleName").value.trim();


                const phone =
                    $("#wholesalePhone").value.trim();


                const city =
                    $("#wholesaleCity").value.trim();


                const type =
                    $("#businessType").value;


                const message =
                    $("#wholesaleMessage").value.trim();


                let valid =
                    true;


                function setError(
                    selector,
                    text
                ) {

                    const element =
                        $(selector);


                    if (element) {

                        element.textContent =
                            text;

                    }


                    if (text) {

                        valid =
                            false;

                    }

                }


                setError(
                    "#businessNameError",
                    business.length >= 2
                    ?
                    ""
                    :
                    "Enter business name."
                );


                setError(
                    "#wholesaleNameError",
                    name.length >= 3
                    ?
                    ""
                    :
                    "Enter contact person."
                );


                setError(
                    "#wholesalePhoneError",
                    phone.length >= 10
                    ?
                    ""
                    :
                    "Enter a valid phone number."
                );


                setError(
                    "#wholesaleCityError",
                    city.length >= 2
                    ?
                    ""
                    :
                    "Enter city."
                );


                setError(
                    "#wholesaleMessageError",
                    message.length >= 10
                    ?
                    ""
                    :
                    "Explain your requirements."
                );


                if (!valid) {

                    toast(
                        "Please complete the wholesale form."
                    );

                    return;

                }


                const whatsapp =
`Hello Folle Perfumes,

I would like to make a wholesale inquiry.

Business: ${business}
Contact Person: ${name}
Phone: ${phone}
City: ${city}
Type: ${type}

Requirements:
${message}`;


                window.open(
                    "https://wa.me/923363684408?text=" +
                    encodeURIComponent(
                        whatsapp
                    ),
                    "_blank"
                );

            }
        );

    }



    /* ======================================================
       KEYBOARD EVENTS
    ====================================================== */

    function setupKeyboard(
        closeFinder,
        closeSearch
    ) {

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    $("#primaryNav")
                        ?.classList
                        .remove(
                            "open"
                        );


                    closeFinder?.();

                    closeSearch?.();

                    document.body.classList.remove(
                        "lock"
                    );

                }


                if (
                    event.key ===
                    "/" &&
                    $("#productSearch") &&
                    document.activeElement !==
                    $("#productSearch")
                ) {

                    event.preventDefault();


                    $("#productSearch")
                        .focus();

                }


                if (
                    event.key ===
                    "ArrowRight" &&
                    document.activeElement ===
                    $("#reviewSlider")
                ) {

                    $("#reviewNext")
                        ?.click();

                }


                if (
                    event.key ===
                    "ArrowLeft" &&
                    document.activeElement ===
                    $("#reviewSlider")
                ) {

                    $("#reviewPrev")
                        ?.click();

                }

            }
        );

    }



    /* ======================================================
       YEAR
    ====================================================== */

    function year() {

        $$("[data-year]")
            .forEach(
                element => {

                    element.textContent =
                        new Date()
                            .getFullYear();

                }
            );

    }



    /* ======================================================
       INITIALISE
    ====================================================== */

    function init() {

        buildHeader();

        buildFooter();

        buildOverlays();

        renderProducts();

        activeNavigation();

        setupNavigation();

        setupHeaderScroll();

        setupReveal();

        setupMouseEffects();

        setupCounters();

        setupReviews();

        setupFAQ();

        setupProductFiltering();

        setupNewsletter();

        setupContactForm();

        setupWholesaleForm();

        year();


        const closeFinder =
            setupFinder();


        const closeSearch =
            setupSearch();


        setupKeyboard(
            closeFinder,
            closeSearch
        );

    }


    document.addEventListener(
        "DOMContentLoaded",
        init
    );


})();