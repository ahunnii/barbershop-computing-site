export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 pb-2 text-4xl font-light tracking-tight first:mt-0">
      {children}
    </h1>
  );
}
