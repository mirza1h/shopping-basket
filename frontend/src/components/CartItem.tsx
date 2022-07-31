import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/currencyFormatter";

type CartItemProps = {
  id: number;
};

export function CartItem({ id }: CartItemProps) {
  const { removeFromCart, productData } = useShoppingCart();
  const item = productData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.url}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>{item.name} </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
