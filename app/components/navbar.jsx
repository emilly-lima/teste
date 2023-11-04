import React from "react"
import Search from "@/app/components/search";

const Navbar = () => {
    return (
        <div className="bg-slate-900 fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <ol>
                    <li>
                        <h1 className="text-white text-3xl">oi</h1>
                    </li>
                </ol>
                <ol>
                <li>
                    <Search />
                </li>
                </ol>
                <ol>
                    <li>
                        <button className="rounded-full bg-white pr-4 pl-4 pt-2 pb-2 text-xl text-">
                            ?
                        </button>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Navbar