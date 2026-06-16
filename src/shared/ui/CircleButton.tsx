import type { ButtonHTMLAttributes, ReactNode } from "react";

type CircleButtonProps = {
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CircleButton({
  className = "",
  children,
  disabled,
  ...props
}: CircleButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={`
        group
        relative
        size-16
        rounded-full
        focus:outline-none
        transition
        cursor-pointer
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      <span
        className={`
          absolute
          inset-0
          translate-y-1
          rounded-full
          bg-orange
          group-disabled:bg-[#B8842E]
        `}
      />

      <span
        className={`
          relative
          z-10
          flex size-full items-center justify-center
          rounded-full
          bg-yellow
          p-3
          text-4xl
          font-extrabold
          leading-none
          text-cream
          transition
          group-active:translate-y-1
          group-disabled:translate-y-0
          group-disabled:bg-[#D9AE4B]
          group-disabled:text-[#F6E6C5]
        `}
      >
        {children}
      </span>
    </button>
  );
}
