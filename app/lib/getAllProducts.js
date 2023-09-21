import { baseUrl } from "../page";

export default async function getAllProducts() {
  const res = await fetch(`${baseUrl}/api/product/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("faild to fetch data");
  return res.json();
}
