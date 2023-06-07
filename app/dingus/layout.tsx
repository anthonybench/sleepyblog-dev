export default function DingusLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <h1>I'm learning! Hooray! 🎉</h1>
      <nav></nav>
 
      {children}
    </section>
  );
}