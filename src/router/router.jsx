import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllHouse from "../pages/AllHouse/AllHouse";
import SingleHouse from "../pages/SingleHouse/SingleHouse";
import Dashboard from "../pages/Dashboard/Dashboard";
import DallHouse from "../components/Dashboard/DallHouse/DallHouse";
import DaddHouse from "../components/Dashboard/DaddHouse/DaddHouse";
import Dbooking from "../components/Dashboard/Dbooking/Dbooking";
import NewHome from "../pages/NewHome/NewHome";
import MainLayout from "../pages/MainLayout/MainLayout";
import Dprofile from "../components/Dashboard/Dprofile/Dprofile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <p>error</p>,
    children: [
      {
        path: '',
        element: <NewHome />
      },
      {
        path: 'allHouse',
        element: <AllHouse />
      },
      {
        path: 'house/:id',
        loader: ({params}) => fetch(`https://houter-server.vercel.app/house/house/${params.id}`),
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
        path: 'profile',
        element: <Dprofile />
      },
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