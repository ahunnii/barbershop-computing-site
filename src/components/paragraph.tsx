import { cn } from "~/lib/utils";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ children, className }: Props) {
  return (
    <p
      className={cn("text-lg leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}
