import { Button } from "./ui/button";

const Navbar = () => {
  const isLoggedIn = false;
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="font-bold">blogIt</h1>
      </div>
      <div>
        {isLoggedIn &&
          <div className="flex justify-center items-center gap-3">
            <Button variant="outline">
              Sign In
            </Button>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar