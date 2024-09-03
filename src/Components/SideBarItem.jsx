import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


const SideBarItem = ({ item }) => {

    const [showSideOptions, setSideOptions] = useState(false);
    if (item.children) {
        return (
            <div className="flex flex-col m-3 overflow-auto  gap-2">
                <div
                    onClick={() => setSideOptions(prev => !prev)}
                    className="hover:bg-blue-800 hover:text-white px-4 py-2  justify-between flex items-center rounded-lg">

                    <Link className="w-full "  to={item.path} >{item.title}</Link>
                    <IoIosArrowDown className={`${showSideOptions ? " rotate-180 transition-all duration-300":"  duration-300"}`} />

                </div>
                <div className={`${showSideOptions ? "h-auto overflow-hidden" : "h-0 overflow-hidden"} pl-5`}>
                    {item?.children?.map((item,index)=><SideBarItem item={item} key={index}/>)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col m-3 overflow-auto  gap-4">
                <div
                    onClick={() => setSideOptions(prev => !prev)}
                    className="hover:bg-blue-800 hover:text-white px-4 py-2 justify-between flex items-center rounded-lg">

                    <Link to={item.path}>{item.title}</Link>
                </div>
            </div>
        )
    }
}

export default SideBarItem



