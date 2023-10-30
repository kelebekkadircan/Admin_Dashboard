import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import './styles/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {



  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:
        [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/users",
            element: <Users />
          },
          {
            path: "/products",
            element: <Products />
          },
        ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
