import productData from "../data/products.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
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
              <StoreItem key={product.id} {...product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
