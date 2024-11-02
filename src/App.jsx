
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Signpu from './Components/Signpu'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
<Route>
<Route path='/' element = {<Login/>}/>
<Route path={"/register"} element = {<Signpu/>}/>
</Route>
       

    )
  )

  return (
    <>
    <RouterProvider router = {myRoute}/>
    <ToastContainer />

    </>
  )
}

export default App
