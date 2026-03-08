import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-body flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-destructive fill-destructive" /> by Darlington Maloba
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
