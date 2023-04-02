import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './index.css';
import Worlds from './features/worlds/components/Worlds';
import World from './features/worlds/components/World';
import Core from './features/worlds/components/Core';
import Beats from './features/worlds/components/Beats';
import Art from './features/worlds/components/Art';
import Videos from './features/worlds/components/Videos';
import About from './features/about/components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "worlds",
        element: <Worlds />
      },
      {
        path: "worlds/:id",
        element: <World />,
        children: [
          {
            index: true,
            element: <Core />
          },
          {
            path: "beats",
            element: <Beats />
          },
          {
            path: "art",
            element: <Art />
          },
          {
            path: "videos",
            element: <Videos />
          }
        ]
      }
    ]
  }
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
