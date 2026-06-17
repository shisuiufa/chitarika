import type { ButtonHTMLAttributes } from "react";

type CircleButtonSize = "sm" | "md" | "lg" | "xl";
type CircleButtonVariant = "primary" | "secondary";

type CircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CircleButtonVariant;
  size?: CircleButtonSize;
};

const sizeClasses: Record<CircleButtonSize, string> = {
  sm: "size-10",
  md: "size-12",
  lg: "size-8 md:size-12 lg:size-14",
  xl: "size-12 sm:size-16",
};

const contentSizeClasses: Record<CircleButtonSize, string> = {
  sm: "p-2 text-lg",
  md: "p-2.5 text-xl",
  lg: "p-1 text-xl md:p-2 md:text-2xl lg:text-3xl",
  xl: "p-2 text-xl md:p-4 md:text-3xl lg:text-4xl",
};

const variantClasses: Record<
  CircleButtonVariant,
  {
    bottom: string;
    content: string;
  }
> = {
  primary: {
    bottom: `
      bg-orange
      group-disabled:bg-[#B8842E]
    `,
    content: `
      bg-yellow
      text-cream
      group-disabled:bg-[#D9AE4B]
      group-disabled:text-[#F6E6C5]
    `,
  },

  secondary: {
    bottom: `
      bg-[#DDD3C1]
      group-disabled:bg-[#CFC6B7]
    `,
    content: `
      bg-white
      text-dark-brown
      group-disabled:bg-[#EEEAE3]
      group-disabled:text-[#A89F90]
    `,
  },
};

export default function CircleButton({
  variant = "primary",
  size = "lg",
  className = "",
  type = "button",
  children,
  ...props
}: CircleButtonProps) {
  const variantClass = variantClasses[variant];

  return (
    <button
      type={type}
      className={`
        group relative shrink-0 cursor-pointer rounded-full
        transition focus:outline-none
        disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`
          absolute inset-0 translate-y-1 rounded-full
          ${variantClass.bottom}
        `}
      />

      <span
        className={`
          relative z-10 flex size-full items-center justify-center rounded-full
          font-extrabold leading-none transition
          group-active:translate-y-1
          group-disabled:translate-y-0
          ${contentSizeClasses[size]}
          ${variantClass.content}
        `}
      >
        {children}
      </span>
    </button>
  );
}
