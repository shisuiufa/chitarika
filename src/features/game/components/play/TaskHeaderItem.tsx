type HeaderItemProps = {
  markerClassName: string;
  label: string;
  value: string;
};

export default function TaskHeaderItem({
  markerClassName,
  label,
  value,
}: HeaderItemProps) {
  return (
    <div className="shrink-0 h-full flex flex-col justify-start ">
      <div className="flex items-center gap-vw-[8px] mb-vh-[8px]">
        <span
          className={`size-vh-[8px] shrink-0 rounded-full ${markerClassName}`}
        />
        <p className="whitespace-nowrap font-nunito-sans text-vh-[14px] font-extrabold leading-none text-[#8A6A12]">
          {label}
        </p>
      </div>
      <p className="whitespace-nowrap font-comfortaa text-vh-[27px] font-bold leading-none text-brown">
        {value}
      </p>
    </div>
  );
}
