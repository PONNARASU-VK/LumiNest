// SEARCH AND PRODUCTS
var search = document.getElementById("search");
var product = document.getElementById("product");
var container = product.querySelectorAll("div");


search.addEventListener('keyup', function() {
    var storeinput = search.value.toUpperCase(); // Move this line inside the event listener

    for (var i = 0; i < container.length; i++) {
        var storediv = container[i].querySelector("p").textContent.toUpperCase();
        if (storediv.indexOf(storeinput) < 0) {
            container[i].style.display = "none";
        } else {
            container[i].style.display = "block";
        }
    }
});


