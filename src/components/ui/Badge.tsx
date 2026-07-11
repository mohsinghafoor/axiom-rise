import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
      {children}
    </span>
  );
}
