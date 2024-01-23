import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllHomes from "../pages/AllHomes/AllHomes";

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
        path: 'allHomes',
        element: <AllHomes />
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
  }
])