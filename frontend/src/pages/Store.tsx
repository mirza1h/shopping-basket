import { Row, Col } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import { StoreItem } from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../types/ProductType";

export function Store() {
  const { productData } = useShoppingCart();
  return (
    <>
      <Navbar isAdmin={false} />
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3}>
        {productData.map((product: Product) => {
          return (
            <Col key={product.id} className="mt-1">
              <StoreItem {...product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
