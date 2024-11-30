import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeSwitchButton = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      className="rounded-full"
      variant="outline"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      size="icon"
    >
      {
        theme === "dark" ?
          <MoonIcon size={20} />
          :
          <SunIcon size={20} />
      }
    </Button>
  )
}

export default ThemeSwitchButton