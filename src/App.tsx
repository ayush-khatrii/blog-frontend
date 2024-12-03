import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/Errorpage';
import { Loader2 } from 'lucide-react';

// Dynamic Imports
const Homepage = lazy(() => import('./components/homepage'));
const SignUp = lazy(() => import('./components/sign-up'));
const SignIn = lazy(() => import('./components/sign-in'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const CreateBlog = lazy(() => import('./components/Createblog'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const EditBlog = lazy(() => import('./components/EditBlog'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className='flex justify-center items-center h-screen animate-spin'>
            <Loader2 />
          </div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/blog/:id/edit" element={<EditBlog />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
