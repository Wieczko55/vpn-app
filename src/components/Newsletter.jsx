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
                        <input className="p-3 flex w-full rounded-md text-black placeholder:text-slate-500 shadow-md border border-blue-100" type="email" placeholder="Enter e-mail"/>
                        <button className="mr-3 bg-blue-500 text-white rounded-md font-medium md:w-[250px] w-[200px] md:ml-6 mt-4 md:mt-2 md:mr-14 lg:mr-4 h-[45px]">Notify me</button>
                    </div>
                    <div className="mt-4 flex sm:flex-row flex-col text-sm sm:text-md justify-center md:justify-normal items-center sm:items-start md:flex-col">
                        <p className="ml-1">We care about the protecion of your data. Read our</p>
                        <p className="underline text-blue-800 ml-1">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newstletter;