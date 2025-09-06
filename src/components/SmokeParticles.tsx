import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export const SmokeParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 6 + Math.random() * 4,
          size: 2 + Math.random() * 6,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="smoke-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="smoke-particle-static"
          style={{
            left: `${particle.left}%`,
            top: `${20 + (particle.id * 8)}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};