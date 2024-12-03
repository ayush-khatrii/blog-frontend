import { Button } from "@/components/ui/button";
import { ArrowRight, ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex items-center justify-center px-5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[300px] bg-gradient-to-r from-gray-800 via-background to-gray-800 blur-3xl"></div>
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
          Craft Your <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:to-zinc-900 from-black to-zinc-400">Story</span>
        </h1>

        <p className="text-lg md:text-2xl opacity-75 mb-10">
          Join our community of creators and readers. Build your blog and share it with the world.
        </p>

        <div className="flex justify-center gap-3">
          <Button
            onClick={() => navigate("/blogs")}
          >
            Explore
            <ScrollText />
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/sign-in")}
          >
            Get Started
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="absolute top-32 left-10 w-20 h-20 bg-gray-800 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-700 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gray-600 rounded-full opacity-40 animate-bounce"></div>
    </section>
  );
};

export default HomePage;
