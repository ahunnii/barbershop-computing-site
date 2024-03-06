export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-7 scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
