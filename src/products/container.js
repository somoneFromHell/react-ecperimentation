import React from "react";
import ProductCard from "./product_card";
import { Row ,Col} from "reactstrap";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 599.99,
    category: "Electronics",
    image: "https://i.imgur.com/9gOk2fs.jpeg",
    inStock: true,
    description: "The latest smartphone with advanced features.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Laptop",
    price: 1299.99,
    category: "Electronics",
    image: "https://i.imgur.com/Qe2iXtW.jpeg",
    inStock: false,
    description: "Powerful laptop for all your computing needs.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "T-shirt",
    price: 19.99,
    category: "Clothing",
    image: "https://i.imgur.com/xRSJQfP.jpeg",
    inStock: true,
    description: "Comfortable and stylish t-shirt for everyday wear.",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Headphones",
    price: 149.99,
    category: "Electronics",
    inStock: true,
    image: "https://i.imgur.com/Pj7mWbA.jpeg",
    description: "High-quality headphones for immersive audio experience.",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Jeans",
    price: 39.99,
    category: "Clothing",
    image: "https://i.imgur.com/1Edz3bJ.jpeg",
    inStock: true,
    description: "Classic jeans that offer both style and comfort.",
    rating: 4.3,
  },
];


export default function Container() {
  return (
    <div className="product-container">
      <h1>Products</h1>
      <Row className="product-list">
        {products.map((item) => (
          <Col key={item.id} xs="auto">
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

