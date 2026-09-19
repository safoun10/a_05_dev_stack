import { ToastContainer } from "react-toastify"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import type { Tech } from "./types/TechTypes";
import { Suspense, useState } from "react";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

import loading from "./assets/loading.gif";

const techFetch = async (): Promise<Tech[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
}

function App() {

    const [techData] = useState(() => techFetch());

    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <Suspense fallback={
                <div className="flex justify-center items-center py-10">
                    <img className="w-10" src={loading}></img>
                </div>
            }>
                <TechStack techData={techData}></TechStack>
            </Suspense>
            <Footer></Footer>
            <ToastContainer position="top-center"/>
        </div>
    )
}

export default App
