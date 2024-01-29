import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 hover:underline" aria-current="page">News &amp; Events</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline">Meetings &amp; Agendas</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="bg-primary border-gray-800 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo-cpa-white.png" className="h-8" alt="CPA Logo" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">Clean Power Alliance</span> */}
                </a>
                    <Link href="/" className="text-white font-bold mr-4">
                    Residential Customers
                    </Link>
                    <Link href="/about" className="text-white font-thin mr-4">
                    Commercial Customers
                    </Link>
                    <Link href="/blog" className="text-white font-thin mr-4">
                    Why Clean Energy
                    </Link>
                    <Link href="/blog" className="text-white font-thin mr-4">
                    Programs &amp; Assistance
                    </Link>
                    <Link href="/blog" className="text-white font-thin mr-4">
                    Work With Us
                    </Link>
                    <Link href="/blog" className="text-white font-thin mr-4">
                    About Us
                    </Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;