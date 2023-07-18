
import {createBrowserRouter} from "react-router-dom"
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";

function App() {
    return(
        <>
        <Header />
        <Body />
        </>
    )
}

export const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App />
    }
])

export default App;