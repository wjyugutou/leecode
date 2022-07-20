import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RecoilRoot } from 'recoil'
import routes from './routes'

function AppRoutes() {
  return useRoutes(routes)
}

function App() {
  return (
    <RecoilRoot>
      <main className=" px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </main>
    </RecoilRoot>)
}

export default App
