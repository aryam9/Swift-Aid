import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Dashboard",
    "First Aid",
    "Emergency Contacts",
    "Hospitals",
    "Medical History",
    "Personal Info"
  ];

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Swift-Aid</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Emergency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90 mt-2">
              Emergency
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
