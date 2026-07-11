import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl dark:shadow-primary-900/30",
  secondary: "bg-white hover:bg-primary-50 text-primary-600 dark:bg-stone-900 dark:hover:bg-stone-800 dark:text-primary-400 shadow-lg border border-transparent dark:border-stone-700",
  outline: "border-2 border-white text-white hover:bg-white hover:text-primary-600 backdrop-blur-sm",
};

export default function Button({ href, children, variant = "primary", withArrow = false, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </Link>
  );
}
