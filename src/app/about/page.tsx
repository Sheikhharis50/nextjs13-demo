import { getMetaData } from "@/routes/utils";

export const metadata = getMetaData("about");

export default function About() {
  return (
    <main className="text-center">
      <h1>Hello, About Page!</h1>
    </main>
  );
}
