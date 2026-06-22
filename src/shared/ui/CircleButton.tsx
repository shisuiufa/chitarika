import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type CircleButtonSize = "sm" | "md" | "lg" | "xl";
type CircleButtonVariant = "primary" | "secondary";

type CircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CircleButtonVariant;
  size?: CircleButtonSize;
};

type VariantLayerClasses = {
  bottom: string;
  content: string;
};

const BASE_BUTTON_CLASSES = `
  group relative shrink-0 cursor-pointer rounded-full 
  transition focus:outline-none disabled:cursor-not-allowed
`;

const BASE_BOTTOM_LAYER_CLASSES =
  "absolute inset-0 translate-y-vh-[4px] rounded-full";

const BASE_CONTENT_LAYER_CLASSES = `
  relative z-10 flex size-full items-center justify-center 
  rounded-full font-extrabold leading-none transition 
  group-active:translate-y-vh-[4px] group-disabled:translate-y-0
`;

const sizeClasses: Record<CircleButtonSize, string> = {
  sm: "size-vh-[40px]",
  md: "size-vh-[48px]",
  lg: "size-vh-[56px]",
  xl: "size-vh-[64px]",
};

const contentSizeClasses: Record<CircleButtonSize, string> = {
  sm: "p-vh-[8px] text-vh-[18px]",
  md: "p-vh-[10px] text-vh-[20px]",
  lg: "p-vh-[12px] text-vh-[30px]",
  xl: "p-vh-[16px] text-vh-[36px]",
};

const variantClasses: Record<CircleButtonVariant, VariantLayerClasses> = {
  primary: {
    bottom: "bg-orange group-disabled:bg-[#B8842E]",
    content:
      "bg-yellow text-cream group-disabled:bg-[#D9AE4B] group-disabled:text-[#F6E6C5]",
  },
  secondary: {
    bottom: "bg-[#DDD3C1] group-disabled:bg-[#CFC6B7]",
    content:
      "bg-white text-dark-brown group-disabled:bg-[#EEEAE3] group-disabled:text-[#A89F90]",
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
      className={cn(BASE_BUTTON_CLASSES, sizeClasses[size], className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(BASE_BOTTOM_LAYER_CLASSES, variantClass.bottom)}
      />

      <span
        className={cn(
          BASE_CONTENT_LAYER_CLASSES,
          contentSizeClasses[size],
          variantClass.content,
        )}
      >
        {children}
      </span>
    </button>
  );
}
