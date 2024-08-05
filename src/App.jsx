import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'

function App() {

  const routes = createHashRouter([
    {
      path: "", element: <LayOut />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contacts /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}>
      </RouterProvider>

    </>
  )
}

export default App
