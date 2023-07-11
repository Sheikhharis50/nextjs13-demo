import { getMetaData } from "@/routes/utils";

export const metadata = getMetaData("dashboard");

export default function Dashboard() {
  return (
    <main className="text-center">
      <h1>Hello, Dashboard Page!</h1>
    </main>
  );
}
