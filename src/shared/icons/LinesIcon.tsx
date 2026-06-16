export default function LinesIcon({ size = "w-7 h-7" }: { size?: string }) {
  return (
    <svg
      className={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      fill="none"
    >
      <path
        d="M0 24V20H24V24H0ZM0 14V10H36V14H0ZM0 4V0H36V4H0Z"
        fill="currentColor"
      />
    </svg>
  );
}
