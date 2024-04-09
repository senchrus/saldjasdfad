import Main from "./Mainpg"
import Journal from "./Journal";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Njournal from "./Njournal";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
