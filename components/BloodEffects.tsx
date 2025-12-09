import React from 'react';

export const BloodFlowBackground: React.FC = () => {
  // Generate random drip paths
  const drips = Array.from({ length: 12 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    width: Math.random() * 2 + 1 + 'px',
    duration: Math.random() * 20 + 20 + 's',
    delay: Math.random() * -20 + 's',
    opacity: Math.random() * 0.15 + 0.05,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-overlay">
      {drips.map((drip, idx) => (
        <div
          key={idx}
          className="absolute top-0 h-[200%] bg-gradient-to-b from-transparent via-chechen-red to-transparent"
          style={{
            left: drip.left,
            width: drip.width,
            opacity: drip.opacity,
            animation: `flow ${drip.duration} linear infinite`,
            animationDelay: drip.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blood-dark/10 to-chechen-red/10 pointer-events-none" />
    </div>
  );
};

export const FooterBloodPool: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
       {/* Rising Fog/Mist above the pool */}
       <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-chechen-red/40 to-transparent mix-blend-color-dodge opacity-50" />

       {/* The Liquid Pool */}
       <div className="absolute bottom-[-20px] left-0 w-[200%] h-48 opacity-80 mix-blend-multiply">
          <svg className="w-full h-full animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path
               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.93,59.12,116.34,53.22,175.76,57,222.7,60,268.49,66.29,321.39,56.44Z"
               fill="#4a0404"
             />
          </svg>
       </div>
       <div className="absolute bottom-[-10px] left-[-100%] w-[200%] h-48 opacity-60 mix-blend-multiply">
          <svg className="w-full h-full animate-wave-medium" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path
               d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C268.49,66.29,222.7,60,175.76,57,116.34,53.22,57.93,59.12,0,95.8V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
               fill="#8a1c1c"
             />
          </svg>
       </div>
    </div>
  );
};
