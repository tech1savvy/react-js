import React from "react";
import ReactDOM from "react-dom";

// BookCard Component
const BookCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.title}</h3>
    <p>Author: {product.author}</p>
    <p>Price: ${product.price}</p>
  </div>
);

// ClothingCard Component
const ClothingCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>Size: {product.size}</p>
    <p>Price: ${product.price}</p>
  </div>
);

// ProductCatalog Component
const ProductCatalog = ({ products }) => {
  return (
    <div className="product-catalog">
      {products.map((product, index) => {
        // Conditional rendering based on the product type
        if (product.type === "book") {
          return <BookCard key={index} product={product} />;
        } else if (product.type === "clothing") {
          return <ClothingCard key={index} product={product} />;
        } else {
          // You can add more conditions here for other product types (e.g., Electronics, Furniture)
          return (
            <div key={index} className="product-card">
              Unknown Product Type
            </div>
          );
        }
      })}
    </div>
  );
};

// Sample Products Array
const products = [
  {
    type: "book",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10,
  },
  { type: "clothing", name: "T-shirt", size: "M", price: 25 },
  { type: "book", title: "1984", author: "George Orwell", price: 15 },
  { type: "clothing", name: "Jeans", size: "L", price: 40 },
];

// Main App Component
const App = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductCatalog products={products} />
    </div>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
