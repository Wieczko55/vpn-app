const Newstletter = () =>{
    return(
        <div className="max-w-[1610px] mx-auto px-2 py-8 bg-blue-200 mt-4 rounded-2xl">
            <div className="w-full mx-auto  grid lg:grid-cols-4 lg:mt-4">
                <div className="lg:col-span-2 pr-4 pl-4 lg:mt-3 flex flex-col items-center md:items-start">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Want to learn some tips & tricks?</h1>
                    <p className="text-md  mt-1 text-center">Sign up to ours newstletter and stay up to date.</p>
                </div>
                <div className="my-4 lg:col-span-2 sm:ml-4">
                    <div className="sm:px-12  px-8 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between w-full items-center">
                        <input className="p-3 flex w-full rounded-md text-black placeholder:text-slate-500 shadow-md border border-blue-500 ring-1 ring-blue-400 focus:border-sky-600 focus:ring-1 focus:ring-sky-500 focus:outline-none" type="email" placeholder="Enter e-mail"/>
                        <a href="#" class="mr-3  md:w-[250px] w-[200px] md:ml-6 mt-4 md:mt-2 md:mr-14 lg:mr-4 h-[45px] relative inline-flex items-center justify-center  overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">Notify Me</span>
                        </a>
                    </div>
                    <div className="mt-4 flex sm:flex-row flex-col text-sm sm:text-md justify-center md:justify-normal items-center sm:items-start md:flex-col ">
                        <p className="ml-1">We care about the protecion of your data. Read our</p>
                        <p className="underline text-blue-800 ml-1">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newstletter;