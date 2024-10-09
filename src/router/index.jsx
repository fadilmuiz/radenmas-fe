import Dashboard from '../pages/Dashboard';
import Login from '../pages/login/LoginPage';
import Register from '../pages/register/RegisterPage';
import Exp from '../pages/exp/Exp';
import ListUser from '../pages/list/List';
import { createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/my-exp/:id",
    element: <Exp />,
  },
  {
    path: "/list-user",
    element: <ListUser />
  }
]);

export default router;
