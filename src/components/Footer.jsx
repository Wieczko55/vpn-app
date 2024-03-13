import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaTiktok } from "react-icons/fa6";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import key1 from '../assets/key.jpg';

const Footer = () =>{
    const stchange = () =>{
        setTimeout(() =>{
        setRoll(!roll);
        setRoll1(true);
        setRoll2(true);
        setRoll3(true);
        }, 50);
    }
    const ndchange = () =>{
        setRoll(true);
        setRoll1(!roll1);
        setRoll2(true);
        setRoll3(true);
    }
    const rdchange = () =>{
        setRoll(true);
        setRoll1(true);
        setRoll2(!roll2);
        setRoll3(true);
    }
    const thchange = () =>{
        setRoll(true);
        setRoll1(true);
        setRoll2(true);
        setRoll3(!roll3);
    }


    const [roll, setRoll] = useState(true);
    const [roll1, setRoll1] = useState(true);
    const [roll2, setRoll2] = useState(true);
    const [roll3, setRoll3] = useState(true);
    return(
        <div className='border-t border-slate-400 max-w-[1640px] mx-auto p-4 grid lg:grid-cols-3 gap-8 mt-14 '>
            <div className='md:px-10 lg:px-0'>
            <img src={key1} alt="/" className="w-[110px] h-[45px]"/>
                <p className='py-4'>Thank you for your visit, we hope you'll like  our product remember to be well protected on the internet. Innovate and inspire your friends uncover the unexpected, support KeyVPN.</p>
                <div className='md:mt-4 flex md:mx-auto md:w-[85%] lg:my-6 lg:mx-0 justify-between text-fuchsia-800'>
                    <FaDribbbleSquare size={40}/>
                    <FaFacebookSquare size={40}/>
                    <FaGithubSquare size={40}/>
                    <FaInstagram size={40}/>
                    <FaTwitterSquare size={40}/>
                    <FaTiktok size={40}/>
                </div>
            </div>
            <div className='md:hidden mt-5 lg:col-span-2 flex justify-between md:px-12 px-0 md:text-md flex-col md:flex-row'>
                <div className=' md:border-none pt-2 border-t border-b w-full  duration-500' style={{height: roll? "60px" : "220px"}}>
                    <h6 className='text-lg font-semibold' onClick={stchange}>Function</h6>
                    {roll?<IoIosArrowDown className='ml-6'/> :  <MdKeyboardArrowUp size={20} className='ml-7'/>}
                    <ul className='flex flex-col flex-wrap  ml-8 mt-1' style={{visibility: roll? "hidden" : "visible"}}>
                        <li className='py-2'>Ad Blocker</li>
                        <li className='py-2'>free VPN</li>
                        <li className='py-2'>Pro VPN</li>
                        <li className='py-2'>cleaning tools</li>
                    </ul>
                </div>
                <div className='pt-2 border-t border-b w-full  duration-500 md:border-none' style={{height: roll1? "60px" : "220px"}}>
                    <h6 className='text-lg font-semibold' onClick={ndchange}>Services</h6>
                    {roll1?<IoIosArrowDown className='ml-6'/> :  <MdKeyboardArrowUp size={20} className='ml-7'/>}
                    <ul className='flex flex-col flex-wrap ml-8 mt-1' style={{visibility: roll1? "hidden" : "visible"}}>
                        <li className='py-2'>Notifications</li>
                        <li className='py-2'>Gaming & Ping</li>
                        <li className='py-2'>Products</li>
                        <li className='py-2'>Speed test</li>
                    </ul>
                </div>
                <div className='md:border-none pt-2 border-t border-b w-full duration-500' style={{height: roll2? "60px" : "220px"}} >
                    <h6 className='text-lg font-semibold' onClick={rdchange}>Support</h6>
                    {roll2?<IoIosArrowDown className='ml-6'/> :  <MdKeyboardArrowUp size={20} className='ml-7'/>}
                    <ul className='flex flex-col flex-wrap md:visible ml-8 mt-1  ' style={{visibility: roll2? "hidden" : "visible"}}>
                        <li className='py-2'>help & support</li>
                        <li className='py-2'>Our blog</li>
                        <li className='py-2'>FAQ</li>
                        <li className='py-2'>Our forum</li>
                    </ul>
                </div>
                <div className='md:border-none pt-2 border-t border-b w-full  duration-500' style={{height: roll3? "60px" : "220px"}} >
                    <h6 className='text-lg font-semibold' onClick={thchange}>Company</h6>
                    {roll3?<IoIosArrowDown className='ml-7'/> :  <MdKeyboardArrowUp size={20} className='ml-7'/>}              
                    <ul className='flex flex-col flex-wrap md:visible ml-8 mt-1  ' style={{visibility: roll3? "hidden" : "visible"}}>
                        <li className='py-2'>About KeyVPN</li>
                        <li className='py-2'>Work</li>
                        <li className='py-2'>Inwestors</li>
                        <li className='py-2'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='hidden md:flex mt-5 lg:col-span-2 flex justify-between md:px-12 px-0 md:text-md flex-col md:flex-row'>
                <div className='group/items1  cursor-pointer  md:border-none pt-2 border-t border-b w-full  duration-500'>
                    <h6 className='group-hover/items1:text-fuchsia-800 text-lg font-semibold'>Function</h6>
                    <ul className='flex flex-col flex-wrap mt-1'>
                        <li className='py-2 hover:text-blue-500'>Ad Blocker</li>
                        <li className='py-2 hover:text-blue-500'>free VPN</li>
                        <li className='py-2 hover:text-blue-500'>Pro VPN</li>
                        <li className='py-2 hover:text-blue-500'>cleaning tools</li>
                    </ul>
                </div>
                <div className='group/items2 cursor-pointer pt-2 border-t border-b w-full md:border-none'>
                    <h6 className='group-hover/items2:text-fuchsia-800 text-lg font-semibold'>Services</h6>
                    <ul className='flex flex-col flex-wrap mt-1'>
                        <li className='py-2 hover:text-blue-500'>Notifications</li>
                        <li className='py-2 hover:text-blue-500'>Gaming & Ping</li>
                        <li className='py-2 hover:text-blue-500'>Products</li>
                        <li className='py-2 hover:text-blue-500'>Speed test</li>
                    </ul>
                </div>
                <div className='group/item cursor-pointer md:border-none pt-2 border-t border-b w-full'>
                    <h6 className='group-hover/item:text-fuchsia-800 text-lg font-semibold'>Support</h6>
                    <ul className='flex flex-col flex-wrap md:visible mt-1  '>
                        <li className='py-2 hover:text-blue-500'>help & support</li>
                        <li className='py-2 hover:text-blue-500'>Our blog</li>
                        <li className='py-2 hover:text-blue-500'>FAQ</li>
                        <li className='py-2 hover:text-blue-500'>Our forum</li>
                    </ul>
                </div>
                <div className='group/items cursor-pointer md:border-none pt-2 border-t border-b w-full'>
                    <h6 className='group-hover/items:text-fuchsia-800 text-lg font-semibold'>Company</h6>          
                    <ul className='flex flex-col flex-wrap md:visible mt-1'>
                        <li className='py-2 hover:text-blue-500'>About KeyVPN</li>
                        <li className='py-2 hover:text-blue-500'>Work</li>
                        <li className='py-2 hover:text-blue-500'>Inwestors</li>
                        <li className='py-2 hover:text-blue-500'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='md:h-[0px] h-[110px] bg-blue-50'>

            </div>
        </div>
    )
}

export default Footer;