import { useEffect, useRef } from "react";
import { Shield, Zap, FileCheck, Globe } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Audit-Grade Data",
    description: "Immutable blockchain records provide tamper-proof evidence for environmental audits and regulatory compliance.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Smart contracts enable real-time verification and automatic settlement of carbon credits and sustainability metrics.",
  },
  {
    icon: FileCheck,
    title: "Automated Compliance",
    description: "AI-powered monitoring automatically tracks and reports against international sustainability frameworks.",
  },
  {
    icon: Globe,
    title: "Global Capital Access",
    description: "Tokenized sustainability assets unlock new financing opportunities from global green investment funds.",
  },
];

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUnlocked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Create audio element - try common audio file formats
    const audioFiles = ['/forest-sound.mp3', '/forest-sound.wav', '/forest-sound.ogg'];
    let audioElement: HTMLAudioElement | null = null;

    // Try to load audio file
    for (const file of audioFiles) {
      try {
        audioElement = new Audio(file);
        audioElement.volume = 0; // Start at 0 volume
        audioElement.loop = true;
        audioElement.preload = 'auto';
        break;
      } catch (error) {
        console.log(`Failed to load ${file}:`, error);
      }
    }

    if (!audioElement) {
      console.warn('No audio file found. Please add forest-sound.mp3, forest-sound.wav, or forest-sound.ogg to the public folder.');
      return;
    }

    audioRef.current = audioElement;

    // Unlock audio on first user interaction (click, touch, scroll)
    const unlockAudio = async () => {
      if (audioUnlocked.current || !audioRef.current) return;
      
      try {
        // Try to play and immediately pause to unlock audio context
        await audioRef.current.play();
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioUnlocked.current = true;
      } catch (error) {
        console.log('Audio unlock failed:', error);
      }
    };

    // Add event listeners to unlock audio on user interaction
    const events = ['click', 'touchstart', 'scroll', 'keydown'];
    const eventHandlers: Array<{ event: string; handler: () => void }> = [];
    
    events.forEach(event => {
      const handler = unlockAudio;
      document.addEventListener(event, handler, { once: true, passive: true });
      eventHandlers.push({ event, handler });
    });

    // Volume fade function
    const fadeVolume = (targetVolume: number, duration: number = 1000) => {
      if (!audioRef.current) return;
      
      const startVolume = audioRef.current.volume;
      const volumeChange = targetVolume - startVolume;
      const startTime = Date.now();

      const fadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (audioRef.current) {
          audioRef.current.volume = startVolume + (volumeChange * progress);
          
          if (progress >= 1) {
            clearInterval(fadeInterval);
          }
        } else {
          clearInterval(fadeInterval);
        }
      }, 16); // ~60fps
    };

    // Intersection Observer to detect when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && audioRef.current && audioUnlocked.current) {
            // Fade in volume when entering section
            if (audioRef.current.paused) {
              audioRef.current.play().catch((error) => {
                console.log('Audio play failed:', error);
              });
            }
            fadeVolume(0.5, 1000); // Fade to 50% volume over 1 second
          } else if (!entry.isIntersecting && audioRef.current) {
            // Fade out volume when leaving section
            fadeVolume(0, 1000); // Fade to 0% volume over 1 second
            // Pause after fade completes
            setTimeout(() => {
              if (audioRef.current && audioRef.current.volume === 0) {
                audioRef.current.pause();
              }
            }, 1000);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    observer.observe(section);

    // Cleanup
    return () => {
      observer.disconnect();
      eventHandlers.forEach(({ event, handler }) => {
        document.removeEventListener(event, handler);
      });
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.volume = 0;
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-verdana-dark py-16 lg:py-24 relative flex items-center justify-center" style={{ minHeight: '1400px', top: '-32px' }}>
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" style={{ 
        backgroundImage: 'url(/bg-tree-leaf.webp)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'bottom center', 
        backgroundRepeat: 'no-repeat', 
        height: '100%',
        imageRendering: 'high-quality',
        WebkitImageRendering: 'high-quality',
        msImageRendering: 'high-quality'
      }}></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center">
        <div className="text-center mb-12 lg:mb-16 w-full">
          <span className="text-verdana-yellow text-sm font-medium uppercase tracking-wider block">
            The Solution
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-verdana-cream mt-4 mb-4">
            The Solution Architecture
          </h2>
          <p className="text-verdana-cream/70 text-lg max-w-2xl mx-auto">
            A unfied operating system for the entire asset lifecycle. From measurement to monetization.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" style={{ gap: '16px', columnGap: '16px', justifyItems: 'center' }}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-verdana-medium/40 rounded-2xl p-6 hover:border-verdana-yellow/40 transition-colors group"
              style={{ backgroundColor: '#DFF390', width: '450px' }}
            >
              <div className="w-14 h-14 bg-verdana-cream/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-verdana-yellow/20 transition-colors">
                <solution.icon className="w-7 h-7 transition-colors" style={{ color: '#305E51' }} />
              </div>
              <h3 className="font-semibold text-xl mb-3" style={{ color: '#305E51', fontSize: '24px' }}>
                {solution.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#305E51', fontSize: '16px' }}>
                {solution.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
