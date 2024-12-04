import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { useAuthStore } from "@/store/authstore";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import { ENV } from "@/config/conf";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Pencil, ScrollText } from "lucide-react";
import { USER } from "@/types";




const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const [userData, setUserData] = useState<USER>();
  const { apiUrl } = ENV;
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const resp = await fetch(`${apiUrl}/user/profile`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("auth-token") || ""
        }
      });
      const data = await resp.json();
      setUserData(data.userData);
      console.log('user data : ', data);

    } catch (error: any) {
      toast.error(error.message);
    }
  }
  const handleLogout = () => {
    logout();
    toast.success("Logged Out!")
    navigate("/sign-in");
  }

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <header className="border-b border-foreground/5 w-full z-[200] overflow-hidden px-5 py-3 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold md:pl-5">TechLogs</Link>
        <nav>
          <ul className="flex space-x-2 md:pr-5">
            {
              !isAuthenticated ?
                <>
                  <li><Link to="/sign-in"><Button size="sm" variant="default">Sign In</Button></Link></li>
                </>
                :
                <Link to="/create-blog">
                  <Button size="icon" className="bg-green-700 hover:bg-green-800 rounded-full">
                    <Pencil color="white" />
                  </Button>
                </Link>
            }
            <ThemeSwitchButton />
            {
              isAuthenticated &&
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarFallback className="capitalize">
                        {userData && userData.username && userData.username?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-3 mx-10 overflow-hidden ">
                    <DropdownMenuLabel>{userData?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to={`/dashboard`}>
                        <ScrollText />Your posts
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600 cursor-pointer hover:text-red-500">
                      <LogOut />
                      Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            }
          </ul>
        </nav>
      </div>
    </header >
  )
}

export default Navbar