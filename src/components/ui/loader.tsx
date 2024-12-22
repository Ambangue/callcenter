import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Loader({ className, ...props }: LoaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full",
        className
      )}
      {...props}
    >
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}