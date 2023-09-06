import { getMetaData } from "@/routes/utils";
import Products from "@/components/Products";
import CreateProduct from "@/components/Products/CreateProduct";

export const metadata = getMetaData("dashboard");

export default function Dashboard() {
  return (
    <main className="text-center">
      <h1>Hello, Dashboard Page!</h1>
      <div className="flex my-10">
        <CreateProduct />
        <Products />
      </div>
    </main>
  );
}
