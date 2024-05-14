import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import ProfilePage from "./routes/profilePage/profilePage";
import SinglePage from "./routes/singlePage/singlePage";

// import Login from "./routes/login/login";
// import ProfilePage from "./routes/profilePage/profilePage";
// import Register from "./routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
