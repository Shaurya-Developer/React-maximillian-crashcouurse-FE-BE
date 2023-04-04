import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./routes/Posts";
import "./index.css";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        // loader: () => {},
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader }, // dynamic path
        ],
      },
    ],
  }, // layout routes, they are just normal routes which have nested routes components, layout route component is visible in all other routes, 3rd argument we give is children which is an array in which we give routes, which will have layout of parent component + its own component
  /*
  { path: "/", element: <App /> },
  { path: "/create-post", element: <NewPost /> },
  */
]); // path tell which route we are handling and element tell us which component we should render for this path
// here in this array we give all the routes we want to have, inside this array we will give an object
// loader gets function as value, and react router executes that function for us, we use loader when we need to load and prepare any data we need
// when a Form is submitted action property gets executed, action takes callback function sa value
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); // when using react-router we should define this <RouterProvider router={router}
