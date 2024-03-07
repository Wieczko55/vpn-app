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
                    <FaCreditCard size={20} className="mt-1" /> <h1 className="font-semibold ml-2 text-xl"> Dokonaj zakupu</h1>
                    </div>
                    <div className="px-4 pb-4">
                        <p>Wybierz jeden z naszych dwuletnich pakietów. W zależności od zakupionego pakietu otrzymasz 3-miesięczny kupon VPN na NordVPN Standard, Plus lub Complete.</p>
                    </div>
                </div>
                <div className="border rounded-md border-black-100 bg-blue-200 border-slate-300 shadow-lg shadow-blue-200">
                    <div className="flex p-4">
                        <FaGift  size={20} className="mt-1" /> <h1 className="font-semibold ml-2 text-xl"> Odbierz</h1>
                    </div>
                    <div className="px-4 pb-4">
                        <p>
                            Otrzymasz od nas kupon na maila w ciągu 24 godzin od zakupu. 
                        </p>
                    </div>
                </div>
                <div className="border rounded-md border-slate-300 bg-blue-200 flex  flex-col flex-wrap shadow-lg shadow-blue-200">
                    <div className="flex p-4">
                        <FaSmileWink size={20} className="mt-1" /> <h1 className="font-semibold ml-2 text-xl"> Zrealizuj kod</h1>
                    </div>
                    <div className="px-4 pb-4">
                        <p>Kupon może zostać zrealizowany na <a className="underline text-blue-900" href="https://my.nordaccount.com/activate/">Click here</a>  do 20 czerwca 2024r.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;