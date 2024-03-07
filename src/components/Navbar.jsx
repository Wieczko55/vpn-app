import { SiNordvpn } from "react-icons/si";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
    const [nav, setNav] = useState(true);
    return(
        <div className="flex justify-between max-w-[1640px] p-4 mx-auto border-b border-slate-300 ">
           <div className="flex items-center">
            <SiNordvpn  size={40} className="text-blue-500 mr-2"/>
            <h1 className="text-indigo-950 font-bold  md:text-3xl sm:text-2xl text-xl bg-blue-500 rounded-full py-1 pl-1">Key<span className="p-0.5 text-blue-500 rounded-full bg-slate-300">VPN</span></h1>
           </div>
           <div className="flex items-center *:mx-1 md:*:mx-3 lg:*:mx-4 hover:*:text-blue-500">
                <p className="hidden md:block">Price</p>
                <p className="hidden md:block">Functions</p>
                <p className="hidden md:block">Servers</p>
                <p className="hidden md:block">Download</p>
                <p className="hidden lg:block">Blog</p>
                <p className="hidden lg:block">For companies</p>
           </div>
           <div className="flex items-center *:mx-1.5 lg:*:m-3 md:*:mx-3 ">
                <button className="border border-blue-500 rounded-xl p-1 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500 ">Download</button>
                <p className="hover:text-blue-500">Help</p>
                <p className="hover:text-blue-500">Log in</p>
                <HiOutlineMenu  size={30}/>
           </div>
        </div>
    )
}

export default Navbar;