function Navbar(){
    return (
        <>
            <div className="w-full h-20">
                <div className="flex justify-between mt-8">
                    <span className="mx-8  font-bold max-[1200px]:text-xl text-3xl ">FreeConverter<span className="text-purple-400">()</span></span>
                    <ul className="flex  max-[1200px]:text-sm max-[1200px]:mt-3 text-xl font-semibold text-gray-400 gap-7 mx-10 cursor-pointer">
                        <li>Contact</li>
                        |
                        <li>About</li>
                    </ul>
                </div>
            </div>
           

            
        </>
    )
}

export default Navbar