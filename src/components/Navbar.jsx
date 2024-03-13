import { SiNordvpn } from "react-icons/si";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdHelp } from "react-icons/io";
import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import  key  from '../assets/key.png';
import key1 from '../assets/key1.png';

const Navbar = () => {
    const [nav, setNav] = useState(true);
    return(
        <div className="flex justify-between max-w-[1640px] p-3.5 mx-auto border-b border-slate-300 overflow-hidden">
           <div className="flex items-center">
            <SiNordvpn  size={40} className="text-blue-500 mr-2"/>
            <img src={key} alt="/" className="w-[110px] h-[45px]"/>
           </div>
           <div className="flex items-center sm:*:mx-2 md:*:mx-2 lg:*:mx-3 hover:*:text-blue-500">
                <p className="hidden md:block">Price</p>
                <p className="hidden md:block">Functions</p>
                <p className="hidden md:block">Servers</p>
                <p className="hidden md:block">Download</p>
                <p className="hidden lg:block">Blog</p>
                <p className="hidden lg:block">For companies</p>
           </div>
           <div className="flex items-center  sm:ml-0 sm:*:mx-1.3 lg:*:m-3 md:*:mx-3">
                <button className="border border-blue-500 rounded-xl p-1 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500 ">Download</button>
                <p className="hover:text-blue-500 text-sm sm:text-md ml-2.5">Log in</p>
                <p className="sm:block hidden hover:text-blue-500 text-sm sm:text-md ml-1.5">Help</p>
                <HiOutlineMenu onClick={() => setNav(!nav)} size={30} className="hover:cursor-pointer hover:skew-x-5 mr-2 ml-2.5"/>
           </div>
           {!nav ? <div onClick={()=> setNav(!nav)} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-900"></div> : ''}
                <div className={' overflow-y-auto fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'} style={{left: nav? '-9999px' : ''}}>
                    <AiOutlineClose  onClick={()=> setNav(!nav)} size={30}  className="hover:cursor-pointer absolute right-4 top-4 cursor-pointer"/>
                    <img src={key1} alt="/" />
                    <nav>
                        <ul className='flex flex-col py-4 text-gray-800'>
                            <li className='flex py-4 text-xl first:pt-2 border-y hover:bg-slate-200 w-full'><TbTruckDelivery size={25} className='mr-4 ml-3'/>Orders</li>
                            <li className='flex py-4 text-xl border-y hover:bg-slate-200'><MdFavorite size={25} className='mr-4 ml-3'/>Favourites</li>
                            <li className='flex py-4 text-xl border-y hover:bg-slate-200'><FaWallet size={25} className='mr-4 ml-3'/>Wallet</li>
                            <li className='flex py-4 text-xl border-y hover:bg-slate-200'><IoMdHelp  size={25} className='mr-4 ml-3'/>Help</li>
                            <li className='flex py-4 text-xl border-y hover:bg-slate-200'><AiFillTag size={25} className='mr-4 ml-3'/>Promotions</li>
                            <li className='flex py-4 text-xl border-y hover:bg-slate-200'><BsFillSaveFill size={25} className='mr-4 ml-3'/>Best Ones</li>
                            <li className='flex py-4 text-xl last:pb-2 border-y hover:bg-slate-200'><FaUserFriends size={25} className='mr-4 ml-3'/>Invite Friends</li>
                        </ul>
                    </nav>
                    <div className="absolute sm:relative bottom-0 left-0 w-full">
                        <button className="relative bottom-0 left-0 w-full h-[50px] flex justify-center items-center bg-fuchsia-800 text-white font-semibold"> <FaDownload className="text-white mr-2" size={22}/> Download Now!!</button>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;