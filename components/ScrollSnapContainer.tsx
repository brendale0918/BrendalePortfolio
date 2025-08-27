
export default function ScrollSnapContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {children}
    </div>
  );
}
