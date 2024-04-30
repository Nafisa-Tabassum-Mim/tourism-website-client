import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/pages/ErrorPage.jsx';
import Home from './components/pages/Home.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import AuthProvider from './components/firebase/AuthProvider.jsx';
import AddTourist from './components/addTouristPage/AddTourist.jsx';
import PrivateRoute from './components/firebase/PrivateRoute.jsx';
import TouristDetails from './components/addTouristPage/TouristDetails.jsx';
import AllTouristSpot from './components/addTouristPage/AllTouristSpot.jsx';
import MyList from './components/addTouristPage/MyList.jsx';
import UpdateTourist from './components/addTouristPage/UpdateTourist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tourism-website-server-jade.vercel.app/tourism')
      },
      {
        path: '/alltouristspot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('https://tourism-website-server-jade.vercel.app/tourism')
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://tourism-website-server-jade.vercel.app/tourism')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/:_id',
        element: <PrivateRoute><TouristDetails></TouristDetails> </PrivateRoute>,
        loader: () => fetch('https://tourism-website-server-jade.vercel.app/tourism')
      },
      {
        path: '/addtouristspot',
        element: <PrivateRoute><AddTourist></AddTourist></PrivateRoute>
      },
      {
        path: '/updatetouristspot/:id', 
        element: <PrivateRoute><UpdateTourist></UpdateTourist></PrivateRoute> , 
        loader: ({params}) => fetch(`https://tourism-website-server-jade.vercel.app/mylist/${params.id}`)
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
