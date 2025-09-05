import {AppRoutes} from "./modules/@akdash/AppRoutes";
import {Header} from "./modules/@akdash/Header";
import {PVContextProvider} from "./modules/@akdash/context/PVContext";
import {Loader} from "./modules/@akdash/UI";

function App() {

  return (
    <>
        <PVContextProvider>
            <div className="w-full  flex flex-col">
                <div>
                    <Header/>
                </div>

                <div className="main-page flex">
                    <AppRoutes />
                </div>
                <Loader color={'#AE9040'} />
            </div>
        </PVContextProvider>
    </>
  )
}

export default App
