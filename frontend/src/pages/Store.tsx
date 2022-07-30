import productData from "../data/products.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

type Product = {
  name: string;
  price: number;
};

export function Store() {
  const products: Product[] = productData;
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3}>
        {products.map((product) => {
          return (
            <Col>
              <StoreItem {...product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
