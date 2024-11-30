import AuthInput from "./AuthInput"
import Quote from "./Quote"

const SignIn = () => {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="flex justify-center items-center h-screen flex-col gap-3 px-10">
        <h1 className="absolute text-lg font-bold top-20">DevLogs</h1>
        <h2 className="text-3xl font-medium">Login to your account</h2>
        <AuthInput isSignIn={true} />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </section>
  )
}

export default SignIn