const PRODUCTS = [
    {
        id: "mac",
        category: "mac",
        title: "Mac",
        items: [
            {
                id: "1",
                name: "Macbook Air 15",
                price: 10000,
                image:
                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
                description:
                    "O MacBook Air 15 oferece um desempenho de última geração com uma tela incrível e uma bateria que dura o dia todo.",
                available: false,
            },
            {
                id: "2",
                name: "Macbook Pro 16",
                price: 15000,
                image:
                    "https://cdn.awsli.com.br/600x450/1271/1271561/produto/128004144/03c28ec66f.jpg",
                description:
                    "Com o MacBook Pro 16, você tem desempenho profissional em um design elegante, perfeito para profissionais criativos e entusiastas da tecnologia.",
                available: true,
            },
            {
                id: "3",
                name: "Mac Mini M2",
                price: 6400,
                image:
                    "https://cdn.awsli.com.br/2500x2500/2549/2549769/produto/257753085/1-6nbpwedlpg.jpg",
                description:
                    "O Mac Mini M2 oferece a potência do chip M2 em um formato compacto, ideal para qualquer ambiente de trabalho ou home office.",
                available: true,
            },
        ],
    },
    {
        id: "iphone",
        category: "iphone",
        title: "Iphone",
        items: [
            {
                id: "4",
                name: "iPhone 15",
                price: 8000,
                image:
                    "https://a-static.mlcdn.com.br/1500x1500/iphone-15-apple-256gb-camera-dupla-48mp-tela-6-1-azul/kabum/511398/bdac051104250b55c79d9545a3ca28f3.jpeg",
                description:
                    "O iPhone 15 é um smartphone de última geração com câmeras inovadoras e uma performance incrível.",
                available: true,
            },
            {
                id: "5",
                name: "iPhone 16 Pro",
                price: 13000,
                image:
                    "https://fastshopbr.vtexassets.com/arquivos/ids/1684087/0_AEMYX23BEABNZ_PRD_1500_1.jpg?v=638756520375730000",
                description:
                    "O iPhone 16 traz ainda mais inovação com melhorias em desempenho, câmera e eficiência energética.",
                available: true,
            },
        ],
    },
    {
        id: "ipad",
        category: "ipad",
        title: "Ipad",
        items: [
            {
                id: "6",
                name: "iPad Pro 11",
                price: 5500,
                image:
                    "https://images.kabum.com.br/produtos/fotos/462991/11-inch-ipad-pro-wi-fi-256gb-space-grey-mnxf3bz-a_1685634818_g.jpg",
                description:
                    "O iPad Pro 11 oferece desempenho incomparável com a tela Liquid Retina e a potência do chip M2, perfeito para trabalho e diversão.",
                available: true,
            },
        ],
    },
    {
        id: "watch",
        category: "watch",
        title: "Apple Watchs",
        items: [
            {
                id: "7",
                name: "Apple Watch Series 8",
                price: 3500,
                image:
                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_FV99_VW_34FR+watch-case-46-titanium-gold-cell-s10_VW_34FR+watch-face-46-titanium-gold-s10_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=WVNjN2d2K0IyRWs5TVRBOEoxa3R5RW5TeWJ6QW43NUFnQ2V4cmRFc1VnYkdzNmhoZy9wdXZ1eGxsMlpWR095YjZhM1lKSU1XSjRzVll6MyttdlhpVVNndmdtajNLc0tYa29tMjdSbHJFVEpRQ1BINzRIOVNwOEhydmVpRU1xK21mRHdsU0dZV3ZyVW8rK2VGM0VERmFWQ2Jja3RTcndxVk44c3BUb3hwekd1ZWNXKzRjNm44S3F0NHd6SWZ1Ym96TjR0Mk1vYzhCYkpIdjVHK0VERndjbFZpVXdXemkxaTJaaSs4bUxmcXE3cw",
                description:
                    "O Apple Watch Series 8 é seu parceiro perfeito para monitoramento de saúde, fitness e conectividade com o iPhone.",
                available: false,
            },
        ],
    },
    {
        id: "airpods",
        category: "airpods",
        title: "Airpods",
        items: [
            {
                id: "8",
                name: "AirPods Pro 2",
                price: 2800,
                image: "https://www.pngmart.com/files/13/Apple-Airpods-PNG-Image.png",
                description:
                    "Os AirPods Pro 2 oferecem som de alta qualidade, cancelamento de ruído ativo e um ajuste confortável para qualquer atividade.",
                available: true,
            },
        ],
    },
    {
        id: "accessory",
        category: "accessory",
        title: "Acessórios",
        items: [
            {
                id: "9",
                name: "Apple TV 4K",
                price: 2400,
                image:
                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164",
                description:
                    "Com a Apple TV 4K, você pode assistir aos seus filmes e programas favoritos com qualidade de imagem 4K HDR e som imersivo.",
                available: true,
            },
            {
                id: "10",
                name: "HomePod Mini",
                price: 1800,
                image:
                    "https://www.apple.com/newsroom/images/2024/07/apple-introduces-homepod-mini-in-midnight/tile/Apple-HomePod-mini-midnight-lp.jpg.news_app_ed.jpg",
                description:
                    "O HomePod Mini é um alto-falante inteligente que oferece som de alta qualidade e integração perfeita com seus dispositivos Apple.",
                available: false,
            },
            {
                id: "11",
                name: "Magic Keyboard",
                price: 1200,
                image:
                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJQJ3LL_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=eTdBekdhdno4alNpbEo4U09QSTJ3VCtuRlRsMUl6VEJ5bjlrVFgzZmNSTzVPaTQ2UnBONWMvUmNJRzREV0drRDZYT25VMHBLb1ltT0o1SWFQVVgrT0E",
                description:
                    "O Magic Keyboard oferece uma digitação confortável e precisa, ideal para quem busca produtividade em qualquer lugar.",
                available: true,
            },
        ],
    },
];

