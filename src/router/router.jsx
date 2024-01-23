import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllHouse from "../pages/AllHouse/AllHouse";
import SingleHouse from "../pages/SingleHouse/SingleHouse";

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
  }
])