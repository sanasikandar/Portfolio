import { motion } from 'motion/react';

export function AnimatedBackground() {
  const shapes = [
    {
      id: 1,
      color: 'bg-gradient-to-br from-orange-300 to-orange-400',
      size: 'w-64 h-64',
      initialX: '10%',
      initialY: '15%',
      duration: 20,
    },
    {
      id: 2,
      color: 'bg-gradient-to-br from-green-300 to-green-400',
      size: 'w-80 h-80',
      initialX: '80%',
      initialY: '10%',
      duration: 25,
    },
    {
      id: 3,
      color: 'bg-gradient-to-br from-purple-300 to-purple-400',
      size: 'w-72 h-72',
      initialX: '70%',
      initialY: '70%',
      duration: 22,
    },
    {
      id: 4,
      color: 'bg-gradient-to-br from-pink-300 to-pink-400',
      size: 'w-56 h-56',
      initialX: '15%',
      initialY: '75%',
      duration: 18,
    },
    {
      id: 5,
      color: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
      size: 'w-48 h-48',
      initialX: '50%',
      initialY: '50%',
      duration: 23,
    },
    {
      id: 6,
      color: 'bg-gradient-to-br from-blue-300 to-blue-400',
      size: 'w-60 h-60',
      initialX: '40%',
      initialY: '80%',
      duration: 19,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} rounded-[3rem] opacity-20 blur-3xl`}
          style={{
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            x: [0, 100, -50, 50, 0],
            y: [0, -100, 50, -50, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
