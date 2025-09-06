import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LauncherTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  glowColor?: "primary" | "secondary" | "accent";
}

export const LauncherTile = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick,
  glowColor = "primary" 
}: LauncherTileProps) => {
  const glowClass = {
    primary: "hover:shadow-glow-primary",
    secondary: "hover:shadow-glow-secondary", 
    accent: "hover:shadow-glow-accent"
  }[glowColor];

  return (
    <Card 
      className={`launcher-tile cursor-pointer p-8 transition-glow ${glowClass} group relative overflow-hidden`}
      onClick={onClick}
    >
      {/* Subtle smoke overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-smoke"></div>
      
      <div className="flex flex-col items-center text-center space-y-4 relative z-10">
        <div className="relative">
          <Icon 
            size={64} 
            className="text-primary group-hover:text-accent transition-colors duration-300 group-hover:animate-puff-breathe" 
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon 
              size={64} 
              className="text-accent animate-pulse-glow blur-sm" 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-accent transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};