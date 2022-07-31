import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Button, Modal } from "react-bootstrap";
import { formatCurrency } from "../utilities/currencyFormatter";
import { useState } from "react";

type CartItemProps = {
  id: number;
};

export function CartItem({ id }: CartItemProps) {
  const { removeFromCart, productData } = useShoppingCart();
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    removeFromCart(id, reason + otherReason);
  };
  const onSelectReason = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  const onOtherReason = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherReason(event.target.value);
  };

  const item = productData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
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
        <Button variant="outline-danger" size="sm" onClick={() => handleShow()}>
          &times;
        </Button>
      </Stack>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Care to tell us why?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-check">
              <label>
                <input
                  name="reason"
                  className="form-check-input"
                  type="radio"
                  value="Better price on other websites"
                  onChange={onSelectReason}
                />
                Better price on other websites
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  name="reason"
                  className="form-check-input"
                  type="radio"
                  value="Unexpected extra costs"
                  onChange={onSelectReason}
                />
                Unexpected extra costs
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  name="reason"
                  className="form-check-input"
                  type="radio"
                  value="Long shipping"
                  onChange={onSelectReason}
                />
                Long shipping
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  name="reason"
                  className="form-check-input"
                  type="radio"
                  value="Other: "
                  onChange={onSelectReason}
                />
                Other:
              </label>
            </div>
            {reason === "Other: " ? (
              <div className="form-check">
                <textarea
                  className="form-control"
                  maxLength={255}
                  onChange={onOtherReason}
                ></textarea>
              </div>
            ) : null}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
