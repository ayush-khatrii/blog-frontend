import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);
  return (
    <header className="shadow-sm fixed w-full z-[200] px-5 py-2 mb-10 bg-background dark:shadow-neutral-900 shadow-zinc-200">
      <div className="container mx-auto  flex justify-between items-center">
        <Link to="/blogs" className="text-base font-bold">DevLogs</Link>
        <nav>
          <ul className="flex space-x-4">
            {
              !isLoggedIn ?
                <>
                  <li><Link to="/sign-in"><Button size="sm" variant="ghost">Sign In</Button></Link></li>
                  <li><Link to="/sign-up"><Button size="sm">Sign Up</Button></Link></li>
                </>
                :
                <Link to="/create-blog">
                  <Button size="sm" className="bg-green-700 hover:bg-green-800">Create Post</Button>
                </Link>
            }
            <ThemeSwitchButton />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar