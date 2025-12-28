import './App.css'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import MainBoard from './components/MainBoard/MainBoard'


const routes = createBrowserRouter([{
  path:"/" ,
  element:<MainLayout><MainBoard/></MainLayout>
}])
function App() {

  return (
   <RouterProvider router={routes}/>
  )
}

export default App
