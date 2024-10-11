import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Root } from "./components/Root"
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/store"
import { Protected } from './components/Protected';
import { Loader } from './components/UI/Loader';

const UserInfoPage = lazy(() => import('./pages/userInfo').then(module => ({ default: module.UserInfoPage })));
const FriendsPage = lazy(() => import('./pages/friends').then(module => ({ default: module.FriendsPage })));
const PostsPage = lazy(() => import('./pages/posts').then(module => ({ default: module.PostsPage })));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `user/:id`,
    element: <Protected><Root /></Protected>,
    children: [
      {
        path: "info",
        element: <Suspense fallback={<Loader />}><UserInfoPage /></Suspense>,
      },
      {
        path: "posts",
        element: <Suspense fallback={<Loader />}><PostsPage /></Suspense>
      },
      {
        path: "friends",
        element: <Suspense fallback={<Loader />}><FriendsPage /></Suspense>
      },
      {
        index: true,
        element: <Navigate to="posts" replace />,
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
