import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";




const NavItems = () => {
    const [showFirstSubmenu, setShowFirstSubmenu] = useState(false);
    const [showFirstSubmenuAbout, setShowFirstSubmenuAbout] = useState(false);
    const [showSecondSubmenuBE, setShowSecondSubmenuBE] = useState(false);
    const [showThirdSubmenuBE, setShowThirdSubmenuBE] = useState(false);
    return (
        <>
            <div> <Link className="hover:text-white " to={"/home"}>Home</Link></div>
            <div
                onMouseEnter={() => setShowFirstSubmenu(true)}
                onMouseLeave={() => setShowFirstSubmenu(false)}

                className="">
                <Link to="/teams" className="flex items-center hover:text-white justify-center">
                    Teams
                    <MdKeyboardArrowRight className={`${showFirstSubmenu ? "rotate-90 duration-300" : ""} text-xl `} />
                </Link>
                <div className={`${showFirstSubmenu ? "absolute w-[150px] mt-0 items-center justify-center shadow-lg flex flex-col    bg-blue-100 rounded-lg" : " hidden"}`}>
                    <div
                        onMouseEnter={() => setShowSecondSubmenuBE(true)}
                        onMouseLeave={() => setShowSecondSubmenuBE(false)}

                        className=" w-full flex items-center justify-center ">
                        <Link to="/teams/backend" className="w-full hover:bg-blue-800 hover:text-white  flex  rounded-t-lg  items-center justify-center py-3">
                            Backend
                            <MdKeyboardArrowRight className={`${showSecondSubmenuBE ? " duration-300" : "rotate-90"} text-xl `} />
                        </Link>
                        <div className={`${showSecondSubmenuBE ? "absolute w-[150px]  items-center top-5 left-[150px] justify-center shadow-lg flex flex-col    bg-blue-100 rounded-lg" : " hidden"}`}>
                            <Link to="/teams/backend/bepass" className="w-full hover:bg-blue-800 flex rounded-t-lg hover:text-white   items-center justify-center py-3">BE PaaS</Link>
                            <div
                                onMouseEnter={() => setShowThirdSubmenuBE(true)}
                                onMouseLeave={() => setShowThirdSubmenuBE(false)}
                                className=" w-full flex items-center justify-center "
                            >
                                <Link to="/teams/backend/besaas" className="w-full hover:bg-blue-800 hover:text-white  flex  rounded-b-lg  items-center justify-center py-3">
                                    BE SaaS
                                    <MdKeyboardArrowRight className={`${showThirdSubmenuBE ? " duration-300" : "rotate-90"} text-xl `} />
                                </Link>
                                <div className={`${showThirdSubmenuBE ? "absolute w-[150px]  items-center top-5  left-[150px] justify-center shadow-lg flex flex-col    bg-blue-100 rounded-lg" : " hidden"}`}>
                                    <Link to="/teams/backend" className="w-full hover:bg-blue-800 flex rounded-t-lg  items-center justify-center hover:text-white  py-3">BE PaaS A</Link>
                                    <Link to="/teams/backend" className="w-full hover:bg-blue-800 flex rounded-b-lg  items-center justify-center hover:text-white  py-3">BE PaaS B</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" w-full flex items-center justify-center">
                        <Link to="teams/frontend"  className="w-full hover:bg-blue-800 rounded-b-lg hover:text-white  flex items-center justify-center py-3">Frontend</Link>

                    </div>
                </div>

            </div>
            <div>
                <Link to="/services" className="hover:text-white a" href="">Services</Link>
                <div className="hidden">
                    <div> <Link href="">Payment</Link></div>
                    <div>  <Link href="">Reimbursement</Link></div>
                </div>
            </div>
            <div
                onMouseEnter={() => setShowFirstSubmenuAbout(true)}
                onMouseLeave={() => setShowFirstSubmenuAbout(false)}

                className="">
                <Link to="/about" className="flex items-center hover:text-white  justify-center">
                    About
                    <MdKeyboardArrowRight className={`${showFirstSubmenuAbout ? "rotate-90 duration-300" : ""} text-xl `} />
                </Link>
                <div className={`${showFirstSubmenuAbout ? "absolute w-[150px] mt-0 items-center justify-center shadow-lg flex flex-col    bg-blue-100 rounded-lg" : " hidden"}`}>
                    <div
                        onMouseEnter={() => setShowSecondSubmenuBE(true)}
                        onMouseLeave={() => setShowSecondSubmenuBE(false)}

                        className=" w-full flex items-center justify-center ">
                        <Link to="/about/travel" className="w-full hover:bg-blue-800 flex hover:text-white  rounded-t-lg  items-center justify-center py-3">
                            Travel
                            <MdKeyboardArrowRight className={`${showSecondSubmenuBE ? " duration-300" : "rotate-90"} text-xl `} />
                        </Link>
                        <div className={`${showSecondSubmenuBE ? "absolute w-[150px]  items-center top-5 left-[150px] justify-center shadow-lg flex flex-col    bg-blue-100 rounded-lg" : " hidden"}`}>
                            <Link to="/about/hotels" className="w-full hover:bg-blue-800 flex rounded-t-lg  items-center hover:text-white  justify-center py-3">Hotels</Link>
                            <div
                                onMouseEnter={() => setShowThirdSubmenuBE(true)}
                                onMouseLeave={() => setShowThirdSubmenuBE(false)}
                                className=" w-full flex items-center justify-center "
                            >
                                <Link to="/about/flights" className="w-full hover:text-white  hover:bg-blue-800 flex  rounded-b-lg  items-center justify-center py-3">
                                    Flights
                                    <MdKeyboardArrowRight className={`${showThirdSubmenuBE ? " duration-300" : "rotate-90"} text-xl `} />
                                </Link>
                                <div className={`${showThirdSubmenuBE ? "absolute w-[150px]  items-center top-5  left-[150px] justify-center shadow-lg flex flex-col    bg-blue-100 rounded-lg" : " hidden"}`}>
                                    <Link to="/about/flights" className="w-full hover:text-white  hover:bg-blue-800 flex rounded-t-lg  items-center justify-center py-3">Domestic</Link>
                                    <Link to="/about/flights" className="w-full hover:text-white  hover:bg-blue-800 flex rounded-b-lg  items-center justify-center py-3">International</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Link to="/about/p2p" className="w-full hover:bg-blue-800 hover:text-white  rounded-lg flex items-center justify-center py-3">P2P</Link>
                    <Link to="/about/finance" className="w-full hover:bg-blue-800 hover:text-white  rounded-lg flex items-center justify-center py-3">Finance</Link>
                    <Link to="/about/reimbursement" className="w-full hover:bg-blue-800 hover:text-white  rounded-b-lg flex items-center justify-center py-3">Reimbursement</Link>
                </div>

            </div>
            <div>  <Link to="/contact" className="hover:text-white " href="">Contact</Link></div>
        </>
    )
}

export default NavItems

