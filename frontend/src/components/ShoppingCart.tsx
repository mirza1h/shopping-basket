import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, productData } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton={true}>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </Stack>
        <div className="ms-auto fw-bold fs-5">
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = productData.find((item) => item.id === cartItem.id);
              return total + (item.price || 0);
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
