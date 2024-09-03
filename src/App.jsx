import {  Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Backend from "./Pages/Backend"
import NavBar from "./Components/NavBar"
import Frontend from "./Pages/Frontend"
import BESaas from "./Pages/BESaas"
import BEPass from "./Pages/BEPass"
import Travel from "./Pages/Travel"
import P2P from "./Pages/P2P"
import Reimbursement from "./Pages/Reimbursement"
import Finance from "./Pages/Finance"
import Hotels from "./Pages/Hotels"
import Flights from "./Pages/Flights"
import Services from "./Pages/Services"
import Teams from "./Pages/Teams"

export const App = () => {
    return (
        <div>
            <NavBar/>

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
        </div>
    )
}
