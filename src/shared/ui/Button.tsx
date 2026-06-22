import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent" | "cream" | "none";
type ButtonSize = "sm" | "md" | "lg" | "xl";
type IconPosition = "left" | "right";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
};

const BASE_BUTTON_CLASSES = `
  flex cursor-pointer items-center justify-center 
  font-extrabold leading-none transition focus:outline-none 
  disabled:pointer-events-none disabled:opacity-50
`;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#7EDC8B] text-[#245C32] shadow-[0_clamp(3px,0.5556vh,6px)_0_#58B96A] active:shadow-[0_clamp(1px,0.1852vh,2px)_0_#58B96A] active:translate-y-[clamp(2px,0.3704vh,4px)]",
  secondary:
    "bg-white text-dark-brown shadow-[0_0.5556vh_0_#DDD3C1,0_0.9259vh_1.4815vh_rgba(0,0,0,0.1)] active:shadow-[0_0.1852vh_0_#DDD3C1,0_0.463vh_0.9259vh_rgba(0,0,0,0.08)] active:translate-y-[0.3704vh]",
  accent:
    "bg-yellow text-gold-brown shadow-[0_clamp(3px,0.5556vh,6px)_0_#FD9D1A] active:shadow-[0_clamp(1px,0.1852vh,2px)_0_#FD9D1A] active:translate-y-[clamp(2px,0.3704vh,4px)]",
  cream:
    "bg-cream text-dark-brown shadow-[0_clamp(3px,0.5556vh,6px)_0_#E5D9BD] active:shadow-[0_clamp(1px,0.1852vh,2px)_0_#E5D9BD] active:translate-y-[clamp(2px,0.3704vh,4px)]",
  none: "",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-vw-[16px] py-vh-[8px] text-vh-[14px] gap-vw-[6px] rounded-vh-[16px]",
  md: "px-vw-[36px] py-vh-[16px] text-vh-[16px] gap-vw-[8px] rounded-vh-[24px]",
  lg: "px-vw-[48px] py-vh-[20px] text-vh-[18px] gap-vw-[8px] rounded-vh-[32px]",
  xl: "px-vw-[60px] py-vh-[24px] text-vh-[24px] gap-vw-[12px] rounded-vh-[40px]",
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
      className={cn(
        BASE_BUTTON_CLASSES,
        variantClasses[variant],
        sizeClasses[size],
        iconSizeClasses[size],
        className,
      )}
      {...props}
    >
      {iconPosition === "left" && icon}

      {children}

      {iconPosition === "right" && icon}
    </button>
  );
}
