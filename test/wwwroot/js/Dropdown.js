var product1 = document.getElementById("product1");
var product2 = document.getElementById("product2");
var productselection = document.getElementById("productselection");

productselection.addEventListener("change", function () {
    if (productselection.value == 'fourhundred') {
        if (product1.style.display !== 'block') {
            product1.style.display = 'block';
            product2.style.display = 'none';
        }
    }
    if (productselection.value == 'fourhundredone') {
        if (product2.style.display !== 'block') {
            product1.style.display = 'block';
            product1.style.display = 'none';
        }
    }
});


