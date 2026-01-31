import { cn } from "@/lib/utils";
import * as React from "react";
import { Label } from "./label";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

function Input({
  className,
  type,
  label,
  error,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <div className={cn("w-full flex flex-col gap-1", containerClassName)}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-11 w-full min-w-0 rounded-md border bg-transparent px-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          error &&
            "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50",
          className,
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-[12px]">{error}</p>}
    </div>
  );
}

export { Input };
