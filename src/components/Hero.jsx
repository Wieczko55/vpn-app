
const Hero = () =>{
    return(
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[550px] relative">


                <div className="absolute w-full h-full text-black bg-black/15 flex flex-col justify-center items-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Don't<span className="text-blue-200"> wait</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Protect <span className="text-blue-200"> Yourself</span></h1>
                    <button className="mt-5  rounded-xl h-[50px] px-3 text-blue-200 font-semibold border-blue-200 border-[2px] text-2xl md:text-3xl lg:text-4xl animate-pulse">Get Started</button>
                </div>
                <img className=" w-full max-h-[550px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Glorious-blue-mountain-range.jpg" alt="img" />
            </div>
        </div>
    )
}
export default Hero;