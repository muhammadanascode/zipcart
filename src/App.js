import './App.css';
import Cart from './components/Cart';
import Founder from './components/Founder';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckOut from './components/CheckOut';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/founder",
          element: <Founder />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
