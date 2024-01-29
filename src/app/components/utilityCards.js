import Image from "next/image";

export default function UtilityCards() {
    return (
        <div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10 bg-[url('/geometric-leaves.png')]">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-usp2 text-white shadow-lg"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Contact Us</p>
                <p className="mt-2 text-sm text-slate-500">Bacon ipsum dolor amet laboris ham mollit, cupim pork laborum brisket. Chuck excepteur biltong, do sausage esse ribeye ullamco dolor chicken hamburger pork belly.</p>
            </div>

            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-usp3 text-white shadow-lg"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Email Us</p>
                <p className="mt-2 text-sm text-slate-500">Bacon ipsum dolor amet laboris ham mollit, cupim pork laborum brisket. Chuck excepteur biltong, do sausage esse ribeye ullamco dolor chicken hamburger pork belly.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-usp4 text-white shadow-lg"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Outage Information</p>
                <p className="mt-2 text-sm text-slate-500">Bacon ipsum dolor amet laboris ham mollit, cupim pork laborum brisket. Chuck excepteur biltong, do sausage esse ribeye ullamco dolor chicken hamburger pork belly.</p>
            </div>
        </div>

        {/* <div className="w-full   bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
            <p className=" text-white"> <span className="text-4xl font-medium">Still Confused ?</span> <br/> <span className="text-lg">Book For Free Career Consultation Today ! </span></p>
            <button className="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">BOOK AN APPOINTMENT </button>
        </div> */}

    </div>
    )
}