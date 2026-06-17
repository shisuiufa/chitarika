import { useEffect, useState } from "react";

const texts = [
  { from: 0, text: "Загружаем игру..." },
  { from: 20, text: "Настраиваем пёрышки..." },
  { from: 40, text: "Раскладываем буквы..." },
  { from: 60, text: "Готовим задания..." },
  { from: 80, text: "Почти готово..." },
  { from: 100, text: "Готово!" },
] as const;

const FADE_DURATION = 150;

type LoadingTextProps = {
  value?: number;
  className?: string;
};

export default function LoadingText({
  value = 0,
  className = "",
}: LoadingTextProps) {
  const nextText =
    texts.findLast((text) => value >= text.from)?.text ?? texts[0].text;
  const [currentText, setCurrentText] = useState(nextText);
  const isVisible = nextText === currentText;

  useEffect(() => {
    if (nextText === currentText) return;

    const showTimeoutId = window.setTimeout(() => {
      setCurrentText(nextText);
    }, FADE_DURATION);

    return () => {
      window.clearTimeout(showTimeoutId);
    };
  }, [nextText, currentText]);

  return (
    <p
      className={`
        text-center text-base md:text-xl lg:text-2xl font-semibold text-brown
        transition-opacity duration-150 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${className}
      `}
    >
      {currentText}
    </p>
  );
}
