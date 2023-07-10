import { Metadata } from "next";
import { getMetaRoute } from "@/routes/utils";

export const metadata = (): Metadata => {
  const route = getMetaRoute("about");
  return {
    title: route?.title,
    description: route?.description,
  };
};

export default function About() {
  return <h1>Hello, About Page!</h1>;
}
