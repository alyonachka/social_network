import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Root } from "./components/Root"
import { FriendsPage } from "./pages/friends"
import { PostsPage } from "./pages/posts"
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserInfoPage from './pages/userInfo';
import { Provider } from 'react-redux';
import { store } from "./redux/store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <div>Login</div>
      },
      {
        path: "auth",
        element: <div>Auth</div>
      },
    ]
  },
  {
    path: `user/:id`,
    element: <Root />,
    children: [
      {
        path: "info",
        element: <UserInfoPage />
      },
      {
        path: "posts",
        element: <PostsPage />
      },
      {
        path: "friends",
        element: <FriendsPage />
      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
