import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import MainBoard from './components/MainBoard/MainBoard'
import DashboardTwo from './pages/DashBoardTwo/DashboardTwo'
import { Provider } from 'react-redux'
import { store } from './store/store'


const routes = createBrowserRouter([{
  path: "/",
  element: <MainLayout><MainBoard /></MainLayout>,
},
{
  path: "/tasks",
  element: <MainLayout><DashboardTwo /></MainLayout>
}

])
function App() {

  return (
    <Provider store={store}>  
        <RouterProvider router={routes} />
    </Provider>
    


  )
}

export default App
