import { IoMdQuote } from "react-icons/io";
const Feedback = () =>{
    return(
        <div className="mt-14 max-w-[1640px] mx-auto p-4 lg:grid lg:grid-cols-3 gap-8 flex flex-col md:px-[90px] px-[35px] lg:px-4">
            <div className="hover:shadow-slate-800 hover:bg-slate-300  shadow-lg rounded-2xl p-6 ">
                <IoMdQuote size={40} className="text-blue-500"/>
                <div className="px-2 lg:h-[170px] md:h-[100px] flex items-center">
                    <q className="text-lg">
                    I value online security, that's why I chose KeyVPN, since I have it I feel more confident when navigating the Internet. I recommend it to anyone who doesn't have it yet.
                    </q>
                </div>
                <div className="flex mt-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDFeMZlLv3FiVjwK4vYGKgvaAOzGjx0001orRpVlicmxM4ugHclbCkssJdfdwYjag7VA&usqp=CAU" alt="women" className="rounded-full w-20 h-20" />
                <div className="mt-3 ml-3">
                    <h1 className="font-semibold text-lg">Herman Jensen</h1>
                    <p className="text-slate-600">Founcer & Leader</p>
                </div>
                </div>
            </div>
            <div className=" shadow-lg hover:shadow-slate-800 hover:bg-slate-300 rounded-2xl p-6 ">
                <IoMdQuote size={40} className="text-blue-500"/>
                <div className="px-2 lg:h-[170px] flex items-center">
                    <q className="text-lg">
                    
                        Low price, good protection is how I would describe KeyVPN. I am satisfied because my wallet is not burdened very much, but the service is very satisfactory
                    </q>
                </div>
                <div className="flex mt-2">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/gQzXZqe-MiNT3m2wDDlfxA/258s.jpg" alt="women" className="rounded-full w-20 h-20" />
                <div className="mt-3 ml-3">
                    <h1 className="font-semibold text-lg">Marina Gross</h1>
                    <p className="text-slate-600">Cybersecurity</p>
                </div>
                </div>
            </div>
            <div className="hover:shadow-slate-800 hover:bg-slate-300 shadow-lg rounded-2xl p-6 ">
            <IoMdQuote size={40} className="text-blue-500"/>
                <div className="px-2 lg:h-[170px] flex items-center">
                    <q className="text-lg">
                    I value online security, that's why I chose KeyVPN, since I have it I feel more confident when navigating the Internet. I recommend it to anyone who doesn't have it yet.
                    </q>
                </div>
                <div className="flex mt-2">
                    <img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=ais" alt="women" className="rounded-full w-20 h-20" />
                <div className="mt-3 ml-3">
                    <h1 className="font-semibold text-lg">Steve Mark</h1>
                    <p className="text-slate-600">Front-end Developer</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;