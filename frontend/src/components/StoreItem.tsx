import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  url: string;
};

export function StoreItem({ id, name, price, url }: StoreItemProps) {
  const { addToCart, getItemAdded } = useShoppingCart();
  const isAdded = getItemAdded(id);
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
        <div className="mt-auto">
          <Button
            className="w-100"
            onClick={() => addToCart(id)}
            disabled={isAdded}
          >
            + Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
