import Main from "./Mainpg"
import Journal from "./Journal";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Njournal from "./Njournal";
import Sales from "./Sales";
import Log from "./Log";
import Reg from "./Register";
import Books from "./Books";
import CartContextProvider from './Cartcontext';
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/journal",
    element: <Journal />
  },{
    path: "/njournal",
    element: <Njournal />
  },
  {
    path: "/sales",
    element: <Sales/>
  },
  {
    path: "/login",
    element: <Log/>
  },
  {
    path: "/register",
    element: <Reg/>
  },
  {
    path:"/store",
    element: <Books/>
  },
  {
    path:"/cart",
    element: <Cart/>
  }
]);

function App() {
  return (
    <>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </>
  );
}

export default App;
