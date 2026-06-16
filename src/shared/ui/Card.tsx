import type { ReactNode } from "react";

type CardSize = "sm" | "md" | "lg";

type CardProps = {
  children?: ReactNode;
  size?: CardSize;
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

export default function Card({
  children,
  size = "lg",
  className = "",
  innerClassName = "",
}: CardProps) {
  const classes = sizeClasses[size];

  return (
    <div className={`bg-sand p-0 ${classes.outer} ${className}`}>
      <div
        className={`
          h-full
          bg-[#FFF3D6]
          border-sand
          border-b-0
          ${classes.inner}
          ${innerClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
}
