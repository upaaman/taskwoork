import React, { Suspense } from "react"

import {  Route, Routes } from "react-router-dom"
const Home =React.lazy(()=>import("./Pages/Home")) 
const About =React.lazy(()=>import("./Pages/About")) 
const Contact =React.lazy(()=>import("./Pages/Contact")) 
const Backend =React.lazy(()=>import("./Pages/Backend")) 
const NavBar =React.lazy(()=>import("./Components/NavBar")) 
const Frontend =React.lazy(()=>import("./Pages/Frontend")) 
const BESaas =React.lazy(()=>import( "./Pages/BESaas"))
const BEPass =React.lazy(()=>import("./Pages/BEPass")) 
const Travel =React.lazy(()=>import( "./Pages/Travel"))
const P2P =React.lazy(()=>import( "./Pages/P2P"))
const Reimbursement =React.lazy(()=>import("./Pages/Reimbursement")) 
const Finance =React.lazy(()=>import("./Pages/Finance")) 
const Hotels =React.lazy(()=>import("./Pages/Hotels")) 
const Flights =React.lazy(()=>import( "./Pages/Flights"))
const Services =React.lazy(()=>import("./Pages/Services"))
const Teams =React.lazy(()=>import( "./Pages/Teams"))
import Loading from "./Components/Loading"

export const App = () => {
    return (
        <div>
            <NavBar/>
            <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/teams/backend" element={<Backend />} />
                <Route path="/teams" element={<Teams/>} />
                <Route path="/teams/frontend" element={<Frontend />} />
                <Route path="/teams/backend/pass" element={<BEPass />} />
                <Route path="/teams/backend/sass" element={<BESaas />} />
                <Route path="/about/travel" element={<Travel />} />
                <Route path="/about/p2p" element={<P2P />} />
                <Route path="/about/finance" element={<Finance />} />
                <Route path="/about/reimbursement" element={<Reimbursement />} />
                <Route path="/about/hotels" element={<Hotels />} />
                <Route path="/about/flights" element={<Flights />} />
                <Route path="/SERVICES" element={<Services />} />

            </Routes>
            </Suspense>
        </div>
    )
}
