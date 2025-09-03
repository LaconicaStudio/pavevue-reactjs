import {AppRoutes} from "./modules/@akdash/AppRoutes";
import {Header} from "./modules/@akdash/Header";
import {PVContextProvider} from "./modules/@akdash/context/PVContext";

function App() {

  return (
    <>
        <PVContextProvider>
            <div className="w-full min-h-screen flex flex-col">
                <div>
                    <Header/>
                </div>

                <div className="main-page flex-1 flex">
                    <AppRoutes />
                </div>

            </div>
        </PVContextProvider>
    </>
  )
}

export default App
