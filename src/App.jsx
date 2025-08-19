import {AppRoutes} from "./modules/@akdash/AppRoutes";
import {Header} from "./modules/@akdash/Header";

function App() {

  return (
    <>
        <div className="w-full min-h-screen flex flex-col">
            <div>
                <Header/>
            </div>

            <div className="main-page flex-1 flex">
                <AppRoutes />
            </div>

        </div>

    </>
  )
}

export default App
