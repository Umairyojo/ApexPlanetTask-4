// Sample product data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 200, rating: 4.5, image: "./img/smartphone.jpg" },
    { id: 2, name: "Jeans", category: "fashion", price: 40, rating: 4.0, image: "./img/jeans.jpg" },
    { id: 3, name: "Laptop", category: "electronics", price: 800, rating: 4.8, image: "./img/laptop.jpg" },
    { id: 4, name: "Book: JavaScript", category: "books", price: 30, rating: 4.7, image: "./img/book.jpg" },
    { id: 5, name: "Headphones", category: "electronics", price: 50, rating: 4.2, image: "./img/head.jpg" },
    { id: 6, name: "T-Shirt", category: "fashion", price: 20, rating: 4.1, image: "./img/t-shirt.jpg" },
  ];
  
  // DOM elements
  const productList = document.getElementById("productList");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");
  const sortOptions = document.getElementById("sortOptions");
  
  // Function to display products
  function displayProducts(filteredProducts) {
    productList.innerHTML = ""; // Clear existing products
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p class="price">$${product.price}</p>
        <p>Rating: ${product.rating} ⭐</p>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Function to filter products
  function filterProducts() {
    let filteredProducts = products;
  
    // Filter by category
    const category = categoryFilter.value;
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
  
    // Filter by price
    const price = priceFilter.value;
    if (price === "low") {
      filteredProducts = filteredProducts.filter((product) => product.price < 50);
    } else if (price === "medium") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (price === "high") {
      filteredProducts = filteredProducts.filter((product) => product.price > 100);
    }
  
    // Sort products
    const sort = sortOptions.value;
    if (sort === "priceLow") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "ratingHigh") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
  
    displayProducts(filteredProducts);
  }
  
  // Event listeners for filters and sorting
  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
  sortOptions.addEventListener("change", filterProducts);
  
  // Initial display
  displayProducts(products);
  