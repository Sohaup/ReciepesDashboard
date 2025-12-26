import './App.css'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'


const routes = createBrowserRouter([{
  path:"/" ,
  element:<MainLayout><h1>Index</h1></MainLayout>
}])
function App() {
 

  return (
   <RouterProvider router={routes}/>
  )
}

export default App
