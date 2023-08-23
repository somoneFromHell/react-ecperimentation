import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"; // Import your card components

export default function ProductCard(props) {
  const product = props.product;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "contain" }} alt="sample" src={product.image} />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <div className="mb-2 text-muted" tag="h6">
            <CardSubtitle>{product.category}</CardSubtitle>
            <CardSubtitle>{product.price}</CardSubtitle>
          </div>
          <CardText>{product.text}</CardText>
          <Button>+ Add to cart</Button>
        </CardBody>
      </Card>
    </div>
  );
}
