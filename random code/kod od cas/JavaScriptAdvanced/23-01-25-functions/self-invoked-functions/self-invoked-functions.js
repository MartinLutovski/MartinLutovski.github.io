console.log("============ SELF INVOKED FUNCTIONS=============");

(function() {  // cela funkcija e vo "()"
    console.log("This will be executed immediatly");
    
})();  // uste edni "()" za da ja povikame


((num1, num2) => console.log(num1 + num2))(100, 300);


// 


(() => {
    const productUrl = "https://dummyjson.com/products/1";
    const productContainer = document.getElementById("product-container");
    fetch(productUrl)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
        productContainer.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>`;
      });
  })();

//   document.addEventListener("DOMContentLoaded", ()=>)


(function sayHello(name){
    console.log(`Hello ${name}`);
    
})("Jane Doe") // doesnt work

