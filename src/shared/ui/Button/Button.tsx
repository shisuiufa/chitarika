import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonSize = "sm" | "md" | "lg" | "xl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-[#5FEB78]
    text-[#006725]
    shadow-[0_8px_0_#004D1C,0_12px_20px_rgba(0,0,0,0.18)]
    active:shadow-[0_4px_0_#004D1C,0_8px_14px_rgba(0,0,0,0.16)]
  `,
  secondary: `
    bg-white
    text-dark-brown
    shadow-[0_6px_0_#DDD3C1,0_10px_18px_rgba(0,0,0,0.12)]
    active:shadow-[0_3px_0_#DDD3C1,0_6px_12px_rgba(0,0,0,0.1)]
  `,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-sm",
  md: "px-9 py-4 text-base",
  lg: "px-12 py-5 text-lg",
  xl: "px-15 py-6 text-2xl"
};

export default function Button({
  variant = "primary",
  size = "lg",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        flex items-center justify-center gap-2
        rounded-4xl
        font-extrabold
        leading-none
        transition
        active:translate-y-1
        focus:outline-none
        disabled:pointer-events-none
        disabled:opacity-50
        cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    />
  );
}
