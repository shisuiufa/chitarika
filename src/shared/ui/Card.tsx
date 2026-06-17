import type { ReactNode } from "react";

type CardVariant = "default" | "yellow" | "orange" | "green";

type CardSize = "sm" | "md" | "lg";

type CardProps = {
  children?: ReactNode;
  size?: CardSize;
  variant?: CardVariant;
  className?: string;
  innerClassName?: string;
};

const sizeClasses: Record<
  CardSize,
  {
    outer: string;
    inner: string;
  }
> = {
  sm: {
    outer: "rounded-3xl pb-1",
    inner: "rounded-3xl border-1",
  },
  md: {
    outer: "rounded-3xl pb-1.5",
    inner: "rounded-3xl border-2",
  },
  lg: {
    outer: "rounded-4xl pb-2",
    inner: "rounded-4xl border-2",
  },
};

const variantClasses: Record<
  CardVariant,
  {
    outer: string;
    inner: string;
  }
> = {
  default: {
    outer: "bg-sand",
    inner: `
      bg-[#FFF3D6]
      border-sand
      border-b-0
    `,
  },

  yellow: {
    outer: "bg-transparent",
    inner: `
      bg-[#FFF8DD]
      text-[#8A6800]
      border-[#F3D35C]
      shadow-[0_6px_0_#E6C554]
    `,
  },

  orange: {
    outer: "bg-transparent",
    inner: `
      bg-[#FFF0DC]
      text-[#9A5700]
      border-[#F4B468]
      shadow-[0_6px_0_#EAA65A]
    `,
  },

  green: {
    outer: "bg-transparent",
    inner: `
      bg-[#EAFBED]
      text-[#008A3D]
      border-[#7FDE98]
      shadow-[0_6px_0_#6ED489]
    `,
  },
};

export default function Card({
  children,
  size = "lg",
  variant = "default",
  className = "",
  innerClassName = "",
}: CardProps) {
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];

  return (
    <div
      className={`
        p-0
        ${sizeClass.outer}
        ${variantClass.outer}
        ${className}
      `}
    >
      <div
        className={`
          h-full
          ${sizeClass.inner}
          ${variantClass.inner}
          ${innerClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
}
