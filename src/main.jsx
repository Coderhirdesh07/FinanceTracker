import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './NavBar/NavBar.jsx';
import App from './App.jsx';
import TransactionCard from './components/TrasactionCard.jsx';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import TrasactionFrom from './components/TrasactionForm.jsx';
import Layout from './Layout.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import History from './Pages/History.jsx';
import Logout from './Pages/Logout.jsx';
import Login from '../src/components/Forms/Login.jsx';
import SignUp from '../src/components/Forms/SignUp.jsx';
import Home from '../src/components/Header/Home.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/logout" element={<Logout />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
