import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "cream" | "none";
type ButtonSize = "sm" | "md" | "lg" | "xl";
type IconPosition = "left" | "right";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-[#7EDC8B]
    text-[#245C32]
    shadow-[0_4px_0_#58B96A]
    sm:shadow-[0_6px_0_#58B96A]
    active:shadow-[0_1px_0_#58B96A]
    sm:active:shadow-[0_2px_0_#58B96A]
  `,

  secondary: `
    bg-white
    text-dark-brown
    shadow-[0_4px_0_#DDD3C1,0_7px_12px_rgba(0,0,0,0.08)]
    sm:shadow-[0_6px_0_#DDD3C1,0_10px_16px_rgba(0,0,0,0.1)]
    active:shadow-[0_1px_0_#DDD3C1,0_3px_7px_rgba(0,0,0,0.06)]
    sm:active:shadow-[0_2px_0_#DDD3C1,0_5px_10px_rgba(0,0,0,0.08)]
  `,

  accent: `
    bg-yellow
    text-gold-brown
    shadow-[0_4px_0_#FD9D1A]
    sm:shadow-[0_6px_0_#FD9D1A]
    active:shadow-[0_1px_0_#FD9D1A]
    sm:active:shadow-[0_2px_0_#FD9D1A]
  `,

  cream: `
    bg-cream
    text-dark-brown
    shadow-[0_4px_0_#E5D9BD]
    sm:shadow-[0_6px_0_#E5D9BD]
    active:shadow-[0_1px_0_#E5D9BD]
    sm:active:shadow-[0_2px_0_#E5D9BD]
  `,

  none: "",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-md sm:py-3 md:px-9 md:py-4 md:text-base",
  lg: "px-6 py-3 text-base sm:py-4 md:px-12 md:py-5 md:text-lg",
  xl: "px-15 py-6 text-2xl",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "[&>svg]:size-4",
  md: "[&>svg]:size-5",
  lg: "[&>svg]:size-6",
  xl: "[&>svg]:size-7",
};

export default function Button({
  variant = "primary",
  size = "lg",
  icon,
  iconPosition = "right",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        flex items-center justify-center gap-2
        rounded-xl sm:rounded-4xl
        font-extrabold leading-none
        transition
        active:translate-y-1
        focus:outline-none
        disabled:pointer-events-none
        disabled:opacity-50
        cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${iconSizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {iconPosition === "left" && icon}

      {children}

      {iconPosition === "right" && icon}
    </button>
  );
}
