import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from "./components/sign-up"
import SignIn from "./components/sign-in"
import Layout from './components/Layout'
import Blog from './components/Blog'
import Homepage from './components/homepage'
import BlogPost from './components/BlogPost'
import ErrorPage from './components/Errorpage'
import Createblog from './components/Createblog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/create-blog" element={<Createblog />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App