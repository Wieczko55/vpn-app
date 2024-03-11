import ReactTypingEffect from 'react-typing-effect';
const Header = () =>{
    return(
        <div className="max-w-[1640px] px-6 pt-0 pb-4 mx-auto">
            <div className="w-full flex flex-col items-center justify-ceneter p-0 my-12">
             <p className='font-semibold text-gray-600 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Are you looking for serious protection?</p>
             <h1 className='sm:font-semibold text-slate-800 text-lg font-bold sm:text-3xl md:text-4xl lg:text-5xl mt-5'>Download our VPN and avoid-  
                <ReactTypingEffect className='text-blue-400'
                     text={[" Spam", " Phising", " Ping"]}
                     speed={200}
                     typingDelay={250}
                     eraseSpeed={200}
                     eraseDelay={400}
                />
            </h1> 
            <p className='text-center mt-5 font-semibold text-gray-600 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>avoid the threats waiting for you on the Internet, be less noticeable.</p>
            <button className='mt-5 border border-blue-400 rounded-xl p-3 font-semibold text-xl sm:text-2xl md:text-3xl bg-blue-400 shadow-lg shadow-blue-700'>Download</button>
             </div>
        </div>
    )
}

export default Header;