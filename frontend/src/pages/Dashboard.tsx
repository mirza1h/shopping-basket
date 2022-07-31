import { getRemovedProducts } from "../adapters/api";

export function Dashboard() {
  getRemovedProducts().then((data) => {
    console.log(data);
  });
  return <h1>Dashboard</h1>;
}
