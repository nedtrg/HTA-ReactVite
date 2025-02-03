import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "/src/assets/styles/App.css";
import {
  About,
  ContactUs,
  Experience,
  Home,
  HomeLayout,
  Resume,
  Services,
} from "./pages";

const router = createBrowserRouter([
  {
    index: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
