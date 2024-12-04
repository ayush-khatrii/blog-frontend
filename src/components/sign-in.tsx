import AuthInput from "./AuthInput"
import Quote from "./Quote"

const SignIn = () => {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="flex justify-center items-center h-screen flex-col gap-3 px-10">
        <h1 className="absolute text-lg font-bold top-20">TechLogs</h1>
        <h2 className="md:text-3xl text-2xl mb-5 font-medium">Login to your account</h2>
        <AuthInput isSignIn={true} />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </section>
  )
}

export default SignIn