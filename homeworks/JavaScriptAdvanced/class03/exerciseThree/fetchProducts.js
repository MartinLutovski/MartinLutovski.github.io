document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
  });
  
  // Function to fetch products
  function fetchProducts() {
    const url = "https://dummyjson.com/products?limit=10";
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        renderProducts(data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("productContainer").innerHTML =
          "<p class='text-danger'>Failed to load products. Please try again later.</p>";
      });
  }
  
  // Function to render products
  function renderProducts(products) {
    const productContainer = document.getElementById("productContainer");
  
    products.forEach((product) => {
      const cardHtml = createProductCard(product);
      productContainer.innerHTML += cardHtml;
    });
  }
  
  // Function to create a product card
  function createProductCard(product) {
    return `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
          </div>
        </div>
      </div>
    `;
  }
  