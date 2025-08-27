export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen snap-start flex items-center justify-center">
      {children}
    </section>
  );
}
