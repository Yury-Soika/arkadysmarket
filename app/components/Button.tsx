import type { ReactNode } from "react";

export function Button({ children, href, variant = "primary", external = false, className = "" }: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "outline-light" | "dark";
  external?: boolean;
  className?: string;
}) {
  return <a href={href} className={`btn btn-${variant} ${className}`} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}</a>;
}
