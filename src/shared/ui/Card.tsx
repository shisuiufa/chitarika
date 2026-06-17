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

type CardClasses = {
  outer: string;
  inner: string;
};

const sizeClasses: Record<CardSize, CardClasses> = {
  sm: {
    outer: `
      rounded-vh-[24px]
      pb-vh-[4px]
    `,
    inner: `
      rounded-vh-[24px]
      border-vh-[1px]
    `,
  },

  md: {
    outer: `
      rounded-vh-[24px]
      pb-vh-[6px]
    `,
    inner: `
      rounded-vh-[24px]
      border-vh-[2px]
    `,
  },

  lg: {
    outer: `
      rounded-vh-[32px]
      pb-vh-[8px]
    `,
    inner: `
      rounded-vh-[32px]
      border-vh-[2px]
    `,
  },
};

const variantClasses: Record<CardVariant, CardClasses> = {
  default: {
    outer: "bg-sand",
    inner: `
      border-sand
      border-b-0
      bg-[#FFF3D6]
    `,
  },

  yellow: {
    outer: "bg-transparent",
    inner: `
      border-[#F3D35C]
      bg-[#FFF8DD]
      text-[#8A6800]
      shadow-[0_0.5556vh_0_#E6C554]
    `,
  },

  orange: {
    outer: "bg-transparent",
    inner: `
      border-[#F4B468]
      bg-[#FFF0DC]
      text-[#9A5700]
      shadow-[0_0.5556vh_0_#EAA65A]
    `,
  },

  green: {
    outer: "bg-transparent",
    inner: `
      border-[#7FDE98]
      bg-[#EAFBED]
      text-[#008A3D]
      shadow-[0_0.5556vh_0_#6ED489]
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