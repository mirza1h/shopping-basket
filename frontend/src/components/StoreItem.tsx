import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/currencyFormatter";

type StoreItemProps = {
  name: string;
  price: number;
};

export function StoreItem({ name, price }: StoreItemProps) {
  const quantity: number = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src="vite.svg"
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add to Cart</Button>
          ) : (
            <Button className="w-100 bg-danger">Remove</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
