const LakeScene = () => {
  return (
    <section className="relative h-64 lg:h-96 bg-gradient-to-b from-verdana-forest to-verdana-dark overflow-hidden">
      <svg
        viewBox="0 0 1440 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(150 40% 25%)" />
            <stop offset="100%" stopColor="hsl(150 45% 18%)" />
          </linearGradient>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 30% 25%)" />
            <stop offset="100%" stopColor="hsl(200 35% 18%)" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="1440" height="400" fill="url(#skyGradient)" />

        {/* Distant mountains/hills */}
        <path
          d="M0,180 Q200,120 400,160 Q600,100 800,140 Q1000,80 1200,120 Q1350,90 1440,110 L1440,250 L0,250 Z"
          fill="hsl(150 35% 22%)"
        />

        {/* Trees on hills - left side */}
        <g fill="hsl(150 45% 18%)">
          <ellipse cx="80" cy="170" rx="40" ry="60" />
          <ellipse cx="150" cy="165" rx="35" ry="55" />
          <ellipse cx="220" cy="175" rx="45" ry="65" />
          <ellipse cx="300" cy="160" rx="40" ry="60" />
          <ellipse cx="380" cy="170" rx="38" ry="58" />
        </g>

        {/* Trees on hills - center */}
        <g fill="hsl(150 40% 20%)">
          <ellipse cx="500" cy="150" rx="50" ry="70" />
          <ellipse cx="580" cy="145" rx="45" ry="65" />
          <ellipse cx="660" cy="155" rx="55" ry="75" />
          <ellipse cx="750" cy="140" rx="48" ry="68" />
          <ellipse cx="840" cy="150" rx="42" ry="62" />
        </g>

        {/* Trees on hills - right side */}
        <g fill="hsl(150 45% 18%)">
          <ellipse cx="950" cy="145" rx="45" ry="65" />
          <ellipse cx="1040" cy="155" rx="50" ry="70" />
          <ellipse cx="1130" cy="140" rx="40" ry="60" />
          <ellipse cx="1220" cy="150" rx="48" ry="68" />
          <ellipse cx="1310" cy="145" rx="42" ry="62" />
          <ellipse cx="1400" cy="155" rx="50" ry="70" />
        </g>

        {/* Water/Lake */}
        <rect y="250" width="1440" height="150" fill="url(#waterGradient)" />

        {/* Water reflection lines */}
        <g stroke="hsl(200 40% 35%)" strokeWidth="1" opacity="0.3">
          <line x1="0" y1="280" x2="1440" y2="280" />
          <line x1="0" y1="310" x2="1440" y2="310" />
          <line x1="0" y1="340" x2="1440" y2="340" />
          <line x1="0" y1="370" x2="1440" y2="370" />
        </g>

        {/* Foreground trees - left */}
        <g fill="hsl(150 50% 12%)">
          <ellipse cx="-20" cy="200" rx="60" ry="90" />
          <ellipse cx="60" cy="210" rx="50" ry="80" />
          <ellipse cx="140" cy="195" rx="55" ry="85" />
        </g>

        {/* Foreground trees - right */}
        <g fill="hsl(150 50% 12%)">
          <ellipse cx="1300" cy="195" rx="55" ry="85" />
          <ellipse cx="1380" cy="210" rx="50" ry="80" />
          <ellipse cx="1460" cy="200" rx="60" ry="90" />
        </g>
      </svg>
    </section>
  );
};

export default LakeScene;
