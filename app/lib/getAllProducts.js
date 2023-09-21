import { baseUrl } from "../page";

export default async function getAllProducts() {
  const res = await fetch(`${baseUrl}/api/product/products`, {
    next: { revalidate: 2 },
  });
  if (!res.ok) throw new Error("faild to fetch data");
  return res.json();
}
