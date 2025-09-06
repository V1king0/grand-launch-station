import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Gamepad2 } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen smoke-bg flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold gradient-hero animate-gradient animate-puff-breathe">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Session Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Looks like you drifted off course. Let's get you back to the Puff-Hub!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.location.href = "/"} 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Hub
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Gamepad2 className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
