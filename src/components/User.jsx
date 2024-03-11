const User = () =>{
    return(
        <div className="max-w-[1640px] mx-auto p-3 sm:p-4 lg:mt-10 lg:grid lg:grid-cols-2 sm:flex sm:flex-col sm:items-center mt-10">
            <div className="flex flex-col justify-center items-center lg:mt-10">
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500">It's that simple</h1>
                <p className="mt-2 font-semibold text-lg md:text-2xl">Join us and be one of 150M happy users.</p>
                <p className="text-xl lg:px-10 md:px-4 mt-2 px-5 text-justify">
                you can be one of us, our VPN service has already been liked by over 150 million users, do not hesitate and download our VPN currently on the market we have the cheapest and at the same time the best package to protect your connection.</p>
                <button className="mt-6 border border-blue-500 font-semibold text-xl p-4 rounded-full hover:bg-blue-500 hover:text-white">Download</button>
            </div>
            <div className="mt-5 ml-10">
            <img src="https://digitalmasterinstitute.com/wp-content/uploads/2023/03/Kierunki_0006_Layer-2-600x525.png" alt="User" />
            </div>
        </div>
    )
}

export default User;