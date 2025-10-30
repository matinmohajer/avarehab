import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface DonateButtonProps {
  onClick: () => void;
}

export function DonateButton({ onClick }: DonateButtonProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
      <Button
        onClick={onClick}
        size="lg"
        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-lg px-8 gap-2"
      >
        <Heart className="w-5 h-5" fill="currentColor" />
        <span>حمایت از آوا</span>
      </Button>
    </div>
  );
}
