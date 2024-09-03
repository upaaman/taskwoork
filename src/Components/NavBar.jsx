

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import SideBarItem from "./SideBarItem"
import "../App.css"
import NavItems from "./NavItems"
import { menuItems } from "../../public/navBarData"
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);



  
    return (

        <div className="flex justify-between items-center bg-blue-500 fixed w-full  ">


            {/* ----------------------------logo section  on left */}


            <div className="flex items-center justify-center gap-2 py-3 px-5">
                <img src="https://seeklogo.com/images/L/lion-leao-logo-47267D166B-seeklogo.com.png" className="w-12 " />
                <span className="text-2xl font-bold text-blue-100">LionKing</span>
            </div>


            {/* ------------------navbar section in middle */}


            <nav className="md:flex gap-8 text-lg hidden">

                <NavItems />

            </nav>



            {/* ---------------------button section on right */}


            <div>
                <button className="bg-blue-700 hover:bg-blue-900 text-white mr-5  px-4  py-1 rounded-lg md:flex hidden  items-center justify-center">Login</button>
            </div>
            <button className="md:hidden text-xl  mr-5 font-bold"
                onClick={() => setIsOpen(prev => !prev)}>
                {!isOpen ?
                    <GiHamburgerMenu className="text-white" />
                    :
                    <IoClose className="text-white" />

                }

            </button>

                    {/* ---------------------------Side bar when in small screen */}



            <div className={`bg-blue-500  w-[300px] overflow-auto text-sm font-semibold h-full py-[30px]  -z-10 mt-[72px] duration-500 fixed left-0 top-0 ${isOpen ? "translate-x-[0%] " : "-translate-x-[100%]"}`}>
                {
                    menuItems.map((item, index) => <SideBarItem item={item} key={index} />)
                }
            </div>
        </div>
    )
}

export default NavBar