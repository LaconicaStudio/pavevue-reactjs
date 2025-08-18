import {AppRoutes} from "./modules/@akdash/AppRoutes";
import {Header} from "./modules/@akdash/Header";
import './App.css'

function App() {

  return (
    <>
        <div className="p-4 max-w-3xl mx-auto">
            <Header/>
        </div>

        <AppRoutes />
    </>
  )
}

export default App
