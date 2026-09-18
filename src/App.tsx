import { ToastContainer } from "react-toastify"
import Nav from "./components/Nav"
import Hero from "./components/Hero"


function App() {

    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <ToastContainer />
        </div>
    )
}

export default App
