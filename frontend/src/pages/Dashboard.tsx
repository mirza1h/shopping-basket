import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getRemovedProducts } from "../adapters/api";
import { Navbar } from "../components/Navbar";
import { RemovedProduct } from "../components/RemovedProduct";
import { Product } from "../types/ProductType";

export function Dashboard() {
  const [removedProducts, setRemovedProducts] = useState<Product[]>([]);
  useEffect(() => {
    getRemovedProducts().then((data) => {
      setRemovedProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar isAdmin={true} />
      <h1>Dashboard</h1>
      <h4>Items removed from shopping basket:</h4>
      <Row md={2} xs={1} lg={3}>
        {removedProducts.map((product: Product) => {
          return (
            <Col key={product.id} className="mt-1">
              <RemovedProduct {...product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
