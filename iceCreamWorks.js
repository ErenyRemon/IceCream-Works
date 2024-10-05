
var xhr = new XMLHttpRequest();
xhr.open('GET', 'iceCreamWorks.json');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var result = JSON.parse(xhr.response);
        window.productData = result.data;
        displayProducts(window.productData);
    }
};

xhr.send();


function displayProducts(products) {
    var container = document.getElementById('items');
    container.innerHTML = "";
    for (var i = 0; i < products.length; i++) {
        var images = products[i].img;
        var types = products[i].type;
        var prices = products[i].price;

        var div = document.createElement('div');
        var img = document.createElement('img');
        var h2 = document.createElement('h2');
        var span = document.createElement('span');

        img.src = images;
        h2.innerText = types;
        span.innerText = "ٌRs. " + prices;

        div.style.display = "inline-block";
        div.style.margin = "10px";


        img.setAttribute('data-type', types);


        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(span);

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Cookies&Dreams") {

                window.location.href = "./Cookies&Dreams.html";
            }
        });
        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Chocolate & To Die For") {
                window.location.href = "./Chocolate & To Die For/Chocolate & To Die For.html";
            }
        });
        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Sea Salat Caramel Fudge") {
                window.location.href = "./Sea Salat Caramel Fudge/Sea Salat Caramel Fudge.html";
            }
        });
        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Madagascar's Finest Chocolate") {
                window.location.href = "./Madagascar's Finest Chocolate/Madagascar's Finest Chocolate.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Midnight Chocolate Brownie") {
                window.location.href = "./Midnight Chocolate Brownie/Midnight Chocolate Brownie.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Blegian Choco Fudge") {
                window.location.href = "./Blegian Choco Fudge/Blegian Choco Fudge.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Double Strawberry Chocolate Chip") {
                window.location.href = "./Double Strawberry Chocolate Chip/Double Strawberry Chocolate Chip.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "King Alphonso") {
                window.location.href = "./King Alphonso/King Alphonso.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Mister Chocolate Chip") {
                window.location.href = "./Mister Chocolate Chip/Mister Chocolate Chip.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "Crunch N Nut ButterScotch") {
                window.location.href = "./Crunch N Nut ButterScotch/Crunch N Nut ButterScotch.html";
            }
        });

        img.addEventListener('click', function () {

            if (this.getAttribute('data-type') === "That 70's Vanilla") {
                window.location.href = "./That 70's Vanilla/That 70's Vanilla.html";
            }
        });


        container.appendChild(div);
    }
}

function filterProducts() {

    var selectedPrice = document.getElementById('priceOptions').value;

    var filteredProducts = window.productData.filter(function (product) {
        return product.price <= selectedPrice;
    });

    displayProducts(filteredProducts);
}








