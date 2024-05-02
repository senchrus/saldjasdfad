import Main from "./Mainpg"
import Journal from "./Journal";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Njournal from "./Njournal";
import Sales from "./Sales";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
