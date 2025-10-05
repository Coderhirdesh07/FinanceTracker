import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './NavBar/NavBar.jsx';
import App from './App.jsx';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from '../src/components/Forms/Login.jsx';
import SignUp from '../src/components/Forms/SignUp.jsx';
import Home from '../src/components/Header/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
);
