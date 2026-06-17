import bg1 from "@/assets/images/bgs/1.png";
import bg2 from "@/assets/images/bgs/2.png";
import bg3 from "@/assets/images/bgs/3.png";
import bg4 from "@/assets/images/bgs/4.png";
import bg5 from "@/assets/images/bgs/5.png";

const images = [bg1, bg2, bg3, bg4, bg5] as const;

const items = [
  { image: 0, top: 5, left: 8, size: 110, duration: 8, delay: -2 },
  { image: 1, top: 12, left: 38, size: 80, duration: 10, delay: -6 },
  { image: 2, top: 10, left: 75, size: 60, duration: 9, delay: -4 },
  { image: 3, top: 35, left: 15, size: 90, duration: 11, delay: -7 },
  { image: 4, top: 40, left: 55, size: 130, duration: 8, delay: -3 },
  { image: 0, top: 32, left: 90, size: 75, duration: 12, delay: -5 },
  { image: 1, top: 70, left: 5, size: 120, duration: 9, delay: -1 },
  { image: 2, top: 75, left: 35, size: 85, duration: 11, delay: -8 },
  { image: 3, top: 68, left: 65, size: 105, duration: 10, delay: -4 },
  { image: 4, top: 82, left: 88, size: 90, duration: 12, delay: -6 },
];

export default function FlyingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {items.map((item) => (
        <img
          key={`${item.image}-${item.top}-${item.left}`}
          src={images[item.image]}
          alt=""
          className="
            absolute h-auto -translate-x-1/2 -translate-y-1/2
            animate-float object-contain opacity-55
            will-change-transform
            motion-reduce:animate-none
            max-md:opacity-40
          "
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            width: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
