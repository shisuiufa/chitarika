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
    shadow-[0_clamp(3px,0.5556vh,6px)_0_#58B96A]
    active:shadow-[0_clamp(1px,0.1852vh,2px)_0_#58B96A]
  `,

  secondary: `
  bg-white
  text-dark-brown
  shadow-[0_0.5556vh_0_#DDD3C1,0_0.9259vh_1.4815vh_rgba(0,0,0,0.1)]
  active:shadow-[0_0.1852vh_0_#DDD3C1,0_0.463vh_0.9259vh_rgba(0,0,0,0.08)]
`,

  accent: `
    bg-yellow
    text-gold-brown
    shadow-[0_clamp(3px,0.5556vh,6px)_0_#FD9D1A]
    active:shadow-[0_clamp(1px,0.1852vh,2px)_0_#FD9D1A]
  `,

  cream: `
    bg-cream
    text-dark-brown
    shadow-[0_clamp(3px,0.5556vh,6px)_0_#E5D9BD]
    active:shadow-[0_clamp(1px,0.1852vh,2px)_0_#E5D9BD]
  `,

  none: "",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: `
    px-vw-[16px]
    py-vh-[8px]
    text-vh-[14px]
  `,

  md: `
    px-vw-[36px]
    py-vh-[16px]
    text-vh-[16px]
  `,

  lg: `
    px-vw-[48px]
    py-vh-[20px]
    text-vh-[18px]
  `,

  xl: `
    px-vw-[60px]
    py-vh-[24px]
    text-vh-[24px]
  `,
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "[&>svg]:size-vh-[16px]",
  md: "[&>svg]:size-vh-[20px]",
  lg: "[&>svg]:size-vh-[24px]",
  xl: "[&>svg]:size-vh-[28px]",
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
        flex
        cursor-pointer
        items-center
        gap-vw-[8px]
        rounded-vh-[32px]
        font-extrabold
        leading-none
        transition
        active:translate-y-[clamp(2px,0.3704vh,4px)]
        focus:outline-none
        disabled:pointer-events-none
        disabled:opacity-50
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
