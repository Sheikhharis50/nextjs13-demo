export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* sidebar */}
      {children}
    </section>
  );
}
