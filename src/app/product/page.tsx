import { getMetaData } from "@/routes/utils";
import Product, { ProductProps } from "@/components/Products";

export const metadata = getMetaData("product");

export default function ProductListPage() {
  const products: ProductProps[] = [
    {
      name: "Product # 01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maiores odit voluptatum adipisci ex, deleniti vel, dolore voluptates modi asperiores praesentium ad impedit nobis officia suscipit sit in neque aliquid.",
    },
    {
      name: "Product # 02",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam fuga voluptate commodi voluptatibus optio quas. Et inventore dignissimos iusto dolor ea, perspiciatis possimus similique? Quam optio sapiente labore porro.",
    },
    {
      name: "Product # 03",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam fuga voluptate commodi voluptatibus optio quas. Et inventore dignissimos iusto dolor ea, perspiciatis possimus similique? Quam optio sapiente labore porro.",
    },
    {
      name: "Product # 04",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam fuga voluptate commodi voluptatibus optio quas. Et inventore dignissimos iusto dolor ea, perspiciatis possimus similique? Quam optio sapiente labore porro.",
    },
  ];

  return (
    <main className="text-center px-10 md:px-20 lg:px-24">
      <h1>Products</h1>
      <div className="flex flex-wrap items-center gap-2 py-2">
        {products.map((product, index) => (
          <Product key={`product-${index}`} {...product} />
        ))}
      </div>
    </main>
  );
}
