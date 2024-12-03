import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ChangeEvent, useState } from "react"
import { SignUpInputs } from "hono-blog-common"
import { ENV } from "@/config/conf";
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useAuthStore } from "@/store/authstore"

const AuthInput = ({ isSignIn }: { isSignIn: boolean }) => {
  const [authInputs, setAuthInputs] = useState<SignUpInputs>({
    username: "",
    password: "",
    name: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { login } = useAuthStore();
  const handleShowToast = (text: string) => {
    toast({
      title: `${text} successful`,
    })
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${ENV.apiUrl}/user/${isSignIn ? "signin" : "signup"}`, {
        method: "POST",
        body: JSON.stringify(authInputs),
      });
      if (resp.ok) {
        const result = await resp.json();
        const jwtToken = result.token;
        localStorage.setItem("auth-token", jwtToken);
        login();
        navigate("/blogs");
        isSignIn ? handleShowToast("Sign-In") : handleShowToast("Sign-Up")
      }
    } catch (error) {
      alert("Error while sign-up")
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }} className="w-full max-w-lg mx-auto">
      {/* <Button onClick={() => handleShowToast("sample")}>Sample</Button> */}
      <div className="space-y-4 w-full">
        <div className="w-full">
          <Inputs name="username" type="email" label="Username" placeholder="example@.com" onChange={handleChange} />
        </div>

        {!isSignIn && (
          <div className="w-full">
            <Inputs name="name" label="Name" placeholder="Enter your name" onChange={handleChange} />
          </div>
        )}

        <div className="w-full">
          <Inputs type="password" name="password" label="Password" onChange={handleChange} />
        </div>

        <Button
          type="submit"
          className="w-full mt-4">
          {loading && <Loader2 className="animate-spin" />}
          {
            isSignIn ? 'Sign In' : 'Create Account'
          }
        </Button>
      </div>

      <div className="mt-4 text-center">
        {
          isSignIn ?
            <p>
              New to DevLogs? {""}
              <Link to={`/sign-up`} className="opacity-50 underline">
                Create Account
              </Link>
            </p>
            :
            <p>
              Already have an account? {""}
              <Link to={`/sign-in`} className="opacity-50 underline">
                Sign In
              </Link>
            </p>
        }
      </div>
    </form>
  )
}


interface INPUTS_TYPE {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({ label, name, type, placeholder, onChange }: INPUTS_TYPE) => {
  return (

    <div className="w-full">
      <Label htmlFor="password" className="block my-3">{label}</Label>
      <Input
        name={name}
        type={type || "text"}
        required
        onChange={onChange}
        id="password"
        placeholder={placeholder}
        className="w-full"
      />
    </div>
  )
}

export default AuthInput;