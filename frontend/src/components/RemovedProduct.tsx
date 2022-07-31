import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/currencyFormatter";

type RemovedProductType = {
  name: string;
  price: number;
  url: string;
  reason: string;
  timeAddedToCart: Date;
  timeRemovedFromCart: Date;
};

export function RemovedProduct({
  name,
  price,
  url,
  reason,
  timeAddedToCart,
  timeRemovedFromCart,
}: RemovedProductType) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={url}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Added to cart: {new Date(timeAddedToCart).toLocaleString()}
          </li>
          <li className="list-group-item">
            Removed from cart: {new Date(timeRemovedFromCart).toLocaleString()}
          </li>
          <li className="list-group-item">Reason: {reason}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}
