import { FaCreditCard } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
const Cards = () =>{
    return(
        <div className="mt-5 max-w-[1640px] p-4 mx-auto">
            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">Jak dostać rabat:</h1>
            <div className="grid md:grid-cols-3 mt-4 w-full gap-10">
                <div className="border rounded-md border-black-100 bg-blue-200 border-slate-300 shadow-lg shadow-blue-200">
                    <div className="flex p-4">
                    <FaCreditCard size={20} className="mt-1" /> <h1 className="font-semibold ml-2 text-xl"> Make a purchase</h1>
                    </div>
                    <div className="px-4 pb-4">
                        <p>Choose one of our two-year packages. Depending on the package you purchase, you will receive a 3-month VPN coupon for NordVPN Standard, Plus, or Complete.</p>
                    </div>
                </div>
                <div className="border rounded-md border-black-100 bg-blue-200 border-slate-300 shadow-lg shadow-blue-200">
                    <div className="flex p-4">
                        <FaGift  size={20} className="mt-1" /> <h1 className="font-semibold ml-2 text-xl"> Receive</h1>
                    </div>
                    <div className="px-4 pb-4">
                        <p>
                        You will receive a voucher from us by email within 24 hours of purchase. 
                        </p>
                    </div>
                </div>
                <div className="border rounded-md border-slate-300 bg-blue-200 flex  flex-col flex-wrap shadow-lg shadow-blue-200">
                    <div className="flex p-4">
                        <FaSmileWink size={20} className="mt-1" /> <h1 className="font-semibold ml-2 text-xl"> Redeem code</h1>
                    </div>
                    <div className="px-4 pb-4">
                        <p>The voucher can be redeemed on <a className="underline text-blue-900" href="/">Click here</a> until 20 June 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;