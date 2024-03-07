import { useState } from "react";
const Why = () =>{
    return(
        <div className="max-w-[1640px] mx-auto p-4 lg:grid lg:grid-cols-2">
                <div className="md:flex lg:mt-5 justify-center sm:flex sm:justify-center sm:items-center flex">
                <img className="rounded-full lg:h-[400px] " src="https://blog.privadovpn.com/wp-content/uploads/2022/06/download-and-login.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pl-4">
                        Why KeyVPN?
                    </h1>
                    <div className="border-l-2 pl-5 mt-5 hover:border-l-blue-800">
                        <p className='font-semibold text-xl sm:text-2xl'>Think about ur safety</p>
                        <p>Thanks to effective and modern technologies, NordVPN protects your devices against malware and unwanted third-party viewing. What level of protection are we talking about? The most powerful computer in the world would take billions of years to decrypt your data.</p>
                    </div>
                    <div  className="border-l-2 pl-5 mt-5 hover:border-l-blue-800">
                        <p className="font-semibold text-xl sm:text-2xl">Browse content without any interruptions</p>
                        <p>Whether you're replying to emails, playing games, or watching movies, NordVPN provides a direct VPN connection. No data limits, three VPN servers around the world and modern VPN protocols ensure the best online services without the hassle.</p>
                    </div>
                    <div className="border-l-2 pl-5 mt-5 hover:border-l-blue-800">
                    <p className="font-semibold text-xl sm:text-2xl">Control your private data</p>
                        <p>
                            With KeyVPN you can browse the web like no one is watching. We don't track what you do online (which has been confirmed by an independent audit). And if you need additional privacy features, you can easily double your protection by connecting to Double VPN servers. Encrypt data and change IP address twice.</p>
                    </div>
                </div> 
        </div>
    )
}

export default Why;