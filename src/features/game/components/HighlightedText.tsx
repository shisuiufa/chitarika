export default function HighlightedText({ value }: { value: string }) {
  return value.split(/(\[[^\]]+])/g).map((part, index) => {
    const isHighlighted = part.startsWith("[") && part.endsWith("]");

    if (!isHighlighted) {
      return part;
    }

    return (
      <mark
        key={index}
        className="
          box-decoration-clone rounded-xl bg-yellow px-vh-[10px] py-vh-[5px]
          text-[#3B2A1A]
        "
      >
        {part.slice(1, -1)}
      </mark>
    );
  });
}
