import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeSwitchButton from "./ThemeSwitchButton";

const Navbar = () => {
  // const isLoggedIn = false;
  return (
    <header className="shadow-sm fixed w-full z-[200] px-5 py-4 mb-10 bg-background dark:shadow-neutral-900 shadow-zinc-200">
      <div className="container mx-auto  flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">DevLogs</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/signin"><Button size="sm" variant="ghost">Sign In</Button></Link></li>
            <li><Link to="/signup"><Button size="sm">Sign Up</Button></Link></li>
            <ThemeSwitchButton />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar