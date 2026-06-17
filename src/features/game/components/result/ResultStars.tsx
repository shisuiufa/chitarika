import starFilled from "@/assets/images/stars/star-filled.png";

export default function ResultStars({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-end justify-center gap-2 lg:gap-4 ${className}`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`
                  ${index === 0 || index === 4 ? "translate-y-4 scale-90" : ""}
                  ${index === 1 || index === 3 ? "translate-y-1" : ""}
                `}
        >
          <img
            className="
                    result-star-pop size-8 md:size-10 select-none
                    drop-shadow-[0_6px_0_#FD9D1A] lg:size-14
                  "
            style={{ animationDelay: `${index * 120}ms` }}
            src={starFilled}
            alt=""
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