const button = document.getElementById("filter-button");
const cardContainer = document.getElementById("products-section");
const availableCheckbox = document.getElementById("available-checkbox");

const renderProducts = () => {
    cardContainer.innerHTML = "";

    const category = document.getElementById("category-select").value;

    console.log()

    let filteredProducts = PRODUCTS.sort((a, b) =>
        a.category.localeCompare(b.category)
    );

    if (category !== null && category !== "") {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === category
        );
    }

    filteredProducts
        .forEach((products) => {
            let categoryTitle = document.createElement("h1");
            categoryTitle.textContent = products.title;

            cardContainer.appendChild(categoryTitle);

            products.items.forEach((product) => {
                if (availableCheckbox.checked && !product.available) return;

                let column = document.createElement("div");
                column.className = "col-4";

                let card = document.createElement("div");
                card.className = "card product-card";

                let img = document.createElement("img");
                img.src = product.image;
                img.className = "card-img-top product-image";
                img.alt = product.name;

                let cardBody = document.createElement("div");
                cardBody.className = "card-body";

                let title = document.createElement("h5");
                title.className = "card-title";
                title.textContent = product.name;

                let description = document.createElement("p");
                description.className = "card-text product-description";
                description.textContent = product.description;

                let price = document.createElement("p");
                price.className = "card-text product-price";
                price.textContent = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(product.price);

                cardBody.appendChild(title);
                cardBody.appendChild(description);
                cardBody.appendChild(price);

                if (!product.available) {
                    let availableTag = document.createElement("p");
                    availableTag.className = "sold-out-tag";
                    availableTag.textContent = "Esgotado";
                    cardBody.appendChild(availableTag);
                }

                card.appendChild(img);
                card.appendChild(cardBody);
                column.appendChild(card);

                cardContainer.appendChild(column);
            })


        });
};

renderProducts();

button.addEventListener("click", (event) => {
    event.preventDefault();

    renderProducts();
});
