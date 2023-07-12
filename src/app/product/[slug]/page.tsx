import { getMetaData } from "@/routes/utils";

export const metadata = getMetaData("dashboard");

export default function ProductDetailPage() {
  return (
    <main className="text-center">
      <h1>Hello, Product Detail Page!</h1>
    </main>
  );
}
