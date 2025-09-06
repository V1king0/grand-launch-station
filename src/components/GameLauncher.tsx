import { 
  Gamepad2, 
  Youtube, 
  Globe, 
  Play, 
  MonitorPlay,
  Joystick 
} from "lucide-react";
import { LauncherTile } from "./LauncherTile";
import { useToast } from "@/hooks/use-toast";

const apps = [
  {
    title: "SteamLink",
    description: "Stream games from your PC",
    icon: MonitorPlay,
    glowColor: "secondary" as const,
    action: () => window.open("steam://open/steamlink", "_self")
  },
  {
    title: "Xbox",
    description: "Xbox Game Pass & Cloud Gaming", 
    icon: Gamepad2,
    glowColor: "accent" as const,
    action: () => window.open("https://www.xbox.com/play", "_blank")
  },
  {
    title: "Retro Games",
    description: "Classic arcade & console games",
    icon: Joystick,
    glowColor: "primary" as const,
    action: () => window.open("https://www.retrogames.cc/", "_blank")
  },
  {
    title: "YouTube",
    description: "Videos, music & live streams",
    icon: Youtube,
    glowColor: "secondary" as const,
    action: () => window.open("https://youtube.com", "_blank")
  },
  {
    title: "Browser",
    description: "Web browsing & internet",
    icon: Globe,
    glowColor: "accent" as const,
    action: () => window.open("about:blank", "_blank")
  },
  {
    title: "Media",
    description: "Local media & streaming",
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
    <div className="min-h-screen stars-bg">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold gradient-hero mb-6 animate-gradient">
            GAME HUB
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Your gateway to gaming and entertainment
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
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
        <div className="text-center mt-16 text-muted-foreground">
          <p>Click any tile to launch your favorite app</p>
        </div>
      </div>
    </div>
  );
};