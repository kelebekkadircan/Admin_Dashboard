import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import './styles/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
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
          {
            path: "/users/:id",
            element: <User />
          },
          {
            path: "/products/:id",
            element: <Product />
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
