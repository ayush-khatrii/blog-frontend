import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Frown } from "lucide-react"

const ErrorPage = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="font-bold text-7xl flex justify-center gap-1 items-center text-center">
        4<span className=" text-red-600"><Frown size={50}/></span>4</h1>
      <h1 className="font-medium text-base">
        The page you are looking for was not found
      </h1>
      <Button asChild className="my-5">
        <Link to="/">
          Go back to home
        </Link>
      </Button>
    </section>
  )
}

export default ErrorPage