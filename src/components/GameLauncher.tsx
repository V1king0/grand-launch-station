import { 
  Gamepad2, 
  Youtube, 
  Globe, 
  Play, 
  MonitorPlay,
  Joystick 
} from "lucide-react";
import { LauncherTile } from "./LauncherTile";
import { SmokeParticles } from "./SmokeParticles";
import { useToast } from "@/hooks/use-toast";

const apps = [
  {
    title: "SteamLink",
    description: "Stream your PC games in style",
    icon: MonitorPlay,
    glowColor: "accent" as const,
    action: () => window.open("steam://open/steamlink", "_self")
  },
  {
    title: "Xbox Cloud",
    description: "Cloud gaming & Game Pass", 
    icon: Gamepad2,
    glowColor: "secondary" as const,
    action: () => window.open("https://www.xbox.com/play", "_blank")
  },
  {
    title: "Retro Arcade",
    description: "Classic games & nostalgia",
    icon: Joystick,
    glowColor: "primary" as const,
    action: () => window.open("https://www.retrogames.cc/", "_blank")
  },
  {
    title: "YouTube",
    description: "Chill beats & entertainment",
    icon: Youtube,
    glowColor: "accent" as const,
    action: () => window.open("https://youtube.com", "_blank")
  },
  {
    title: "Browser",
    description: "Explore the web freely",
    icon: Globe,
    glowColor: "secondary" as const,
    action: () => window.open("about:blank", "_blank")
  },
  {
    title: "Media Hub",
    description: "Local content & streaming",
    icon: Play,
    glowColor: "primary" as const,
    action: () => window.open("vlc://", "_self")
  }
];

export const GameLauncher = () => {
  const { toast } = useToast();

  const handleAppLaunch = (app: typeof apps[0]) => {
    toast({
      title: `Launching ${app.title}`,
      description: app.description,
    });
    
    // Small delay for visual feedback
    setTimeout(() => {
      app.action();
    }, 500);
  };

  return (
    <div className="min-h-screen smoke-bg relative overflow-hidden">
      <SmokeParticles />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* 18+ Rating Badge */}
        <div className="fixed top-6 right-6 z-20">
          <div className="rating-badge px-4 py-2 rounded-full text-sm font-bold">
            18+ ADULTS ONLY
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="animate-puff-breathe mb-8">
            <h1 className="text-6xl md:text-8xl font-bold gradient-hero animate-gradient">
              PUFF-HUB
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your premium gaming & entertainment console
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            For adult use only • Must be 18+ to operate
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <LauncherTile
              key={app.title}
              title={app.title}
              description={app.description}
              icon={app.icon}
              glowColor={app.glowColor}
              onClick={() => handleAppLaunch(app)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 space-y-2">
          <p className="text-muted-foreground">Click any tile to launch your favorite app</p>
          <p className="text-xs text-muted-foreground/50">
            This device is intended for adults 18+ only. Use responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};