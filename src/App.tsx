import "./App.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/landingpage/LandingPage";
import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    // {
    //   element: <MiddleWare />,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <Dashboard />,
    //     },
    //   ],
    // },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className=" ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
