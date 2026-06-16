import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const colors = [
  '#FF4D6D',
  '#FFBE0B',
  '#8338EC',
  '#3A86FF',
  '#06D6A0',
  '#FF6B35',
  '#F72585',
];

export function useResultConfetti() {
  useEffect(() => {
    const shoot = () => {
      confetti({
        particleCount: 8,
        spread: 120,
        startVelocity: 20,
        angle: 90,
        gravity: 1.2,
        decay: 0.97,
        scalar: 1.2,
        ticks: 600,
        drift: (Math.random() - 0.5) * 1.5,
        origin: { x: Math.random(), y: -0.05 },
        colors,
      });
    };

    shoot()

    const intervalId = window.setInterval(shoot, 200);

    return () => {
      window.clearInterval(intervalId);
      confetti.reset();
    };
  }, []);
}