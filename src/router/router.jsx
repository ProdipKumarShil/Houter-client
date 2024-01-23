import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllHouse from "../pages/AllHouse/AllHouse";
import SingleHouse from "../pages/SingleHouse/SingleHouse";
import Dashboard from "../pages/Dashboard/Dashboard";
import DallHouse from "../components/Dashboard/DallHouse/DallHouse";
import DaddHouse from "../components/Dashboard/DaddHouse/DaddHouse";
import Dbooking from "../components/Dashboard/Dbooking/Dbooking";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>error</p>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'allHouse',
        element: <AllHouse />
      },
      {
        path: 'house/:id',
        element: <SingleHouse />
      },
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'allHouse',
        element: <DallHouse />
      },
      {
        path: 'addHouse',
        element: <DaddHouse />
      },
      {
        path: 'bookingHouse',
        element: <Dbooking />
      }
    ]
  }
])